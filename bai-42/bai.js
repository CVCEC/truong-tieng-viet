/* Bài 42 · Vần ap, ăp, âp — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; câu "Chủ nhật… hát nghêu ngao" rút gọn (bỏ "nghêu ngao" có vần chưa học); bỏ "gặp gỡ" khó vẽ; thêm "rạp hát", "bắp ngô", "đắp chăn", "tập bơi". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần ap, ăp, âp nhé!'
});

const AM = {
  loai: 'van',
  am: ['ap', 'ăp', 'âp'],
  kho: 7,
  tho: ['Anh em ruột,', 'Một mẹ cha,', 'Mẹ đẻ ra,', 'Trước sau đó.', 'Cùng máu mủ,', 'Như tay chân,',
        'Nên yêu thân,', 'Chớ ganh tị.', 'Em coi chị,', 'Cũng như anh,', 'Trước là tình,', 'Sau có lễ.'],
  onCu: { chu: ['ut', 'ưt'], tu: ['cái bút', 'lọ mứt', 'bút chì', 'mứt dừa', 'chim cút', 'nứt nẻ'] },
  khoa: [
    { am: 'ap', dau: 'đ', tieng: 'đạp', tu: 'xe đạp' },
    { am: 'ăp', dau: 'c', tieng: 'cặp', tu: 'cặp da' },
    { am: 'âp', dau: 'm', tieng: 'mập', tu: 'cá mập' }
  ],
  bang: { ap: ['đ', 'c', 's', 'r'], ăp: ['c', 'b', 'g', 's'], âp: ['m', 't', 'h', 'n'] },
  tu: { ap: ['sáp màu', 'bài tập', 'rạp hát'], ăp: ['cải bắp', 'bắp ngô', 'đắp chăn'], âp: ['tôm hấp', 'tấp nập', 'tập bơi'] },
  cau: ['Mẹ mua cho bé cặp da, bé hứa sẽ học tập thật chăm chỉ.', 'Phố xá ban đêm thật tấp nập.', 'Bố và bé đạp xe khắp phố.']
};

amSetup();
