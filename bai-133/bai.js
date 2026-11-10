/* Bài 133 · Phụ nữ Việt Nam — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: Ngày Phụ nữ Việt Nam 20 tháng 10; Hai Bà Trưng; phụ nữ Việt “giỏi việc nước, đảm việc nhà”.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Phụ nữ Việt Nam giỏi việc nước, đảm việc nhà.',
  khoi: [{ tu: 'nón lá' }, { tu: 'bà nội' }, { tu: 'cô giáo' }, { tu: 'bác sĩ' }, { tu: 'hoa hồng' }],
  tuMoi: [['phụ nữ', 'người lớn là nữ: bà, mẹ, cô, chị'], ['anh hùng', 'người rất dũng cảm, có công lớn'], ['đảm đang', 'giỏi lo việc nhà'], ['việc nước', 'việc chung của đất nước'],
    ['Hai Bà Trưng', 'hai chị em Trưng Trắc, Trưng Nhị đánh giặc giữ nước'], ['cưỡi voi', 'ngồi trên lưng voi mà đi'], ['tôn vinh', 'khen ngợi, đề cao'], ['kính yêu', 'kính trọng và yêu thương']],
  tuKho: ['phụ nữ', 'anh hùng', 'đảm đang', 'việc nước', 'cưỡi voi', 'kính yêu'],
  doan: [
    { text: 'Ngày 20 tháng 10 là Ngày Phụ nữ Việt Nam. Đây là ngày tôn vinh bà, mẹ, cô và các chị. Các bạn nhỏ tặng hoa và nói lời kính yêu.',
      hoi: [{ q: 'Ngày Phụ nữ Việt Nam là ngày nào?', dung: 'Ngày 20 tháng 10.', sai: ['Ngày 8 tháng 3.', 'Ngày 1 tháng 6.'] },
            { q: 'Các bạn nhỏ làm gì?', dung: 'Tặng hoa và nói lời kính yêu.', sai: ['Đi ngủ sớm.', 'Đi tắm biển.'] }] },
    { text: 'Ngày xưa, Hai Bà Trưng là hai nữ anh hùng. Hai Bà cưỡi voi ra trận, đánh đuổi giặc ngoại xâm, giữ yên đất nước. Người Việt luôn nhớ ơn Hai Bà.',
      hoi: [{ q: 'Hai Bà Trưng là ai?', dung: 'Hai nữ anh hùng đánh giặc.', sai: ['Hai cô ca sĩ.', 'Hai cô bán hàng.'] },
            { q: 'Hai Bà Trưng cưỡi con gì ra trận?', dung: 'Cưỡi voi.', sai: ['Cưỡi ngựa gỗ.', 'Cưỡi xe đạp.'] }] },
    { text: 'Ngày nay, phụ nữ Việt Nam làm bác sĩ, cô giáo, nông dân, kĩ sư. Họ giỏi việc nước, lại đảm đang việc nhà. Em kính yêu bà và mẹ của em.',
      hoi: [{ q: 'Ngày nay, phụ nữ Việt Nam làm những nghề gì?', dung: 'Bác sĩ, cô giáo, nông dân, kĩ sư.', sai: ['Chỉ ở nhà.', 'Không làm gì.'] },
            { q: '“Đảm đang việc nhà” nghĩa là gì?', dung: 'Giỏi lo việc nhà.', sai: ['Không biết làm gì.', 'Chỉ đi chơi.'] }] }
  ],
  hieu: [
    { q: 'Ngày 20 tháng 10 khác ngày 8 tháng 3 thế nào?', dung: '20 tháng 10 là Ngày Phụ nữ Việt Nam.', sai: ['Hai ngày là một.', '20 tháng 10 là Tết.'] },
    { q: 'Vì sao người Việt nhớ ơn Hai Bà Trưng?', dung: 'Vì Hai Bà đánh giặc giữ nước.', sai: ['Vì Hai Bà hát hay.', 'Vì Hai Bà giàu có.'] },
    { q: 'Em làm gì để tỏ lòng kính yêu bà, mẹ?', dung: 'Tặng hoa, giúp việc nhà.', sai: ['Đòi quà.', 'Làm bà mẹ buồn.'] }
  ],
  thuTu: ['Ngày xưa, có giặc ngoại xâm.', 'Hai Bà Trưng cưỡi voi ra trận.', 'Hai Bà đánh đuổi giặc.', 'Người Việt luôn nhớ ơn Hai Bà.'],
  cau: { mau: 'Ai thế nào?', nhan: ['Ai?', 'thế nào?'], ds: ['Hai Bà Trưng|rất dũng cảm.', 'Mẹ em|đảm đang.', 'Bà em|hiền hậu.', 'Cô giáo|tận tụy.'] },
  dien: [
    { cau: 'Ngày 20 tháng ___ là Ngày Phụ nữ Việt Nam.', dung: 'mười', sai: ['ba', 'sáu'] },
    { cau: 'Hai Bà Trưng là hai nữ anh ___.', dung: 'hùng', sai: ['hào', 'em'] },
    { cau: 'Hai Bà ___ voi ra trận.', dung: 'cưỡi', sai: ['cười', 'cưỡng'] },
    { cau: 'Phụ nữ Việt Nam giỏi việc ___, đảm việc nhà.', dung: 'nước', sai: ['trường', 'chợ'] },
    { cau: 'Em kính ___ bà và mẹ của em.', dung: 'yêu', sai: ['nể', 'sợ'] }
  ],
  to: ['phụ nữ', 'đảm đang', 'anh hùng'],
  noi: ['Ngày 20 tháng 10, em sẽ tặng gì cho bà, mẹ?', 'Em biết gì về Hai Bà Trưng?', 'Kể về một người phụ nữ em kính yêu.'],
  viet: ['Ngày 20 tháng 10 là', 'Hai Bà Trưng', 'Mẹ em', 'Em kính yêu']
};
docSetup();
