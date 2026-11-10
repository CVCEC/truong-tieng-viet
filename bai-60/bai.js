/* Bài 60 · Vần oan, oăn, oat, oăt — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "hoan – ăn liên hoan" đổi thành "khoan – máy khoan", "thoăn" của oăt sửa lại thành "choắt – loắt choắt" (slide ghi nhầm "thoăn" cho vần oăt), "thoăn – thoăn thoắt" đổi thành "xoăn – tóc xoăn"; đoạn bé Toàn và đoạn máy khoan rút gọn; thêm "bé ngoan", "ngoằn ngoèo", "soát vé", "toát mồ hôi", "khúc ngoặt". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần oan, oăn, oat, oăt nhé!'
});

const AM = {
  loai: 'van',
  am: ['oan', 'oăn', 'oat', 'oăt'],
  kho: 9,
  tho: ['Người trong họ,', 'Có bề trên,', 'Lạ hay quen,', 'Đều phải kính.', 'Có khách đến,', 'Không được đùa,',
        'Ai cho quà,', 'Đừng lấy vội.', 'Ông bà gọi,', 'Phải dạ thưa.', 'Phàm người nhà,', 'Không được hỗn.'],
  onCu: { chu: ['oa', 'oe'], tu: ['hoa hồng', 'khỏe mạnh', 'chìa khóa', 'tòa nhà', 'chích chòe', 'hoa hòe'] },
  khoa: [
    { am: 'oan', dau: 'kh', tieng: 'khoan', tu: 'máy khoan' },
    { am: 'oăn', dau: 'x', tieng: 'xoăn', tu: 'tóc xoăn' },
    { am: 'oat', dau: 'h', tieng: 'hoạt', tu: 'hoạt hình' },
    { am: 'oăt', dau: 'ch', tieng: 'choắt', tu: 'loắt choắt' }
  ],
  bang: { oan: ['kh', 't', 'h', 'đ'], oăn: ['x', 'kh', 'ng', 'th'], oat: ['h', 'l', 's', 'th'], oăt: ['ch', 'h', 'th', 'ng'] },
  tu: { oan: ['sách toán', 'hoa xoan', 'bé ngoan'], oăn: ['băn khoăn', 'ngoằn ngoèo', 'dây xoắn'], oat: ['hàng loạt', 'soát vé', 'toát mồ hôi'], oăt: ['nhọn hoắt', 'thoăn thoắt', 'khúc ngoặt'] },
  cau: ['Chú bé loắt choắt, cái xắc xinh xinh.', 'Cái chân thoăn thoắt, cái đầu nghênh nghênh.', 'Bé Toàn rất ngoan, lại học giỏi toán.']
};

amSetup();
