// Danh sách câu cho robot giọng đọc AI (giong-ai/can-doc.tsv) – mọi bài và bài ôn tập.
//   node tools/build.mjs && node tools/tao-can-doc.mjs
// Đọc mọi câu Trâu Con nói (CLIPS) của từng bài trong site/, xếp tệp theo đúng luật của tools/am-thanh.mjs:
//   câu (tên tệp + chữ) có ở từ hai bài trở lên → chung/audio/ (dùng chung); còn lại → bai-NN/audio/.
// Tệp đã tạo nhưng nằm sai chỗ (trước đây chỉ tính Bài 1–7, nay thành dùng chung) được chuyển sang chỗ đúng (git mv),
// kèm cập nhật giong-ai/kiem-tra.tsv và giong-ai/bo.txt, để robot không đọc lại và bài nào cũng tìm thấy tệp.
// Thứ tự: Bài 1, 2, … 145 rồi Ôn tập 1–12; robot đọc theo thứ tự này.
import { createRequire } from 'node:module';
import { readdirSync, existsSync, writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const so = d => +d.split('-').pop();
const dirs = readdirSync(ROOT).filter(d => /^(bai|on-tap)-\d{2,3}$/.test(d))
  .sort((a, b) => (a.startsWith('on-tap') - b.startsWith('on-tap')) || so(a) - so(b));

const browser = await chromium.launch(); const page = await browser.newPage();
const all = {};
for (const d of dirs) {
  const f = join(ROOT, 'site', d.replace(/-0*(\d+)$/, '-$1'), 'index.html');
  if (!existsSync(f)) { console.log('Bỏ qua (chưa dựng – chạy node tools/build.mjs):', d); continue; }
  await page.goto('file://' + f);
  all[d] = await page.evaluate(() => Object.keys(CLIPS).map(id => [clipFile(id), CLIPS[id], id.split(':')[0]]));
}
await browser.close();

const dem = {};
Object.values(all).forEach(l => new Set(l.map(x => x[0] + '|' + x[1])).forEach(k => { dem[k] = (dem[k] || 0) + 1; }));
// chữ cái, phụ âm ghép, vần, tên thanh, đánh vần: đọc theo âm (bờ, cờ…)
const THEO_AM = new Set(['l', 'd', 't', 'v', 'dv']);

const dong = ['tep\tchu\tnhom\tcach'], co = new Set(), chuyen = new Map();
const viTri = ten => ['chung', ...dirs].map(d => `${d}/audio/${ten}`).filter(p => existsSync(join(ROOT, p)));
for (const d of Object.keys(all)) {
  for (const [ten, chu, loai] of all[d]) {
    const tep = (dem[ten + '|' + chu] > 1 ? 'chung' : d) + '/audio/' + ten;
    if (co.has(tep)) continue;
    co.add(tep);
    dong.push([tep, chu.replace(/[\t\n]/g, ' '), d, THEO_AM.has(loai) ? 'van' : ''].join('\t'));
    if (!existsSync(join(ROOT, tep))) {
      const cu = viTri(ten).find(p => p.startsWith('chung/') || dem[ten + '|' + chu] > 1);
      if (cu && tep.startsWith('chung/')) chuyen.set(cu, tep);
    }
  }
}

// chuyển tệp đã có sang chỗ đúng
for (const [cu, moi] of chuyen) {
  mkdirSync(join(ROOT, dirname(moi)), { recursive: true });
  execFileSync('git', ['mv', '-k', cu, moi], { cwd: ROOT });
}
const doiTen = s => chuyen.get(s) || s;
const fKt = join(ROOT, 'giong-ai/kiem-tra.tsv');
if (existsSync(fKt)) {
  const l = readFileSync(fKt, 'utf8').split('\n');
  writeFileSync(fKt, l.map((x, i) => i && x ? [doiTen(x.split('\t')[0]), ...x.split('\t').slice(1)].join('\t') : x).join('\n'));
}
const fBo = join(ROOT, 'giong-ai/bo.txt');
if (existsSync(fBo)) writeFileSync(fBo, readFileSync(fBo, 'utf8').split('\n').map(x => x.trim() ? doiTen(x.trim()) : x).join('\n'));

writeFileSync(join(ROOT, 'giong-ai/can-doc.tsv'), dong.join('\n') + '\n');
const thieu = dong.slice(1).filter(x => !existsSync(join(ROOT, x.split('\t')[0]))).length;
console.log(`giong-ai/can-doc.tsv: ${dong.length - 1} câu trong ${Object.keys(all).length} bài · đã có tệp ${dong.length - 1 - thieu} · còn thiếu ${thieu} · chuyển chỗ ${chuyen.size} tệp`);
