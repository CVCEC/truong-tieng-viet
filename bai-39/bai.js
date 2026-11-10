/* Bài 39 · Vần ot, ôt, ơt — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "ngọt – ngọt ngào" đổi thành "sọt – cái sọt" (dễ vẽ), "cột – cột cờ" đổi thành "rốt – cà rốt" (tránh vẽ cờ); bỏ "xà cừ cổ thụ"; thêm "kẹo ngọt", "cột nhà"; giữ "đôi bốt". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần ot, ôt, ơt nhé!'
});

const AM = {
  loai: 'van',
  am: ['ot', 'ôt', 'ơt'],
  kho: 4,
  tho: ['Hai thân là,', 'Là thân nhất,', 'Trong trời đất,', 'Không ai hơn.', 'Con biết ơn,', 'Nên phải hiếu.',
        'Nghĩa chữ hiếu,', 'Đạo làm con,', 'Con còn non,', 'Nên học trước.', 'Đi một bước,', 'Nhớ hai thân.'],
  onCu: { chu: ['at', 'ăt', 'ât'], tu: ['bãi cát', 'mật mía', 'mặt trời', 'đôi mắt', 'bắt tay', 'hạt thóc'] },
  khoa: [
    { am: 'ot', dau: 's', tieng: 'sọt', tu: 'cái sọt' },
    { am: 'ôt', dau: 'r', tieng: 'rốt', tu: 'cà rốt' },
    { am: 'ơt', dau: 'th', tieng: 'thớt', tu: 'cái thớt' }
  ],
  bang: { ot: ['h', 'ng', 's', 't'], ôt: ['c', 'r', 't', 'h'], ơt: ['th', 'b', 'v', 'nh'] },
  tu: { ot: ['quả nhót', 'bò tót', 'kẹo ngọt'], ôt: ['lá lốt', 'cột nhà', 'đôi bốt'], ơt: ['quả ớt', 'cái vợt', 'dầu nhớt'] },
  cau: ['Sau nhà bà là cây nhót, cây ớt và cả cây lá lốt.', 'Bà hái cho bé Lan đầy một giỏ nhót.', 'Bố mua cho bé cái vợt mới.']
};

amSetup();
