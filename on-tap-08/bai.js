/* Ôn tập số 8 · Bài 47–51: ang, ăng, âng, ong, ông, ung, ưng, iên, iêc, iêp, iêng, iêm, yên, iêt, iêu, yêu — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 8 (47-51)”: đoàn tàu vần, từ phân loại theo bài, câu luyện đọc và đoạn văn về làng quê.
   Sửa theo nguyên tắc chỉ dùng vần đã học: “vườn cây” → “rừng cây”; “tiếng cười” → “tiếng hát”; “gia đình yêu thương” không dùng.
   Đoạn văn chia thành 3 đoạn; câu hỏi trắc nghiệm do Trâu Con soạn. */
const DOC = {
  nhom: [
    { bai: 47, chu: ['ang', 'ăng', 'âng'], tu: ['làng', 'trăng', 'tầng', 'nắng'] },
    { bai: 48, chu: ['ong', 'ông', 'ung', 'ưng'], tu: ['ong', 'sông', 'sung', 'rừng'] },
    { bai: 49, chu: ['iên', 'iêc', 'iêp'], tu: ['biển', 'việc', 'thiệp', 'tiên'] },
    { bai: 50, chu: ['iêng', 'iêm', 'yên'], tu: ['chiêng', 'kiếm', 'yến', 'tiếng'] },
    { bai: 51, chu: ['iêt', 'iêu', 'yêu'], tu: ['viết', 'diều', 'yêu', 'chiều'] }
  ],
  y: 'Đọc rõ âm chính và âm cuối của từng vần.',
  khoi: [{ tu: 'con ong' }, { tu: 'quả sung' }, { tu: 'chim yến' }, { tu: 'con diều' }, { tu: 'cái chiêng' }],
  tuMoi: [['làng quê', 'nơi có ruộng đồng, xóm làng'], ['tầng nhà', 'một lớp của ngôi nhà cao'], ['cồng chiêng', 'nhạc cụ bằng đồng, đánh kêu vang'], ['tấm thiệp', 'tờ giấy đẹp để viết lời chúc'],
    ['chim yến', 'loài chim nhỏ, bay rất nhanh'], ['lấp lánh', 'sáng lên, lóe lên liên tục'], ['yên bình', 'êm ả, không ồn ào'], ['thanh kiếm', 'đồ có lưỡi dài, sắc']],
  tuKho: ['mặt trăng', 'dòng sông', 'rừng cây', 'làm việc', 'cánh diều', 'viết bài'],
  doan: [
    { text: 'Chiều hè, cả gia đình về thăm làng quê. Dòng sông lấp lánh dưới ánh trăng.',
      hoi: [{ q: 'Cả gia đình về thăm đâu?', dung: 'Về thăm làng quê.', sai: ['Về thăm biển.', 'Về thăm rừng.'] },
            { q: 'Dòng sông lấp lánh dưới gì?', dung: 'Dưới ánh trăng.', sai: ['Dưới cánh diều.', 'Dưới tầng nhà.'] }] },
    { text: 'Bố làm việc bên rừng cây, còn bé Yến viết tấm thiệp tặng bà.',
      hoi: [{ q: 'Bố làm việc ở đâu?', dung: 'Bên rừng cây.', sai: ['Bên bờ biển.', 'Trên tầng nhà.'] },
            { q: 'Bé Yến viết thiệp tặng ai?', dung: 'Tặng bà.', sai: ['Tặng bố.', 'Tặng cô giáo.'] }] },
    { text: 'Ngoài bãi cỏ, anh em cùng thả diều. Tiếng hát vang lên giữa khung cảnh yên bình.',
      hoi: [{ q: 'Anh em cùng làm gì?', dung: 'Cùng thả diều.', sai: ['Cùng đánh chiêng.', 'Cùng tắm sông.'] },
            { q: 'Khung cảnh thế nào?', dung: 'Yên bình.', sai: ['Ồn ào.', 'Tối om.'] }] }
  ],
  hieu: [
    { q: 'Đoạn văn kể về cảnh gì?', dung: 'Cả nhà về thăm làng quê.', sai: ['Cả nhà đi biển.', 'Bé Yến đi học.'] },
    { q: 'Tiếng nào có vần “iêu”?', dung: 'diều', sai: ['viết', 'yêu'] },
    { q: 'Tiếng nào có vần “ưng”?', dung: 'rừng', sai: ['sung', 'sông'] }
  ],
  thuTu: ['Cả gia đình về thăm làng quê.', 'Bố làm việc bên rừng cây.', 'Bé Yến viết tấm thiệp tặng bà.', 'Anh em cùng thả diều.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bé|viết thiệp|tặng bà.', 'Bố|làm việc|gần dòng sông.', 'Cả nhà|cùng thả|diều.', 'Đàn ong|bay|bên rừng cây.'] },
  dien: [
    { cau: 'Trăng sáng trên ___ quê.', dung: 'làng', sai: ['lăng', 'tầng'] },
    { cau: 'Đàn ___ bay bên rừng cây.', dung: 'ong', sai: ['ông', 'sung'] },
    { cau: 'Bé viết ___ tặng bà.', dung: 'thiệp', sai: ['thiếc', 'tiếng'] },
    { cau: 'Chiều chiều, chim ___ bay về tổ.', dung: 'yến', sai: ['yêu', 'kiếm'] },
    { cau: 'Cả nhà cùng thả ___ trên bãi cỏ.', dung: 'diều', sai: ['việc', 'chiêng'] }
  ],
  to: ['con ong', 'cánh diều', 'yêu'],
  noi: ['Em đã về thăm làng quê chưa?', 'Em thích thả diều không?', 'Nói một câu có tiếng “yêu”.'],
  viet: ['Trăng sáng', 'Đàn ong', 'Bé viết', 'Cả nhà']
};
docSetup();
