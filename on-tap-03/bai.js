/* Ôn tập số 3 · Bài 22–26: ia, ua, ưa, an, ăn, ân, on, ôn, ơn, en, ên, in — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 3 (22-26)”: đoàn tàu vần, phân biệt vần gần nhau, trò “đưa từ về đúng ga”, câu luyện đọc
   và đoạn “Bữa cơm gia đình” với 5 câu hỏi. Sửa lỗi gõ của slide: “tĩnh” trong bảng vần in → “tĩn”; “vần đã on; ôn; ơn” → “vần đã ôn”.
   Đoạn văn chia thành 3 đoạn; câu trả lời trắc nghiệm do Trâu Con soạn. */
const DOC = {
  nhom: [
    { bai: 22, chu: ['ia'], tu: ['mía', 'thìa', 'đĩa'] },
    { bai: 23, chu: ['ua', 'ưa'], tu: ['cua', 'chua', 'dưa', 'sữa'] },
    { bai: 24, chu: ['an', 'ăn', 'ân'], tu: ['bàn', 'chăn', 'thân', 'cân'] },
    { bai: 25, chu: ['on', 'ôn', 'ơn'], tu: ['con', 'bốn', 'sơn', 'lợn'] },
    { bai: 26, chu: ['en', 'ên', 'in'], tu: ['sen', 'nến', 'pin', 'đèn'] }
  ],
  y: 'Đọc đúng âm chính và âm cuối n trong mỗi vần.',
  khoi: [{ tu: 'cà chua' }, { tu: 'nón lá' }, { tu: 'quả mận' }, { tu: 'lợn con' }, { tu: 'đèn pin' }],
  tuMoi: [['nhà sàn', 'nhà dựng cao trên cột'], ['bạn thân', 'người bạn rất gần gũi'], ['thủ môn', 'người giữ khung thành'], ['khăn rằn', 'khăn có kẻ ô đen trắng'],
    ['thợ sơn', 'người sơn nhà, sơn cửa'], ['cẩn thận', 'làm kỹ, không vội vàng'], ['lon ton', 'dáng chạy nhanh, bước ngắn'], ['ven hồ', 'chỗ sát bờ hồ']],
  tuKho: ['thìa đĩa', 'cửa sổ', 'sữa chua', 'nhà sàn', 'ngọn nến', 'tên lửa'],
  doan: [
    { text: 'Chiều nay, bé Lan giúp bà dọn bàn ăn. Bé chia thìa và đĩa cho cả nhà.',
      hoi: [{ q: 'Lan giúp bà làm gì?', dung: 'Lan giúp bà dọn bàn ăn.', sai: ['Lan giúp bà đi chợ.', 'Lan giúp bà quét sân.'] },
            { q: 'Bé chia gì cho cả nhà?', dung: 'Thìa và đĩa.', sai: ['Cà chua và mận.', 'Nón lá và khăn.'] }] },
    { text: 'Mẹ mở cửa sổ cho cơn gió mát vào. Bố đội nón lá, mang cà chua và quả mận từ vườn về.',
      hoi: [{ q: 'Mẹ mở cửa sổ để làm gì?', dung: 'Cho cơn gió mát vào.', sai: ['Để nhìn ra sân.', 'Để gọi bố về.'] },
            { q: 'Bố mang những gì từ vườn về?', dung: 'Cà chua và quả mận.', sai: ['Mía và dưa.', 'Sen và nến.'] }] },
    { text: 'Ngoài sân, chú lợn con lon ton chạy theo bố. Cả nhà vui vẻ chuẩn bị bữa cơm.',
      hoi: [{ q: 'Con vật nào chạy theo bố?', dung: 'Chú lợn con.', sai: ['Con cua.', 'Chú chó nhỏ.'] },
            { q: 'Cả nhà chuẩn bị gì?', dung: 'Bữa cơm.', sai: ['Đi ngủ.', 'Đi học.'] }] }
  ],
  hieu: [
    { q: 'Bài đọc tên là gì?', dung: 'Bữa cơm gia đình.', sai: ['Đi chợ cùng bà.', 'Chú lợn con.'] },
    { q: 'Tiếng nào có vần “on”?', dung: 'con', sai: ['bốn', 'sơn'] },
    { q: 'Tiếng nào có vần “ia”?', dung: 'thìa', sai: ['cửa', 'chua'] }
  ],
  thuTu: ['Lan giúp bà dọn bàn ăn.', 'Mẹ mở cửa sổ cho gió mát vào.', 'Bố mang cà chua và quả mận về.', 'Cả nhà vui vẻ chuẩn bị bữa cơm.'],
  cau: { mau: 'Ai là gì?', nhan: ['Ai?', 'là', 'gì?'], ds: ['Chú Tư|là|thợ sơn.', 'Bé Vân và bé Lan|là|bạn thân.', 'Bà|là|người nấu cơm ngon.', 'Lan|là|cô bé ngoan.'] },
  dien: [
    { cau: 'Cô khen bé cẩn ___.', dung: 'thận', sai: ['thân', 'than'] },
    { cau: 'Nhà bà có bốn chú ___ con to tròn.', dung: 'lợn', sai: ['lớn', 'lon'] },
    { cau: 'Chú Tư là thợ ___.', dung: 'sơn', sai: ['son', 'sen'] },
    { cau: 'Ở ven hồ có lá ___ to.', dung: 'sen', sai: ['sơn', 'len'] },
    { cau: 'Mẹ cho dì Ba nón lá và khăn ___.', dung: 'rằn', sai: ['rần', 'ràn'] }
  ],
  to: ['lá sen', 'đèn pin', 'cà chua'],
  noi: ['Ở nhà, em giúp bà làm gì?', 'Bữa cơm nhà em có món gì?', 'Nói một câu có từ “cà chua”, “nón lá” hoặc “đèn pin”.'],
  viet: ['Bé chia', 'Mẹ mở', 'Bố mang', 'Cả nhà']
};
docSetup();
