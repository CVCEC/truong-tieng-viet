/* Bài 5 · Âm k, h — chỉ có dữ liệu
   Sửa so với slide (chỉ dùng chữ đã học): bỏ kệ gỗ, ho gà (chữ g), lá hẹ, kể lể, là (chữ l), ki bo, hả hê (nghĩa chê);
   tiếng khóa h đổi thành hồ (bờ hồ) và hổ (hổ dữ); câu "Cô Ba có kệ gỗ đã cũ kĩ." bỏ "gỗ"; bỏ câu "Cô Kỳ là bà bé Bo." (chữ l). */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm ca và âm hờ nhé!',
  'am-luat-ck': 'Các bạn nhớ nhé: đứng trước e, ê, i thì viết k, còn lại viết c.'
});

const AM = {
  am: ['k', 'h'],
  kho: 3,
  tho: ['Ai đẻ ta?', 'Cha cùng mẹ.', 'Bồng lại bế,', 'Thương và yêu.', 'Ơn nhường bao,', 'Con phải ngẫm:',
        'Áo mặc ấm,', 'Mẹ may cho.', 'Cơm ăn no,', 'Cha kiếm hộ.', 'Cha mẹ đó,', 'Là hai thân.'],
  onCu: { chu: ['d', 'đ'], tu: ['dê', 'dỗ bé', 'e dè', 'đa đa', 'bờ đê', 'đi bộ'] },
  khoa: [
    { am: 'k', van: 'i', tieng: 'kĩ', tu: 'cũ kĩ' },
    { am: 'k', van: 'ê', tieng: 'kệ', tu: 'kệ' },
    { am: 'h', van: 'ô', tieng: 'hồ', tu: 'bờ hồ' },
    { am: 'h', van: 'ô', tieng: 'hổ', tu: 'hổ dữ' }
  ],
  bang: { k: ['e', 'ê', 'i', 'y'], h: ['a', 'ô', 'e', 'i', 'u'] },
  tu: { k: ['kì đà', 'ê ke', 'kì cọ'], h: ['hồ cá', 'cá hố', 'hí hí'] },
  cau: ['Cô Ba có kệ đã cũ kĩ.', 'Bé bị ho, bà bế bé, bà dỗ bé.', 'Bố bế bé đi bộ ở bờ hồ.'],
  luat: { ten: 'c hay k?', chon: ['c', 'k'], nhac: 'am-luat-ck', muc: [
    { w: 'kì đà', dung: 'k' }, { w: 'cá hố', dung: 'c' }, { w: 'kẻ ô', dung: 'k' },
    { w: 'cờ', dung: 'c' }, { w: 'kệ', dung: 'k' }, { w: 'cá cờ', dung: 'c' }] }
};

amSetup();
