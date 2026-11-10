/* Bài 9 · Âm v, x — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: "voi" (vần oi), "vỉa hè" (vần ia), "gà" (g, Bài 13) chưa học → "Bé vẽ voi" bỏ, câu vẽ con vật chỉ còn bò, dê, sư tử;
   tiếng khóa "vu – vi vu" trùng với "vi – vi vu" → đổi thành "vở – vở vẽ"; thêm vòng luật "s hay x?". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm vờ và âm xờ nhé!'
});

const AM = {
  am: ['v', 'x'],
  kho: 5,
  tho: ['Đã đi học,', 'Phải cho ngoan,', 'Hay quấy càn,', 'Là chẳng hiếu.', 'Con còn nhỏ,', 'Có mẹ cha,',
        'Lúc vào ra,', 'Được vui vẻ.', 'Con còn bé,', 'Mẹ hay chiều,', 'Thấy mẹ yêu,', 'Chớ làm nũng.'],
  onCu: { chu: ['s', 't'], tu: ['su su', 'lá sả', 'sơ mi', 'ô tô', 'tò mò', 'ti hí'] },
  khoa: [
    { am: 'v', van: 'i', tieng: 'vi', tu: 'vi vu' },
    { am: 'v', van: 'ơ', tieng: 'vở', tu: 'vở vẽ' },
    { am: 'x', van: 'i', tieng: 'xì', tu: 'lì xì' },
    { am: 'x', van: 'e', tieng: 'xe', tu: 'xe lu' }
  ],
  bang: { v: ['a', 'o', 'e', 'ư', 'y'], x: ['a', 'o', 'e', 'ư', 'i'] },
  tu: { v: ['vỏ sò', 'võ sĩ', 'vù vù'], x: ['xe ca', 'lò xo', 'vé xe'] },
  cau: ['Bé đi xe.', 'Bé tô xe bò, xe lu và cả xe ca.', 'Hè về, bố và bé đi bộ ở bờ hồ.', 'Bé có vở vẽ, bé vẽ bò, dê và sư tử.'],
  luat: { ten: 's hay x?', chon: ['s', 'x'], muc: [
    { w: 'su su', dung: 's' }, { w: 'xe ca', dung: 'x' }, { w: 'sơ mi', dung: 's' },
    { w: 'xe lu', dung: 'x' }, { w: 'sư tử', dung: 's' }] }
};

amSetup();
