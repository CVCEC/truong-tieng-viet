/* Bài 12 · Âm gi — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: "giờ giấc" (vần âc), "gà" (g, Bài 13), "nhà" (nh, Bài 15), "gia đình" (vần inh) chưa học →
   tiếng khóa "giờ" chỉ là "giờ"; câu chó xù thành "Chú chó xù giữ giỏ cá cho bà."; bỏ "giá cả", "giỗ tổ" (khó vẽ); thêm tiếng khóa "già – cụ già", "giỏ – giỏ cá". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm di nhé!'
});

const AM = {
  am: ['gi'],
  kho: 6,
  tho: ['Con còn bé,', 'Mẹ hay lo,', 'Ăn muốn cho,', 'Lại sợ độc.', 'Con ốm nhọc,', 'Mẹ lo thương,',
        'Tìm thuốc thang,', 'Che nắng gió.', 'Con nghĩ đó,', 'Sao cho ngoan,', 'Hay ăn càn,', 'Là chẳng hiếu.'],
  onCu: { chu: ['kh', 'ch', 'x'], tu: ['chú khỉ', 'khò khè', 'lá khô', 'khe đá', 'cá khô', 'khế'] },
  khoa: [
    { am: 'gi', van: 'o', tieng: 'gió', tu: 'gió to' },
    { am: 'gi', van: 'ơ', tieng: 'giờ', tu: 'giờ' },
    { am: 'gi', van: 'a', tieng: 'già', tu: 'cụ già' },
    { am: 'gi', van: 'o', tieng: 'giỏ', tu: 'giỏ cá' }
  ],
  bang: { gi: ['a', 'o', 'ê', 'ư', 'u'] },
  tu: { gi: ['giá đỗ', 'giò chả', 'gia vị'] },
  cau: ['Bà giữ giỏ.', 'Bé che gió.', 'Chú chó xù giữ giỏ cá cho bà.', 'Bố đi giỗ cụ về, có giò chả cho bé.']
};

amSetup();
