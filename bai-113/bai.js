/* Bài 113 · Giao thông — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: đèn giao thông, vạch qua đường, vỉa hè, mũ bảo hiểm, dây an toàn.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Đi đường cẩn thận, đúng luật để an toàn.',
  khoi: [{ tu: 'ô tô' }, { tu: 'xe buýt' }, { tu: 'xe đạp' }, { tu: 'vỉa hè' },
    { tu: 'đèn giao thông', do: 'Ba mắt ba màu / Đứng ở ngã tư / Đỏ dừng, xanh đi / Vàng thì đi chậm' }],
  tuMoi: [['giao thông', 'việc đi lại trên đường'], ['đèn tín hiệu', 'đèn xanh, vàng, đỏ ở ngã tư'], ['vạch kẻ đường', 'những vạch trắng để người đi bộ qua đường'], ['vỉa hè', 'phần đường dành cho người đi bộ'],
    ['mũ bảo hiểm', 'mũ cứng bảo vệ đầu khi đi xe'], ['dây an toàn', 'dây giữ người ngồi trên ô tô'], ['ngã tư', 'chỗ hai con đường cắt nhau'], ['quan sát', 'nhìn kĩ xung quanh']],
  tuKho: ['giao thông', 'đèn tín hiệu', 'vạch kẻ đường', 'mũ bảo hiểm', 'dây an toàn', 'quan sát'],
  doan: [
    { text: 'Ở ngã tư có đèn tín hiệu giao thông. Đèn đỏ thì dừng lại. Đèn vàng thì đi chậm. Đèn xanh thì được đi.',
      hoi: [{ q: 'Đèn đỏ thì làm gì?', dung: 'Dừng lại.', sai: ['Đi thật nhanh.', 'Quay đầu.'] },
            { q: 'Đèn xanh thì làm gì?', dung: 'Được đi.', sai: ['Dừng lại.', 'Ngồi xuống.'] }] },
    { text: 'Người đi bộ đi trên vỉa hè. Khi qua đường, em nắm tay người lớn, đi trên vạch kẻ đường. Em quan sát hai bên rồi mới đi.',
      hoi: [{ q: 'Người đi bộ đi ở đâu?', dung: 'Trên vỉa hè.', sai: ['Giữa lòng đường.', 'Trên đường cao tốc.'] },
            { q: 'Khi qua đường, em làm gì?', dung: 'Nắm tay người lớn, đi trên vạch kẻ đường.', sai: ['Chạy thật nhanh một mình.', 'Vừa đi vừa chơi.'] }] },
    { text: 'Ngồi trên xe máy, em đội mũ bảo hiểm. Ngồi trên ô tô, em thắt dây an toàn. Em không thò tay, thò đầu ra ngoài cửa xe.',
      hoi: [{ q: 'Ngồi xe máy, em đội gì?', dung: 'Mũ bảo hiểm.', sai: ['Mũ len.', 'Nón lá.'] },
            { q: 'Ngồi ô tô, em làm gì?', dung: 'Thắt dây an toàn.', sai: ['Thò đầu ra ngoài.', 'Đứng trên ghế.'] }] }
  ],
  hieu: [
    { q: 'Đèn vàng thì làm gì?', dung: 'Đi chậm lại.', sai: ['Đi nhanh hơn.', 'Được đi luôn.'] },
    { q: 'Vì sao phải đội mũ bảo hiểm?', dung: 'Để bảo vệ đầu.', sai: ['Để trông đẹp hơn.', 'Để che mưa.'] },
    { q: 'Việc nào không an toàn?', dung: 'Chơi đùa dưới lòng đường.', sai: ['Đi trên vỉa hè.', 'Thắt dây an toàn.'] }
  ],
  thuTu: ['Em đứng trên vỉa hè.', 'Em chờ đèn cho người đi bộ.', 'Em quan sát hai bên.', 'Em nắm tay mẹ đi trên vạch kẻ đường.'],
  cau: { mau: 'Khi nào làm gì?', nhan: ['Khi nào?', 'làm gì?'], ds: ['Đèn đỏ,|em dừng lại.', 'Đèn xanh,|em được đi.', 'Đi xe máy,|em đội mũ bảo hiểm.', 'Ngồi ô tô,|em thắt dây an toàn.'] },
  dien: [
    { cau: 'Đèn ___ thì dừng lại.', dung: 'đỏ', sai: ['xanh', 'tím'] },
    { cau: 'Người đi bộ đi trên ___ hè.', dung: 'vỉa', sai: ['vườn', 'mùa'] },
    { cau: 'Em đi trên vạch ___ đường.', dung: 'kẻ', sai: ['vẽ', 'ngang'] },
    { cau: 'Ngồi trên xe máy, em đội mũ bảo ___.', dung: 'hiểm', sai: ['vệ', 'hộ'] },
    { cau: 'Ngồi trên ô tô, em thắt dây an ___.', dung: 'toàn', sai: ['tâm', 'khang'] }
  ],
  to: ['giao thông', 'đèn đỏ', 'vỉa hè'],
  noi: ['Em đi học bằng phương tiện gì?', 'Nói ý nghĩa ba màu đèn giao thông.', 'Khi qua đường, em làm thế nào?'],
  viet: ['Đèn đỏ thì', 'Đèn xanh thì', 'Khi qua đường, em', 'Ngồi trên ô tô, em']
};
docSetup();
