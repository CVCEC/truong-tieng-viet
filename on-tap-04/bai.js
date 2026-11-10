/* Ôn tập số 4 · Bài 27–31: am, ăm, âm, om, ôm, ơm, em, êm, im, um, ai, ay, ây, oi, ôi, ơi — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 4 (27-31)”: đoàn tàu vần, phân biệt vần, trò “đưa từ về đúng ga”, câu luyện đọc và đoạn “Một ngày ở quê” với 5 câu hỏi.
   Sửa lỗi của slide: ví dụ vần ôi “bơi” (là vần ơi) → “đồi”. Đoạn văn chia thành 3 đoạn; câu trả lời trắc nghiệm do Trâu Con soạn. */
const DOC = {
  nhom: [
    { bai: 27, chu: ['am', 'ăm', 'âm'], tu: ['cam', 'tằm', 'sâm', 'mầm'] },
    { bai: 28, chu: ['om', 'ôm', 'ơm'], tu: ['đom đóm', 'tôm', 'cơm', 'rơm'] },
    { bai: 29, chu: ['em', 'êm', 'im', 'um'], tu: ['kem', 'đêm', 'kim', 'chùm'] },
    { bai: 30, chu: ['ai', 'ay', 'ây'], tu: ['vải', 'bay', 'cây', 'mây'] },
    { bai: 31, chu: ['oi', 'ôi', 'ơi'], tu: ['chòi', 'đôi', 'chơi', 'đồi'] }
  ],
  y: 'Quan sát âm chính và âm cuối để đọc đúng từng vần.',
  khoi: [{ tu: 'quả cam' }, { tu: 'đom đóm' }, { tu: 'chùm nho' }, { tu: 'máy bay' }, { tu: 'đồ chơi' }],
  tuMoi: [['con tằm', 'con sâu nhỏ nhả tơ'], ['mầm cỏ', 'cây cỏ mới nhú lên'], ['tem thư', 'con tem dán ngoài phong thư'], ['ngõ hẻm', 'con đường nhỏ, hẹp'],
    ['máy cày', 'máy dùng để cày ruộng'], ['quây quần', 'ngồi gần nhau, sum họp'], ['hiên', 'chỗ có mái ở trước nhà'], ['chòi', 'nhà nhỏ dựng cao']],
  tuKho: ['trạm y tế', 'can đảm', 'củ sâm', 'tôm hùm', 'thơm lừng', 'bơi lội'],
  doan: [
    { text: 'Ngày mai, bé Mai về thăm ông bà. Bà ôm bé vào lòng.',
      hoi: [{ q: 'Mai về quê thăm ai?', dung: 'Thăm ông bà.', sai: ['Thăm cô giáo.', 'Thăm bạn Hà.'] },
            { q: 'Bà làm gì khi gặp Mai?', dung: 'Bà ôm bé vào lòng.', sai: ['Bà lái máy cày.', 'Bà đi chợ.'] }] },
    { text: 'Ông bưng mâm cơm thơm ra hiên. Trên bàn có quả cam và chùm nho.',
      hoi: [{ q: 'Ông bưng gì ra hiên?', dung: 'Mâm cơm thơm.', sai: ['Que kem.', 'Đồ chơi.'] },
            { q: 'Trên bàn có những quả gì?', dung: 'Quả cam và chùm nho.', sai: ['Quả vải và quả mận.', 'Cà chua và dưa.'] }] },
    { text: 'Ngoài đồng, bố lái máy cày dưới đám mây trắng. Sau bữa cơm, Mai chơi đồ chơi cùng em ở cây chòi mới.',
      hoi: [{ q: 'Bố làm gì ngoài đồng?', dung: 'Bố lái máy cày.', sai: ['Bố bơi lội.', 'Bố hái vải.'] },
            { q: 'Mai chơi ở đâu sau bữa cơm?', dung: 'Ở cây chòi mới.', sai: ['Ở ngõ hẻm.', 'Ở trạm y tế.'] }] }
  ],
  hieu: [
    { q: 'Bài đọc tên là gì?', dung: 'Một ngày ở quê.', sai: ['Bữa cơm gia đình.', 'Máy bay bay cao.'] },
    { q: 'Tiếng nào có vần “ây”?', dung: 'mây', sai: ['máy', 'mai'] },
    { q: 'Tiếng nào có vần “ơm”?', dung: 'cơm', sai: ['tôm', 'đom'] }
  ],
  thuTu: ['Mai về thăm ông bà.', 'Bà ôm bé vào lòng.', 'Ông bưng mâm cơm thơm ra hiên.', 'Sau bữa cơm, Mai chơi đồ chơi.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Mẹ|ôm|bé vào lòng.', 'Bố Hải|lái|máy cày.', 'Thỏ và rùa|thi|chạy.', 'Bé Hà|chơi|đồ chơi.'] },
  dien: [
    { cau: 'Mẹ ôm bé vào ___.', dung: 'lòng', sai: ['làm', 'lâm'] },
    { cau: 'Cả nhà quây quần bên mâm ___ thơm.', dung: 'cơm', sai: ['cam', 'kem'] },
    { cau: 'Ban đêm, chú chó ngủ ở ___ nhà.', dung: 'thềm', sai: ['thơm', 'thăm'] },
    { cau: 'Mẹ Hải cấy lúa, bố Hải lái máy ___.', dung: 'cày', sai: ['cây', 'cai'] },
    { cau: 'Bố lái máy cày dưới đám ___ trắng.', dung: 'mây', sai: ['máy', 'mai'] }
  ],
  to: ['quả cam', 'mâm cơm', 'máy bay'],
  noi: ['Em đã về thăm ông bà chưa?', 'Bữa cơm nhà em có món gì?', 'Nói một câu có từ “quả cam”, “máy bay” hoặc “đồ chơi”.'],
  viet: ['Bà ôm', 'Ông bưng', 'Bố lái', 'Mai chơi']
};
docSetup();
