/* Bài 101 · Chuẩn bị đón Tết — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: ngày 23 tháng Chạp tiễn ông Công ông Táo (thả cá chép), dọn nhà, gói bánh chưng,
   mua hoa đào, hoa mai, làm mứt. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Cả nhà cùng làm, Tết thêm vui.',
  khoi: [{ tu: 'cá chép' }, { tu: 'lau nhà' }, { tu: 'bánh chưng' }, { tu: 'mứt dừa' }, { tu: 'cây nêu' }],
  tuMoi: [['tháng Chạp', 'tháng cuối cùng của năm Âm lịch'], ['ông Công ông Táo', 'các vị thần bếp trong chuyện xưa'], ['cá chép', 'loài cá thả về sông ngày 23 tháng Chạp'], ['dọn dẹp', 'lau chùi, xếp gọn nhà cửa'],
    ['bàn thờ', 'nơi thờ cúng ông bà tổ tiên'], ['gói bánh', 'dùng lá bọc gạo, đậu thành bánh'], ['hoa đào', 'hoa màu hồng nở dịp Tết ở miền Bắc'], ['hoa mai', 'hoa màu vàng nở dịp Tết ở miền Nam']],
  tuKho: ['tháng Chạp', 'cá chép', 'dọn dẹp', 'bàn thờ', 'hoa đào', 'hoa mai'],
  doan: [
    { text: 'Ngày 23 tháng Chạp, nhà em cúng tiễn ông Công ông Táo. Bố mang cá chép ra hồ thả. Từ hôm đó, cả nhà bắt đầu chuẩn bị đón Tết.',
      hoi: [{ q: 'Ngày 23 tháng Chạp, nhà em làm gì?', dung: 'Cúng tiễn ông Công ông Táo.', sai: ['Đi tắm biển.', 'Rước đèn Trung thu.'] },
            { q: 'Bố mang gì ra hồ thả?', dung: 'Cá chép.', sai: ['Con vịt.', 'Bóng bay.'] }] },
    { text: 'Cả nhà dọn dẹp nhà cửa sạch sẽ. Bố lau bàn thờ, mẹ giặt rèm cửa. Em lau bàn ghế và xếp sách vở gọn gàng.',
      hoi: [{ q: 'Bố làm gì?', dung: 'Lau bàn thờ.', sai: ['Giặt rèm cửa.', 'Xếp sách vở.'] },
            { q: 'Em giúp việc gì?', dung: 'Lau bàn ghế, xếp sách vở.', sai: ['Ngồi xem ti vi.', 'Ngủ trưa.'] }] },
    { text: 'Gần Tết, bà và mẹ gói bánh chưng, làm mứt dừa. Bố mua cành hoa đào hồng thắm. Ở miền Nam, nhà nhà chưng hoa mai vàng.',
      hoi: [{ q: 'Bà và mẹ làm gì?', dung: 'Gói bánh chưng, làm mứt dừa.', sai: ['Làm bánh trung thu.', 'Nặn người tuyết.'] },
            { q: 'Ở miền Nam, nhà nhà chưng hoa gì?', dung: 'Hoa mai vàng.', sai: ['Hoa sen.', 'Hoa phượng.'] }] }
  ],
  hieu: [
    { q: 'Vì sao cả nhà dọn dẹp trước Tết?', dung: 'Để đón năm mới sạch sẽ, tươi vui.', sai: ['Vì có khách lạ.', 'Vì nhà bị mưa dột.'] },
    { q: 'Hoa đào có màu gì?', dung: 'Màu hồng.', sai: ['Màu vàng.', 'Màu xanh.'] },
    { q: 'Em có thể giúp gì khi chuẩn bị Tết?', dung: 'Lau bàn ghế, xếp đồ gọn gàng.', sai: ['Bày đồ chơi ra khắp nhà.', 'Không làm gì.'] }
  ],
  thuTu: ['Ngày 23 tháng Chạp, bố thả cá chép.', 'Cả nhà dọn dẹp nhà cửa.', 'Bà và mẹ gói bánh chưng.', 'Bố mua cành đào.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bố|lau|bàn thờ.', 'Mẹ|giặt|rèm cửa.', 'Bà|gói|bánh chưng.', 'Em|xếp|sách vở.'] },
  dien: [
    { cau: 'Ngày 23 tháng ___, nhà em tiễn ông Công ông Táo.', dung: 'Chạp', sai: ['Giêng', 'Tám'] },
    { cau: 'Bố mang cá ___ ra hồ thả.', dung: 'chép', sai: ['rô', 'mè'] },
    { cau: 'Cả nhà dọn ___ nhà cửa sạch sẽ.', dung: 'dẹp', sai: ['đi', 'ra'] },
    { cau: 'Bà và mẹ gói bánh ___.', dung: 'chưng', sai: ['mì', 'dẻo'] },
    { cau: 'Ở miền Nam, nhà nhà chưng hoa ___ vàng.', dung: 'mai', sai: ['đào', 'sen'] }
  ],
  to: ['đón tết', 'hoa đào', 'hoa mai'],
  noi: ['Nhà em chuẩn bị Tết thế nào?', 'Em giúp bố mẹ việc gì trước Tết?', 'Em thích hoa đào hay hoa mai?'],
  viet: ['Trước Tết, nhà em', 'Em giúp', 'Bà và mẹ', 'Em thích']
};
docSetup();
