/* Bài 110 · Ăn chay — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: món chay (rau, đậu phụ, nấm, trái cây), ăn chay ngày rằm, mùng một, lòng thương muôn loài,
   ăn nhiều rau tốt cho sức khỏe. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Ăn nhiều rau, quả để khỏe mạnh và thương muôn loài.',
  khoi: [{ tu: 'nấm' }, { tu: 'rau cải' }, { tu: 'củ khoai' }, { tu: 'quả chuối' }, { tu: 'cà chua' }],
  tuMoi: [['ăn chay', 'ăn món không có thịt, cá'], ['đậu phụ', 'món làm từ hạt đậu nành, màu trắng, mềm'], ['ngày rằm', 'ngày mười lăm Âm lịch'], ['thanh đạm', 'nhẹ nhàng, ít dầu mỡ'],
    ['muôn loài', 'tất cả các loài vật'], ['chất xơ', 'chất có trong rau giúp bụng khỏe'], ['nhà chùa', 'nơi các sư thầy tu học'], ['tươi ngon', 'mới, ngon']],
  tuKho: ['ăn chay', 'đậu phụ', 'ngày rằm', 'thanh đạm', 'muôn loài', 'chất xơ'],
  doan: [
    { text: 'Ăn chay là ăn món không có thịt, cá. Mâm cơm chay có rau, đậu phụ, nấm và trái cây. Món chay thanh đạm mà vẫn ngon.',
      hoi: [{ q: 'Ăn chay là ăn thế nào?', dung: 'Ăn món không có thịt, cá.', sai: ['Ăn thật nhiều thịt.', 'Không ăn gì cả.'] },
            { q: 'Mâm cơm chay có gì?', dung: 'Rau, đậu phụ, nấm, trái cây.', sai: ['Gà rán, xúc xích.', 'Cá kho, thịt nướng.'] }] },
    { text: 'Ngày rằm và mùng một, bà em thường ăn chay. Bà nói ăn chay là để giữ lòng thương muôn loài. Nhà chùa cũng nấu cơm chay mời mọi người.',
      hoi: [{ q: 'Bà em ăn chay vào ngày nào?', dung: 'Ngày rằm và mùng một.', sai: ['Ngày sinh nhật.', 'Ngày Halloween.'] },
            { q: 'Bà nói ăn chay để làm gì?', dung: 'Để giữ lòng thương muôn loài.', sai: ['Để được nhiều quà.', 'Để đi chơi.'] }] },
    { text: 'Rau và quả có nhiều chất xơ, tốt cho sức khỏe. Hôm nay, em giúp mẹ rửa rau, nhặt nấm. Mẹ nấu canh nấm và đậu phụ sốt cà chua thật tươi ngon.',
      hoi: [{ q: 'Rau và quả có nhiều chất gì?', dung: 'Chất xơ.', sai: ['Chất béo.', 'Đường.'] },
            { q: 'Em giúp mẹ việc gì?', dung: 'Rửa rau, nhặt nấm.', sai: ['Rán thịt.', 'Mổ cá.'] }] }
  ],
  hieu: [
    { q: 'Món nào là món chay?', dung: 'Đậu phụ sốt cà chua.', sai: ['Thịt kho trứng.', 'Cá rán.'] },
    { q: 'Vì sao nên ăn nhiều rau?', dung: 'Vì rau tốt cho sức khỏe.', sai: ['Vì rau đắt tiền.', 'Vì rau ngọt như kẹo.'] },
    { q: '“Thanh đạm” nghĩa là gì?', dung: 'Nhẹ nhàng, ít dầu mỡ.', sai: ['Rất cay.', 'Rất nhiều thịt.'] }
  ],
  thuTu: ['Em rửa rau, nhặt nấm.', 'Mẹ nấu canh nấm.', 'Mẹ làm đậu phụ sốt cà chua.', 'Cả nhà ăn cơm chay.'],
  cau: { mau: 'Cái gì thế nào?', nhan: ['Cái gì?', 'thế nào?'], ds: ['Đậu phụ|mềm mịn.', 'Canh nấm|ngọt thanh.', 'Rau cải|xanh mướt.', 'Quả chuối|vàng ươm.'] },
  dien: [
    { cau: 'Ăn ___ là ăn món không có thịt, cá.', dung: 'chay', sai: ['no', 'vội'] },
    { cau: 'Mâm cơm chay có rau, đậu ___ và nấm.', dung: 'phụ', sai: ['xanh', 'đỏ'] },
    { cau: 'Ngày ___ và mùng một, bà em ăn chay.', dung: 'rằm', sai: ['Tết', 'nghỉ'] },
    { cau: 'Rau và quả có nhiều chất ___.', dung: 'xơ', sai: ['béo', 'đường'] },
    { cau: 'Mẹ nấu canh ___.', dung: 'nấm', sai: ['bún', 'kẹo'] }
  ],
  to: ['ăn chay', 'đậu phụ', 'rau xanh'],
  noi: ['Em đã ăn món chay nào?', 'Em thích loại rau, quả nào?', 'Vì sao nên ăn nhiều rau?'],
  viet: ['Ăn chay là', 'Món chay em thích là', 'Rau xanh giúp', 'Em sẽ ăn']
};
docSetup();
