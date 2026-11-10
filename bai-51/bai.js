/* Bài 51 · Vần iêu, yêu, iêt — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "thiếu – thiếu hụt", "yêu – yêu thương" đổi thành "diều – con diều", "yêu – yêu mẹ" (thương có vần chưa học); bỏ "Việt Nam" (tránh vẽ cờ), "điệu đà"; đoạn vải thiều và đoạn trải chiếu rút gọn (bỏ "trồng", "Thanh Hà", "cùi", "miệng", "dưới", "thưởng thức"); thêm "đáng yêu", "yếu ớt", "viết chữ", "biết bơi". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần iêu, yêu, iêt nhé!'
});

const AM = {
  loai: 'van',
  am: ['iêu', 'yêu', 'iêt'],
  kho: 17,
  tho: ['Đầu trị nước,', 'Đức Kinh Dương.', 'Truyện Hùng Vương,', 'Mười tám chúa.', 'Qua mấy họ,', 'Quân Tàu sang.',
        'Vua Đinh Hoàng,', 'Khai nghiệp đế.', 'Trải Đinh, Lý,', 'Đến Trần, Lê,', 'Nay nước ta,', 'Là nước Việt.'],
  onCu: { chu: ['iêng', 'iêm', 'yên'], tu: ['sầu riêng', 'cá kiếm', 'yên ngựa', 'củ riềng', 'bao diêm', 'tổ yến'] },
  khoa: [
    { am: 'iêu', dau: 'd', tieng: 'diều', tu: 'con diều' },
    { am: 'yêu', dau: '', tieng: 'yêu', tu: 'yêu mẹ' },
    { am: 'iêt', dau: 'nh', tieng: 'nhiệt', tu: 'nhiệt kế' }
  ],
  bang: { iêu: ['d', 'ch', 'th', 'l'], yêu: [''], iêt: ['nh', 'v', 'b', 't'] },
  tu: { iêu: ['cái chiếu', 'vải thiều', 'lá liễu'], yêu: ['yêu chiều', 'đáng yêu', 'yếu ớt'], iêt: ['thời tiết', 'viết chữ', 'biết bơi'] },
  cau: ['Cả nhà trải chiếu ở gốc cây liễu.', 'Bé nhìn nhiệt kế, thấy trời nóng.', 'Trên cao, những cánh diều bay.']
};

amSetup();
