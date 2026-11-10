/* Bài 89 · Chú bộ đội — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: các chú bộ đội bảo vệ biên giới, biển đảo, giúp dân khi lũ lụt.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Em biết ơn các chú bộ đội.',
  khoi: [{ tu: 'hải quân' }, { tu: 'tuần tra' }, { tu: 'biển đảo' }, { tu: 'huân chương' }, { tu: 'đồi núi' }],
  tuMoi: [['bộ đội', 'người lính bảo vệ đất nước'], ['biên giới', 'nơi giáp với nước khác'], ['canh gác', 'trông giữ, không để kẻ xấu vào'], ['tuần tra', 'đi xem xét để giữ an toàn'],
    ['lũ lụt', 'nước dâng cao, ngập nhà cửa'], ['dũng cảm', 'không sợ khó, không sợ nguy hiểm'], ['kỉ luật', 'làm đúng nội quy, giờ giấc'], ['biết ơn', 'nhớ công người đã giúp mình']],
  tuKho: ['biên giới', 'canh gác', 'tuần tra', 'lũ lụt', 'dũng cảm', 'kỉ luật'],
  doan: [
    { text: 'Các chú bộ đội bảo vệ đất nước. Có chú canh gác ở biên giới trên núi cao. Có chú hải quân tuần tra ngoài biển đảo.',
      hoi: [{ q: 'Các chú bộ đội làm gì?', dung: 'Bảo vệ đất nước.', sai: ['Bán hàng ở chợ.', 'Dạy học ở trường.'] },
            { q: 'Chú hải quân làm việc ở đâu?', dung: 'Ngoài biển đảo.', sai: ['Trong lớp học.', 'Trong bệnh viện.'] }] },
    { text: 'Ở doanh trại, các chú dậy rất sớm. Các chú tập thể dục, gấp chăn màn gọn gàng và làm việc đúng giờ. Các chú sống rất kỉ luật.',
      hoi: [{ q: 'Ở doanh trại, các chú dậy lúc nào?', dung: 'Dậy rất sớm.', sai: ['Dậy rất muộn.', 'Không ngủ.'] },
            { q: 'Các chú gấp chăn màn thế nào?', dung: 'Gọn gàng.', sai: ['Bừa bộn.', 'Không gấp.'] }] },
    { text: 'Khi có lũ lụt, các chú dũng cảm giúp dân. Các chú chèo thuyền đưa các cụ già và em nhỏ đến nơi an toàn. Ai cũng biết ơn các chú.',
      hoi: [{ q: 'Khi có lũ lụt, các chú làm gì?', dung: 'Dũng cảm giúp dân.', sai: ['Đi nghỉ mát.', 'Ở trong nhà.'] },
            { q: 'Các chú đưa ai đến nơi an toàn?', dung: 'Các cụ già và em nhỏ.', sai: ['Các con gà.', 'Các xe ô tô.'] }] }
  ],
  hieu: [
    { q: 'Vì sao các chú bộ đội gấp chăn màn gọn gàng?', dung: 'Vì các chú sống rất kỉ luật.', sai: ['Vì các chú không ngủ.', 'Vì có khách đến chơi.'] },
    { q: 'Từ nào nói về các chú bộ đội?', dung: 'Dũng cảm.', sai: ['Lười biếng.', 'Nhút nhát.'] },
    { q: 'Em học được gì ở các chú?', dung: 'Dậy sớm, gọn gàng, làm việc đúng giờ.', sai: ['Ngủ dậy thật muộn.', 'Để đồ bừa bộn.'] }
  ],
  thuTu: ['Các chú dậy rất sớm.', 'Các chú tập thể dục.', 'Các chú gấp chăn màn gọn gàng.', 'Các chú làm việc đúng giờ.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Chú bộ đội|canh gác|biên giới.', 'Chú hải quân|tuần tra|biển đảo.', 'Các chú|giúp|dân.', 'Em|gấp|chăn gọn gàng.'] },
  dien: [
    { cau: 'Có chú canh gác ở ___ giới trên núi cao.', dung: 'biên', sai: ['thế', 'cửa'] },
    { cau: 'Có chú hải quân tuần tra ngoài biển ___.', dung: 'đảo', sai: ['hồ', 'sông'] },
    { cau: 'Các chú sống rất kỉ ___.', dung: 'luật', sai: ['niệm', 'lục'] },
    { cau: 'Khi có lũ lụt, các chú ___ cảm giúp dân.', dung: 'dũng', sai: ['nhút', 'vui'] },
    { cau: 'Ai cũng ___ ơn các chú.', dung: 'biết', sai: ['quên', 'xin'] }
  ],
  to: ['bộ đội', 'dũng cảm', 'biển đảo'],
  noi: ['Các chú bộ đội làm những việc gì?', 'Em muốn nói gì với các chú bộ đội?', 'Em học được điều gì ở các chú?'],
  viet: ['Các chú bộ đội', 'Chú hải quân', 'Khi có lũ lụt', 'Em biết ơn']
};
docSetup();
