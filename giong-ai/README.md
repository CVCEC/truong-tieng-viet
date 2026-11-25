# Giọng đọc AI – Tiếng Việt cơ bản và Văn hoá truyền thống (Bài 1–145, Ôn tập 1–12)

Robot trên GitHub Actions (`.github/workflows/giong-ai.yml` → `tools/giong_ai.py`) tạo giọng Trâu Con (Google Gemini, giọng **Kore**, miền Bắc) cho mọi câu Trâu Con nói trong `can-doc.tsv` (12.465 câu, 156 bài), lưu thẳng vào đúng thư mục âm thanh của kho. Cách làm giống kho vuihoctiengviet và venhaem.

- **Chạy khi nào:** mỗi ngày lúc 08:33 UTC, khi sửa `chay.txt`, hoặc bấm tay ở Actions → "Giọng đọc AI" → Run workflow.
- **Cần:** secret `GEMINI_API_KEY` (của tổ chức CVCEC hoặc của kho này).
- **Xem tiến độ:** `trang-thai.md`. Nhật ký lần chạy: `nhat-ky.txt`.
- **Nghe lại:** `kiem-tra.tsv` ghi điểm giống (0–1) giữa câu cần đọc và điều Whisper nghe được. Câu dưới 0,75 nên nghe kỹ. Với chữ cái, vần và đánh vần, Whisper hay nghe sai nên các câu này luôn cần người nghe.
- **Đọc lại một câu:** xoá tệp mp3 của câu đó; lần chạy sau robot tạo lại.
- **Không tạo một câu (để người thu tay):** ghi đường dẫn tệp (cột `tep`) vào `bo.txt`, mỗi dòng một tệp.
- **Tệp đã có không bị ghi đè**, kể cả bản thu giọng người thật đặt vào sau.
- Cột `cach` trong `can-doc.tsv`: trống = câu thường · `van` = chữ cái, vần, đánh vần (đọc theo âm) · `truyen` = kể chuyện · `nhip` / `ca-bai` = đồng dao, vè đọc theo nhịp.

## Danh sách câu (cập nhật 25-11-2026)

- Tạo lại danh sách: `node tools/build.mjs && node tools/tao-can-doc.mjs` (và `node tools/am-thanh.mjs` để tạo lại AM-THANH.md của từng bài). Câu có ở từ hai bài trở lên đặt ở `chung/audio/`, còn lại ở `bai-NN/audio/`; tệp đã tạo nằm sai chỗ được chuyển sang chỗ đúng.
- **Câu thơ "Lên Sáu", "Lên Tám" dùng giọng cô Hà**, không dùng giọng AI: 573 câu đã cắt từ bản ghi của Bài học cuộc sống (nguồn từng tệp: `tho-co-ha.tsv`); câu cô Hà chưa thu ghi ở `thu-tay.md` và `bo.txt`.
- Câu cần thu tay: `thu-tay.md`.
- Trần lượt gọi mỗi ngày: `TOI_DA_LUOT` trong `chay.txt` (mã API dùng chung khoảng 100 lượt/ngày cho mọi góc). Với khoảng 11.700 câu còn thiếu, robot cần nhiều tháng; nâng hạn mức mã API (gói trả phí) thì nhanh hơn nhiều.
