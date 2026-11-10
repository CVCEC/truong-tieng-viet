/* Bài 4 · Âm d, đ — chỉ có dữ liệu; 7 trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: bỏ "dụ dỗ" (nghĩa xấu) và câu "Bò, dê có bó cỏ bé." (khó hiểu); viết hoa "dì Ba". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm dờ và âm đờ nhé!'
});

const AM = {
  am: ['d', 'đ'],
  kho: 2,
  tho: ['Trong trời đất,', 'Nhất là người.', 'Ở trên đời,', 'Hơn giống vật.', 'Con bé thật,', 'Chưa biết gì.',
        'Phải dạy bảo,', 'Cho biết đạo,', 'Mới nên thân.', 'Sau lớn dần,', 'Con sẽ khá.'],
  onCu: { chu: ['b', 'c'], tu: ['ba ba', 'bế bé', 'bà ba', 'cá cờ', 'bó cỏ', 'bể cá'] },
  khoa: [
    { am: 'd', van: 'a', tieng: 'da', tu: 'da dẻ' },
    { am: 'd', van: 'i', tieng: 'dì', tu: 'dì Ba' },
    { am: 'đ', van: 'u', tieng: 'đủ', tu: 'đu đủ' },
    { am: 'đ', van: 'o', tieng: 'đỏ', tu: 'đo đỏ' }
  ],
  bang: { d: ['a', 'o', 'e', 'i', 'u'], đ: ['a', 'ô', 'ê', 'i', 'u'] },
  tu: { d: ['dê', 'dỗ bé', 'e dè'], đ: ['đa đa', 'bờ đê', 'đi bộ'] },
  cau: ['Dì Ba bế bé đi đò.', 'Bé đi đá dế ở bờ đê.', 'Bà dỗ bé, dì Ba bế bé.'],
  luat: { ten: 'd hay đ?', chon: ['d', 'đ'], muc: [
    { w: 'dê', dung: 'd' }, { w: 'đa đa', dung: 'đ' }, { w: 'dỗ bé', dung: 'd' },
    { w: 'đi bộ', dung: 'đ' }, { w: 'dì Ba', dung: 'd' }, { w: 'đu đủ', dung: 'đ' }] }
};

amSetup();
