/* Bài 140 · Bị và được — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng (tên slide: “Bị/Được”); Trâu Con soạn bài luyện từ: “được” dùng cho điều tốt, vui; “bị” dùng cho điều không vui.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Việc vui thì nói “được”, việc không vui thì nói “bị”.',
  khoi: [{ tu: 'được quà', tranh: 'quà', cau: 'Em được quà.' }, { tu: 'bị ong đốt', tranh: 'con ong', cau: 'Bạn bị ong đốt.' }, { tu: 'được khen', tranh: 'cô giáo', cau: 'Em được cô khen.' },
    { tu: 'bị ướt', tranh: 'cơn mưa', cau: 'Em bị ướt mưa.' }, { tu: 'được lì xì', tranh: 'lì xì', cau: 'Em được lì xì.' }],
  tuMoi: [['được', 'dùng khi gặp điều tốt, điều vui'], ['bị', 'dùng khi gặp điều không vui'], ['điểm mười', 'điểm cao nhất'], ['cảm cúm', 'bệnh sổ mũi, ho, sốt nhẹ'],
    ['tuyên dương', 'khen trước mọi người'], ['nhắc nhở', 'nói cho nhớ để sửa'], ['vui sướng', 'rất vui'], ['rút kinh nghiệm', 'nhớ lỗi để lần sau làm tốt hơn']],
  tuKho: ['được', 'bị', 'điểm mười', 'cảm cúm', 'tuyên dương', 'rút kinh nghiệm'],
  doan: [
    { text: 'Hôm nay, em được điểm mười môn tiếng Việt. Em được cô tuyên dương trước lớp. Em vui sướng chạy về khoe mẹ.',
      hoi: [{ q: 'Hôm nay em được gì?', dung: 'Được điểm mười.', sai: ['Bị ngã.', 'Bị ốm.'] },
            { q: 'Ai tuyên dương em?', dung: 'Cô giáo.', sai: ['Bạn hàng xóm.', 'Người lạ.'] }] },
    { text: 'Hôm qua, bạn Lan đi mưa không mặc áo mưa. Bạn bị ướt và bị cảm cúm. Lan phải nghỉ học một ngày.',
      hoi: [{ q: 'Bạn Lan bị làm sao?', dung: 'Bị ướt và bị cảm cúm.', sai: ['Được quà.', 'Được khen.'] },
            { q: 'Vì sao Lan bị cảm cúm?', dung: 'Vì đi mưa không mặc áo mưa.', sai: ['Vì ăn nhiều rau.', 'Vì ngủ sớm.'] }] },
    { text: 'Điều tốt, điều vui thì ta nói “được”. Điều không vui thì ta nói “bị”. Khi bị nhắc nhở, em không buồn mà rút kinh nghiệm để lần sau được khen.',
      hoi: [{ q: 'Điều vui thì ta nói từ gì?', dung: '“Được”.', sai: ['“Bị”.', '“Không”.'] },
            { q: 'Khi bị nhắc nhở, em làm gì?', dung: 'Rút kinh nghiệm.', sai: ['Giận dỗi.', 'Khóc mãi.'] }] }
  ],
  hieu: [
    { q: 'Câu nào dùng đúng?', dung: 'Em được bà cho quà.', sai: ['Em bị bà cho quà.', 'Em được ngã đau.'] },
    { q: 'Câu nào dùng đúng?', dung: 'Em bị muỗi đốt.', sai: ['Em được muỗi đốt.', 'Em bị cô khen.'] },
    { q: 'Khi bị nhắc nhở, em nên nghĩ thế nào?', dung: 'Sửa lỗi để lần sau tốt hơn.', sai: ['Không cần sửa.', 'Trách người nhắc.'] }
  ],
  thuTu: ['Lan đi mưa không mặc áo mưa.', 'Lan bị ướt.', 'Lan bị cảm cúm.', 'Lan phải nghỉ học một ngày.'],
  cau: { mau: 'Ai bị / được gì?', nhan: ['Ai?', 'bị / được', 'gì?'], ds: ['Em|được|điểm mười.', 'Bạn Nam|bị|ngã.', 'Em bé|được|mẹ bế.', 'Cây hoa|bị|héo.'] },
  dien: [
    { cau: 'Hôm nay, em ___ điểm mười.', dung: 'được', sai: ['bị', 'không'] },
    { cau: 'Bạn Lan ___ cảm cúm.', dung: 'bị', sai: ['được', 'đã được'] },
    { cau: 'Em ___ cô tuyên dương trước lớp.', dung: 'được', sai: ['bị', 'chưa'] },
    { cau: 'Đi mưa không mặc áo mưa thì ___ ướt.', dung: 'bị', sai: ['được', 'cho'] },
    { cau: 'Em rút ___ để lần sau được khen.', dung: 'kinh nghiệm', sai: ['tiền', 'quà'] }
  ],
  to: ['được', 'bị', 'được khen'],
  noi: ['Kể một điều em “được” hôm nay.', 'Kể một lần em “bị” điều không vui.', 'Đặt câu với “được” và “bị”.'],
  viet: ['Hôm nay, em được', 'Có lần, em bị', 'Em được khen vì', 'Lần sau, em sẽ']
};
docSetup();
