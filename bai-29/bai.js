/* Bài 29 · Vần em, êm, im, um — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: khổ 15 trong slide chép nhầm 6 câu sau của khổ 14, tạm dùng 6 câu đầu; "tay mẹ mềm mại", "trái tim", "lùm cây" đổi (ay, ai, ây chưa học) thành "ban đêm", "chú chim", "chùm nho"; câu đi chợ viết lại ngắn, bỏ "nằm", "đến". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần em, êm, im, um nhé!'
});

const AM = {
  loai: 'van',
  am: ['em', 'êm', 'im', 'um'],
  kho: 15,
  tho: ['Các loài kim,', 'Tìm ở đất.', 'Nhất là sắt,', 'Nhì là đồng,', 'Làm đồ dùng,', 'Khắp trong nước.',
        ],
  onCu: { chu: ['om', 'ôm', 'ơm'], tu: ['đom đóm', 'con tôm', 'ăn cơm', 'chó đốm', 'bơm xe', 'rơm khô'] },
  khoa: [
    { am: 'em', dau: 't', tieng: 'tem', tu: 'tem thư' },
    { am: 'êm', dau: 'đ', tieng: 'đêm', tu: 'ban đêm' },
    { am: 'im', dau: 'ch', tieng: 'chim', tu: 'chú chim' },
    { am: 'um', dau: 'ch', tieng: 'chùm', tu: 'chùm nho' }
  ],
  bang: { em: ['t', 'k', 'n', 'h'], êm: ['đ', 'n', 'm', 'th'], im: ['t', 'ch', 'k', 'l'], um: ['c', 'ch', 'l', 't'] },
  tu: { em: ['que kem', 'ngõ hẻm', 'nem rán'], êm: ['ghế đệm', 'thềm nhà', 'bé nếm'], im: ['kim chỉ', 'chim sẻ', 'quả sim'], um: ['tôm hùm', 'trùm khăn', 'chùm khế'] },
  cau: ['Ban đêm, chú chó ngủ ở thềm nhà.', 'Chợ ở ngõ hẻm, mẹ đi bộ ra chợ.', 'Mẹ mua cam, mua kim chỉ và cả chùm nho cho bé.']
};

amSetup();
