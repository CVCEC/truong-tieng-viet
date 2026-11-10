/* Bài 97 · Lễ Halloween — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: khởi động (quả bí ngô, con nhện, màu cam, con dơi), ngày 31 tháng 10, hóa trang, đèn bí ngô, “Halloween thân thiện”:
   thật thà, không dọa người khác sợ, giữ lời hứa, làm quà tặng ông bà. Câu đố nhện, dơi lấy từ slide.
   Bỏ phần ma quỷ, điềm gở cho hợp lứa tuổi. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Vui chơi thân thiện, thật thà và tử tế.',
  khoi: [{ tu: 'bí ngô' }, { tu: 'con dơi' },
    { tu: 'con nhện', do: 'Thân thì nhỏ, chân thì dài / Chẳng phải tằm cũng miệt mài nhả tơ' },
    { tu: 'màu cam', do: 'Màu của quả bí ngô / Màu của quả cam chín / Là màu gì đây?' },
    { tu: 'cái kẹo' }],
  tuMoi: [['Halloween', 'lễ hội ngày 31 tháng 10 ở phương Tây'], ['hóa trang', 'mặc đồ, vẽ mặt thành nhân vật khác'], ['bí ngô', 'quả to, vỏ màu cam'], ['khắc', 'dùng dao cắt thành hình'],
    ['thân thiện', 'gần gũi, dễ mến'], ['thật thà', 'không nói dối'], ['dọa', 'làm cho người khác sợ'], ['lời hứa', 'điều mình nói sẽ làm']],
  tuKho: ['Halloween', 'hóa trang', 'bí ngô', 'thân thiện', 'thật thà', 'lời hứa'],
  doan: [
    { text: 'Halloween là lễ hội ngày 31 tháng 10 của các nước phương Tây. Ở Việt Nam, nhiều bạn nhỏ cũng biết lễ hội này. Màu cam và màu đen là màu của Halloween.',
      hoi: [{ q: 'Halloween là ngày nào?', dung: 'Ngày 31 tháng 10.', sai: ['Ngày 1 tháng 1.', 'Ngày 20 tháng 11.'] },
            { q: 'Màu của Halloween là màu gì?', dung: 'Màu cam và màu đen.', sai: ['Màu hồng và màu trắng.', 'Màu xanh lá.'] }] },
    { text: 'Mọi người khắc quả bí ngô thành đèn. Các bạn nhỏ hóa trang thành con dơi, con mèo hay chú hề. Các bạn đi xin kẹo và cười vui vẻ.',
      hoi: [{ q: 'Mọi người làm đèn bằng gì?', dung: 'Bằng quả bí ngô.', sai: ['Bằng quả dưa hấu.', 'Bằng lá chuối.'] },
            { q: 'Các bạn nhỏ hóa trang thành gì?', dung: 'Con dơi, con mèo, chú hề.', sai: ['Cái bàn.', 'Cái cây.'] }] },
    { text: 'Em chơi Halloween thân thiện. Em không dọa làm bạn sợ, không trêu chọc ai. Em thật thà, giữ lời hứa và làm bánh bí ngô tặng ông bà.',
      hoi: [{ q: 'Chơi Halloween thân thiện là thế nào?', dung: 'Không dọa làm bạn sợ.', sai: ['Dọa bạn thật sợ.', 'Lấy kẹo của bạn.'] },
            { q: 'Em làm gì tặng ông bà?', dung: 'Làm bánh bí ngô.', sai: ['Làm mặt nạ đáng sợ.', 'Không làm gì.'] }] }
  ],
  hieu: [
    { q: 'Halloween là lễ hội của nơi nào?', dung: 'Các nước phương Tây.', sai: ['Chỉ ở Việt Nam.', 'Ở dưới biển.'] },
    { q: 'Câu chuyện cậu bé Jack dạy em điều gì?', dung: 'Thật thà và giữ lời hứa.', sai: ['Lừa người khác.', 'Ham chơi, lười học.'] },
    { q: 'Theo em, việc nào nên làm?', dung: 'Chia kẹo cho bạn.', sai: ['Dọa em bé khóc.', 'Giành kẹo của bạn.'] }
  ],
  thuTu: ['Mọi người khắc bí ngô thành đèn.', 'Các bạn nhỏ hóa trang.', 'Các bạn đi xin kẹo.', 'Em làm bánh bí ngô tặng ông bà.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bố|khắc|quả bí ngô.', 'Em|hóa trang|thành con mèo.', 'Bạn Lan|chia|kẹo cho em.', 'Em|làm|bánh bí ngô.'] },
  dien: [
    { cau: 'Halloween là ngày 31 tháng ___.', dung: 'mười', sai: ['một', 'sáu'] },
    { cau: 'Mọi người khắc quả bí ___ thành đèn.', dung: 'ngô', sai: ['đao', 'xanh'] },
    { cau: 'Các bạn nhỏ hóa ___ thành con dơi.', dung: 'trang', sai: ['đẹp', 'học'] },
    { cau: 'Em không ___ làm bạn sợ.', dung: 'dọa', sai: ['giúp', 'chào'] },
    { cau: 'Em thật thà và giữ lời ___.', dung: 'hứa', sai: ['hát', 'hỏi'] }
  ],
  to: ['bí ngô', 'thật thà', 'thân thiện'],
  noi: ['Em muốn hóa trang thành gì?', 'Thế nào là chơi Halloween thân thiện?', 'Em đã bao giờ giữ đúng lời hứa chưa? Kể lại nhé.'],
  viet: ['Halloween là ngày', 'Em hóa trang thành', 'Em sẽ không', 'Em sẽ giữ lời hứa']
};
docSetup();
