/* Bài 21 · Âm qu — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: bỏ "quê hương" (vần ương chưa học), "chả quế"; câu dài của slide tách làm hai câu ngắn;
   thêm vòng "c hay qu?". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm quờ nhé!',
  'am-luat-cqu': 'Các bạn nhớ nhé: âm quờ luôn viết q đi với u.'
});

const AM = {
  am: ['qu'],
  kho: 11,
  tho: ['Dạy con biết,', 'Phép vệ sinh:', 'Ăn quả xanh,', 'Khó tiêu hoá.', 'Uống nước lã,', 'Có nhiều sâu.',
        'Áo mặc lâu,', 'Sinh ghẻ lở.', 'Mặt không rửa,', 'Sinh u mê.', 'Đang mùa hè,', 'Càng phải giữ.'],
  onCu: { chu: ['ph', 'th', 'tr'], tu: ['phở bò', 'cà phê', 'phi cơ', 'lá thư', 'chú thỏ', 'nhà trẻ'] },
  khoa: [
    { am: 'qu', van: 'a', tieng: 'quà', tu: 'quà' },
    { am: 'qu', van: 'a', tieng: 'quả', tu: 'quả lê' },
    { am: 'qu', van: 'ê', tieng: 'quê', tu: 'quê nhà' },
    { am: 'qu', van: 'a', tieng: 'quạ', tu: 'tổ quạ' }
  ],
  bang: { qu: ['a', 'ê', 'y'] },
  tu: { qu: ['cá quả', 'đá quý', 'quả khế'] },
  cau: ['Chú Kha ở quê ra có quà cho bé.', 'Bé và mẹ qua nhà dì Hà, dì cho bé quả na.', 'Dì kể cho bé nghe về bà, bé chú ý nghe dì kể.'],
  luat: { ten: 'c hay qu?', chon: ['c', 'qu'], nhac: 'am-luat-cqu', muc: [
    { w: 'quả lê', dung: 'qu' }, { w: 'cá rô', dung: 'c' }, { w: 'quê nhà', dung: 'qu' },
    { w: 'cụ già', dung: 'c' }, { w: 'quà', dung: 'qu' }, { w: 'cô chú', dung: 'c' }] }
};

amSetup();
