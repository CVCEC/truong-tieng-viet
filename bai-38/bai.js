/* Bài 38 · Vần at, ăt, ât — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "bật – bật lửa" đổi thành "lật – lật đật" (an toàn cho trẻ); câu Cát Bà rút gọn; bỏ "hai bím tóc tết", "mặt mẹ"; thêm "cắt cỏ", "xúc đất", "bật đèn". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần at, ăt, ât nhé!'
});

const AM = {
  loai: 'van',
  am: ['at', 'ăt', 'ât'],
  kho: 3,
  tho: ['Ai đẻ ta?', 'Cha cùng mẹ.', 'Bồng lại bế,', 'Thương và yêu.', 'Ơn nhường bao,', 'Con phải ngẫm:',
        'Áo mặc ấm,', 'Mẹ may cho.', 'Cơm ăn no,', 'Cha kiếm hộ.', 'Cha mẹ đó,', 'Là hai thân.'],
  onCu: { chu: ['oc', 'ôc', 'uc', 'ưc'], tu: ['con sóc', 'cái cốc', 'cúc áo', 'con mực', 'gốc cây', 'máy xúc'] },
  khoa: [
    { am: 'at', dau: 'h', tieng: 'hát', tu: 'bé hát' },
    { am: 'ăt', dau: 'b', tieng: 'bắt', tu: 'bắt tay' },
    { am: 'ât', dau: 'l', tieng: 'lật', tu: 'lật đật' }
  ],
  bang: { at: ['h', 'c', 'm', 'b'], ăt: ['b', 'c', 'm', 'd'], ât: ['l', 'đ', 'm', 'nh'] },
  tu: { at: ['bãi cát', 'hạt thóc', 'nghỉ mát'], ăt: ['đôi mắt', 'mặt trời', 'cắt cỏ'], ât: ['mật mía', 'xúc đất', 'bật đèn'] },
  cau: ['Mặt trời lặn ở phía tây.', 'Bé Nga có đôi mắt to tròn, đen láy.', 'Nghỉ hè, nhà bé Cúc đi nghỉ mát ở Cát Bà.']
};

amSetup();
