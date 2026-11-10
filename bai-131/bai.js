/* Bài 131 · Học tập — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: chăm chỉ học, chuẩn bị bài, chú ý nghe giảng, hỏi khi chưa hiểu, ôn bài, học đi đôi với hành.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Học đi đôi với hành, chăm chỉ ắt thành công.',
  khoi: [{ tu: 'bé học bài' }, { tu: 'bài tập' }, { tu: 'lớp học' }, { tu: 'hộp bút' }, { tu: 'bút chì' }],
  tuMoi: [['học tập', 'học và luyện tập'], ['nghe giảng', 'nghe thầy cô dạy bài'], ['giơ tay', 'đưa tay lên xin phát biểu'], ['thắc mắc', 'điều chưa hiểu, muốn hỏi'],
    ['ôn bài', 'học lại bài cũ'], ['thực hành', 'làm thử điều đã học'], ['kiên trì', 'bền bỉ, không bỏ dở'], ['tiến bộ', 'giỏi hơn trước']],
  tuKho: ['học tập', 'nghe giảng', 'thắc mắc', 'ôn bài', 'thực hành', 'kiên trì'],
  doan: [
    { text: 'Tối nào em cũng chuẩn bị sách vở, hộp bút cho ngày mai. Ở lớp, em ngồi ngay ngắn, chú ý nghe giảng.',
      hoi: [{ q: 'Tối nào em cũng làm gì?', dung: 'Chuẩn bị sách vở, hộp bút.', sai: ['Xem phim đến khuya.', 'Quên cặp ở trường.'] },
            { q: 'Ở lớp, em làm gì?', dung: 'Chú ý nghe giảng.', sai: ['Nói chuyện riêng.', 'Ngủ gật.'] }] },
    { text: 'Có chỗ chưa hiểu, em giơ tay hỏi cô. Cô vui vẻ giải đáp thắc mắc. Về nhà, em ôn bài và làm bài tập.',
      hoi: [{ q: 'Chưa hiểu bài, em làm gì?', dung: 'Giơ tay hỏi cô.', sai: ['Ngồi im, bỏ qua.', 'Chép bài bạn.'] },
            { q: 'Về nhà, em làm gì?', dung: 'Ôn bài và làm bài tập.', sai: ['Chơi cả buổi.', 'Đi ngủ ngay.'] }] },
    { text: 'Học xong phép cộng, em thực hành đếm tiền khi đi chợ với mẹ. Học chữ, em tập đọc truyện cho em bé nghe. Em kiên trì học tập nên ngày càng tiến bộ.',
      hoi: [{ q: 'Học xong phép cộng, em thực hành thế nào?', dung: 'Đếm tiền khi đi chợ với mẹ.', sai: ['Vẽ tranh.', 'Đá bóng.'] },
            { q: 'Vì sao em ngày càng tiến bộ?', dung: 'Vì em kiên trì.', sai: ['Vì em may mắn.', 'Vì em lười.'] }] }
  ],
  hieu: [
    { q: '“Học đi đôi với hành” nghĩa là gì?', dung: 'Học xong thì thực hành điều đã học.', sai: ['Vừa học vừa đi bộ.', 'Chỉ học, không làm.'] },
    { q: 'Khi có thắc mắc, em nên làm gì?', dung: 'Hỏi thầy cô, hỏi bạn.', sai: ['Giấu đi.', 'Bỏ học.'] },
    { q: 'Thói quen nào tốt cho việc học?', dung: 'Chuẩn bị sách vở từ tối hôm trước.', sai: ['Thức khuya chơi game.', 'Quên làm bài tập.'] }
  ],
  thuTu: ['Tối hôm trước, em chuẩn bị sách vở.', 'Ở lớp, em chú ý nghe giảng.', 'Chưa hiểu, em giơ tay hỏi cô.', 'Về nhà, em ôn bài và làm bài tập.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Em|chuẩn bị|sách vở.', 'Em|giơ tay|hỏi cô.', 'Cô|giải đáp|thắc mắc.', 'Em|làm|bài tập.'] },
  dien: [
    { cau: 'Ở lớp, em chú ý nghe ___.', dung: 'giảng', sai: ['nhạc', 'chuyện'] },
    { cau: 'Có chỗ chưa hiểu, em ___ tay hỏi cô.', dung: 'giơ', sai: ['vẫy', 'giấu'] },
    { cau: 'Về nhà, em ___ bài và làm bài tập.', dung: 'ôn', sai: ['quên', 'xé'] },
    { cau: 'Học đi đôi với ___.', dung: 'hành', sai: ['chơi', 'ngủ'] },
    { cau: 'Em kiên trì nên ngày càng tiến ___.', dung: 'bộ', sai: ['lên', 'xa'] }
  ],
  to: ['học tập', 'ôn bài', 'chăm chỉ'],
  noi: ['Em học tốt môn nào nhất?', 'Khi chưa hiểu bài, em làm gì?', 'Em đã thực hành điều gì đã học?'],
  viet: ['Mỗi tối, em', 'Ở lớp, em', 'Khi chưa hiểu, em', 'Em sẽ cố gắng']
};
docSetup();
