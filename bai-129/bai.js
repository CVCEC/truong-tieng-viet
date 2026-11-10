/* Bài 129 · Áo dài Việt Nam — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: áo dài là trang phục truyền thống, có hai tà, mặc dịp Tết, lễ, đám cưới;
   nữ sinh mặc áo dài trắng; nam cũng mặc áo dài; giữ áo sạch, gọn. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Áo dài là nét đẹp truyền thống của người Việt.',
  khoi: [{ tu: 'nón lá' }, { tu: 'cúc áo' }, { tu: 'thêu áo' }, { tu: 'áo mới' },
    { tu: 'áo dài', do: 'Áo gì có hai tà / Bay bay trong gió / Ngày Tết mẹ mặc / Duyên dáng, thướt tha' }],
  tuMoi: [['áo dài', 'áo truyền thống của người Việt, có hai tà dài'], ['truyền thống', 'có từ xưa, được giữ đến nay'], ['tà áo', 'phần vạt áo dài phía trước và phía sau'], ['thướt tha', 'mềm mại, duyên dáng'],
    ['trang phục', 'quần áo mặc'], ['nữ sinh', 'học sinh nữ'], ['khăn vấn', 'khăn quấn trên đầu khi mặc áo dài'], ['chỉnh tề', 'gọn gàng, ngay ngắn']],
  tuKho: ['truyền thống', 'tà áo', 'thướt tha', 'trang phục', 'nữ sinh', 'chỉnh tề'],
  doan: [
    { text: 'Áo dài là trang phục truyền thống của người Việt. Áo có hai tà dài, mặc với quần dài. Khi đi, tà áo bay thướt tha trong gió.',
      hoi: [{ q: 'Áo dài là trang phục thế nào?', dung: 'Trang phục truyền thống của người Việt.', sai: ['Đồ bơi.', 'Áo mưa.'] },
            { q: 'Áo dài có mấy tà?', dung: 'Hai tà.', sai: ['Một tà.', 'Năm tà.'] }] },
    { text: 'Ngày Tết, mẹ mặc áo dài đỏ đi chúc Tết. Ông mặc áo dài the, đội khăn vấn. Ở nhiều trường, nữ sinh mặc áo dài trắng đến lớp.',
      hoi: [{ q: 'Ngày Tết, mẹ mặc áo dài màu gì?', dung: 'Màu đỏ.', sai: ['Màu đen.', 'Màu xám.'] },
            { q: 'Nữ sinh mặc áo dài màu gì?', dung: 'Màu trắng.', sai: ['Màu tím than.', 'Màu cam.'] }] },
    { text: 'Em cũng có một chiếc áo dài nhỏ. Mặc áo dài, em cài cúc áo cẩn thận, đứng ngay ngắn, chỉnh tề. Mặc xong, em gấp áo gọn gàng.',
      hoi: [{ q: 'Mặc áo dài, em làm gì?', dung: 'Cài cúc áo cẩn thận, đứng ngay ngắn.', sai: ['Chạy nhảy, lăn lê.', 'Để áo nhàu nát.'] },
            { q: 'Mặc xong, em làm gì với áo?', dung: 'Gấp áo gọn gàng.', sai: ['Vứt áo xuống đất.', 'Lau bàn bằng áo.'] }] }
  ],
  hieu: [
    { q: 'Khi nào mọi người hay mặc áo dài?', dung: 'Dịp Tết, ngày lễ.', sai: ['Khi đi bơi.', 'Khi đá bóng.'] },
    { q: 'Ai mặc được áo dài?', dung: 'Cả nam và nữ.', sai: ['Chỉ em bé.', 'Không ai cả.'] },
    { q: 'Bài đọc muốn nói điều gì?', dung: 'Áo dài là nét đẹp truyền thống.', sai: ['Áo dài khó mặc.', 'Chỉ mặc áo dài khi ngủ.'] }
  ],
  thuTu: ['Mẹ lấy áo dài ra.', 'Em mặc áo, cài cúc áo cẩn thận.', 'Cả nhà đi chúc Tết.', 'Về nhà, em gấp áo gọn gàng.'],
  cau: { mau: 'Ai mặc gì?', nhan: ['Ai?', 'mặc', 'gì?'], ds: ['Mẹ|mặc|áo dài đỏ.', 'Ông|mặc|áo dài the.', 'Chị|mặc|áo dài trắng.', 'Em|mặc|áo dài nhỏ.'] },
  dien: [
    { cau: 'Áo dài là trang phục ___ thống của người Việt.', dung: 'truyền', sai: ['hệ', 'chính'] },
    { cau: 'Áo có hai ___ dài.', dung: 'tà', sai: ['tay', 'cổ'] },
    { cau: 'Tà áo bay ___ tha trong gió.', dung: 'thướt', sai: ['thẳng', 'thường'] },
    { cau: 'Nữ sinh mặc áo dài ___ đến lớp.', dung: 'trắng', sai: ['đen', 'xám'] },
    { cau: 'Em cài ___ áo cẩn thận.', dung: 'cúc', sai: ['cửa', 'cành'] }
  ],
  to: ['áo dài', 'tà áo', 'truyền thống'],
  noi: ['Em đã mặc áo dài chưa? Vào dịp nào?', 'Trong nhà em, ai hay mặc áo dài?', 'Em thích áo dài màu gì?'],
  viet: ['Áo dài là', 'Ngày Tết, mẹ em', 'Em thích áo dài màu', 'Mặc áo dài, em']
};
docSetup();
