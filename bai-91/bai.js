/* Bài 91 · Chào hỏi — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; nội dung lấy từ phần chào hỏi ở slide Bài 92 (chào trực tiếp, chào bằng câu hỏi, lời chúc, lời mời;
   bài hát “Chim vành khuyên” của Hoàng Vân). Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Lời chào cao hơn mâm cỗ.',
  khoi: [{ tu: 'chào cô' }, { tu: 'bắt tay' }, { tu: 'tươi cười' }, { tu: 'chim khuyên' }, { tu: 'cụ già' }],
  tuMoi: [['chào hỏi', 'nói lời chào khi gặp nhau'], ['lễ phép', 'biết chào hỏi, dạ thưa'], ['khoanh tay', 'hai tay đặt trước ngực khi chào'], ['vành khuyên', 'loài chim nhỏ, lông xanh, mắt có vòng trắng'],
    ['ngoan ngoãn', 'biết nghe lời, cư xử đúng'], ['gọi dạ', 'khi được gọi thì thưa “dạ”'], ['bảo vâng', 'được bảo thì thưa “vâng”'], ['tạm biệt', 'lời chào khi chia tay']],
  tuKho: ['chào hỏi', 'lễ phép', 'khoanh tay', 'vành khuyên', 'ngoan ngoãn', 'tạm biệt'],
  doan: [
    { text: 'Sáng nào trước khi đi học, em cũng khoanh tay chào ông bà. Em chào bố mẹ rồi mới ra cửa. Đến lớp, em chào cô giáo và các bạn.',
      hoi: [{ q: 'Trước khi đi học, em chào ai?', dung: 'Chào ông bà, bố mẹ.', sai: ['Không chào ai.', 'Chỉ chào con mèo.'] },
            { q: 'Đến lớp, em chào ai?', dung: 'Chào cô giáo và các bạn.', sai: ['Chào chú bán kem.', 'Chào cái bàn.'] }] },
    { text: 'Có nhiều cách chào hỏi. Em nói: “Cháu chào bác ạ!”. Em hỏi thăm: “Bác đi chợ về ạ?”. Ngày Tết, em chúc: “Chúc mừng năm mới!”.',
      hoi: [{ q: 'Khi chào người lớn, em nói thế nào?', dung: '“Cháu chào bác ạ!”', sai: ['“Ê, bác!”', '“Chào nha!”'] },
            { q: 'Ngày Tết, em chào bằng lời gì?', dung: '“Chúc mừng năm mới!”', sai: ['“Tạm biệt!”', '“Chúc ngủ ngon!”'] }] },
    { text: 'Trong bài hát, chú chim vành khuyên ngoan ngoãn, gọi dạ bảo vâng. Gặp bác chào mào, chim chào bác. Gặp cô sơn ca, chim chào cô.',
      hoi: [{ q: 'Chim vành khuyên là chú chim thế nào?', dung: 'Ngoan ngoãn, lễ phép.', sai: ['Lười biếng.', 'Hay cãi nhau.'] },
            { q: 'Gặp cô sơn ca, chim vành khuyên làm gì?', dung: 'Chào cô.', sai: ['Bay đi chỗ khác.', 'Hót thật to.'] }] }
  ],
  hieu: [
    { q: 'Khi về nhà, em nói gì?', dung: '“Con chào bố mẹ, con đi học về ạ!”', sai: ['Đi thẳng vào phòng.', '“Đói quá!”'] },
    { q: '“Lời chào cao hơn mâm cỗ” nghĩa là gì?', dung: 'Lời chào rất quý.', sai: ['Mâm cỗ rất thấp.', 'Chào xong mới được ăn.'] },
    { q: 'Khi chia tay bạn, em nói gì?', dung: '“Tạm biệt bạn!”', sai: ['“Chúc mừng năm mới!”', '“Cháu chào bác ạ!”'] }
  ],
  thuTu: ['Em khoanh tay chào ông bà.', 'Em chào bố mẹ rồi ra cửa.', 'Đến lớp, em chào cô giáo.', 'Tan học, em chào tạm biệt các bạn.'],
  cau: { mau: 'Lời chào', ds: ['Cháu|chào|ông|ạ!', 'Con|chào|mẹ|ạ!', 'Em|chào|cô|ạ!', 'Tạm biệt|các|bạn!'] },
  dien: [
    { cau: 'Em ___ tay chào ông bà.', dung: 'khoanh', sai: ['vẫy', 'giấu'] },
    { cau: 'Đến lớp, em ___ cô giáo và các bạn.', dung: 'chào', sai: ['gọi', 'trêu'] },
    { cau: 'Cháu chào bác ___!', dung: 'ạ', sai: ['à', 'ơ'] },
    { cau: 'Chim vành khuyên gọi dạ, bảo ___.', dung: 'vâng', sai: ['không', 'thôi'] },
    { cau: 'Lời chào cao hơn mâm ___.', dung: 'cỗ', sai: ['cơm', 'cao'] }
  ],
  to: ['chào', 'lễ phép', 'vâng ạ'],
  noi: ['Em chào ông bà thế nào?', 'Hát bài “Chim vành khuyên” cùng các bạn.', 'Gặp người hàng xóm, em sẽ nói gì?'],
  viet: ['Sáng nay, em chào', 'Đến lớp, em', 'Gặp bác hàng xóm, em nói', 'Em thích chào hỏi vì']
};
docSetup();
