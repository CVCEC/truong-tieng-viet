// Tạo file giọng Trâu Con bằng giọng AI tiếng Việt của FPT.AI (giọng nam miền Bắc "leminh").
//   node tools/build.mjs && NODE_USE_ENV_PROXY=1 node tools/giong-ai.mjs [số bài…] [--thu]   (cần biến FPT_AI_KEY; NODE_USE_ENV_PROXY khi chạy sau proxy)
// Đọc mọi câu Trâu Con nói (CLIPS) của từng bài, gọi FPT.AI, lưu mp3 đúng tên file mà bộ máy trò chơi tìm:
//   - lời chào riêng của bài và lời thoại riêng (s:) → bai-NN/audio/
//   - mọi thứ dùng chung (chữ, thanh, tiếng, từ, câu thơ, câu, lời thoại chung) → chung/audio/
// File đã có thì bỏ qua (thu âm người thật đặt sẵn sẽ không bị ghi đè). --thu: chỉ tạo 5 file đầu để nghe thử.
import { createRequire } from 'node:module';
import { writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const KEY = process.env.FPT_AI_KEY;
const VOICE = process.env.FPT_AI_VOICE || 'leminh';
const SPEED = process.env.FPT_AI_SPEED || '-1'; // chậm hơn một chút cho trẻ nhỏ (-3 … 3)
if (!KEY) { console.log('Thiếu biến FPT_AI_KEY'); process.exit(1); }
const args = process.argv.slice(2); const thu = args.includes('--thu');
const only = args.map(Number).filter(Boolean);
const dirs = readdirSync(ROOT).filter(d => /^bai-\d{2,3}$/.test(d)).sort().filter(d => !only.length || only.includes(+d.slice(4)));

const browser = await chromium.launch(); const page = await browser.newPage();
const jobs = new Map(); // đường dẫn file → câu cần đọc
for (const d of dirs) {
  const so = +d.slice(4); const f = join(ROOT, 'site', 'bai-' + so, 'index.html');
  if (!existsSync(f)) continue;
  await page.goto('file://' + f);
  const list = await page.evaluate(() => Object.keys(CLIPS).map(id => {
    const k = id.split(':')[0], key = id.slice(2);
    const chung = k !== 's' || key in COMMON_PHRASES || key.startsWith('am-');
    return [clipFile(id), CLIPS[id], chung];
  }));
  for (const [file, text, chung] of list) {
    const out = chung ? join(ROOT, 'chung/audio', file) : join(ROOT, d, 'audio', file);
    if (!existsSync(out) && !jobs.has(out)) jobs.set(out, text);
  }
}
await browser.close();
console.log(`Cần tạo ${jobs.size} file`);

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function tts(text) {
  // FPT.AI cần ít nhất 3 ký tự: chữ và tiếng ngắn thì thêm dấu chấm
  const body = Array.from(text).length < 3 ? text + '.' : text;
  for (let tryN = 0; tryN < 4; tryN++) {
    const r = await fetch('https://api.fpt.ai/hmi/tts/v5', { method: 'POST', headers: { api_key: KEY, 'Cache-Control': 'no-cache', voice: VOICE, speed: SPEED, format: 'mp3' }, body });
    const j = await r.json().catch(() => ({}));
    if (j.error === 0 && j.async) {
      for (let k = 0; k < 30; k++) { // file sẵn sàng sau vài giây
        await sleep(1500);
        const a = await fetch(j.async);
        if (a.ok) { const buf = Buffer.from(await a.arrayBuffer()); if (buf.length > 500) return buf; }
      }
    }
    console.log('   thử lại:', j.message || r.status);
    await sleep(3000 * (tryN + 1));
  }
  throw new Error('Không tạo được: ' + text);
}
let n = 0;
for (const [out, text] of jobs) {
  if (thu && n >= 5) break;
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, await tts(text)); n++;
  console.log(`${n}/${jobs.size} ${out.replace(ROOT + '/', '')} ← ${text}`);
}
console.log('Xong. Chạy lại node tools/build.mjs để đưa file vào trang.');
