/* Ôn tập số 2 · Bài 10–21: 11 phụ âm ghép (ch, gh, gi, kh, ng, ngh, nh, ph, qu, th, tr) — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 2 (10-21)”: đoàn tàu phụ âm ghép, phân biệt ch–tr–th, g–gh–gi, ng–ngh, trò “đưa toa về đúng ga”,
   cụm từ, câu luyện đọc và đoạn “Buổi sáng cùng bà” với 5 câu hỏi. Đoạn văn chia thành 3 đoạn; câu trả lời trắc nghiệm do Trâu Con soạn. */
const DOC = {
  loai: 'âm',
  nhom: [
    { chu: ['ch'], tu: ['chó', 'chăn', 'chợ', 'chổi'] },
    { chu: ['tr'], tu: ['tre', 'trăng', 'tranh', 'trò'] },
    { chu: ['th'], tu: ['thỏ', 'thơ', 'thợ', 'thơm'] },
    { chu: ['g'], tu: ['gà', 'gỗ', 'gừng'] },
    { chu: ['gh'], tu: ['ghe', 'ghế', 'ghi'] },
    { chu: ['gi'], tu: ['gió', 'giỏ', 'gia đình'] },
    { chu: ['ng'], tu: ['ngô', 'ngủ', 'ngà'] },
    { chu: ['ngh'], tu: ['nghe', 'nghề', 'nghỉ'] },
    { chu: ['kh'], tu: ['khế', 'khỉ'] },
    { chu: ['nh'], tu: ['nhà', 'nhổ'] },
    { chu: ['ph'], tu: ['phở', 'phố'] },
    { chu: ['qu'], tu: ['quạ', 'quê'] }
  ],
  y: 'Nhớ nhé: e, ê, i đi cùng gh và ngh.',
  khoi: [{ tu: 'gia đình' }, { tu: 'khế' }, { tu: 'thỏ' }, { tu: 'phở bò' }, { tu: 'ghế gỗ' }],
  tuMoi: [['chợ', 'nơi mọi người đến mua bán'], ['khế', 'quả có múi, vị chua'], ['ngô', 'cây có bắp, hạt vàng'], ['bó hoa', 'nhiều bông hoa buộc lại với nhau'],
    ['ghế gỗ', 'cái ghế làm bằng gỗ'], ['trò chuyện', 'nói với nhau vui vẻ'], ['hàng tre', 'nhiều cây tre mọc thành hàng'], ['chủ nhật', 'ngày nghỉ cuối tuần']],
  tuKho: ['nghe kể', 'nhà ngói', 'quạ đen', 'khế chua', 'tre xanh', 'thỏ trắng'],
  doan: [
    { text: 'Sáng chủ nhật, Nghĩa theo bà ra chợ. Trên đường, em nghe gió thổi qua hàng tre.',
      hoi: [{ q: 'Ai theo bà ra chợ?', dung: 'Nghĩa theo bà ra chợ.', sai: ['Mẹ theo bà ra chợ.', 'Chú chó theo bà.'] },
            { q: 'Nghĩa nghe thấy gì?', dung: 'Gió thổi qua hàng tre.', sai: ['Bà kể chuyện.', 'Quạ kêu trên mái nhà.'] }] },
    { text: 'Chú chó nhỏ chạy quanh nhà. Bà mua khế, ngô và một bó hoa.',
      hoi: [{ q: 'Chú chó nhỏ chạy ở đâu?', dung: 'Chạy quanh nhà.', sai: ['Chạy ra chợ.', 'Chạy qua hàng tre.'] },
            { q: 'Bà mua những gì?', dung: 'Khế, ngô và một bó hoa.', sai: ['Phở, cá và thỏ.', 'Ghế gỗ và chăn.'] }] },
    { text: 'Về nhà, mẹ nấu phở. Cả nhà ngồi bên chiếc ghế gỗ, vui vẻ trò chuyện.',
      hoi: [{ q: 'Mẹ nấu món gì?', dung: 'Mẹ nấu phở.', sai: ['Mẹ nấu ngô.', 'Mẹ nấu cá.'] },
            { q: 'Cả nhà làm gì bên chiếc ghế gỗ?', dung: 'Vui vẻ trò chuyện.', sai: ['Ngủ trưa.', 'Đi chợ.'] }] }
  ],
  hieu: [
    { q: 'Bài đọc tên là gì?', dung: 'Buổi sáng cùng bà.', sai: ['Đi học cùng mẹ.', 'Chú chó nhỏ.'] },
    { q: 'Tiếng nào viết đúng?', dung: 'nghe', sai: ['nge', 'ngie'] },
    { q: 'Chữ nào đứng trước e, ê, i?', dung: 'gh', sai: ['g', 'gi'] }
  ],
  thuTu: ['Nghĩa theo bà ra chợ.', 'Bà mua khế, ngô và một bó hoa.', 'Về nhà, mẹ nấu phở.', 'Cả nhà vui vẻ trò chuyện.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Mẹ|nấu|phở.', 'Bé|nghe bà|kể chuyện.', 'Thỏ|ăn|lá.', 'Bà|mua|khế.'] },
  dien: [
    { cau: 'Chó chạy quanh ___.', dung: 'nhà', sai: ['phở', 'khế'] },
    { cau: 'Bé ___ bà kể chuyện.', dung: 'nghe', sai: ['ghế', 'ngô'] },
    { cau: 'Gió thổi qua hàng ___.', dung: 'tre', sai: ['chó', 'thỏ'] },
    { cau: 'Quạ đậu trên mái ___.', dung: 'nhà', sai: ['phố', 'gỗ'] },
    { cau: 'Mẹ nấu ___.', dung: 'phở', sai: ['quạ', 'ghế'] }
  ],
  to: ['nghe', 'nhà', 'phở'],
  noi: ['Em đã đi chợ với ai?', 'Em thích ăn món gì mẹ nấu?', 'Nói một câu có từ “khế”, “ngô” hoặc “thỏ”.'],
  viet: ['Mẹ nấu', 'Bé nghe', 'Chó chạy', 'Bà mua']
};
docSetup();
