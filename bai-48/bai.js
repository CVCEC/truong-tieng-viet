/* Bài 48 · Vần ong, ông, ung, ưng — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "mong – mong manh", "chống – chống đỡ", "búng – búng tay", "lửng – lửng lơ" đổi thành "bóng – bóng bay", "thông – cây thông", "súng – bông súng", "trứng – trứng gà" (dễ vẽ); bỏ "khủng long" (có cả ung và ong), "đồng bằng"; ca dao "Trong đầm…" chỉ giữ câu đầu; đoạn bà Bảy rút gọn. */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần ong, ông, ung, ưng nhé!'
});

const AM = {
  loai: 'van',
  am: ['ong', 'ông', 'ung', 'ưng'],
  kho: 13,
  tho: ['Cây và cỏ,', 'Có khác loài,', 'Trông bề ngoài,', 'Cũng dễ biết.', 'Như cây mít,', 'Có nhiều cành.',
        'Lúa, cỏ gianh,', 'Có từng đốt,', 'Còn trong ruột,', 'Lại khác nhau.', 'Vài năm sau,', 'Con biết kỹ.'],
  onCu: { chu: ['ang', 'ăng', 'âng'], tu: ['cá vàng', 'măng tre', 'nhà tầng', 'cái bảng', 'vầng trăng', 'trời nắng'] },
  khoa: [
    { am: 'ong', dau: 'b', tieng: 'bóng', tu: 'bóng bay' },
    { am: 'ông', dau: 'th', tieng: 'thông', tu: 'cây thông' },
    { am: 'ung', dau: 's', tieng: 'súng', tu: 'bông súng' },
    { am: 'ưng', dau: 'tr', tieng: 'trứng', tu: 'trứng gà' }
  ],
  bang: { ong: ['b', 'ch', 'v', 'c'], ông: ['th', 'đ', 's', 'c'], ung: ['s', 'th', 'c', 'h'], ưng: ['tr', 'ch', 'g', 'r'] },
  tu: { ong: ['chong chóng', 'cái võng', 'con ong'], ông: ['đồng hồ', 'con công', 'cái cổng'], ung: ['cái thúng', 'quả sung', 'thùng rác'], ưng: ['bánh chưng', 'củ gừng', 'rừng cây'] },
  cau: ['Trong đầm gì đẹp bằng sen.', 'Bà Bảy đã già, lưng bà đã còng.', 'Bà mang trứng gà và bánh chưng ra chợ.']
};

amSetup();
