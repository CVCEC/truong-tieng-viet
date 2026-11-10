/* Bài 126 · Mưa — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: trước cơn mưa (mây đen, gió, sấm chớp), mưa rào, mưa phùn, mưa giúp cây; an toàn khi mưa giông.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Mưa giúp cây xanh, em giữ an toàn khi trời mưa.',
  khoi: [{ tu: 'cơn mưa' }, { tu: 'mưa phùn' }, { tu: 'tia chớp' }, { tu: 'đám mây' },
    { tu: 'cái ô', do: 'Khi khép như cái gậy / Khi mở như cái nấm / Trời mưa che cho em / Khỏi ướt áo, ướt đầu' }],
  tuMoi: [['mây đen', 'mây màu xám đen, báo sắp mưa'], ['sấm', 'tiếng nổ to trên trời khi mưa giông'], ['chớp', 'tia sáng lóe trên trời'], ['mưa rào', 'mưa to, đến nhanh, tạnh nhanh'],
    ['mưa phùn', 'mưa nhỏ, hạt rất mịn'], ['áo mưa', 'áo che mưa'], ['trú mưa', 'vào chỗ có mái che khi mưa'], ['tươi tốt', 'xanh, khỏe, đẹp']],
  tuKho: ['mây đen', 'sấm', 'chớp', 'mưa rào', 'mưa phùn', 'trú mưa'],
  doan: [
    { text: 'Mây đen kéo đến. Gió thổi mạnh. Trời có sấm và chớp. Rồi mưa rào ào ào trút xuống.',
      hoi: [{ q: 'Trước khi mưa, trời có gì?', dung: 'Mây đen, gió, sấm và chớp.', sai: ['Nắng chang chang.', 'Cầu vồng.'] },
            { q: 'Mưa rào thế nào?', dung: 'Ào ào trút xuống.', sai: ['Rất nhỏ, rất mịn.', 'Không có nước.'] }] },
    { text: 'Mùa xuân ở miền Bắc hay có mưa phùn. Hạt mưa nhỏ, rất mịn. Mưa tưới cho cây cối tươi tốt, ruộng lúa thêm xanh.',
      hoi: [{ q: 'Mưa phùn thế nào?', dung: 'Hạt nhỏ, rất mịn.', sai: ['Hạt to như đá.', 'Rất nóng.'] },
            { q: 'Mưa giúp gì cho cây cối?', dung: 'Làm cây cối tươi tốt.', sai: ['Làm cây khô héo.', 'Làm cây biết đi.'] }] },
    { text: 'Đi học, em mang áo mưa hoặc cái ô. Khi có sấm chớp, em vào nhà trú mưa. Em không đứng dưới cây to và không chơi ngoài mưa.',
      hoi: [{ q: 'Đi học, em mang gì?', dung: 'Áo mưa hoặc cái ô.', sai: ['Kính bơi.', 'Quạt điện.'] },
            { q: 'Khi có sấm chớp, em làm gì?', dung: 'Vào nhà trú mưa.', sai: ['Đứng dưới cây to.', 'Chạy ra ruộng.'] }] }
  ],
  hieu: [
    { q: 'Vì sao không đứng dưới cây to khi có sấm chớp?', dung: 'Vì nguy hiểm, dễ bị sét đánh.', sai: ['Vì cây to bị ướt.', 'Vì cây to ồn ào.'] },
    { q: 'Mưa nhỏ, hạt mịn gọi là mưa gì?', dung: 'Mưa phùn.', sai: ['Mưa rào.', 'Mưa đá.'] },
    { q: 'Mưa có ích gì?', dung: 'Tưới cho cây cối, ruộng lúa.', sai: ['Không có ích gì.', 'Làm cây chết.'] }
  ],
  thuTu: ['Mây đen kéo đến.', 'Gió thổi mạnh.', 'Trời có sấm và chớp.', 'Mưa rào trút xuống.'],
  cau: { mau: 'Cái gì làm gì?', nhan: ['Cái gì?', 'làm gì?'], ds: ['Mây đen|kéo đến.', 'Gió|thổi mạnh.', 'Mưa|rơi lộp độp.', 'Cây cối|tươi tốt.'] },
  dien: [
    { cau: 'Mây ___ kéo đến.', dung: 'đen', sai: ['trắng', 'hồng'] },
    { cau: 'Trời có sấm và ___.', dung: 'chớp', sai: ['nắng', 'trăng'] },
    { cau: 'Mùa xuân ở miền Bắc hay có mưa ___.', dung: 'phùn', sai: ['rào', 'đá'] },
    { cau: 'Mưa tưới cho cây cối tươi ___.', dung: 'tốt', sai: ['khô', 'héo'] },
    { cau: 'Khi có sấm chớp, em vào nhà ___ mưa.', dung: 'trú', sai: ['tắm', 'ngắm'] }
  ],
  to: ['cơn mưa', 'mưa phùn', 'áo mưa'],
  noi: ['Trước khi mưa, trời thế nào?', 'Trời mưa, em thường làm gì?', 'Khi có sấm chớp, em cần làm gì?'],
  viet: ['Trước khi mưa', 'Mưa rơi', 'Mưa giúp', 'Khi trời mưa, em']
};
docSetup();
