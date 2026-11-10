/* Bài 109 · Tết Hàn thực — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: mùng 3 tháng 3 Âm lịch, bánh trôi (tròn, vỏ trắng, nhân đường) và bánh chay (tròn dẹt, nhân đậu xanh, ăn với nước đường),
   cách làm bánh trôi, cúng tổ tiên, uống nước nhớ nguồn. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Làm bánh dâng tổ tiên là uống nước nhớ nguồn.',
  khoi: [
    { tu: 'bánh trôi', do: 'Viên tròn, vỏ trắng / Nhân ngọt đường phèn / Luộc nổi lên trên / Rắc thêm hạt vừng' },
    { tu: 'bánh chay', do: 'Tròn dẹt, vỏ trắng / Nhân đậu xanh bùi / Ăn cùng nước đường / Thơm mùi hạt vừng' },
    { tu: 'xoong nồi' }, { tu: 'bà nội' }, { tu: 'mâm cơm' }],
  tuMoi: [['Hàn thực', 'Tết mùng ba tháng ba Âm lịch'], ['bánh trôi', 'bánh viên tròn, nhân đường'], ['bánh chay', 'bánh tròn dẹt, nhân đậu xanh'], ['bột nếp', 'bột xay từ gạo nếp'],
    ['vê tròn', 'lăn trong lòng bàn tay cho tròn'], ['vớt', 'dùng muôi lấy ra khỏi nước'], ['tổ tiên', 'ông bà, cha ông từ xưa'], ['nhớ nguồn', 'nhớ nơi mình sinh ra, nhớ ơn người trước']],
  tuKho: ['Hàn thực', 'bánh trôi', 'bột nếp', 'vê tròn', 'vớt', 'nhớ nguồn'],
  doan: [
    { text: 'Mùng ba tháng ba Âm lịch là Tết Hàn thực. Các gia đình làm bánh trôi, bánh chay cúng tổ tiên. Người đi xa cũng về sum họp. Đó là uống nước nhớ nguồn.',
      hoi: [{ q: 'Tết Hàn thực là ngày nào?', dung: 'Mùng ba tháng ba Âm lịch.', sai: ['Mùng năm tháng năm.', 'Rằm tháng tám.'] },
            { q: 'Ngày này các gia đình làm bánh gì?', dung: 'Bánh trôi, bánh chay.', sai: ['Bánh chưng, bánh giầy.', 'Bánh nướng, bánh dẻo.'] }] },
    { text: 'Bánh trôi làm từ bột nếp, viên tròn, vỏ trắng, nhân đường. Bánh chay tròn dẹt, nhân đậu xanh, ăn cùng nước đường. Khi ăn, rắc thêm hạt vừng.',
      hoi: [{ q: 'Nhân bánh trôi làm từ gì?', dung: 'Từ đường.', sai: ['Từ thịt.', 'Từ rau.'] },
            { q: 'Bánh chay có hình gì?', dung: 'Tròn dẹt.', sai: ['Hình vuông.', 'Hình sao.'] }] },
    { text: 'Bà dạy em làm bánh trôi. Em chia bột thành từng phần nhỏ, ấn dẹt, đặt viên đường vào giữa rồi vê tròn. Bà thả bánh vào nồi nước sôi, bánh nổi lên thì vớt ra.',
      hoi: [{ q: 'Đặt viên đường xong, em làm gì?', dung: 'Vê tròn.', sai: ['Ăn luôn.', 'Rắc muối.'] },
            { q: 'Khi nào thì vớt bánh ra?', dung: 'Khi bánh nổi lên.', sai: ['Khi vừa thả vào.', 'Khi nồi nguội.'] }] }
  ],
  hieu: [
    { q: 'Vì sao làm bánh cúng tổ tiên?', dung: 'Để nhớ ơn tổ tiên, uống nước nhớ nguồn.', sai: ['Để bán lấy tiền.', 'Để chơi trò chơi.'] },
    { q: 'Bánh nào có nhân đậu xanh?', dung: 'Bánh chay.', sai: ['Bánh trôi.', 'Bánh mì.'] },
    { q: 'Bánh trôi, bánh chay được làm từ gì?', dung: 'Bột nếp.', sai: ['Bột mì.', 'Bột sắn.'] }
  ],
  thuTu: ['Chia bột thành từng phần nhỏ.', 'Ấn dẹt, đặt viên đường vào giữa.', 'Vê tròn viên bánh.', 'Thả vào nồi, bánh nổi thì vớt ra.'],
  cau: { mau: 'Cái gì thế nào?', nhan: ['Cái gì?', 'thế nào?'], ds: ['Bánh trôi|tròn xinh.', 'Bánh chay|tròn dẹt.', 'Nhân đậu xanh|bùi bùi.', 'Nước đường|ngọt thơm.'] },
  dien: [
    { cau: 'Mùng ba tháng ba Âm lịch là Tết ___ thực.', dung: 'Hàn', sai: ['Trung', 'Đoan'] },
    { cau: 'Bánh trôi làm từ bột ___.', dung: 'nếp', sai: ['mì', 'ngô'] },
    { cau: 'Bánh chay nhân đậu ___.', dung: 'xanh', sai: ['đỏ', 'đen'] },
    { cau: 'Em đặt viên đường vào giữa rồi ___ tròn.', dung: 'vê', sai: ['vẽ', 'về'] },
    { cau: 'Bánh nổi lên thì ___ ra.', dung: 'vớt', sai: ['vứt', 'vót'] }
  ],
  to: ['bánh trôi', 'bánh chay', 'nhớ nguồn'],
  noi: ['Em đã ăn bánh trôi, bánh chay chưa?', 'Kể lại cách làm bánh trôi.', 'Nhà em làm gì để nhớ ơn tổ tiên?'],
  viet: ['Tết Hàn thực là', 'Bánh trôi có', 'Bánh chay có', 'Em cùng bà']
};
docSetup();
