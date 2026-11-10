/* Bài 70 · Vần oet, uênh, ooc — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "huênh – huênh hoang" đổi thành "tuềnh – tuềnh toàng" (dễ vẽ); sửa lỗi gõ "quần soocs", "huênh hoanh", "la choét"; bỏ "chơi bùn đất", "bức tranh đẹp" (không có vần mới); đoạn con voọc rút gọn; thêm "toe toét", "khoét lỗ", "khuệnh khoạng", "xe moóc". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần oet, uênh, ooc nhé!'
});

const AM = {
  loai: 'van',
  am: ['oet', 'uênh', 'ooc'],
  kho: 3,
  tho: ['Ai đẻ ta?', 'Cha cùng mẹ.', 'Bồng lại bế,', 'Thương và yêu.', 'Ơn nhường bao,', 'Con phải ngẫm:',
        'Áo mặc ấm,', 'Mẹ may cho.', 'Cơm ăn no,', 'Cha kiếm hộ.', 'Cha mẹ đó,', 'Là hai thân.'],
  onCu: { chu: ['yêt', 'yêng', 'oen', 'oao'], tu: ['yết hầu', 'chim yểng', 'hoen gỉ', 'mèo ngoao', 'nhoẻn cười', 'yểng hót'] },
  khoa: [
    { am: 'oet', dau: 'l', tieng: 'loẹt', tu: 'lòe loẹt' },
    { am: 'uênh', dau: 't', tieng: 'tuềnh', tu: 'tuềnh toàng' },
    { am: 'ooc', dau: 'v', tieng: 'voọc', tu: 'con voọc' }
  ],
  bang: { oet: ['l', 'ch', 't', 'x'], uênh: ['h', 'kh', 't', 'ch'], ooc: ['v', 's', 'm', 'c'] },
  tu: { oet: ['đỏ choét', 'toe toét', 'khoét lỗ'], uênh: ['huênh hoang', 'khuệnh khoạng', 'nhà tuềnh toàng'], ooc: ['quần soóc', 'rơ moóc', 'xe moóc'] },
  cau: ['Chú hề mặc áo lòe loẹt.', 'Mũi chú hề đỏ choét.', 'Con voọc sống trong rừng.']
};

amSetup();
