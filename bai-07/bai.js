/* Bài 7 · Âm n, r — chỉ có dữ liệu
   Sửa so với slide: "quả na to" thành "na" (chữ qu, t chưa học); bỏ "rà ri" (chưa rõ nghĩa) và "rơm" (vần ơm chưa học);
   thêm câu "Bà có rổ cá rô." để đủ ba câu. */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm nờ và âm rờ nhé!'
});

const AM = {
  am: ['n', 'r'],
  kho: 4,
  tho: ['Hai thân là,', 'Là thân nhất,', 'Trong trời đất,', 'Không ai hơn.', 'Con biết ơn,', 'Nên phải hiếu.',
        'Nghĩa chữ hiếu,', 'Đạo làm con,', 'Con còn non,', 'Nên học trước.', 'Đi một bước,', 'Nhớ hai thân.'],
  onCu: { chu: ['l', 'm'], tu: ['lê', 'li', 'le le', 'mũ', 'me', 'mơ'] },
  khoa: [
    { am: 'n', van: 'a', tieng: 'na', tu: 'na' },
    { am: 'n', van: 'ơ', tieng: 'nơ', tu: 'nơ đỏ' },
    { am: 'r', van: 'ê', tieng: 'rễ', tu: 'bộ rễ' },
    { am: 'r', van: 'ô', tieng: 'rô', tu: 'cá rô' }
  ],
  bang: { n: ['a', 'ê', 'ơ', 'i', 'u'], r: ['a', 'o', 'e', 'i', 'ư'] },
  tu: { n: ['ca nô', 'mũ nỉ', 'nụ cà'], r: ['rổ cá', 'rò rỉ', 'nở rộ'] },
  cau: ['Bé có nơ.', 'Bé ra bờ hồ.', 'Bà có rổ cá rô.'],
  luat: { ten: 'l hay n?', chon: ['l', 'n'], muc: [
    { w: 'lê', dung: 'l' }, { w: 'nơ', dung: 'n' }, { w: 'lọ', dung: 'l' },
    { w: 'na', dung: 'n' }, { w: 'le le', dung: 'l' }, { w: 'nụ cà', dung: 'n' }] }
};

amSetup();
