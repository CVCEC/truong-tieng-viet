/* Bài 106 · Thể thao — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: thể thao nâng cao sức khỏe; môn cá nhân và đồng đội; tên các môn (cầu lông, bóng bàn, cầu mây, cờ tướng, bóng rổ, đá cầu,
   quần vợt, bóng đá, bắn cung…); lợi ích (cơ bắp, xương chắc, tim khỏe, ngủ ngon, ít ốm). Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Chăm chơi thể thao để khỏe mạnh.',
  // Trò chơi đố vui trong slide Bài 106 (các bộ phận cơ thể)
  doVui: [
    { do: 'Cái gì một cặp song sinh / Long lanh, sáng tỏ để nhìn xung quanh?', tu: 'đôi mắt' },
    { do: 'Cái gì chúm chím đáng yêu / Thốt lời chào hỏi, nói điều hay?', tu: 'cái miệng' },
    { do: 'Lắng nghe tiếng mẹ, tiếng cô / Âm thanh, tiếng động nhỏ, to quanh mình', tu: 'cái tai' },
    { do: 'Lúc trẻ mình đen mượt mà / Về già mình trắng, ấy là tôi đây?', tu: 'mái tóc' },
    { do: 'Cái gì tài giỏi lắm thay / Quét nhà giúp mẹ, viết bài, vẽ tranh?', tu: 'bàn tay' }],
  khoi: [{ tu: 'thủ môn' }, { tu: 'tập bơi' }, { tu: 'võ sĩ' }, { tu: 'cử tạ' }, { tu: 'xe đạp' }],
  tuMoi: [['thể thao', 'các môn tập luyện, thi đấu cho khỏe'], ['cá nhân', 'một người tự chơi'], ['đồng đội', 'nhiều người cùng một đội'], ['cầu lông', 'môn đánh quả cầu có lông qua lưới'],
    ['đá cầu', 'môn dùng chân tâng quả cầu'], ['cơ bắp', 'phần thịt chắc giúp ta cử động'], ['đề kháng', 'sức chống lại bệnh'], ['khởi động', 'tập nhẹ trước khi chơi']],
  tuKho: ['thể thao', 'cá nhân', 'đồng đội', 'cầu lông', 'cơ bắp', 'khởi động'],
  doan: [
    { text: 'Thể thao giúp chúng ta khỏe mạnh. Có môn chơi cá nhân như bơi, chạy, cầu lông. Có môn chơi đồng đội như bóng đá, bóng rổ, kéo co.',
      hoi: [{ q: 'Thể thao giúp chúng ta thế nào?', dung: 'Khỏe mạnh.', sai: ['Buồn ngủ.', 'Mệt mỏi cả ngày.'] },
            { q: 'Môn nào chơi đồng đội?', dung: 'Bóng đá.', sai: ['Bơi.', 'Chạy.'] }] },
    { text: 'Người Việt thích đá cầu, cầu lông và cờ tướng. Chơi thể thao làm cơ bắp săn chắc, tim khỏe, ăn ngon và ngủ ngon. Cơ thể tăng sức đề kháng, ít ốm.',
      hoi: [{ q: 'Chơi thể thao làm cơ bắp thế nào?', dung: 'Săn chắc.', sai: ['Mềm nhũn.', 'Yếu đi.'] },
            { q: 'Có sức đề kháng tốt thì sao?', dung: 'Ít ốm.', sai: ['Hay ốm.', 'Không ăn được.'] }] },
    { text: 'Trước khi chơi, em khởi động tay chân. Em chơi đúng luật và không xô đẩy bạn. Thắng không kiêu, thua không buồn, em bắt tay bạn vui vẻ.',
      hoi: [{ q: 'Trước khi chơi, em làm gì?', dung: 'Khởi động tay chân.', sai: ['Ăn thật no.', 'Ngủ một giấc.'] },
            { q: 'Khi thua, em làm gì?', dung: 'Bắt tay bạn vui vẻ.', sai: ['Khóc và bỏ về.', 'Trách bạn.'] }] }
  ],
  hieu: [
    { q: 'Môn nào là môn cá nhân?', dung: 'Bơi.', sai: ['Bóng rổ.', 'Kéo co.'] },
    { q: 'Vì sao phải khởi động trước khi chơi?', dung: 'Để không bị đau, chấn thương.', sai: ['Để mệt hơn.', 'Để đến muộn.'] },
    { q: '“Thắng không kiêu, thua không buồn” nghĩa là gì?', dung: 'Luôn vui vẻ, tôn trọng bạn.', sai: ['Phải thắng bằng mọi giá.', 'Thua thì bỏ chơi.'] }
  ],
  thuTu: ['Em khởi động tay chân.', 'Em chơi đúng luật.', 'Trận đấu kết thúc.', 'Em bắt tay bạn vui vẻ.'],
  cau: { mau: 'Ai chơi môn gì?', nhan: ['Ai?', 'chơi', 'môn gì?'], ds: ['Em|chơi|cầu lông.', 'Anh em|chơi|bóng đá.', 'Ông em|chơi|cờ tướng.', 'Chị em|chơi|bóng rổ.'] },
  dien: [
    { cau: 'Thể ___ giúp chúng ta khỏe mạnh.', dung: 'thao', sai: ['dục', 'chất'] },
    { cau: 'Bóng đá là môn chơi ___ đội.', dung: 'đồng', sai: ['một', 'cá'] },
    { cau: 'Người Việt thích đá ___.', dung: 'cầu', sai: ['bóng', 'chân'] },
    { cau: 'Trước khi chơi, em ___ động tay chân.', dung: 'khởi', sai: ['vận', 'cử'] },
    { cau: 'Em chơi đúng ___ và không xô đẩy bạn.', dung: 'luật', sai: ['giờ', 'lúc'] }
  ],
  to: ['thể thao', 'cầu lông', 'đá cầu'],
  noi: ['Em thích môn thể thao nào?', 'Làm động tác một môn thể thao để các bạn đoán.', 'Chơi thể thao giúp em điều gì?'],
  viet: ['Môn thể thao em thích là', 'Em chơi cùng', 'Chơi thể thao giúp em', 'Khi chơi, em nhớ']
};
docSetup();
