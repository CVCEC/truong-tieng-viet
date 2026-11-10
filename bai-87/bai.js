/* Bài 87 · Ngày Gia đình Việt Nam — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: ngày 28 tháng 6, bữa cơm gia đình, mỗi người một việc.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Gia đình hòa thuận là hạnh phúc.',
  khoi: [{ tu: 'gia đình' }, { tu: 'mâm cơm' }, { tu: 'bà nội' }, { tu: 'lau nhà' }, { tu: 'quét sân' }],
  tuMoi: [['gia đình', 'ông bà, cha mẹ, anh chị em sống cùng nhau'], ['hòa thuận', 'sống vui vẻ, không cãi nhau'], ['sum họp', 'mọi người quây quần bên nhau'], ['quây quần', 'ngồi gần nhau, vui vẻ'],
    ['mời', 'nói lời lễ phép trước khi ăn'], ['đỡ đần', 'giúp người khác một tay'], ['hạnh phúc', 'vui sướng, đầy đủ'], ['yêu thương', 'quý mến, quan tâm nhau']],
  tuKho: ['hòa thuận', 'sum họp', 'quây quần', 'đỡ đần', 'hạnh phúc', 'yêu thương'],
  doan: [
    { text: 'Ngày 28 tháng 6 là Ngày Gia đình Việt Nam. Đây là ngày mọi người nhớ đến gia đình, nơi có ông bà, cha mẹ, anh chị em yêu thương nhau.',
      hoi: [{ q: 'Ngày Gia đình Việt Nam là ngày nào?', dung: 'Ngày 28 tháng 6.', sai: ['Ngày 20 tháng 11.', 'Ngày 1 tháng 6.'] },
            { q: 'Gia đình có những ai?', dung: 'Ông bà, cha mẹ, anh chị em.', sai: ['Chỉ có bạn bè.', 'Chỉ có thầy cô.'] }] },
    { text: 'Buổi tối, cả nhà sum họp bên mâm cơm. Em mời ông bà, mời bố mẹ trước rồi mới ăn. Cả nhà quây quần, kể chuyện vui.',
      hoi: [{ q: 'Buổi tối, cả nhà làm gì?', dung: 'Sum họp bên mâm cơm.', sai: ['Mỗi người ăn một nơi.', 'Đi ngủ ngay.'] },
            { q: 'Trước khi ăn, em làm gì?', dung: 'Mời ông bà, mời bố mẹ.', sai: ['Ăn trước một mình.', 'Xem ti vi.'] }] },
    { text: 'Mỗi người một việc để đỡ đần nhau. Bố quét sân, mẹ nấu cơm, em lau bàn. Gia đình hòa thuận là hạnh phúc.',
      hoi: [{ q: 'Bố làm việc gì?', dung: 'Quét sân.', sai: ['Nấu cơm.', 'Lau bàn.'] },
            { q: 'Em làm việc gì?', dung: 'Lau bàn.', sai: ['Lái xe.', 'Đi chợ một mình.'] }] }
  ],
  hieu: [
    { q: 'Vì sao em mời ông bà, bố mẹ trước?', dung: 'Vì người lớn trước, người nhỏ sau.', sai: ['Vì em không đói.', 'Vì em không thích ăn.'] },
    { q: 'Vì sao mỗi người làm một việc?', dung: 'Để đỡ đần nhau.', sai: ['Để cãi nhau.', 'Để được thưởng tiền.'] },
    { q: 'Thế nào là gia đình hạnh phúc?', dung: 'Mọi người hòa thuận, yêu thương nhau.', sai: ['Có nhiều đồ chơi.', 'Không ai nói chuyện với ai.'] }
  ],
  thuTu: ['Buổi tối, cả nhà sum họp bên mâm cơm.', 'Em mời ông bà, mời bố mẹ.', 'Cả nhà quây quần, kể chuyện vui.', 'Ăn xong, em giúp mẹ lau bàn.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bố|quét|sân.', 'Mẹ|nấu|cơm.', 'Em|lau|bàn.', 'Bà|kể|chuyện.'] },
  dien: [
    { cau: 'Ngày 28 tháng 6 là Ngày ___ Việt Nam.', dung: 'Gia đình', sai: ['Nhà giáo', 'Thiếu nhi'] },
    { cau: 'Buổi tối, cả nhà sum họp bên mâm ___.', dung: 'cơm', sai: ['bàn', 'ghế'] },
    { cau: 'Em ___ ông bà, mời bố mẹ.', dung: 'mời', sai: ['gọi', 'chê'] },
    { cau: 'Mỗi người một việc để ___ đần nhau.', dung: 'đỡ', sai: ['giận', 'bỏ'] },
    { cau: 'Gia đình hòa ___ là hạnh phúc.', dung: 'thuận', sai: ['bình', 'nhã'] }
  ],
  to: ['gia đình', 'hòa thuận', 'yêu thương'],
  noi: ['Gia đình em có những ai?', 'Em giúp đỡ gia đình việc gì?', 'Bữa cơm nhà em có gì vui?'],
  viet: ['Gia đình em có', 'Bố mẹ em', 'Em giúp', 'Em yêu gia đình vì']
};
docSetup();
