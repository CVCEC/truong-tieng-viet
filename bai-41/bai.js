/* Bài 41 · Vần ut, ưt — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; bỏ "em út", "rụt rè", "ngõ cụt" (khó vẽ); thêm "chim cút", "đứt dây"; câu mứt dừa rút gọn. */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần ut và vần ưt nhé!'
});

const AM = {
  loai: 'van',
  am: ['ut', 'ưt'],
  kho: 6,
  tho: ['Con còn bé,', 'Mẹ hay lo,', 'Ăn muốn cho,', 'Lại sợ độc.', 'Con ốm nhọc,', 'Mẹ lo thương,',
        'Tìm thuốc thang,', 'Che nắng gió.', 'Con nghĩ đó,', 'Sao cho ngoan,', 'Hay ăn càn,', 'Là chẳng hiếu.'],
  onCu: { chu: ['et', 'êt', 'it'], tu: ['con vẹt', 'ngày tết', 'quả mít', 'con vịt', 'con rết', 'nét chữ'] },
  khoa: [
    { am: 'ut', dau: 'b', tieng: 'bút', tu: 'cái bút' },
    { am: 'ưt', dau: 'm', tieng: 'mứt', tu: 'lọ mứt' }
  ],
  bang: { ut: ['b', 'c', 'ph', 't'], ưt: ['m', 'đ', 'n', 's'] },
  tu: { ut: ['bút chì', 'chim cút', 'sút xa'], ưt: ['mứt dừa', 'nứt nẻ', 'đứt dây'] },
  cau: ['Chị Thảo có bút chì, có cả bút bi nữa.', 'Tết đến, mẹ làm mứt dừa gửi về quê cho bà.', 'Bé cầm bút chì vẽ chú chim cút.']
};

amSetup();
