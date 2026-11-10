/* Bài 118 · Bộ phận cơ thể — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: đầu, mình, tay, chân; tóc, mắt, mũi, miệng; giữ gìn cơ thể.
   Câu đố tóc, bàn tay theo slide Bài 106. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Cơ thể do cha mẹ sinh ra, em phải giữ gìn.',
  khoi: [{ tu: 'bàn tay' }, { tu: 'bàn chân' }, { tu: 'đôi môi' }, { tu: 'khuỷu tay' },
    { tu: 'mái tóc', do: 'Lúc trẻ mình đen mượt mà / Về già mình trắng, ấy là tôi đây?' }],
  tuMoi: [['cơ thể', 'toàn bộ thân người'], ['bộ phận', 'một phần của cơ thể'], ['khuỷu tay', 'chỗ gập ở giữa cánh tay'], ['đầu gối', 'chỗ gập ở giữa chân'],
    ['hình hài', 'thân hình của mỗi người'], ['nâng niu', 'giữ gìn cẩn thận'], ['ngón tay', 'năm phần nhỏ ở bàn tay'], ['gót chân', 'phần sau của bàn chân']],
  tuKho: ['cơ thể', 'bộ phận', 'khuỷu tay', 'đầu gối', 'nâng niu', 'gót chân'],
  doan: [
    { text: 'Cơ thể em có ba phần: đầu, mình và tay chân. Trên đầu có tóc. Khuôn mặt có mắt, mũi, miệng và hai tai. Bộ phận nào cũng quan trọng.',
      hoi: [{ q: 'Cơ thể có mấy phần?', dung: 'Ba phần.', sai: ['Hai phần.', 'Năm phần.'] },
            { q: 'Khuôn mặt có gì?', dung: 'Mắt, mũi, miệng và hai tai.', sai: ['Ngón chân.', 'Đầu gối.'] }] },
    { text: 'Mỗi bàn tay có năm ngón tay. Cánh tay gập được ở khuỷu tay. Chân gập được ở đầu gối. Bàn chân có gót chân giúp em đứng vững.',
      hoi: [{ q: 'Mỗi bàn tay có mấy ngón?', dung: 'Năm ngón.', sai: ['Ba ngón.', 'Mười ngón.'] },
            { q: 'Chân gập được ở đâu?', dung: 'Ở đầu gối.', sai: ['Ở khuỷu tay.', 'Ở cổ.'] }] },
    { text: 'Hình hài, da tóc do cha mẹ sinh ra. Em nâng niu cơ thể: tắm rửa sạch sẽ, cắt móng tay, chải tóc gọn gàng. Em không trèo cao, không chơi đồ sắc nhọn.',
      hoi: [{ q: 'Hình hài, da tóc do ai sinh ra?', dung: 'Cha mẹ.', sai: ['Bạn bè.', 'Thầy cô.'] },
            { q: 'Em giữ gìn cơ thể thế nào?', dung: 'Tắm rửa, cắt móng tay, chải tóc.', sai: ['Trèo thật cao.', 'Chơi dao kéo.'] }] }
  ],
  hieu: [
    { q: 'Bộ phận nào giúp em cầm bút?', dung: 'Bàn tay.', sai: ['Đầu gối.', 'Gót chân.'] },
    { q: 'Vì sao em phải giữ gìn cơ thể?', dung: 'Vì cơ thể do cha mẹ sinh ra.', sai: ['Vì muốn được khen đẹp.', 'Vì sợ bị phạt.'] },
    { q: 'Việc nào dễ làm em bị thương?', dung: 'Trèo cao.', sai: ['Chải tóc.', 'Rửa tay.'] }
  ],
  thuTu: ['Cơ thể có ba phần: đầu, mình, tay chân.', 'Mỗi bàn tay có năm ngón tay.', 'Chân gập được ở đầu gối.', 'Em nâng niu cơ thể.'],
  cau: { mau: 'Bộ phận dùng để làm gì?', nhan: ['Cái gì?', 'dùng để', 'làm gì?'], ds: ['Bàn tay|dùng để|cầm bút.', 'Bàn chân|dùng để|đi lại.', 'Đôi mắt|dùng để|nhìn.', 'Cái miệng|dùng để|nói và ăn.'] },
  dien: [
    { cau: 'Cơ thể em có ba phần: đầu, ___ và tay chân.', dung: 'mình', sai: ['mắt', 'mũi'] },
    { cau: 'Mỗi bàn tay có ___ ngón tay.', dung: 'năm', sai: ['ba', 'mười'] },
    { cau: 'Cánh tay gập được ở ___ tay.', dung: 'khuỷu', sai: ['ngón', 'cổ'] },
    { cau: 'Chân gập được ở đầu ___.', dung: 'gối', sai: ['tóc', 'mũi'] },
    { cau: 'Em ___ niu cơ thể.', dung: 'nâng', sai: ['ném', 'nằm'] }
  ],
  to: ['cơ thể', 'bàn tay', 'bàn chân'],
  noi: ['Chỉ và gọi tên các bộ phận trên khuôn mặt em.', 'Bàn tay giúp em làm những việc gì?', 'Em giữ gìn cơ thể thế nào?'],
  viet: ['Cơ thể em có', 'Bàn tay giúp em', 'Đôi chân giúp em', 'Em giữ gìn cơ thể bằng cách']
};
docSetup();
