/* Bài 139 · An toàn ở mọi nơi — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng (tên slide: “An toàn xã hội – mọi nơi đều…”); Trâu Con soạn theo chủ đề: giữ an toàn ở trường, ở bể bơi, ở chỗ đông người;
   dùng mẫu câu “ở đâu … cũng …”. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Ở đâu em cũng cẩn thận để giữ an toàn.',
  khoi: [{ tu: 'tập bơi' }, { tu: 'cổng trường' }, { tu: 'đi bộ' }, { tu: 'cái còi' }, { tu: 'xe buýt' }],
  tuMoi: [['an toàn', 'không có nguy hiểm'], ['cẩn thận', 'chú ý, không vội vàng'], ['bể bơi', 'hồ nước để bơi'], ['phao bơi', 'đồ giúp nổi trên nước'],
    ['đông người', 'có rất nhiều người'], ['cầu thang', 'những bậc để lên xuống tầng'], ['vịn tay', 'đặt tay bám vào để không ngã'], ['xô đẩy', 'đẩy người khác']],
  tuKho: ['an toàn', 'cẩn thận', 'bể bơi', 'phao bơi', 'cầu thang', 'xô đẩy'],
  doan: [
    { text: 'Ở trường, em đi cầu thang chậm rãi, vịn tay vào lan can. Em không chạy nhảy, không xô đẩy bạn trên cầu thang.',
      hoi: [{ q: 'Đi cầu thang, em làm gì?', dung: 'Đi chậm, vịn tay vào lan can.', sai: ['Chạy thật nhanh.', 'Nhảy hai bậc một.'] },
            { q: 'Trên cầu thang, em không làm gì?', dung: 'Không xô đẩy bạn.', sai: ['Không vịn tay.', 'Không đi chậm.'] }] },
    { text: 'Ở bể bơi, em chỉ xuống nước khi có người lớn. Em mặc phao bơi và bơi ở chỗ nước nông. Em không đùa nghịch dìm bạn.',
      hoi: [{ q: 'Em xuống nước khi nào?', dung: 'Khi có người lớn.', sai: ['Khi ở một mình.', 'Lúc trời tối.'] },
            { q: 'Ở bể bơi, em mặc gì?', dung: 'Phao bơi.', sai: ['Áo khoác dày.', 'Giày da.'] }] },
    { text: 'Ở chỗ đông người, em nắm tay bố mẹ, không chạy lung tung. Ở đâu em cũng cẩn thận. Ở đâu em cũng giữ an toàn cho mình và cho bạn.',
      hoi: [{ q: 'Ở chỗ đông người, em làm gì?', dung: 'Nắm tay bố mẹ.', sai: ['Chạy lung tung.', 'Đi theo người lạ.'] },
            { q: 'Ở đâu em cũng làm gì?', dung: 'Cẩn thận, giữ an toàn.', sai: ['Chạy nhảy thật nhanh.', 'Xô đẩy bạn.'] }] }
  ],
  hieu: [
    { q: 'Vì sao không xô đẩy trên cầu thang?', dung: 'Vì dễ ngã, rất nguy hiểm.', sai: ['Vì cầu thang bẩn.', 'Vì cô không cho chơi.'] },
    { q: 'Câu nào dùng đúng mẫu “ở đâu … cũng …”?', dung: 'Ở đâu em cũng cẩn thận.', sai: ['Em cẩn thận ở.', 'Cũng ở đâu em.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Ở đâu cũng giữ an toàn.', sai: ['Chỉ an toàn ở nhà.', 'Không cần cẩn thận.'] }
  ],
  thuTu: ['Em đến bể bơi cùng bố.', 'Em mặc phao bơi.', 'Em xuống nước ở chỗ nông.', 'Bố đứng cạnh trông em.'],
  cau: { mau: 'Ở đâu … cũng …', ds: ['Ở đâu|em cũng|cẩn thận.', 'Ở đâu|em cũng|chào hỏi lễ phép.', 'Đi đâu|em cũng|nắm tay mẹ.', 'Lúc nào|em cũng|giữ an toàn.'] },
  dien: [
    { cau: 'Em đi cầu ___ chậm rãi.', dung: 'thang', sai: ['trượt', 'vồng'] },
    { cau: 'Em không chạy nhảy, không xô ___ bạn.', dung: 'đẩy', sai: ['đi', 'đá'] },
    { cau: 'Em mặc ___ bơi.', dung: 'phao', sai: ['khăn', 'mũ len'] },
    { cau: 'Ở chỗ đông người, em nắm ___ bố mẹ.', dung: 'tay', sai: ['áo', 'tóc'] },
    { cau: 'Ở đâu em ___ cẩn thận.', dung: 'cũng', sai: ['còn', 'mới'] }
  ],
  to: ['an toàn', 'cẩn thận', 'cầu thang'],
  noi: ['Ở trường, em giữ an toàn thế nào?', 'Đi bơi, em cần nhớ điều gì?', 'Đặt một câu với “ở đâu … cũng …”.'],
  viet: ['Ở trường, em', 'Ở bể bơi, em', 'Ở chỗ đông người, em', 'Ở đâu em cũng']
};
docSetup();
