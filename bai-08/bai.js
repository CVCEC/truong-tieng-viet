/* Bài 8 · Âm s, t — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: câu "Cô Na có tủ gỗ, cá rô và củ sả." có g (Bài 13) và v (Bài 9) chưa học → "Cô Na có tủ to, có cá rô, củ sả.";
   bỏ "số lẻ", "củ từ" (khó vẽ, dễ nhầm), "na to" thành "na". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm sờ và âm tờ nhé!'
});

const AM = {
  am: ['s', 't'],
  kho: 4,
  tho: ['Hai thân là,', 'Là thân nhất,', 'Trong trời đất,', 'Không ai hơn.', 'Con biết ơn,', 'Nên phải hiếu.',
        'Nghĩa chữ hiếu,', 'Đạo làm con,', 'Con còn non,', 'Nên học trước.', 'Đi một bước,', 'Nhớ hai thân.'],
  onCu: { chu: ['n', 'r'], tu: ['na', 'nơ', 'ca nô', 'cá rô', 'bộ rễ', 'nở rộ'] },
  khoa: [
    { am: 's', van: 'a', tieng: 'sả', tu: 'lá sả' },
    { am: 's', van: 'u', tieng: 'su', tu: 'su su' },
    { am: 't', van: 'ô', tieng: 'tô', tu: 'ô tô' },
    { am: 't', van: 'o', tieng: 'tò', tu: 'tò mò' }
  ],
  bang: { s: ['a', 'ô', 'ê', 'i', 'ư'], t: ['a', 'ô', 'e', 'i', 'u'] },
  tu: { s: ['sơ mi', 'ca sĩ', 'lo sợ'], t: ['ti hí', 'sư tử', 'cử tạ'] },
  cau: ['Bé tô cá.', 'Bố bé là ca sĩ, mẹ bé là y tá.', 'Bà cố có lọ sứ cổ.', 'Cô Na có tủ to, có cá rô, củ sả.']
};

amSetup();
