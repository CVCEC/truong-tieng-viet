/* Bài 36 · Vần ac, ăc, âc — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: câu "trưa nay bé mơ một giấc mơ đẹp" đổi (một, đẹp có vần ôt, ep chưa học); câu tóc bạc đổi (tóc có vần oc chưa học); bỏ "dấu sắc", "thắc mắc", "tóc bạc"; thêm "bác sĩ", "con hạc", "mặc áo", "tắc kè", "bậc thềm", "nhấc ghế". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần ac, ăc, âc nhé!'
});

const AM = {
  loai: 'van',
  am: ['ac', 'ăc', 'âc'],
  kho: 18,
  tho: ['Chữ nước ta,', 'Ta phải học,', 'Cho trí óc,', 'Ngày mở mang.', 'Muốn vẻ vang,', 'Phải làm lụng,',
        'Đừng lêu lổng,', 'Mà hư thân.', 'Nước đang cần,', 'Người tài giỏi,', 'Cố học hỏi,', 'Để tiến nhanh,', 'Vừa ích mình,', 'Vừa lợi nước.', 'Chớ lùi bước,', 'Là kẻ hèn.'],
  onCu: { chu: ['iu', 'ưu', 'au'], tu: ['cái rìu', 'con cừu', 'quả lựu', 'bưu tá', 'cái địu', 'líu lo'] },
  khoa: [
    { am: 'ac', dau: 'l', tieng: 'lạc', tu: 'củ lạc' },
    { am: 'ăc', dau: 'm', tieng: 'mắc', tu: 'mắc áo' },
    { am: 'âc', dau: 'g', tieng: 'gấc', tu: 'quả gấc' }
  ],
  bang: { ac: ['b', 'c', 'l', 'nh'], ăc: ['m', 'l', 'đ', 'h'], âc: ['g', 'b', 'nh', 'gi'] },
  tu: { ac: ['bản nhạc', 'bác sĩ', 'con hạc'], ăc: ['lắc đầu', 'mặc áo', 'tắc kè'], âc: ['giấc mơ', 'bậc thềm', 'nhấc ghế'] },
  cau: ['Bé kể mẹ nghe giấc mơ của bé.', 'Bà nhắc mẹ mặc áo ấm cho bé.', 'Bác Lạc là bác sĩ.']
};

amSetup();
