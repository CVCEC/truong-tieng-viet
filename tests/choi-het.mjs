// Tự chơi hết mọi vòng của bộ trò chơi bài âm, vần (mau "bo-am") và tập đọc (mau "bo-doc") cho tới màn "Các bạn giỏi quá!".
//   node tools/build.mjs 3 && node tests/choi-het.mjs 3 [4 5 …]
// Cách chơi: thử lần lượt từng lựa chọn / từng chỗ đặt như một bạn nhỏ chạm thử, rồi tô chữ theo đúng nét.
// Không có giọng đọc trong lúc thử và mọi khoảng chờ được rút ngắn 10 lần để chạy nhanh.
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = join(ROOT, 'site');
const TYPES = { '.html': 'text/html; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.mp3': 'audio/mpeg' };
const server = createServer((req, res) => {
  let p = join(SITE, decodeURIComponent(req.url.split('?')[0])); if (p.endsWith('/')) p += 'index.html';
  if (!existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': TYPES[extname(p)] || 'application/octet-stream' }); res.end(readFileSync(p));
}).listen(0);
const base = `http://127.0.0.1:${server.address().port}`;
// Số → bai-N; chữ (vd. on-tap-7) → đúng thư mục đó
const lessons = process.argv.slice(2).map(a => /^\d+$/.test(a) ? 'bai-' + a : a);
if (!lessons.length) { console.log('Cần số bài, ví dụ: node tests/choi-het.mjs 3'); process.exit(1); }

const browser = await chromium.launch();
let failures = 0;
for (const n of lessons) {
  const ctx = await browser.newContext({ viewport: { width: 1024, height: 768 }, hasTouch: true });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await ctx.addInitScript(() => {
    try { Object.defineProperty(window, 'speechSynthesis', { value: undefined }); } catch (e) {}
    const st = window.setTimeout; window.setTimeout = (f, ms, ...a) => st(f, Math.min(ms || 0, 4000) / 10, ...a);
    HTMLMediaElement.prototype.play = function () { setTimeout(() => this.onended && this.onended(), 5); return Promise.resolve(); };
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`${base}/${n}/`);
  const games = await page.evaluate(() => GAME_ORDER.map(id => [id, GAMES[id].levels.length || 1]));
  for (const [id, levels] of games.filter(g => !process.env.CHI || process.env.CHI.split(',').includes(g[0]))) {
    for (let lv = 1; lv <= levels; lv++) {
      await page.goto(`${base}/${n}/#${id}-${lv}`); await page.reload(); await page.waitForTimeout(150);
      const ok = (await page.evaluate(id => GAMES[id].icon, id)) === 'to' ? await trace(page) : await play(page);
      const fin = await page.evaluate(() => !document.querySelector('#finish').hidden && document.querySelector('#finText').textContent);
      console.log(`${n.replace('bai-', 'Bài ')} #${id}-${lv}: ${fin ? '✓ ' + fin : '✗ chưa chơi xong'}`);
      if (!fin || !ok) failures++;
    }
  }
  errors.forEach(e => { console.log('   ✗ ' + e); failures++; });
  await ctx.close();
}
await browser.close(); server.close();
process.exit(failures ? 1 : 0);

async function finished(page) { return page.evaluate(() => !document.querySelector('#finish').hidden); }

// Chạm thử: nút chọn (đúng thì có lớp "right"), hoặc chạm thẻ rồi chạm chỗ đặt (đúng thì thẻ biến mất)
async function play(page) {
  for (let step = 0; step < 400; step++) {
    if (await finished(page)) return true;
    const did = await page.evaluate(async () => {
      const S = document.querySelector('#stage'); const sleep = ms => new Promise(r => setTimeout(r, ms * 10));
      const done = S.querySelector('.relay-bar .btn:not([disabled])');
      if (done && done.textContent.includes('đọc xong')) { done.click(); return 'relay'; }
      if (S.querySelector('.relay-bar')) { await sleep(40); return 'wait'; }
      // Lật thẻ: lật từng cặp cùng data-k
      const mc = [...S.querySelectorAll('.mcard:not(.up)')];
      if (mc.length) { const k = mc[0].dataset.k; mc.filter(c => c.dataset.k === k).forEach(c => c.click()); await sleep(60); return 'flip'; }
      if (S.querySelector('.mcard')) { await sleep(40); return 'wait'; }
      const choices = [...S.querySelectorAll('.choice, .lbtn, .tcell, .fruit')].filter(b => !b.classList.contains('right'));
      if (choices.length) {
        if (S.dataset.rightSeen == S.querySelectorAll('.right').length && S.dataset.wait > 0) { S.dataset.wait--; await sleep(40); return 'wait'; }
        for (const b of choices) { b.click(); await sleep(5); if (b.classList.contains('right')) { S.dataset.rightSeen = S.querySelectorAll('.right').length; S.dataset.wait = 6; return 'choice'; } await sleep(30); }
        return 'choice-miss';
      }
      const tiles = [...S.querySelectorAll('.tile, .lchip, .tcard, .mword:not(.right)')].filter(t => t.isConnected && !t.closest('[hidden]'));
      const zones = [...S.querySelectorAll('.cslot, .sslot, .slot-line, .cres, .vow, .mpic, .ga')].filter(z => !z.classList.contains('filled') && !z.classList.contains('right') && !z.classList.contains('wait'));
      for (const t of tiles) for (const z of zones) {
        const before = S.querySelectorAll('.filled, .right').length;
        t.click(); await sleep(2); z.click(); await sleep(8);
        if (!t.isConnected || S.querySelectorAll('.filled, .right').length > before || t.closest('[hidden]')) return 'drop';
        await sleep(25); while (S.querySelector('.wrongtry')) await sleep(20);
      }
      await sleep(60); return 'wait';
    });
    if (did === 'choice-miss') await page.waitForTimeout(300);
  }
  return false;
}

// Tô chữ: đi theo đúng các điểm của nét (tính như trong bo-am.js)
async function trace(page) {
  const total = await page.evaluate(() => typeof DOC !== 'undefined' ? DOC.to.length : AM.am.length);
  for (let k = 0; k < total; k++) {
    const strokes = await page.evaluate(k => {
      const mp = document.querySelector('#measurePath'); const c = document.querySelector('#traceCanvas').getBoundingClientRect();
      const S = (typeof DOC !== 'undefined' ? netChu(DOC.to[k]) : AmLib.netOf(AM.am[k])).map(d => { mp.setAttribute('d', d); const L = mp.getTotalLength(); return Array.from({ length: 41 }, (_, i) => { const p = mp.getPointAtLength(L * i / 40); return { x: p.x, y: p.y }; }); });
      const all = S.flat(); const xs = all.map(p => p.x), ys = all.map(p => p.y);
      const b = { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(-5, ...ys), y1: Math.max(0, ...ys) };
      const ly = Math.min(c.width / (b.x1 - b.x0 + 2), c.height / (b.y1 - b.y0 + 1.4));
      const ox = c.width / 2 - ((b.x0 + b.x1) / 2) * ly, oy = c.height / 2 - ((b.y0 + b.y1) / 2) * ly;
      return S.map(s => s.map(p => ({ x: c.left + ox + p.x * ly, y: c.top + oy + p.y * ly })));
    }, k);
    for (const s of strokes) {
      await page.mouse.move(s[0].x, s[0].y); await page.mouse.down();
      for (const p of s) await page.mouse.move(p.x, p.y, { steps: 2 });
      await page.mouse.up(); await page.waitForTimeout(30);
    }
    await page.waitForTimeout(400);
    if (k < total - 1) {
      const cur = await page.evaluate(() => [...document.querySelectorAll('.schip')].findIndex(c => c.getAttribute('aria-current') === 'true'));
      if (cur === k) await page.click('.trace-actions .btn:not(.ghost)');
    }
  }
  await page.waitForTimeout(400);
  if (!(await finished(page))) await page.click('.trace-actions .btn:not(.ghost)').catch(() => {});
  await page.waitForTimeout(200);
  return page.evaluate(() => document.querySelectorAll('.schip.done').length === (typeof DOC !== 'undefined' ? DOC.to.length : AM.am.length));
}
