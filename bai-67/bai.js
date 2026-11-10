/* Bài 67 · Vần oong, yêm, oay — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "boong – tiếng boong", "yếm – áo yếm", "hoay – loay hoay" đổi thành "xoong – cái xoong", "yếm – cái yếm", "xoáy – lốc xoáy" (dễ vẽ); bỏ "yếm trợ" (slide gõ nhầm), "ngoáy mũi" (không hay); đoạn thơ về Bác rút gọn; thêm "xoong nồi", "yếm đỏ", "yếm dãi", "xoay tròn", "hí hoáy". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần oong, yêm, oay nhé!'
});

const AM = {
  loai: 'van',
  am: ['oong', 'yêm', 'oay'],
  kho: 17,
  tho: ['Đầu trị nước,', 'Đức Kinh Dương.', 'Truyện Hùng Vương,', 'Mười tám chúa.', 'Qua mấy họ,', 'Quân Tàu sang.',
        'Vua Đinh Hoàng,', 'Khai nghiệp đế.', 'Trải Đinh, Lý,', 'Đến Trần, Lê,', 'Nay nước ta,', 'Là nước Việt.'],
  onCu: { chu: ['uya', 'uyp', 'uynh', 'uych', 'uyu'], tu: ['đêm khuya', 'đèn tuýp', 'phụ huynh', 'huých vai', 'khuỷu tay', 'tuýp kem'] },
  khoa: [
    { am: 'oong', dau: 'x', tieng: 'xoong', tu: 'cái xoong' },
    { am: 'yêm', dau: '', tieng: 'yếm', tu: 'cái yếm' },
    { am: 'oay', dau: 'x', tieng: 'xoáy', tu: 'lốc xoáy' }
  ],
  bang: { oong: ['x', 'b', 'c', 'm'], yêm: [''], oay: ['x', 'h', 'ng', 'l'] },
  tu: { oong: ['boong tàu', 'cải xoong', 'xoong nồi'], yêm: ['âu yếm', 'yếm đỏ', 'yếm dãi'], oay: ['loay hoay', 'xoay tròn', 'hí hoáy'] },
  cau: ['Bé thích xoay chong chóng.', 'Bà âu yếm ôm bé vào lòng.', 'Mẹ nấu canh cải xoong.']
};

amSetup();
