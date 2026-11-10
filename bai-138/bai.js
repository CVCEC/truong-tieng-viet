/* Bài 138 · Chứng kiến và theo dõi — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng (tên slide: “Chứng kiến – Theo dõi”); Trâu Con soạn bài luyện từ: “chứng kiến” (thấy tận mắt một việc xảy ra)
   và “theo dõi” (để ý, xem xét trong nhiều ngày), qua chuyện theo dõi cây mướp lớn lên và chứng kiến bạn ngã. Kể đúng điều mình thấy.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Thấy tận mắt mới kể, kể đúng điều mình thấy.',
  khoi: [{ tu: 'hạt mướp' }, { tu: 'mầm cỏ' }, { tu: 'dây leo' }, { tu: 'hoa mướp' }, { tu: 'cái kính', cau: 'Em đeo kính để nhìn rõ hơn.' }],
  tuMoi: [['chứng kiến', 'thấy tận mắt một việc xảy ra'], ['theo dõi', 'để ý, xem xét trong nhiều ngày'], ['ghi chép', 'viết lại điều mình thấy'], ['nảy mầm', 'hạt mọc ra cây non'],
    ['tận mắt', 'chính mắt mình nhìn thấy'], ['sự thật', 'điều có thật, đúng như đã xảy ra'], ['quan sát', 'nhìn kĩ để biết rõ'], ['nhật kí', 'quyển sổ ghi việc mỗi ngày']],
  tuKho: ['chứng kiến', 'theo dõi', 'ghi chép', 'nảy mầm', 'tận mắt', 'quan sát'],
  doan: [
    { text: 'Em gieo một hạt mướp vào chậu. Mỗi ngày, em theo dõi chậu cây và ghi chép vào nhật kí. Sau ba ngày, hạt nảy mầm. Sau hai tuần, dây leo lên giàn.',
      hoi: [{ q: 'Em gieo hạt gì?', dung: 'Hạt mướp.', sai: ['Hạt bí ngô.', 'Hạt lúa.'] },
            { q: 'Sau ba ngày, hạt thế nào?', dung: 'Nảy mầm.', sai: ['Ra hoa.', 'Ra quả.'] }] },
    { text: 'Theo dõi là để ý trong nhiều ngày. Em quan sát kĩ: lá to hơn, dây dài hơn. Một sáng, em chứng kiến bông hoa mướp vàng đầu tiên nở.',
      hoi: [{ q: 'Theo dõi là gì?', dung: 'Để ý trong nhiều ngày.', sai: ['Nhìn một lần rồi thôi.', 'Không nhìn gì.'] },
            { q: 'Em chứng kiến điều gì?', dung: 'Bông hoa mướp đầu tiên nở.', sai: ['Con mèo ăn cá.', 'Trời có tuyết.'] }] },
    { text: 'Ở sân trường, em chứng kiến bạn Nam bị ngã. Em đỡ bạn dậy rồi kể cho cô nghe đúng sự thật. Điều gì chưa thấy tận mắt, em không nói bừa.',
      hoi: [{ q: 'Em chứng kiến bạn Nam làm sao?', dung: 'Bị ngã.', sai: ['Được quà.', 'Hát hay.'] },
            { q: 'Em kể cho cô thế nào?', dung: 'Đúng sự thật.', sai: ['Thêm bớt cho vui.', 'Không kể gì.'] }] }
  ],
  hieu: [
    { q: '“Chứng kiến” nghĩa là gì?', dung: 'Thấy tận mắt một việc xảy ra.', sai: ['Nghe người khác kể.', 'Đoán ra.'] },
    { q: 'Câu nào dùng đúng từ “theo dõi”?', dung: 'Em theo dõi cây mướp mỗi ngày.', sai: ['Em theo dõi bạn ngã một lần.', 'Em theo dõi cái bánh rồi ăn.'] },
    { q: 'Điều chưa thấy tận mắt, em làm gì?', dung: 'Không nói bừa.', sai: ['Kể cho cả lớp.', 'Thêm thắt cho hay.'] }
  ],
  thuTu: ['Em gieo hạt mướp vào chậu.', 'Hạt nảy mầm.', 'Dây leo lên giàn.', 'Bông hoa mướp đầu tiên nở.'],
  cau: { mau: 'Em chứng kiến / Em theo dõi', ds: ['Em|theo dõi|cây mướp|mỗi ngày.', 'Em|chứng kiến|bạn bị ngã.', 'Em|theo dõi|thời tiết|cả tuần.', 'Em|chứng kiến|hoa nở.'] },
  dien: [
    { cau: 'Mỗi ngày, em theo ___ chậu cây.', dung: 'dõi', sai: ['đuổi', 'đi'] },
    { cau: 'Em ghi chép vào nhật ___.', dung: 'kí', sai: ['kế', 'kim'] },
    { cau: 'Sau ba ngày, hạt nảy ___.', dung: 'mầm', sai: ['hoa', 'quả'] },
    { cau: 'Em chứng ___ bông hoa mướp đầu tiên nở.', dung: 'kiến', sai: ['minh', 'chỉ'] },
    { cau: 'Em kể cho cô nghe đúng sự ___.', dung: 'thật', sai: ['lạ', 'vui'] }
  ],
  to: ['chứng kiến', 'theo dõi', 'sự thật'],
  noi: ['Em đã theo dõi điều gì trong nhiều ngày?', 'Kể một việc em đã chứng kiến.', 'Vì sao phải kể đúng sự thật?'],
  viet: ['Em đã theo dõi', 'Mỗi ngày, em thấy', 'Em đã chứng kiến', 'Em kể lại']
};
docSetup();
