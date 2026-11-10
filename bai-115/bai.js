/* Bài 115 · Ngày của Cha (phần 2) — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: Ngày của Cha (Chủ nhật tuần 3 tháng 6), cha hi sinh thầm lặng, là trụ cột gia đình; kể về bố, làm thiệp tặng bố.
   Bài thơ “Quà của bố” đã dùng ở Bài 85, nên bài này Trâu Con soạn đoạn đọc về một ngày bên bố.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Bố hi sinh thầm lặng, em biết ơn và yêu bố.',
  khoi: [{ tu: 'bố đi làm' }, { tu: 'xe đạp', tranh: 'Bố dạy Hải tập đạp xe.', cau: 'Bố dạy em tập đạp xe.' }, { tu: 'bố bế bé' }, { tu: 'cái kéo', cau: 'Em cắt giấy làm thiệp.' }, { tu: 'thiệp mời', cau: 'Em làm thiệp tặng bố.' }],
  tuMoi: [['trụ cột', 'người lo cho cả nhà, như cột chống nhà'], ['thầm lặng', 'lặng lẽ, không nói ra'], ['hi sinh', 'chịu vất vả vì người khác'], ['chỗ dựa', 'người mình tin, nhờ cậy'],
    ['tập đạp xe', 'học đi xe đạp'], ['vững', 'chắc, không ngã'], ['tấm thiệp', 'tờ giấy đẹp để viết lời chúc'], ['biết ơn', 'nhớ công người đã giúp mình']],
  tuKho: ['trụ cột', 'thầm lặng', 'hi sinh', 'chỗ dựa', 'tập đạp xe', 'tấm thiệp'],
  doan: [
    { text: 'Ngày của Cha là Chủ nhật tuần thứ ba của tháng Sáu. Bố là trụ cột của gia đình. Bố hi sinh thầm lặng, là chỗ dựa vững chắc của em.',
      hoi: [{ q: 'Ngày của Cha là ngày nào?', dung: 'Chủ nhật tuần thứ ba tháng Sáu.', sai: ['Chủ nhật thứ hai tháng Năm.', 'Ngày 8 tháng 3.'] },
            { q: 'Bố là gì của gia đình?', dung: 'Trụ cột.', sai: ['Khách.', 'Người lạ.'] }] },
    { text: 'Sáng chủ nhật, bố dạy em tập đạp xe. Em ngã, bố đỡ em dậy và nói: “Con thử lại nhé!”. Cuối buổi, em đã đạp xe vững.',
      hoi: [{ q: 'Bố dạy em làm gì?', dung: 'Tập đạp xe.', sai: ['Nấu cơm.', 'Đánh đàn.'] },
            { q: 'Khi em ngã, bố làm gì?', dung: 'Đỡ em dậy, động viên em.', sai: ['Mắng em.', 'Bỏ đi.'] }] },
    { text: 'Tối hôm ấy, em làm tấm thiệp tặng bố. Em viết: “Con cảm ơn bố. Con yêu bố!”. Bố ôm em, cười thật tươi. Em biết ơn bố nhiều lắm.',
      hoi: [{ q: 'Em làm gì tặng bố?', dung: 'Tấm thiệp.', sai: ['Bánh sinh nhật.', 'Cái mũ.'] },
            { q: 'Em viết gì trong thiệp?', dung: '“Con cảm ơn bố. Con yêu bố!”', sai: ['“Chúc mừng năm mới!”', '“Tạm biệt!”'] }] }
  ],
  hieu: [
    { q: '“Hi sinh thầm lặng” nghĩa là gì?', dung: 'Lặng lẽ chịu vất vả vì gia đình.', sai: ['Nói to cho mọi người biết.', 'Không làm gì cả.'] },
    { q: 'Vì sao em đạp xe được?', dung: 'Vì bố kiên nhẫn dạy, em cố gắng thử lại.', sai: ['Vì em không ngã lần nào.', 'Vì xe tự chạy.'] },
    { q: 'Em thể hiện lòng biết ơn bố thế nào?', dung: 'Làm thiệp và nói lời yêu thương.', sai: ['Đòi bố mua quà.', 'Không nói gì.'] }
  ],
  thuTu: ['Bố dạy em tập đạp xe.', 'Em bị ngã, bố đỡ em dậy.', 'Em đã đạp xe vững.', 'Em làm thiệp tặng bố.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bố|dạy|em đạp xe.', 'Bố|đỡ|em dậy.', 'Em|làm|tấm thiệp.', 'Bố|ôm|em thật chặt.'] },
  dien: [
    { cau: 'Bố là ___ cột của gia đình.', dung: 'trụ', sai: ['cây', 'nhà'] },
    { cau: 'Bố hi sinh ___ lặng.', dung: 'thầm', sai: ['yên', 'im'] },
    { cau: 'Sáng chủ nhật, bố dạy em tập ___ xe.', dung: 'đạp', sai: ['lái', 'rửa'] },
    { cau: 'Cuối buổi, em đã đạp xe ___.', dung: 'vững', sai: ['ngã', 'chậm'] },
    { cau: 'Con cảm ơn bố. Con ___ bố!', dung: 'yêu', sai: ['chào', 'gọi'] }
  ],
  to: ['bố', 'trụ cột', 'biết ơn'],
  noi: ['Bố đã dạy em điều gì?', 'Kể một kỉ niệm vui với bố.', 'Em sẽ viết gì trong thiệp tặng bố?'],
  viet: ['Bố của em', 'Bố dạy em', 'Em nhớ nhất lần', 'Con cảm ơn bố vì']
};
docSetup();
