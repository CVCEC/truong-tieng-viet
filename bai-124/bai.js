/* Bài 124 · Sinh vật biển — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: cá, tôm, cua, mực, bạch tuộc, cá heo, rùa biển; rác nhựa hại sinh vật biển.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Giữ biển sạch để sinh vật biển sống vui.',
  khoi: [{ tu: 'cá mập' }, { tu: 'bạch tuộc' }, { tu: 'cua bể' }, { tu: 'cá đuối' }, { tu: 'tôm hùm' }],
  tuMoi: [['sinh vật', 'những thứ có sự sống: con vật, cây cối'], ['đại dương', 'biển rất rộng, rất lớn'], ['xúc tu', 'những cái chân dài, mềm của bạch tuộc, mực'], ['càng', 'đôi kẹp to của cua, tôm'],
    ['cá heo', 'loài sống ở biển, thông minh, thân thiện'], ['rùa biển', 'rùa lớn sống ở biển'], ['rác nhựa', 'túi, chai, hộp bằng nhựa vứt đi'], ['san hô', 'loài sống dưới biển, nhiều màu như cây']],
  tuKho: ['sinh vật', 'đại dương', 'xúc tu', 'cá heo', 'rác nhựa', 'san hô'],
  doan: [
    { text: 'Dưới đại dương có rất nhiều sinh vật. Cá bơi lượn giữa rặng san hô nhiều màu. Cua có hai càng to, bò ngang. Tôm hùm có râu dài.',
      hoi: [{ q: 'Cá bơi lượn ở đâu?', dung: 'Giữa rặng san hô.', sai: ['Trên cây.', 'Trong sa mạc.'] },
            { q: 'Cua bò thế nào?', dung: 'Bò ngang.', sai: ['Bò thẳng.', 'Bay lên.'] }] },
    { text: 'Bạch tuộc có tám xúc tu. Cá heo thông minh, thân thiện, thích nhảy lên khỏi mặt nước. Rùa biển bơi rất xa và sống rất lâu.',
      hoi: [{ q: 'Bạch tuộc có mấy xúc tu?', dung: 'Tám xúc tu.', sai: ['Hai xúc tu.', 'Mười hai xúc tu.'] },
            { q: 'Cá heo thế nào?', dung: 'Thông minh, thân thiện.', sai: ['Dữ tợn, lười biếng.', 'Chậm chạp.'] }] },
    { text: 'Rác nhựa trôi ra biển làm hại sinh vật. Rùa biển tưởng túi nhựa là thức ăn nên ăn phải. Em không vứt rác ở bãi biển và dùng ít đồ nhựa.',
      hoi: [{ q: 'Rác nhựa làm gì?', dung: 'Làm hại sinh vật biển.', sai: ['Làm biển đẹp hơn.', 'Làm cá lớn nhanh.'] },
            { q: 'Em làm gì để bảo vệ biển?', dung: 'Không vứt rác ở bãi biển.', sai: ['Vứt chai nhựa xuống biển.', 'Bắt rùa về nuôi.'] }] }
  ],
  hieu: [
    { q: 'Vì sao rùa biển ăn phải túi nhựa?', dung: 'Vì tưởng túi nhựa là thức ăn.', sai: ['Vì túi nhựa ngon.', 'Vì rùa thích chơi.'] },
    { q: 'Con nào có hai càng to?', dung: 'Con cua.', sai: ['Cá heo.', 'Rùa biển.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Giữ biển sạch, dùng ít đồ nhựa.', sai: ['Đi biển thật nhiều.', 'Ăn thật nhiều hải sản.'] }
  ],
  thuTu: ['Em đi chơi ở bãi biển.', 'Em ăn xong, gom rác vào túi.', 'Em bỏ rác vào thùng.', 'Bãi biển sạch đẹp.'],
  cau: { mau: 'Con gì có gì?', nhan: ['Con gì?', 'có', 'gì?'], ds: ['Bạch tuộc|có|tám xúc tu.', 'Con cua|có|hai càng to.', 'Tôm hùm|có|râu dài.', 'Cá|có|vây và đuôi.'] },
  dien: [
    { cau: 'Cá bơi lượn giữa rặng san ___.', dung: 'hô', sai: ['sò', 'hồ'] },
    { cau: 'Cua có hai ___ to, bò ngang.', dung: 'càng', sai: ['cánh', 'cành'] },
    { cau: 'Bạch tuộc có tám ___ tu.', dung: 'xúc', sai: ['súc', 'tua'] },
    { cau: 'Cá ___ thông minh, thân thiện.', dung: 'heo', sai: ['mập', 'vàng'] },
    { cau: 'Rác ___ trôi ra biển làm hại sinh vật.', dung: 'nhựa', sai: ['vàng', 'xanh'] }
  ],
  to: ['đại dương', 'cá heo', 'san hô'],
  noi: ['Kể tên những con vật sống ở biển mà em biết.', 'Em thích con vật biển nào nhất?', 'Em làm gì để giữ biển sạch?'],
  viet: ['Dưới biển có', 'Con vật biển em thích là', 'Rác nhựa làm', 'Em sẽ']
};
docSetup();
