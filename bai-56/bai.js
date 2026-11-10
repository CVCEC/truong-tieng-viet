/* Bài 56 · Vần ươc, ươt — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "bước – bước nhanh", "lướt – lướt thướt" đổi thành "thước – thước kẻ", "lướt – lướt ván" (dễ vẽ); giữ hai dòng thơ "Ca nô đi trước, ván lướt theo sau"; đoạn xếp hàng và đoạn dược sĩ rút gọn (bỏ "xếp hàng", "phần", "trật tự", "giống", "thành", "cứu người"); bỏ "dây cước", "dược sĩ", "thướt tha"; thêm "bước đi", "cầu trượt", "tóc mượt". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần ươc và vần ươt nhé!'
});

const AM = {
  loai: 'van',
  am: ['ươc', 'ươt'],
  kho: 5,
  tho: ['Đã đi học,', 'Phải cho ngoan,', 'Hay quấy càn,', 'Là chẳng hiếu.', 'Con còn nhỏ,', 'Có mẹ cha,',
        'Lúc vào ra,', 'Được vui vẻ.', 'Con còn bé,', 'Mẹ hay chiều,', 'Thấy mẹ yêu,', 'Chớ làm nũng.'],
  onCu: { chu: ['ươi', 'ươu'], tu: ['quả bưởi', 'con hươu', 'tươi cười', 'cái lưới', 'ốc bươu', 'chim khướu'] },
  khoa: [
    { am: 'ươc', dau: 'th', tieng: 'thước', tu: 'thước kẻ' },
    { am: 'ươt', dau: 'l', tieng: 'lướt', tu: 'lướt ván' }
  ],
  bang: { ươc: ['th', 'b', 'l', 'n'], ươt: ['l', 'm', 'tr', 's'] },
  tu: { ươc: ['chiếc lược', 'nước ngọt', 'bước đi'], ươt: ['lần lượt', 'cầu trượt', 'tóc mượt'] },
  cau: ['Ca nô đi trước, ván lướt theo sau.', 'Các bạn lần lượt lấy cơm.', 'Bé dùng thước kẻ.']
};

amSetup();
