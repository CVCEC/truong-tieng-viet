/* Bài 3 · Âm b, c — chỉ có dữ liệu; 7 trò chơi nằm ở chung/mau/bo-am.js, tranh ở chung/tranh.js */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm bờ và âm cờ nhé!'
});

const AM = {
  am: ['b', 'c'],
  kho: 2,
  tho: ['Trong trời đất,', 'Nhất là người.', 'Ở trên đời,', 'Hơn giống vật.', 'Con bé thật,', 'Chưa biết gì.',
        'Phải dạy bảo,', 'Cho biết đạo,', 'Mới nên thân.', 'Sau lớn dần,', 'Con sẽ khá.'],
  onCu: { chu: ['ch', 'gh', 'gi', 'kh', 'ng', 'ngh', 'nh', 'ph', 'qu', 'th', 'tr'] },
  khoa: [
    { am: 'b', van: 'i', tieng: 'bi', tu: 'bi bô' },
    { am: 'b', van: 'ô', tieng: 'bố', tu: 'bố bế bé' },
    { am: 'c', van: 'a', tieng: 'cá', tu: 'cá cờ' },
    { am: 'c', van: 'ơ', tieng: 'cờ', tu: 'cờ' }
  ],
  bang: { b: ['a', 'ê', 'i', 'ô', 'u'], c: ['a', 'o', 'ơ', 'ô', 'u'] },
  tu: { b: ['ba ba', 'bế bé', 'bà ba'], c: ['cá cờ', 'bó cỏ', 'bể cá'] },
  cau: ['Bà Ba bế bé Bi.', 'Bò bê có ba bó cỏ.', 'Bé có cờ, có cả bi.']
};

amSetup();
