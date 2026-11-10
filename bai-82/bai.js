/* Bài 82 · Ngày Nhà giáo Việt Nam – Tri ân thầy cô — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: “Cô giáo như mẹ hiền”, tri ân thầy cô ngày 20-11. Phần chữ do Trâu Con soạn ngắn gọn theo chủ đề.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Em kính trọng và biết ơn thầy cô.',
  khoi: [{ tu: 'cô giáo' }, { tu: 'lớp học' }, { tu: 'sách vở' }, { tu: 'bút chì' }, { tu: 'thiệp mời', tranh: 'thiệp mời', cau: 'Em làm thiệp tặng cô.' }],
  tuMoi: [['mẹ hiền', 'người mẹ dịu dàng, thương con'], ['kính trọng', 'quý và lễ phép với người trên'], ['ân cần', 'quan tâm, chu đáo'], ['kiên nhẫn', 'chờ đợi, không vội, không nóng'],
    ['nét chữ', 'cách viết chữ của mỗi người'], ['lễ phép', 'biết chào hỏi, dạ thưa'], ['chăm chỉ', 'siêng năng học và làm'], ['lời hay', 'lời nói tốt, đẹp']],
  tuKho: ['mẹ hiền', 'kính trọng', 'ân cần', 'kiên nhẫn', 'nét chữ', 'lễ phép'],
  doan: [
    { text: 'Ở trường, cô giáo như mẹ hiền. Cô ân cần chỉ cho em từng nét chữ. Khi em viết chưa đẹp, cô kiên nhẫn cầm tay em viết lại.',
      hoi: [{ q: 'Ở trường, cô giáo như ai?', dung: 'Như mẹ hiền.', sai: ['Như bạn nhỏ.', 'Như người lạ.'] },
            { q: 'Khi em viết chưa đẹp, cô làm gì?', dung: 'Kiên nhẫn cầm tay em viết lại.', sai: ['Mắng em.', 'Bỏ đi.'] }] },
    { text: 'Thầy cô dạy em đọc, viết và làm toán. Thầy cô còn dạy em lễ phép, biết chào hỏi và nói lời hay.',
      hoi: [{ q: 'Thầy cô dạy em những gì?', dung: 'Đọc, viết và làm toán.', sai: ['Lái xe.', 'Nấu ăn.'] },
            { q: 'Thầy cô còn dạy em điều gì?', dung: 'Lễ phép, chào hỏi, nói lời hay.', sai: ['Nói to trong lớp.', 'Chạy nhảy trong lớp.'] }] },
    { text: 'Ngày 20 tháng 11, em làm thiệp tặng cô. Em kính trọng thầy cô. Em hứa chăm chỉ học để thầy cô vui lòng.',
      hoi: [{ q: 'Ngày 20 tháng 11, em làm gì?', dung: 'Làm thiệp tặng cô.', sai: ['Đi chợ.', 'Đi ngủ sớm.'] },
            { q: 'Em hứa điều gì?', dung: 'Chăm chỉ học để thầy cô vui lòng.', sai: ['Nghỉ học.', 'Chơi cả ngày.'] }] }
  ],
  hieu: [
    { q: 'Vì sao nói cô giáo như mẹ hiền?', dung: 'Vì cô ân cần, thương học sinh.', sai: ['Vì cô ở nhà em.', 'Vì cô nấu cơm cho em.'] },
    { q: 'Em thể hiện kính trọng thầy cô thế nào?', dung: 'Chào hỏi lễ phép, chăm học.', sai: ['Nói chuyện riêng.', 'Quên làm bài.'] },
    { q: 'Bài đọc muốn nói điều gì?', dung: 'Em biết ơn thầy cô đã dạy dỗ.', sai: ['Đi học thật mệt.', 'Em không thích đi học.'] }
  ],
  thuTu: ['Cô ân cần chỉ cho em từng nét chữ.', 'Thầy cô dạy em đọc, viết và làm toán.', 'Ngày 20 tháng 11, em làm thiệp tặng cô.', 'Em hứa chăm chỉ học.'],
  cau: { mau: 'Ai thế nào?', nhan: ['Ai?', 'thế nào?'], ds: ['Cô giáo|ân cần.', 'Thầy giáo|kiên nhẫn.', 'Em|lễ phép.', 'Các bạn|chăm chỉ.'] },
  dien: [
    { cau: 'Ở trường, cô giáo như mẹ ___.', dung: 'hiền', sai: ['xa', 'mới'] },
    { cau: 'Cô ân cần chỉ cho em từng nét ___.', dung: 'chữ', sai: ['vẽ', 'mặt'] },
    { cau: 'Thầy cô dạy em biết chào ___.', dung: 'hỏi', sai: ['bán', 'chạy'] },
    { cau: 'Em làm ___ tặng cô.', dung: 'thiệp', sai: ['nồi', 'ghế'] },
    { cau: 'Em ___ trọng thầy cô.', dung: 'kính', sai: ['quên', 'xem'] }
  ],
  to: ['cô giáo', 'mẹ hiền', 'kính trọng'],
  noi: ['Kể về cô giáo hoặc thầy giáo của em.', 'Thầy cô đã dạy em điều gì hay?', 'Em sẽ viết gì vào thiệp tặng cô?'],
  viet: ['Cô giáo của em', 'Cô dạy em', 'Em làm thiệp', 'Em hứa']
};
docSetup();
