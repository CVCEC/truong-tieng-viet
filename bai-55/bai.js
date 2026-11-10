/* Bài 55 · Vần ươi, ươu — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "lưới – dưa lưới", "bươu – ốc bươu" đổi thành "bưởi – quả bưởi", "hươu – con hươu" (dễ vẽ); bỏ "chai rượu", "bướu cổ", "điểm mười" (tranh phải có chữ số); ba đoạn văn rút gọn thành ba câu; thêm "dưa lưới", "hươu cao cổ". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần ươi và vần ươu nhé!'
});

const AM = {
  loai: 'van',
  am: ['ươi', 'ươu'],
  kho: 4,
  tho: ['Hai thân là,', 'Là thân nhất,', 'Trong trời đất,', 'Không ai hơn.', 'Con biết ơn,', 'Nên phải hiếu.',
        'Nghĩa chữ hiếu,', 'Đạo làm con,', 'Con còn non,', 'Nên học trước.', 'Đi một bước,', 'Nhớ hai thân.'],
  onCu: { chu: ['uôn', 'uông'], tu: ['chuồn chuồn', 'quả chuông', 'cuộn chỉ', 'luống rau', 'hình vuông', 'buồng chuối'] },
  khoa: [
    { am: 'ươi', dau: 'b', tieng: 'bưởi', tu: 'quả bưởi' },
    { am: 'ươu', dau: 'h', tieng: 'hươu', tu: 'con hươu' }
  ],
  bang: { ươi: ['b', 'c', 'm', 't'], ươu: ['h', 'b', 'kh', 'r'] },
  tu: { ươi: ['tươi cười', 'cái lưới', 'dưa lưới'], ươu: ['ốc bươu', 'chim khướu', 'hươu cao cổ'] },
  cau: ['Bé Lan vẽ con hươu.', 'Bé Hà thích vẽ chim khướu.', 'Cô cho mỗi bạn điểm mười đỏ tươi.']
};

amSetup();
