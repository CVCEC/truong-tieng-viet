/* Bài 84 · Giỗ Tổ Hùng Vương (phần 2) — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: chuyện Lang Liêu làm bánh chưng, bánh giầy dâng vua Hùng.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Món quà quý nhất là tấm lòng hiếu thảo.',
  khoi: [{ tu: 'bánh chưng' }, { tu: 'gạo nếp', do: 'Hạt trắng, dẻo thơm / Đồ xôi, gói bánh / Ngày Tết thêm vui' }, { tu: 'lá dong', do: 'Lá to, xanh mướt / Mẹ gói bánh chưng / Vuông vức thơm lừng' }, { tu: 'cụ già' }, { tu: 'đồng hồ', do: 'Tích tắc, tích tắc / Hai kim chạy đều / Nhắc em đi học / Đúng giờ mỗi ngày' }],
  tuMoi: [['Lang Liêu', 'người con thứ mười tám của vua Hùng'], ['hiếu thảo', 'thương yêu, chăm lo cha mẹ'], ['dâng', 'kính cẩn trao tặng'], ['của ngon', 'món ăn quý, ngon'],
    ['bánh giầy', 'bánh tròn, trắng, làm từ xôi giã nhuyễn'], ['tượng trưng', 'dùng một vật để chỉ điều khác'], ['nối ngôi', 'lên làm vua sau vua cha'], ['giản dị', 'đơn sơ, không cầu kì']],
  tuKho: ['Lang Liêu', 'hiếu thảo', 'bánh giầy', 'tượng trưng', 'nối ngôi', 'giản dị'],
  doan: [
    { text: 'Ngày xưa, vua Hùng muốn chọn người nối ngôi. Vua bảo các con: ai tìm được món quà ý nghĩa nhất sẽ được làm vua.',
      hoi: [{ q: 'Vua Hùng muốn làm gì?', dung: 'Chọn người nối ngôi.', sai: ['Đi câu cá.', 'Xây nhà mới.'] },
            { q: 'Ai sẽ được làm vua?', dung: 'Người tìm được món quà ý nghĩa nhất.', sai: ['Người cao nhất.', 'Người chạy nhanh nhất.'] }] },
    { text: 'Các hoàng tử đi tìm của ngon vật lạ. Lang Liêu nhà nghèo, chỉ có lúa gạo. Chàng dùng gạo nếp, đậu xanh và lá dong làm bánh chưng hình vuông và bánh giầy hình tròn để dâng vua.',
      hoi: [{ q: 'Lang Liêu làm bánh bằng gì?', dung: 'Gạo nếp, đậu xanh và lá dong.', sai: ['Vàng bạc.', 'Kẹo và sô-cô-la.'] },
            { q: 'Bánh chưng có hình gì?', dung: 'Hình vuông.', sai: ['Hình tròn.', 'Hình sao.'] }] },
    { text: 'Vua nếm bánh và rất vui. Bánh chưng tượng trưng cho đất, bánh giầy tượng trưng cho trời. Món quà giản dị mà đầy lòng hiếu thảo. Lang Liêu được nối ngôi vua.',
      hoi: [{ q: 'Bánh giầy tượng trưng cho gì?', dung: 'Cho trời.', sai: ['Cho biển.', 'Cho núi.'] },
            { q: 'Ai được nối ngôi vua?', dung: 'Lang Liêu.', sai: ['Không ai cả.', 'Người hàng xóm.'] }] }
  ],
  hieu: [
    { q: 'Vì sao vua chọn Lang Liêu?', dung: 'Vì món quà giản dị mà đầy lòng hiếu thảo.', sai: ['Vì Lang Liêu giàu nhất.', 'Vì Lang Liêu đến sớm nhất.'] },
    { q: 'Bánh chưng tượng trưng cho gì?', dung: 'Cho đất.', sai: ['Cho trời.', 'Cho mặt trăng.'] },
    { q: 'Ngày nay, khi nào nhà nhà gói bánh chưng?', dung: 'Vào dịp Tết.', sai: ['Vào mùa hè.', 'Vào ngày sinh nhật.'] }
  ],
  thuTu: ['Vua Hùng muốn chọn người nối ngôi.', 'Các hoàng tử đi tìm của ngon vật lạ.', 'Lang Liêu làm bánh chưng và bánh giầy.', 'Lang Liêu được nối ngôi vua.'],
  cau: { mau: 'Cái gì thế nào?', nhan: ['Cái gì?', 'thế nào?'], ds: ['Bánh chưng|hình vuông.', 'Bánh giầy|hình tròn.', 'Lá dong|xanh mướt.', 'Gạo nếp|dẻo thơm.'] },
  dien: [
    { cau: 'Vua Hùng muốn chọn người nối ___.', dung: 'ngôi', sai: ['nhà', 'đường'] },
    { cau: 'Lang Liêu nhà nghèo, chỉ có lúa ___.', dung: 'gạo', sai: ['vàng', 'bạc'] },
    { cau: 'Bánh chưng hình ___.', dung: 'vuông', sai: ['tròn', 'dài'] },
    { cau: 'Bánh giầy tượng trưng cho ___.', dung: 'trời', sai: ['đất', 'biển'] },
    { cau: 'Món quà giản dị mà đầy lòng ___ thảo.', dung: 'hiếu', sai: ['vui', 'giàu'] }
  ],
  to: ['bánh chưng', 'hiếu thảo', 'bánh giầy'],
  noi: ['Kể lại chuyện Lang Liêu bằng lời của em.', 'Nhà em có gói bánh chưng không?', 'Em làm gì để tỏ lòng hiếu thảo?'],
  viet: ['Lang Liêu làm', 'Bánh chưng hình', 'Bánh giầy hình', 'Em sẽ hiếu thảo']
};
docSetup();
