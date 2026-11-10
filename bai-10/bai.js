/* Bài 10 · Âm ch — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: tranh tiếng khóa ghi nhầm "Bé nghe bà", "Củ nghệ" → "chó – chú chó", "chè – chè";
   thêm hai tiếng khóa "cha – cha mẹ", "chợ – đi chợ" để đủ bốn tiếng; ôn bài cũ gồm v, x và s (để có đủ ba chữ để chọn). */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm chờ nhé!'
});

const AM = {
  am: ['ch'],
  kho: 5,
  tho: ['Đã đi học,', 'Phải cho ngoan,', 'Hay quấy càn,', 'Là chẳng hiếu.', 'Con còn nhỏ,', 'Có mẹ cha,',
        'Lúc vào ra,', 'Được vui vẻ.', 'Con còn bé,', 'Mẹ hay chiều,', 'Thấy mẹ yêu,', 'Chớ làm nũng.'],
  onCu: { chu: ['v', 'x', 's'], tu: ['vở vẽ', 'vi vu', 'vỏ sò', 'đi xa', 'lò xo', 'vé xe'] },
  khoa: [
    { am: 'ch', van: 'o', tieng: 'chó', tu: 'chú chó' },
    { am: 'ch', van: 'e', tieng: 'chè', tu: 'chè' },
    { am: 'ch', van: 'a', tieng: 'cha', tu: 'cha mẹ' },
    { am: 'ch', van: 'ơ', tieng: 'chợ', tu: 'đi chợ' }
  ],
  bang: { ch: ['a', 'o', 'e', 'ư', 'i'] },
  tu: { ch: ['chó xù', 'chợ cá', 'cô chú', 'che chở'] },
  cau: ['Cha cho bé đi chợ.', 'Chú chở bé và chị đi chợ.', 'Chợ có cá cờ, có cả cà và chả cá.']
};

amSetup();
