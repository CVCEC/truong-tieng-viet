/* Bài 57 · Vần ươm, ươp — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "bướm – con bươm bướm", "nượp – đông nườm nượp" rút gọn thành "con bướm", đổi "nượp" thành "mướp – quả mướp" (dễ vẽ); bỏ "thanh gươm", "bắt cướp" (không hợp trẻ nhỏ), "tươm tất"; ba đoạn văn rút gọn (vườn có vần ươn học ở bài sau); thêm "lượm lá", "giàn mướp". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần ươm và vần ươp nhé!'
});

const AM = {
  loai: 'van',
  am: ['ươm', 'ươp'],
  kho: 6,
  tho: ['Con còn bé,', 'Mẹ hay lo,', 'Ăn muốn cho,', 'Lại sợ độc.', 'Con ốm nhọc,', 'Mẹ lo thương,',
        'Tìm thuốc thang,', 'Che nắng gió.', 'Con nghĩ đó,', 'Sao cho ngoan,', 'Hay ăn càn,', 'Là chẳng hiếu.'],
  onCu: { chu: ['ươc', 'ươt'], tu: ['thước kẻ', 'lướt ván', 'chiếc lược', 'nước ngọt', 'lần lượt', 'cầu trượt'] },
  khoa: [
    { am: 'ươm', dau: 'b', tieng: 'bướm', tu: 'con bướm' },
    { am: 'ươp', dau: 'm', tieng: 'mướp', tu: 'quả mướp' }
  ],
  bang: { ươm: ['b', 'c', 'l', 'g'], ươp: ['m', 'n', 'c', 'l'] },
  tu: { ươm: ['hạt cườm', 'vàng ươm', 'lượm lá'], ươp: ['mèo mướp', 'nườm nượp', 'giàn mướp'] },
  cau: ['Mùa này, mướp sai quả.', 'Đàn bướm vàng bay qua bay lại.', 'Em cùng mẹ hái quả mướp non.']
};

amSetup();
