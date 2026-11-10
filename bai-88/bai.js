/* Bài 88 · Tình anh em — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide: ý nghĩa tình anh em; từ ngữ (hòa thuận, yêu thương, nhường nhịn, chăm sóc, kính trọng, đoàn kết, chia sẻ);
   chuyện “Hai anh em” (bó lúa) với 7 câu hỏi; bài thơ “Làm anh”. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Anh em thương yêu, nhường nhịn nhau.',
  khoi: [{ tu: 'giúp em' }, { tu: 'bế bé' }, { tu: 'cánh đồng', do: 'Lúa xanh mơn mởn / Trải dài tít xa / Bác nông dân ra / Cấy cày vất vả' }, { tu: 'chia quà', tranh: 'Bà cho quà, bé chia quà cho cả nhà.' }, { tu: 'bạn bè' }],
  tuMoi: [['hòa thuận', 'sống vui vẻ, không cãi nhau'], ['nhường nhịn', 'chịu phần kém hơn cho người khác'], ['chia sẻ', 'cùng nhau dùng, cùng nhau vui buồn'], ['đùm bọc', 'che chở, giúp đỡ nhau'],
    ['gặt', 'cắt lúa chín mang về'], ['bó lúa', 'nhiều cây lúa buộc lại với nhau'], ['kinh ngạc', 'rất lạ, rất bất ngờ'], ['xúc động', 'cảm động, rất thương']],
  tuKho: ['hòa thuận', 'nhường nhịn', 'đùm bọc', 'bó lúa', 'kinh ngạc', 'xúc động'],
  doan: [
    { text: 'Ngày xưa, có hai anh em cùng làm ruộng. Gặt xong, hai anh em chia lúa thành hai đống bằng nhau, để ở ngoài đồng.',
      hoi: [{ q: 'Hai anh em chia lúa thế nào?', dung: 'Thành hai đống bằng nhau.', sai: ['Đống của anh to hơn.', 'Đống của em to hơn.'] },
            { q: 'Hai anh em để lúa ở đâu?', dung: 'Ở ngoài đồng.', sai: ['Ở nhà người anh.', 'Ở nhà người em.'] }] },
    { text: 'Đêm về, người em nghĩ anh còn phải nuôi vợ con, liền ôm lúa của mình bỏ sang đống của anh. Người anh lo em sống một mình vất vả, cũng ôm lúa bỏ sang đống của em.',
      hoi: [{ q: 'Người em đã làm gì?', dung: 'Ôm lúa của mình bỏ sang đống của anh.', sai: ['Lấy lúa của anh.', 'Ngủ say cả đêm.'] },
            { q: 'Vì sao người anh bỏ lúa sang đống của em?', dung: 'Vì lo em sống một mình vất vả.', sai: ['Vì anh có quá nhiều lúa.', 'Vì anh không thích lúa.'] }] },
    { text: 'Sáng ra, hai anh em kinh ngạc thấy hai đống lúa vẫn bằng nhau. Một đêm, hai người gặp nhau, tay ai cũng ôm bó lúa. Hai anh em xúc động ôm chầm lấy nhau. Anh em biết nhường nhịn, chia sẻ, đùm bọc nhau thì nhà luôn hòa thuận.',
      hoi: [{ q: 'Sáng ra, hai anh em thấy gì?', dung: 'Hai đống lúa vẫn bằng nhau.', sai: ['Lúa bị mất hết.', 'Lúa mọc thêm.'] },
            { q: 'Câu chuyện kết thúc thế nào?', dung: 'Hai anh em xúc động ôm chầm lấy nhau. Anh em biết nhường nhịn, chia sẻ, đùm bọc nhau thì nhà luôn hòa thuận.', sai: ['Hai anh em cãi nhau.', 'Hai anh em bỏ đi xa.'] }] }
  ],
  hieu: [
    { q: 'Câu chuyện khuyên chúng ta điều gì?', dung: 'Anh em yêu thương, nhường nhịn nhau.', sai: ['Ai cũng giữ lúa cho mình.', 'Không cần giúp anh em.'] },
    { q: 'Trong bài thơ “Làm anh”, khi em bé khóc, anh làm gì?', dung: 'Anh phải dỗ dành.', sai: ['Anh bỏ đi chơi.', 'Anh cũng khóc theo.'] },
    { q: 'Từ nào nói về tình anh em?', dung: 'Đùm bọc.', sai: ['Ích kỉ.', 'Tranh giành.'] }
  ],
  thuTu: ['Hai anh em chia lúa thành hai đống bằng nhau.', 'Người em ôm lúa bỏ sang đống của anh.', 'Người anh ôm lúa bỏ sang đống của em.', 'Hai anh em gặp nhau và ôm chầm lấy nhau.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Anh|dỗ dành|em bé.', 'Em|nhường|đồ chơi.', 'Chị|chia|quà bánh.', 'Anh em|đùm bọc|nhau.'] },
  dien: [
    { cau: 'Hai anh em chia lúa thành hai đống ___ nhau.', dung: 'bằng', sai: ['khác', 'xa'] },
    { cau: 'Người em nghĩ anh còn phải nuôi ___ con.', dung: 'vợ', sai: ['gà', 'mèo'] },
    { cau: 'Hai anh em ___ ngạc thấy hai đống lúa vẫn bằng nhau.', dung: 'kinh', sai: ['vui', 'buồn'] },
    { cau: 'Mẹ cho quà bánh, chia em nhiều ___.', dung: 'hơn', sai: ['ít', 'xa'] },
    { cau: 'Anh thương, em ___ một nhà.', dung: 'kính', sai: ['ghét', 'giận'] }
  ],
  to: ['anh em', 'nhường nhịn', 'hòa thuận'],
  noi: ['Em có anh, chị hay em không? Kể về người đó.', 'Em đã nhường nhịn anh chị em thế nào?', 'Kể lại chuyện Hai anh em.'],
  viet: ['Anh (chị, em) của em', 'Em thường cùng', 'Em đã nhường', 'Anh em trong nhà']
};
docSetup();
