/* Bài 141 · Ý nghĩa của việc học — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: học để biết, để làm người tốt; chuyện “Ông trạng thả diều” (Nguyễn Hiền nhà nghèo,
   đứng ngoài lớp nghe giảng, viết lên lá chuối, đỗ Trạng nguyên năm 13 tuổi); “Có công mài sắt có ngày nên kim”.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Học để hiểu biết, để làm người tốt và giúp ích cho mọi người.',
  khoi: [{ tu: 'con diều' }, { tu: 'lớp học' }, { tu: 'sách vở' }, { tu: 'bé học bài' },
    { tu: 'lá chuối', do: 'Lá gì to bản, xanh xanh / Bà dùng gói bánh, em đem tập viết?' }],
  tuMoi: [['ý nghĩa', 'điều quan trọng, giá trị'], ['hiểu biết', 'biết nhiều điều'], ['Trạng nguyên', 'người đỗ đầu kì thi lớn ngày xưa'], ['thông minh', 'nhanh hiểu, nhớ giỏi'],
    ['ham học', 'rất thích học'], ['nghe giảng', 'nghe thầy cô dạy bài'], ['chăm chỉ', 'siêng năng'], ['giúp ích', 'làm điều có lợi cho người khác']],
  tuKho: ['ý nghĩa', 'hiểu biết', 'Trạng nguyên', 'thông minh', 'ham học', 'giúp ích'],
  doan: [
    { text: 'Ngày xưa, có cậu bé Nguyễn Hiền nhà nghèo nhưng rất thông minh và ham học. Cậu phải đi chăn trâu, thả diều, không được đến lớp.',
      hoi: [{ q: 'Nguyễn Hiền là cậu bé thế nào?', dung: 'Thông minh và ham học.', sai: ['Lười biếng.', 'Hay khóc.'] },
            { q: 'Vì sao cậu không được đến lớp?', dung: 'Vì nhà nghèo, phải đi chăn trâu.', sai: ['Vì cậu ghét học.', 'Vì trường quá xa.'] }] },
    { text: 'Cậu đứng ngoài cửa lớp nghe giảng. Cậu không có vở nên viết lên lá chuối khô. Không có đèn, cậu bắt đom đóm bỏ vào vỏ trứng để học.',
      hoi: [{ q: 'Không có vở, cậu viết lên gì?', dung: 'Lá chuối khô.', sai: ['Giấy màu.', 'Bảng điện tử.'] },
            { q: 'Không có đèn, cậu làm gì?', dung: 'Bắt đom đóm bỏ vào vỏ trứng.', sai: ['Đi ngủ.', 'Mua đèn.'] }] },
    { text: 'Nhờ chăm chỉ, năm mười ba tuổi, Nguyễn Hiền đỗ Trạng nguyên. Học giúp em hiểu biết, làm người tốt và giúp ích cho mọi người. Đó là ý nghĩa của việc học.',
      hoi: [{ q: 'Nguyễn Hiền đỗ Trạng nguyên năm mấy tuổi?', dung: 'Mười ba tuổi.', sai: ['Ba mươi tuổi.', 'Năm tuổi.'] },
            { q: 'Học giúp em điều gì?', dung: 'Hiểu biết, làm người tốt, giúp ích mọi người.', sai: ['Được chơi nhiều.', 'Không phải làm gì.'] }] }
  ],
  hieu: [
    { q: 'Câu chuyện có tên là gì?', dung: 'Ông trạng thả diều.', sai: ['Sự tích trầu cau.', 'Thánh Gióng.'] },
    { q: 'Em học được gì ở Nguyễn Hiền?', dung: 'Chăm chỉ, ham học dù khó khăn.', sai: ['Bỏ học đi chơi.', 'Chỉ thả diều.'] },
    { q: 'Câu tục ngữ nào hợp với câu chuyện?', dung: 'Có công mài sắt có ngày nên kim.', sai: ['Ăn quả nhớ kẻ trồng cây.', 'Lời chào cao hơn mâm cỗ.'] }
  ],
  thuTu: ['Nguyễn Hiền nhà nghèo, phải đi chăn trâu.', 'Cậu đứng ngoài cửa lớp nghe giảng.', 'Cậu viết lên lá chuối khô.', 'Năm mười ba tuổi, cậu đỗ Trạng nguyên.'],
  cau: { mau: 'Học để làm gì?', ds: ['Em học|để|hiểu biết.', 'Em học|để|làm người tốt.', 'Em học|để|giúp đỡ bố mẹ.', 'Em học|để|giúp ích mọi người.'] },
  dien: [
    { cau: 'Nguyễn Hiền nhà nghèo nhưng rất ___ học.', dung: 'ham', sai: ['lười', 'ngại'] },
    { cau: 'Cậu đứng ngoài cửa lớp nghe ___.', dung: 'giảng', sai: ['nhạc', 'chuyện'] },
    { cau: 'Cậu viết lên lá ___ khô.', dung: 'chuối', sai: ['sen', 'bàng'] },
    { cau: 'Năm mười ba tuổi, Nguyễn Hiền đỗ ___ nguyên.', dung: 'Trạng', sai: ['Thủ', 'Trung'] },
    { cau: 'Có công mài sắt có ngày nên ___.', dung: 'kim', sai: ['dao', 'búa'] }
  ],
  to: ['học tập', 'ham học', 'hiểu biết'],
  noi: ['Vì sao em đi học?', 'Kể lại chuyện Ông trạng thả diều.', 'Em sẽ học chăm thế nào?'],
  viet: ['Em đi học để', 'Nguyễn Hiền', 'Em học được', 'Em sẽ']
};
docSetup();
