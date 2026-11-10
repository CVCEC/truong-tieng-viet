/* Bài 66 · Vần uya, uyp, uynh, uych, uyu — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "quỳnh – hoa quỳnh" đổi thành "huynh – phụ huynh" (qu là âm đầu, vần còn lại là ynh), "huỵch – huỵch khủy tay" sửa thành "huých – huých vai"; bỏ "sư huynh", "luỳnh quỳnh", "juyp" (slide gõ nhầm); ba đoạn văn rút gọn thành ba câu; thêm "thức khuya", "tuýp kem", "tuýp thuốc", "huynh đệ", "huynh trưởng", "rơi uỵch". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần uya, uyp, uynh, uych, uyu nhé!'
});

const AM = {
  loai: 'van',
  am: ['uya', 'uyp', 'uynh', 'uych', 'uyu'],
  kho: 16,
  tho: ['Vốn xưa là,', 'Nhà Hồng Lạc,', 'Nay tên nước,', 'Gọi Việt Nam.', 'Bốn nghìn năm,', 'Ngày mở rộng.',
        'Nam và Bắc,', 'Ấy hai miền,', 'Tuy khác tên,', 'Đất vẫn một.', 'Lào, Miên, Việt,', 'Là Đông Dương.'],
  onCu: { chu: ['oăng', 'oac', 'oach'], tu: ['con hoẵng', 'áo khoác', 'thu hoạch', 'dài ngoằng', 'rách toạc', 'kế hoạch'] },
  khoa: [
    { am: 'uya', dau: 'kh', tieng: 'khuya', tu: 'đêm khuya' },
    { am: 'uyp', dau: 't', tieng: 'tuýp', tu: 'đèn tuýp' },
    { am: 'uynh', dau: 'h', tieng: 'huynh', tu: 'phụ huynh' },
    { am: 'uych', dau: 'h', tieng: 'huých', tu: 'huých vai' },
    { am: 'uyu', dau: 'kh', tieng: 'khuỷu', tu: 'khuỷu tay' }
  ],
  bang: { uya: ['kh', 'h', 't', 'x'], uyp: ['t', 'h', 'x', 'l'], uynh: ['h', 'kh', 'l', 't'], uych: ['h', 'x', 't', 'kh'], uyu: ['kh', 't', 'h', 'l'] },
  tu: { uya: ['thức khuya', 'khuya rồi', 'đêm đã khuya'], uyp: ['tuýp kem', 'tuýp thuốc', 'tuýp màu'], uynh: ['huynh đệ', 'huynh trưởng', 'huỳnh huỵch'], uych: ['ngã uỵch', 'rơi uỵch', 'huých nhẹ'], uyu: ['khúc khuỷu', 'khuỷu chân', 'gập khuỷu tay'] },
  cau: ['Bé Huy bị ngã đau khuỷu tay.', 'Bố lau chùi chiếc đèn tuýp.', 'Đêm đã khuya, mẹ vẫn làm việc.']
};

amSetup();
