/* Bài 72 · Con cáo và chùm nho — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js, tranh ở chung/tranh.js
   Sửa so với slide: slide không có chữ bài thơ Lên Tám, dùng bài thơ ở Bài 71; câu hỏi chọn ý của slide chỉ có "Ý thứ nhất / Ý thứ hai",
   Trâu Con soạn đáp án theo bài; thêm "ngước nhìn" vào đoạn 1 và "loay hoay" vào đoạn 2 cho khớp từ khóa; mẫu câu "Vì… nên…" có đủ cặp từ. */
const DOC = {
  y: 'Kiên trì và trung thực với cảm xúc của mình.',
  khoi: [
    { tu: 'cáo', tranh: 'con cáo' },
    { tu: 'chùm nho' },
    { tu: 'vườn nho' },
    { tu: 'nhảy', tranh: 'cáo nhảy' },
    { tu: 'bỏ đi', tranh: 'cáo bỏ đi' }
  ],
  tuMoi: [['chín mọng', 'quả đã chín, căng và nhiều nước'], ['ngước nhìn', 'nhìn lên phía trên'], ['lùi lại', 'đi về phía sau'], ['lấy đà', 'chuẩn bị sức để bật lên'],
    ['loay hoay', 'làm mãi mà chưa xong'], ['mệt lả', 'rất mệt, gần hết sức'], ['bực mình', 'khó chịu vì không đạt ý muốn'], ['biện minh', 'tìm lí do để che điều chưa làm được']],
  tuKho: ['chùm nho', 'chín mọng', 'ngước nhìn', 'lấy đà', 'loay hoay', 'biện minh'],
  doan: [
    { text: 'Một con cáo đi ngang qua vườn nho. Nó ngước nhìn và thấy những chùm nho tím chín mọng treo trên giàn cao. Cáo thèm lắm và muốn hái vài quả để ăn.',
      hoi: [{ q: 'Cáo nhìn thấy gì trong vườn?', dung: 'Những chùm nho tím chín mọng.', sai: ['Một cái lọ có ít nước.', 'Những bông hoa vàng.'] },
            { q: 'Cáo muốn làm gì?', dung: 'Hái vài quả nho để ăn.', sai: ['Trồng thêm cây nho.', 'Ngủ dưới giàn nho.'] }] },
    { text: 'Cáo lùi lại, lấy đà rồi bật thật cao. Nó loay hoay thử hết lần này đến lần khác nhưng vẫn không chạm được tới chùm nho. Cáo bắt đầu mệt lả và bực mình.',
      hoi: [{ q: 'Cáo đã làm gì để lấy nho?', dung: 'Lùi lại, lấy đà rồi bật thật cao.', sai: ['Leo lên cây.', 'Nhờ bạn hái giúp.'] },
            { q: 'Cáo có lấy được nho không?', dung: 'Không, cáo không chạm được tới chùm nho.', sai: ['Có, cáo hái được nhiều nho.', 'Có, cáo hái được một quả.'] }] },
    { text: 'Cuối cùng, cáo bỏ đi và nói: “Nho còn xanh lắm!” Thật ra, nho đã chín. Cáo nói vậy chỉ để tự an ủi vì mình không lấy được nho.',
      hoi: [{ q: 'Khi bỏ đi, cáo nói gì?', dung: '“Nho còn xanh lắm!”', sai: ['“Nho ngọt quá!”', '“Mình sẽ quay lại.”'] },
            { q: 'Nho đã chín chưa?', dung: 'Nho đã chín.', sai: ['Nho còn xanh.', 'Nho đã rụng hết.'] }] }
  ],
  hieu: [
    { q: 'Vì sao cáo bỏ đi?', dung: 'Vì cáo không lấy được nho.', sai: ['Vì nho còn xanh.', 'Vì cáo đã ăn no.'] },
    { q: 'Câu “Nho còn xanh lắm” có đúng không?', dung: 'Không đúng, vì nho đã chín.', sai: ['Đúng, vì nho chưa chín.', 'Đúng, vì cáo đã ăn thử.'] },
    { q: 'Em rút ra bài học gì?', dung: 'Hãy kiên trì và nói thật lòng mình.', sai: ['Gặp việc khó thì bỏ đi.', 'Chưa làm được thì chê là xấu.'] }
  ],
  thuTu: ['Một con cáo đi ngang qua vườn nho.', 'Cáo ngước nhìn và thấy những chùm nho chín mọng.', 'Cáo lùi lại, lấy đà rồi bật thật cao.', 'Cáo bỏ đi và nói: “Nho còn xanh lắm!”'],
  cau: { mau: 'Vì… nên…', nhan: ['Vì…', 'nên', '…'], ds: ['Vì nho chín mọng|nên|cáo rất thèm.', 'Vì giàn nho quá cao|nên|cáo không hái được.', 'Vì không lấy được nho|nên|cáo bỏ đi.'] },
  dien: [
    { cau: 'Một con cáo đi ngang qua ___ nho.', dung: 'vườn', sai: ['quả', 'lá'] },
    { cau: 'Những chùm nho tím ___ treo trên giàn cao.', dung: 'chín mọng', sai: ['xanh lè', 'khô héo'] },
    { cau: 'Cáo lùi lại, ___ rồi bật thật cao.', dung: 'lấy đà', sai: ['đi ngủ', 'ngồi xuống'] },
    { cau: 'Cáo bắt đầu ___ và bực mình.', dung: 'mệt lả', sai: ['vui vẻ', 'no nê'] },
    { cau: 'Thật ra, nho đã ___.', dung: 'chín', sai: ['xanh', 'hỏng'] }
  ],
  to: ['cáo', 'nho', 'chín'],
  noi: ['Nếu là cáo, em sẽ làm gì?', 'Khi chưa thành công, em nên nói và làm thế nào?', 'Kể một lần em đã cố gắng làm một việc khó.'],
  viet: ['Một lần em gặp việc khó là', 'Em đã thử', 'Kết quả', 'Em học được rằng']
};
docSetup();
