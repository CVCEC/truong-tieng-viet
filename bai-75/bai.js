/* Bài 75 · Em lớn lên rồi — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js, tranh ở chung/tranh.js
   Sửa so với slide: slide không có chữ bài thơ Lên Tám, dùng bài thơ ở Bài 71; câu hỏi từng đoạn chuyển về đúng đoạn có câu trả lời;
   đáp án chọn ý do Trâu Con soạn theo bài; luyện câu theo mẫu "Ai làm gì?" với các từ chỉ hoạt động trong bài. */
const DOC = {
  y: 'Tự lập và trưởng thành mỗi ngày.',
  khoi: [
    { tu: 'lớn lên' },
    { tu: 'tự mặc áo', tranh: 'mặc áo' },
    { tu: 'xếp sách' },
    { tu: 'giúp em' },
    { tu: 'đến trường' }
  ],
  tuMoi: [['tự lập', 'tự làm việc phù hợp với mình'], ['gọn gàng', 'ngăn nắp, sạch sẽ'], ['trưởng thành', 'lớn hơn trong suy nghĩ và việc làm'], ['nhường nhịn', 'biết nhường người khác'],
    ['chăm chỉ', 'siêng năng làm việc'], ['trách nhiệm', 'biết làm tròn việc của mình'], ['tự tin', 'tin vào khả năng của mình'], ['tiến bộ', 'tốt hơn trước']],
  tuKho: ['tự lập', 'gọn gàng', 'trưởng thành', 'nhường nhịn', 'trách nhiệm', 'tiến bộ'],
  doan: [
    { text: 'Năm nay, em lên tám tuổi. Em đã cao hơn, biết tự mặc quần áo và chuẩn bị sách vở trước khi đến trường. Mỗi sáng, em tự kiểm tra cặp để không quên đồ dùng.',
      hoi: [{ q: 'Năm nay, bạn nhỏ lên mấy tuổi?', dung: 'Tám tuổi.', sai: ['Sáu tuổi.', 'Mười tuổi.'] },
            { q: 'Mỗi sáng, bạn nhỏ làm gì?', dung: 'Tự kiểm tra cặp để không quên đồ dùng.', sai: ['Ngủ dậy thật muộn.', 'Nhờ mẹ mặc áo.'] }] },
    { text: 'Ở nhà, em xếp đồ chơi, gấp quần áo nhỏ và giúp em bé mang dép. Có lúc em làm chưa khéo, nhưng em kiên nhẫn sửa lại.',
      hoi: [{ q: 'Ở nhà, bạn nhỏ làm những việc gì?', dung: 'Xếp đồ chơi, gấp quần áo, giúp em bé mang dép.', sai: ['Nấu cơm và đi chợ.', 'Chỉ ngồi chơi.'] },
            { q: 'Khi làm chưa khéo, bạn nhỏ làm gì?', dung: 'Kiên nhẫn sửa lại.', sai: ['Bỏ đi chơi.', 'Khóc và giận dỗi.'] }] },
    { text: 'Em hiểu lớn lên không chỉ là cao hơn. Lớn lên còn là biết tự lập, biết nhận lỗi, biết quan tâm người khác và hoàn thành việc của mình.',
      hoi: [{ q: 'Lớn lên có phải chỉ là cao hơn không?', dung: 'Không, lớn lên còn là biết tự lập.', sai: ['Đúng, chỉ là cao hơn.', 'Lớn lên là được ăn nhiều hơn.'] },
            { q: 'Lớn lên còn là biết làm gì?', dung: 'Biết nhận lỗi và quan tâm người khác.', sai: ['Biết đòi quà.', 'Biết thức khuya.'] }] }
  ],
  hieu: [
    { q: 'Những việc nào thể hiện sự tự lập?', dung: 'Tự mặc quần áo, tự chuẩn bị sách vở.', sai: ['Nhờ mẹ làm hết mọi việc.', 'Để đồ chơi bừa bộn.'] },
    { q: 'Bạn nhỏ quan tâm em bé thế nào?', dung: 'Giúp em bé mang dép.', sai: ['Lấy đồ chơi của em.', 'Không chơi với em.'] },
    { q: 'Bài đọc muốn nói điều gì?', dung: 'Lớn lên là biết tự lập và quan tâm người khác.', sai: ['Lớn lên là cao hơn bạn.', 'Lớn lên là không cần ai giúp.'] }
  ],
  thuTu: ['Năm nay, em lên tám tuổi.', 'Mỗi sáng, em tự kiểm tra cặp.', 'Ở nhà, em xếp đồ chơi, gấp quần áo nhỏ.', 'Em hiểu lớn lên không chỉ là cao hơn.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Em|xếp|đồ chơi.', 'Em|gấp|quần áo nhỏ.', 'Em|tự chuẩn bị|sách vở.', 'Em|giúp em bé|mang dép.'] },
  dien: [
    { cau: 'Năm nay, em lên ___ tuổi.', dung: 'tám', sai: ['sáu', 'mười'] },
    { cau: 'Em đã cao hơn, biết tự ___ quần áo.', dung: 'mặc', sai: ['ăn', 'ngủ'] },
    { cau: 'Mỗi sáng, em tự kiểm tra ___.', dung: 'cặp', sai: ['nồi', 'xe'] },
    { cau: 'Có lúc em làm chưa khéo, nhưng em ___ sửa lại.', dung: 'kiên nhẫn', sai: ['bực mình', 'vội vàng'] },
    { cau: 'Lớn lên còn là biết ___, biết nhận lỗi.', dung: 'tự lập', sai: ['khóc', 'đòi quà'] }
  ],
  to: ['lớn lên', 'tự lập', 'em'],
  noi: ['Nói ba việc em đã tự làm được.', 'Em giúp gia đình việc gì?', 'Em muốn thay đổi thói quen nào?'],
  viet: ['Em đã lớn hơn vì', 'Em tự làm được', 'Ở nhà, em giúp', 'Em sẽ cố gắng']
};
docSetup();
