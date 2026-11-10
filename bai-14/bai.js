/* Bài 14 · Âm gh — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: "Bé ngồi ghế" (ng, vần ôi chưa học) → "Bé có ghế gỗ."; bỏ "ghê sợ" (khó vẽ); thêm tiếng khóa "ghẹ – ghẹ đỏ",
   câu "Ghẹ bò ra bờ đá." và vòng "g hay gh?". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm gờ kép nhé!',
  'am-luat-ggh': 'Các bạn nhớ nhé: đứng trước e, ê, i thì viết gh, còn lại viết g.'
});

const AM = {
  am: ['gh'],
  kho: 7,
  tho: ['Anh em ruột,', 'Một mẹ cha,', 'Mẹ đẻ ra,', 'Trước sau đó.', 'Cùng máu mủ,', 'Như tay chân,',
        'Nên yêu thân,', 'Chớ ganh tị.', 'Em coi chị,', 'Cũng như anh,', 'Trước là tình,', 'Sau có lễ.'],
  onCu: { chu: ['g', 'gi', 'kh'], tu: ['gà gô', 'gà đẻ', 'cá gỗ', 'đồ gỗ', 'gõ mõ', 'gà ri'] },
  khoa: [
    { am: 'gh', van: 'ê', tieng: 'ghế', tu: 'ghế gỗ' },
    { am: 'gh', van: 'e', tieng: 'ghẹ', tu: 'ghẹ đỏ' },
    { am: 'gh', van: 'i', tieng: 'ghi', tu: 'ghi chú' }
  ],
  bang: { gh: ['e', 'ê', 'i'] },
  tu: { gh: ['ghế đá', 'ghế da', 'gồ ghề'] },
  cau: ['Bé có ghế gỗ.', 'Bố đi chợ về có ghế gỗ cho bé.', 'Ghẹ bò ra bờ đá.'],
  luat: { ten: 'g hay gh?', chon: ['g', 'gh'], nhac: 'am-luat-ggh', muc: [
    { w: 'ghế gỗ', dung: 'gh' }, { w: 'gà gô', dung: 'g' }, { w: 'ghẹ đỏ', dung: 'gh' },
    { w: 'gõ mõ', dung: 'g' }, { w: 'ghế đá', dung: 'gh' }, { w: 'gà ri', dung: 'g' }] }
};

amSetup();
