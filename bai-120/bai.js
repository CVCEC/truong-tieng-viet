/* Bài 120 · Màu sắc — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: tên màu, màu của vật quen thuộc, pha màu, cầu vồng bảy màu.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Thế giới đẹp nhờ muôn màu sắc.',
  khoi: [{ tu: 'màu vàng' }, { tu: 'màu xanh' }, { tu: 'sáp màu' }, { tu: 'quả ớt', cau: 'Quả ớt chín màu đỏ.' },
    { tu: 'cầu vồng', do: 'Sau mưa xuất hiện / Cong cong trên trời / Bảy màu tươi đẹp / Như chiếc cầu xinh' }],
  tuMoi: [['màu sắc', 'các màu như đỏ, vàng, xanh'], ['cầu vồng', 'vòng cung nhiều màu trên trời sau mưa'], ['pha màu', 'trộn màu này với màu kia'], ['đỏ thắm', 'đỏ tươi, đậm'],
    ['xanh biếc', 'xanh trong, đẹp'], ['vàng óng', 'vàng bóng, đẹp'], ['tím biếc', 'tím đẹp, sáng'], ['rực rỡ', 'tươi sáng, nổi bật']],
  tuKho: ['màu sắc', 'cầu vồng', 'pha màu', 'đỏ thắm', 'xanh biếc', 'rực rỡ'],
  doan: [
    { text: 'Quanh em có rất nhiều màu sắc. Lá cây màu xanh. Quả chuối chín màu vàng óng. Quả ớt chín màu đỏ thắm. Bầu trời trong xanh biếc. Hoa cà tím biếc.',
      hoi: [{ q: 'Lá cây màu gì?', dung: 'Màu xanh.', sai: ['Màu đỏ.', 'Màu tím.'] },
            { q: 'Quả chuối chín màu gì?', dung: 'Màu vàng.', sai: ['Màu xanh lam.', 'Màu đen.'] }] },
    { text: 'Em lấy sáp màu và tuýp màu ra pha màu. Màu vàng pha màu xanh lam thành màu xanh lá. Màu đỏ pha màu vàng thành màu cam.',
      hoi: [{ q: 'Màu vàng pha màu xanh lam thành màu gì?', dung: 'Màu xanh lá.', sai: ['Màu tím.', 'Màu nâu.'] },
            { q: 'Màu đỏ pha màu vàng thành màu gì?', dung: 'Màu cam.', sai: ['Màu xanh.', 'Màu trắng.'] }] },
    { text: 'Sau cơn mưa, cầu vồng hiện lên. Cầu vồng có bảy màu: đỏ, cam, vàng, lục, lam, chàm, tím. Bầu trời thật rực rỡ.',
      hoi: [{ q: 'Khi nào có cầu vồng?', dung: 'Sau cơn mưa.', sai: ['Lúc nửa đêm.', 'Khi có tuyết.'] },
            { q: 'Cầu vồng có mấy màu?', dung: 'Bảy màu.', sai: ['Ba màu.', 'Mười màu.'] }] }
  ],
  hieu: [
    { q: 'Màu đầu tiên của cầu vồng là màu gì?', dung: 'Màu đỏ.', sai: ['Màu tím.', 'Màu trắng.'] },
    { q: 'Muốn có màu cam, em pha màu nào?', dung: 'Màu đỏ và màu vàng.', sai: ['Màu xanh và màu tím.', 'Màu đen và màu trắng.'] },
    { q: 'Từ nào tả màu đỏ?', dung: 'Đỏ thắm.', sai: ['Xanh biếc.', 'Vàng óng.'] }
  ],
  thuTu: ['Đỏ', 'Cam', 'Vàng', 'Lục', 'Lam'],
  cau: { mau: 'Cái gì màu gì?', nhan: ['Cái gì?', 'màu gì?'], ds: ['Lá cây|màu xanh.', 'Quả chuối chín|màu vàng.', 'Quả ớt chín|màu đỏ.', 'Hoa cà|màu tím.'] },
  dien: [
    { cau: 'Lá cây màu ___.', dung: 'xanh', sai: ['đỏ', 'tím'] },
    { cau: 'Quả ớt chín màu đỏ ___.', dung: 'thắm', sai: ['óng', 'biếc'] },
    { cau: 'Màu đỏ pha màu vàng thành màu ___.', dung: 'cam', sai: ['tím', 'nâu'] },
    { cau: 'Sau cơn mưa, cầu ___ hiện lên.', dung: 'vồng', sai: ['treo', 'tre'] },
    { cau: 'Cầu vồng có ___ màu.', dung: 'bảy', sai: ['ba', 'năm'] }
  ],
  to: ['màu sắc', 'cầu vồng', 'màu đỏ'],
  noi: ['Em thích màu gì nhất? Vì sao?', 'Kể tên những đồ vật màu đỏ quanh em.', 'Đọc bảy màu của cầu vồng.'],
  viet: ['Em thích màu', 'Lá cây màu', 'Cầu vồng có', 'Em tô']
};
docSetup();
