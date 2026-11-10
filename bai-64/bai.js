/* Bài 64 · Vần uây, oang, uyt — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "khuây – khuây khỏa", "hoang – hoang mang" đổi thành "khuấy – khuấy bột", "khoáng – nước khoáng", "xuýt – xuýt xoa" đổi thành "buýt – xe buýt" (dễ vẽ); bỏ "cháo quẩy" (qu là âm đầu, vần còn lại là ây); ba đoạn văn rút gọn thành ba câu; thêm "khuấy cháo", "ngoe nguẩy", "áo choàng", "bến xe buýt". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần uây, oang, uyt nhé!'
});

const AM = {
  loai: 'van',
  am: ['uây', 'oang', 'uyt'],
  kho: 13,
  tho: ['Cây và cỏ,', 'Có khác loài,', 'Trông bề ngoài,', 'Cũng dễ biết.', 'Như cây mít,', 'Có nhiều cành.',
        'Lúa, cỏ gianh,', 'Có từng đốt,', 'Còn trong ruột,', 'Lại khác nhau.', 'Vài năm sau,', 'Con biết kỹ.'],
  onCu: { chu: ['uyên', 'uyêt'], tu: ['con thuyền', 'người tuyết', 'chim khuyên', 'truyện tranh', 'luyện tập', 'trăng khuyết'] },
  khoa: [
    { am: 'uây', dau: 'kh', tieng: 'khuấy', tu: 'khuấy bột' },
    { am: 'oang', dau: 'kh', tieng: 'khoáng', tu: 'nước khoáng' },
    { am: 'uyt', dau: 'b', tieng: 'buýt', tu: 'xe buýt' }
  ],
  bang: { uây: ['kh', 'ng', 't', 'h'], oang: ['kh', 'h', 'l', 't'], uyt: ['b', 'h', 'x', 't'] },
  tu: { uây: ['khuấy nước', 'khuấy cháo', 'ngoe nguẩy'], oang: ['hoàng hậu', 'áo choàng', 'khoang tàu'], uyt: ['huýt sáo', 'tuýt còi', 'bến xe buýt'] },
  cau: ['Hằng ngày, bé Mai đi học bằng xe buýt.', 'Bé ngồi ngay ngắn trong khoang xe.', 'Bố uống nước khoáng rồi giúp mẹ khuấy nồi cháo.']
};

amSetup();
