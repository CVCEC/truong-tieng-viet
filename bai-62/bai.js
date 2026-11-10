/* Bài 62 · Vần uân, uât — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; trang vần mới của slide chép nhầm từ bài 61 (xoài, thuê), sửa thành "xuân – mùa xuân", "thuật – võ thuật"; bỏ "dân quân", "cây quất", "quần dài" khỏi bảng vần (qu là âm đầu, vần còn lại là ân, ât); đoạn mùa xuân rút gọn; thêm "chuẩn bị", "xuất phát". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần uân và vần uât nhé!'
});

const AM = {
  loai: 'van',
  am: ['uân', 'uât'],
  kho: 11,
  tho: ['Dạy con biết,', 'Phép vệ sinh:', 'Ăn quả xanh,', 'Khó tiêu hoá.', 'Uống nước lã,', 'Có nhiều sâu.',
        'Áo mặc lâu,', 'Sinh ghẻ lở.', 'Mặt không rửa,', 'Sinh u mê.', 'Đang mùa hè,', 'Càng phải giữ.'],
  onCu: { chu: ['oai', 'uê', 'uy'], tu: ['quả xoài', 'hoa huệ', 'tàu thủy', 'củ khoai', 'bà ngoại', 'lũy tre'] },
  khoa: [
    { am: 'uân', dau: 'x', tieng: 'xuân', tu: 'mùa xuân' },
    { am: 'uât', dau: 'th', tieng: 'thuật', tu: 'võ thuật' }
  ],
  bang: { uân: ['x', 't', 'h', 'l'], uât: ['th', 'x', 'l', 'kh'] },
  tu: { uân: ['tuần tra', 'huân chương', 'chuẩn bị'], uât: ['nghệ thuật', 'luật lệ', 'xuất phát'] },
  cau: ['Nghỉ hè, bố mẹ cho Quân đi du lịch.', 'Tết đến, xuân về.', 'Cây mai, cây quất đón xuân.']
};

amSetup();
