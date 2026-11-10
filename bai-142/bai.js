/* Bài 142 · Ôn phát âm (phần 1) — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn bài ôn các âm đầu dễ lẫn: ch/tr, s/x, d/gi/r. Đoạn đọc có nhiều tiếng chứa các âm này.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Đọc rõ từng âm, viết đúng từng chữ.',
  khoi: [{ tu: 'trà đá' }, { tu: 'chè' }, { tu: 'sư tử' }, { tu: 'xe lu' }, { tu: 'gió to' }],
  tuMoi: [['phát âm', 'cách nói ra âm, tiếng'], ['âm đầu', 'âm đứng đầu một tiếng'], ['dễ lẫn', 'hay nhầm cái này với cái kia'], ['tròn môi', 'môi chu tròn khi nói'],
    ['uốn lưỡi', 'cong lưỡi lên khi nói'], ['rõ ràng', 'nghe dễ, không lẫn'], ['luyện tập', 'làm đi làm lại cho giỏi'], ['chính tả', 'viết đúng chữ']],
  tuKho: ['phát âm', 'âm đầu', 'dễ lẫn', 'uốn lưỡi', 'rõ ràng', 'chính tả'],
  doan: [
    { text: 'Hôm nay, cả lớp luyện phát âm. Cô nói: “Có những âm đầu dễ lẫn, như ch và tr”. Chị Trang trồng cây chè. Chú Trí chở trà ra chợ.',
      hoi: [{ q: 'Cả lớp luyện gì?', dung: 'Luyện phát âm.', sai: ['Luyện vẽ.', 'Luyện hát.'] },
            { q: 'Chị Trang trồng cây gì?', dung: 'Cây chè.', sai: ['Cây cam.', 'Cây chuối.'] }] },
    { text: 'Tiếp theo là s và x. Âm s phải uốn lưỡi, còn khi đọc âm u, ô, o thì em tròn môi. Sư tử đi sau xe lu. Bà sắp xếp sách vở cho xinh xắn.',
      hoi: [{ q: 'Âm nào phải uốn lưỡi?', dung: 'Âm s.', sai: ['Âm x.', 'Âm m.'] },
            { q: 'Sư tử đi sau gì?', dung: 'Xe lu.', sai: ['Xe đạp.', 'Con voi.'] }] },
    { text: 'Cuối cùng là d, gi và r. Gió thổi rì rào. Dì Dung rửa rau. Em đọc thật rõ ràng rồi viết đúng chính tả. Luyện tập mỗi ngày, em sẽ giỏi.',
      hoi: [{ q: 'Gió thổi thế nào?', dung: 'Rì rào.', sai: ['Ầm ầm.', 'Lộp độp.'] },
            { q: 'Dì Dung làm gì?', dung: 'Rửa rau.', sai: ['Rửa xe.', 'Rán cá.'] }] }
  ],
  hieu: [
    { q: 'Tiếng nào có âm đầu tr?', dung: 'trồng', sai: ['chè', 'chợ'] },
    { q: 'Tiếng nào có âm đầu x?', dung: 'xe', sai: ['sư', 'sách'] },
    { q: 'Tiếng nào có âm đầu gi?', dung: 'gió', sai: ['dì', 'rau'] }
  ],
  thuTu: ['Luyện ch và tr.', 'Luyện s và x.', 'Luyện d, gi và r.', 'Viết đúng chính tả.'],
  cau: { mau: 'Đọc câu có âm dễ lẫn', ds: ['Chị Trang|trồng|chè.', 'Sư tử|đi sau|xe lu.', 'Gió|thổi|rì rào.', 'Dì Dung|rửa|rau.'] },
  dien: [
    { cau: 'Chị Trang ___ cây chè.', dung: 'trồng', sai: ['chồng', 'xồng'] },
    { cau: 'Chú Trí chở ___ ra chợ.', dung: 'trà', sai: ['chà', 'xà'] },
    { cau: '___ tử đi sau xe lu.', dung: 'Sư', sai: ['Xư', 'Thư'] },
    { cau: '___ thổi rì rào.', dung: 'Gió', sai: ['Dó', 'Ró'] },
    { cau: 'Dì Dung ___ rau.', dung: 'rửa', sai: ['dửa', 'giửa'] }
  ],
  to: ['trồng chè', 'sư tử', 'gió'],
  noi: ['Đọc nhanh: Chị Trang trồng chè, chú Trí chở trà.', 'Tìm ba tiếng có âm s, ba tiếng có âm x.', 'Tìm tiếng có âm gi.'],
  viet: ['Tiếng có tr:', 'Tiếng có ch:', 'Tiếng có s:', 'Tiếng có x:']
};
docSetup();
