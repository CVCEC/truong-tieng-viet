/* Bài 112 · Nghề nghiệp — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide (đọc được một phần): khổ 19–22 (Tín) và phần nghề bác sĩ; Trâu Con soạn thêm các nghề quen thuộc.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Nghề nào cũng đáng quý, em biết ơn người lao động.',
  khoi: [{ tu: 'bác sĩ' }, { tu: 'cô giáo' }, { tu: 'đầu bếp' }, { tu: 'thợ xây' }, { tu: 'bưu tá' }],
  tuMoi: [['nghề nghiệp', 'công việc người lớn làm hằng ngày'], ['bác sĩ', 'người khám bệnh, chữa bệnh'], ['đầu bếp', 'người nấu ăn giỏi'], ['nông dân', 'người trồng lúa, trồng rau'],
    ['thợ xây', 'người xây nhà'], ['lính cứu hỏa', 'người dập lửa, cứu người'], ['lao động', 'làm việc'], ['mơ ước', 'điều mình mong sau này có']],
  tuKho: ['nghề nghiệp', 'bác sĩ', 'nông dân', 'lính cứu hỏa', 'lao động', 'mơ ước'],
  doan: [
    { text: 'Có rất nhiều nghề nghiệp. Bác sĩ khám bệnh, chữa bệnh cho mọi người. Cô giáo dạy học sinh đọc, viết. Nông dân trồng lúa, trồng rau.',
      hoi: [{ q: 'Ai khám bệnh, chữa bệnh?', dung: 'Bác sĩ.', sai: ['Thợ xây.', 'Nông dân.'] },
            { q: 'Nông dân làm gì?', dung: 'Trồng lúa, trồng rau.', sai: ['Lái máy bay.', 'Dạy học.'] }] },
    { text: 'Thợ xây xây nhà cao cửa rộng. Đầu bếp nấu những món ăn ngon. Lính cứu hỏa dũng cảm dập lửa, cứu người. Bưu tá mang thư đến từng nhà.',
      hoi: [{ q: 'Ai dập lửa, cứu người?', dung: 'Lính cứu hỏa.', sai: ['Đầu bếp.', 'Bưu tá.'] },
            { q: 'Bưu tá làm gì?', dung: 'Mang thư đến từng nhà.', sai: ['Nấu món ăn ngon.', 'Xây nhà.'] }] },
    { text: 'Nghề nào cũng đáng quý vì người lao động giúp ích cho mọi người. Mơ ước của em là làm bác sĩ. Người làm nghề nào cũng phải thật thà, nói lời giữ lời.',
      hoi: [{ q: 'Vì sao nghề nào cũng đáng quý?', dung: 'Vì giúp ích cho mọi người.', sai: ['Vì được nghỉ nhiều.', 'Vì được ngủ trưa.'] },
            { q: 'Mơ ước của em là gì?', dung: 'Làm bác sĩ.', sai: ['Không làm gì.', 'Làm vua.'] }] }
  ],
  hieu: [
    { q: 'Nghề nào nấu món ăn ngon?', dung: 'Đầu bếp.', sai: ['Bác sĩ.', 'Thợ xây.'] },
    { q: 'Người làm nghề nào cũng cần điều gì?', dung: 'Thật thà, giữ lời.', sai: ['Nói dối khéo.', 'Làm qua loa.'] },
    { q: 'Em làm gì để biết ơn người lao động?', dung: 'Giữ gìn đồ dùng, cảm ơn họ.', sai: ['Làm hỏng đồ.', 'Không chào hỏi.'] }
  ],
  thuTu: ['Bác sĩ hỏi em bị đau ở đâu.', 'Bác sĩ khám bệnh cho em.', 'Bác sĩ dặn em uống thuốc.', 'Em cảm ơn bác sĩ.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bác sĩ|chữa|bệnh.', 'Cô giáo|dạy|học sinh.', 'Thợ xây|xây|nhà.', 'Bưu tá|mang|thư.'] },
  dien: [
    { cau: 'Bác sĩ khám bệnh, chữa ___ cho mọi người.', dung: 'bệnh', sai: ['bài', 'nhà'] },
    { cau: 'Nông dân trồng ___, trồng rau.', dung: 'lúa', sai: ['nhà', 'đèn'] },
    { cau: 'Lính cứu ___ dũng cảm dập lửa.', dung: 'hỏa', sai: ['nước', 'thương'] },
    { cau: 'Bưu tá mang ___ đến từng nhà.', dung: 'thư', sai: ['cơm', 'cây'] },
    { cau: 'Nghề nào cũng đáng ___.', dung: 'quý', sai: ['ghét', 'sợ'] }
  ],
  to: ['nghề nghiệp', 'bác sĩ', 'nông dân'],
  noi: ['Bố mẹ em làm nghề gì?', 'Lớn lên, em muốn làm nghề gì? Vì sao?', 'Làm động tác của một nghề để các bạn đoán.'],
  viet: ['Bố em làm', 'Mẹ em làm', 'Lớn lên, em muốn', 'Vì em']
};
docSetup();
