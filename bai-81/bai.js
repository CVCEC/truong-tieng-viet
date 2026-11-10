/* Bài 81 · Ngày Nhà giáo Việt Nam – Tri ân cha mẹ — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: câu đố 20-11 (dành cho thầy cô, học sinh tặng hoa làm thiệp, tri ân cả bố mẹ), “Cha mẹ là người thầy đầu tiên”.
   Slide rất nặng, phần chữ còn lại do Trâu Con soạn ngắn gọn theo chủ đề. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Cha mẹ là người thầy đầu tiên của em.',
  khoi: [{ tu: 'cô giáo' }, { tu: 'hoa hồng' }, { tu: 'vẽ tranh' }, { tu: 'mẹ ôm bé' }, { tu: 'bố đi làm' }],
  tuMoi: [['tri ân', 'nhớ ơn và cảm ơn người đã giúp mình'], ['nhà giáo', 'thầy giáo, cô giáo'], ['người thầy', 'người dạy mình điều hay'], ['đầu tiên', 'trước hết mọi người, mọi việc'],
    ['tấm thiệp', 'tờ giấy đẹp để viết lời chúc'], ['biết ơn', 'nhớ công người khác đã giúp mình'], ['dạy dỗ', 'chỉ bảo cho con làm điều hay'], ['vâng lời', 'nghe theo lời người lớn dạy']],
  tuKho: ['tri ân', 'nhà giáo', 'tấm thiệp', 'dạy dỗ', 'vâng lời', 'biết ơn'],
  doan: [
    { text: 'Ngày 20 tháng 11 là Ngày Nhà giáo Việt Nam. Đó là ngày học sinh tri ân thầy cô. Các bạn tặng hoa, làm tấm thiệp và hát tặng thầy cô.',
      hoi: [{ q: 'Ngày 20 tháng 11 là ngày gì?', dung: 'Ngày Nhà giáo Việt Nam.', sai: ['Ngày Tết.', 'Ngày Trung thu.'] },
            { q: 'Học sinh làm gì vào ngày này?', dung: 'Tặng hoa, làm tấm thiệp, hát tặng thầy cô.', sai: ['Ở nhà ngủ cả ngày.', 'Đi biển chơi.'] }] },
    { text: 'Ở nhà, cha mẹ là người thầy đầu tiên của em. Mẹ dạy em nói những tiếng đầu tiên. Bố dạy em đi những bước đầu tiên.',
      hoi: [{ q: 'Ai là người thầy đầu tiên của em?', dung: 'Cha mẹ.', sai: ['Bạn bè.', 'Chú bán hàng.'] },
            { q: 'Mẹ dạy em điều gì?', dung: 'Nói những tiếng đầu tiên.', sai: ['Lái xe.', 'Nấu cơm.'] }] },
    { text: 'Vì vậy, ngày 20 tháng 11 em cũng tri ân cha mẹ. Em biết ơn cha mẹ, nói lời cảm ơn, vâng lời cha mẹ dạy dỗ và chăm ngoan mỗi ngày.',
      hoi: [{ q: 'Ngày 20 tháng 11, em còn tri ân ai?', dung: 'Cha mẹ.', sai: ['Con mèo.', 'Người lạ.'] },
            { q: 'Em làm gì để tri ân cha mẹ?', dung: 'Nói lời cảm ơn, vâng lời, chăm ngoan.', sai: ['Đòi mua đồ chơi.', 'Cãi lời cha mẹ.'] }] }
  ],
  hieu: [
    { q: 'Ngày Nhà giáo Việt Nam là ngày nào?', dung: 'Ngày 20 tháng 11.', sai: ['Ngày 1 tháng 6.', 'Ngày 2 tháng 9.'] },
    { q: 'Vì sao cha mẹ là người thầy đầu tiên?', dung: 'Vì cha mẹ dạy em từ khi còn bé.', sai: ['Vì cha mẹ làm ở trường.', 'Vì cha mẹ cao hơn em.'] },
    { q: 'Bài đọc muốn nói điều gì?', dung: 'Em biết ơn thầy cô và cha mẹ.', sai: ['Em chỉ cần biết ơn bạn.', 'Em không cần nói cảm ơn.'] }
  ],
  thuTu: ['Ngày 20 tháng 11 là Ngày Nhà giáo Việt Nam.', 'Học sinh tặng hoa và làm thiệp tặng thầy cô.', 'Cha mẹ là người thầy đầu tiên của em.', 'Em cũng tri ân cha mẹ.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Em|tặng|hoa cho cô.', 'Em|làm|tấm thiệp.', 'Mẹ|dạy|em nói.', 'Bố|dạy|em đi.'] },
  dien: [
    { cau: 'Ngày 20 tháng 11 là Ngày ___ Việt Nam.', dung: 'Nhà giáo', sai: ['Gia đình', 'Thiếu nhi'] },
    { cau: 'Các bạn tặng hoa và làm tấm ___.', dung: 'thiệp', sai: ['bánh', 'ghế'] },
    { cau: 'Cha mẹ là người ___ đầu tiên của em.', dung: 'thầy', sai: ['bạn', 'khách'] },
    { cau: 'Em ___ lời cha mẹ dạy dỗ.', dung: 'vâng', sai: ['quên', 'bỏ'] },
    { cau: 'Em chăm ___ mỗi ngày.', dung: 'ngoan', sai: ['ngủ', 'khóc'] }
  ],
  to: ['tri ân', 'cha mẹ', 'thầy cô'],
  noi: ['Em sẽ nói gì để cảm ơn cô giáo?', 'Cha mẹ đã dạy em những điều gì?', 'Em sẽ làm gì tặng cha mẹ?'],
  viet: ['Ngày 20 tháng 11 là', 'Em tặng cô giáo', 'Cha mẹ dạy em', 'Em xin cảm ơn']
};
docSetup();
