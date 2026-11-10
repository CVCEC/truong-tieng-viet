/* Bài 18 · Âm tr — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: "Nhà bà có cây tre" → "tre" (cây có vần ây chưa học); câu hồ cá bỏ "quê", "thứ", "cá quả" (qu, th chưa học);
   bỏ "tri kỷ", "lý trí", "chủ trì" (khó hiểu với trẻ); thêm vòng "ch hay tr?". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm trờ nhé!',
  'am-luat-chtr': 'Các bạn nghe kĩ: chờ hay trờ nhé?'
});

const AM = {
  am: ['tr'],
  kho: 9,
  tho: ['Người trong họ,', 'Có bề trên,', 'Lạ hay quen,', 'Đều phải kính.', 'Có khách đến,', 'Không được đùa,',
        'Ai cho quà,', 'Đừng lấy vội.', 'Ông bà gọi,', 'Phải dạ thưa.', 'Phàm người nhà,', 'Không được hỗn.'],
  onCu: { chu: ['ngh', 'ng', 'nh'], tu: ['nghé ọ', 'củ nghệ', 'nghỉ hè', 'ngõ nhỏ', 'nhà lá', 'bí ngô'] },
  khoa: [
    { am: 'tr', van: 'a', tieng: 'trà', tu: 'trà đá' },
    { am: 'tr', van: 'e', tieng: 'tre', tu: 'tre' },
    { am: 'tr', van: 'e', tieng: 'trẻ', tu: 'nhà trẻ' }
  ],
  bang: { tr: ['a', 'o', 'e', 'i', 'u'] },
  tu: { tr: ['cá trê', 'vũ trụ', 'trở về'] },
  cau: ['Mẹ bế bé đi nhà trẻ.', 'Bà có trà đá cho bé.', 'Hồ cá nhà bà có cá trê, cá mè, cá rô.'],
  luat: { ten: 'ch hay tr?', chon: ['ch', 'tr'], nhac: 'am-luat-chtr', muc: [
    { w: 'trà đá', dung: 'tr' }, { w: 'chè', dung: 'ch' }, { w: 'tre', dung: 'tr' },
    { w: 'chợ cá', dung: 'ch' }, { w: 'trở về', dung: 'tr' }, { w: 'chú chó', dung: 'ch' }] }
};

amSetup();
