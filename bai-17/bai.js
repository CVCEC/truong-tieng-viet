/* Bài 17 · Âm ngh — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js, tranh ở chung/tranh.js
   Sửa so với slide: bỏ "ngô nghê", "nghi ngờ", "nghị sĩ" (khó vẽ, khó hiểu với trẻ); thêm "bé nghe bà"; thêm vòng "ng hay ngh?". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học âm ngờ kép nhé!',
  'am-luat-ngngh': 'Các bạn nhớ nhé: đứng trước e, ê, i thì viết ngh, còn lại viết ng.'
});

const AM = {
  am: ['ngh'],
  kho: 9,
  tho: ['Người trong họ,', 'Có bề trên,', 'Lạ hay quen,', 'Đều phải kính.', 'Có khách đến,', 'Không được đùa,',
        'Ai cho quà,', 'Đừng lấy vội.', 'Ông bà gọi,', 'Phải dạ thưa.', 'Phàm người nhà,', 'Không được hỗn.'],
  onCu: { chu: ['ng', 'nh', 'gh'], tu: ['bí ngô', 'cá ngừ', 'ngõ nhỏ', 'ru ngủ', 'bẻ ngô', 'ngủ mơ'] },
  khoa: [
    { am: 'ngh', van: 'e', tieng: 'nghé', tu: 'nghé ọ' },
    { am: 'ngh', van: 'ê', tieng: 'nghệ', tu: 'củ nghệ' },
    { am: 'ngh', van: 'i', tieng: 'nghỉ', tu: 'nghỉ hè' }
  ],
  bang: { ngh: ['e', 'ê', 'i'] },
  tu: { ngh: ['nghệ sĩ', 'bé nghe bà', 'đề nghị'] },
  cau: ['Bố chú Tư là nghệ sĩ.', 'Nhà cô Hà có chú nghé tơ.', 'Nghỉ hè, bé về ở nhà bà, bà cho bé đi lễ.'],
  luat: { ten: 'ng hay ngh?', chon: ['ng', 'ngh'], nhac: 'am-luat-ngngh', muc: [
    { w: 'nghé ọ', dung: 'ngh' }, { w: 'ngõ nhỏ', dung: 'ng' }, { w: 'nghỉ hè', dung: 'ngh' },
    { w: 'ngủ mơ', dung: 'ng' }, { w: 'nghệ sĩ', dung: 'ngh' }, { w: 'ngả mũ', dung: 'ng' }] }
};

amSetup();
