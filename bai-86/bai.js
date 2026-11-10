/* Bài 86 · Tết Đoan Ngọ — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: mùng 5 tháng 5 Âm lịch, “Tết diệt sâu bọ”, ăn rượu nếp, hoa quả,
   tắm lá, nhuộm móng; Nên/không nên. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Giữ gìn sức khỏe, cả nhà cùng vui.',
  khoi: [{ tu: 'quả mận' }, { tu: 'quả vải' }, { tu: 'con sâu' }, { tu: 'quả dưa' }, { tu: 'trời nắng' }],
  tuMoi: [['Đoan Ngọ', 'Tết mùng năm tháng năm Âm lịch'], ['sâu bọ', 'những con vật nhỏ hại cây, hại người'], ['rượu nếp', 'món ăn làm từ gạo nếp ủ men'], ['giữa năm', 'khoảng tháng năm, tháng sáu'],
    ['nắng nóng', 'trời rất nóng'], ['hoa quả', 'trái cây'], ['khỏe mạnh', 'không ốm đau'], ['mâm cỗ', 'mâm có nhiều món ăn để cúng']],
  tuKho: ['Đoan Ngọ', 'sâu bọ', 'rượu nếp', 'nắng nóng', 'khỏe mạnh', 'mâm cỗ'],
  doan: [
    { text: 'Mùng năm tháng năm Âm lịch là Tết Đoan Ngọ. Người Việt còn gọi là Tết diệt sâu bọ. Lúc này là giữa năm, trời nắng nóng.',
      hoi: [{ q: 'Tết Đoan Ngọ là ngày nào?', dung: 'Mùng năm tháng năm Âm lịch.', sai: ['Mùng một tháng giêng.', 'Rằm tháng tám.'] },
            { q: 'Tết Đoan Ngọ còn gọi là gì?', dung: 'Tết diệt sâu bọ.', sai: ['Tết trồng cây.', 'Tết thiếu nhi.'] }] },
    { text: 'Sáng sớm, cả nhà ăn rượu nếp và hoa quả như mận, vải, dưa hấu. Người xưa tin rằng ăn như vậy sẽ diệt sâu bọ trong người.',
      hoi: [{ q: 'Sáng Tết Đoan Ngọ, cả nhà ăn gì?', dung: 'Rượu nếp và hoa quả.', sai: ['Bánh chưng.', 'Bánh trung thu.'] },
            { q: 'Kể tên một loại quả ăn vào Tết Đoan Ngọ.', dung: 'Quả mận.', sai: ['Quả bí ngô.', 'Quả thông.'] }] },
    { text: 'Mẹ làm mâm cỗ cúng ông bà. Cả nhà mong ai cũng khỏe mạnh. Trời nắng nóng, em nhớ uống nước và đội mũ khi ra đường.',
      hoi: [{ q: 'Mẹ làm mâm cỗ để làm gì?', dung: 'Để cúng ông bà.', sai: ['Để bán.', 'Để cho mèo ăn.'] },
            { q: 'Trời nắng nóng, em cần làm gì?', dung: 'Uống nước và đội mũ.', sai: ['Chạy ngoài nắng cả trưa.', 'Không uống nước.'] }] }
  ],
  hieu: [
    { q: 'Vì sao gọi là Tết diệt sâu bọ?', dung: 'Vì người xưa tin ăn rượu nếp, hoa quả sẽ diệt sâu bọ.', sai: ['Vì đi bắt sâu ngoài vườn.', 'Vì sâu bọ ăn Tết.'] },
    { q: 'Tết Đoan Ngọ vào mùa nào?', dung: 'Giữa năm, trời nắng nóng.', sai: ['Mùa đông lạnh.', 'Mùa xuân có tuyết.'] },
    { q: 'Cả nhà mong điều gì?', dung: 'Ai cũng khỏe mạnh.', sai: ['Có thật nhiều tiền.', 'Được nghỉ học.'] }
  ],
  thuTu: ['Sáng sớm, cả nhà ăn rượu nếp.', 'Cả nhà ăn mận, vải, dưa hấu.', 'Mẹ làm mâm cỗ cúng ông bà.', 'Cả nhà mong ai cũng khỏe mạnh.'],
  cau: { mau: 'Cái gì thế nào?', nhan: ['Cái gì?', 'thế nào?'], ds: ['Quả mận|chua chua.', 'Quả vải|ngọt lịm.', 'Rượu nếp|thơm thơm.', 'Trời|nắng nóng.'] },
  dien: [
    { cau: 'Tết Đoan Ngọ là mùng ___ tháng năm Âm lịch.', dung: 'năm', sai: ['một', 'mười'] },
    { cau: 'Người Việt còn gọi là Tết diệt ___ bọ.', dung: 'sâu', sai: ['muỗi', 'kiến'] },
    { cau: 'Cả nhà ăn rượu ___ và hoa quả.', dung: 'nếp', sai: ['bánh', 'kem'] },
    { cau: 'Mẹ làm mâm ___ cúng ông bà.', dung: 'cỗ', sai: ['cơm', 'bàn'] },
    { cau: 'Trời nắng nóng, em nhớ đội ___.', dung: 'mũ', sai: ['nồi', 'chén'] }
  ],
  to: ['quả mận', 'quả vải', 'sâu bọ'],
  noi: ['Tết Đoan Ngọ nhà em ăn những gì?', 'Em thích quả gì nhất?', 'Trời nắng nóng, em giữ sức khỏe thế nào?'],
  viet: ['Tết Đoan Ngọ là', 'Cả nhà em ăn', 'Em thích quả', 'Trời nắng, em']
};
docSetup();
