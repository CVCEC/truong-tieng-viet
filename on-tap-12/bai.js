/* Ôn tập số 12 · Bài 67–70: oong, yêm, oay, eng, oanh, yêt, yêng, oen, oao, oet, uênh, ooc — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 12 (67-70)”: đoàn tàu vần, từ phân loại theo bài, câu luyện đọc và đoạn văn một buổi sáng ở nhà.
   Sửa lỗi của slide: “huyênh hoang” → “huênh hoang”; bỏ “nguệch ngoạc” khỏi nhóm uênh (là vần uêch); “Chú mèo nhoẻn mắt” → “Chú mèo nheo mắt”;
   “con quay” (vần ay) không dùng làm ví dụ vần oay, thay bằng “xoay, loay hoay”. Đoạn văn chia thành 3 đoạn; câu hỏi trắc nghiệm do Trâu Con soạn. */
const DOC = {
  nhom: [
    { bai: 67, chu: ['oong', 'yêm', 'oay'], tu: ['xoong', 'yếm', 'xoay', 'loay hoay'] },
    { bai: 68, chu: ['eng', 'oanh'], tu: ['leng keng', 'xà beng', 'doanh nhân', 'loanh quanh'] },
    { bai: 69, chu: ['yêt', 'yêng', 'oen', 'oao'], tu: ['niêm yết', 'chim yểng', 'nhoẻn cười', 'ngoao ngoao'] },
    { bai: 70, chu: ['oet', 'uênh', 'ooc'], tu: ['khoét', 'huênh hoang', 'soóc', 'rơ moóc'] }
  ],
  y: 'Vần ít gặp cũng đọc rõ âm chính và âm cuối nhé.',
  khoi: [{ tu: 'cái xoong' }, { tu: 'cái yếm' }, { tu: 'xà beng' }, { tu: 'chim yểng' }, { tu: 'quần soóc' }],
  tuMoi: [['cái xoong', 'nồi nhỏ có tay cầm để nấu'], ['cái yếm', 'đồ đeo trước ngực cho em bé'], ['xà beng', 'thanh sắt dài để bẩy vật nặng'], ['loanh quanh', 'đi vòng vòng gần một chỗ'],
    ['niêm yết', 'dán lên cho mọi người cùng xem'], ['nhoẻn cười', 'mỉm cười nhẹ'], ['khoét lỗ', 'đục thủng một lỗ'], ['quần soóc', 'quần ngắn']],
  tuKho: ['cải xoong', 'ghế xoay', 'chuông leng keng', 'bảng niêm yết', 'ngoao ngoao', 'quần soóc'],
  doan: [
    { text: 'Sáng nay, mẹ đặt cái xoong lên bếp nấu cháo. Ngoài sân, bé Hoàng chơi con quay cùng em.',
      hoi: [{ q: 'Mẹ đặt gì lên bếp?', dung: 'Cái xoong.', sai: ['Cái yếm.', 'Xà beng.'] },
            { q: 'Bé Hoàng chơi gì?', dung: 'Chơi con quay.', sai: ['Chơi thả diều.', 'Chơi đá bóng.'] }] },
    { text: 'Chiếc chuông trước cửa kêu leng keng khi khách bước vào. Chú mèo nheo mắt nhìn rồi kêu ngoao ngoao.',
      hoi: [{ q: 'Chiếc chuông kêu thế nào?', dung: 'Leng keng.', sai: ['Ngoao ngoao.', 'Ầm ầm.'] },
            { q: 'Chú mèo kêu thế nào?', dung: 'Ngoao ngoao.', sai: ['Gâu gâu.', 'Leng keng.'] }] },
    { text: 'Hai anh em nhoẻn cười với nhau. Rồi hai anh em cất đồ chơi thật gọn.',
      hoi: [{ q: 'Hai anh em cất gì?', dung: 'Cất đồ chơi.', sai: ['Cất cái xoong.', 'Cất quần soóc.'] },
            { q: 'Hai anh em cất đồ chơi thế nào?', dung: 'Thật gọn.', sai: ['Lung tung.', 'Ngoài sân.'] }] }
  ],
  hieu: [
    { q: 'Đoạn văn kể về cảnh gì?', dung: 'Một buổi sáng ở nhà bé Hoàng.', sai: ['Một buổi chiều ở chợ.', 'Một đêm ở bến cảng.'] },
    { q: 'Tiếng nào có vần “oong”?', dung: 'xoong', sai: ['xoay', 'soóc'] },
    { q: 'Tiếng nào có vần “oao”?', dung: 'ngoao', sai: ['nhoẻn', 'yểng'] }
  ],
  thuTu: ['Mẹ đặt cái xoong lên bếp nấu cháo.', 'Bé Hoàng chơi con quay cùng em.', 'Chú mèo kêu ngoao ngoao.', 'Hai anh em cất đồ chơi thật gọn.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Mẹ|nấu|cháo.', 'Bé|chơi|con quay.', 'Khách|xem|bảng niêm yết.', 'Bé|mặc|quần soóc.'] },
  dien: [
    { cau: 'Mẹ đặt cái ___ lên bếp.', dung: 'xoong', sai: ['xoay', 'soóc'] },
    { cau: 'Chiếc chuông kêu leng ___.', dung: 'keng', sai: ['beng', 'kênh'] },
    { cau: 'Khách đi loanh ___ xem bảng niêm yết.', dung: 'quanh', sai: ['quay', 'khoanh'] },
    { cau: 'Con mèo kêu ___ ngoao bên cửa.', dung: 'ngoao', sai: ['ngoẻo', 'ngao'] },
    { cau: 'Bé mặc quần ___ rồi ngồi đọc sách.', dung: 'soóc', sai: ['xoong', 'sóc'] }
  ],
  to: ['xoong', 'leng keng', 'quần soóc'],
  noi: ['Buổi sáng, mẹ em nấu món gì?', 'Nhà em có nuôi mèo không?', 'Nói một câu có từ “leng keng”.'],
  viet: ['Mẹ đặt', 'Bé Hoàng', 'Chú mèo', 'Hai anh em']
};
docSetup();
