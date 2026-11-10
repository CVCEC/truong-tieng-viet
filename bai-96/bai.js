/* Bài 96 · Tết Trung thu — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: rằm tháng tám, đèn ông sao, bánh nướng bánh dẻo, múa lân, phá cỗ, chú Cuội – chị Hằng.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Trung thu là Tết đoàn viên của gia đình.',
  khoi: [{ tu: 'trăng rằm' }, { tu: 'ngôi sao' }, { tu: 'bé múa' },
    { tu: 'đèn ông sao', do: 'Năm cánh xinh xinh / Có nến lung linh / Đêm rằm tháng tám / Em rước quanh sân' },
    { tu: 'bánh nướng', do: 'Vỏ vàng thơm phức / Nhân ngọt bên trong / Tròn như mặt trăng / Có trong mâm cỗ' }],
  tuMoi: [['Trung thu', 'Tết rằm tháng tám Âm lịch'], ['rằm', 'ngày mười lăm Âm lịch, trăng tròn'], ['rước đèn', 'cầm đèn đi thành hàng'], ['đèn ông sao', 'đèn hình ngôi sao năm cánh'],
    ['múa lân', 'múa con lân theo tiếng trống'], ['phá cỗ', 'cùng nhau ăn mâm cỗ Trung thu'], ['đoàn viên', 'cả nhà sum họp'], ['chú Cuội', 'nhân vật ngồi gốc cây đa trên cung trăng']],
  tuKho: ['Trung thu', 'rước đèn', 'đèn ông sao', 'múa lân', 'phá cỗ', 'đoàn viên'],
  doan: [
    { text: 'Rằm tháng tám Âm lịch là Tết Trung thu. Đêm ấy, trăng tròn và sáng nhất năm. Đây là Tết đoàn viên, cả nhà quây quần bên nhau.',
      hoi: [{ q: 'Tết Trung thu vào ngày nào?', dung: 'Rằm tháng tám Âm lịch.', sai: ['Mùng một Tết.', 'Mùng năm tháng năm.'] },
            { q: 'Đêm Trung thu, trăng thế nào?', dung: 'Tròn và sáng nhất năm.', sai: ['Khuyết và mờ.', 'Không có trăng.'] }] },
    { text: 'Các bạn nhỏ cầm đèn ông sao đi rước đèn. Đội múa lân nhảy theo tiếng trống tùng tùng. Cả xóm vui như hội.',
      hoi: [{ q: 'Các bạn nhỏ cầm đèn gì?', dung: 'Đèn ông sao.', sai: ['Đèn pin.', 'Đèn giao thông.'] },
            { q: 'Đội múa lân nhảy theo tiếng gì?', dung: 'Tiếng trống.', sai: ['Tiếng còi xe.', 'Tiếng mưa.'] }] },
    { text: 'Mẹ bày mâm cỗ có bánh nướng, bánh dẻo và hoa quả. Cả nhà ngắm trăng rồi phá cỗ. Bà kể chuyện chú Cuội ngồi gốc cây đa.',
      hoi: [{ q: 'Mâm cỗ Trung thu có gì?', dung: 'Bánh nướng, bánh dẻo, hoa quả.', sai: ['Bánh chưng, dưa hành.', 'Bánh sinh nhật.'] },
            { q: 'Bà kể chuyện ai?', dung: 'Chú Cuội.', sai: ['Ông già Noel.', 'Cậu bé Jack.'] }] }
  ],
  hieu: [
    { q: 'Vì sao Trung thu gọi là Tết đoàn viên?', dung: 'Vì cả nhà quây quần bên nhau.', sai: ['Vì được nghỉ học.', 'Vì có nhiều đèn.'] },
    { q: 'Ai thích Tết Trung thu nhất?', dung: 'Các bạn nhỏ.', sai: ['Con cá.', 'Cái ghế.'] },
    { q: 'Đêm Trung thu, cả nhà làm gì?', dung: 'Ngắm trăng và phá cỗ.', sai: ['Gói bánh chưng.', 'Đi tắm biển.'] }
  ],
  thuTu: ['Trăng rằm lên tròn và sáng.', 'Các bạn nhỏ đi rước đèn.', 'Cả nhà ngắm trăng.', 'Cả nhà phá cỗ.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Em|rước|đèn ông sao.', 'Mẹ|bày|mâm cỗ.', 'Bà|kể|chuyện chú Cuội.', 'Đội lân|múa|theo tiếng trống.'] },
  dien: [
    { cau: 'Rằm tháng ___ Âm lịch là Tết Trung thu.', dung: 'tám', sai: ['giêng', 'năm'] },
    { cau: 'Các bạn nhỏ cầm đèn ông ___.', dung: 'sao', sai: ['trăng', 'mây'] },
    { cau: 'Đội múa ___ nhảy theo tiếng trống.', dung: 'lân', sai: ['rồng', 'gà'] },
    { cau: 'Mâm cỗ có bánh nướng, bánh ___.', dung: 'dẻo', sai: ['chưng', 'mì'] },
    { cau: 'Bà kể chuyện chú Cuội ngồi gốc cây ___.', dung: 'đa', sai: ['dừa', 'cau'] }
  ],
  to: ['trung thu', 'trăng rằm', 'rước đèn'],
  noi: ['Trung thu năm nay, em có đèn gì?', 'Em thích bánh nướng hay bánh dẻo?', 'Kể chuyện chú Cuội mà em biết.'],
  viet: ['Tết Trung thu là', 'Em cầm đèn', 'Mâm cỗ có', 'Em thích Trung thu vì']
};
docSetup();
