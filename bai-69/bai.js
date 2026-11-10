/* Bài 69 · Vần yêt, yêng, oen, oao — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "hoen – hoen m…" (slide bị cắt) sửa thành "hoen – hoen gỉ", "ngoao – mèo kêu ngoao ngoao" rút gọn thành "mèo ngoao"; bỏ "hoen ố", "ngoáo"; ba đoạn văn rút gọn thành ba câu (bỏ "đặc biệt", "khoảng cách", "môi trường"); thêm "yết thị", "niêm yết", "yết kiến", "yểng nói", "kêu ngoao". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần yêt, yêng, oen, oao nhé!'
});

const AM = {
  loai: 'van',
  am: ['yêt', 'yêng', 'oen', 'oao'],
  kho: 2,
  tho: ['Trong trời đất,', 'Nhất là người.', 'Ở trên đời,', 'Hơn giống vật.', 'Con bé thật,', 'Chưa biết gì.',
        'Phải dạy bảo,', 'Cho biết đạo,', 'Mới nên thân.', 'Sau lớn dần,', 'Con sẽ khá.'],
  onCu: { chu: ['eng', 'oanh'], tu: ['cái xẻng', 'khoanh tròn', 'leng keng', 'cái kẻng', 'chim oanh', 'ngoảnh lại'] },
  khoa: [
    { am: 'yêt', dau: '', tieng: 'yết', tu: 'yết hầu' },
    { am: 'yêng', dau: '', tieng: 'yểng', tu: 'chim yểng' },
    { am: 'oen', dau: 'h', tieng: 'hoen', tu: 'hoen gỉ' },
    { am: 'oao', dau: 'ng', tieng: 'ngoao', tu: 'mèo ngoao' }
  ],
  bang: { yêt: [''], yêng: [''], oen: ['h', 'kh', 'nh', 'x'], oao: ['ng', 'm', 'h', 'kh'] },
  tu: { yêt: ['yết thị', 'niêm yết', 'yết kiến'], yêng: ['yểng hót', 'yểng nói', 'tiếng yểng'], oen: ['nhoẻn cười', 'nhoẻn miệng', 'hoen ố'], oao: ['ngoao ngoao', 'kêu ngoao', 'mèo con ngoao'] },
  cau: ['Mèo kêu ngoao ngoao.', 'Chim yểng biết nói.', 'Bé nhoẻn miệng cười.']
};

amSetup();
