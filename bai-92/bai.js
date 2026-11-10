/* Bài 92 · Ca dao, tục ngữ Việt Nam — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: trò chơi điền tục ngữ (Lời chào cao hơn mâm cỗ; Đi hỏi già, về nhà hỏi trẻ; Đi thưa về trình;
   Dao năng liếc thì sắc, người năng chào thì quen), ca dao “Ngó lên nuộc lạt mái nhà…”, chuyện cô công nhân hay chào bác bảo vệ.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Chăm chào hỏi thì ai cũng quý mến.',
  khoi: [{ tu: 'con dao' }, { tu: 'mâm cơm' }, { tu: 'nhà lá' }, { tu: 'cụ già' }, { tu: 'cái kim', tranh: 'kim chỉ', do: 'Nhỏ như sợi tóc / Có một con mắt / Đuôi dài thướt tha / Giúp bà khâu áo' }],
  tuMoi: [['ca dao', 'câu hát, câu thơ của dân gian'], ['tục ngữ', 'câu nói ngắn, dạy điều hay'], ['ông bà', 'người sinh ra bố mẹ'], ['mâm cỗ', 'mâm có nhiều món ăn ngon'],
    ['năng', 'hay, thường làm'], ['bảo vệ', 'người trông giữ nơi làm việc'], ['kho lạnh', 'phòng rất lạnh để giữ đồ ăn'], ['quý mến', 'yêu quý, thương mến']],
  tuKho: ['ca dao', 'tục ngữ', 'mâm cỗ', 'bảo vệ', 'kho lạnh', 'quý mến'],
  doan: [
    { text: 'Ông bà ta để lại nhiều câu ca dao, tục ngữ hay. Câu “Lời chào cao hơn mâm cỗ” dạy em biết chào hỏi. Câu “Dao năng liếc thì sắc, người năng chào thì quen” cũng vậy.',
      hoi: [{ q: 'Ai để lại ca dao, tục ngữ?', dung: 'Ông bà ta.', sai: ['Các bạn nhỏ.', 'Người máy.'] },
            { q: 'Câu “Lời chào cao hơn mâm cỗ” dạy em điều gì?', dung: 'Biết chào hỏi.', sai: ['Biết nấu cỗ.', 'Biết leo cao.'] }] },
    { text: 'Có một cô công nhân sáng nào cũng chào bác bảo vệ. Chiều về, cô lại chào tạm biệt bác. Một hôm, cô bị nhốt trong kho lạnh mà không ai biết.',
      hoi: [{ q: 'Cô công nhân có thói quen gì?', dung: 'Chào bác bảo vệ mỗi ngày.', sai: ['Đi làm muộn.', 'Không nói chuyện với ai.'] },
            { q: 'Một hôm, cô bị làm sao?', dung: 'Bị nhốt trong kho lạnh.', sai: ['Bị lạc đường.', 'Bị ngã xe.'] }] },
    { text: 'Chiều hôm ấy, bác bảo vệ không nghe thấy lời chào tạm biệt. Bác đi tìm và cứu được cô. Nhờ chăm chào hỏi, cô được mọi người quý mến.',
      hoi: [{ q: 'Vì sao bác bảo vệ đi tìm cô?', dung: 'Vì không nghe thấy lời chào tạm biệt.', sai: ['Vì bác đi dạo.', 'Vì bác đói bụng.'] },
            { q: 'Thói quen chào hỏi đã giúp gì cho cô?', dung: 'Cứu sống cô khi gặp nạn.', sai: ['Giúp cô có tiền.', 'Giúp cô được nghỉ làm.'] }] }
  ],
  hieu: [
    { q: 'Câu tục ngữ nào nói về chào hỏi?', dung: 'Lời chào cao hơn mâm cỗ.', sai: ['Có công mài sắt có ngày nên kim.', 'Ăn quả nhớ kẻ trồng cây.'] },
    { q: '“Đi thưa về …” — từ nào điền vào chỗ trống?', dung: 'trình', sai: ['chào', 'hỏi'] },
    { q: 'Theo em, chào hỏi thường xuyên có tác dụng gì?', dung: 'Mọi người yêu mến và tin cậy mình.', sai: ['Không có tác dụng gì.', 'Làm mọi người khó chịu.'] }
  ],
  thuTu: ['Sáng nào, cô công nhân cũng chào bác bảo vệ.', 'Cô bị nhốt trong kho lạnh.', 'Bác bảo vệ không nghe thấy lời chào tạm biệt.', 'Bác đi tìm và cứu được cô.'],
  cau: { mau: 'Tục ngữ', ds: ['Lời chào|cao hơn|mâm cỗ.', 'Đi thưa|về trình.', 'Đi hỏi già,|về nhà|hỏi trẻ.', 'Có công mài sắt|có ngày|nên kim.'] },
  dien: [
    { cau: 'Lời chào cao hơn mâm ___.', dung: 'cỗ', sai: ['cơm', 'bàn'] },
    { cau: 'Đi thưa, về ___.', dung: 'trình', sai: ['chào', 'hỏi'] },
    { cau: 'Đi hỏi ___, về nhà hỏi trẻ.', dung: 'già', sai: ['bạn', 'cô'] },
    { cau: 'Dao năng liếc thì sắc, người năng chào thì ___.', dung: 'quen', sai: ['vui', 'yêu'] },
    { cau: 'Có công mài sắt có ngày nên ___.', dung: 'kim', sai: ['dao', 'bút'] }
  ],
  to: ['ca dao', 'tục ngữ', 'lời chào'],
  noi: ['Em thuộc câu tục ngữ nào? Đọc cho các bạn nghe.', 'Kể lại chuyện cô công nhân và bác bảo vệ.', 'Mỗi ngày, em chào những ai?'],
  viet: ['Câu tục ngữ em thích là', 'Câu đó dạy em', 'Mỗi ngày, em chào', 'Em sẽ']
};
docSetup();
