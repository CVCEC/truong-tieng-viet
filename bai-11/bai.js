/* Bài 11 · Âm kh — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: "ngủ", "ngủ khì" (ng, Bài 16), "quả" (qu, Bài 21) chưa học → bỏ câu có "ngủ", thêm "Mẹ kho cá cho bé.", "Bé Vi đi khe khẽ.", "Bà có rổ khế to.";
   "quả khế" thành "khế"; "kha khá" (khó vẽ) thay bằng "cá khô". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm khờ nhé!'
});

const AM = {
  am: ['kh'],
  kho: 6,
  tho: ['Con còn bé,', 'Mẹ hay lo,', 'Ăn muốn cho,', 'Lại sợ độc.', 'Con ốm nhọc,', 'Mẹ lo thương,',
        'Tìm thuốc thang,', 'Che nắng gió.', 'Con nghĩ đó,', 'Sao cho ngoan,', 'Hay ăn càn,', 'Là chẳng hiếu.'],
  onCu: { chu: ['ch', 'x', 'v'], tu: ['cha mẹ', 'chợ cá', 'chó xù', 'che chở', 'đi chợ', 'cô chú'] },
  khoa: [
    { am: 'kh', van: 'ê', tieng: 'khế', tu: 'khế' },
    { am: 'kh', van: 'o', tieng: 'kho', tu: 'kho cá' },
    { am: 'kh', van: 'i', tieng: 'khỉ', tu: 'chú khỉ' },
    { am: 'kh', van: 'ô', tieng: 'khô', tu: 'lá khô' }
  ],
  bang: { kh: ['a', 'o', 'e', 'ư', 'i'] },
  tu: { kh: ['cá khô', 'khe đá', 'khò khè'] },
  cau: ['Khỉ có khế.', 'Mẹ kho cá cho bé.', 'Bé Vi đi khe khẽ.', 'Bà có rổ khế to.'],
  luat: { ten: 'ch hay kh?', chon: ['ch', 'kh'], muc: [
    { w: 'chè', dung: 'ch' }, { w: 'khế', dung: 'kh' }, { w: 'chó xù', dung: 'ch' },
    { w: 'khe đá', dung: 'kh' }, { w: 'chợ cá', dung: 'ch' }, { w: 'khò khè', dung: 'kh' }] }
};

amSetup();
