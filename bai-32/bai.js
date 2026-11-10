/* Bài 32 · Vần ui, ưi — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: "quả núi" → "đồi núi"; bỏ "phủi bụi", "thưa gửi", "dãy núi", "mũi dùi"; vần ưi ít từ, chỉ dùng "ngửi mùi", "gửi quà"; câu dài tách hai câu. */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần ui và vần ưi nhé!'
});

const AM = {
  loai: 'van',
  am: ['ui', 'ưi'],
  kho: 16,
  tho: ['Vốn xưa là,', 'Nhà Hồng Lạc,', 'Nay tên nước,', 'Gọi Việt Nam.', 'Bốn nghìn năm,', 'Ngày mở rộng.',
        'Nam và Bắc,', 'Ấy hai miền,', 'Tuy khác tên,', 'Đất vẫn một.', 'Lào, Miên, Việt,', 'Là Đông Dương.'],
  onCu: { chu: ['oi', 'ôi', 'ơi'], tu: ['mẹ gọi', 'đôi môi', 'đi bơi', 'con voi', 'bà nội', 'đồ chơi'] },
  khoa: [
    { am: 'ui', dau: 'n', tieng: 'núi', tu: 'đồi núi' },
    { am: 'ưi', dau: 'g', tieng: 'gửi', tu: 'gửi thư' }
  ],
  bang: { ui: ['ch', 'm', 'n', 'c'], ưi: ['g', 'ng', 'c', 's'] },
  tu: { ui: ['cái túi', 'bó củi', 'đùi gà'], ưi: ['ngửi mùi', 'gửi quà'] },
  cau: ['Bà gửi cho bé Mùi cái túi đỏ.', 'Mùi gửi thư cho Mai, kể về quê Mùi.', 'Quê Mùi có núi đồi, có cả nghề đan nón.']
};

amSetup();
