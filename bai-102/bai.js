/* Bài 102 · Tết Nguyên đán — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: mùng một Tết, mặc áo mới, chúc Tết ông bà, nhận lì xì, đi chùa, “Mùng một Tết cha, mùng hai Tết mẹ, mùng ba Tết thầy”.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Tết là dịp sum họp và nhớ ơn ông bà, cha mẹ, thầy cô.',
  khoi: [{ tu: 'lì xì' }, { tu: 'áo mới' }, { tu: 'ngày tết' }, { tu: 'bánh chưng' }, { tu: 'chùa' }],
  tuMoi: [['Nguyên đán', 'Tết đầu năm theo lịch Âm'], ['mùng một', 'ngày đầu tiên của tháng Âm lịch'], ['chúc Tết', 'nói lời chúc năm mới'], ['lì xì', 'phong bao đỏ có tiền mừng tuổi'],
    ['mừng tuổi', 'chúc thêm một tuổi mới'], ['xông đất', 'người đầu tiên đến nhà năm mới'], ['sum họp', 'cả nhà quây quần bên nhau'], ['hái lộc', 'hái cành non đầu năm lấy may']],
  tuKho: ['Nguyên đán', 'mùng một', 'chúc Tết', 'mừng tuổi', 'sum họp', 'hái lộc'],
  doan: [
    { text: 'Tết Nguyên đán là Tết lớn nhất của người Việt. Ai đi xa cũng mong về nhà sum họp. Sáng mùng một, em mặc áo mới thật đẹp. Bác hàng xóm đến xông đất, chúc cả nhà năm mới vui vẻ.',
      hoi: [{ q: 'Tết Nguyên đán là Tết thế nào?', dung: 'Tết lớn nhất của người Việt.', sai: ['Tết của thiếu nhi.', 'Tết của phương Tây.'] },
            { q: 'Sáng mùng một, em mặc gì?', dung: 'Áo mới.', sai: ['Áo mưa.', 'Đồ bơi.'] }] },
    { text: 'Em khoanh tay chúc Tết ông bà: “Cháu chúc ông bà sống lâu, mạnh khỏe!”. Ông bà cười hiền, mừng tuổi em một phong lì xì đỏ.',
      hoi: [{ q: 'Em chúc ông bà thế nào?', dung: 'Sống lâu, mạnh khỏe.', sai: ['Học giỏi.', 'Chạy nhanh.'] },
            { q: 'Ông bà mừng tuổi em gì?', dung: 'Phong lì xì đỏ.', sai: ['Quả bóng.', 'Con búp bê.'] }] },
    { text: 'Người xưa nói: “Mùng một Tết cha, mùng hai Tết mẹ, mùng ba Tết thầy”. Cả nhà đi thăm họ hàng, thầy cô. Đi chùa, em hái lộc đầu năm.',
      hoi: [{ q: 'Mùng ba Tết, mọi người thăm ai?', dung: 'Thăm thầy cô.', sai: ['Thăm bạn mới.', 'Thăm người lạ.'] },
            { q: 'Đi chùa, em làm gì?', dung: 'Hái lộc đầu năm.', sai: ['Chạy nhảy ồn ào.', 'Nặn người tuyết.'] }] }
  ],
  hieu: [
    { q: 'Câu “Mùng một Tết cha, mùng hai Tết mẹ, mùng ba Tết thầy” dạy em điều gì?', dung: 'Nhớ ơn cha mẹ và thầy cô.', sai: ['Ăn thật nhiều bánh.', 'Ngủ đến mùng ba.'] },
    { q: 'Vì sao người đi xa mong về nhà dịp Tết?', dung: 'Để sum họp cùng gia đình.', sai: ['Để đi học.', 'Để mua sắm.'] },
    { q: 'Khi nhận lì xì, em nói gì?', dung: '“Cháu cảm ơn ông bà ạ!”', sai: ['“Ít quá!”', 'Không nói gì.'] }
  ],
  thuTu: ['Sáng mùng một, em mặc áo mới.', 'Em chúc Tết ông bà.', 'Ông bà mừng tuổi em.', 'Mùng ba, cả nhà đi thăm thầy cô.'],
  cau: { mau: 'Lời chúc Tết', ds: ['Cháu chúc|ông bà|sống lâu.', 'Con chúc|bố mẹ|mạnh khỏe.', 'Em chúc|cô giáo|vui vẻ.', 'Chúc mừng|năm mới!'] },
  dien: [
    { cau: 'Tết Nguyên ___ là Tết lớn nhất của người Việt.', dung: 'đán', sai: ['tiêu', 'sinh'] },
    { cau: 'Sáng mùng một, em mặc áo ___.', dung: 'mới', sai: ['mưa', 'cũ'] },
    { cau: 'Ông bà mừng ___ em một phong lì xì đỏ.', dung: 'tuổi', sai: ['năm', 'nhà'] },
    { cau: 'Mùng một Tết cha, mùng hai Tết mẹ, mùng ba Tết ___.', dung: 'thầy', sai: ['bạn', 'cô'] },
    { cau: 'Đi chùa, em hái ___ đầu năm.', dung: 'lộc', sai: ['hoa', 'quả'] }
  ],
  to: ['tết', 'lì xì', 'chúc tết'],
  noi: ['Tết nhà em có những món gì?', 'Em chúc Tết ông bà thế nào?', 'Em thích nhất điều gì vào dịp Tết?'],
  viet: ['Tết Nguyên đán là', 'Sáng mùng một, em', 'Em chúc ông bà', 'Em thích Tết vì']
};
docSetup();
