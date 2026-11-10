/* Bài 59 · Vần oa, oe — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "khóe – khóe mắt" đổi thành "khỏe – khỏe mạnh" (dễ vẽ); ba đoạn văn rút gọn thành ba câu (bỏ "cách", "hoa nhài", "hoàn thành", "sản phẩm", "rực rỡ", "lũ lượt"); bỏ "bút xóa", "đóa hoa" (đã có trong câu). */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần oa và vần oe nhé!'
});

const AM = {
  loai: 'van',
  am: ['oa', 'oe'],
  kho: 8,
  tho: ['Người trong họ,', 'Tổ sinh ra,', 'Ông đến cha,', 'Bác cùng chú.', 'Họ nội đó,', 'Là tông chi,',
        'Cậu và dì,', 'Về họ mẹ.', 'Con còn bé,', 'Nên dạy qua,', 'Còn họ xa,', 'Sau mới biết.'],
  onCu: { chu: ['ươn', 'ương'], tu: ['khu vườn', 'con đường', 'con lươn', 'trường học', 'giường ngủ', 'quê hương'] },
  khoa: [
    { am: 'oa', dau: 'h', tieng: 'hoa', tu: 'hoa hồng' },
    { am: 'oe', dau: 'kh', tieng: 'khỏe', tu: 'khỏe mạnh' }
  ],
  bang: { oa: ['h', 'kh', 't', 'l'], oe: ['kh', 'h', 'x', 'ch'] },
  tu: { oa: ['chìa khóa', 'tòa nhà', 'toa tàu'], oe: ['chích chòe', 'hoa hòe', 'khoe sắc'] },
  cau: ['Cô giáo dạy các bạn làm hoa giấy.', 'Mỗi đóa hoa đều khoe sắc.', 'Cô khen cả lớp khéo tay.']
};

amSetup();
