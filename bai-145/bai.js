/* Bài 145 · Từ nối bổ sung ý — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn bài luyện câu với từ nối bổ sung ý: “và”, “cũng”, “còn”, “lại”, “không những … mà còn …”.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Dùng từ nối để câu văn thêm ý, thêm hay.',
  khoi: [{ tu: 'chú chó' }, { tu: 'con mèo' }, { tu: 'quả cam' }, { tu: 'quả chuối' }, { tu: 'bé học bài' }],
  tuMoi: [['từ nối', 'từ dùng để nối các ý với nhau'], ['bổ sung', 'thêm vào cho đủ'], ['và', 'từ nối hai người, hai vật, hai việc'], ['cũng', 'từ chỉ giống như vậy'],
    ['còn', 'từ nối để nói thêm việc khác'], ['không những', 'từ đi cùng “mà còn” để thêm ý'], ['mà còn', 'từ đi sau “không những” để thêm ý'], ['câu văn', 'câu được viết ra']],
  tuKho: ['từ nối', 'bổ sung', 'không những', 'mà còn', 'câu văn', 'cũng'],
  doan: [
    { text: 'Từ nối giúp bổ sung ý cho câu văn. Nhà em nuôi chó và mèo. Em thích ăn cam và chuối. Từ “và” nối hai con vật, hai loại quả.',
      hoi: [{ q: 'Nhà em nuôi con gì?', dung: 'Chó và mèo.', sai: ['Gà và vịt.', 'Cá và rùa.'] },
            { q: 'Từ nào nối hai loại quả?', dung: 'Từ “và”.', sai: ['Từ “nhưng”.', 'Từ “vì”.'] }] },
    { text: 'Bạn Lan thích vẽ. Em cũng thích vẽ. Em học tiếng Việt, em còn học vẽ. Từ “cũng” và từ “còn” giúp em nói thêm ý.',
      hoi: [{ q: 'Ai cũng thích vẽ?', dung: 'Em.', sai: ['Bố.', 'Con mèo.'] },
            { q: 'Ngoài tiếng Việt, em còn học gì?', dung: 'Học vẽ.', sai: ['Học lái xe.', 'Học nấu cơm.'] }] },
    { text: 'Bạn Nam không những học giỏi mà còn hát hay. Mẹ em không những nấu ăn ngon mà còn may áo đẹp. Dùng từ nối đúng, câu văn thêm hay.',
      hoi: [{ q: 'Bạn Nam thế nào?', dung: 'Không những học giỏi mà còn hát hay.', sai: ['Học kém, hát dở.', 'Chỉ biết ngủ.'] },
            { q: 'Mẹ em giỏi những việc gì?', dung: 'Nấu ăn ngon và may áo đẹp.', sai: ['Lái máy bay.', 'Đá bóng.'] }] }
  ],
  hieu: [
    { q: 'Câu nào dùng từ nối “và”?', dung: 'Em có bút và thước.', sai: ['Em có bút.', 'Thước của em.'] },
    { q: 'Điền từ: “Bố đọc báo, mẹ … đọc báo.”', dung: 'cũng', sai: ['và', 'mà còn'] },
    { q: 'Câu nào đúng?', dung: 'Bạn không những học giỏi mà còn ngoan.', sai: ['Bạn không những học giỏi.', 'Bạn mà còn không những ngoan.'] }
  ],
  thuTu: ['Bạn Nam', 'không những', 'học giỏi', 'mà còn hát hay.'],
  cau: { mau: 'không những … mà còn …', ds: ['Bạn Nam|không những học giỏi|mà còn hát hay.', 'Mẹ em|không những nấu ăn ngon|mà còn may áo đẹp.', 'Chú chó|không những khôn|mà còn trung thành.'] },
  dien: [
    { cau: 'Nhà em nuôi chó ___ mèo.', dung: 'và', sai: ['cũng', 'mà'] },
    { cau: 'Bạn Lan thích vẽ. Em ___ thích vẽ.', dung: 'cũng', sai: ['và', 'mà'] },
    { cau: 'Em học tiếng Việt, em ___ học vẽ.', dung: 'còn', sai: ['và', 'không'] },
    { cau: 'Bạn Nam không những học giỏi ___ hát hay.', dung: 'mà còn', sai: ['và cũng', 'nhưng'] },
    { cau: 'Từ ___ giúp bổ sung ý cho câu văn.', dung: 'nối', sai: ['mới', 'khó'] }
  ],
  to: ['từ nối', 'và', 'cũng'],
  noi: ['Đặt câu có từ “và”.', 'Đặt câu có từ “cũng”.', 'Đặt câu có “không những … mà còn …”.'],
  viet: ['Em thích', 'Bạn em cũng', 'Em học tiếng Việt, em còn', 'Mẹ em không những']
};
docSetup();
