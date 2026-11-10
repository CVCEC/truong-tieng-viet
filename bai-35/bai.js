/* Bài 35 · Vần iu, ưu — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: khóa "xíu – bé xíu" đổi thành "rìu – cái rìu" (dễ vẽ); bỏ "lưu ban", "mưu trí", "hiu hiu", "ngải cứu"; đoạn bà kể chuyện rút gọn (bỏ "chuyện", "tối", "dọn" có vần chưa học). */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần iu và vần ưu nhé!'
});

const AM = {
  loai: 'van',
  am: ['iu', 'ưu'],
  kho: 18,
  tho: ['Chữ nước ta,', 'Ta phải học,', 'Cho trí óc,', 'Ngày mở mang.', 'Muốn vẻ vang,', 'Phải làm lụng,',
        'Đừng lêu lổng,', 'Mà hư thân.', 'Nước đang cần,', 'Người tài giỏi,', 'Cố học hỏi,', 'Để tiến nhanh,', 'Vừa ích mình,', 'Vừa lợi nước.', 'Chớ lùi bước,', 'Là kẻ hèn.'],
  onCu: { chu: ['au', 'âu', 'êu'], tu: ['quả cau', 'cây cầu', 'cây nêu', 'quả dâu', 'con sâu', 'thêu áo'] },
  khoa: [
    { am: 'iu', dau: 'r', tieng: 'rìu', tu: 'cái rìu' },
    { am: 'ưu', dau: 'c', tieng: 'cừu', tu: 'con cừu' }
  ],
  bang: { iu: ['r', 'd', 'x', 'ch'], ưu: ['c', 'h', 'l', 'b'] },
  tu: { iu: ['cái địu', 'líu lo', 'bé xíu'], ưu: ['quả lựu', 'bưu tá', 'nghỉ hưu'] },
  cau: ['Cây vải và cây lựu đều trĩu quả.', 'Bà đã già, nay bà đã nghỉ hưu.', 'Lời bà kể dịu êm bên tai bé.']
};

amSetup();
