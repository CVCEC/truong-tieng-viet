/* Ôn tập số 7 · Bài 42–46: vần có âm cuối p, nh, ch — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 7 (42-46)”: đoàn tàu vần, từ phân loại theo bài, 16 từ luyện đọc, 6 câu, đoạn văn về Minh và 4 câu hỏi đọc hiểu.
   Đoạn văn của slide được chia thành 3 đoạn và thêm vài câu ngắn chỉ dùng vần đã học; câu hỏi trắc nghiệm do Trâu Con soạn. */
const DOC = {
  nhom: [
    { bai: 42, chu: ['ap', 'ăp', 'âp'], tu: ['ngọn tháp', 'nắp nồi', 'tập thể dục'] },
    { bai: 43, chu: ['op', 'ôp', 'ơp'], tu: ['họp lớp', 'hộp quà', 'lớp học'] },
    { bai: 44, chu: ['ep', 'êp', 'ip', 'up'], tu: ['đôi dép', 'bếp ga', 'nhịp trống', 'búp sen'] },
    { bai: 45, chu: ['anh', 'ênh', 'inh'], tu: ['quả chanh', 'dòng kênh', 'kính mắt'] },
    { bai: 46, chu: ['ach', 'êch', 'ich'], tu: ['quyển sách', 'con ếch', 'tờ lịch'] }
  ],
  y: 'Đọc rõ âm chính, âm cuối và dấu thanh của từng vần.',
  khoi: [{ tu: 'lớp học' }, { tu: 'đôi dép' }, { tu: 'búp sen' }, { tu: 'quả chanh' }, { tu: 'con ếch' }],
  tuMoi: [['ngọn tháp', 'ngôi nhà cao, nhọn ở trên'], ['nắp nồi', 'cái đậy ở trên nồi'], ['nhịp trống', 'tiếng trống đều đều'], ['búp sen', 'hoa sen chưa nở'],
    ['dòng kênh', 'đường nước nhỏ chảy qua đồng'], ['kính mắt', 'đồ đeo cho mắt nhìn rõ'], ['tờ lịch', 'tờ giấy ghi ngày tháng'], ['họp lớp', 'cả lớp ngồi lại cùng bàn bạc']],
  tuKho: ['tập thể dục', 'hộp quà', 'bếp ga', 'dòng kênh', 'quyển sách', 'tờ lịch'],
  doan: [
    { text: 'Sáng thứ Hai, Minh xem lịch rồi chuẩn bị đến lớp. Em xếp sách, kính và đôi dép mới thật gọn. Mẹ để quả chanh vào cặp cho em.',
      hoi: [{ q: 'Minh xem gì trước khi đến lớp?', dung: 'Xem lịch.', sai: ['Xem phim.', 'Xem tháp.'] },
            { q: 'Minh xếp những gì?', dung: 'Sách, kính và đôi dép mới.', sai: ['Hộp quà và bếp ga.', 'Nắp nồi và búp sen.'] }] },
    { text: 'Ở trường, cả lớp tập thể dục theo nhịp trống. Nhịp trống vang lên rộn rã. Lớp em họp dưới sân trường.',
      hoi: [{ q: 'Cả lớp tập thể dục theo gì?', dung: 'Theo nhịp trống.', sai: ['Theo tiếng ếch.', 'Theo tờ lịch.'] },
            { q: 'Lớp em họp ở đâu?', dung: 'Dưới sân trường.', sai: ['Bên dòng kênh.', 'Trên ngọn tháp.'] }] },
    { text: 'Sau giờ học, cô dẫn các bạn ra dòng kênh nhỏ. Các bạn quan sát búp sen và con ếch xanh. Con ếch ngồi cạnh dòng kênh.',
      hoi: [{ q: 'Cô dẫn các bạn đi đâu?', dung: 'Ra dòng kênh nhỏ.', sai: ['Ra chợ.', 'Lên ngọn tháp.'] },
            { q: 'Con ếch ngồi ở đâu?', dung: 'Cạnh dòng kênh.', sai: ['Trên bếp ga.', 'Trong hộp quà.'] }] }
  ],
  hieu: [
    { q: 'Đoạn văn kể về ai?', dung: 'Bạn Minh và các bạn trong lớp.', sai: ['Con ếch đi học.', 'Bé đậy nắp nồi.'] },
    { q: 'Tiếng nào có vần “anh”?', dung: 'chanh', sai: ['kênh', 'lịch'] },
    { q: 'Tiếng nào có vần “ich”?', dung: 'lịch', sai: ['sách', 'ếch'] }
  ],
  thuTu: ['Minh xem lịch rồi chuẩn bị đến lớp.', 'Cả lớp tập thể dục theo nhịp trống.', 'Cô dẫn các bạn ra dòng kênh nhỏ.', 'Các bạn quan sát búp sen và con ếch xanh.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bé|đậy|nắp nồi.', 'Minh|xếp|sách vở.', 'Bé|xem|tờ lịch.', 'Lớp em|tập|thể dục.'] },
  dien: [
    { cau: 'Ngọn ___ đứng bên hồ.', dung: 'tháp', sai: ['hộp', 'dép'] },
    { cau: 'Bé đậy ___ nồi giúp mẹ.', dung: 'nắp', sai: ['búp', 'kính'] },
    { cau: 'Con ___ ngồi cạnh dòng kênh.', dung: 'ếch', sai: ['sách', 'chanh'] },
    { cau: 'Bé xem lịch rồi xếp ___ vào cặp.', dung: 'sách', sai: ['bếp', 'tháp'] },
    { cau: 'Nhịp ___ vang lên rộn rã.', dung: 'trống', sai: ['sen', 'kênh'] }
  ],
  to: ['tháp', 'búp sen', 'con ếch'],
  noi: ['Em thấy gì trong lớp học?', 'Em đã thấy con ếch ở đâu?', 'Nói một câu có tiếng “sách”.'],
  viet: ['Ngọn tháp', 'Bé đậy nắp', 'Con ếch', 'Em xem lịch']
};
docSetup();
