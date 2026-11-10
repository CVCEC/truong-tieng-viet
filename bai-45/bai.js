/* Bài 45 · Vần anh, ênh, inh — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; bỏ "thành phố", "kênh rạch", "kính râm"; câu "mẹ tặng Hải một chiếc xe đạp… phanh tay chắc chắn" viết lại (tặng, chiếc, chắc có vần chưa học); thêm "bánh mì", "cành cây", "bập bênh", "lênh đênh", "dập dềnh". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần anh, ênh, inh nhé!'
});

const AM = {
  loai: 'van',
  am: ['anh', 'ênh', 'inh'],
  kho: 10,
  tho: ['Con bé dại,', 'Mải vui chơi.', 'Muốn ra người,', 'Phải chăm học.', 'Miệng đang đọc,', 'Đừng trông ngang.',
        'Học dở dang,', 'Đừng có chán.', 'Học có bạn,', 'Con dễ hay.', 'Mến trọng thầy,', 'Học chóng biết.'],
  onCu: { chu: ['ep', 'êp', 'ip', 'up'], tu: ['đôi dép', 'đầu bếp', 'búp sen', 'cá chép', 'cơm nếp', 'búp bê'] },
  khoa: [
    { am: 'anh', dau: 'ch', tieng: 'chanh', tu: 'quả chanh' },
    { am: 'ênh', dau: 'k', tieng: 'kênh', tu: 'con kênh' },
    { am: 'inh', dau: 'k', tieng: 'kính', tu: 'cái kính' }
  ],
  bang: { anh: ['ch', 'b', 'c', 'x'], ênh: ['k', 'b', 'l', 'đ'], inh: ['k', 's', 'đ', 't'] },
  tu: { anh: ['màu xanh', 'bánh mì', 'cành cây'], ênh: ['bập bênh', 'lênh đênh', 'dập dềnh'], inh: ['gia đình', 'học sinh', 'máy vi tính'] },
  cau: ['Xe đạp của Hải có hai bánh màu xanh.', 'Sinh nhật Hải, mẹ mua cho Hải xe đạp mới.', 'Bố dạy Hải tập đạp xe.']
};

amSetup();
