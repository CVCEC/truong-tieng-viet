/* Bài 79 · Em về ngôi trường em — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js, tranh ở chung/tranh.js
   Sửa so với slide: slide không có chữ bài thơ Lên Tám, dùng bài thơ ở Bài 71; từ khởi động "lá cờ" đổi thành "cái trống" (tranh không vẽ cờ,
   giữ nguyên câu chữ trong bài đọc); đáp án chọn ý do Trâu Con soạn theo bài. */
const DOC = {
  y: 'Niềm vui học tập và tình yêu mái trường.',
  khoi: [
    { tu: 'cổng trường' },
    { tu: 'sân trường' },
    { tu: 'lớp học' },
    { tu: 'cái trống' },
    { tu: 'bạn bè' }
  ],
  tuMoi: [['rợp bóng', 'có nhiều bóng mát che phủ'], ['nhộn nhịp', 'đông vui, nhiều hoạt động'], ['vang lên', 'âm thanh nghe rõ và lan xa'], ['thân quen', 'gần gũi vì đã biết lâu'],
    ['hàng cây', 'nhiều cây trồng thành hàng'], ['chào đón', 'vui vẻ đón người đến'], ['gắn bó', 'có tình cảm sâu đậm'], ['tự hào', 'vui và quý trọng']],
  tuKho: ['rợp bóng', 'nhộn nhịp', 'vang lên', 'thân quen', 'chào đón', 'gắn bó'],
  doan: [
    { text: 'Sáng đầu tuần, em bước qua cổng trường trong tiếng chim ríu rít. Lá cờ đỏ bay trên nền trời xanh. Sân trường rợp bóng cây và nhộn nhịp tiếng bạn bè chào nhau.',
      hoi: [{ q: 'Bạn nhỏ bước qua cổng trường lúc nào?', dung: 'Sáng đầu tuần.', sai: ['Buổi tối.', 'Chiều chủ nhật.'] },
            { q: 'Sân trường thế nào?', dung: 'Rợp bóng cây và nhộn nhịp.', sai: ['Vắng vẻ, không có ai.', 'Đầy nước mưa.'] }] },
    { text: 'Lớp học của em có cửa sổ nhìn ra vườn hoa. Trên bảng, cô đã viết lời chào. Tiếng trống vang lên, chúng em ngồi ngay ngắn và bắt đầu bài học mới.',
      hoi: [{ q: 'Cửa sổ lớp học nhìn ra đâu?', dung: 'Vườn hoa.', sai: ['Bờ biển.', 'Cánh đồng.'] },
            { q: 'Tiếng trống báo hiệu điều gì?', dung: 'Bắt đầu bài học mới.', sai: ['Hết giờ học, đi về.', 'Giờ ăn trưa.'] }] },
    { text: 'Mỗi ngày ở trường, em được học điều hay, chơi cùng bạn và nhận sự chỉ bảo của thầy cô. Ngôi trường thân quen giúp em lớn lên. Em luôn yêu và tự hào về trường mình.',
      hoi: [{ q: 'Ở trường, bạn nhỏ được làm gì?', dung: 'Học điều hay, chơi cùng bạn.', sai: ['Ngủ cả ngày.', 'Chỉ ngồi chơi.'] },
            { q: 'Bạn nhỏ cảm thấy thế nào về trường?', dung: 'Yêu và tự hào về trường mình.', sai: ['Buồn và sợ đến trường.', 'Không thích trường.'] }] }
  ],
  hieu: [
    { q: 'Bạn nhỏ nhận được những gì ở trường?', dung: 'Điều hay, bạn bè và sự chỉ bảo của thầy cô.', sai: ['Nhiều tiền và đồ chơi.', 'Không có gì cả.'] },
    { q: 'Trên bảng, cô đã viết gì?', dung: 'Lời chào.', sai: ['Một bài toán.', 'Tên bạn nhỏ.'] },
    { q: 'Vì sao bạn nhỏ yêu ngôi trường?', dung: 'Vì ngôi trường giúp em lớn lên.', sai: ['Vì trường ở gần chợ.', 'Vì trường có nhiều xe.'] }
  ],
  thuTu: ['Sáng đầu tuần, em bước qua cổng trường.', 'Sân trường nhộn nhịp tiếng bạn bè chào nhau.', 'Tiếng trống vang lên, chúng em ngồi ngay ngắn.', 'Chúng em bắt đầu bài học mới.'],
  cau: { mau: 'Ai (cái gì) thế nào?', nhan: ['Cái gì?', 'thế nào?'], ds: ['Sân trường|rợp bóng cây.', 'Tiếng chim|ríu rít.', 'Ngôi trường|thân quen.', 'Bầu trời|xanh.'] },
  dien: [
    { cau: 'Em bước qua cổng trường trong tiếng chim ___.', dung: 'ríu rít', sai: ['ầm ầm', 'leng keng'] },
    { cau: 'Sân trường ___ bóng cây.', dung: 'rợp', sai: ['vắng', 'khô'] },
    { cau: 'Lớp học của em có cửa sổ nhìn ra ___ hoa.', dung: 'vườn', sai: ['bờ', 'chợ'] },
    { cau: 'Tiếng ___ vang lên, chúng em ngồi ngay ngắn.', dung: 'trống', sai: ['mèo', 'xe'] },
    { cau: 'Em luôn yêu và ___ về trường mình.', dung: 'tự hào', sai: ['buồn', 'sợ'] }
  ],
  to: ['trường', 'bạn bè', 'lớp'],
  noi: ['Giới thiệu ngôi trường của em.', 'Nói về một nơi em thích trong trường.', 'Kể một kỉ niệm với thầy cô hoặc bạn bè.'],
  viet: ['Trường em tên là', 'Sân trường', 'Em thích nhất', 'Em yêu trường vì']
};
docSetup();
