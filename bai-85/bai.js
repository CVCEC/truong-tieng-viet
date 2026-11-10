/* Bài 85 · Ngày của Cha — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: Ngày của Cha là Chủ nhật tuần thứ ba tháng Sáu; bài thơ “Quà của bố” và 5 câu hỏi, đáp án lấy theo slide.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Bố yêu em, em ngoan để bố vui lòng.',
  khoi: [{ tu: 'bố đi làm' }, { tu: 'hải quân' }, { tu: 'biển đảo' }, { tu: 'bố bế bé' }, { tu: 'thiệp mời', cau: 'Em làm thiệp tặng bố.' }],
  tuMoi: [['bộ đội', 'người lính bảo vệ đất nước'], ['đảo xa', 'đảo ở giữa biển, xa đất liền'], ['về phép', 'được nghỉ để về thăm nhà'], ['nghìn', 'số rất nhiều'],
    ['vững vàng', 'chắc chắn, không lung lay'], ['hi sinh', 'chịu vất vả vì người khác'], ['trụ cột', 'người chống đỡ, lo cho cả nhà'], ['yên tâm', 'không lo lắng']],
  tuKho: ['bộ đội', 'đảo xa', 'về phép', 'vững vàng', 'hi sinh', 'trụ cột'],
  doan: [
    { text: 'Ngày của Cha là Chủ nhật tuần thứ ba của tháng Sáu. Đây là dịp các con cảm ơn bố. Bố là trụ cột, lặng lẽ hi sinh cho cả nhà.',
      hoi: [{ q: 'Ngày của Cha là ngày nào?', dung: 'Chủ nhật tuần thứ ba tháng Sáu.', sai: ['Ngày 20 tháng 11.', 'Mùng một Tết.'] },
            { q: 'Ngày của Cha là dịp để làm gì?', dung: 'Để các con cảm ơn bố.', sai: ['Để đi xem xiếc.', 'Để nghỉ học.'] }] },
    { text: 'Trong bài thơ “Quà của bố”, bố em là bộ đội ở tận vùng đảo xa. Bố chưa lần nào về phép mà luôn luôn có quà.',
      hoi: [{ q: 'Bố của em bé làm nghề gì?', dung: 'Bộ đội hải quân.', sai: ['Bác sĩ.', 'Thợ xây.'] },
            { q: 'Bố ở đâu?', dung: 'Ở vùng đảo xa.', sai: ['Ở ngay cạnh nhà.', 'Ở trong rừng.'] }] },
    { text: 'Bố gửi nghìn cái nhớ, nghìn cái thương, nghìn lời chúc và nghìn cái hôn. Bố cho quà nhiều vì em rất ngoan. Em ngoan nên bố yên tâm, tay súng luôn vững vàng.',
      hoi: [{ q: 'Bố gửi cho em món quà gì?', dung: 'Cái nhớ, cái thương, lời chúc, cái hôn.', sai: ['Xe đạp mới.', 'Bánh kẹo.'] },
            { q: 'Vì sao bố cho quà nhiều thế?', dung: 'Vì em rất ngoan.', sai: ['Vì bố nhiều tiền.', 'Vì em đòi quà.'] }] }
  ],
  hieu: [
    { q: '“Tay súng luôn vững vàng” nghĩa là gì?', dung: 'Em ngoan nên bố yên tâm làm việc.', sai: ['Bố thích chơi súng.', 'Bố rất khỏe.'] },
    { q: 'Em bé yêu bố thế nào?', dung: 'Em bé rất yêu bố.', sai: ['Em bé không nhớ bố.', 'Em bé giận bố.'] },
    { q: 'Em có thể làm gì vào Ngày của Cha?', dung: 'Làm thiệp và nói “Con yêu bố”.', sai: ['Không nói gì cả.', 'Đòi bố mua đồ chơi.'] }
  ],
  thuTu: ['Bố em là bộ đội ở đảo xa.', 'Bố chưa lần nào về phép.', 'Bố gửi nghìn cái nhớ, nghìn cái thương.', 'Em ngoan nên bố yên tâm.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bố|gửi|lời chúc.', 'Em|làm|thiệp tặng bố.', 'Bố|bảo vệ|biển đảo.', 'Em|ôm|bố thật chặt.'] },
  dien: [
    { cau: 'Bố em là ___ ở tận vùng đảo xa.', dung: 'bộ đội', sai: ['bác sĩ', 'ca sĩ'] },
    { cau: 'Chưa lần nào về ___ mà luôn luôn có quà.', dung: 'phép', sai: ['quê', 'chợ'] },
    { cau: 'Bố gửi nghìn cái ___.', dung: 'nhớ', sai: ['bánh', 'kẹo'] },
    { cau: 'Bố cho quà nhiều thế vì biết em rất ___.', dung: 'ngoan', sai: ['buồn', 'xa'] },
    { cau: 'Tay súng luôn ___ vàng.', dung: 'vững', sai: ['màu', 'lá'] }
  ],
  to: ['bố', 'bộ đội', 'yêu bố'],
  noi: ['Kể về bố của em cho các bạn nghe.', 'Bố thường làm gì cho em?', 'Em sẽ tặng bố món quà gì?'],
  viet: ['Bố của em', 'Bố thường', 'Em yêu bố vì', 'Ngày của Cha, em sẽ']
};
docSetup();
