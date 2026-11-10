/* Bài 132 · Giấc ngủ — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: trẻ cần ngủ khoảng 9–11 tiếng mỗi đêm, đi ngủ đúng giờ, tắt màn hình trước khi ngủ,
   đánh răng, chúc ngủ ngon, dậy sớm. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Ngủ đủ giấc, dậy đúng giờ để khỏe và học tốt.',
  khoi: [{ tu: 'giường ngủ' }, { tu: 'đắp chăn' }, { tu: 'ngủ mơ' }, { tu: 'ru ngủ' }, { tu: 'đồng hồ' }],
  tuMoi: [['giấc ngủ', 'thời gian mình ngủ'], ['đủ giấc', 'ngủ đủ thời gian cơ thể cần'], ['đúng giờ', 'không sớm, không muộn'], ['màn hình', 'mặt ti vi, điện thoại, máy tính'],
    ['ngủ ngon', 'ngủ say, dễ chịu'], ['thức khuya', 'không ngủ khi đã đêm muộn'], ['uể oải', 'mệt mỏi, không muốn làm gì'], ['tỉnh táo', 'sáng suốt, không buồn ngủ']],
  tuKho: ['giấc ngủ', 'đủ giấc', 'màn hình', 'thức khuya', 'uể oải', 'tỉnh táo'],
  doan: [
    { text: 'Giấc ngủ rất quan trọng. Trẻ em cần ngủ đủ giấc, khoảng mười tiếng mỗi đêm. Ngủ đủ giấc giúp em cao lớn, khỏe mạnh và học tốt.',
      hoi: [{ q: 'Trẻ em cần ngủ khoảng bao lâu mỗi đêm?', dung: 'Khoảng mười tiếng.', sai: ['Một tiếng.', 'Không cần ngủ.'] },
            { q: 'Ngủ đủ giấc giúp em thế nào?', dung: 'Cao lớn, khỏe mạnh, học tốt.', sai: ['Mệt mỏi.', 'Hay quên.'] }] },
    { text: 'Trước khi ngủ, em tắt màn hình ti vi và điện thoại. Em đánh răng, đi vệ sinh rồi chúc bố mẹ ngủ ngon. Em lên giường đắp chăn đúng giờ.',
      hoi: [{ q: 'Trước khi ngủ, em tắt gì?', dung: 'Màn hình ti vi và điện thoại.', sai: ['Tắt quạt của bà.', 'Không tắt gì.'] },
            { q: 'Em chúc bố mẹ điều gì?', dung: 'Ngủ ngon.', sai: ['Chúc mừng năm mới.', 'Tạm biệt.'] }] },
    { text: 'Nếu thức khuya, sáng hôm sau em sẽ uể oải, ngáp ngắn ngáp dài. Ngủ sớm thì sáng ra em dậy sớm, tỉnh táo và vui vẻ đến trường.',
      hoi: [{ q: 'Nếu thức khuya, sáng hôm sau em thế nào?', dung: 'Uể oải, ngáp ngắn ngáp dài.', sai: ['Rất tỉnh táo.', 'Chạy nhanh hơn.'] },
            { q: 'Ngủ sớm thì sáng ra em thế nào?', dung: 'Dậy sớm, tỉnh táo, vui vẻ.', sai: ['Mệt mỏi.', 'Đi học muộn.'] }] }
  ],
  hieu: [
    { q: 'Vì sao phải tắt màn hình trước khi ngủ?', dung: 'Để dễ ngủ và ngủ ngon.', sai: ['Để tiết kiệm nước.', 'Vì màn hình bẩn.'] },
    { q: 'Thói quen nào không tốt?', dung: 'Thức khuya.', sai: ['Đánh răng trước khi ngủ.', 'Đi ngủ đúng giờ.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Ngủ đủ giấc, đúng giờ.', sai: ['Ngủ càng ít càng tốt.', 'Thức khuya xem phim.'] }
  ],
  thuTu: ['Em tắt màn hình ti vi.', 'Em đánh răng, đi vệ sinh.', 'Em chúc bố mẹ ngủ ngon.', 'Em lên giường đắp chăn.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Em|tắt|ti vi.', 'Em|đánh|răng.', 'Em|đắp|chăn.', 'Mẹ|ru|em bé ngủ.'] },
  dien: [
    { cau: 'Trẻ em cần ngủ đủ ___.', dung: 'giấc', sai: ['bữa', 'giờ'] },
    { cau: 'Trước khi ngủ, em tắt màn ___.', dung: 'hình', sai: ['cửa', 'tre'] },
    { cau: 'Em chúc bố mẹ ngủ ___.', dung: 'ngon', sai: ['muộn', 'khuya'] },
    { cau: 'Nếu thức ___, sáng hôm sau em sẽ uể oải.', dung: 'khuya', sai: ['sớm', 'dậy'] },
    { cau: 'Ngủ sớm thì sáng ra em dậy sớm, tỉnh ___.', dung: 'táo', sai: ['tảo', 'táp'] }
  ],
  to: ['giấc ngủ', 'ngủ ngon', 'đủ giấc'],
  noi: ['Em thường đi ngủ lúc mấy giờ?', 'Trước khi ngủ, em làm những gì?', 'Thức khuya có hại gì?'],
  viet: ['Em đi ngủ lúc', 'Trước khi ngủ, em', 'Em không', 'Ngủ đủ giấc giúp em']
};
docSetup();
