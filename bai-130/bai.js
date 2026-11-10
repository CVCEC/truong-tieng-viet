/* Bài 130 · Ứng xử trong bữa ăn — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: mời trước khi ăn, người lớn cầm đũa trước, không nói khi nhai, không gõ bát đũa,
   gắp gọn, ăn hết phần, cảm ơn, giúp dọn. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Ăn uống lễ phép là biết kính trên nhường dưới.',
  khoi: [{ tu: 'mâm cơm' }, { tu: 'đũa' }, { tu: 'thìa' }, { tu: 'đĩa' }, { tu: 'ăn cơm' }],
  tuMoi: [['ứng xử', 'cách mình nói và làm với người khác'], ['mời cơm', 'lễ phép mời mọi người trước khi ăn'], ['nhai', 'dùng răng nghiền thức ăn'], ['gắp', 'dùng đũa lấy thức ăn'],
    ['nhồm nhoàm', 'ăn to miệng, phát ra tiếng'], ['khoanh tay', 'hai tay đặt trước ngực'], ['dọn mâm', 'cất bát đĩa sau bữa ăn'], ['lịch sự', 'đúng phép, đẹp lòng mọi người']],
  tuKho: ['ứng xử', 'mời cơm', 'nhai', 'gắp', 'nhồm nhoàm', 'lịch sự'],
  doan: [
    { text: 'Cả nhà ngồi quanh mâm cơm. Em khoanh tay mời cơm: “Con mời ông bà, mời bố mẹ xơi cơm ạ!”. Ông bà cầm đũa trước, em mới ăn sau.',
      hoi: [{ q: 'Em mời cơm thế nào?', dung: '“Con mời ông bà, mời bố mẹ xơi cơm ạ!”', sai: ['“Ăn đi!”', 'Không mời ai.'] },
            { q: 'Ai cầm đũa trước?', dung: 'Ông bà.', sai: ['Em.', 'Con mèo.'] }] },
    { text: 'Khi ăn, em ngồi ngay ngắn. Em gắp thức ăn gọn gàng, không bới tìm món ngon. Em nhai nhỏ nhẹ, không ăn nhồm nhoàm, không nói khi đang nhai.',
      hoi: [{ q: 'Em gắp thức ăn thế nào?', dung: 'Gọn gàng, không bới tìm.', sai: ['Bới tìm miếng ngon.', 'Gắp vương vãi.'] },
            { q: 'Khi đang nhai, em làm gì?', dung: 'Không nói chuyện.', sai: ['Nói thật to.', 'Hát vang.'] }] },
    { text: 'Em không gõ bát đũa và không vừa ăn vừa xem điện thoại. Ăn xong, em cảm ơn và giúp mẹ dọn mâm. Ai cũng khen em biết ứng xử lịch sự.',
      hoi: [{ q: 'Em không làm gì trong bữa ăn?', dung: 'Không gõ bát đũa, không xem điện thoại.', sai: ['Không mời ai.', 'Không ngồi.'] },
            { q: 'Ăn xong, em làm gì?', dung: 'Cảm ơn và giúp mẹ dọn mâm.', sai: ['Chạy đi chơi ngay.', 'Để bát ở đó.'] }] }
  ],
  hieu: [
    { q: 'Vì sao ông bà cầm đũa trước?', dung: 'Vì người lớn trước, người nhỏ sau.', sai: ['Vì ông bà đói nhất.', 'Vì em không thích ăn.'] },
    { q: 'Việc nào không lịch sự?', dung: 'Vừa ăn vừa xem điện thoại.', sai: ['Mời cơm.', 'Cảm ơn sau bữa ăn.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Ăn uống lễ phép, gọn gàng.', sai: ['Ăn thật nhanh.', 'Chỉ ăn món mình thích.'] }
  ],
  thuTu: ['Cả nhà ngồi quanh mâm cơm.', 'Em khoanh tay mời cơm.', 'Ông bà cầm đũa trước.', 'Ăn xong, em giúp mẹ dọn mâm.'],
  cau: { mau: 'Lời mời cơm', ds: ['Con mời|ông bà|xơi cơm ạ!', 'Con mời|bố mẹ|xơi cơm ạ!', 'Em mời|anh chị|ăn cơm ạ!', 'Cháu mời|bác|xơi cơm ạ!'] },
  dien: [
    { cau: 'Em khoanh tay ___ cơm.', dung: 'mời', sai: ['đòi', 'chê'] },
    { cau: 'Ông bà cầm ___ trước, em mới ăn sau.', dung: 'đũa', sai: ['dao', 'bút'] },
    { cau: 'Em ___ thức ăn gọn gàng.', dung: 'gắp', sai: ['ném', 'bới'] },
    { cau: 'Em không nói khi đang ___.', dung: 'nhai', sai: ['ngồi', 'mời'] },
    { cau: 'Ăn xong, em giúp mẹ dọn ___.', dung: 'mâm', sai: ['vườn', 'sân'] }
  ],
  to: ['mời cơm', 'lịch sự', 'đôi đũa'],
  noi: ['Em mời cơm mọi người thế nào?', 'Trong bữa ăn, em không nên làm gì?', 'Ăn xong, em giúp gì?'],
  viet: ['Trước khi ăn, em', 'Khi ăn, em', 'Em không', 'Ăn xong, em']
};
docSetup();
