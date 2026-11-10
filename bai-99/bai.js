/* Bài 99 · Tết Dương lịch — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: ngày 1 tháng 1, đếm ngược, pháo hoa, lời chúc, tờ lịch mới, điều hứa năm mới.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Năm mới, em hứa làm điều tốt mỗi ngày.',
  khoi: [{ tu: 'tờ lịch' }, { tu: 'đồng hồ' }, { tu: 'bóng bay' }, { tu: 'thiệp mời', cau: 'Em viết thiệp chúc mừng năm mới.' },
    { tu: 'pháo hoa', do: 'Bay lên trời cao / Nở bung bừng sáng / Đỏ, vàng, xanh, tím / Đón chào năm mới' }],
  tuMoi: [['Dương lịch', 'lịch tính theo mặt trời, năm mới bắt đầu ngày 1 tháng 1'], ['giao thừa', 'lúc năm cũ hết, năm mới đến'], ['đếm ngược', 'đếm từ số lớn về số nhỏ'], ['pháo hoa', 'pháo bắn lên trời thành hình hoa sáng'],
    ['tờ lịch', 'tờ giấy ghi ngày tháng'], ['lời chúc', 'câu nói mong điều tốt cho người khác'], ['điều hứa', 'việc mình hứa sẽ làm'], ['quý thời gian', 'không để phí thời giờ']],
  tuKho: ['Dương lịch', 'giao thừa', 'đếm ngược', 'pháo hoa', 'lời chúc', 'quý thời gian'],
  doan: [
    { text: 'Ngày 1 tháng 1 là Tết Dương lịch. Đêm giao thừa, mọi người cùng đếm ngược: mười, chín, tám… một! Pháo hoa bay lên sáng rực bầu trời.',
      hoi: [{ q: 'Tết Dương lịch là ngày nào?', dung: 'Ngày 1 tháng 1.', sai: ['Ngày 25 tháng 12.', 'Rằm tháng tám.'] },
            { q: 'Đêm giao thừa, mọi người làm gì?', dung: 'Cùng đếm ngược.', sai: ['Đi ngủ sớm.', 'Đi học.'] }] },
    { text: 'Sáng hôm sau, bố treo cuốn lịch mới. Em bóc tờ lịch đầu tiên. Em gửi lời chúc tới ông bà, bố mẹ: “Chúc mừng năm mới! Chúc cả nhà mạnh khỏe!”.',
      hoi: [{ q: 'Bố treo gì?', dung: 'Cuốn lịch mới.', sai: ['Đèn ông sao.', 'Cây thông.'] },
            { q: 'Em chúc ông bà điều gì?', dung: 'Chúc cả nhà mạnh khỏe.', sai: ['Chúc ngủ ngon.', 'Chúc đi đường bình an.'] }] },
    { text: 'Năm mới, em viết điều hứa vào sổ. Em hứa quý thời gian, dậy sớm, tự gấp chăn và chăm học tiếng Việt.',
      hoi: [{ q: 'Em viết điều hứa vào đâu?', dung: 'Vào sổ.', sai: ['Lên tường.', 'Lên bàn.'] },
            { q: 'Em hứa điều gì?', dung: 'Dậy sớm, tự gấp chăn, chăm học.', sai: ['Ngủ thật muộn.', 'Chơi điện thoại cả ngày.'] }] }
  ],
  hieu: [
    { q: 'Giao thừa là lúc nào?', dung: 'Lúc năm cũ hết, năm mới đến.', sai: ['Lúc ăn trưa.', 'Lúc đi học về.'] },
    { q: '“Quý thời gian” nghĩa là gì?', dung: 'Không để phí thời giờ.', sai: ['Mua nhiều đồng hồ.', 'Ngủ thật nhiều.'] },
    { q: 'Tết Dương lịch khác Tết Nguyên đán thế nào?', dung: 'Tết Dương lịch là ngày 1 tháng 1.', sai: ['Tết Dương lịch có bánh chưng.', 'Hai Tết là một ngày.'] }
  ],
  thuTu: ['Mọi người cùng đếm ngược.', 'Pháo hoa bay lên sáng rực.', 'Bố treo cuốn lịch mới.', 'Em viết điều hứa vào sổ.'],
  cau: { mau: 'Lời chúc', ds: ['Chúc mừng|năm mới!', 'Chúc ông bà|mạnh khỏe!', 'Chúc bố mẹ|vui vẻ!', 'Chúc các bạn|học giỏi!'] },
  dien: [
    { cau: 'Ngày 1 tháng 1 là Tết ___ lịch.', dung: 'Dương', sai: ['Âm', 'Mới'] },
    { cau: 'Mọi người cùng đếm ___.', dung: 'ngược', sai: ['xuôi', 'sao'] },
    { cau: 'Pháo ___ bay lên sáng rực bầu trời.', dung: 'hoa', sai: ['lá', 'đèn'] },
    { cau: 'Chúc mừng năm ___!', dung: 'mới', sai: ['cũ', 'xa'] },
    { cau: 'Em hứa quý thời ___.', dung: 'gian', sai: ['tiết', 'giờ'] }
  ],
  to: ['năm mới', 'lời chúc', 'tờ lịch'],
  noi: ['Đêm giao thừa, nhà em làm gì?', 'Em chúc mừng năm mới ông bà thế nào?', 'Năm mới, em hứa điều gì?'],
  viet: ['Tết Dương lịch là', 'Em chúc', 'Năm mới, em hứa', 'Em sẽ']
};
docSetup();
