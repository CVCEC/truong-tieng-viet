/* Bài 111 · Ngày của Mẹ — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: ngày cảm ơn Mẹ; Mẹ nấu ăn, chăm khi ốm, dạy điều hay, kể chuyện, bao dung; Mẹ yêu bé 365 ngày;
   con vẽ tranh, ôm Mẹ nói “Con yêu Mẹ nhiều lắm!”, cất đồ chơi, xếp dép, lấy nước, hát tặng Mẹ.
   Thêm: Ngày của Mẹ là Chủ nhật thứ hai của tháng Năm. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Mẹ yêu con cả 365 ngày, con ngoan để Mẹ vui.',
  khoi: [{ tu: 'mẹ ôm bé' }, { tu: 'mẹ hôn bé' }, { tu: 'yêu mẹ' }, { tu: 'vẽ tranh' }, { tu: 'hoa hồng' }],
  tuMoi: [['tôn vinh', 'khen ngợi, đề cao'], ['bao la', 'rộng lớn vô cùng'], ['bao dung', 'rộng lòng tha thứ'], ['dinh dưỡng', 'chất bổ nuôi cơ thể'],
    ['cổ tích', 'chuyện kể từ ngày xưa'], ['thì thầm', 'nói rất nhỏ, nhẹ'], ['ấm áp', 'ấm, dễ chịu'], ['ngọt ngào', 'dịu dàng, đáng yêu']],
  tuKho: ['tôn vinh', 'bao la', 'bao dung', 'dinh dưỡng', 'cổ tích', 'thì thầm'],
  doan: [
    { text: 'Ngày của Mẹ là Chủ nhật thứ hai của tháng Năm. Đây là ngày tôn vinh sự vất vả và tình yêu bao la của Mẹ. Các bé gửi tới Mẹ lời cảm ơn và cái ôm ấm áp.',
      hoi: [{ q: 'Ngày của Mẹ là ngày nào?', dung: 'Chủ nhật thứ hai của tháng Năm.', sai: ['Ngày 25 tháng 12.', 'Ngày 1 tháng 1.'] },
            { q: 'Các bé gửi tới Mẹ điều gì?', dung: 'Lời cảm ơn và cái ôm ấm áp.', sai: ['Lời chê bai.', 'Không gửi gì.'] }] },
    { text: 'Mẹ nấu cho bé những bữa ăn đủ dinh dưỡng. Khi bé ốm, Mẹ thức đêm lo lắng. Mỗi tối, Mẹ kể chuyện cổ tích đưa bé vào giấc mơ đẹp. Bé mắc lỗi, Mẹ bao dung chỉ dạy nhẹ nhàng.',
      hoi: [{ q: 'Khi bé ốm, Mẹ làm gì?', dung: 'Thức đêm lo lắng.', sai: ['Đi ngủ sớm.', 'Đi chơi xa.'] },
            { q: 'Mỗi tối, Mẹ làm gì?', dung: 'Kể chuyện cổ tích.', sai: ['Đi chợ.', 'Quét nhà.'] }] },
    { text: 'Ngày của Mẹ, bé vẽ tặng Mẹ bức tranh gia đình. Bé cất đồ chơi, xếp dép, lấy nước cho Mẹ. Rồi bé ôm Mẹ thật chặt và thì thầm lời ngọt ngào: “Con yêu Mẹ nhiều lắm!”.',
      hoi: [{ q: 'Bé vẽ tặng Mẹ tranh gì?', dung: 'Tranh gia đình.', sai: ['Tranh con hổ.', 'Tranh ô tô.'] },
            { q: 'Bé thì thầm với Mẹ điều gì?', dung: '“Con yêu Mẹ nhiều lắm!”', sai: ['“Con đói quá!”', '“Con muốn đi chơi!”'] }] }
  ],
  hieu: [
    { q: 'Mẹ yêu bé bao nhiêu ngày trong năm?', dung: 'Cả 365 ngày.', sai: ['Chỉ một ngày.', 'Chỉ ngày Tết.'] },
    { q: '“Bao dung” nghĩa là gì?', dung: 'Rộng lòng tha thứ.', sai: ['Hay giận dỗi.', 'Không quan tâm.'] },
    { q: 'Ngoài Ngày của Mẹ, bé nên làm gì?', dung: 'Ngày nào cũng ngoan để Mẹ vui.', sai: ['Chỉ ngoan một ngày.', 'Đòi Mẹ mua quà.'] }
  ],
  thuTu: ['Bé vẽ tặng Mẹ bức tranh.', 'Bé cất đồ chơi gọn gàng.', 'Bé lấy nước cho Mẹ.', 'Bé ôm Mẹ và nói “Con yêu Mẹ”.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Mẹ|kể|chuyện cổ tích.', 'Bé|vẽ|tranh tặng Mẹ.', 'Bé|xếp|dép gọn gàng.', 'Bé|lấy|nước cho Mẹ.'] },
  dien: [
    { cau: 'Ngày của Mẹ là Chủ nhật thứ hai của tháng ___.', dung: 'Năm', sai: ['Sáu', 'Tám'] },
    { cau: 'Mẹ nấu những bữa ăn đủ dinh ___.', dung: 'dưỡng', sai: ['dài', 'đường'] },
    { cau: 'Mỗi tối, Mẹ kể chuyện cổ ___.', dung: 'tích', sai: ['xưa', 'kính'] },
    { cau: 'Bé mắc lỗi, Mẹ bao ___ chỉ dạy nhẹ nhàng.', dung: 'dung', sai: ['la', 'nhiêu'] },
    { cau: 'Con yêu Mẹ ___ lắm!', dung: 'nhiều', sai: ['ít', 'xa'] }
  ],
  to: ['yêu mẹ', 'mẹ hiền', 'bao dung'],
  noi: ['Kể về mẹ của em.', 'Mẹ thường làm gì cho em?', 'Em sẽ tặng gì cho Mẹ vào Ngày của Mẹ?'],
  viet: ['Mẹ của em', 'Mỗi ngày, mẹ', 'Em sẽ tặng mẹ', 'Con yêu mẹ vì']
};
docSetup();
