/* Ôn tập số 9 · Bài 52–56: uôi, uôm, uôc, uôt, uôn, uông, ươi, ươu, ươc, ươt — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 9 (52-56)”: đoàn tàu vần, từ phân loại theo bài, câu luyện đọc và đoạn văn ra đồng với ông.
   Sửa theo nguyên tắc chỉ dùng vần đã học: “bé Phương” → “bé Thư”; “ra vườn” → “ra đồng”; “một đường thẳng” → “một nét thẳng”.
   Không dùng “rượu” (bài cho trẻ em), thay bằng “khướu”. Đoạn văn chia thành 3 đoạn; câu hỏi trắc nghiệm do Trâu Con soạn. */
const DOC = {
  nhom: [
    { bai: 52, chu: ['uôi', 'uôm'], tu: ['chuối', 'suối', 'buồm', 'nhuộm'] },
    { bai: 53, chu: ['uôc', 'uôt'], tu: ['cuốc', 'thuốc', 'chuột', 'tuốt'] },
    { bai: 54, chu: ['uôn', 'uông'], tu: ['cuộn', 'chuông', 'uống', 'muốn'] },
    { bai: 55, chu: ['ươi', 'ươu'], tu: ['tươi', 'bưởi', 'hươu', 'khướu'] },
    { bai: 56, chu: ['ươc', 'ươt'], tu: ['nước', 'thước', 'trượt', 'lướt'] }
  ],
  y: 'Đọc rõ âm chính đôi uô, ươ và âm cuối của từng vần.',
  khoi: [{ tu: 'buồng chuối' }, { tu: 'cái cuốc' }, { tu: 'con chuột' }, { tu: 'quả bưởi' }, { tu: 'con hươu' }],
  tuMoi: [['buồng chuối', 'chùm chuối lớn trên cây'], ['thuyền buồm', 'thuyền có cánh buồm căng gió'], ['nhuộm vải', 'làm cho vải đổi màu'], ['cái cuốc', 'đồ dùng để xới đất'],
    ['tuốt lá', 'vuốt cho lá rời ra'], ['cuộn chiếu', 'chiếc chiếu cuộn tròn lại'], ['xới đất', 'làm cho đất tơi ra'], ['leng keng', 'tiếng chuông nhỏ kêu vui tai']],
  tuKho: ['dòng suối', 'thuyền buồm', 'lọ thuốc', 'rau tươi', 'cốc nước', 'cái thước'],
  doan: [
    { text: 'Buổi sáng, bé Thư theo ông ra đồng. Ông dùng cuốc xới đất, còn bé tuốt lá khô.',
      hoi: [{ q: 'Bé Thư theo ai ra đồng?', dung: 'Theo ông.', sai: ['Theo bà.', 'Theo mẹ.'] },
            { q: 'Ông dùng gì để xới đất?', dung: 'Dùng cuốc.', sai: ['Dùng thước.', 'Dùng chuông.'] }] },
    { text: 'Bên bờ suối có đàn hươu đang uống nước. Thuyền buồm lướt trên mặt nước.',
      hoi: [{ q: 'Đàn hươu đang làm gì?', dung: 'Đang uống nước.', sai: ['Đang ăn chuối.', 'Đang trượt cỏ.'] },
            { q: 'Cái gì lướt trên mặt nước?', dung: 'Thuyền buồm.', sai: ['Con chuột.', 'Quả bưởi.'] }] },
    { text: 'Trở về nhà, bà mời hai ông cháu ăn bưởi và chuối chín. Tiếng chuông gió kêu leng keng ngoài hiên.',
      hoi: [{ q: 'Bà mời hai ông cháu ăn gì?', dung: 'Bưởi và chuối chín.', sai: ['Rau tươi.', 'Cơm và cá.'] },
            { q: 'Cái gì kêu leng keng ngoài hiên?', dung: 'Chuông gió.', sai: ['Đàn hươu.', 'Cái cuốc.'] }] }
  ],
  hieu: [
    { q: 'Đoạn văn kể về ai?', dung: 'Bé Thư và ông bà.', sai: ['Đàn hươu đi học.', 'Chú chuột nhỏ.'] },
    { q: 'Tiếng nào có vần “ươu”?', dung: 'hươu', sai: ['bưởi', 'nước'] },
    { q: 'Tiếng nào có vần “uôt”?', dung: 'chuột', sai: ['cuốc', 'chuối'] }
  ],
  thuTu: ['Bé Thư theo ông ra đồng.', 'Ông xới đất, bé tuốt lá khô.', 'Hai ông cháu trở về nhà.', 'Bà mời ông cháu ăn bưởi và chuối.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bà|dùng cuốc|xới đất.', 'Mẹ|mua|rau tươi.', 'Bé|dùng thước|kẻ một nét thẳng.', 'Đàn hươu|uống|nước.'] },
  dien: [
    { cau: 'Buồng chuối chín bên dòng ___.', dung: 'suối', sai: ['sưởi', 'suốt'] },
    { cau: 'Thuyền ___ lướt trên mặt nước.', dung: 'buồm', sai: ['buồn', 'bưởi'] },
    { cau: 'Chú ___ chạy qua cuộn chiếu.', dung: 'chuột', sai: ['chuối', 'chuông'] },
    { cau: 'Mẹ mua rau ___ và quả bưởi.', dung: 'tươi', sai: ['tuổi', 'tước'] },
    { cau: 'Bé dùng ___ kẻ một nét thẳng.', dung: 'thước', sai: ['thuốc', 'thuở'] }
  ],
  to: ['chuối', 'quả bưởi', 'con hươu'],
  noi: ['Em đã ra đồng với ông bà chưa?', 'Em thích ăn bưởi hay chuối?', 'Nói một câu có tiếng “nước”.'],
  viet: ['Ông dùng', 'Đàn hươu', 'Bà mời', 'Mẹ mua']
};
docSetup();
