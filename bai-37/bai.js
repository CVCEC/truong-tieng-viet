/* Bài 37 · Vần oc, ôc, uc, ưc — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; "hoa cúc" → "cúc áo" (oa chưa học); "em học bài" → "bé học bài"; bỏ "khói bốc nghi ngút", "bức tường", "tức giận", "phía sau". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần oc, ôc, uc, ưc nhé!'
});

const AM = {
  loai: 'van',
  am: ['oc', 'ôc', 'uc', 'ưc'],
  kho: 2,
  tho: ['Trong trời đất,', 'Nhất là người.', 'Ở trên đời,', 'Hơn giống vật.', 'Con bé thật,', 'Chưa biết gì.',
        'Phải dạy bảo,', 'Cho biết đạo,', 'Mới nên thân.', 'Sau lớn dần,', 'Con sẽ khá.'],
  onCu: { chu: ['ac', 'ăc', 'âc'], tu: ['củ lạc', 'mắc áo', 'quả gấc', 'bản nhạc', 'giấc mơ', 'lắc đầu'] },
  khoa: [
    { am: 'oc', dau: 's', tieng: 'sóc', tu: 'con sóc' },
    { am: 'ôc', dau: 'c', tieng: 'cốc', tu: 'cái cốc' },
    { am: 'uc', dau: 'c', tieng: 'cúc', tu: 'cúc áo' },
    { am: 'ưc', dau: 'm', tieng: 'mực', tu: 'con mực' }
  ],
  bang: { oc: ['s', 'h', 'c', 't'], ôc: ['c', 'b', 'm', 'l'], uc: ['c', 'đ', 'ch', 'x'], ưc: ['m', 'l', 'b', 'đ'] },
  tu: { oc: ['tóc bạc', 'bé học bài', 'con cóc'], ôc: ['gốc cây', 'con ốc', 'thợ mộc'], uc: ['máy xúc', 'cúc vạn thọ', 'xúc cơm'], ưc: ['lọ mực', 'nức nở', 'thức dậy'] },
  cau: ['Sau nhà, cúc vạn thọ đã nở rộ.', 'Mẹ mua lọ mực tím cho bé ở chợ gần nhà.', 'Chú Tư là thợ mộc, chú mua gốc cây về xẻ gỗ.']
};

amSetup();
