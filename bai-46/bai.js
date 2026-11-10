/* Bài 46 · Vần ach, êch, ich — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "mách – mách bảo" đổi thành "sách – sách vở", "chệch – chệch hướng" đổi thành "hếch – mũi hếch" (dễ vẽ, hướng có vần chưa học); đoạn xúc xích rút gọn (bỏ "xong", "đặt", "thức ăn", "đĩa"); đoạn Cô Tô rút gọn (bỏ "vịnh", "nằm", "quanh", "nhiều", "tốc", "hoặc"); thêm "sạch sẽ", "ếch con". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần ach, êch, ich nhé!'
});

const AM = {
  loai: 'van',
  am: ['ach', 'êch', 'ich'],
  kho: 11,
  tho: ['Dạy con biết,', 'Phép vệ sinh:', 'Ăn quả xanh,', 'Khó tiêu hoá.', 'Uống nước lã,', 'Có nhiều sâu.',
        'Áo mặc lâu,', 'Sinh ghẻ lở.', 'Mặt không rửa,', 'Sinh u mê.', 'Đang mùa hè,', 'Càng phải giữ.'],
  onCu: { chu: ['anh', 'ênh', 'inh'], tu: ['quả chanh', 'cái kính', 'màu xanh', 'bập bênh', 'gia đình', 'học sinh'] },
  khoa: [
    { am: 'ach', dau: 's', tieng: 'sách', tu: 'sách vở' },
    { am: 'êch', dau: 'h', tieng: 'hếch', tu: 'mũi hếch' },
    { am: 'ich', dau: 'l', tieng: 'lịch', tu: 'tờ lịch' }
  ],
  bang: { ach: ['s', 'kh', 'g', 'b'], êch: ['h', 'l', 'ch', 'k'], ich: ['l', 'x', 'ph', 'ch'] },
  tu: { ach: ['xe khách', 'gạch ngói', 'sạch sẽ'], êch: ['con ếch', 'ếch con', 'chênh lệch'], ich: ['xúc xích', 'cái phích', 'chim chích'] },
  cau: ['Mẹ mua xúc xích cho bé.', 'Bé giúp mẹ lau bàn sạch sẽ.', 'Du khách đi tàu gỗ ra đảo Cô Tô.']
};

amSetup();
