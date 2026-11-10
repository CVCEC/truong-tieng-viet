/* Bài 50 · Vần iêng, iêm, yên — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "tiệm – tiệm cà phê", "thiêng – thiêng liêng", "yên – yên bình" đổi thành "kiếm – cá kiếm", "riêng – sầu riêng", "yên – yên ngựa" (dễ vẽ); bỏ "thanh kiếm"; ba đoạn văn rút gọn thành ba câu (bỏ "phụng", "lông", "diễm lệ", "quan sát", "chuyện", "buổi", "xong", "chuẩn bị", "loại", "nhất", "từng", "vườn"); thêm "cái chiêng", "cái liềm", "chim yến", "ngồi yên". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần iêng, iêm, yên nhé!'
});

const AM = {
  loai: 'van',
  am: ['iêng', 'iêm', 'yên'],
  kho: 16,
  tho: ['Vốn xưa là,', 'Nhà Hồng Lạc,', 'Nay tên nước,', 'Gọi Việt Nam.', 'Bốn nghìn năm,', 'Ngày mở rộng.',
        'Nam và Bắc,', 'Ấy hai miền,', 'Tuy khác tên,', 'Đất vẫn một.', 'Lào, Miên, Việt,', 'Là Đông Dương.'],
  onCu: { chu: ['iên', 'iêc', 'iêp'], tu: ['bờ biển', 'xem xiếc', 'thiệp mời', 'đàn kiến', 'chiếc xe', 'sò điệp'] },
  khoa: [
    { am: 'iêng', dau: 'r', tieng: 'riêng', tu: 'sầu riêng' },
    { am: 'iêm', dau: 'k', tieng: 'kiếm', tu: 'cá kiếm' },
    { am: 'yên', dau: '', tieng: 'yên', tu: 'yên ngựa' }
  ],
  bang: { iêng: ['r', 'ch', 's', 'l'], iêm: ['k', 'd', 'x', 'l'], yên: [''] },
  tu: { iêng: ['củ riềng', 'siêng năng', 'cái chiêng'], iêm: ['bao diêm', 'hồng xiêm', 'cái liềm'], yên: ['tổ yến', 'chim yến', 'ngồi yên'] },
  cau: ['Đàn chim yến bay liệng trên bầu trời.', 'Bé Thiêm siêng năng tập thể dục cùng bố.', 'Chị Nghiêm thích ăn sầu riêng và hồng xiêm.']
};

amSetup();
