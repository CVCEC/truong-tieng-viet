/* Bài 77 · Hoa giấy — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js, tranh ở chung/tranh.js
   Sửa so với slide: slide không có chữ bài thơ Lên Tám, dùng bài thơ ở Bài 71; từ khởi động "cánh mỏng", "hồng thắm" (khó vẽ riêng) đổi thành
   "con ong", "lá khô" (có trong bài); thêm "mỏng tang" vào câu "Cánh hoa mỏng tang như giấy" cho khớp từ mới; đáp án chọn ý do Trâu Con soạn. */
const DOC = {
  y: 'Vẻ đẹp giản dị quanh ngôi nhà.',
  khoi: [
    { tu: 'hoa giấy' },
    { tu: 'cổng nhà', tranh: 'cái cổng' },
    { tu: 'con bướm' },
    { tu: 'con ong' },
    { tu: 'lá khô' }
  ],
  tuMoi: [['rực rỡ', 'sáng và nổi bật'], ['mỏng tang', 'rất mỏng'], ['chùm hoa', 'nhiều hoa mọc gần nhau'], ['leo bám', 'bám vào vật khác để vươn lên'],
    ['lay động', 'chuyển động nhẹ'], ['giản dị', 'đơn sơ nhưng đẹp'], ['điểm tô', 'làm cho đẹp hơn'], ['bền bỉ', 'chịu được khó khăn, lâu dài']],
  tuKho: ['rực rỡ', 'mỏng tang', 'chùm hoa', 'leo bám', 'lay động', 'giản dị'],
  doan: [
    { text: 'Trước cổng nhà em có một giàn hoa giấy. Thân cây nâu sẫm, nhiều cành nhỏ leo bám lên mái cổng. Mỗi sáng, từng chùm hoa hồng thắm đón nắng.',
      hoi: [{ q: 'Giàn hoa giấy mọc ở đâu?', dung: 'Trước cổng nhà.', sai: ['Bên bờ ao.', 'Trong lớp học.'] },
            { q: 'Mỗi sáng, chùm hoa màu gì đón nắng?', dung: 'Hồng thắm.', sai: ['Vàng tươi.', 'Xanh lam.'] }] },
    { text: 'Cánh hoa mỏng tang như giấy nên cây có tên là hoa giấy. Khi gió thổi, những cánh hoa khẽ lay động. Bướm vàng và ong nhỏ thường ghé thăm.',
      hoi: [{ q: 'Vì sao cây có tên là hoa giấy?', dung: 'Vì cánh hoa mỏng như giấy.', sai: ['Vì hoa làm bằng giấy.', 'Vì hoa mọc trên giấy.'] },
            { q: 'Khi gió thổi, cánh hoa thế nào?', dung: 'Khẽ lay động.', sai: ['Rơi hết xuống.', 'Đứng im.'] }] },
    { text: 'Hoa giấy không có hương thơm đậm nhưng vẫn làm cổng nhà rực rỡ. Em yêu vẻ đẹp giản dị, bền bỉ của cây và thường cùng bà nhặt lá khô quanh gốc.',
      hoi: [{ q: 'Hoa giấy có hương thơm đậm không?', dung: 'Không có hương thơm đậm.', sai: ['Có, rất thơm.', 'Thơm như hoa hồng.'] },
            { q: 'Bạn nhỏ cùng bà làm gì?', dung: 'Nhặt lá khô quanh gốc.', sai: ['Hái hết hoa.', 'Tưới nước cho mướp.'] }] }
  ],
  hieu: [
    { q: 'Những con vật nào ghé thăm hoa?', dung: 'Bướm vàng và ong nhỏ.', sai: ['Gà và vịt.', 'Cáo và quạ.'] },
    { q: 'Hoa giấy làm cổng nhà thay đổi thế nào?', dung: 'Cổng nhà rực rỡ hơn.', sai: ['Cổng nhà tối hơn.', 'Cổng nhà bị hỏng.'] },
    { q: 'Vì sao bạn nhỏ yêu hoa giấy?', dung: 'Vì vẻ đẹp giản dị, bền bỉ.', sai: ['Vì hoa rất thơm.', 'Vì hoa ăn được.'] }
  ],
  thuTu: ['Trước cổng nhà em có một giàn hoa giấy.', 'Mỗi sáng, từng chùm hoa hồng thắm đón nắng.', 'Khi gió thổi, những cánh hoa khẽ lay động.', 'Em cùng bà nhặt lá khô quanh gốc.'],
  cau: { mau: 'So sánh: … như …', nhan: ['Sự vật', 'như', 'được so sánh với'], ds: ['Cánh hoa mỏng|như|giấy.', 'Lá mướp xòe|như|những chiếc ô.', 'Chùm hoa đỏ|như|ngọn lửa.', 'Cánh bướm vàng|như|chiếc lá nhỏ.'] },
  dien: [
    { cau: 'Trước ___ nhà em có một giàn hoa giấy.', dung: 'cổng', sai: ['bếp', 'mái'] },
    { cau: 'Thân cây ___ sẫm.', dung: 'nâu', sai: ['trắng', 'tím'] },
    { cau: 'Cánh hoa mỏng tang như ___.', dung: 'giấy', sai: ['đá', 'gỗ'] },
    { cau: 'Bướm vàng và ___ nhỏ thường ghé thăm.', dung: 'ong', sai: ['cáo', 'quạ'] },
    { cau: 'Em yêu vẻ đẹp ___, bền bỉ của cây.', dung: 'giản dị', sai: ['ồn ào', 'xấu xí'] }
  ],
  to: ['hoa giấy', 'cổng', 'bướm'],
  noi: ['Tả màu sắc và hình dáng hoa giấy.', 'Em thích loài hoa nào? Vì sao?', 'Nói cách em chăm sóc cây hoa.'],
  viet: ['Loài hoa em thích là', 'Hoa có màu', 'Cánh hoa giống như', 'Em thích hoa vì']
};
docSetup();
