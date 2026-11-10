/* Bài 6 · Âm l, m — chỉ có dữ liệu
   Sửa so với slide: bỏ lúa, lửa (vần ua, ưa chưa học); "cái lọ" thành "lọ" (vần ai chưa học); "lá lê" thành "lá cờ";
   viết "mì Ý", "li" (không viết "ly"). */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm lờ và âm mờ nhé!'
});

const AM = {
  am: ['l', 'm'],
  kho: 3,
  tho: ['Ai đẻ ta?', 'Cha cùng mẹ.', 'Bồng lại bế,', 'Thương và yêu.', 'Ơn nhường bao,', 'Con phải ngẫm:',
        'Áo mặc ấm,', 'Mẹ may cho.', 'Cơm ăn no,', 'Cha kiếm hộ.', 'Cha mẹ đó,', 'Là hai thân.'],
  onCu: { chu: ['k', 'h'], tu: ['kì đà', 'ê ke', 'kì cọ', 'hồ cá', 'cá hố', 'bờ hồ'] },
  khoa: [
    { am: 'l', van: 'a', tieng: 'lá', tu: 'lá cờ' },
    { am: 'l', van: 'o', tieng: 'lọ', tu: 'lọ' },
    { am: 'm', van: 'i', tieng: 'mì', tu: 'mì Ý' },
    { am: 'm', van: 'e', tieng: 'mẹ', tu: 'mẹ bế bé' }
  ],
  bang: { l: ['a', 'ô', 'ơ', 'e', 'u'], m: ['a', 'ê', 'ơ', 'i', 'u'] },
  tu: { l: ['lê', 'li', 'le le'], m: ['mũ', 'me', 'mơ'] },
  cau: ['Bé có lê.', 'Mẹ bế bé.', 'Bà có lọ cà, có cả lọ đỗ.', 'Dì Ba ca: là lá la la.']
};

amSetup();
