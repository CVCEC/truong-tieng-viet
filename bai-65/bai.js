/* Bài 65 · Vần oăng, oac, oach — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "ngoằng – dài ngoằng" đổi thành "hoẵng – con hoẵng", "toạc – xé toạc" đổi thành "khoác – áo khoác", "kế hoạch" đổi thành "thu hoạch" (dễ vẽ); bỏ "khoác lác", "dai ngoách"; ba đoạn văn rút gọn thành ba câu (bỏ "thái độ", "lập", "rộn ràng"); thêm "nứt toác", "khoác vai", "mùa thu hoạch". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần oăng, oac, oach nhé!'
});

const AM = {
  loai: 'van',
  am: ['oăng', 'oac', 'oach'],
  kho: 14,
  tho: ['Đá bờ sông,', 'Không sống chết,', 'Không có biết,', 'Không có ăn,', 'Không người lăn,', 'Cứ nằm đây.',
        'Như đá cuội,', 'Như đá xanh,', 'Như mảnh sành,', 'Như đất thó,', 'Các vật đó,', 'Theo loài kim.'],
  onCu: { chu: ['uây', 'oang', 'uyt'], tu: ['khuấy bột', 'nước khoáng', 'xe buýt', 'hoàng hậu', 'áo choàng', 'huýt sáo'] },
  khoa: [
    { am: 'oăng', dau: 'h', tieng: 'hoẵng', tu: 'con hoẵng' },
    { am: 'oac', dau: 'kh', tieng: 'khoác', tu: 'áo khoác' },
    { am: 'oach', dau: 'h', tieng: 'hoạch', tu: 'thu hoạch' }
  ],
  bang: { oăng: ['h', 'ng', 'l', 'th'], oac: ['kh', 't', 'h', 'x'], oach: ['h', 'x', 'l', 'ng'] },
  tu: { oăng: ['dài ngoằng', 'liến thoắng', 'loằng ngoằng'], oac: ['rách toạc', 'nứt toác', 'khoác vai'], oach: ['kế hoạch', 'loạch xoạch', 'mùa thu hoạch'] },
  cau: ['Bố tặng Hà chiếc áo khoác mới.', 'Vườn vải của bà tới mùa thu hoạch.', 'Những cành cây loằng ngoằng, trĩu quả.']
};

amSetup();
