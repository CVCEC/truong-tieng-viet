/* Bài 121 · Sách — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: lợi ích của sách, thư viện, giữ gìn sách, xếp sách gọn gàng.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Sách là người bạn tốt, em đọc và giữ gìn sách.',
  khoi: [{ tu: 'chị đọc sách' }, { tu: 'truyện tranh' }, { tu: 'xếp sách' }, { tu: 'bìa vở' }, { tu: 'sách vở' }],
  tuMoi: [['thư viện', 'nơi có nhiều sách để mượn và đọc'], ['truyện tranh', 'sách kể chuyện bằng tranh'], ['kiến thức', 'những điều hiểu biết'], ['bìa sách', 'lớp ngoài cùng của quyển sách'],
    ['giữ gìn', 'bảo vệ cho bền, đẹp'], ['quăn mép', 'góc giấy bị cong, gập lại'], ['ngăn nắp', 'gọn gàng, đúng chỗ'], ['người bạn', 'người thân thiết, giúp đỡ mình']],
  tuKho: ['thư viện', 'truyện tranh', 'kiến thức', 'giữ gìn', 'quăn mép', 'ngăn nắp'],
  doan: [
    { text: 'Sách là người bạn tốt của em. Sách cho em kiến thức về cây cối, con vật và đất nước. Truyện tranh kể cho em nghe những câu chuyện hay.',
      hoi: [{ q: 'Sách là gì của em?', dung: 'Người bạn tốt.', sai: ['Đồ chơi để ném.', 'Giấy để gấp.'] },
            { q: 'Sách cho em điều gì?', dung: 'Kiến thức.', sai: ['Bánh kẹo.', 'Tiền.'] }] },
    { text: 'Chiều thứ bảy, mẹ đưa em đến thư viện. Ở thư viện, em đi nhẹ, nói khẽ. Em mượn hai quyển sách và hẹn tuần sau trả đúng hạn.',
      hoi: [{ q: 'Ở thư viện, em làm gì?', dung: 'Đi nhẹ, nói khẽ.', sai: ['Chạy nhảy.', 'Nói thật to.'] },
            { q: 'Em mượn mấy quyển sách?', dung: 'Hai quyển.', sai: ['Mười quyển.', 'Không quyển nào.'] }] },
    { text: 'Em giữ gìn sách: em bọc bìa sách cẩn thận. Em không viết, vẽ bậy vào sách, không làm quăn mép. Đọc xong, em xếp sách lên giá ngăn nắp.',
      hoi: [{ q: 'Em giữ gìn sách thế nào?', dung: 'Bọc bìa, không viết vẽ bậy.', sai: ['Xé trang sách.', 'Để sách dưới mưa.'] },
            { q: 'Đọc xong, em làm gì?', dung: 'Xếp sách lên giá ngăn nắp.', sai: ['Ném sách xuống đất.', 'Để sách trên giường.'] }] }
  ],
  hieu: [
    { q: 'Vì sao em trả sách đúng hạn?', dung: 'Để giữ lời hứa, bạn khác còn mượn.', sai: ['Vì sách xấu.', 'Vì em không thích đọc.'] },
    { q: 'Việc nào làm hỏng sách?', dung: 'Làm quăn mép sách.', sai: ['Bọc bìa sách.', 'Xếp sách lên giá.'] },
    { q: 'Bài đọc muốn nói điều gì?', dung: 'Em yêu sách và giữ gìn sách.', sai: ['Không cần đọc sách.', 'Sách chỉ để trang trí.'] }
  ],
  thuTu: ['Mẹ đưa em đến thư viện.', 'Em mượn hai quyển sách.', 'Em đọc sách ở nhà.', 'Em trả sách đúng hạn.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Em|đọc|truyện tranh.', 'Em|bọc|bìa sách.', 'Mẹ|đưa em|đến thư viện.', 'Em|xếp|sách lên giá.'] },
  dien: [
    { cau: 'Sách là người ___ tốt của em.', dung: 'bạn', sai: ['khách', 'lạ'] },
    { cau: 'Sách cho em ___ thức.', dung: 'kiến', sai: ['hiểu', 'ý'] },
    { cau: 'Mẹ đưa em đến thư ___.', dung: 'viện', sai: ['từ', 'tín'] },
    { cau: 'Em bọc ___ sách cẩn thận.', dung: 'bìa', sai: ['bút', 'bàn'] },
    { cau: 'Em xếp sách lên giá ngăn ___.', dung: 'nắp', sai: ['kéo', 'tủ'] }
  ],
  to: ['quyển sách', 'thư viện', 'đọc sách'],
  noi: ['Quyển sách em thích nhất là gì?', 'Em đã đến thư viện chưa?', 'Em giữ gìn sách thế nào?'],
  viet: ['Quyển sách em thích là', 'Sách kể về', 'Em giữ gìn sách bằng cách', 'Em sẽ']
};
docSetup();
