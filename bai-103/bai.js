/* Bài 103 · Ngày Quốc tế Phụ nữ 8/3 — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: ngày 8 tháng 3 tôn vinh bà, mẹ, cô, chị em gái; tặng hoa, làm thiệp, giúp việc nhà.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Em yêu thương và giúp đỡ bà, mẹ, cô, chị em gái.',
  khoi: [{ tu: 'hoa hồng' }, { tu: 'mẹ ôm bé' }, { tu: 'bà nội' }, { tu: 'cô giáo' }, { tu: 'lau nhà' }],
  tuMoi: [['Quốc tế', 'của các nước trên thế giới'], ['phụ nữ', 'người lớn là nữ: bà, mẹ, cô, chị'], ['tôn vinh', 'khen ngợi, đề cao'], ['bó hoa', 'nhiều bông hoa buộc lại'],
    ['vất vả', 'mệt nhọc vì làm nhiều việc'], ['dịu dàng', 'nhẹ nhàng, êm ái'], ['bất ngờ', 'không đoán trước được'], ['việc nhà', 'những việc làm trong nhà']],
  tuKho: ['Quốc tế', 'phụ nữ', 'tôn vinh', 'vất vả', 'dịu dàng', 'bất ngờ'],
  doan: [
    { text: 'Ngày 8 tháng 3 là Ngày Quốc tế Phụ nữ. Đây là ngày tôn vinh bà, mẹ, cô giáo và các chị em gái. Mọi người tặng hoa và gửi lời chúc.',
      hoi: [{ q: 'Ngày 8 tháng 3 là ngày gì?', dung: 'Ngày Quốc tế Phụ nữ.', sai: ['Ngày của Cha.', 'Ngày Nhà giáo.'] },
            { q: 'Ngày này tôn vinh ai?', dung: 'Bà, mẹ, cô giáo, chị em gái.', sai: ['Chỉ các bạn trai.', 'Các chú bộ đội.'] }] },
    { text: 'Mẹ em làm việc rất vất vả. Mẹ đi làm, nấu cơm và chăm sóc cả nhà. Mẹ lúc nào cũng dịu dàng với em.',
      hoi: [{ q: 'Mẹ làm những việc gì?', dung: 'Đi làm, nấu cơm, chăm sóc cả nhà.', sai: ['Chỉ ngủ.', 'Chỉ đi chơi.'] },
            { q: 'Mẹ đối với em thế nào?', dung: 'Dịu dàng.', sai: ['Lạnh lùng.', 'Hay quát mắng.'] }] },
    { text: 'Ngày 8 tháng 3, em cùng bố làm bất ngờ cho mẹ. Bố mua bó hoa, em làm tấm thiệp. Em giúp việc nhà để mẹ được nghỉ ngơi.',
      hoi: [{ q: 'Bố mua gì tặng mẹ?', dung: 'Bó hoa.', sai: ['Đôi giày.', 'Cái nồi.'] },
            { q: 'Em làm gì để mẹ được nghỉ ngơi?', dung: 'Giúp việc nhà.', sai: ['Đòi mẹ chơi cùng.', 'Bày đồ ra nhà.'] }] }
  ],
  hieu: [
    { q: 'Vì sao em giúp mẹ việc nhà?', dung: 'Vì mẹ làm việc rất vất vả.', sai: ['Vì mẹ bắt em làm.', 'Vì em muốn được thưởng.'] },
    { q: 'Ngày 8 tháng 3, em có thể tặng ai?', dung: 'Bà, mẹ, cô giáo.', sai: ['Chỉ tặng bố.', 'Không tặng ai.'] },
    { q: 'Món quà nào em tự làm được?', dung: 'Tấm thiệp tự vẽ.', sai: ['Chiếc ô tô.', 'Ngôi nhà.'] }
  ],
  thuTu: ['Ngày 8 tháng 3 đến.', 'Bố mua bó hoa.', 'Em làm tấm thiệp.', 'Em giúp việc nhà để mẹ nghỉ ngơi.'],
  cau: { mau: 'Ai thế nào?', nhan: ['Ai?', 'thế nào?'], ds: ['Mẹ em|dịu dàng.', 'Bà em|hiền hậu.', 'Cô giáo|ân cần.', 'Chị em|chăm chỉ.'] },
  dien: [
    { cau: 'Ngày 8 tháng 3 là Ngày Quốc tế ___ nữ.', dung: 'Phụ', sai: ['Thiếu', 'Bạn'] },
    { cau: 'Mẹ em làm việc rất ___ vả.', dung: 'vất', sai: ['vui', 'vội'] },
    { cau: 'Mẹ lúc nào cũng ___ dàng với em.', dung: 'dịu', sai: ['vội', 'gọn'] },
    { cau: 'Bố mua bó ___, em làm tấm thiệp.', dung: 'hoa', sai: ['rau', 'củi'] },
    { cau: 'Em giúp việc ___ để mẹ nghỉ ngơi.', dung: 'nhà', sai: ['trường', 'chợ'] }
  ],
  to: ['phụ nữ', 'mẹ hiền', 'tặng hoa'],
  noi: ['Kể về bà hoặc mẹ của em.', 'Ngày 8 tháng 3, em sẽ tặng gì?', 'Em giúp mẹ những việc gì?'],
  viet: ['Ngày 8 tháng 3 là', 'Mẹ em', 'Em tặng mẹ', 'Em giúp mẹ']
};
docSetup();
