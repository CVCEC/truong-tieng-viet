/* Bài 44 · Vần ep, êp, ip, up — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "kẹp – kẹp tóc" đổi thành "dép – đôi dép", "kịp – kịp lúc" đổi thành "bịp – chim bìm bịp" (dễ vẽ), "bếp – đồ bếp" đổi thành "đầu bếp"; đoạn dọn nhà rút gọn (bỏ "cuối tuần", "phòng", "gọn gàng", "sạch" có vần chưa học); thêm "kẹp tóc", "xếp ghế", "híp mắt", "búp bê", "giúp mẹ". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần ep, êp, ip, up nhé!'
});

const AM = {
  loai: 'van',
  am: ['ep', 'êp', 'ip', 'up'],
  kho: 9,
  tho: ['Người trong họ,', 'Có bề trên,', 'Lạ hay quen,', 'Đều phải kính.', 'Có khách đến,', 'Không được đùa,',
        'Ai cho quà,', 'Đừng lấy vội.', 'Ông bà gọi,', 'Phải dạ thưa.', 'Phàm người nhà,', 'Không được hỗn.'],
  onCu: { chu: ['op', 'ôp', 'ơp'], tu: ['con cọp', 'hộp bút', 'lớp học', 'lốp xe', 'tóp mỡ', 'tia chớp'] },
  khoa: [
    { am: 'ep', dau: 'd', tieng: 'dép', tu: 'đôi dép' },
    { am: 'êp', dau: 'b', tieng: 'bếp', tu: 'đầu bếp' },
    { am: 'ip', dau: 'b', tieng: 'bịp', tu: 'chim bìm bịp' },
    { am: 'up', dau: 'b', tieng: 'búp', tu: 'búp sen' }
  ],
  bang: { ep: ['d', 'k', 'ch', 'đ'], êp: ['b', 'n', 'x', 'r'], ip: ['b', 'k', 'nh', 'h'], up: ['b', 'n', 'gi', 'h'] },
  tu: { ep: ['cá chép', 'kẹp tóc', 'dọn dẹp'], êp: ['cơm nếp', 'bếp lửa', 'xếp ghế'], ip: ['híp mắt', 'kịp giờ', 'chíp chíp'], up: ['búp bê', 'giúp mẹ', 'lúp xúp'] },
  cau: ['Bé phụ mẹ dọn dẹp nhà cửa.', 'Bé xếp ghế, lau bàn và cất đồ chơi vào sọt.', 'Mẹ khen bé chăm chỉ.']
};

amSetup();
