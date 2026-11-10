/* Bài 135 · Dịch vụ — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: các nơi phục vụ mọi người (bưu điện, trạm y tế, tiệm cắt tóc, tiệm sửa xe, siêu thị),
   xếp hàng, nói lời cảm ơn. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Mỗi dịch vụ giúp cuộc sống thuận tiện, em biết cảm ơn người phục vụ.',
  khoi: [{ tu: 'bưu tá' }, { tu: 'trạm y tế' }, { tu: 'tem thư' }, { tu: 'bơm xe' },
    { tu: 'cắt tóc', do: 'Kéo kêu lách cách / Tóc rơi lả tả / Chú thợ khéo tay / Đầu em gọn gàng' }],
  tuMoi: [['dịch vụ', 'công việc phục vụ người khác'], ['bưu điện', 'nơi gửi thư, gửi quà'], ['trạm y tế', 'nơi khám bệnh gần nhà'], ['tiệm', 'cửa hàng nhỏ'],
    ['phục vụ', 'làm việc giúp người khác'], ['gửi quà', 'nhờ chuyển quà đến người ở xa'], ['bơm xe', 'cho hơi vào bánh xe'], ['thuận tiện', 'dễ dàng, nhanh gọn']],
  tuKho: ['dịch vụ', 'bưu điện', 'trạm y tế', 'phục vụ', 'gửi quà', 'thuận tiện'],
  doan: [
    { text: 'Quanh nhà em có nhiều dịch vụ. Bưu điện giúp gửi thư, gửi quà. Trạm y tế khám bệnh cho mọi người. Tiệm cắt tóc giúp đầu tóc gọn gàng.',
      hoi: [{ q: 'Bưu điện giúp gì?', dung: 'Gửi thư, gửi quà.', sai: ['Cắt tóc.', 'Khám bệnh.'] },
            { q: 'Ở đâu khám bệnh cho mọi người?', dung: 'Trạm y tế.', sai: ['Tiệm cắt tóc.', 'Bưu điện.'] }] },
    { text: 'Hôm qua, em cùng mẹ ra bưu điện gửi quà cho bà ở Việt Nam. Em xếp hàng chờ đến lượt. Cô nhân viên cân gói quà và dán tem thư.',
      hoi: [{ q: 'Em cùng mẹ gửi quà cho ai?', dung: 'Cho bà ở Việt Nam.', sai: ['Cho bạn cùng lớp.', 'Cho cô giáo.'] },
            { q: 'Ở bưu điện, em làm gì?', dung: 'Xếp hàng chờ đến lượt.', sai: ['Chen lên trước.', 'Chạy quanh.'] }] },
    { text: 'Trên đường về, xe đạp của em bị xẹp lốp. Chú ở tiệm sửa xe bơm xe giúp em. Em cảm ơn chú. Có những người phục vụ, có các dịch vụ, cuộc sống thật thuận tiện.',
      hoi: [{ q: 'Xe đạp của em bị làm sao?', dung: 'Bị xẹp lốp.', sai: ['Bị mất.', 'Bị gãy tay lái.'] },
            { q: 'Chú ở tiệm sửa xe làm gì?', dung: 'Bơm xe giúp em.', sai: ['Cắt tóc cho em.', 'Gửi thư cho em.'] }] }
  ],
  hieu: [
    { q: 'Người làm dịch vụ làm gì?', dung: 'Phục vụ, giúp đỡ mọi người.', sai: ['Chỉ đi chơi.', 'Không làm gì.'] },
    { q: 'Được giúp đỡ, em nên nói gì?', dung: '“Cháu cảm ơn chú ạ!”', sai: ['Không nói gì.', '“Nhanh lên!”'] },
    { q: 'Muốn gửi thư, em đến đâu?', dung: 'Bưu điện.', sai: ['Trạm y tế.', 'Tiệm sửa xe.'] }
  ],
  thuTu: ['Em cùng mẹ ra bưu điện.', 'Em xếp hàng chờ đến lượt.', 'Cô nhân viên cân gói quà.', 'Cô dán tem thư lên gói quà.'],
  cau: { mau: 'Nơi nào làm gì?', nhan: ['Ở đâu?', 'làm gì?'], ds: ['Bưu điện|gửi thư, gửi quà.', 'Trạm y tế|khám bệnh.', 'Tiệm cắt tóc|cắt tóc gọn gàng.', 'Tiệm sửa xe|sửa xe, bơm xe.'] },
  dien: [
    { cau: 'Bưu ___ giúp gửi thư, gửi quà.', dung: 'điện', sai: ['tá', 'thư'] },
    { cau: 'Trạm y ___ khám bệnh cho mọi người.', dung: 'tế', sai: ['tá', 'sĩ'] },
    { cau: 'Em xếp hàng chờ đến ___.', dung: 'lượt', sai: ['lúc', 'lớp'] },
    { cau: 'Cô nhân viên dán ___ thư.', dung: 'tem', sai: ['kem', 'giấy'] },
    { cau: 'Chú ở tiệm sửa xe ___ xe giúp em.', dung: 'bơm', sai: ['rửa', 'sơn'] }
  ],
  to: ['dịch vụ', 'bưu điện', 'cảm ơn'],
  noi: ['Gần nhà em có những dịch vụ nào?', 'Em đã đến bưu điện hay trạm y tế chưa?', 'Khi được giúp, em nói gì?'],
  viet: ['Gần nhà em có', 'Bưu điện giúp', 'Em đã đến', 'Em cảm ơn']
};
docSetup();
