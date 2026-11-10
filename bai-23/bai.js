/* Bài 23 · Vần ua, ưa — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: bỏ "dưa hấu" (vần âu chưa học), "múa ô", "đĩa nhựa"; thêm "chùa", "đũa", "cưa gỗ";
   câu dài của slide tách làm hai câu ngắn. */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần ua và vần ưa nhé!'
});

const AM = {
  loai: 'van',
  am: ['ua', 'ưa'],
  kho: 12,
  tho: ['Các giống vật,', 'Thật là nhiều:', 'Như con hươu,', 'Ở rừng cỏ.', 'Như con chó,', 'Nuôi giữ nhà.',
        'Con ba ba,', 'Loài máu lạnh.', 'Loài có cánh,', 'Như chim câu.', 'Còn loài sâu,', 'Như bọ róm.'],
  onCu: { chu: ['ia', 'qu', 'ph'], tu: ['bẻ mía', 'thìa', 'đĩa', 'lá tía tô', 'vỉa hè', 'bìa vở'] },
  khoa: [
    { am: 'ua', dau: 'm', tieng: 'múa', tu: 'bé múa' },
    { am: 'ua', dau: 'c', tieng: 'cua', tu: 'cua bể' },
    { am: 'ưa', dau: 's', tieng: 'sữa', tu: 'sữa chua' },
    { am: 'ưa', dau: 'd', tieng: 'dưa', tu: 'dưa lê' }
  ],
  bang: { ua: ['c', 'm', 'ch', 'l'], ưa: ['m', 'c', 'đ', 'l'] },
  tu: { ua: ['cà chua', 'chùa', 'đũa'], ưa: ['cửa sổ', 'quả dưa', 'cưa gỗ'] },
  cau: ['Bé mở cửa sổ để đưa thư cho mẹ.', 'Bà cho quà, bé chia quà cho cả nhà.', 'Cua bể cho bố, cà chua cho mẹ, sữa chua cho chị.']
};

amSetup();
