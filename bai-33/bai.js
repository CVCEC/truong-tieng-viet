/* Bài 33 · Vần eo, ao — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: câu "Nai con thấy mèo học theo" đổi (học có vần oc chưa học); bỏ "cây cao" khỏi từ có tranh; thêm "cái kẹo", "con dao", "chào cô". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần eo và vần ao nhé!'
});

const AM = {
  loai: 'van',
  am: ['eo', 'ao'],
  kho: 17,
  tho: ['Đầu trị nước,', 'Đức Kinh Dương.', 'Truyện Hùng Vương,', 'Mười tám chúa.', 'Qua mấy họ,', 'Quân Tàu sang.',
        'Vua Đinh Hoàng,', 'Khai nghiệp đế.', 'Trải Đinh, Lý,', 'Đến Trần, Lê,', 'Nay nước ta,', 'Là nước Việt.'],
  onCu: { chu: ['ui', 'ưi', 'oi'], tu: ['đồi núi', 'gửi thư', 'cái túi', 'bó củi', 'đùi gà', 'ngửi mùi'] },
  khoa: [
    { am: 'eo', dau: 'm', tieng: 'mèo', tu: 'con mèo' },
    { am: 'ao', dau: 's', tieng: 'sao', tu: 'ngôi sao' }
  ],
  bang: { eo: ['m', 'k', 't', 'b'], ao: ['s', 'c', 'b', 'ch'] },
  tu: { eo: ['cái kéo', 'leo trèo', 'cái kẹo'], ao: ['áo mới', 'con dao', 'chào cô'] },
  cau: ['Mèo con leo cây cao.', 'Nai con thấy thế, đòi leo theo mèo.', 'Bé có áo mới, bé chào bà.']
};

amSetup();
