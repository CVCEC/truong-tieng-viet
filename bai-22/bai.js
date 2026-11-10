/* Bài 22 · Vần ia — bài dạy vần đầu tiên; chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: "cây mía" → "bẻ mía" (cây có vần ây chưa học); câu 1 bỏ "to"; câu 2 tách làm hai câu ngắn;
   bỏ "thìa lia", "lia lịa", "tía lia", "chia lìa", "địa lí" (khó hiểu với trẻ). */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần ia nhé!'
});

const AM = {
  loai: 'van',
  am: ['ia'],
  kho: 11,
  tho: ['Dạy con biết,', 'Phép vệ sinh:', 'Ăn quả xanh,', 'Khó tiêu hoá.', 'Uống nước lã,', 'Có nhiều sâu.',
        'Áo mặc lâu,', 'Sinh ghẻ lở.', 'Mặt không rửa,', 'Sinh u mê.', 'Đang mùa hè,', 'Càng phải giữ.'],
  onCu: { chu: ['qu', 'ph', 'th'], tu: ['quả lê', 'quê nhà', 'tổ quạ', 'đá quý', 'cá quả', 'quà'] },
  khoa: [
    { am: 'ia', dau: 'm', tieng: 'mía', tu: 'bẻ mía' },
    { am: 'ia', dau: 'th', tieng: 'thìa', tu: 'thìa' },
    { am: 'ia', dau: 'đ', tieng: 'đĩa', tu: 'đĩa' }
  ],
  bang: { ia: ['b', 'ch', 'm', 'th', 'đ'] },
  tu: { ia: ['lá tía tô', 'vỉa hè', 'bìa vở'] },
  cau: ['Nhà cô Nghĩa có lá mía và lá tía tô.', 'Bé chia thìa, chia đĩa cho cả nhà.', 'Thìa đĩa to cho bố mẹ, thìa đĩa nhỏ cho bé.']
};

amSetup();
