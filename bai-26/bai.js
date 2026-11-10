/* Bài 26 · Vần en, ên, in, un — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: "hoa sen" → "lá sen", "ốc sên" → "con sên" (oa, oc chưa học); câu "Ỉn à ỉn ỉn…" gộp lại; thêm "chén trà", "dế mèn", "bến phà", "tin nhắn", "bé xin quà", "con giun", "bún chả". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần en, ên, in, un nhé!'
});

const AM = {
  loai: 'van',
  am: ['en', 'ên', 'in', 'un'],
  kho: 13,
  tho: ['Cây và cỏ,', 'Có khác loài,', 'Trông bề ngoài,', 'Cũng dễ biết.', 'Như cây mít,', 'Có nhiều cành.',
        'Lúa, cỏ gianh,', 'Có từng đốt,', 'Còn trong ruột,', 'Lại khác nhau.', 'Vài năm sau,', 'Con biết kỹ.'],
  onCu: { chu: ['on', 'ôn', 'ơn'], tu: ['nón lá', 'thủ môn', 'sơn ca', 'lợn con', 'con chồn', 'cơn mưa'] },
  khoa: [
    { am: 'en', dau: 's', tieng: 'sen', tu: 'lá sen' },
    { am: 'ên', dau: 's', tieng: 'sên', tu: 'con sên' },
    { am: 'in', dau: 'p', tieng: 'pin', tu: 'đèn pin' },
    { am: 'un', dau: 'c', tieng: 'cún', tu: 'cún con' }
  ],
  bang: { en: ['s', 'đ', 'ch', 'l'], ên: ['s', 'b', 'n', 't'], in: ['t', 'ch', 'm', 'k'], un: ['b', 'c', 'đ', 'gi'] },
  tu: { en: ['mũ len', 'chén trà', 'dế mèn'], ên: ['ngọn nến', 'tên lửa', 'bến phà'], in: ['quả chín', 'tin nhắn', 'bé xin quà'], un: ['mưa phùn', 'con giun', 'bún chả'] },
  cau: ['Ở ven hồ có lá sen to.', 'Chín chú lợn con ăn đã no tròn, cả đàn đi ngủ.', 'Mẹ cho cún con ăn.']
};

amSetup();
