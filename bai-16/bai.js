/* Bài 16 · Âm ng — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: tranh tiếng khóa ghi nhầm "Bé có quà" → "ngủ – ngủ mơ"; thêm tiếng khóa "ngô – bí ngô", "ngừ – cá ngừ";
   bỏ "bỡ ngỡ" (khó vẽ), thêm "bẻ ngô". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm ngờ nhé!'
});

const AM = {
  am: ['ng'],
  kho: 8,
  tho: ['Người trong họ,', 'Tổ sinh ra,', 'Ông đến cha,', 'Bác cùng chú.', 'Họ nội đó,', 'Là tông chi,',
        'Cậu và dì,', 'Về họ mẹ.', 'Con còn bé,', 'Nên dạy qua,', 'Còn họ xa,', 'Sau mới biết.'],
  onCu: { chu: ['nh', 'gh', 'g'], tu: ['nha sĩ', 'nhà ga', 'nho đỏ', 'nhổ cỏ', 'nhà lá', 'nhà gỗ'] },
  khoa: [
    { am: 'ng', van: 'u', tieng: 'ngủ', tu: 'ngủ mơ' },
    { am: 'ng', van: 'a', tieng: 'ngả', tu: 'ngả mũ' },
    { am: 'ng', van: 'ô', tieng: 'ngô', tu: 'bí ngô' },
    { am: 'ng', van: 'ư', tieng: 'ngừ', tu: 'cá ngừ' }
  ],
  bang: { ng: ['a', 'o', 'ơ', 'ô', 'u'] },
  tu: { ng: ['ngõ nhỏ', 'ru ngủ', 'bẻ ngô'] },
  cau: ['Bé ngủ.', 'Nhà bà ở ngã ba, có ngõ nhỏ.', 'Bà bẻ ngô cho bé và chị Nga.']
};

amSetup();
