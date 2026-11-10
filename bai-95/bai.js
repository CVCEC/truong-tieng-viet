/* Bài 95 · Đồ dùng du lịch — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: soạn vali, đồ dùng cần mang, tự chuẩn bị đồ của mình.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Chuẩn bị chu đáo, chuyến đi vui vẻ.',
  khoi: [
    { tu: 'cái kính' }, { tu: 'đôi dép' }, { tu: 'cái chai' },
    { tu: 'cái va li', do: 'Hình hộp, có bánh xe / Kéo đi theo mọi người / Đựng quần áo, đồ dùng / Mỗi lần đi du lịch' },
    { tu: 'bàn chải', do: 'Lông mềm, cán dài / Sáng tối chăm chải / Răng trắng tinh khôi' }],
  tuMoi: [['va li', 'hộp lớn có bánh xe để đựng đồ đi xa'], ['chuẩn bị', 'sắp xếp trước cho sẵn sàng'], ['kính râm', 'kính che nắng cho mắt'], ['kem chống nắng', 'kem bôi da để không bị cháy nắng'],
    ['bàn chải', 'đồ dùng để đánh răng'], ['khăn mặt', 'khăn nhỏ để lau mặt'], ['chu đáo', 'cẩn thận, không thiếu gì'], ['bình nước', 'đồ đựng nước uống']],
  tuKho: ['va li', 'chuẩn bị', 'kính râm', 'kem chống nắng', 'bàn chải', 'chu đáo'],
  doan: [
    { text: 'Mai cả nhà đi biển. Tối nay, mẹ bảo em tự chuẩn bị va li của mình. Em lấy giấy ghi ra những đồ cần mang.',
      hoi: [{ q: 'Mai cả nhà đi đâu?', dung: 'Đi biển.', sai: ['Đi học.', 'Đi chợ.'] },
            { q: 'Em làm gì trước khi soạn đồ?', dung: 'Ghi ra những đồ cần mang.', sai: ['Đi ngủ ngay.', 'Xem phim hoạt hình.'] }] },
    { text: 'Em xếp quần áo, đồ bơi và khăn mặt. Em mang bàn chải đánh răng, kính râm, mũ và kem chống nắng. Em không quên bình nước.',
      hoi: [{ q: 'Để đánh răng, em mang gì?', dung: 'Bàn chải.', sai: ['Kính râm.', 'Cái mũ.'] },
            { q: 'Để không bị cháy nắng, em mang gì?', dung: 'Kem chống nắng.', sai: ['Đôi tất len.', 'Áo khoác dày.'] }] },
    { text: 'Em kiểm tra lại từng món rồi mới đóng va li. Mẹ khen em chuẩn bị chu đáo. Em không làm vội để khỏi quên đồ.',
      hoi: [{ q: 'Trước khi đóng va li, em làm gì?', dung: 'Kiểm tra lại từng món.', sai: ['Bỏ thêm đồ chơi to.', 'Không kiểm tra gì.'] },
            { q: 'Mẹ khen em thế nào?', dung: 'Chuẩn bị chu đáo.', sai: ['Làm thật nhanh.', 'Mang nhiều đồ chơi.'] }] }
  ],
  hieu: [
    { q: 'Vì sao em ghi ra giấy những đồ cần mang?', dung: 'Để không quên đồ.', sai: ['Để tập vẽ.', 'Để gửi cho bạn.'] },
    { q: 'Đi biển, em cần mang thứ gì?', dung: 'Đồ bơi và kem chống nắng.', sai: ['Áo len và găng tay.', 'Ván trượt tuyết.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Tự chuẩn bị đồ, không làm vội.', sai: ['Để mẹ làm hết.', 'Làm thật vội cho xong.'] }
  ],
  thuTu: ['Mẹ bảo em tự chuẩn bị va li.', 'Em ghi ra những đồ cần mang.', 'Em xếp quần áo, đồ bơi, khăn mặt.', 'Em kiểm tra lại rồi đóng va li.'],
  cau: { mau: 'Đồ dùng để làm gì?', nhan: ['Cái gì?', 'dùng để', 'làm gì?'], ds: ['Bàn chải|dùng để|đánh răng.', 'Kính râm|dùng để|che nắng.', 'Khăn mặt|dùng để|lau mặt.', 'Bình nước|dùng để|đựng nước.'] },
  dien: [
    { cau: 'Mẹ bảo em tự chuẩn bị ___ li của mình.', dung: 'va', sai: ['ca', 'ba'] },
    { cau: 'Em mang bàn ___ đánh răng.', dung: 'chải', sai: ['tay', 'ghế'] },
    { cau: 'Em mang kem chống ___.', dung: 'nắng', sai: ['mưa', 'gió'] },
    { cau: 'Em không quên bình ___.', dung: 'nước', sai: ['hoa', 'mực'] },
    { cau: 'Mẹ khen em chuẩn bị chu ___.', dung: 'đáo', sai: ['đến', 'đi'] }
  ],
  to: ['va li', 'kính râm', 'bàn chải'],
  noi: ['Đi biển, em cần mang những gì?', 'Đi lên núi lạnh, em cần mang gì?', 'Em đã tự soạn đồ lần nào chưa?'],
  viet: ['Khi đi du lịch, em mang', 'Em xếp', 'Em không quên', 'Em kiểm tra']
};
docSetup();
