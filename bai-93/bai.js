/* Bài 93 · Tìm hiểu mùa hè ở Việt Nam — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: món ăn mùa hè (chè, nước ngọt, đậu phụ, canh chua, cà pháo, dưa hấu), câu đố (hoa phượng, ve sầu, quạt điện, cái mũ),
   bài hát “Tiếng ca mùa hè”. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Mùa hè vui chơi mà vẫn giữ gìn sức khỏe.',
  khoi: [
    { tu: 'hoa phượng', do: 'Hoa gì chỉ nở vào hè / Từng chùm đỏ thắm, gọi ve hát mừng?' },
    { tu: 've sầu', do: 'Con gì nhỏ bé, mà hát khỏe ghê / Suốt cả mùa hè, râm ran hợp xướng?' },
    { tu: 'quạt điện', do: 'Có cánh, không biết bay / Chỉ quay như chong chóng / Làm gió xua cái nóng' },
    { tu: 'cái mũ', do: 'Cái gì bằng vải / Dùng để đội đầu / Trời nắng chang chang / Che đầu cho bạn' },
    { tu: 'quả dưa', cau: 'Dưa hấu mát lành ngày hè.' }],
  tuMoi: [['mùa hè', 'mùa nóng nhất trong năm'], ['nắng chang chang', 'nắng rất to, rất gắt'], ['hoa phượng', 'hoa đỏ thắm nở vào mùa hè'], ['ve sầu', 'con côn trùng kêu râm ran mùa hè'],
    ['râm ran', 'tiếng kêu đều đều, kéo dài'], ['giải nhiệt', 'làm cho người mát hơn'], ['canh chua', 'món canh có vị chua, ăn mát'], ['nghỉ hè', 'thời gian học sinh được nghỉ học vào mùa hè']],
  tuKho: ['nắng chang chang', 'hoa phượng', 've sầu', 'râm ran', 'giải nhiệt', 'canh chua'],
  doan: [
    { text: 'Mùa hè ở Việt Nam trời nắng chang chang. Hoa phượng nở đỏ rực sân trường. Ve sầu kêu râm ran trên cành cây.',
      hoi: [{ q: 'Mùa hè, trời thế nào?', dung: 'Nắng chang chang.', sai: ['Có tuyết rơi.', 'Rét buốt.'] },
            { q: 'Hoa gì nở đỏ rực sân trường?', dung: 'Hoa phượng.', sai: ['Hoa đào.', 'Hoa mai.'] }] },
    { text: 'Ngày hè, mọi người ăn món mát để giải nhiệt. Bữa cơm có canh chua, cà pháo. Buổi chiều, cả nhà ăn chè và dưa hấu.',
      hoi: [{ q: 'Bữa cơm mùa hè có món gì?', dung: 'Canh chua, cà pháo.', sai: ['Bánh chưng.', 'Bánh trung thu.'] },
            { q: 'Buổi chiều, cả nhà ăn gì?', dung: 'Chè và dưa hấu.', sai: ['Lẩu nóng.', 'Kem que trong tuyết.'] }] },
    { text: 'Nghỉ hè, em được về quê, đi bơi và chơi với các bạn. Em nhớ đội mũ, uống đủ nước và không chơi ngoài nắng buổi trưa.',
      hoi: [{ q: 'Nghỉ hè, em làm gì?', dung: 'Về quê, đi bơi, chơi với bạn.', sai: ['Đi học cả ngày.', 'Ở trong nhà suốt.'] },
            { q: 'Để giữ sức khỏe, em nhớ làm gì?', dung: 'Đội mũ, uống đủ nước.', sai: ['Chơi ngoài nắng buổi trưa.', 'Không uống nước.'] }] }
  ],
  hieu: [
    { q: 'Vì sao mùa hè nên ăn món mát?', dung: 'Để giải nhiệt.', sai: ['Để no lâu.', 'Để ngủ ngon.'] },
    { q: 'Con gì hát suốt mùa hè?', dung: 'Con ve sầu.', sai: ['Con mèo.', 'Con cá.'] },
    { q: 'Buổi trưa nắng to, em nên làm gì?', dung: 'Nghỉ trong nhà.', sai: ['Chạy ngoài sân.', 'Đi thả diều.'] }
  ],
  thuTu: ['Hoa phượng nở đỏ rực sân trường.', 'Ve sầu kêu râm ran.', 'Em được nghỉ hè, về quê.', 'Em đi bơi và chơi với các bạn.'],
  cau: { mau: 'Cái gì thế nào?', nhan: ['Cái gì?', 'thế nào?'], ds: ['Hoa phượng|đỏ rực.', 'Trời|nắng chang chang.', 'Dưa hấu|mát lành.', 'Chè|ngọt mát.'] },
  dien: [
    { cau: 'Mùa hè ở Việt Nam trời ___ chang chang.', dung: 'nắng', sai: ['mưa', 'rét'] },
    { cau: 'Hoa ___ nở đỏ rực sân trường.', dung: 'phượng', sai: ['đào', 'cúc'] },
    { cau: 'Ve sầu kêu ___ ran trên cành cây.', dung: 'râm', sai: ['lâm', 'âm'] },
    { cau: 'Bữa cơm có canh ___, cà pháo.', dung: 'chua', sai: ['cay', 'ngọt'] },
    { cau: 'Em nhớ đội ___ khi ra nắng.', dung: 'mũ', sai: ['nồi', 'giày'] }
  ],
  to: ['mùa hè', 'hoa phượng', 've sầu'],
  noi: ['Em thích nhất điều gì vào mùa hè?', 'Mùa hè, nhà em hay ăn món gì?', 'Kể một chuyến đi chơi mùa hè của em.'],
  viet: ['Mùa hè, trời', 'Em thích ăn', 'Nghỉ hè, em', 'Em giữ sức khỏe bằng cách']
};
docSetup();
