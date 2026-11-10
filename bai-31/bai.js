/* Bài 31 · Vần oi, ôi, ơi — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: bỏ "nồi hơi", "hỏi han", "tơi bời" (khó vẽ, khó hiểu); câu chú Ngợi tách ngắn, bỏ "mũ cối", "dẫn"; thêm "cái chòi", "cái còi", "con voi", "cái chổi", "phơi đồ", "con dơi". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần oi, ôi, ơi nhé!'
});

const AM = {
  loai: 'van',
  am: ['oi', 'ôi', 'ơi'],
  kho: 16,
  tho: ['Vốn xưa là,', 'Nhà Hồng Lạc,', 'Nay tên nước,', 'Gọi Việt Nam.', 'Bốn nghìn năm,', 'Ngày mở rộng.',
        'Nam và Bắc,', 'Ấy hai miền,', 'Tuy khác tên,', 'Đất vẫn một.', 'Lào, Miên, Việt,', 'Là Đông Dương.'],
  onCu: { chu: ['ai', 'ay', 'ây'], tu: ['quả vải', 'máy bay', 'đám mây', 'gà mái', 'máy cày', 'thợ xây'] },
  khoa: [
    { am: 'oi', dau: 'g', tieng: 'gọi', tu: 'mẹ gọi' },
    { am: 'ôi', dau: 'm', tieng: 'môi', tu: 'đôi môi' },
    { am: 'ơi', dau: 'b', tieng: 'bơi', tu: 'đi bơi' }
  ],
  bang: { oi: ['c', 'đ', 'h', 'm'], ôi: ['b', 'đ', 'n', 'l'], ơi: ['b', 'ch', 'm', 'h'] },
  tu: { oi: ['cái chòi', 'cái còi', 'con voi'], ôi: ['bà nội', 'nồi cơm', 'cái chổi'], ơi: ['đồ chơi', 'phơi đồ', 'con dơi'] },
  cau: ['Bé Hà ngồi ở chòi mới, chơi đồ chơi.', 'Chú Ngợi là bộ đội, chú giỏi bơi lội.', 'Hè về, chú dạy bé bơi.']
};

amSetup();
