/* Bài 34 · Vần au, âu, êu — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: câu dài "Nhà dì Thêu…" rút gọn (bỏ "dưa hấu", "củ ấu" khó vẽ); câu chim sáo viết lại ngắn; thêm "rau cải", "con tàu", "lau nhà", "cái lều", "bé mếu"; bỏ "đi đều", "châu báu". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần au, âu, êu nhé!'
});

const AM = {
  loai: 'van',
  am: ['au', 'âu', 'êu'],
  kho: 17,
  tho: ['Đầu trị nước,', 'Đức Kinh Dương.', 'Truyện Hùng Vương,', 'Mười tám chúa.', 'Qua mấy họ,', 'Quân Tàu sang.',
        'Vua Đinh Hoàng,', 'Khai nghiệp đế.', 'Trải Đinh, Lý,', 'Đến Trần, Lê,', 'Nay nước ta,', 'Là nước Việt.'],
  onCu: { chu: ['eo', 'ao', 'ui'], tu: ['con mèo', 'ngôi sao', 'cái kéo', 'leo trèo', 'áo mới', 'con dao'] },
  khoa: [
    { am: 'au', dau: 'c', tieng: 'cau', tu: 'quả cau' },
    { am: 'âu', dau: 'c', tieng: 'cầu', tu: 'cây cầu' },
    { am: 'êu', dau: 'n', tieng: 'nêu', tu: 'cây nêu' }
  ],
  bang: { au: ['c', 'm', 's', 'r'], âu: ['c', 'd', 's', 'tr'], êu: ['n', 'k', 'th', 'l'] },
  tu: { au: ['rau cải', 'con tàu', 'lau nhà'], âu: ['quả dâu', 'con sâu', 'châu chấu'], êu: ['thêu áo', 'cái lều', 'bé mếu'] },
  cau: ['Áo mẹ màu đỏ, áo bé màu nâu.', 'Nhà dì Thêu ở quê có cây cau, cây dâu, quả bầu.', 'Đàn bồ câu bay trên cây cau.']
};

amSetup();
