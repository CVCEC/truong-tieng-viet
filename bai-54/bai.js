/* Bài 54 · Vần uôn, uông — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "luồn – luồn lách", "buông – buông tay" đổi thành "chuồn – chuồn chuồn", "chuông – quả chuông" (dễ vẽ); câu "giúp bà thu quần áo" bỏ (quần có vần chưa học); đoạn bụi chuối rút gọn; bỏ "buôn bán". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần uôn và vần uông nhé!'
});

const AM = {
  loai: 'van',
  am: ['uôn', 'uông'],
  kho: 3,
  tho: ['Ai đẻ ta?', 'Cha cùng mẹ.', 'Bồng lại bế,', 'Thương và yêu.', 'Ơn nhường bao,', 'Con phải ngẫm:',
        'Áo mặc ấm,', 'Mẹ may cho.', 'Cơm ăn no,', 'Cha kiếm hộ.', 'Cha mẹ đó,', 'Là hai thân.'],
  onCu: { chu: ['uôc', 'uôt'], tu: ['đôi guốc', 'con chuột', 'cái cuốc', 'bạch tuộc', 'rét buốt', 'tuốt lúa'] },
  khoa: [
    { am: 'uôn', dau: 'ch', tieng: 'chuồn', tu: 'chuồn chuồn' },
    { am: 'uông', dau: 'ch', tieng: 'chuông', tu: 'quả chuông' }
  ],
  bang: { uôn: ['ch', 'c', 'b', 'm'], uông: ['ch', 'l', 'v', 'b'] },
  tu: { uôn: ['cuộn chỉ', 'cuốn sổ', 'bánh cuốn'], uông: ['luống rau', 'hình vuông', 'buồng chuối'] },
  cau: ['Chuồn chuồn bay thấp thì mưa.', 'Bay cao thì nắng, bay vừa thì râm.', 'Cây chuối bên hè đã trổ buồng.']
};

amSetup();
