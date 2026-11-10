// Mở từng bài, từng trò chơi, từng vòng; báo lỗi JavaScript và chụp màn hình khổ iPad và điện thoại.
//   node tools/build.mjs && node tests/choi-thu.mjs [số bài…]
// Cần Playwright (đã có sẵn trong môi trường Claude Code; trên máy khác: npm i -D playwright).
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium, devices } = require('playwright');
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = join(ROOT, 'site'), SHOTS = join(ROOT, 'tests/anh-chup');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.mp3': 'audio/mpeg', '.css': 'text/css' };
const server = createServer((req, res) => {
  let p = join(SITE, decodeURIComponent(req.url.split('?')[0]));
  if (p.endsWith('/')) p += 'index.html';
  if (!existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': TYPES[extname(p)] || 'application/octet-stream' }); res.end(readFileSync(p));
}).listen(0);
const base = `http://127.0.0.1:${server.address().port}`;
mkdirSync(SHOTS, { recursive: true });

const only = process.argv.slice(2).map(Number).filter(Boolean);
const lessons = readdirSync(SITE).filter(d => /^bai-\d+$/.test(d)).map(d => +d.slice(4)).filter(n => !only.length || only.includes(n)).sort((a, b) => a - b); // bài ôn tập (on-tap-N): dùng tests/choi-het.mjs
const browser = await chromium.launch();
const VIEWS = { ipad: { viewport: { width: 1024, height: 768 }, hasTouch: true }, 'dien-thoai': { ...devices['iPhone 13'], defaultBrowserType: undefined } };
let failures = 0;
for (const n of lessons) {
  for (const [vname, opts] of Object.entries(VIEWS)) {
    const { defaultBrowserType, ...ctxOpts } = opts;
    const ctx = await browser.newContext({ ...ctxOpts, deviceScaleFactor: 1 });
    await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.text()); });
    await page.goto(`${base}/bai-${n}/`);
    await page.waitForTimeout(300);
    await page.screenshot({ path: join(SHOTS, `bai-${n}-trang-chinh-${vname}.png`), fullPage: true });
    const games = await page.evaluate(() => GAME_ORDER.map(id => [id, GAMES[id].levels.length || 1]));
    const wide = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    if (wide) errors.push('trang chính bị cuộn ngang');
    const badIcon = await page.evaluate(() => [...document.querySelectorAll('.gicon')].filter(e => !e.querySelector('svg,img')).length);
    if (badIcon) errors.push(badIcon + ' thẻ trò chơi thiếu hình');
    const noPic = await page.evaluate(() => typeof AM === 'undefined' ? [] : [...AM.khoa.map(k => k.tu), ...Object.values(AM.tu).flat(), ...AM.cau, ...(AM.luat ? AM.luat.muc.map(m => m.w) : [])].filter(w => !TRANH[w]));
    if (noPic.length) errors.push('thiếu tranh: ' + noPic.join(', '));
    for (const [id, levels] of games) {
      for (let lv = 1; lv <= levels; lv++) {
        await page.goto(`${base}/bai-${n}/#${id}-${lv}`); await page.reload();
        await page.waitForTimeout(250);
        const st = await page.evaluate(() => ({ id: Runner.id, level: Runner.level, kids: document.querySelector('#stage').children.length, wide: document.documentElement.scrollWidth > innerWidth + 1 }));
        if (st.id !== id || st.level !== lv - 1) errors.push(`#${id}-${lv} mở sai: ${st.id} vòng ${st.level + 1}`);
        if (!st.kids) errors.push(`#${id}-${lv} màn chơi trống`);
        if (st.wide) errors.push(`#${id}-${lv} bị cuộn ngang`);
        await page.screenshot({ path: join(SHOTS, `bai-${n}-${id}-${lv}-${vname}.png`) });
      }
    }
    console.log(`Bài ${n} · ${vname}: ${games.length} trò chơi, ${games.reduce((a, g) => a + g[1], 0)} vòng · ${errors.length ? 'LỖI' : 'ổn'}`);
    errors.forEach(e => console.log('   ✗ ' + e));
    failures += errors.length;
    await ctx.close();
  }
}
await browser.close(); server.close();
process.exit(failures ? 1 : 0);
