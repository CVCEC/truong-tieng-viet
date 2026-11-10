/* Bài 68 · Vần eng, oanh — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "leng – leng keng" đổi thành "xẻng – cái xẻng" (dễ vẽ); bỏ "hoành tráng", "doanh nhân", "hoạnh họe", "rách toanh" (slide ghi lẫn "toang"); ba đoạn văn rút gọn thành ba câu; thêm "cái kẻng", "xà beng". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần eng và vần oanh nhé!'
});

const AM = {
  loai: 'van',
  am: ['eng', 'oanh'],
  kho: 18,
  tho: ['Chữ nước ta,', 'Ta phải học,', 'Cho trí óc,', 'Ngày mở mang.', 'Muốn vẻ vang,', 'Phải làm lụng,',
        'Đừng lêu lổng,', 'Mà hư thân.', 'Nước đang cần,', 'Người tài giỏi,', 'Cố học hỏi,', 'Để tiến nhanh,', 'Vừa ích mình,', 'Vừa lợi nước.', 'Chớ lùi bước,', 'Là kẻ hèn.'],
  onCu: { chu: ['oong', 'yêm', 'oay'], tu: ['cái xoong', 'cái yếm', 'lốc xoáy', 'boong tàu', 'âu yếm', 'loay hoay'] },
  khoa: [
    { am: 'eng', dau: 'x', tieng: 'xẻng', tu: 'cái xẻng' },
    { am: 'oanh', dau: 'kh', tieng: 'khoanh', tu: 'khoanh tròn' }
  ],
  bang: { eng: ['x', 'k', 'l', 'h'], oanh: ['kh', 'l', 'h', 'd'] },
  tu: { eng: ['leng keng', 'cái kẻng', 'xà beng'], oanh: ['chim oanh', 'loanh quanh', 'ngoảnh lại'] },
  cau: ['Chim oanh hót rất hay.', 'Chuông xe kêu leng keng.', 'Nghe mẹ gọi, bé ngoảnh lại.']
};

amSetup();
