/* Bài 25 · Vần on, ôn, ơn — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: khóa "đón – đưa đón" đổi thành "nón – nón lá" (dễ vẽ); bỏ "khôn lớn", "lon ton"; thêm "con dê", "mẹ hôn bé", "bốn quả", "thợ sơn", "cơn mưa". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần on, ôn, ơn nhé!'
});

const AM = {
  loai: 'van',
  am: ['on', 'ôn', 'ơn'],
  kho: 13,
  tho: ['Cây và cỏ,', 'Có khác loài,', 'Trông bề ngoài,', 'Cũng dễ biết.', 'Như cây mít,', 'Có nhiều cành.',
        'Lúa, cỏ gianh,', 'Có từng đốt,', 'Còn trong ruột,', 'Lại khác nhau.', 'Vài năm sau,', 'Con biết kỹ.'],
  onCu: { chu: ['an', 'ăn', 'ân'], tu: ['bạn thân', 'khăn rằn', 'quả mận', 'bàn ghế', 'nhà sàn', 'bàn chân'] },
  khoa: [
    { am: 'on', dau: 'n', tieng: 'nón', tu: 'nón lá' },
    { am: 'ôn', dau: 'm', tieng: 'môn', tu: 'thủ môn' },
    { am: 'ơn', dau: 's', tieng: 'sơn', tu: 'sơn ca' }
  ],
  bang: { on: ['c', 'đ', 'n', 'l'], ôn: ['b', 'ch', 'm', 'h'], ơn: ['s', 'l', 'h', 'tr'] },
  tu: { on: ['vỏ lon', 'ngọn cỏ', 'con dê'], ôn: ['con chồn', 'mẹ hôn bé', 'bốn quả'], ơn: ['lợn con', 'thợ sơn', 'cơn mưa'] },
  cau: ['Mẹ cho dì Ba nón lá và khăn rằn.', 'Nhà bà có bốn chú lợn con to tròn.', 'Chú Sơn đi đón bà ở nhà ga.']
};

amSetup();
