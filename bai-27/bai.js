/* Bài 27 · Vần am, ăm, âm — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: "cái tăm" → "tăm tre" (ai chưa học); câu Thỏ và Rùa viết lại ngắn, bỏ "chạy", "với", "tham gia" (ay, ơi, ia… chưa đúng lúc); thêm "cảm ơn", "bé tắm", "nấm". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần am, ăm, âm nhé!'
});

const AM = {
  loai: 'van',
  am: ['am', 'ăm', 'âm'],
  kho: 14,
  tho: ['Đá bờ sông,', 'Không sống chết,', 'Không có biết,', 'Không có ăn,', 'Không người lăn,', 'Cứ nằm đây.',
        'Như đá cuội,', 'Như đá xanh,', 'Như mảnh sành,', 'Như đất thó,', 'Các vật đó,', 'Theo loài kim.'],
  onCu: { chu: ['en', 'ên', 'in', 'un'], tu: ['lá sen', 'đèn pin', 'cún con', 'mũ len', 'tên lửa', 'mưa phùn'] },
  khoa: [
    { am: 'am', dau: 'c', tieng: 'cam', tu: 'quả cam' },
    { am: 'ăm', dau: 't', tieng: 'tăm', tu: 'tăm tre' },
    { am: 'âm', dau: 's', tieng: 'sâm', tu: 'củ sâm' }
  ],
  bang: { am: ['c', 'đ', 'l', 'h'], ăm: ['t', 'ch', 'b', 'n'], âm: ['s', 'c', 'm', 'đ'] },
  tu: { am: ['trạm y tế', 'can đảm', 'cảm ơn'], ăm: ['con tằm', 'chăm chỉ', 'bé tắm'], âm: ['tấm gỗ', 'mầm cỏ', 'nấm'] },
  cau: ['Rùa bò chậm, thỏ chê rùa.', 'Rùa cứ bò cần mẫn.', 'Thế là rùa đi xa hơn hẳn thỏ.']
};

amSetup();
