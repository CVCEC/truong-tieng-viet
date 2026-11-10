/* Bài 15 · Âm nh — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: khổ thơ theo thứ tự hai bài một khổ (slide ghi khổ 7); "Nhà em" (vần em), "nhè nhẹ", "như ý", "nho nhỏ" (khó vẽ) →
   tiếng khóa: nhà – nhà gỗ, nho – nho đỏ, nhổ – nhổ cỏ; thêm "nhà lá". Câu 1 theo phiếu bài tập: "Bố mẹ ở nhà lá, nhà bố mẹ nho nhỏ." */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm nhờ nhé!'
});

const AM = {
  am: ['nh'],
  kho: 8,
  tho: ['Người trong họ,', 'Tổ sinh ra,', 'Ông đến cha,', 'Bác cùng chú.', 'Họ nội đó,', 'Là tông chi,',
        'Cậu và dì,', 'Về họ mẹ.', 'Con còn bé,', 'Nên dạy qua,', 'Còn họ xa,', 'Sau mới biết.'],
  onCu: { chu: ['gh', 'g', 'gi'], tu: ['ghế đá', 'ghế gỗ', 'ghế da', 'gồ ghề', 'ghẹ đỏ', 'ghi chú'] },
  khoa: [
    { am: 'nh', van: 'a', tieng: 'nhà', tu: 'nhà gỗ' },
    { am: 'nh', van: 'o', tieng: 'nho', tu: 'nho đỏ' },
    { am: 'nh', van: 'ô', tieng: 'nhổ', tu: 'nhổ cỏ' }
  ],
  bang: { nh: ['a', 'ơ', 'ê', 'ư', 'i'] },
  tu: { nh: ['nha sĩ', 'nhà ga', 'nhà lá'] },
  cau: ['Bố mẹ ở nhà lá, nhà bố mẹ nho nhỏ.', 'Bố chở bé đi nhà ga.', 'Mẹ nhờ Nhi bê ghế nhỏ.']
};

amSetup();
