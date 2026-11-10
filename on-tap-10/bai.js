/* Ôn tập số 10 · Bài 57–61: ươm, ươp, ươn, ương, oa, oe, oan, oăn, oat, oăt, oai, uê, uy — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 10 (57-61)”: đoàn tàu vần, từ phân loại theo bài, câu luyện đọc và đoạn văn chăm sóc vườn trường.
   Đoạn văn chia thành 3 đoạn; câu hỏi trắc nghiệm do Trâu Con soạn. */
const DOC = {
  nhom: [
    { bai: 57, chu: ['ươm', 'ươp'], tu: ['bướm', 'lượm', 'mướp', 'ướp'] },
    { bai: 58, chu: ['ươn', 'ương'], tu: ['vườn', 'lươn', 'gương', 'trường'] },
    { bai: 59, chu: ['oa', 'oe'], tu: ['hoa', 'xòe', 'loe', 'tòa'] },
    { bai: 60, chu: ['oan', 'oăn', 'oat', 'oăt'], tu: ['toán', 'xoăn', 'hoạt', 'choắt'] },
    { bai: 61, chu: ['oai', 'uê', 'uy'], tu: ['xoài', 'loài', 'huệ', 'Huy'] }
  ],
  y: 'Đọc rõ âm chính và âm cuối của từng vần.',
  khoi: [{ tu: 'con bướm' }, { tu: 'quả mướp' }, { tu: 'trường học' }, { tu: 'quả xoài' }, { tu: 'hoa huệ' }],
  tuMoi: [['giàn mướp', 'khung tre cho cây mướp leo'], ['lượm', 'nhặt lên'], ['ướp', 'để gia vị cho thấm vào'], ['tóc xoăn', 'tóc cong, quăn'],
    ['loắt choắt', 'nhỏ bé, nhanh nhẹn'], ['hoạt động', 'việc cùng làm cho vui, có ích'], ['chăm sóc', 'trông nom, giữ gìn cẩn thận'], ['xòe', 'mở rộng ra']],
  tuKho: ['con lươn', 'trường học', 'hoa xòe cánh', 'học toán', 'hoạt động', 'hoa huệ'],
  doan: [
    { text: 'Trong vườn trường, giàn mướp xanh tốt và bướm bay quanh những bông hoa. Vườn trường có nhiều hoa đẹp.',
      hoi: [{ q: 'Giàn mướp thế nào?', dung: 'Xanh tốt.', sai: ['Khô héo.', 'Loắt choắt.'] },
            { q: 'Bướm bay quanh đâu?', dung: 'Quanh những bông hoa.', sai: ['Quanh cái gương.', 'Quanh quả xoài.'] }] },
    { text: 'Huy cùng các bạn tham gia hoạt động chăm sóc cây. Lan lượm lá khô, còn Hoài tưới hoa huệ.',
      hoi: [{ q: 'Các bạn tham gia hoạt động gì?', dung: 'Chăm sóc cây.', sai: ['Học toán.', 'Ướp thịt.'] },
            { q: 'Hoài làm gì?', dung: 'Hoài tưới hoa huệ.', sai: ['Hoài lượm lá khô.', 'Hoài soi gương.'] }] },
    { text: 'Cuối buổi, cô giáo khen cả nhóm làm việc ngoan và vui.',
      hoi: [{ q: 'Ai khen cả nhóm?', dung: 'Cô giáo.', sai: ['Bạn Lan.', 'Bác bảo vệ.'] },
            { q: 'Cả nhóm làm việc thế nào?', dung: 'Ngoan và vui.', sai: ['Chậm và buồn.', 'Ồn ào.'] }] }
  ],
  hieu: [
    { q: 'Đoạn văn kể về cảnh gì?', dung: 'Các bạn chăm sóc vườn trường.', sai: ['Mẹ cắm hoa ở nhà.', 'Huy đi học toán.'] },
    { q: 'Tiếng nào có vần “oai”?', dung: 'Hoài', sai: ['Huy', 'hoa'] },
    { q: 'Tiếng nào có vần “ươn”?', dung: 'vườn', sai: ['trường', 'bướm'] }
  ],
  thuTu: ['Bướm bay quanh những bông hoa.', 'Các bạn tham gia chăm sóc cây.', 'Lan lượm lá khô, Hoài tưới hoa huệ.', 'Cô giáo khen cả nhóm.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Lan|soi gương|chải tóc.', 'Huy|học|toán.', 'Mẹ|cắm|hoa huệ.', 'Bé|lượm|đồ chơi.'] },
  dien: [
    { cau: 'Bướm bay quanh giàn ___.', dung: 'mướp', sai: ['mượn', 'mương'] },
    { cau: 'Bé ___ đồ chơi cất vào hộp.', dung: 'lượm', sai: ['lươn', 'lượt'] },
    { cau: 'Lan soi gương chải mái tóc ___.', dung: 'xoăn', sai: ['xoan', 'xoè'] },
    { cau: 'Huy học ___ rất chăm.', dung: 'toán', sai: ['toàn', 'tòa'] },
    { cau: 'Mẹ cắm hoa huệ cạnh đĩa ___.', dung: 'xoài', sai: ['xòe', 'xoay'] }
  ],
  to: ['hoa huệ', 'quả xoài', 'vườn'],
  noi: ['Trường em có vườn hoa không?', 'Em đã chăm sóc cây bao giờ chưa?', 'Nói một câu có tiếng “hoa”.'],
  viet: ['Bướm bay', 'Lan lượm', 'Hoài tưới', 'Cô giáo khen']
};
docSetup();
