/* Bài 128 · Mùa thu — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: mùa thu miền Bắc (trời mát, lá vàng, cốm, hồng), khai giảng, Trung thu.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Mùa thu dịu mát, mùa của trăng rằm và ngày tựu trường.',
  khoi: [{ tu: 'lá khô' }, { tu: 'cốm' }, { tu: 'lượm lá' }, { tu: 'cổng trường' }, { tu: 'vầng trăng' }],
  tuMoi: [['mùa thu', 'mùa sau mùa hè, trời mát'], ['se lạnh', 'hơi lạnh một chút'], ['lá vàng', 'lá cây đổi màu vàng rồi rụng'], ['cốm', 'hạt lúa non rang, giã dẹt, màu xanh'],
    ['khai giảng', 'ngày đầu năm học mới'], ['tựu trường', 'học sinh trở lại trường'], ['dịu mát', 'mát, dễ chịu'], ['xào xạc', 'tiếng lá cây cọ vào nhau']],
  tuKho: ['mùa thu', 'se lạnh', 'khai giảng', 'tựu trường', 'dịu mát', 'xào xạc'],
  doan: [
    { text: 'Ở miền Bắc, mùa thu đến sau mùa hè. Trời dịu mát, buổi sáng se lạnh. Lá vàng rơi xào xạc trên đường em đi học.',
      hoi: [{ q: 'Mùa thu đến sau mùa nào?', dung: 'Sau mùa hè.', sai: ['Sau mùa xuân.', 'Sau Tết.'] },
            { q: 'Mùa thu, trời thế nào?', dung: 'Dịu mát, buổi sáng se lạnh.', sai: ['Nắng chang chang.', 'Có tuyết dày.'] }] },
    { text: 'Mùa thu có cốm xanh, thơm mùi lúa non. Bà gói cốm trong lá sen cho em. Đêm rằm tháng tám, vầng trăng tròn sáng nhất.',
      hoi: [{ q: 'Mùa thu có món gì?', dung: 'Cốm xanh.', sai: ['Bánh chưng.', 'Kem que.'] },
            { q: 'Bà gói cốm trong gì?', dung: 'Trong lá sen.', sai: ['Trong túi nhựa.', 'Trong giấy báo.'] }] },
    { text: 'Mùa thu cũng là mùa tựu trường. Ngày khai giảng, em mặc áo mới, đeo cặp đến trường. Em gặp lại thầy cô và các bạn.',
      hoi: [{ q: 'Mùa thu là mùa gì của học sinh?', dung: 'Mùa tựu trường.', sai: ['Mùa nghỉ hè.', 'Mùa đi biển.'] },
            { q: 'Ngày khai giảng, em gặp lại ai?', dung: 'Thầy cô và các bạn.', sai: ['Ông già Noel.', 'Người lạ.'] }] }
  ],
  hieu: [
    { q: 'Lá vàng rơi kêu thế nào?', dung: 'Xào xạc.', sai: ['Ầm ầm.', 'Tích tắc.'] },
    { q: 'Ngày lễ nào vào mùa thu?', dung: 'Tết Trung thu.', sai: ['Tết Nguyên đán.', 'Lễ Giáng sinh.'] },
    { q: 'Bài đọc tả mùa thu thế nào?', dung: 'Dịu mát, lá vàng, có cốm và trăng rằm.', sai: ['Nóng bức, ve kêu.', 'Rét buốt, tuyết rơi.'] }
  ],
  thuTu: ['Mùa hè qua đi.', 'Mùa thu đến, trời dịu mát.', 'Lá vàng rơi xào xạc.', 'Ngày khai giảng, em đến trường.'],
  cau: { mau: 'Cái gì thế nào?', nhan: ['Cái gì?', 'thế nào?'], ds: ['Trời thu|dịu mát.', 'Lá vàng|rơi xào xạc.', 'Cốm xanh|thơm mùi lúa non.', 'Trăng rằm|tròn và sáng.'] },
  dien: [
    { cau: 'Ở miền Bắc, mùa ___ đến sau mùa hè.', dung: 'thu', sai: ['xuân', 'đông'] },
    { cau: 'Lá vàng rơi xào ___.', dung: 'xạc', sai: ['xác', 'xào'] },
    { cau: 'Bà gói ___ trong lá sen.', dung: 'cốm', sai: ['cơm', 'kẹo'] },
    { cau: 'Mùa thu là mùa ___ trường.', dung: 'tựu', sai: ['nghỉ', 'tan'] },
    { cau: 'Ngày khai ___, em mặc áo mới.', dung: 'giảng', sai: ['trương', 'mạc'] }
  ],
  to: ['mùa thu', 'lá vàng', 'tựu trường'],
  noi: ['Nơi em ở, mùa thu thế nào?', 'Em thích gì nhất ở mùa thu?', 'Kể về ngày khai giảng của em.'],
  viet: ['Mùa thu, trời', 'Lá cây', 'Mùa thu có', 'Em thích mùa thu vì']
};
docSetup();
