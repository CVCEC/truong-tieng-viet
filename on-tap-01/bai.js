/* Ôn tập số 1 · Bài 1–9: chữ cái, nguyên âm, phụ âm, phụ âm ghép, sáu thanh — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 1 (1-9)”: ba đoàn tàu (12 nguyên âm, 17 phụ âm, 11 phụ âm ghép), trò “đưa toa về đúng đoàn tàu”,
   từ nhìn tranh, câu luyện đọc và đoạn văn “Một buổi sáng ở nhà” với 4 câu hỏi. Đoạn văn chia thành 3 đoạn; câu trả lời trắc nghiệm do Trâu Con soạn. */
const DOC = {
  loai: 'chữ',
  nhom: [
    { ten: 'Nguyên âm', chu: ['a', 'ă', 'â', 'e', 'ê', 'i', 'o', 'ô', 'ơ', 'u', 'ư', 'y'], tu: ['a', 'ê', 'i', 'o', 'ư', 'y', 'ơ', 'u'] },
    { ten: 'Phụ âm', chu: ['b', 'c', 'd', 'đ', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x'], tu: ['b', 'c', 'đ', 'h', 'm', 't', 'l', 'v'] },
    { ten: 'Phụ âm ghép', chu: ['ch', 'gh', 'gi', 'kh', 'ng', 'ngh', 'nh', 'ph', 'qu', 'th', 'tr'], tu: ['ch', 'kh', 'nh', 'ph', 'th', 'tr', 'ng', 'gh'] }
  ],
  y: 'Âm chính luôn luôn có mặt trong mỗi tiếng.',
  khoi: [{ tu: 'khế' }, { tu: 'thỏ' }, { tu: 'tre' }, { tu: 'phở bò' }, { tu: 'ghế gỗ' }],
  tuMoi: [['khế', 'quả có múi, vị chua'], ['tre', 'cây thân thẳng, có đốt'], ['đò', 'thuyền nhỏ chở người qua sông'], ['ngô', 'cây có bắp, hạt vàng'],
    ['quạ', 'con chim lông đen'], ['phở', 'món bánh nước của Việt Nam'], ['hiên nhà', 'chỗ có mái ở trước nhà'], ['xào xạc', 'tiếng lá cây va vào nhau']],
  tuKho: ['nhà nhỏ', 'gió nhẹ', 'khế chua', 'quạ đen', 'thỏ trắng', 'tre xanh'],
  doan: [
    { text: 'Sáng nay, bà gọi bé Hà dậy. Bé chào bà rồi ra sân.',
      hoi: [{ q: 'Ai gọi bé Hà dậy?', dung: 'Bà gọi bé Hà dậy.', sai: ['Ba gọi bé Hà dậy.', 'Chú chó gọi bé dậy.'] },
            { q: 'Bé chào bà rồi đi đâu?', dung: 'Bé ra sân.', sai: ['Bé đi ngủ.', 'Bé đi đò.'] }] },
    { text: 'Gió nhẹ thổi qua hàng tre. Chú chó nhỏ chạy theo bé.',
      hoi: [{ q: 'Gió thổi qua đâu?', dung: 'Gió thổi qua hàng tre.', sai: ['Gió thổi qua bờ hồ.', 'Gió thổi qua lớp học.'] },
            { q: 'Con vật nào chạy theo bé?', dung: 'Chú chó nhỏ.', sai: ['Chú thỏ trắng.', 'Con quạ đen.'] }] },
    { text: 'Ba đặt ghế ở hiên nhà. Cả nhà cùng ăn phở.',
      hoi: [{ q: 'Ba đặt ghế ở đâu?', dung: 'Ở hiên nhà.', sai: ['Ở bờ hồ.', 'Ở sân trường.'] },
            { q: 'Cả nhà cùng ăn món gì?', dung: 'Cả nhà ăn phở.', sai: ['Cả nhà ăn cá.', 'Cả nhà ăn ngô.'] }] }
  ],
  hieu: [
    { q: 'Bài đọc kể về lúc nào?', dung: 'Một buổi sáng ở nhà.', sai: ['Một buổi tối ở lớp.', 'Một buổi chiều ở chợ.'] },
    { q: 'Tiếng nào có phụ âm ghép “nh”?', dung: 'nhà', sai: ['bà', 'phở'] },
    { q: 'Tiếng “em” thiếu phần nào?', dung: 'Thiếu âm đầu.', sai: ['Thiếu âm chính.', 'Không thiếu gì.'] }
  ],
  thuTu: ['Bà gọi bé Hà dậy.', 'Bé chào bà rồi ra sân.', 'Chú chó nhỏ chạy theo bé.', 'Cả nhà cùng ăn phở.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bé|ăn|cá.', 'Bà|có|áo đỏ.', 'Ba và bé|đi|bộ.', 'Bé Hà|có|chú thỏ trắng.'] },
  dien: [
    { cau: 'Bà có áo ___.', dung: 'đỏ', sai: ['bộ', 'cá'] },
    { cau: 'Bé ăn ___.', dung: 'cá', sai: ['ghế', 'tre'] },
    { cau: 'Ba và bé đi ___.', dung: 'bộ', sai: ['đỏ', 'thỏ'] },
    { cau: 'Gió thổi lá ___ xào xạc.', dung: 'tre', sai: ['khế', 'cờ'] },
    { cau: 'Bà để bó ___ ở trên bàn.', dung: 'hoa', sai: ['dê', 'ngô'] }
  ],
  to: ['bà', 'cá', 'nhà'],
  noi: ['Buổi sáng, em chào ai?', 'Nhà em có con vật gì?', 'Em thích ăn món gì?'],
  viet: ['Bé ăn', 'Bà có', 'Ba và bé', 'Gió thổi']
};
docSetup();
