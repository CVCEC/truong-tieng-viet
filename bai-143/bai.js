/* Bài 143 · Ôn phát âm (phần 2) — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn bài ôn phần dễ lẫn: dấu hỏi / dấu ngã, vần an / ang, vần at / ac.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Nghe kĩ, đọc chậm, viết đúng dấu và đúng vần.',
  khoi: [{ tu: 'bàn ghế' }, { tu: 'cái bảng' }, { tu: 'bãi cát' }, { tu: 'củ lạc' }, { tu: 'con ngựa', do: 'Bốn chân thon thả / Bờm dài tung bay / Phi nhanh như gió / Lộc cộc trên đường' }],
  tuMoi: [['dấu hỏi', 'dấu thanh hình móc câu ở trên chữ'], ['dấu ngã', 'dấu thanh hình làn sóng ở trên chữ'], ['vần', 'phần sau âm đầu của một tiếng'], ['âm cuối', 'âm đứng cuối vần'],
    ['giọng', 'tiếng nói của mỗi người'], ['lên giọng', 'đọc cao lên'], ['kéo dài', 'đọc dài ra'], ['đọc chậm', 'đọc thong thả, không vội']],
  tuKho: ['dấu hỏi', 'dấu ngã', 'âm cuối', 'lên giọng', 'kéo dài', 'đọc chậm'],
  doan: [
    { text: 'Dấu hỏi và dấu ngã rất dễ lẫn. Đọc dấu ngã, em lên giọng và kéo dài: bãi cát, ngã ba. Đọc dấu hỏi, em đọc gãy xuống rồi lên: cái bảng, củ lạc.',
      hoi: [{ q: 'Đọc dấu ngã, em làm gì?', dung: 'Lên giọng và kéo dài.', sai: ['Đọc thật nhỏ.', 'Không đọc.'] },
            { q: 'Từ nào có dấu ngã?', dung: 'Bãi cát.', sai: ['Cái bảng.', 'Củ lạc.'] }] },
    { text: 'Vần an và vần ang cũng dễ lẫn. Bàn ghế có vần an. Cái bảng có vần ang. Chú bé ngoan ngoãn lau bàn, lau bảng.',
      hoi: [{ q: 'Bàn có vần gì?', dung: 'Vần an.', sai: ['Vần ang.', 'Vần anh.'] },
            { q: 'Chú bé lau gì?', dung: 'Lau bàn, lau bảng.', sai: ['Lau xe.', 'Lau cửa sổ.'] }] },
    { text: 'Vần at có âm cuối t, vần ac có âm cuối c. Bãi cát có vần at. Củ lạc có vần ac. Em đọc chậm, nghe kĩ âm cuối rồi mới viết.',
      hoi: [{ q: 'Vần at có âm cuối gì?', dung: 'Âm t.', sai: ['Âm c.', 'Âm n.'] },
            { q: 'Lạc có vần gì?', dung: 'Vần ac.', sai: ['Vần at.', 'Vần ach.'] }] }
  ],
  hieu: [
    { q: 'Tiếng nào có dấu hỏi?', dung: 'bảng', sai: ['bãi', 'ngã'] },
    { q: 'Tiếng nào có vần ang?', dung: 'bảng', sai: ['bàn', 'ngoan'] },
    { q: 'Tiếng nào có vần at?', dung: 'cát', sai: ['lạc', 'bác'] }
  ],
  thuTu: ['Ôn dấu hỏi và dấu ngã.', 'Ôn vần an và vần ang.', 'Ôn vần at và vần ac.', 'Đọc chậm rồi mới viết.'],
  cau: { mau: 'Đọc câu có vần dễ lẫn', ds: ['Chú bé|lau|bàn.', 'Chú bé|lau|bảng.', 'Em|chơi|ở bãi cát.', 'Bà|rang|củ lạc.'] },
  dien: [
    { cau: 'Em chơi ở ___ cát.', dung: 'bãi', sai: ['bải', 'bài'] },
    { cau: 'Cô viết lên cái ___.', dung: 'bảng', sai: ['bản', 'bãng'] },
    { cau: 'Em lau ___ ghế.', dung: 'bàn', sai: ['bàng', 'bạn'] },
    { cau: 'Bà rang củ ___.', dung: 'lạc', sai: ['lạt', 'lặc'] },
    { cau: 'Nhà bà ở ___ ba.', dung: 'ngã', sai: ['ngả', 'nga'] }
  ],
  to: ['bãi cát', 'cái bảng', 'củ lạc'],
  noi: ['Đọc thật chậm: bãi cát, cái bảng, củ lạc.', 'Tìm ba tiếng có dấu ngã.', 'Tìm tiếng có vần an và vần ang.'],
  viet: ['Tiếng có dấu hỏi:', 'Tiếng có dấu ngã:', 'Tiếng có vần an:', 'Tiếng có vần ang:']
};
docSetup();
