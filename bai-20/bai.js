/* Bài 20 · Âm ph — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: "mẹ qua phà" → "đi phà" (qu chưa học); "bé ăn phở" → "phở bò" (ăn có vần ăn chưa học);
   bỏ "pha lê", "khu phố", "phố xá" để chọn từ dễ vẽ. */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm phờ nhé!'
});

const AM = {
  am: ['ph'],
  kho: 10,
  tho: ['Con bé dại,', 'Mải vui chơi.', 'Muốn ra người,', 'Phải chăm học.', 'Miệng đang đọc,', 'Đừng trông ngang.',
        'Học dở dang,', 'Đừng có chán.', 'Học có bạn,', 'Con dễ hay.', 'Mến trọng thầy,', 'Học chóng biết.'],
  onCu: { chu: ['th', 'tr', 'ngh'], tu: ['chú thỏ', 'thả cá', 'lá thư', 'cá thu', 'nhà thơ', 'trà đá'] },
  khoa: [
    { am: 'ph', van: 'ơ', tieng: 'phở', tu: 'phở bò' },
    { am: 'ph', van: 'ô', tieng: 'phố', tu: 'phố cổ' },
    { am: 'ph', van: 'a', tieng: 'phà', tu: 'đi phà' },
    { am: 'ph', van: 'ê', tieng: 'phê', tu: 'cà phê' }
  ],
  bang: { ph: ['a', 'i', 'ơ', 'ê', 'u'] },
  tu: { ph: ['phi cơ', 'pha trà', 'phụ nữ'] },
  cau: ['Hè về, mẹ cho bé ra phố.', 'Chú Tư đi cà phê ở phố cổ.', 'Bé bê tô phở bò cho bà.']
};

amSetup();
