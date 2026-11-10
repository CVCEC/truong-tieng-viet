/* Bài 125 · Ý nghĩa các loài hoa — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: hoa sen (thanh cao, “Gần bùn mà chẳng hôi tanh mùi bùn”), hoa đào, hoa mai (Tết),
   hoa hồng (tình yêu thương), hoa cúc (sống lâu); không hái hoa nơi công cộng. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Mỗi loài hoa một vẻ đẹp, một ý nghĩa.',
  khoi: [{ tu: 'hoa hồng' }, { tu: 'búp sen' }, { tu: 'cúc vạn thọ' }, { tu: 'hoa huệ' }, { tu: 'lá sen' }],
  tuMoi: [['ý nghĩa', 'điều muốn nói, muốn gửi gắm'], ['thanh cao', 'trong sạch, đẹp đẽ'], ['đầm sen', 'ao lớn trồng sen'], ['bùn', 'đất nhão dưới nước'],
    ['sống lâu', 'sống được nhiều năm'], ['may mắn', 'gặp điều tốt lành'], ['tỏa hương', 'mùi thơm bay ra'], ['công cộng', 'nơi của chung mọi người']],
  tuKho: ['ý nghĩa', 'thanh cao', 'đầm sen', 'bùn', 'may mắn', 'tỏa hương'],
  doan: [
    { text: 'Mỗi loài hoa có một ý nghĩa. Hoa sen mọc trong đầm sen, gần bùn mà vẫn thơm. Ông bà nói: “Gần bùn mà chẳng hôi tanh mùi bùn”. Hoa sen là loài hoa thanh cao.',
      hoi: [{ q: 'Hoa sen mọc ở đâu?', dung: 'Trong đầm.', sai: ['Trên núi tuyết.', 'Trong sa mạc.'] },
            { q: 'Hoa sen là loài hoa thế nào?', dung: 'Thanh cao.', sai: ['Hôi tanh.', 'Không có mùi.'] }] },
    { text: 'Ngày Tết, miền Bắc có hoa đào hồng, miền Nam có hoa mai vàng. Người ta mong năm mới may mắn. Hoa cúc vạn thọ mang ý nghĩa sống lâu.',
      hoi: [{ q: 'Ngày Tết, miền Nam có hoa gì?', dung: 'Hoa mai vàng.', sai: ['Hoa sen.', 'Hoa phượng.'] },
            { q: 'Hoa cúc vạn thọ mang ý nghĩa gì?', dung: 'Sống lâu.', sai: ['Buồn bã.', 'Chia tay.'] }] },
    { text: 'Hoa hồng nói lời yêu thương. Hoa huệ trắng tỏa hương thơm. Em yêu hoa nên không hái hoa nơi công cộng. Em tưới cây hoa ở nhà mỗi sáng.',
      hoi: [{ q: 'Hoa hồng nói lời gì?', dung: 'Lời yêu thương.', sai: ['Lời tạm biệt.', 'Lời xin lỗi.'] },
            { q: 'Em yêu hoa nên làm gì?', dung: 'Không hái hoa nơi công cộng.', sai: ['Hái thật nhiều hoa.', 'Giẫm lên hoa.'] }] }
  ],
  hieu: [
    { q: '“Gần bùn mà chẳng hôi tanh mùi bùn” nói về hoa gì?', dung: 'Hoa sen.', sai: ['Hoa hồng.', 'Hoa cúc.'] },
    { q: 'Ngày 8 tháng 3, em có thể tặng mẹ hoa gì?', dung: 'Hoa hồng.', sai: ['Lá khô.', 'Hoa giả bằng nhựa vỡ.'] },
    { q: 'Bài đọc muốn nói điều gì?', dung: 'Mỗi loài hoa có vẻ đẹp và ý nghĩa riêng.', sai: ['Hoa nào cũng giống nhau.', 'Hoa không có ích gì.'] }
  ],
  thuTu: ['Hạt sen nằm dưới bùn.', 'Lá sen mọc lên mặt nước.', 'Búp sen vươn cao.', 'Hoa sen nở thơm ngát.'],
  cau: { mau: 'Hoa gì màu gì?', nhan: ['Hoa gì?', 'màu gì?'], ds: ['Hoa đào|màu hồng.', 'Hoa mai|màu vàng.', 'Hoa huệ|màu trắng.', 'Hoa hồng|màu đỏ.'] },
  dien: [
    { cau: 'Hoa sen mọc trong ___ sen.', dung: 'đầm', sai: ['chậu', 'vườn'] },
    { cau: 'Gần ___ mà chẳng hôi tanh mùi bùn.', dung: 'bùn', sai: ['nước', 'cát'] },
    { cau: 'Miền Nam có hoa ___ vàng.', dung: 'mai', sai: ['đào', 'sen'] },
    { cau: 'Hoa cúc vạn ___ mang ý nghĩa sống lâu.', dung: 'thọ', sai: ['tuế', 'xuân'] },
    { cau: 'Hoa huệ trắng tỏa ___ thơm.', dung: 'hương', sai: ['nắng', 'khói'] }
  ],
  to: ['hoa sen', 'hoa mai', 'hoa đào'],
  noi: ['Em thích loài hoa nào? Vì sao?', 'Ngày Tết nhà em cắm hoa gì?', 'Em sẽ tặng hoa cho ai?'],
  viet: ['Loài hoa em thích là', 'Hoa có màu', 'Hoa mang ý nghĩa', 'Em sẽ']
};
docSetup();
