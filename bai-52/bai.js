/* Bài 52 · Vần uôi, uôm — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "nguội – đồ ăn đã nguội" đổi thành "chuối – quả chuối" (dễ vẽ); giữ bốn dòng đầu bài thơ "Cô và mẹ" (lấy ba dòng); bỏ đoạn cánh buồm và đoạn Trung thu (có "những", "căng", "nước", "trăng", "đèn"… nhiều vần chưa học hoặc dài); bỏ "luộm thuộm", "chú Cuội"; thêm "ao chuôm". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần uôi và vần uôm nhé!'
});

const AM = {
  loai: 'van',
  am: ['uôi', 'uôm'],
  kho: 18,
  tho: ['Chữ nước ta,', 'Ta phải học,', 'Cho trí óc,', 'Ngày mở mang.', 'Muốn vẻ vang,', 'Phải làm lụng,',
        'Đừng lêu lổng,', 'Mà hư thân.', 'Nước đang cần,', 'Người tài giỏi,', 'Cố học hỏi,', 'Để tiến nhanh,', 'Vừa ích mình,', 'Vừa lợi nước.', 'Chớ lùi bước,', 'Là kẻ hèn.'],
  onCu: { chu: ['iêu', 'yêu', 'iêt'], tu: ['con diều', 'yêu mẹ', 'nhiệt kế', 'cái chiếu', 'vải thiều', 'thời tiết'] },
  khoa: [
    { am: 'uôi', dau: 'ch', tieng: 'chuối', tu: 'quả chuối' },
    { am: 'uôm', dau: 'b', tieng: 'buồm', tu: 'cánh buồm' }
  ],
  bang: { uôi: ['ch', 'm', 'r', 'đ'], uôm: ['b', 'nh', 'ch', 'l'] },
  tu: { uôi: ['con ruồi', 'cá đuối', 'chuỗi hạt'], uôm: ['quả muỗm', 'nhuộm tóc', 'ao chuôm'] },
  cau: ['Buổi sáng bé chào mẹ.', 'Chạy tới ôm cổ cô.', 'Buổi chiều bé chào cô.']
};

amSetup();
