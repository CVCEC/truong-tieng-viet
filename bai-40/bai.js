/* Bài 40 · Vần et, êt, it — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "kết – bồ kết" đổi thành "tết – ngày tết" (dễ hiểu hơn); câu "mũi sụt sịt" bỏ (ut chưa học), "đi tất chân", "giữ ấm cơ thể" bỏ; bỏ "nết na", "dấu vết"; thêm "sấm sét", "con rết", "con vịt", "thịt gà". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần et, êt, it nhé!'
});

const AM = {
  loai: 'van',
  am: ['et', 'êt', 'it'],
  kho: 5,
  tho: ['Đã đi học,', 'Phải cho ngoan,', 'Hay quấy càn,', 'Là chẳng hiếu.', 'Con còn nhỏ,', 'Có mẹ cha,',
        'Lúc vào ra,', 'Được vui vẻ.', 'Con còn bé,', 'Mẹ hay chiều,', 'Thấy mẹ yêu,', 'Chớ làm nũng.'],
  onCu: { chu: ['ot', 'ôt', 'ơt'], tu: ['cái sọt', 'cà rốt', 'cái thớt', 'quả nhót', 'lá lốt', 'quả ớt'] },
  khoa: [
    { am: 'et', dau: 'v', tieng: 'vẹt', tu: 'con vẹt' },
    { am: 'êt', dau: 't', tieng: 'tết', tu: 'ngày tết' },
    { am: 'it', dau: 'm', tieng: 'mít', tu: 'quả mít' }
  ],
  bang: { et: ['v', 'h', 'k', 's'], êt: ['k', 't', 'h', 'm'], it: ['m', 'v', 'h', 'ch'] },
  tu: { et: ['nét chữ', 'sấm sét', 'trời rét'], êt: ['con rết', 'dệt vải', 'bồ kết'], it: ['con vịt', 'ríu rít', 'thịt gà'] },
  cau: ['Tết đến, bé và bố mẹ đi chúc tết nhà bà nội.', 'Cây mai đầu ngõ đã chi chít lộc non.', 'Trời trở rét, mẹ mặc thêm áo ấm cho bé.']
};

amSetup();
