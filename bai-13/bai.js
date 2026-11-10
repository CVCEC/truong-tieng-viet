/* Bài 13 · Âm g — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: khổ thơ theo thứ tự hai bài một khổ (slide ghi khổ 8); "nhà ga" (nh, Bài 15), "cửa" (vần ưa), "ăn" (vần ăn) chưa học →
   tiếng khóa: gà – gà ri, gỗ – đồ gỗ, gõ – gõ mõ; câu: "Bé gõ mõ.", "Gà mẹ có ba chú gà ri."; bỏ "gỗ gụ", "gò mó"; thêm vòng "g hay gi?". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm gờ nhé!'
});

const AM = {
  am: ['g'],
  kho: 7,
  tho: ['Anh em ruột,', 'Một mẹ cha,', 'Mẹ đẻ ra,', 'Trước sau đó.', 'Cùng máu mủ,', 'Như tay chân,',
        'Nên yêu thân,', 'Chớ ganh tị.', 'Em coi chị,', 'Cũng như anh,', 'Trước là tình,', 'Sau có lễ.'],
  onCu: { chu: ['gi', 'kh', 'ch'], tu: ['giá đỗ', 'giò chả', 'cụ già', 'gia vị', 'giỏ cá', 'gió to'] },
  khoa: [
    { am: 'g', van: 'a', tieng: 'gà', tu: 'gà ri' },
    { am: 'g', van: 'ô', tieng: 'gỗ', tu: 'đồ gỗ' },
    { am: 'g', van: 'o', tieng: 'gõ', tu: 'gõ mõ' }
  ],
  bang: { g: ['a', 'o', 'ô', 'ư', 'u'] },
  tu: { g: ['gà gô', 'gà đẻ', 'cá gỗ'] },
  cau: ['Bé gõ mõ.', 'Gà gô đi bộ ở bờ đê.', 'Gà mẹ có ba chú gà ri.'],
  luat: { ten: 'g hay gi?', chon: ['g', 'gi'], muc: [
    { w: 'gà gô', dung: 'g' }, { w: 'giá đỗ', dung: 'gi' }, { w: 'gà đẻ', dung: 'g' },
    { w: 'giỏ cá', dung: 'gi' }, { w: 'gõ mõ', dung: 'g' }, { w: 'gió to', dung: 'gi' }] }
};

amSetup();
