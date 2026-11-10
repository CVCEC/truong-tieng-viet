/* Bài 104 · Văn hóa dân gian — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: trò chơi dân gian (nhảy dây, kéo co, ô ăn quan, rồng rắn lên mây, thả diều),
   múa rối nước, tranh Đông Hồ. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Giữ gìn trò chơi, nghệ thuật của ông cha.',
  khoi: [{ tu: 'nhảy dây' }, { tu: 'con diều' }, { tu: 'chong chóng' },
    { tu: 'kéo co', do: 'Hai đội hai đầu / Cùng nắm sợi dây / Hò dô thật khỏe / Đội nào kéo được?' },
    { tu: 'con rối', do: 'Không biết đi, chẳng biết bơi / Nhờ người giật dây mới chơi trên hồ' }],
  tuMoi: [['dân gian', 'của nhân dân, truyền từ xưa'], ['ô ăn quan', 'trò chơi rải sỏi vào các ô vẽ trên đất'], ['kéo co', 'hai đội thi kéo một sợi dây'], ['đồng đội', 'những người cùng một đội'],
    ['múa rối nước', 'nghệ thuật cho con rối diễn trên mặt nước'], ['tranh Đông Hồ', 'tranh dân gian in trên giấy dó'], ['nghệ nhân', 'người làm nghề rất giỏi'], ['giữ gìn', 'bảo vệ cho còn mãi']],
  tuKho: ['dân gian', 'ô ăn quan', 'đồng đội', 'múa rối nước', 'nghệ nhân', 'giữ gìn'],
  doan: [
    { text: 'Ông bà ta có nhiều trò chơi dân gian. Các bạn nhỏ chơi nhảy dây, ô ăn quan, rồng rắn lên mây. Ngày hè, các bạn thả diều trên đê.',
      hoi: [{ q: 'Kể tên một trò chơi dân gian.', dung: 'Ô ăn quan.', sai: ['Trò chơi điện tử.', 'Xem phim hoạt hình.'] },
            { q: 'Ngày hè, các bạn thả gì trên đê?', dung: 'Thả diều.', sai: ['Thả cá.', 'Thả bóng bay.'] }] },
    { text: 'Trò kéo co cần cả đội. Mọi người nắm chặt sợi dây và cùng kéo. Đội nào đoàn kết, kéo đều tay sẽ thắng. Kéo co dạy em tinh thần đồng đội.',
      hoi: [{ q: 'Đội nào sẽ thắng kéo co?', dung: 'Đội đoàn kết, kéo đều tay.', sai: ['Đội có ít người.', 'Đội đứng yên.'] },
            { q: 'Kéo co dạy em điều gì?', dung: 'Tinh thần đồng đội.', sai: ['Chơi một mình.', 'Tranh giành.'] }] },
    { text: 'Múa rối nước là nghệ thuật độc đáo của Việt Nam. Nghệ nhân đứng sau tấm mành, điều khiển con rối múa trên mặt nước. Tranh Đông Hồ có màu sắc tươi vui. Em cùng giữ gìn những nét đẹp ấy.',
      hoi: [{ q: 'Con rối múa ở đâu?', dung: 'Trên mặt nước.', sai: ['Trên cây.', 'Trên mây.'] },
            { q: 'Ai điều khiển con rối?', dung: 'Nghệ nhân.', sai: ['Khán giả.', 'Con mèo.'] }] }
  ],
  hieu: [
    { q: 'Vì sao gọi là trò chơi dân gian?', dung: 'Vì ông bà truyền lại từ xưa.', sai: ['Vì mới có hôm qua.', 'Vì chơi trên điện thoại.'] },
    { q: 'Nghệ thuật nào là của Việt Nam?', dung: 'Múa rối nước.', sai: ['Nặn người tuyết.', 'Khắc bí ngô.'] },
    { q: 'Em làm gì để giữ gìn trò chơi dân gian?', dung: 'Rủ bạn cùng chơi và dạy em nhỏ.', sai: ['Quên hết đi.', 'Chỉ chơi điện tử.'] }
  ],
  thuTu: ['Hai đội đứng hai đầu sợi dây.', 'Mọi người nắm chặt sợi dây.', 'Cả đội cùng kéo đều tay.', 'Đội đoàn kết đã thắng.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Các bạn|chơi|ô ăn quan.', 'Em|thả|diều trên đê.', 'Cả đội|kéo|sợi dây.', 'Nghệ nhân|điều khiển|con rối.'] },
  dien: [
    { cau: 'Ông bà ta có nhiều trò chơi dân ___.', dung: 'gian', sai: ['tộc', 'ca'] },
    { cau: 'Các bạn nhỏ chơi ô ăn ___.', dung: 'quan', sai: ['cơm', 'quả'] },
    { cau: 'Đội nào ___ kết, kéo đều tay sẽ thắng.', dung: 'đoàn', sai: ['đơn', 'tan'] },
    { cau: 'Múa rối ___ là nghệ thuật độc đáo của Việt Nam.', dung: 'nước', sai: ['cạn', 'gió'] },
    { cau: 'Tranh Đông ___ có màu sắc tươi vui.', dung: 'Hồ', sai: ['Hà', 'Sơn'] }
  ],
  to: ['dân gian', 'kéo co', 'thả diều'],
  noi: ['Em biết chơi trò chơi dân gian nào?', 'Hướng dẫn các bạn chơi một trò chơi.', 'Em đã xem múa rối nước chưa?'],
  viet: ['Trò chơi em thích là', 'Cách chơi là', 'Khi chơi, em', 'Em sẽ rủ']
};
docSetup();
