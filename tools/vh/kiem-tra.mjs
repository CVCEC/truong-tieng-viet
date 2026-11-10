// Kiểm tra dữ liệu DOC của các bài (đủ phần, có tranh hoặc câu đố, từ khó có trong bài, chữ NFC…)
//   node tools/vh/kiem-tra.mjs 81 82 …   (không ghi số: kiểm tra mọi bài bo-doc)
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');
const r = p => readFileSync(join(ROOT, p), 'utf8');
const stub = `const SV=(i,vb)=>'<svg>'+i+'</svg>';const TXT=()=>'';const SKIN='',HAND='',HAIR='';const FACE=()=>'';const CHEEKS='',EYES_OPEN='';const docSetup=()=>{};`;
const base = stub + r('chung/chu-viet.js').replace(/^'use strict';\n/, '') + '\n' + r('chung/tranh.js') + '\n' + r('chung/net-chu.js');
const only = process.argv.slice(2);
let bad = 0;
for (const d of readdirSync(ROOT).filter(d => /^(bai|on-tap)-\d\d+$/.test(d)).sort()) {
  const meta = JSON.parse(r(d + '/bai.json'));
  if (meta.mau !== 'bo-doc' || (only.length && !only.includes(String(meta.so)) && !only.includes(d))) continue;
  const src = r(d + '/bai.js');
  const err = [];
  if (src !== src.normalize('NFC')) err.push('chữ không phải NFC');
  let D, T, NC;
  try { const ctx = {}; vm.createContext(ctx); vm.runInContext(base + '\n' + src + '\n;this.D=DOC;this.T=TRANH;this.NC=netChu;', ctx); D = ctx.D; T = ctx.T; NC = ctx.NC; }
  catch (e) { console.log(`Bài ${meta.so}: LỖI CHẠY ${e.message}`); bad++; continue; }
  const text = D.doan.map(x => x.text).join(' ').toLowerCase();
  const eq = (n, a, m) => { if (!a || a.length !== n) err.push(`${m}: cần ${n}, có ${a ? a.length : 0}`); };
  eq(5, D.khoi, 'khoi'); eq(8, D.tuMoi, 'tuMoi'); eq(6, D.tuKho, 'tuKho'); eq(3, D.doan, 'doan'); eq(3, D.hieu, 'hieu'); if (D.noi.length < 3) err.push('noi cần ≥3'); if (D.viet.length < 4) err.push('viet cần ≥4');
  D.khoi.forEach(k => { if (!T[k.tranh || k.tu] && !k.do) err.push(`khoi "${k.tu}" không có tranh, không có câu đố`); if (k.tranh && !T[k.tranh]) err.push(`tranh "${k.tranh}" không có`); });
  const warn = [...D.tuKho, ...D.tuMoi.map(m => m[0])].filter(w => !text.includes(w.toLowerCase()));
  D.doan.forEach((x, i) => eq(2, x.hoi, 'đoạn ' + (i + 1) + ' hỏi'));
  [...D.doan.flatMap(x => x.hoi), ...D.hieu].forEach(q => { if (!q.q || !q.dung || !q.sai || q.sai.length !== 2) err.push('câu hỏi thiếu: ' + q.q); });
  if (!D.thuTu || D.thuTu.length < 4 || D.thuTu.length > 5) err.push('thuTu cần 4–5 ý');
  if (D.cau.ds.length < 3) err.push('cau.ds cần ≥3');
  if (D.cau.nhan) D.cau.ds.forEach(c => { if (c.split('|').length !== D.cau.nhan.length) err.push('câu "' + c + '" khác số phần với nhãn'); });
  if (D.dien.length < 4) err.push('dien cần ≥4');
  D.dien.forEach(x => { if ((x.cau.match(/___/g) || []).length !== 1) err.push('dien thiếu ___: ' + x.cau); if (new Set([x.dung, ...x.sai]).size !== 3) err.push('dien trùng: ' + x.cau); });
  D.to.forEach(w => { try { if (!NC(w).length) throw 0; } catch (e) { err.push('không tô được "' + w + '"'); } });
  if (D.tho) { if (D.tho.lines.length < 4 || D.tho.lines.length > 8) err.push('thơ cần 4–8 câu, có ' + D.tho.lines.length); }
  const all = JSON.stringify(D);
  if (/Khai Minh/i.test(all)) err.push('có chữ Khai Minh');
  console.log(`Bài ${meta.so}: ${err.length ? '✗ ' + err.join(' | ') : '✓'}${warn.length ? '  (từ chưa có trong đoạn đọc: ' + [...new Set(warn)].join(', ') + ')' : ''}`);
  if (err.length) bad++;
}
process.exit(bad ? 1 : 0);
