/* Bài 94 · Địa điểm du lịch — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: vịnh Hạ Long, phố cổ Hội An, Sa Pa, Đà Lạt; đi chơi giữ trật tự, giữ vệ sinh.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Đi đến đâu cũng giữ gìn cảnh đẹp.',
  khoi: [{ tu: 'phố cổ' }, { tu: 'bờ biển' }, { tu: 'đồi núi' }, { tu: 'cây thông' }, { tu: 'con thuyền' }],
  tuMoi: [['du lịch', 'đi chơi, đi tham quan nơi xa'], ['vịnh', 'phần biển ăn vào đất liền'], ['hòn đảo', 'đất nổi lên giữa biển'], ['phố cổ', 'khu phố có nhà cửa xây từ xưa'],
    ['đèn lồng', 'đèn có khung bọc vải hoặc giấy'], ['ruộng bậc thang', 'ruộng làm trên sườn núi, như bậc thềm'], ['sương mù', 'hơi nước trắng mờ bay là là'], ['tham quan', 'đi xem cho biết']],
  tuKho: ['du lịch', 'hòn đảo', 'đèn lồng', 'ruộng bậc thang', 'sương mù', 'tham quan'],
  doan: [
    { text: 'Việt Nam có nhiều nơi du lịch đẹp. Vịnh Hạ Long có hàng nghìn hòn đảo lớn nhỏ. Du khách ngồi thuyền đi tham quan giữa biển xanh.',
      hoi: [{ q: 'Vịnh Hạ Long có gì?', dung: 'Hàng nghìn hòn đảo lớn nhỏ.', sai: ['Nhiều tuyết trắng.', 'Một sa mạc lớn.'] },
            { q: 'Du khách đi tham quan bằng gì?', dung: 'Bằng thuyền.', sai: ['Bằng máy bay.', 'Bằng xe đạp.'] }] },
    { text: 'Phố cổ Hội An có những ngôi nhà mái ngói xưa. Buổi tối, phố treo đầy đèn lồng nhiều màu, đẹp lung linh.',
      hoi: [{ q: 'Phố cổ Hội An có nhà thế nào?', dung: 'Nhà mái ngói xưa.', sai: ['Nhà chọc trời.', 'Nhà bằng băng.'] },
            { q: 'Buổi tối, phố cổ treo gì?', dung: 'Đèn lồng nhiều màu.', sai: ['Bóng bay.', 'Lá cây.'] }] },
    { text: 'Sa Pa ở trên núi cao, có ruộng bậc thang và sương mù. Đà Lạt có rừng thông và nhiều hoa. Đi đâu, em cũng không xả rác để giữ cảnh đẹp.',
      hoi: [{ q: 'Sa Pa có gì đẹp?', dung: 'Ruộng bậc thang và sương mù.', sai: ['Bãi cát dài.', 'Phố đèn lồng.'] },
            { q: 'Đi du lịch, em nhớ điều gì?', dung: 'Không xả rác, giữ cảnh đẹp.', sai: ['Bẻ hoa mang về.', 'Viết lên tường.'] }] }
  ],
  hieu: [
    { q: 'Nơi nào có rừng thông và nhiều hoa?', dung: 'Đà Lạt.', sai: ['Vịnh Hạ Long.', 'Phố cổ Hội An.'] },
    { q: 'Vì sao em không xả rác khi đi chơi?', dung: 'Để giữ cảnh đẹp cho mọi người.', sai: ['Vì không có túi.', 'Vì rác nặng.'] },
    { q: 'Bài đọc kể về điều gì?', dung: 'Những nơi du lịch đẹp ở Việt Nam.', sai: ['Cách nấu ăn.', 'Một ngày ở trường.'] }
  ],
  thuTu: ['Vịnh Hạ Long có hàng nghìn hòn đảo.', 'Phố cổ Hội An có đèn lồng.', 'Sa Pa có ruộng bậc thang.', 'Đà Lạt có rừng thông.'],
  cau: { mau: 'Ở đâu có gì?', nhan: ['Ở đâu?', 'có', 'gì?'], ds: ['Hạ Long|có|nhiều hòn đảo.', 'Hội An|có|đèn lồng.', 'Sa Pa|có|ruộng bậc thang.', 'Đà Lạt|có|rừng thông.'] },
  dien: [
    { cau: 'Vịnh Hạ Long có hàng nghìn hòn ___.', dung: 'đảo', sai: ['núi', 'non'] },
    { cau: 'Du khách ngồi ___ đi tham quan.', dung: 'thuyền', sai: ['ghế', 'xe'] },
    { cau: 'Buổi tối, phố cổ treo đầy đèn ___.', dung: 'lồng', sai: ['pin', 'xe'] },
    { cau: 'Sa Pa có ruộng bậc ___.', dung: 'thang', sai: ['thềm', 'cửa'] },
    { cau: 'Đi đâu, em cũng không xả ___.', dung: 'rác', sai: ['nước', 'hoa'] }
  ],
  to: ['du lịch', 'đèn lồng', 'hòn đảo'],
  noi: ['Em đã đi du lịch ở đâu? Nơi đó có gì đẹp?', 'Em muốn đến nơi nào ở Việt Nam?', 'Khi đi chơi, em giữ gìn cảnh đẹp thế nào?'],
  viet: ['Em muốn đến', 'Nơi đó có', 'Khi đi du lịch, em', 'Em sẽ không']
};
docSetup();
