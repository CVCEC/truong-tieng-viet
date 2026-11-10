/* Bài 30 · Vần ai, ay, ây — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: "hoa mai" đổi thành "quả vải" (oa chưa học); bỏ "số hai", "ngày mai" khỏi từ có tranh; câu cô dạy viết lại ngắn (bỏ "chưa", "nhớ bài"). */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần ai, ay, ây nhé!'
});

const AM = {
  loai: 'van',
  am: ['ai', 'ay', 'ây'],
  kho: 15,
  tho: ['Các loài kim,', 'Tìm ở đất.', 'Nhất là sắt,', 'Nhì là đồng,', 'Làm đồ dùng,', 'Khắp trong nước.',
        ],
  onCu: { chu: ['em', 'êm', 'im', 'um'], tu: ['tem thư', 'chú chim', 'chùm nho', 'que kem', 'ghế đệm', 'kim chỉ'] },
  khoa: [
    { am: 'ai', dau: 'v', tieng: 'vải', tu: 'quả vải' },
    { am: 'ay', dau: 'b', tieng: 'bay', tu: 'máy bay' },
    { am: 'ây', dau: 'm', tieng: 'mây', tu: 'đám mây' }
  ],
  bang: { ai: ['m', 'h', 'v', 't'], ay: ['b', 'm', 'c', 'd'], ây: ['c', 'm', 'th', 'đ'] },
  tu: { ai: ['gà mái', 'cái tai', 'cái chai'], ay: ['máy cày', 'bàn tay', 'nhảy dây'], ây: ['thầy cô', 'thợ xây', 'cây cam'] },
  cau: ['Mẹ Hải cấy lúa, bố Hải lái máy cày.', 'Cô dạy bé vẽ máy bay.', 'Ngày mai, bé chú ý nghe cô dạy.']
};

amSetup();
