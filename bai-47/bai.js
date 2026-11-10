/* Bài 47 · Vần ang, ăng, âng — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "mang – hổ mang", "bằng – bằng nhau" đổi thành "vàng – cá vàng", "măng – măng tre" (dễ vẽ, an toàn cho trẻ); đoạn "Tháng năm… Lăng Bác Hồ" và đoạn Nhà hát Lớn bỏ (nhiều vần chưa học); giữ ba dòng thơ "Mèo con đi học"; thêm "lá bàng", "trời nắng", "đánh răng", "trăng rằm". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần ang, ăng, âng nhé!'
});

const AM = {
  loai: 'van',
  am: ['ang', 'ăng', 'âng'],
  kho: 12,
  tho: ['Các giống vật,', 'Thật là nhiều:', 'Như con hươu,', 'Ở rừng cỏ.', 'Như con chó,', 'Nuôi giữ nhà.',
        'Con ba ba,', 'Loài máu lạnh.', 'Loài có cánh,', 'Như chim câu.', 'Còn loài sâu,', 'Như bọ róm.'],
  onCu: { chu: ['ach', 'êch', 'ich'], tu: ['sách vở', 'tờ lịch', 'con ếch', 'xúc xích', 'xe khách', 'chim chích'] },
  khoa: [
    { am: 'ang', dau: 'v', tieng: 'vàng', tu: 'cá vàng' },
    { am: 'ăng', dau: 'm', tieng: 'măng', tu: 'măng tre' },
    { am: 'âng', dau: 't', tieng: 'tầng', tu: 'nhà tầng' }
  ],
  bang: { ang: ['v', 'b', 'h', 'th'], ăng: ['m', 'n', 'r', 'tr'], âng: ['t', 'v', 'n', 'd'] },
  tu: { ang: ['cái bảng', 'màu vàng', 'lá bàng'], ăng: ['trời nắng', 'đánh răng', 'trăng rằm'], âng: ['vầng trăng', 'nâng niu', 'vâng lời'] },
  cau: ['Hôm nay trời nắng chang chang.', 'Mèo con đi học chẳng mang thứ gì.', 'Chỉ mang một cái bút chì.']
};

amSetup();
