/* Ôn tập số 11 · Bài 62–66: uân, uât, uyên, uyêt, uây, oang, uyt, oăng, oac, oach, uya, uyp, uynh, uych, uyu — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 11 (62-66)”: đoàn tàu vần, từ phân loại theo bài, câu luyện đọc và đoạn văn đi thăm bến cảng.
   Sửa lỗi của slide: ví dụ vần uyp ghi “huýt” (vần uyt) → “tuýp”; “ngã khuỵch” → “ngã huỵch”.
   Đoạn văn chia thành 3 đoạn; câu hỏi trắc nghiệm do Trâu Con soạn. */
const DOC = {
  nhom: [
    { bai: 62, chu: ['uân', 'uât'], tu: ['xuân', 'tuần', 'luật', 'xuất'] },
    { bai: 63, chu: ['uyên', 'uyêt'], tu: ['thuyền', 'khuyên', 'tuyết', 'duyệt'] },
    { bai: 64, chu: ['uây', 'oang', 'uyt'], tu: ['khuấy', 'khoang', 'quýt', 'huýt'] },
    { bai: 65, chu: ['oăng', 'oac', 'oach'], tu: ['loăng quăng', 'khoác', 'hoạch'] },
    { bai: 66, chu: ['uya', 'uyp', 'uynh', 'uych', 'uyu'], tu: ['khuya', 'tuýp', 'huynh', 'huỵch', 'khuỷu'] }
  ],
  y: 'Đọc rõ âm chính và âm cuối của từng vần.',
  khoi: [{ tu: 'mùa xuân' }, { tu: 'con thuyền' }, { tu: 'áo khoác' }, { tu: 'huýt sáo' }, { tu: 'khuỷu tay' }],
  tuMoi: [['tuần lễ', 'bảy ngày liền nhau'], ['luật lệ', 'điều mọi người phải làm theo'], ['lời khuyên', 'lời chỉ bảo điều hay'], ['khoang thuyền', 'phần rỗng bên trong thuyền'],
    ['kế hoạch', 'việc định làm và cách làm'], ['đêm khuya', 'lúc đêm đã muộn'], ['quấn quýt', 'luôn ở bên nhau, rất thân'], ['bến cảng', 'nơi tàu thuyền ra vào']],
  tuKho: ['tuyết trắng', 'khuấy bột', 'quả quýt', 'loăng quăng', 'ngã huỵch', 'khuỷu tay'],
  doan: [
    { text: 'Mùa xuân, lớp em lên kế hoạch đi thăm bến cảng. Cô khuyên các bạn mặc áo khoác và tuân theo luật an toàn.',
      hoi: [{ q: 'Lớp em đi thăm đâu?', dung: 'Đi thăm bến cảng.', sai: ['Đi thăm vườn hoa.', 'Đi thăm núi tuyết.'] },
            { q: 'Cô khuyên các bạn mặc gì?', dung: 'Mặc áo khoác.', sai: ['Mặc áo mưa.', 'Mặc áo dài.'] }] },
    { text: 'Từ khoang thuyền, chúng em nhìn những kiện hàng được xuất đi.',
      hoi: [{ q: 'Các bạn nhìn từ đâu?', dung: 'Từ khoang thuyền.', sai: ['Từ cửa sổ lớp.', 'Từ trên cây.'] },
            { q: 'Các bạn nhìn thấy gì?', dung: 'Những kiện hàng được xuất đi.', sai: ['Muỗi bay loăng quăng.', 'Tuyết rơi trắng.'] }] },
    { text: 'Trên đường về, Tuấn bóc quả quýt và kể chuyện vui cho các bạn nghe.',
      hoi: [{ q: 'Tuấn bóc quả gì?', dung: 'Quả quýt.', sai: ['Quả xoài.', 'Quả bưởi.'] },
            { q: 'Tuấn kể chuyện gì?', dung: 'Chuyện vui.', sai: ['Chuyện buồn.', 'Chuyện ma.'] }] }
  ],
  hieu: [
    { q: 'Đoạn văn kể về việc gì?', dung: 'Lớp em đi thăm bến cảng.', sai: ['Bé ngã huỵch.', 'Mẹ khuấy bột.'] },
    { q: 'Tiếng nào có vần “uyên”?', dung: 'thuyền', sai: ['tuyết', 'xuân'] },
    { q: 'Tiếng nào có vần “oac”?', dung: 'khoác', sai: ['hoạch', 'khoang'] }
  ],
  thuTu: ['Lớp em lên kế hoạch đi thăm bến cảng.', 'Cô khuyên các bạn mặc áo khoác.', 'Các bạn nhìn kiện hàng từ khoang thuyền.', 'Trên đường về, Tuấn kể chuyện vui.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Mẹ|khuyên bé|mặc áo khoác.', 'Nam|hoàn thành|bài.', 'Tuấn|bóc|quả quýt.', 'Mẹ|khuấy|bột.'] },
  dien: [
    { cau: 'Mùa ___, hoa đào nở rộ.', dung: 'xuân', sai: ['xuất', 'xoan'] },
    { cau: 'Nam hoàn thành bài đúng kế ___.', dung: 'hoạch', sai: ['hoạt', 'huỵch'] },
    { cau: 'Con ___ rời bến lúc sáng sớm.', dung: 'thuyền', sai: ['tuyết', 'khuyên'] },
    { cau: 'Đêm ___, Nam nghe tiếng huýt sáo.', dung: 'khuya', sai: ['khuấy', 'khuỷu'] },
    { cau: 'Bé ngã huỵch nhưng ___ tay không đau.', dung: 'khuỷu', sai: ['khuya', 'khoác'] }
  ],
  to: ['mùa xuân', 'thuyền', 'quả quýt'],
  noi: ['Mùa xuân ở nơi em có gì đẹp?', 'Em đã đi thuyền bao giờ chưa?', 'Nói một câu có tiếng “khuyên”.'],
  viet: ['Mùa xuân', 'Cô khuyên', 'Tuấn bóc', 'Mẹ khuấy']
};
docSetup();
