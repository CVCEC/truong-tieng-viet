// Tạo bai-NNN/bai.json cho bài VHTT từ tools/vh/ten-bai.tsv (chỉ khi bài đã có bai.js)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');
for (const l of readFileSync(join(ROOT, 'tools/vh/ten-bai.tsv'), 'utf8').trim().split('\n')) {
  const [so, ten] = l.split('\t'); const dir = join(ROOT, 'bai-' + so);
  if (!existsSync(join(dir, 'bai.js'))) continue;
  writeFileSync(join(dir, 'bai.json'), JSON.stringify({ so: +so, ten: ten.normalize('NFC'),
    moTa: `10 trò chơi cho Bài ${so}: đọc thơ Lên Tám, khởi động, từ mới, từ khó, đọc từng đoạn và trả lời câu hỏi, đọc hiểu, sắp xếp, luyện câu, điền từ, tô chữ; kèm phiếu bài tập về nhà.`,
    mau: 'bo-doc', heroThem: '<p class="digraph-strip" aria-label="Văn hóa truyền thống">Văn hóa truyền thống</p>' }, null, 2) + '\n');
}
