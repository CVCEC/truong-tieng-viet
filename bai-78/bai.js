/* Bài 78 · Bàn tay cô giáo — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js, tranh ở chung/tranh.js
   Sửa so với slide: slide không có chữ bài thơ Lên Tám, dùng bài thơ ở Bài 71; từ khởi động "uốn nắn", "chăm sóc" (khó vẽ) đổi thành
   "nét chữ", "gấp giấy" (có trong bài); đáp án chọn ý do Trâu Con soạn theo bài. */
const DOC = {
  y: 'Lòng biết ơn đối với thầy cô.',
  khoi: [
    { tu: 'cô giáo' },
    { tu: 'bàn tay' },
    { tu: 'nét chữ' },
    { tu: 'gấp giấy' },
    { tu: 'vẽ tranh' }
  ],
  tuMoi: [['uốn nắn', 'sửa và hướng dẫn cho đúng'], ['dịu dàng', 'nhẹ nhàng, ân cần'], ['kiên nhẫn', 'bền lòng, không nóng vội'], ['nét chữ', 'đường viết tạo thành chữ'],
    ['chỉ bảo', 'hướng dẫn điều cần làm'], ['khích lệ', 'động viên để cố gắng'], ['biết ơn', 'nhớ và trân trọng điều tốt nhận được'], ['tiến bộ', 'học hoặc làm tốt hơn trước']],
  tuKho: ['uốn nắn', 'dịu dàng', 'kiên nhẫn', 'nét chữ', 'khích lệ', 'biết ơn'],
  doan: [
    { text: 'Bàn tay cô giáo cầm tay em nắn từng nét chữ. Khi em viết chưa đúng, cô nhẹ nhàng chỉ lại điểm đặt bút và cách nối nét.',
      hoi: [{ q: 'Cô giáo giúp bạn nhỏ luyện viết thế nào?', dung: 'Cầm tay em nắn từng nét chữ.', sai: ['Gấp giấy thành thuyền.', 'Quét sân trường.'] },
            { q: 'Khi em viết chưa đúng, cô làm gì?', dung: 'Nhẹ nhàng chỉ lại điểm đặt bút.', sai: ['Mắng em thật to.', 'Bỏ đi chỗ khác.'] }] },
    { text: 'Trong giờ thủ công, bàn tay cô gấp giấy thành bông hoa. Cô hướng dẫn từng bước, giúp các bạn còn lúng túng và khen những cố gắng nhỏ.',
      hoi: [{ q: 'Trong giờ thủ công, cô gấp giấy thành gì?', dung: 'Bông hoa.', sai: ['Con thuyền.', 'Chiếc máy bay.'] },
            { q: 'Cô khen điều gì?', dung: 'Những cố gắng nhỏ.', sai: ['Bạn nào cao nhất.', 'Bạn nào nói to nhất.'] }] },
    { text: 'Bàn tay cô không chỉ dạy chữ, dạy làm đồ vật. Bàn tay ấy còn lau nước mắt, sửa cổ áo và trao cho chúng em sự tự tin. Em luôn biết ơn cô giáo.',
      hoi: [{ q: 'Bàn tay cô còn chăm sóc học sinh ra sao?', dung: 'Lau nước mắt, sửa cổ áo.', sai: ['Lái xe, đi chợ.', 'Trồng mướp, quét sân.'] },
            { q: 'Cô trao cho học sinh điều gì?', dung: 'Sự tự tin.', sai: ['Nhiều đồ chơi.', 'Bánh kẹo.'] }] }
  ],
  hieu: [
    { q: 'Vì sao bạn nhỏ biết ơn cô?', dung: 'Vì cô dạy dỗ và chăm sóc học sinh.', sai: ['Vì cô cho nhiều quà.', 'Vì cô không giao bài.'] },
    { q: 'Bàn tay cô giáo thế nào?', dung: 'Dịu dàng, kiên nhẫn.', sai: ['Vội vàng, nóng nảy.', 'Lạnh lùng.'] },
    { q: 'Em có thể nói gì với cô giáo?', dung: 'Em cảm ơn cô ạ!', sai: ['Cô đi đi!', 'Em không muốn học.'] }
  ],
  thuTu: ['Bàn tay cô giáo cầm tay em nắn từng nét chữ.', 'Trong giờ thủ công, cô gấp giấy thành bông hoa.', 'Bàn tay cô lau nước mắt, sửa cổ áo cho chúng em.', 'Em luôn biết ơn cô giáo.'],
  cau: { mau: 'Ai (cái gì) thế nào?', nhan: ['Ai (cái gì)?', 'thế nào?'], ds: ['Bàn tay cô|dịu dàng.', 'Cô giáo|rất kiên nhẫn.', 'Nét chữ của em|ngày càng đẹp.', 'Bông hoa giấy|thật xinh.'] },
  dien: [
    { cau: 'Bàn tay cô giáo cầm tay em nắn từng ___.', dung: 'nét chữ', sai: ['quả mướp', 'viên sỏi'] },
    { cau: 'Cô nhẹ nhàng chỉ lại điểm đặt ___.', dung: 'bút', sai: ['chân', 'cặp'] },
    { cau: 'Bàn tay cô gấp giấy thành ___ hoa.', dung: 'bông', sai: ['quả', 'cây'] },
    { cau: 'Cô khen những ___ nhỏ.', dung: 'cố gắng', sai: ['lỗi sai', 'đồ chơi'] },
    { cau: 'Em luôn ___ cô giáo.', dung: 'biết ơn', sai: ['quên', 'sợ'] }
  ],
  to: ['cô giáo', 'tay', 'biết ơn'],
  noi: ['Kể một việc cô giáo đã giúp em.', 'Nói một lời cảm ơn với cô.', 'Em sẽ làm gì để thể hiện sự kính trọng?'],
  viet: ['Cô giáo của em', 'Cô thường', 'Em nhớ nhất', 'Em cảm ơn cô vì']
};
docSetup();
