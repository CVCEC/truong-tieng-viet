// Tạo AM-THANH.md cho từng bài: liệt kê mọi câu Trâu Con nói và tên file ghi âm (kiểu Telex).
//   node tools/build.mjs && node tools/am-thanh.mjs
// File nào cũng có ở bài khác thì ghi "dùng chung": nên đặt vào chung/audio/ để mọi bài cùng dùng.
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const dirs = readdirSync(ROOT).filter(d => /^(bai|on-tap)-\d{2,3}$/.test(d)).sort();
const browser = await chromium.launch(); const page = await browser.newPage();
const all = {};
for (const d of dirs) {
  const f = join(ROOT, 'site', d.replace(/-0*(\d+)$/, '-$1'), 'index.html');
  if (!existsSync(f)) continue;
  await page.goto('file://' + f);
  all[d] = await page.evaluate(() => Object.keys(CLIPS).map(id => [clipFile(id), CLIPS[id], id.split(':')[0]]));
}
await browser.close();
const count = {}; Object.values(all).forEach(l => new Set(l.map(x => x[0] + '|' + x[1])).forEach(k => { count[k] = (count[k] || 0) + 1; }));
const GROUP = { s: 'Lời thoại', l: 'Chữ cái (đọc theo âm)', d: 'Phụ âm ghép', w: 'Tiếng và từ', p: 'Câu thơ', t: 'Tên thanh', k: 'Câu nói mẫu', m: 'Màu', n: 'Nét cơ bản' };
for (const [d, list] of Object.entries(all)) {
  const so = +d.slice(4);
  const out = [`# Danh sách âm thanh của Trâu Con · Bài ${so}`, '',
    'Tạo tự động bằng `node tools/am-thanh.mjs`. Thu âm từng dòng thành file `.mp3`, đặt **đúng tên ở cột đầu**:',
    '- dòng ghi **dùng chung** → bỏ vào `chung/audio/` (mọi bài cùng dùng, chỉ thu một lần);',
    `- các dòng khác → bỏ vào \`${d}/audio/\`.`,
    'Không cần sửa manifest.json: bước đóng gói tự liệt kê các file có trong thư mục.', '',
    'Giọng: bé trai, phát âm chuẩn, nhẹ nhàng, trầm ấm, tròn vành rõ chữ, đọc chậm rãi. Trâu Con luôn xưng “mình”, gọi học sinh là “các bạn”.', '',
    'Tên file kiểu Telex: `ă → aw`, `â → aa`, `ê → ee`, `ô → oo`, `ơ → ow`, `ư → uw`, `đ → dd`; dấu thanh ở cuối tiếng: sắc `s`, huyền `f`, hỏi `r`, ngã `x`, nặng `j`.', '',
    `Tổng cộng: **${list.length} đoạn**.`];
  for (const [k, title] of Object.entries(GROUP)) {
    const rows = list.filter(x => x[2] === k); if (!rows.length) continue;
    out.push('', `## ${title} (${rows.length})`, '', '| Tên file | Trâu Con nói | Ghi chú |', '|---|---|---|');
    rows.forEach(([f, t]) => out.push(`| \`${f}\` | ${t.replace(/\|/g, '\\|')} | ${count[f + '|' + t] > 1 ? 'dùng chung' : ''} |`));
  }
  out.push('', '---', '', 'Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026', '');
  writeFileSync(join(ROOT, d, 'AM-THANH.md'), out.join('\n'));
  console.log(`${d}/AM-THANH.md: ${list.length} đoạn`);
}
