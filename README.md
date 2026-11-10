# Trường Tiếng Việt Của Em · 145 bài học và 12 bài ôn tập

Trò chơi tương tác cho từng bài học tiếng Việt, dẫn dắt bởi Trâu Con. Đăng tại **https://baihoc.cvcec.org/** (mỗi bài ở `/bai-N/`, bài ôn tập ở `/on-tap-N/`).

## Cấu trúc

```
chung/                 PHẦN CHUNG — sửa một lần, cả 70 bài cùng được cập nhật
  khung.html           khung trang: logo, trang chính, màn chơi, màn hoàn thành, dòng bản quyền
  giao-dien.css        bảng màu, phông chữ, nút, Trâu Con, thẻ chữ, vùng thả, màn hình hẹp
  chu-viet.js          chuẩn chữ tiếng Việt: NFC/NFD, bỏ thanh, tách thanh, đặt dấu, phân tích tiếng
  dong-co.js           giọng Trâu Con, âm hiệu, kéo – thả, điều khiển trò chơi, trang chính, #g1-2
  img/                 ảnh gốc Trâu Con và logo chữ (không vẽ lại, không kéo giãn)
  audio/               file ghi âm dùng chung cho mọi bài (lời khen, chữ cái, thanh…)
  mau/bo-am.*          bộ trò chơi chung cho bài âm, vần (Bài 3–70)
  mau/bo-doc.*         bộ trò chơi chung cho bài tập đọc (71–80), văn hóa truyền thống (81–145) và bài ôn tập
  mau/phieu-*.html/js  phiếu bài tập về nhà dựng tự động
bai-01/ … bai-145/     PHẦN RIÊNG của từng bài
on-tap-01/ … on-tap-12/  12 bài ôn tập (bai.json có "on": số ôn tập, "so": bài cuối được ôn + 0.5; DOC.nhom = các ga âm/vần)
  bai.json             số bài, tên bài, mô tả, phần thêm ở trang chính
  bai.js               dữ liệu bài học, lời thoại riêng, tranh, các trò chơi
  bai.css              giao diện riêng của các trò chơi trong bài
  audio/               file ghi âm riêng của bài
  AM-THANH.md          danh sách câu Trâu Con nói (tạo tự động)
tools/build.mjs        đóng gói → site/bai-N/index.html (một file duy nhất cho mỗi bài) + site/index.html (mục lục)
tools/am-thanh.mjs     tạo AM-THANH.md cho từng bài
tests/                 kiểm thử chuẩn chữ + mở thử mọi trò chơi, mọi vòng, chụp màn hình iPad và điện thoại
```

## Lệnh

| Việc | Lệnh |
|---|---|
| Đóng gói mọi bài vào `site/` | `node tools/build.mjs` |
| Chỉ đóng gói Bài 3 / Ôn tập 7 | `node tools/build.mjs 3` / `node tools/build.mjs on-tap-7` |
| Tự chơi hết mọi vòng | `node tests/choi-het.mjs 3 on-tap-7` |
| Kiểm thử chuẩn chữ | `node --test tests/chu-viet.test.mjs` |
| Mở thử mọi trò chơi, mọi vòng, chụp màn hình | `node tests/choi-thu.mjs` (cần Playwright) |
| Cập nhật AM-THANH.md | `node tools/am-thanh.mjs` |

Không cần cài thư viện nào để đóng gói (chỉ cần Node 18+). Thư mục `site/` là thứ đưa lên tên miền.

## Quy ước chung cho mọi bài

- Mở thẳng trò chơi: `#g1`, `#g2`…; mở vòng (đếm từ 1): `#g4-3` là vòng 3 của trò chơi 4.
- Điểm sao lưu trên máy theo từng bài (`ttvce-bN-stars`).
- File ghi âm: bỏ `.mp3` vào `chung/audio/` hoặc `bai-NN/audio/`, đặt đúng tên trong AM-THANH.md. Bước đóng gói tự tạo `manifest.json`. File của bài được ưu tiên hơn file dùng chung cùng tên.
- Thêm bài mới: chép `bai-02/` thành `bai-NN/`, sửa `bai.json` và `bai.js`. Chỉ thêm vào `chung/` những gì mọi bài đều cần.

---

Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026

## Đăng web
GitHub Pages, *Settings → Pages → Source* phải là **GitHub Actions** (không phải "Deploy from a branch", nếu không GitHub sẽ đăng README đè lên bài học). Workflow `.github/workflows/dang-web.yml` chạy mỗi lần đẩy lên `main` và mỗi giờ (để video mới trên Cloudflare R2 tự hiện).
