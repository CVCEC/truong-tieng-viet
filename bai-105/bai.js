/* Bài 105 · Ẩm thực Việt Nam — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: phở, bánh mì, bún chả, nem rán, mời trước khi ăn, ăn vừa đủ.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Món ăn Việt ngon, em ăn vừa đủ và biết mời.',
  khoi: [{ tu: 'phở bò' }, { tu: 'bánh mì' }, { tu: 'bún chả' }, { tu: 'nem rán' }, { tu: 'mâm cơm' }],
  tuMoi: [['ẩm thực', 'các món ăn, đồ uống'], ['nước dùng', 'nước ninh xương để chan phở, bún'], ['giòn', 'cắn kêu rôm rốp'], ['thơm lừng', 'mùi thơm bay xa'],
    ['nước mắm', 'nước chấm làm từ cá, có vị mặn'], ['rau thơm', 'các loại rau có mùi thơm ăn kèm'], ['đặc sản', 'món ngon riêng của một nơi'], ['vừa đủ', 'không thiếu, không thừa']],
  tuKho: ['ẩm thực', 'nước dùng', 'thơm lừng', 'nước mắm', 'rau thơm', 'đặc sản'],
  doan: [
    { text: 'Ẩm thực Việt Nam có rất nhiều món ngon. Phở là đặc sản nổi tiếng. Bát phở có bánh phở mềm, thịt bò và nước dùng thơm lừng.',
      hoi: [{ q: 'Món nào là đặc sản nổi tiếng?', dung: 'Phở.', sai: ['Bánh pizza.', 'Kem que.'] },
            { q: 'Bát phở có gì?', dung: 'Bánh phở, thịt bò, nước dùng.', sai: ['Cơm và trứng.', 'Bánh mì và sữa.'] }] },
    { text: 'Bánh mì Việt Nam vỏ giòn, nhân có thịt, rau và dưa. Bún chả có thịt nướng, ăn với nước mắm chua ngọt và rau thơm. Nem rán vàng giòn, ai cũng thích.',
      hoi: [{ q: 'Bánh mì Việt Nam có vỏ thế nào?', dung: 'Vỏ giòn.', sai: ['Vỏ mềm nhũn.', 'Vỏ cứng như đá.'] },
            { q: 'Bún chả ăn với gì?', dung: 'Nước mắm chua ngọt và rau thơm.', sai: ['Sữa chua.', 'Mứt dâu.'] }] },
    { text: 'Trước khi ăn, em mời ông bà, bố mẹ. Em ăn vừa đủ, không bỏ thừa. Ăn xong, em cảm ơn người đã nấu.',
      hoi: [{ q: 'Trước khi ăn, em làm gì?', dung: 'Mời ông bà, bố mẹ.', sai: ['Ăn ngay một mình.', 'Đi chơi.'] },
            { q: 'Ăn xong, em làm gì?', dung: 'Cảm ơn người đã nấu.', sai: ['Bỏ đi luôn.', 'Chê món ăn.'] }] }
  ],
  hieu: [
    { q: '“Ăn vừa đủ” nghĩa là gì?', dung: 'Không ăn quá no, không bỏ thừa.', sai: ['Ăn thật nhiều.', 'Không ăn gì.'] },
    { q: 'Món nào có thịt nướng?', dung: 'Bún chả.', sai: ['Chè.', 'Sữa chua.'] },
    { q: 'Vì sao em cảm ơn người nấu?', dung: 'Vì người nấu đã vất vả.', sai: ['Vì món ăn quá mặn.', 'Vì em no rồi.'] }
  ],
  thuTu: ['Mẹ nấu cơm.', 'Em mời ông bà, bố mẹ.', 'Cả nhà cùng ăn.', 'Ăn xong, em cảm ơn mẹ.'],
  cau: { mau: 'Cái gì thế nào?', nhan: ['Cái gì?', 'thế nào?'], ds: ['Phở bò|thơm lừng.', 'Bánh mì|giòn tan.', 'Nem rán|vàng giòn.', 'Nước mắm|chua ngọt.'] },
  dien: [
    { cau: 'Phở là đặc ___ nổi tiếng.', dung: 'sản', sai: ['biệt', 'sắc'] },
    { cau: 'Nước dùng phở thơm ___.', dung: 'lừng', sai: ['ngát', 'tho'] },
    { cau: 'Bánh mì Việt Nam vỏ ___.', dung: 'giòn', sai: ['mềm', 'ướt'] },
    { cau: 'Bún chả ăn với nước ___ chua ngọt.', dung: 'mắm', sai: ['ngọt', 'cam'] },
    { cau: 'Em ăn vừa ___, không bỏ thừa.', dung: 'đủ', sai: ['no', 'xong'] }
  ],
  to: ['phở bò', 'bánh mì', 'ẩm thực'],
  noi: ['Món ăn Việt nào em thích nhất?', 'Món đó có vị thế nào?', 'Trước bữa ăn, em mời mọi người ra sao?'],
  viet: ['Món ăn em thích là', 'Món đó có', 'Trước khi ăn, em', 'Ăn xong, em']
};
docSetup();
