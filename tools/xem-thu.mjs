// Tạo bản xem thử một file duy nhất (ảnh nhúng sẵn) để gửi xem trước khi đưa lên trang chính thức.
//   node tools/build.mjs 3 && node tools/xem-thu.mjs 3 [thư-mục-ra]
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const [so, outDir = join(ROOT, 'site', 'xem-thu')] = process.argv.slice(2);
if (!so) { console.log('Cần số bài, ví dụ: node tools/xem-thu.mjs 3'); process.exit(1); }
const img = f => 'data:image/png;base64,' + readFileSync(join(ROOT, 'chung/img', f)).toString('base64');
let html = readFileSync(join(ROOT, 'site', 'bai-' + so, 'index.html'), 'utf8');
for (const f of ['trau-con.png', 'logo-chu.png']) {
  html = html.split('../chung/img/' + f).join(img(f)).split("ASSET + 'img/" + f + "'").join("'" + img(f) + "'");
}
mkdirSync(outDir, { recursive: true });
const out = join(outDir, 'bai-' + so + '-xem-thu.html');
writeFileSync(out, html);
console.log(out);
