/* Bài 63 · Vần uyên, uyêt — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "xuyên – xuyên suốt", "tuyết – trắng như tuyết" đổi thành "thuyền – con thuyền", "tuyết – người tuyết" (dễ vẽ); bỏ "phê duyệt", "truyền thuyết", "sò huyết", "chiến tuyến", "quyển truyện" (qu là âm đầu, vần còn lại là yên); thơ trăng khuyết gộp thành một câu; thêm "truyện tranh", "luyện tập", "tuyết rơi". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần uyên và vần uyêt nhé!'
});

const AM = {
  loai: 'van',
  am: ['uyên', 'uyêt'],
  kho: 12,
  tho: ['Các giống vật,', 'Thật là nhiều:', 'Như con hươu,', 'Ở rừng cỏ.', 'Như con chó,', 'Nuôi giữ nhà.',
        'Con ba ba,', 'Loài máu lạnh.', 'Loài có cánh,', 'Như chim câu.', 'Còn loài sâu,', 'Như bọ róm.'],
  onCu: { chu: ['uân', 'uât'], tu: ['mùa xuân', 'võ thuật', 'tuần tra', 'huân chương', 'nghệ thuật', 'luật lệ'] },
  khoa: [
    { am: 'uyên', dau: 'th', tieng: 'thuyền', tu: 'con thuyền' },
    { am: 'uyêt', dau: 't', tieng: 'tuyết', tu: 'người tuyết' }
  ],
  bang: { uyên: ['th', 'kh', 'ch', 'l'], uyêt: ['t', 'kh', 'h', 'd'] },
  tu: { uyên: ['chim khuyên', 'truyện tranh', 'luyện tập'], uyêt: ['trăng khuyết', 'tuyết rơi', 'Bạch Tuyết'] },
  cau: ['Trăng khuyết trông giống con thuyền trôi.', 'Bà kể chuyện cổ tích cho Nga nghe.', 'Nga thích nghe chuyện Bạch Tuyết.']
};

amSetup();
