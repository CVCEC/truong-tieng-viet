/* Bài 100 · Mười hai con giáp — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: thứ tự 12 con giáp (Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi),
   chuyện cuộc thi qua sông (trâu chăm chỉ, chuột nhanh trí). Con giáp Mão ở Việt Nam là con mèo. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Mỗi con vật có một tài, ai chăm chỉ cũng đến đích.',
  khoi: [{ tu: 'con chuột', tranh: 'Hỏi thăm chú chuột đi đâu vắng nhà.' }, { tu: 'con mèo' }, { tu: 'hổ dữ' }, { tu: 'dê' }, { tu: 'lợn con' }],
  tuMoi: [['con giáp', 'con vật đứng cho một năm'], ['Tý', 'năm con chuột'], ['Sửu', 'năm con trâu'], ['Mão', 'năm con mèo'],
    ['thứ tự', 'cái trước, cái sau theo hàng lối'], ['cuộc thi', 'nhiều người cùng đua tài'], ['nhanh trí', 'nghĩ ra cách rất nhanh'], ['chăm chỉ', 'siêng năng, cần cù']],
  tuKho: ['con giáp', 'thứ tự', 'cuộc thi', 'nhanh trí', 'chăm chỉ', 'vượt sông'],
  doan: [
    { text: 'Người Việt có mười hai con giáp. Mỗi năm mang tên một con vật. Theo thứ tự có: chuột, trâu, hổ, mèo, rồng, rắn, ngựa, dê, khỉ, gà, chó, lợn.',
      hoi: [{ q: 'Có bao nhiêu con giáp?', dung: 'Mười hai con giáp.', sai: ['Mười con giáp.', 'Hai mươi con giáp.'] },
            { q: 'Con giáp đứng đầu là con gì?', dung: 'Con chuột.', sai: ['Con trâu.', 'Con lợn.'] }] },
    { text: 'Chuyện kể: ngày xưa có một cuộc thi vượt sông. Con nào qua sông trước sẽ đứng trước. Trâu chăm chỉ bơi rất khỏe. Chuột nhanh trí ngồi trên lưng trâu.',
      hoi: [{ q: 'Các con vật thi gì?', dung: 'Thi vượt sông.', sai: ['Thi hát.', 'Thi leo cây.'] },
            { q: 'Chuột qua sông bằng cách nào?', dung: 'Ngồi trên lưng trâu.', sai: ['Tự bơi.', 'Đi thuyền.'] }] },
    { text: 'Gần tới bờ, chuột nhảy lên trước nên đứng thứ nhất. Trâu về thứ hai. Vì thế, năm Tý là năm con chuột, năm Sửu là năm con trâu. Ở Việt Nam, năm Mão là năm con mèo. Em sinh năm con gì?',
      hoi: [{ q: 'Trâu đứng thứ mấy?', dung: 'Thứ hai.', sai: ['Thứ nhất.', 'Thứ mười.'] },
            { q: 'Ở Việt Nam, năm Mão là năm con gì?', dung: 'Con mèo.', sai: ['Con thỏ.', 'Con chó.'] }] }
  ],
  hieu: [
    { q: 'Con giáp cuối cùng là con gì?', dung: 'Con lợn.', sai: ['Con chuột.', 'Con rồng.'] },
    { q: 'Vì sao chuột đứng thứ nhất?', dung: 'Vì chuột nhanh trí nhảy lên trước.', sai: ['Vì chuột bơi giỏi nhất.', 'Vì chuột to nhất.'] },
    { q: 'Trâu là con vật thế nào?', dung: 'Chăm chỉ, khỏe mạnh.', sai: ['Lười biếng.', 'Hay khóc.'] }
  ],
  thuTu: ['Chuột', 'Trâu', 'Hổ', 'Mèo', 'Rồng'],
  cau: { mau: 'Năm gì là năm con gì?', nhan: ['Năm gì?', 'là', 'năm con gì?'], ds: ['Năm Tý|là|năm con chuột.', 'Năm Sửu|là|năm con trâu.', 'Năm Mão|là|năm con mèo.', 'Năm Hợi|là|năm con lợn.'] },
  dien: [
    { cau: 'Người Việt có mười ___ con giáp.', dung: 'hai', sai: ['ba', 'một'] },
    { cau: 'Con nào qua ___ trước sẽ đứng trước.', dung: 'sông', sai: ['cầu', 'núi'] },
    { cau: 'Trâu ___ chỉ bơi rất khỏe.', dung: 'chăm', sai: ['lười', 'ngủ'] },
    { cau: 'Chuột ___ trí ngồi trên lưng trâu.', dung: 'nhanh', sai: ['chậm', 'buồn'] },
    { cau: 'Ở Việt Nam, năm Mão là năm con ___.', dung: 'mèo', sai: ['thỏ', 'gà'] }
  ],
  to: ['con giáp', 'con trâu', 'con mèo'],
  noi: ['Em sinh năm con gì?', 'Đọc thứ tự mười hai con giáp.', 'Em thích con giáp nào nhất? Vì sao?'],
  viet: ['Em sinh năm con', 'Con giáp đầu tiên là', 'Con trâu thì', 'Em thích con']
};
docSetup();
