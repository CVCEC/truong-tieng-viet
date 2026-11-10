/* Bài 49 · Vần iên, iêc, iêp — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "thiên – thiên nhiên", "chiếc – chiếc giày" đổi thành "biển – bờ biển", "xiếc – xem xiếc" (dễ vẽ); ba đoạn về biển Hải Tiến viết lại thành ba câu ngắn (bỏ "nước", "cảnh quan", "không khí", "kiến trúc", "chụp hình", "cầu cảng" có vần chưa học); thêm "viên bi", "con diệc", "rau diếp", "tiếp sức". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần iên, iêc, iêp nhé!'
});

const AM = {
  loai: 'van',
  am: ['iên', 'iêc', 'iêp'],
  kho: 14,
  tho: ['Đá bờ sông,', 'Không sống chết,', 'Không có biết,', 'Không có ăn,', 'Không người lăn,', 'Cứ nằm đây.',
        'Như đá cuội,', 'Như đá xanh,', 'Như mảnh sành,', 'Như đất thó,', 'Các vật đó,', 'Theo loài kim.'],
  onCu: { chu: ['ong', 'ông', 'ung', 'ưng'], tu: ['bóng bay', 'cây thông', 'bông súng', 'trứng gà', 'chong chóng', 'bánh chưng'] },
  khoa: [
    { am: 'iên', dau: 'b', tieng: 'biển', tu: 'bờ biển' },
    { am: 'iêc', dau: 'x', tieng: 'xiếc', tu: 'xem xiếc' },
    { am: 'iêp', dau: 'th', tieng: 'thiệp', tu: 'thiệp mời' }
  ],
  bang: { iên: ['b', 'k', 't', 'v'], iêc: ['x', 'ch', 'v', 't'], iêp: ['th', 'đ', 'd', 't'] },
  tu: { iên: ['đàn kiến', 'viên bi', 'thiên nhiên'], iêc: ['chiếc xe', 'bữa tiệc', 'con diệc'], iêp: ['sò điệp', 'rau diếp', 'tiếp sức'] },
  cau: ['Bờ biển Hải Tiến có cát vàng.', 'Du khách ăn sò điệp, tôm, mực.', 'Cả nhà đi biển bằng chiếc xe ô tô.']
};

amSetup();
