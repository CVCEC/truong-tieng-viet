/* Bài 90 · Ngày thành lập Quân đội nhân dân Việt Nam — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: ngày 22 tháng 12 năm 1944, đội đầu tiên có 34 chiến sĩ; “bộ đội Cụ Hồ”.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Nhớ ơn những người bảo vệ quê hương.',
  khoi: [{ tu: 'huân chương' }, { tu: 'rừng cây' }, { tu: 'tuần tra' }, { tu: 'hải quân' }, { tu: 'thiệp mời', cau: 'Em làm thiệp tặng chú bộ đội.' }],
  tuMoi: [['thành lập', 'lập ra, bắt đầu có'], ['chiến sĩ', 'người lính'], ['quân đội', 'tất cả các chú bộ đội'], ['nhân dân', 'tất cả mọi người dân'],
    ['khu rừng', 'nơi có rất nhiều cây'], ['bảo vệ', 'giữ gìn cho an toàn'], ['bình yên', 'yên ổn, không có chiến tranh'], ['tặng quà', 'trao món quà cho người khác']],
  tuKho: ['thành lập', 'chiến sĩ', 'quân đội', 'nhân dân', 'bảo vệ', 'bình yên'],
  doan: [
    { text: 'Ngày 22 tháng 12 năm 1944, đội quân đầu tiên được thành lập trong một khu rừng. Đội chỉ có 34 chiến sĩ. Từ đó, quân đội ngày càng lớn mạnh.',
      hoi: [{ q: 'Đội quân đầu tiên được thành lập ngày nào?', dung: 'Ngày 22 tháng 12 năm 1944.', sai: ['Ngày 1 tháng 6.', 'Ngày 20 tháng 11.'] },
            { q: 'Đội quân đầu tiên có bao nhiêu chiến sĩ?', dung: '34 chiến sĩ.', sai: ['Một trăm chiến sĩ.', 'Năm chiến sĩ.'] }] },
    { text: 'Quân đội nhân dân Việt Nam được gọi thân thương là bộ đội Cụ Hồ. Các chú yêu nhân dân và luôn sẵn sàng bảo vệ đất nước.',
      hoi: [{ q: 'Quân đội được gọi thân thương là gì?', dung: 'Bộ đội Cụ Hồ.', sai: ['Đội bóng.', 'Đội văn nghệ.'] },
            { q: 'Các chú luôn sẵn sàng làm gì?', dung: 'Bảo vệ đất nước.', sai: ['Đi du lịch.', 'Đi mua sắm.'] }] },
    { text: 'Ngày 22 tháng 12, các bạn nhỏ làm thiệp, hát và tặng quà các chú. Nhờ các chú, mọi người được sống bình yên.',
      hoi: [{ q: 'Ngày 22 tháng 12, các bạn nhỏ làm gì?', dung: 'Làm thiệp, hát và tặng quà các chú.', sai: ['Đi ngủ sớm.', 'Đi bơi.'] },
            { q: 'Nhờ các chú, mọi người được sống thế nào?', dung: 'Bình yên.', sai: ['Ồn ào.', 'Buồn bã.'] }] }
  ],
  hieu: [
    { q: 'Đội quân đầu tiên được thành lập ở đâu?', dung: 'Trong một khu rừng.', sai: ['Trên một chiếc tàu.', 'Trong thành phố lớn.'] },
    { q: 'Vì sao các bạn nhỏ tặng quà các chú?', dung: 'Để cảm ơn các chú bảo vệ đất nước.', sai: ['Vì các chú đòi quà.', 'Vì hôm đó là Tết.'] },
    { q: 'Bài đọc muốn nói điều gì?', dung: 'Nhớ ơn các chú bộ đội.', sai: ['Đi rừng rất vui.', 'Quà càng to càng tốt.'] }
  ],
  thuTu: ['Đội quân đầu tiên được thành lập năm 1944.', 'Đội chỉ có 34 chiến sĩ.', 'Quân đội ngày càng lớn mạnh.', 'Ngày nay, các bạn nhỏ tặng quà các chú.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Các chú|bảo vệ|đất nước.', 'Em|làm|thiệp.', 'Các bạn|hát|tặng các chú.', 'Cả lớp|tặng|quà các chú.'] },
  dien: [
    { cau: 'Đội quân đầu tiên được thành lập trong một khu ___.', dung: 'rừng', sai: ['chợ', 'vườn'] },
    { cau: 'Đội chỉ có 34 ___ sĩ.', dung: 'chiến', sai: ['bác', 'ca'] },
    { cau: 'Quân đội được gọi thân thương là bộ đội ___ Hồ.', dung: 'Cụ', sai: ['Chú', 'Bà'] },
    { cau: 'Các chú luôn sẵn sàng bảo vệ đất ___.', dung: 'nước', sai: ['cát', 'sét'] },
    { cau: 'Nhờ các chú, mọi người được sống bình ___.', dung: 'yên', sai: ['minh', 'an'] }
  ],
  to: ['chiến sĩ', 'quân đội', 'bình yên'],
  noi: ['Quân đội nhân dân Việt Nam thành lập ngày nào?', 'Em sẽ làm gì tặng các chú bộ đội?', 'Vì sao em biết ơn các chú?'],
  viet: ['Ngày 22 tháng 12', 'Các chú bộ đội', 'Em làm thiệp', 'Em cảm ơn các chú vì']
};
docSetup();
