/* Bài 114 · Trật tự an ninh — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: công an giữ trật tự; không đi theo người lạ, không mở cửa cho người lạ,
   nhớ số điện thoại bố mẹ, số khẩn cấp; giữ trật tự nơi công cộng. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Biết giữ an toàn cho mình và giữ trật tự chung.',
  khoi: [{ tu: 'điện thoại' }, { tu: 'chìa khóa' }, { tu: 'cái còi' }, { tu: 'cái cổng' }, { tu: 'tuần tra' }],
  tuMoi: [['trật tự', 'yên ổn, không ồn ào, không lộn xộn'], ['an ninh', 'sự yên ổn, an toàn cho mọi người'], ['công an', 'người giữ an ninh, trật tự'], ['người lạ', 'người mình không quen biết'],
    ['khẩn cấp', 'rất gấp, cần giúp ngay'], ['công cộng', 'nơi của chung mọi người'], ['xếp hàng', 'đứng nối nhau theo thứ tự'], ['báo ngay', 'nói ngay cho người lớn biết']],
  tuKho: ['trật tự', 'an ninh', 'công an', 'người lạ', 'khẩn cấp', 'công cộng'],
  doan: [
    { text: 'Các chú công an giữ an ninh, trật tự cho mọi người. Các chú tuần tra trên đường phố. Khi gặp chuyện khẩn cấp, người lớn gọi điện cho công an.',
      hoi: [{ q: 'Các chú công an làm gì?', dung: 'Giữ an ninh, trật tự.', sai: ['Bán hàng.', 'Nấu ăn.'] },
            { q: 'Khi khẩn cấp, người lớn gọi ai?', dung: 'Gọi công an.', sai: ['Gọi bạn chơi.', 'Không gọi ai.'] }] },
    { text: 'Em không đi theo người lạ. Người lạ cho quà, em không nhận. Ở nhà một mình, em không mở cửa cho người lạ. Em thuộc số điện thoại của bố mẹ.',
      hoi: [{ q: 'Người lạ cho quà, em làm gì?', dung: 'Không nhận.', sai: ['Nhận ngay.', 'Đi theo người đó.'] },
            { q: 'Em cần thuộc gì?', dung: 'Số điện thoại của bố mẹ.', sai: ['Tên bài hát.', 'Giá đồ chơi.'] }] },
    { text: 'Ở nơi công cộng, em xếp hàng, nói nhỏ nhẹ. Nếu bị lạc, em đứng yên và nhờ chú bảo vệ hay cô bán hàng giúp. Thấy việc xấu, em báo ngay cho người lớn.',
      hoi: [{ q: 'Ở nơi công cộng, em làm gì?', dung: 'Xếp hàng, nói nhỏ nhẹ.', sai: ['Chen lấn, la hét.', 'Chạy lung tung.'] },
            { q: 'Nếu bị lạc, em làm gì?', dung: 'Đứng yên, nhờ chú bảo vệ giúp.', sai: ['Đi theo người lạ.', 'Chạy thật xa.'] }] }
  ],
  hieu: [
    { q: 'Ở nhà một mình, có người lạ gõ cửa, em làm gì?', dung: 'Không mở cửa, gọi cho bố mẹ.', sai: ['Mở cửa ngay.', 'Mời vào nhà.'] },
    { q: 'Vì sao cần thuộc số điện thoại bố mẹ?', dung: 'Để gọi khi cần giúp.', sai: ['Để khoe với bạn.', 'Để chơi trò chơi.'] },
    { q: 'Việc nào giữ trật tự nơi công cộng?', dung: 'Xếp hàng.', sai: ['Chen lấn.', 'Xả rác.'] }
  ],
  thuTu: ['Em đi siêu thị với mẹ.', 'Em bị lạc mẹ.', 'Em đứng yên và nhờ chú bảo vệ.', 'Chú bảo vệ giúp em tìm mẹ.'],
  cau: { mau: 'Em không …', ds: ['Em|không|đi theo|người lạ.', 'Em|không|nhận quà|người lạ.', 'Em|không|mở cửa|cho người lạ.', 'Em|không|chen lấn|nơi đông người.'] },
  dien: [
    { cau: 'Các chú công ___ giữ an ninh, trật tự.', dung: 'an', sai: ['nhân', 'việc'] },
    { cau: 'Em không đi theo người ___.', dung: 'lạ', sai: ['nhà', 'thân'] },
    { cau: 'Em thuộc số điện ___ của bố mẹ.', dung: 'thoại', sai: ['tử', 'nhà'] },
    { cau: 'Ở nơi công cộng, em xếp ___.', dung: 'hàng', sai: ['hình', 'ghế'] },
    { cau: 'Thấy việc xấu, em báo ___ cho người lớn.', dung: 'ngay', sai: ['muộn', 'mai'] }
  ],
  to: ['trật tự', 'an toàn', 'công an'],
  noi: ['Em thuộc số điện thoại của ai?', 'Nếu bị lạc ở siêu thị, em làm gì?', 'Người lạ cho kẹo, em nói gì?'],
  viet: ['Các chú công an', 'Em không', 'Nếu bị lạc, em', 'Ở nơi công cộng, em']
};
docSetup();
