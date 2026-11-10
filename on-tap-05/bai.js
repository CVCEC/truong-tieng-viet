/* Ôn tập số 5 · Bài 32–36: ui, ưi, eo, ao, au, âu, êu, iu, ưu, ac, ăc, âc — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 5 (32-36)”: đoàn tàu vần, từ phân loại theo bài, câu luyện đọc và đoạn văn về bé Tú.
   Sửa theo nguyên tắc chỉ dùng vần đã học: “iư” → “ưu”; “con dốc” → “cây cầu”; “anh Tíu” → “bé Hào”; “trong gió” → “qua núi”;
   “hàng cau” → “cây cau”; “đặt túi” → “để túi”; “đọc sách” → “chơi với mèo”; “Bé dùng rìu chặt cành mục” → “Bác cầm rìu bổ củi”.
   Đoạn văn chia thành 3 đoạn; câu hỏi trắc nghiệm do Trâu Con soạn. */
const DOC = {
  nhom: [
    { bai: 32, chu: ['ui', 'ưi'], tu: ['núi', 'túi', 'vui', 'gửi'] },
    { bai: 33, chu: ['eo', 'ao'], tu: ['mèo', 'kéo', 'sao', 'áo'] },
    { bai: 34, chu: ['au', 'âu', 'êu'], tu: ['cau', 'trâu', 'sâu', 'kêu'] },
    { bai: 35, chu: ['iu', 'ưu'], tu: ['rìu', 'dịu', 'lựu', 'cừu'] },
    { bai: 36, chu: ['ac', 'ăc', 'âc'], tu: ['bác', 'nhạc', 'mắc', 'gấc'] }
  ],
  y: 'Đọc rõ âm chính và âm cuối của từng vần.',
  khoi: [{ tu: 'cái túi' }, { tu: 'con mèo' }, { tu: 'quả cau' }, { tu: 'cái rìu' }, { tu: 'quả gấc' }],
  tuMoi: [['khung cửi', 'khung gỗ để dệt vải'], ['quả cau', 'quả nhỏ, mọc trên cây cao'], ['cái rìu', 'đồ có lưỡi sắc để bổ củi'], ['quả gấc', 'quả có màu đỏ, nấu xôi'],
    ['bậc thềm', 'bậc lên xuống trước nhà'], ['bổ củi', 'chẻ gỗ ra làm củi'], ['nhắc', 'nói lại cho nhớ'], ['vui vẻ', 'thấy vui, hay cười']],
  tuKho: ['khung cửi', 'con trâu', 'quả lựu', 'quả tắc', 'bậc thềm', 'nghé ọ'],
  doan: [
    { text: 'Hôm nay, bé Tú đi với bà qua cây cầu nhỏ. Trên cao, ngôi sao giấy của bé Hào bay qua núi.',
      hoi: [{ q: 'Bé Tú đi với ai?', dung: 'Đi với bà.', sai: ['Đi với mèo.', 'Đi với bác.'] },
            { q: 'Ngôi sao giấy bay qua đâu?', dung: 'Bay qua núi.', sai: ['Bay qua nhà.', 'Bay qua cây cau.'] }] },
    { text: 'Dưới cây cau, con trâu ăn cỏ. Con trâu kêu nghé ọ.',
      hoi: [{ q: 'Con trâu ăn cỏ ở đâu?', dung: 'Dưới cây cau.', sai: ['Trên bậc thềm.', 'Trên núi cao.'] },
            { q: 'Con trâu kêu thế nào?', dung: 'Nghé ọ.', sai: ['Meo meo.', 'Ò ó o.'] }] },
    { text: 'Về nhà, bà bổ quả gấc đỏ và nhắc Tú để túi lên bậc thềm. Tú vui vẻ làm theo rồi ngồi chơi với mèo.',
      hoi: [{ q: 'Bà bổ quả gì?', dung: 'Quả gấc đỏ.', sai: ['Quả lựu.', 'Quả cau.'] },
            { q: 'Bà nhắc Tú để túi ở đâu?', dung: 'Lên bậc thềm.', sai: ['Lên cây cau.', 'Lên khung cửi.'] }] }
  ],
  hieu: [
    { q: 'Đoạn văn kể về ai?', dung: 'Bé Tú và bà.', sai: ['Con mèo trèo cây.', 'Bé Hào đi học.'] },
    { q: 'Tiếng nào có vần “âu”?', dung: 'trâu', sai: ['cau', 'kêu'] },
    { q: 'Tiếng nào có vần “âc”?', dung: 'gấc', sai: ['nhắc', 'bác'] }
  ],
  thuTu: ['Bé Tú đi với bà qua cây cầu nhỏ.', 'Con trâu ăn cỏ dưới cây cau.', 'Bà bổ quả gấc đỏ.', 'Tú ngồi chơi với mèo.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bé|gửi thư|cho bà.', 'Con mèo|trèo|lên cao.', 'Trâu|ăn|cỏ.', 'Bác|bổ|củi.'] },
  dien: [
    { cau: 'Em đeo ___ đi qua núi.', dung: 'túi', sai: ['tai', 'tôi'] },
    { cau: 'Bé ___ thư cho bà.', dung: 'gửi', sai: ['gối', 'gói'] },
    { cau: 'Con mèo ___ lên cao.', dung: 'trèo', sai: ['trâu', 'trao'] },
    { cau: 'Trên áo có ngôi ___.', dung: 'sao', sai: ['sâu', 'sau'] },
    { cau: 'Bác cầm ___ bổ củi.', dung: 'rìu', sai: ['rau', 'rêu'] }
  ],
  to: ['túi', 'trâu', 'quả gấc'],
  noi: ['Em hay đi đâu với bà?', 'Em đã thấy con trâu chưa?', 'Nói một câu có tiếng chứa vần “ao”.'],
  viet: ['Em đeo', 'Con mèo', 'Bà bổ', 'Tú vui vẻ']
};
docSetup();
