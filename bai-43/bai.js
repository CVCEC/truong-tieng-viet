/* Bài 43 · Vần op, ôp, ơp — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; bỏ đoạn "Tan học, cả lớp xếp hàng…" (xếp, hàng có vần chưa học) và đoạn bé Lan thi hát; câu mưa lộp độp rút gọn; thêm "họp chợ", "lợp nhà", "cá đớp mồi". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần op, ôp, ơp nhé!'
});

const AM = {
  loai: 'van',
  am: ['op', 'ôp', 'ơp'],
  kho: 8,
  tho: ['Người trong họ,', 'Tổ sinh ra,', 'Ông đến cha,', 'Bác cùng chú.', 'Họ nội đó,', 'Là tông chi,',
        'Cậu và dì,', 'Về họ mẹ.', 'Con còn bé,', 'Nên dạy qua,', 'Còn họ xa,', 'Sau mới biết.'],
  onCu: { chu: ['ap', 'ăp', 'âp'], tu: ['xe đạp', 'cặp da', 'cá mập', 'sáp màu', 'cải bắp', 'tôm hấp'] },
  khoa: [
    { am: 'op', dau: 'c', tieng: 'cọp', tu: 'con cọp' },
    { am: 'ôp', dau: 'h', tieng: 'hộp', tu: 'hộp bút' },
    { am: 'ơp', dau: 'l', tieng: 'lớp', tu: 'lớp học' }
  ],
  bang: { op: ['c', 'h', 't', 'ch'], ôp: ['h', 'l', 't', 'đ'], ơp: ['l', 'ch', 'đ', 'r'] },
  tu: { op: ['tóp mỡ', 'chóp núi', 'họp chợ'], ôp: ['lốp xe', 'tốp ca', 'lộp độp'], ơp: ['tia chớp', 'lợp nhà', 'cá đớp mồi'] },
  cau: ['Mưa rơi lộp độp.', 'Họ nhà nhái tụ họp bên bờ ao.', 'Bé cất bút vào hộp, đội mũ và chào cô.']
};

amSetup();
