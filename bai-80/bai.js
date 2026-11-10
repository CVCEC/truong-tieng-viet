/* Bài 80 · Về quê – Ngôi nhà của bà — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js, tranh ở chung/tranh.js
   Sửa so với slide: slide không có chữ bài thơ Lên Tám, dùng bài thơ ở Bài 71; từ khởi động "quê", "bà", "sân" đổi thành "quét sân",
   "hàng cau", "mâm cơm" (có trong bài, dễ vẽ); đáp án chọn ý do Trâu Con soạn theo bài; luyện câu tả cảnh theo mẫu "… có …". */
const DOC = {
  y: 'Tình yêu quê hương và việc làm có ích.',
  khoi: [
    { tu: 'ngôi nhà', tranh: 'nhà lá' },
    { tu: 'cây chổi', tranh: 'cái chổi' },
    { tu: 'quét sân' },
    { tu: 'hàng cau' },
    { tu: 'mâm cơm' }
  ],
  tuMoi: [['mái rạ', 'mái nhà lợp bằng rơm hoặc rạ'], ['lối nhỏ', 'đường đi hẹp'], ['quét sân', 'dùng chổi làm sạch sân'], ['thơm mùi rơm', 'có mùi dễ chịu của rơm khô'],
    ['yên ả', 'yên tĩnh, thanh bình'], ['quây quần', 'mọi người ngồi gần bên nhau'], ['chăm chỉ', 'siêng năng làm việc'], ['quê hương', 'nơi mình sinh ra hoặc gắn bó']],
  tuKho: ['mái rạ', 'lối nhỏ', 'quét sân', 'mùi rơm', 'yên ả', 'quây quần'],
  doan: [
    { text: 'Nghỉ hè, em theo mẹ về quê thăm bà. Ngôi nhà nhỏ có mái rạ, hàng cau trước ngõ và giàn hoa giấy bên cổng. Con đường làng uốn quanh cánh đồng xanh.',
      hoi: [{ q: 'Nghỉ hè, bạn nhỏ đi đâu?', dung: 'Theo mẹ về quê thăm bà.', sai: ['Đi biển với bố.', 'Đi học thêm.'] },
            { q: 'Ngôi nhà của bà có mái gì?', dung: 'Mái rạ.', sai: ['Mái ngói đỏ.', 'Mái tôn.'] }] },
    { text: 'Sáng sớm, bà dùng chổi tre quét sân. Em xin bà một chiếc chổi nhỏ rồi quét lá dưới gốc cây. Hai bà cháu vừa làm vừa nghe tiếng chim hót.',
      hoi: [{ q: 'Sáng sớm, bà làm gì?', dung: 'Dùng chổi tre quét sân.', sai: ['Đi chợ bán rau.', 'Tưới giàn mướp.'] },
            { q: 'Bạn nhỏ giúp bà ra sao?', dung: 'Quét lá dưới gốc cây.', sai: ['Hái hoa giấy.', 'Nấu cơm.'] }] },
    { text: 'Buổi tối, cả nhà quây quần bên mâm cơm. Gió đồng mát rượi, mùi rơm mới thơm dịu. Em thấy quê hương yên ả và hiểu rằng giúp bà một việc nhỏ cũng đem lại niềm vui.',
      hoi: [{ q: 'Buổi tối, cả nhà làm gì?', dung: 'Quây quần bên mâm cơm.', sai: ['Đi dạo ngoài đồng.', 'Đi ngủ sớm.'] },
            { q: 'Bạn nhỏ hiểu ra điều gì?', dung: 'Giúp bà một việc nhỏ cũng đem lại niềm vui.', sai: ['Ở quê rất buồn.', 'Quét sân rất mệt.'] }] }
  ],
  hieu: [
    { q: 'Con đường làng thế nào?', dung: 'Uốn quanh cánh đồng xanh.', sai: ['Thẳng tắp, đông xe.', 'Đầy sỏi đá.'] },
    { q: 'Khi quét sân, hai bà cháu nghe thấy gì?', dung: 'Tiếng chim hót.', sai: ['Tiếng trống trường.', 'Tiếng xe.'] },
    { q: 'Bạn nhỏ cảm nhận thế nào về quê hương?', dung: 'Quê hương yên ả.', sai: ['Quê hương ồn ào.', 'Quê hương buồn tẻ.'] }
  ],
  thuTu: ['Nghỉ hè, em theo mẹ về quê thăm bà.', 'Sáng sớm, bà dùng chổi tre quét sân.', 'Em xin bà một chiếc chổi nhỏ rồi quét lá.', 'Buổi tối, cả nhà quây quần bên mâm cơm.'],
  cau: { mau: 'Câu tả cảnh: … có …', ds: ['Ngôi nhà nhỏ|có|mái rạ.', 'Trước ngõ|có|hàng cau.', 'Bên cổng|có|giàn hoa giấy.', 'Quê em|có|cánh đồng xanh.'] },
  dien: [
    { cau: 'Nghỉ hè, em theo mẹ về ___ thăm bà.', dung: 'quê', sai: ['trường', 'biển'] },
    { cau: 'Ngôi nhà nhỏ có mái ___.', dung: 'rạ', sai: ['kính', 'tôn'] },
    { cau: 'Sáng sớm, bà dùng chổi tre quét ___.', dung: 'sân', sai: ['bàn', 'xe'] },
    { cau: 'Buổi tối, cả nhà ___ bên mâm cơm.', dung: 'quây quần', sai: ['chạy nhảy', 'ngủ say'] },
    { cau: 'Em thấy quê hương ___.', dung: 'yên ả', sai: ['ồn ào', 'xa lạ'] }
  ],
  to: ['quê', 'bà', 'nhà'],
  noi: ['Tả một cảnh ở quê em.', 'Kể một việc em giúp ông bà.', 'Nói điều em yêu nhất ở quê hương.'],
  viet: ['Quê em có', 'Em nhìn thấy', 'Em cùng ông bà', 'Em yêu quê vì']
};
docSetup();
