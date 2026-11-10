/* Bài 107 · Đồ dùng cá nhân — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: bàn chải, khăn mặt, lược, cốc, dép; không dùng chung; giữ sạch, cất đúng chỗ.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Đồ dùng của mình, mình giữ sạch, cất gọn.',
  khoi: [{ tu: 'chiếc lược' }, { tu: 'cái cốc' }, { tu: 'đôi dép' }, { tu: 'tuýp kem', cau: 'Tuýp kem đánh răng.' },
    { tu: 'khăn mặt', do: 'Vuông vuông, mềm mại / Sáng nào cũng gặp / Lau sạch mặt em' }],
  tuMoi: [['cá nhân', 'của riêng một người'], ['vệ sinh', 'giữ cho sạch sẽ'], ['dùng chung', 'nhiều người cùng dùng một đồ'], ['vi trùng', 'sinh vật rất nhỏ gây bệnh'],
    ['ngăn nắp', 'xếp đặt gọn gàng, đúng chỗ'], ['lược', 'đồ dùng để chải tóc'], ['phơi', 'để ra chỗ nắng, gió cho khô'], ['kem đánh răng', 'kem bôi lên bàn chải để đánh răng']],
  tuKho: ['cá nhân', 'vệ sinh', 'dùng chung', 'vi trùng', 'ngăn nắp', 'kem đánh răng'],
  doan: [
    { text: 'Mỗi người có đồ dùng cá nhân riêng: bàn chải, khăn mặt, lược, cốc và dép. Sáng nào em cũng dùng bàn chải và kem đánh răng để vệ sinh răng miệng.',
      hoi: [{ q: 'Kể tên đồ dùng cá nhân.', dung: 'Bàn chải, khăn mặt, lược.', sai: ['Bàn ăn, tủ lạnh.', 'Ti vi, quạt trần.'] },
            { q: 'Em dùng gì để đánh răng?', dung: 'Bàn chải và kem đánh răng.', sai: ['Lược và khăn.', 'Cốc và dép.'] }] },
    { text: 'Em không dùng chung bàn chải, khăn mặt hay lược với người khác. Dùng chung dễ lây vi trùng và bị ốm.',
      hoi: [{ q: 'Vì sao không dùng chung bàn chải?', dung: 'Vì dễ lây vi trùng.', sai: ['Vì bàn chải đắt.', 'Vì bàn chải nặng.'] },
            { q: 'Em không dùng chung đồ gì?', dung: 'Khăn mặt.', sai: ['Bàn học ở lớp.', 'Sân chơi.'] }] },
    { text: 'Dùng xong, em rửa sạch bàn chải, phơi khăn cho khô. Em cất đồ đúng chỗ, ngăn nắp. Mẹ khen em biết giữ gìn đồ dùng.',
      hoi: [{ q: 'Dùng khăn xong, em làm gì?', dung: 'Phơi khăn cho khô.', sai: ['Vứt xuống đất.', 'Để trong cặp.'] },
            { q: 'Em cất đồ thế nào?', dung: 'Đúng chỗ, ngăn nắp.', sai: ['Bừa bộn khắp nơi.', 'Để dưới gầm giường.'] }] }
  ],
  hieu: [
    { q: 'Đồ dùng cá nhân là gì?', dung: 'Đồ dùng riêng của mỗi người.', sai: ['Đồ dùng của cả lớp.', 'Đồ chơi ở công viên.'] },
    { q: 'Sau khi dùng, em làm gì với bàn chải?', dung: 'Rửa sạch và cất đúng chỗ.', sai: ['Cho bạn mượn.', 'Để lên giường.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Giữ sạch, cất gọn đồ dùng của mình.', sai: ['Dùng chung đồ với bạn.', 'Mua thật nhiều đồ.'] }
  ],
  thuTu: ['Em thức dậy.', 'Em đánh răng bằng bàn chải.', 'Em rửa mặt bằng khăn mặt.', 'Em chải tóc bằng lược.'],
  cau: { mau: 'Cái gì dùng để làm gì?', nhan: ['Cái gì?', 'dùng để', 'làm gì?'], ds: ['Bàn chải|dùng để|đánh răng.', 'Khăn mặt|dùng để|lau mặt.', 'Chiếc lược|dùng để|chải tóc.', 'Cái cốc|dùng để|uống nước.'] },
  dien: [
    { cau: 'Mỗi người có đồ dùng ___ nhân riêng.', dung: 'cá', sai: ['cả', 'gia'] },
    { cau: 'Em dùng bàn ___ để đánh răng.', dung: 'chải', sai: ['tay', 'ghế'] },
    { cau: 'Dùng chung dễ lây vi ___.', dung: 'trùng', sai: ['khuẩn', 'mạng'] },
    { cau: 'Em phơi ___ cho khô.', dung: 'khăn', sai: ['sách', 'cơm'] },
    { cau: 'Em cất đồ đúng chỗ, ngăn ___.', dung: 'nắp', sai: ['cửa', 'kéo'] }
  ],
  to: ['bàn chải', 'khăn mặt', 'chiếc lược'],
  noi: ['Kể tên đồ dùng cá nhân của em.', 'Vì sao không nên dùng chung khăn mặt?', 'Em cất đồ dùng ở đâu?'],
  viet: ['Đồ dùng cá nhân của em là', 'Sáng nào em cũng', 'Em không dùng chung', 'Dùng xong, em']
};
docSetup();
