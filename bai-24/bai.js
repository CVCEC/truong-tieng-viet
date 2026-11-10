/* Bài 24 · Vần an, ăn, ân — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: "Đàn gà cẩn thận ăn thóc" bỏ (thóc có vần oc chưa học); câu dài tách hai câu, bỏ "gì"; thêm "bé ăn", "thợ lặn", "củ sắn", "bàn chân", "cân"; bỏ "cái cân", "màn mưa" (ai, chưa học). */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần an, ăn, ân nhé!'
});

const AM = {
  loai: 'van',
  am: ['an', 'ăn', 'ân'],
  kho: 12,
  tho: ['Các giống vật,', 'Thật là nhiều:', 'Như con hươu,', 'Ở rừng cỏ.', 'Như con chó,', 'Nuôi giữ nhà.',
        'Con ba ba,', 'Loài máu lạnh.', 'Loài có cánh,', 'Như chim câu.', 'Còn loài sâu,', 'Như bọ róm.'],
  onCu: { chu: ['ua', 'ưa', 'ia'], tu: ['bé múa', 'cua bể', 'sữa chua', 'dưa lê', 'cà chua', 'cửa sổ'] },
  khoa: [
    { am: 'an', dau: 'b', tieng: 'bạn', tu: 'bạn thân' },
    { am: 'ăn', dau: 'kh', tieng: 'khăn', tu: 'khăn rằn' },
    { am: 'ân', dau: 'm', tieng: 'mận', tu: 'quả mận' }
  ],
  bang: { an: ['b', 'c', 'đ', 'l'], ăn: ['kh', 'ch', 'c', 'l'], ân: ['c', 'd', 'm', 'th'] },
  tu: { an: ['bàn ghế', 'nhà sàn', 'đàn ngan'], ăn: ['bé ăn', 'thợ lặn', 'củ sắn'], ân: ['bàn chân', 'cân', 'cẩn thận'] },
  cau: ['Bé Vân và bé Lan là bạn thân.', 'Đàn gà cứ tha thẩn gần chân mẹ.', 'Có mẹ che chở, cả đàn chả sợ lũ quạ dữ.']
};

amSetup();
