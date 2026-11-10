/* Bài 71 · Gia đình của em — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js, tranh ở chung/tranh.js
   Sửa so với slide: thơ Lên Tám lấy đúng như slide; câu hỏi từng đoạn và đáp án do Trâu Con soạn theo đúng chi tiết trong đoạn;
   phần "Việc làm trong một ngày" thành trò sắp xếp sự việc. */
const DOC = {
  y: 'Yêu thương, quan tâm và giúp đỡ người thân trong gia đình.',
  khoi: [
    { tu: 'bà', tranh: 'bà đón cháu', cau: 'Bà đón cháu.' },
    { tu: 'bố', tranh: 'bố đi làm', cau: 'Bố đi làm.' },
    { tu: 'mẹ', tranh: 'mẹ bế bé', cau: 'Mẹ chăm em.' },
    { tu: 'chị', tranh: 'chị đọc sách', cau: 'Chị đọc sách.' },
    { tu: 'em', tranh: 'em chơi ngoan', cau: 'Em chơi ngoan.' }
  ],
  tuMoi: [['bà', 'mẹ của bố hoặc mẹ'], ['kĩ sư', 'người làm công việc kĩ thuật'], ['y tá', 'người chăm sóc bệnh nhân'], ['nhà trẻ', 'nơi chăm sóc trẻ nhỏ'],
    ['chăm', 'trông nom, săn sóc'], ['chuẩn bị', 'làm sẵn trước khi cần'], ['dọn dẹp', 'sắp xếp cho gọn và sạch'], ['đi dạo', 'đi chậm để thư giãn']],
  tuKho: ['lớn tuổi', 'trạm y tế', 'trò chuyện', 'chuẩn bị', 'cuối tuần', 'quây quần'],
  doan: [
    { text: 'Nhà Thu có bà, bố, mẹ, Thu và bé Ly. Bà đã lớn tuổi. Mỗi ngày, bà ở nhà chăm bé Ly và kể chuyện cho hai chị em nghe.',
      hoi: [{ q: 'Nhà Thu có những ai?', dung: 'Bà, bố, mẹ, Thu và bé Ly.', sai: ['Bà, Thu và bé Ly.', 'Bố, mẹ và Thu.'] },
            { q: 'Mỗi ngày, bà làm gì?', dung: 'Bà chăm bé Ly và kể chuyện.', sai: ['Bà đi làm ở trạm y tế.', 'Bà đưa cả nhà đi dạo.'] }] },
    { text: 'Bố Thu là kĩ sư. Mẹ Thu là y tá ở trạm y tế xã. Thu học lớp Hai, còn Ly đi nhà trẻ. Ai cũng có công việc riêng nhưng luôn quan tâm đến nhau.',
      hoi: [{ q: 'Bố Thu làm nghề gì?', dung: 'Bố Thu là kĩ sư.', sai: ['Bố Thu là y tá.', 'Bố Thu là thầy giáo.'] },
            { q: 'Bé Ly đi đâu?', dung: 'Ly đi nhà trẻ.', sai: ['Ly học lớp Hai.', 'Ly đi trạm y tế.'] }] },
    { text: 'Buổi tối, cả nhà ăn cơm, trò chuyện và cùng dọn dẹp nhà cửa. Thu thường lấy nước cho bà, xếp đồ chơi cùng em và giúp mẹ chuẩn bị bàn ăn. Cuối tuần, bố đưa cả nhà đi dạo. Thu rất yêu gia đình mình.',
      hoi: [{ q: 'Buổi tối, cả nhà làm gì?', dung: 'Ăn cơm, trò chuyện và dọn dẹp nhà cửa.', sai: ['Đi học và đi làm.', 'Đi dạo cả buổi tối.'] },
            { q: 'Thu giúp mẹ việc gì?', dung: 'Chuẩn bị bàn ăn.', sai: ['Nấu cơm.', 'Đi chợ.'] }] }
  ],
  hieu: [
    { q: 'Bà thường làm gì?', dung: 'Chăm bé Ly.', sai: ['Đi làm ở trạm y tế.', 'Đi học.'] },
    { q: 'Thu giúp gia đình bằng cách nào?', dung: 'Xếp đồ chơi cùng em.', sai: ['Lái xe.', 'Khám bệnh.'] },
    { q: 'Điều gì làm gia đình Thu ấm áp?', dung: 'Mọi người quan tâm đến nhau.', sai: ['Mỗi người ở riêng.', 'Nhà có nhiều đồ.'] }
  ],
  thuTu: ['Buổi sáng, bố mẹ đi làm, Thu đi học.', 'Buổi chiều, bà đón cháu, cả nhà trở về.', 'Buổi tối, cả nhà ăn cơm, trò chuyện, dọn dẹp.', 'Cuối tuần, cả nhà đi dạo.'],
  cau: { mau: 'Ai là gì?', nhan: ['Ai?', 'là', 'gì?'], ds: ['Bố Thu|là|kĩ sư.', 'Mẹ Thu|là|y tá.', 'Thu|là|học sinh lớp Hai.'] },
  dien: [
    { cau: 'Bà đã ___ tuổi.', dung: 'lớn', sai: ['trẻ', 'nhỏ'] },
    { cau: 'Mẹ Thu là y tá ở ___ xã.', dung: 'trạm y tế', sai: ['trường học', 'nhà trẻ'] },
    { cau: 'Thu học lớp Hai, còn Ly đi ___.', dung: 'nhà trẻ', sai: ['làm', 'chợ'] },
    { cau: 'Cuối tuần, bố đưa cả nhà đi ___.', dung: 'dạo', sai: ['học', 'làm'] },
    { cau: 'Thu rất ___ gia đình mình.', dung: 'yêu', sai: ['sợ', 'quên'] }
  ],
  to: ['gia đình', 'bà', 'mẹ'],
  noi: ['Gia đình em có những ai?', 'Một người thân của em làm nghề gì?', 'Mọi người thường làm gì cùng nhau?', 'Em giúp gia đình việc gì?', 'Em cảm thấy thế nào về gia đình?'],
  viet: ['Gia đình em có', 'Bố (mẹ) em là', 'Ở nhà, em thường', 'Cả nhà em thường', 'Em yêu gia đình vì']
};
docSetup();
