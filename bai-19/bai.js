/* Bài 19 · Âm th — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: "con thỏ" → "chú thỏ" (con có vần on chưa học); bỏ "quả thị" (qu chưa học), câu 3 bỏ "quả thị";
   slide ghi Lên Sáu khổ 9, đúng thứ tự là khổ 10; thêm vòng "t hay th?". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm thờ nhé!',
  'am-luat-tth': 'Các bạn nghe kĩ: tờ hay thờ nhé?'
});

const AM = {
  am: ['th'],
  kho: 10,
  tho: ['Con bé dại,', 'Mải vui chơi.', 'Muốn ra người,', 'Phải chăm học.', 'Miệng đang đọc,', 'Đừng trông ngang.',
        'Học dở dang,', 'Đừng có chán.', 'Học có bạn,', 'Con dễ hay.', 'Mến trọng thầy,', 'Học chóng biết.'],
  onCu: { chu: ['tr', 'ngh', 'ng'], tu: ['trà đá', 'tre', 'nhà trẻ', 'cá trê', 'vũ trụ', 'nghỉ hè'] },
  khoa: [
    { am: 'th', van: 'o', tieng: 'thỏ', tu: 'chú thỏ' },
    { am: 'th', van: 'a', tieng: 'thả', tu: 'thả cá' },
    { am: 'th', van: 'ư', tieng: 'thư', tu: 'lá thư' },
    { am: 'th', van: 'u', tieng: 'thu', tu: 'cá thu' }
  ],
  bang: { th: ['a', 'ô', 'e', 'i', 'u'] },
  tu: { th: ['nhà thơ', 'thủ thỉ', 'sở thú'] },
  cau: ['Bà cho bé cá thu.', 'Xe ô tô chở khỉ và thỏ về sở thú.', 'Bà ra thủ đô, bé có lá thư cho bà.'],
  luat: { ten: 't hay th?', chon: ['t', 'th'], nhac: 'am-luat-tth', muc: [
    { w: 'thả cá', dung: 'th' }, { w: 'tò mò', dung: 't' }, { w: 'thỏ', dung: 'th' },
    { w: 'ti hí', dung: 't' }, { w: 'thủ thỉ', dung: 'th' }, { w: 'tô', dung: 't' }] }
};

amSetup();
