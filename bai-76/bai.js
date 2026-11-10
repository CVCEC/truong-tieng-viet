/* Bài 76 · Giàn mướp — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js, tranh ở chung/tranh.js
   Sửa so với slide: slide không có chữ bài thơ Lên Tám, dùng bài thơ ở Bài 71; từ khởi động "hoa vàng" thành "hoa mướp", "giàn" thành "giàn mướp";
   đáp án chọn ý do Trâu Con soạn theo bài; luyện câu theo mẫu "Cái gì thế nào?" (từ ngữ tả cây cối). */
const DOC = {
  y: 'Quan sát cây cối và niềm vui lao động.',
  khoi: [
    { tu: 'hạt mướp' },
    { tu: 'dây leo' },
    { tu: 'hoa mướp' },
    { tu: 'quả mướp' },
    { tu: 'giàn mướp' }
  ],
  tuMoi: [['gieo hạt', 'đặt hạt xuống đất để trồng'], ['nảy mầm', 'hạt mọc thành cây non'], ['tua cuốn', 'phần nhỏ giúp cây leo bám'], ['sum suê', 'nhiều lá, cành tươi tốt'],
    ['lấp ló', 'hiện ra một phần rồi khuất'], ['thu hoạch', 'hái sản phẩm đã đến lúc dùng'], ['chăm bón', 'chăm sóc và bón phân cho cây'], ['mát rượi', 'mát và dễ chịu']],
  tuKho: ['gieo hạt', 'nảy mầm', 'tua cuốn', 'sum suê', 'lấp ló', 'thu hoạch'],
  doan: [
    { text: 'Đầu mùa hè, ông và em gieo mấy hạt mướp bên bờ ao. Ít ngày sau, cây nảy mầm. Những tua cuốn nhỏ bám vào cọc tre rồi leo dần lên giàn.',
      hoi: [{ q: 'Ông và bạn nhỏ gieo mướp ở đâu?', dung: 'Bên bờ ao.', sai: ['Trên mái nhà.', 'Trong vườn nho.'] },
            { q: 'Cây mướp leo giàn bằng bộ phận nào?', dung: 'Bằng những tua cuốn nhỏ.', sai: ['Bằng rễ cây.', 'Bằng hoa mướp.'] }] },
    { text: 'Giàn mướp xanh mát, lá lớn xòe như những chiếc ô. Hoa mướp vàng tươi nở dưới nắng. Ong bướm bay quanh, còn quả non lấp ló sau lá.',
      hoi: [{ q: 'Lá mướp xòe như cái gì?', dung: 'Như những chiếc ô.', sai: ['Như những con thuyền.', 'Như những cái đĩa.'] },
            { q: 'Hoa mướp màu gì?', dung: 'Vàng tươi.', sai: ['Tím.', 'Đỏ.'] }] },
    { text: 'Mỗi chiều, em tưới nước và nhổ cỏ quanh gốc. Cuối mùa, cả nhà hái được một rổ mướp. Bữa canh mướp thơm ngọt làm em nhớ công chăm sóc của mọi người.',
      hoi: [{ q: 'Mỗi chiều, bạn nhỏ chăm cây thế nào?', dung: 'Tưới nước và nhổ cỏ quanh gốc.', sai: ['Hái hết hoa.', 'Bẻ cành mướp.'] },
            { q: 'Cuối mùa, cả nhà hái được gì?', dung: 'Một rổ mướp.', sai: ['Một rổ nho.', 'Một rổ cam.'] }] }
  ],
  hieu: [
    { q: 'Giàn mướp có những màu sắc gì?', dung: 'Lá xanh, hoa vàng.', sai: ['Lá đỏ, hoa tím.', 'Lá vàng, hoa trắng.'] },
    { q: 'Những con vật nào bay quanh giàn mướp?', dung: 'Ong và bướm.', sai: ['Quạ và cáo.', 'Gà và vịt.'] },
    { q: 'Vì sao bữa canh mướp đáng nhớ?', dung: 'Vì có công chăm sóc của mọi người.', sai: ['Vì canh rất mặn.', 'Vì mướp mua ở chợ.'] }
  ],
  thuTu: ['Ông và em gieo mấy hạt mướp bên bờ ao.', 'Ít ngày sau, cây nảy mầm.', 'Tua cuốn bám vào cọc tre, leo dần lên giàn.', 'Hoa mướp vàng tươi nở dưới nắng.', 'Cuối mùa, cả nhà hái được một rổ mướp.'],
  cau: { mau: 'Cái gì thế nào?', nhan: ['Cái gì?', 'thế nào?'], ds: ['Giàn mướp|xanh mát.', 'Hoa mướp|vàng tươi.', 'Lá mướp|xòe như những chiếc ô.', 'Bữa canh mướp|thơm ngọt.'] },
  dien: [
    { cau: 'Ông và em ___ mấy hạt mướp bên bờ ao.', dung: 'gieo', sai: ['hái', 'ăn'] },
    { cau: 'Ít ngày sau, cây ___.', dung: 'nảy mầm', sai: ['ra quả', 'héo khô'] },
    { cau: 'Lá lớn xòe như những chiếc ___.', dung: 'ô', sai: ['thuyền', 'mũ'] },
    { cau: 'Ong bướm bay quanh, còn quả non ___ sau lá.', dung: 'lấp ló', sai: ['bay đi', 'chạy nhảy'] },
    { cau: 'Bữa canh mướp thơm ___.', dung: 'ngọt', sai: ['đắng', 'chua'] }
  ],
  to: ['mướp', 'hoa', 'giàn'],
  noi: ['Tả giàn mướp trong tranh.', 'Kể các bước trồng một cây.', 'Nói một việc em làm để chăm cây.'],
  viet: ['Em quan sát cây', 'Lá cây', 'Hoa hoặc quả', 'Em cảm thấy']
};
docSetup();
