/* Bài 83 · Giỗ Tổ Hùng Vương — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng (không đọc được chữ); Trâu Con soạn ngắn gọn theo chủ đề: 10/3 Âm lịch, đền Hùng ở Phú Thọ,
   “Dù ai đi ngược về xuôi…”, Lạc Long Quân – Âu Cơ, bánh chưng bánh giầy. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Uống nước nhớ nguồn, nhớ ơn tổ tiên.',
  khoi: [{ tu: 'bánh chưng' }, { tu: 'đồi núi' }, { tu: 'con thuyền', do: 'Không chân mà lướt trên sông / Chở người, chở cá xuôi dòng ra khơi' }, { tu: 'trứng gà', do: 'Tròn tròn, vỏ trắng mỏng manh / Gà mẹ ấp ủ thành bầy gà con' }, { tu: 'lá cờ', do: 'Gió thổi bay phấp phới / Trên cột cao giữa sân / Mỗi sáng thứ hai đến / Cả trường đứng nghiêm chào' }],
  tuMoi: [['giỗ tổ', 'ngày nhớ ơn tổ tiên'], ['tổ tiên', 'ông bà, cha ông từ xưa'], ['vua Hùng', 'những vị vua đầu tiên dựng nước'], ['dựng nước', 'lập nên đất nước'],
    ['đền', 'nơi thờ cúng người có công'], ['đồng bào', 'người cùng một nước, cùng một nhà'], ['nguồn cội', 'nơi mình sinh ra từ xưa'], ['dâng hương', 'thắp hương để tỏ lòng nhớ ơn']],
  tuKho: ['giỗ tổ', 'tổ tiên', 'dựng nước', 'đồng bào', 'nguồn cội', 'dâng hương'],
  doan: [
    { text: 'Ngày mùng mười tháng ba Âm lịch là ngày Giỗ Tổ Hùng Vương. Đây là ngày người Việt nhớ ơn các vua Hùng đã có công dựng nước.',
      hoi: [{ q: 'Giỗ Tổ Hùng Vương là ngày nào?', dung: 'Mùng mười tháng ba Âm lịch.', sai: ['Mùng một Tết.', 'Rằm tháng tám.'] },
            { q: 'Người Việt nhớ ơn ai vào ngày này?', dung: 'Các vua Hùng.', sai: ['Ông già Noel.', 'Chú Cuội.'] }] },
    { text: 'Chuyện xưa kể Lạc Long Quân và Âu Cơ sinh ra một bọc trăm trứng. Trăm trứng nở thành trăm người con. Vì thế, người Việt gọi nhau là đồng bào.',
      hoi: [{ q: 'Bọc trứng nở ra bao nhiêu người con?', dung: 'Một trăm người con.', sai: ['Mười người con.', 'Hai người con.'] },
            { q: 'Người Việt gọi nhau là gì?', dung: 'Đồng bào.', sai: ['Người lạ.', 'Khách quý.'] }] },
    { text: 'Đền Hùng ở trên núi, tỉnh Phú Thọ. Ngày giỗ tổ, mọi người về đền dâng hương. Ở xa, các gia đình cũng nhớ về nguồn cội, nhớ ơn tổ tiên.',
      hoi: [{ q: 'Đền Hùng ở đâu?', dung: 'Trên núi, tỉnh Phú Thọ.', sai: ['Dưới biển.', 'Ở trong chợ.'] },
            { q: 'Ngày giỗ tổ, mọi người làm gì?', dung: 'Về đền dâng hương.', sai: ['Đi xem phim.', 'Đi bơi.'] }] }
  ],
  hieu: [
    { q: 'Vì sao có ngày Giỗ Tổ Hùng Vương?', dung: 'Để nhớ ơn các vua Hùng dựng nước.', sai: ['Để ăn bánh kẹo.', 'Để nghỉ hè.'] },
    { q: 'Vì sao người Việt gọi nhau là đồng bào?', dung: 'Vì cùng sinh ra từ một bọc trứng.', sai: ['Vì cùng đi học.', 'Vì cùng thích ăn phở.'] },
    { q: 'Câu nào nói đúng ý bài?', dung: 'Uống nước nhớ nguồn.', sai: ['Ăn no rồi ngủ.', 'Đi đâu cũng được.'] }
  ],
  thuTu: ['Lạc Long Quân và Âu Cơ sinh ra bọc trăm trứng.', 'Trăm trứng nở thành trăm người con.', 'Các vua Hùng có công dựng nước.', 'Ngày giỗ tổ, mọi người về đền dâng hương.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Mọi người|dâng|hương.', 'Bà|gói|bánh chưng.', 'Em|nhớ ơn|tổ tiên.', 'Cả nhà|về|đền Hùng.'] },
  dien: [
    { cau: 'Giỗ Tổ Hùng Vương là ngày mùng ___ tháng ba Âm lịch.', dung: 'mười', sai: ['một', 'năm'] },
    { cau: 'Các vua Hùng có công dựng ___.', dung: 'nước', sai: ['nhà', 'xe'] },
    { cau: 'Bọc trăm ___ nở thành trăm người con.', dung: 'trứng', sai: ['hoa', 'quả'] },
    { cau: 'Người Việt gọi nhau là đồng ___.', dung: 'bào', sai: ['hồ', 'ruộng'] },
    { cau: 'Mọi người về đền dâng ___.', dung: 'hương', sai: ['bánh', 'nước'] }
  ],
  to: ['giỗ tổ', 'đồng bào', 'tổ tiên'],
  noi: ['Giỗ Tổ Hùng Vương là ngày nào?', 'Em biết chuyện bọc trăm trứng không? Kể lại nhé.', 'Em nhớ ơn ông bà, tổ tiên thế nào?'],
  viet: ['Ngày giỗ tổ là', 'Các vua Hùng', 'Người Việt gọi nhau là', 'Em nhớ ơn']
};
docSetup();
