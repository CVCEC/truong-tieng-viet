/* Bài 116 · Sức khỏe — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: ăn đủ chất, uống đủ nước, ngủ đủ giấc, rửa tay, đánh răng, tập thể dục, khám bác sĩ.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Sức khỏe là vốn quý, em chăm giữ gìn mỗi ngày.',
  khoi: [{ tu: 'đánh răng' }, { tu: 'bé tắm' }, { tu: 'nhiệt kế' }, { tu: 'bác sĩ' }, { tu: 'tập bơi' }],
  tuMoi: [['sức khỏe', 'cơ thể khỏe mạnh, không ốm đau'], ['đủ chất', 'có đủ cơm, thịt, cá, rau, quả'], ['vi khuẩn', 'sinh vật rất nhỏ có thể gây bệnh'], ['xà phòng', 'đồ dùng tạo bọt để rửa sạch'],
    ['thể dục', 'tập luyện cho cơ thể khỏe'], ['ngủ đủ giấc', 'ngủ đủ thời gian cơ thể cần'], ['khám bệnh', 'bác sĩ xem mình có bệnh không'], ['vốn quý', 'thứ rất quý, cần giữ gìn']],
  tuKho: ['sức khỏe', 'đủ chất', 'vi khuẩn', 'xà phòng', 'thể dục', 'ngủ đủ giấc'],
  doan: [
    { text: 'Sức khỏe là vốn quý. Mỗi ngày em ăn đủ chất: cơm, thịt, cá, rau và quả. Em uống đủ nước và ít ăn bánh kẹo.',
      hoi: [{ q: 'Ăn đủ chất là ăn những gì?', dung: 'Cơm, thịt, cá, rau và quả.', sai: ['Chỉ ăn bánh kẹo.', 'Chỉ uống nước ngọt.'] },
            { q: 'Em ít ăn gì?', dung: 'Bánh kẹo.', sai: ['Rau xanh.', 'Trái cây.'] }] },
    { text: 'Trước khi ăn và sau khi đi vệ sinh, em rửa tay bằng xà phòng để diệt vi khuẩn. Sáng và tối, em đánh răng sạch sẽ.',
      hoi: [{ q: 'Em rửa tay bằng gì?', dung: 'Bằng xà phòng.', sai: ['Bằng nước ngọt.', 'Không rửa.'] },
            { q: 'Em đánh răng khi nào?', dung: 'Sáng và tối.', sai: ['Một tuần một lần.', 'Không bao giờ.'] }] },
    { text: 'Buổi sáng, em tập thể dục cùng bố. Buổi tối, em đi ngủ sớm để ngủ đủ giấc. Khi bị ốm, mẹ đưa em đi bác sĩ khám bệnh.',
      hoi: [{ q: 'Buổi sáng, em làm gì cùng bố?', dung: 'Tập thể dục.', sai: ['Xem ti vi.', 'Chơi điện tử.'] },
            { q: 'Vì sao em đi ngủ sớm?', dung: 'Để ngủ đủ giấc.', sai: ['Để khỏi làm bài.', 'Vì sợ tối.'] }] }
  ],
  hieu: [
    { q: 'Vì sao phải rửa tay bằng xà phòng?', dung: 'Để diệt vi khuẩn, không bị ốm.', sai: ['Để tay thơm thôi.', 'Để chơi bong bóng.'] },
    { q: 'Thói quen nào không tốt cho sức khỏe?', dung: 'Thức khuya chơi điện tử.', sai: ['Tập thể dục.', 'Ăn nhiều rau.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Ăn đủ chất, giữ vệ sinh, tập thể dục, ngủ đủ.', sai: ['Ăn thật nhiều kẹo.', 'Không cần đánh răng.'] }
  ],
  thuTu: ['Em thức dậy sớm.', 'Em đánh răng, rửa mặt.', 'Em tập thể dục cùng bố.', 'Em rửa tay rồi ăn sáng.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Em|rửa|tay bằng xà phòng.', 'Em|đánh|răng sạch sẽ.', 'Em|tập|thể dục.', 'Bác sĩ|khám|bệnh cho em.'] },
  dien: [
    { cau: 'Sức khỏe là vốn ___.', dung: 'quý', sai: ['to', 'xa'] },
    { cau: 'Mỗi ngày em ăn đủ ___.', dung: 'chất', sai: ['kẹo', 'bánh'] },
    { cau: 'Em rửa tay bằng xà ___.', dung: 'phòng', sai: ['bông', 'khăn'] },
    { cau: 'Buổi sáng, em tập thể ___ cùng bố.', dung: 'dục', sai: ['thao', 'lực'] },
    { cau: 'Em đi ngủ sớm để ngủ đủ ___.', dung: 'giấc', sai: ['giờ', 'mơ'] }
  ],
  to: ['sức khỏe', 'rửa tay', 'thể dục'],
  noi: ['Mỗi ngày, em làm gì để khỏe mạnh?', 'Em rửa tay khi nào?', 'Em thích món ăn tốt cho sức khỏe nào?'],
  viet: ['Để khỏe mạnh, em', 'Mỗi sáng, em', 'Em rửa tay khi', 'Em không']
};
docSetup();
