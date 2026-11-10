/* Bài 144 · Đề nghị, yêu cầu, lời mời — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide (đọc được một phần: khổ 32–34); Trâu Con soạn bài luyện nói: lời đề nghị lịch sự (“Bạn làm ơn…”, “… được không ạ?”),
   lời xin phép (“Con xin phép…”), lời mời (“Mời bác vào nhà ạ!”). Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Nói lời đề nghị, lời mời nhẹ nhàng, lễ phép.',
  khoi: [{ tu: 'chào cô' }, { tu: 'thiệp mời', cau: 'Mời bạn đến dự sinh nhật.' }, { tu: 'mâm cơm', cau: 'Mời ông bà xơi cơm ạ.' }, { tu: 'gửi thư' }, { tu: 'bắt tay' }],
  tuMoi: [['đề nghị', 'nói ra mong người khác làm giúp'], ['yêu cầu', 'đòi hỏi phải làm'], ['lời mời', 'lời nói mời ai làm gì'], ['làm ơn', 'lời nhờ lịch sự'],
    ['xin phép', 'hỏi người lớn cho mình làm gì'], ['lịch sự', 'nói năng nhẹ nhàng, đúng phép'], ['nhã nhặn', 'nhẹ nhàng, dễ nghe'], ['từ chối', 'không nhận, nói không']],
  tuKho: ['đề nghị', 'yêu cầu', 'lời mời', 'xin phép', 'lịch sự', 'nhã nhặn'],
  doan: [
    { text: 'Muốn nhờ bạn, em nói lời đề nghị lịch sự: “Bạn làm ơn cho mình mượn cái bút nhé!”. Với người lớn, em nói: “Cô giảng lại giúp con được không ạ?”.',
      hoi: [{ q: 'Muốn mượn bút, em nói thế nào?', dung: '“Bạn làm ơn cho mình mượn cái bút nhé!”', sai: ['“Đưa bút đây!”', 'Tự lấy bút của bạn.'] },
            { q: 'Với người lớn, em thêm từ gì ở cuối?', dung: 'Từ “ạ”.', sai: ['Từ “hả”.', 'Không thêm gì.'] }] },
    { text: 'Muốn đi chơi, em xin phép bố mẹ: “Con xin phép bố mẹ cho con sang nhà bạn Lan ạ!”. Ở lớp, cô yêu cầu cả lớp giữ trật tự. Em nhã nhặn làm theo.',
      hoi: [{ q: 'Muốn đi chơi, em làm gì?', dung: 'Xin phép bố mẹ.', sai: ['Tự đi luôn.', 'Không nói ai.'] },
            { q: 'Cô yêu cầu cả lớp điều gì?', dung: 'Giữ trật tự.', sai: ['Hát thật to.', 'Chạy ra sân.'] }] },
    { text: 'Có khách đến nhà, em lễ phép mời: “Cháu mời bác vào nhà ạ!”. Em mời bạn: “Mời bạn đến dự sinh nhật mình nhé!”. Nói lời mời nhẹ nhàng, ai cũng vui. Nếu bận, em từ chối khéo: “Cảm ơn bạn, hôm nay mình bận rồi.”',
      hoi: [{ q: 'Có khách đến, em mời thế nào?', dung: '“Cháu mời bác vào nhà ạ!”', sai: ['“Vào đi!”', 'Đóng cửa lại.'] },
            { q: 'Em mời bạn đến dự gì?', dung: 'Dự sinh nhật.', sai: ['Đi học thêm.', 'Đi khám bệnh.'] }] }
  ],
  hieu: [
    { q: 'Câu nào là lời đề nghị lịch sự?', dung: 'Bạn làm ơn đóng cửa giúp mình nhé!', sai: ['Đóng cửa ngay!', 'Cửa kìa!'] },
    { q: 'Câu nào là lời xin phép?', dung: 'Con xin phép mẹ cho con đi chơi ạ!', sai: ['Con đi chơi đây!', 'Mẹ đi đi!'] },
    { q: 'Câu nào là lời mời?', dung: 'Mời bà uống nước ạ!', sai: ['Bà uống nước đi!', 'Nước đây!'] }
  ],
  thuTu: ['Khách đến nhà.', 'Em chào khách.', 'Em mời khách vào nhà.', 'Em mời khách uống nước.'],
  cau: { mau: 'Lời mời, lời đề nghị', ds: ['Cháu mời|bác|vào nhà ạ!', 'Bạn làm ơn|cho mình|mượn bút nhé!', 'Con xin phép|mẹ|cho con đi chơi ạ!', 'Mời bạn|đến dự|sinh nhật mình!'] },
  dien: [
    { cau: 'Bạn làm ___ cho mình mượn cái bút nhé!', dung: 'ơn', sai: ['việc', 'bài'] },
    { cau: 'Cô giảng lại giúp con được không ___?', dung: 'ạ', sai: ['hả', 'hử'] },
    { cau: 'Con xin ___ bố mẹ cho con sang nhà bạn ạ!', dung: 'phép', sai: ['tiền', 'quà'] },
    { cau: 'Cháu ___ bác vào nhà ạ!', dung: 'mời', sai: ['đuổi', 'bảo'] },
    { cau: 'Cô yêu cầu cả lớp giữ trật ___.', dung: 'tự', sai: ['tư', 'tử'] }
  ],
  to: ['lời mời', 'xin phép', 'làm ơn'],
  noi: ['Nói lời mời khách vào nhà.', 'Nói lời đề nghị bạn cho mượn đồ.', 'Nói lời xin phép bố mẹ đi chơi.'],
  viet: ['Cháu mời', 'Bạn làm ơn', 'Con xin phép', 'Mời bạn']
};
docSetup();
