/* Bài 117 · Các giác quan — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: 5 giác quan (thị giác, thính giác, khứu giác, vị giác, xúc giác), câu đố mắt, tai, mũi, miệng, bàn tay,
   hội thoại quả mít (nhìn, ngửi, chạm, nếm, nghe), chuyện “Chân, Tay, Tai, Mắt, Miệng”. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Các bộ phận phải hợp tác, cũng như mọi người phải giúp đỡ nhau.',
  khoi: [
    { tu: 'đôi mắt', do: 'Cùng ngủ, cùng thức / Hai bạn xinh xinh / Nhìn rõ mọi thứ / Nhưng không thấy mình' },
    { tu: 'cái tai', do: 'Lắng nghe tiếng mẹ, tiếng cô / Âm thanh, tiếng động nhỏ, to quanh mình' },
    { tu: 'cái mũi', do: 'Nhô cao giữa mặt một mình / Hít thở thật giỏi lại tinh ngửi mùi' },
    { tu: 'cái miệng', do: 'Cái gì chúm chím đáng yêu / Thốt lời chào hỏi, nói nhiều điều hay?' },
    { tu: 'bàn tay', do: 'Có cổ mà không có đầu / Xòe như hoa nở một màu hồng tươi' }],
  tuMoi: [['giác quan', 'bộ phận giúp ta nhìn, nghe, ngửi, nếm, sờ'], ['thị giác', 'nhìn bằng mắt'], ['thính giác', 'nghe bằng tai'], ['khứu giác', 'ngửi bằng mũi'],
    ['vị giác', 'nếm bằng lưỡi'], ['xúc giác', 'cảm nhận bằng da, bằng tay'], ['hợp tác', 'cùng làm chung với nhau'], ['rã rời', 'mệt lắm, không còn sức']],
  tuKho: ['giác quan', 'thị giác', 'thính giác', 'khứu giác', 'xúc giác', 'rã rời'],
  doan: [
    { text: 'Cơ thể em có năm giác quan. Mắt để nhìn là thị giác. Tai để nghe là thính giác. Mũi để ngửi là khứu giác. Lưỡi để nếm là vị giác. Da để cảm nhận là xúc giác.',
      hoi: [{ q: 'Cơ thể em có mấy giác quan?', dung: 'Năm giác quan.', sai: ['Ba giác quan.', 'Mười giác quan.'] },
            { q: 'Mũi giúp em làm gì?', dung: 'Ngửi.', sai: ['Nghe.', 'Nhìn.'] }] },
    { text: 'Nam nhìn thấy quả mít. Nam ngửi thấy mùi thơm từ xa. Nam chạm tay vào gai mít, thấy gai mềm. Nam nếm múi mít, thấy ngọt lịm.',
      hoi: [{ q: 'Nam ngửi thấy gì?', dung: 'Mùi thơm của quả mít.', sai: ['Mùi thùng rác.', 'Mùi khói.'] },
            { q: 'Gai mít thế nào?', dung: 'Mềm.', sai: ['Rất sắc.', 'Cứng như đá.'] }] },
    { text: 'Chuyện kể: Mắt, Tai, Tay, Chân trách lão Miệng chẳng làm gì, rồi bỏ không nuôi Miệng nữa. Vài hôm sau, cả bọn mệt rã rời. Các bạn hiểu ra phải hợp tác với nhau.',
      hoi: [{ q: 'Các bạn trách ai?', dung: 'Lão Miệng.', sai: ['Bác Tai.', 'Cậu Chân.'] },
            { q: 'Khi không nuôi Miệng, cả bọn thế nào?', dung: 'Mệt rã rời.', sai: ['Vui khỏe hơn.', 'Chạy nhảy suốt ngày.'] }] }
  ],
  hieu: [
    { q: 'Lưỡi cho em biết điều gì?', dung: 'Vị ngọt, mặn, chua, đắng.', sai: ['Âm thanh to, nhỏ.', 'Màu sắc.'] },
    { q: 'Chuyện “Chân, Tay, Tai, Mắt, Miệng” dạy em điều gì?', dung: 'Phải hợp tác, giúp đỡ nhau.', sai: ['Mỗi người làm một mình.', 'Không cần ăn uống.'] },
    { q: 'Sờ vào gấu bông, em thấy thế nào?', dung: 'Mềm mại.', sai: ['Cứng và gai.', 'Rất nóng.'] }
  ],
  thuTu: ['Nam nhìn thấy quả mít.', 'Nam ngửi thấy mùi thơm.', 'Nam chạm vào gai mít.', 'Nam nếm múi mít ngọt lịm.'],
  cau: { mau: 'Em … bằng …', nhan: ['Em', 'làm gì?', 'bằng gì?'], ds: ['Em|nhìn|bằng mắt.', 'Em|nghe|bằng tai.', 'Em|ngửi|bằng mũi.', 'Em|nếm|bằng lưỡi.'] },
  dien: [
    { cau: 'Cơ thể em có năm giác ___.', dung: 'quan', sai: ['quả', 'giờ'] },
    { cau: 'Mắt để ___ là thị giác.', dung: 'nhìn', sai: ['nghe', 'nếm'] },
    { cau: 'Tai để nghe là ___ giác.', dung: 'thính', sai: ['thị', 'vị'] },
    { cau: 'Nam ___ thấy mùi thơm từ xa.', dung: 'ngửi', sai: ['nghe', 'nhìn'] },
    { cau: 'Các bạn hiểu ra phải hợp ___ với nhau.', dung: 'tác', sai: ['tình', 'lại'] }
  ],
  to: ['giác quan', 'đôi mắt', 'cái tai'],
  noi: ['Hôm nay em đã nhìn thấy, nghe thấy những gì?', 'Em thích mùi hương nào?', 'Kể lại chuyện “Chân, Tay, Tai, Mắt, Miệng”.'],
  viet: ['Em nhìn bằng', 'Em nghe bằng', 'Em thích mùi', 'Món ăn có vị ngọt là']
};
docSetup();
