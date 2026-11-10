/* Bài 73 · Con quạ khôn ngoan — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js, tranh ở chung/tranh.js
   Sửa so với slide: slide không có chữ bài thơ Lên Tám, dùng bài thơ ở Bài 71; câu hỏi "Quạ nhìn thấy gì bên cạnh lọ?" chuyển sang đoạn 2
   (đoạn có câu trả lời); đáp án chọn ý do Trâu Con soạn theo bài; luyện câu "nguyên nhân – kết quả" dùng từ "nên". */
const DOC = {
  y: 'Bình tĩnh tìm cách giải quyết khó khăn.',
  khoi: [
    { tu: 'con quạ' },
    { tu: 'cái lọ', tranh: 'lọ' },
    { tu: 'viên sỏi' },
    { tu: 'mực nước' },
    { tu: 'uống nước', tranh: 'quạ uống nước' }
  ],
  tuMoi: [['khát nước', 'cần uống nước'], ['miệng lọ', 'phần mở ở trên lọ'], ['mực nước', 'độ cao của nước'], ['viên sỏi', 'hòn đá nhỏ, nhẵn'],
    ['gắp', 'dùng mỏ hoặc tay lấy vật'], ['dâng lên', 'tăng lên cao hơn'], ['kiên trì', 'tiếp tục làm dù khó'], ['bình tĩnh', 'không cuống, suy nghĩ rõ']],
  tuKho: ['khát nước', 'miệng lọ', 'viên sỏi', 'mực nước', 'dâng lên', 'kiên trì'],
  doan: [
    { text: 'Một con quạ khát nước bay đi tìm nước. Nó thấy một cái lọ có ít nước ở đáy. Miệng lọ hẹp, còn mực nước quá thấp nên quạ không thể uống được.',
      hoi: [{ q: 'Quạ bay đi tìm gì?', dung: 'Quạ đi tìm nước.', sai: ['Quạ đi tìm sỏi.', 'Quạ đi tìm tổ.'] },
            { q: 'Vì sao quạ không uống được nước?', dung: 'Vì miệng lọ hẹp, mực nước quá thấp.', sai: ['Vì lọ không có nước.', 'Vì quạ không khát.'] }] },
    { text: 'Quạ nhìn quanh và thấy nhiều viên sỏi. Nó nghĩ ra một cách: gắp từng viên sỏi bỏ vào lọ. Quạ làm chậm rãi, hết viên này đến viên khác.',
      hoi: [{ q: 'Quạ nhìn thấy gì bên cạnh lọ?', dung: 'Nhiều viên sỏi.', sai: ['Một chùm nho.', 'Một cái cốc.'] },
            { q: 'Quạ nghĩ ra cách gì?', dung: 'Gắp từng viên sỏi bỏ vào lọ.', sai: ['Làm vỡ cái lọ.', 'Bay đi tìm lọ khác.'] }] },
    { text: 'Mực nước dần dâng lên gần miệng lọ. Quạ uống được nước và hết khát. Nhờ quan sát kĩ, bình tĩnh và không bỏ cuộc, quạ đã tự giải quyết khó khăn.',
      hoi: [{ q: 'Khi có nhiều sỏi trong lọ, mực nước thế nào?', dung: 'Mực nước dần dâng lên.', sai: ['Mực nước thấp xuống.', 'Nước chảy hết ra ngoài.'] },
            { q: 'Cuối cùng, quạ thế nào?', dung: 'Quạ uống được nước và hết khát.', sai: ['Quạ vẫn khát nước.', 'Quạ bỏ đi.'] }] }
  ],
  hieu: [
    { q: 'Quạ đã làm mực nước dâng lên bằng cách nào?', dung: 'Bỏ từng viên sỏi vào lọ.', sai: ['Đổ thêm nước vào lọ.', 'Nghiêng cái lọ.'] },
    { q: 'Những đức tính nào giúp quạ thành công?', dung: 'Quan sát kĩ, bình tĩnh, không bỏ cuộc.', sai: ['Nóng vội và bỏ cuộc.', 'Nhờ bạn làm giúp.'] },
    { q: 'Câu chuyện khuyên em điều gì?', dung: 'Bình tĩnh tìm cách giải quyết khó khăn.', sai: ['Gặp khó khăn thì bỏ đi.', 'Chỉ làm những việc dễ.'] }
  ],
  thuTu: ['Một con quạ khát nước bay đi tìm nước.', 'Quạ thấy một cái lọ có ít nước ở đáy.', 'Quạ gắp từng viên sỏi bỏ vào lọ.', 'Mực nước dâng lên, quạ uống được nước.'],
  cau: { mau: 'Nguyên nhân – nên – kết quả', nhan: ['Nguyên nhân', 'nên', 'Kết quả'], ds: ['Quạ bỏ sỏi vào lọ|nên|mực nước dâng lên.', 'Miệng lọ hẹp|nên|quạ không uống được.', 'Quạ không bỏ cuộc|nên|quạ đã uống được nước.'] },
  dien: [
    { cau: 'Một con quạ ___ bay đi tìm nước.', dung: 'khát nước', sai: ['no nê', 'buồn ngủ'] },
    { cau: 'Miệng lọ ___, còn mực nước quá thấp.', dung: 'hẹp', sai: ['rộng', 'vỡ'] },
    { cau: 'Quạ nhìn quanh và thấy nhiều ___.', dung: 'viên sỏi', sai: ['quả nho', 'bông hoa'] },
    { cau: 'Mực nước dần ___ gần miệng lọ.', dung: 'dâng lên', sai: ['rút xuống', 'biến mất'] },
    { cau: 'Quạ uống được nước và hết ___.', dung: 'khát', sai: ['đói', 'buồn'] }
  ],
  to: ['quạ', 'sỏi', 'nước'],
  noi: ['Kể cách quạ lấy nước theo ba bước.', 'Em thích đức tính nào của quạ?', 'Kể một cách giải quyết thông minh em từng biết.'],
  viet: ['Quạ nhìn thấy', 'Quạ nghĩ ra cách', 'Sau đó', 'Cuối cùng']
};
docSetup();
