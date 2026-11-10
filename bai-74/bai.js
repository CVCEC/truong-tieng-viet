/* Bài 74 · Quà của bố — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js, tranh ở chung/tranh.js
   Sửa so với slide: slide không có chữ bài thơ Lên Tám, dùng bài thơ ở Bài 71; từ khởi động "bố" đổi thành "hải đăng" (có trong bài, dễ vẽ);
   đáp án chọn ý do Trâu Con soạn theo bài; tranh không vẽ lá cờ (giữ nguyên câu chữ trong bài đọc). */
const DOC = {
  y: 'Tình cảm gia đình và lòng biết ơn người chiến sĩ biển đảo.',
  khoi: [
    { tu: 'hải quân' },
    { tu: 'biển đảo' },
    { tu: 'hải đăng' },
    { tu: 'lá thư' },
    { tu: 'món quà', tranh: 'quà' }
  ],
  tuMoi: [['hải quân', 'lực lượng làm nhiệm vụ trên biển'], ['biển đảo', 'biển và các đảo của đất nước'], ['đồng đội', 'những người cùng đơn vị'], ['ca gác', 'thời gian làm nhiệm vụ canh giữ'],
    ['nhắn nhủ', 'gửi lời dặn hoặc lời yêu thương'], ['mong ngóng', 'chờ đợi với nhiều tình cảm'], ['vững vàng', 'chắc chắn, không nao núng'], ['tự hào', 'vui và hãnh diện về điều tốt đẹp']],
  tuKho: ['hải quân', 'biển đảo', 'đồng đội', 'ca gác', 'nhắn nhủ', 'vững vàng'],
  doan: [
    { text: 'Bố em là bộ đội hải quân, công tác ở một hòn đảo xa. Mỗi ngày, bố cùng đồng đội quan sát biển trời và giữ gìn vùng biển của Tổ quốc.',
      hoi: [{ q: 'Bố của bạn nhỏ làm công việc gì?', dung: 'Bố là bộ đội hải quân.', sai: ['Bố là kĩ sư.', 'Bố là thầy giáo.'] },
            { q: 'Bố công tác ở đâu?', dung: 'Ở một hòn đảo xa.', sai: ['Ở trạm y tế xã.', 'Ở trường học.'] }] },
    { text: 'Một hôm, em nhận được thư bố. Trong thư, bố kể về ngọn hải đăng, sóng biển và những ca gác đêm. Bố còn gửi tặng em một tấm bưu thiếp có hình lá cờ đỏ sao vàng.',
      hoi: [{ q: 'Bố kể những gì trong thư?', dung: 'Ngọn hải đăng, sóng biển, những ca gác đêm.', sai: ['Vườn nho và con cáo.', 'Trường học và bạn bè.'] },
            { q: 'Bố gửi tặng em món quà nào?', dung: 'Một tấm bưu thiếp.', sai: ['Một con búp bê.', 'Một hộp bút màu.'] }] },
    { text: 'Em nâng niu món quà và đọc thư nhiều lần. Em hiểu rằng món quà quý nhất là tình yêu của bố và lời nhắn: chăm ngoan, học tốt, biết giúp đỡ mẹ.',
      hoi: [{ q: 'Em làm gì với món quà?', dung: 'Em nâng niu món quà và đọc thư nhiều lần.', sai: ['Em cất món quà đi và quên mất.', 'Em đem món quà cho bạn.'] },
            { q: 'Bố nhắn em điều gì?', dung: 'Chăm ngoan, học tốt, biết giúp đỡ mẹ.', sai: ['Đi chơi thật nhiều.', 'Thức thật khuya.'] }] }
  ],
  hieu: [
    { q: 'Vì sao món quà rất quý?', dung: 'Vì món quà có tình yêu của bố.', sai: ['Vì món quà rất đắt tiền.', 'Vì món quà rất to.'] },
    { q: 'Bạn nhỏ sẽ làm gì để bố vui?', dung: 'Chăm ngoan, học tốt, giúp đỡ mẹ.', sai: ['Chỉ chơi đồ chơi.', 'Không đọc thư của bố.'] },
    { q: 'Bài đọc nói về điều gì?', dung: 'Tình cảm của bố con và người chiến sĩ biển đảo.', sai: ['Một chuyến đi chơi biển.', 'Cách làm bưu thiếp.'] }
  ],
  thuTu: ['Bố em là bộ đội hải quân, công tác ở một hòn đảo xa.', 'Một hôm, em nhận được thư bố.', 'Bố gửi tặng em một tấm bưu thiếp.', 'Em nâng niu món quà và đọc thư nhiều lần.'],
  cau: { mau: 'Ai là gì? · Ai làm gì?', ds: ['Bố em|là|bộ đội hải quân.', 'Em|nâng niu|món quà.', 'Bố|kể về|ngọn hải đăng.', 'Em|đọc|thư bố nhiều lần.'] },
  dien: [
    { cau: 'Bố em là bộ đội ___.', dung: 'hải quân', sai: ['kĩ sư', 'y tá'] },
    { cau: 'Mỗi ngày, bố cùng ___ quan sát biển trời.', dung: 'đồng đội', sai: ['con cáo', 'con quạ'] },
    { cau: 'Trong thư, bố kể về ngọn ___ và sóng biển.', dung: 'hải đăng', sai: ['núi', 'cây'] },
    { cau: 'Em ___ món quà và đọc thư nhiều lần.', dung: 'nâng niu', sai: ['vứt bỏ', 'quên mất'] },
    { cau: 'Món quà quý nhất là ___ của bố.', dung: 'tình yêu', sai: ['tiền', 'xe đạp'] }
  ],
  to: ['bố', 'quà', 'biển'],
  noi: ['Giới thiệu công việc của một người thân.', 'Nói lời cảm ơn với bố hoặc mẹ.', 'Kể về một món quà có ý nghĩa với em.'],
  viet: ['Người em muốn viết là', 'Người ấy thường', 'Em nhớ nhất', 'Em muốn nói']
};
docSetup();
