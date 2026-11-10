/* Bài 98 · Lễ Giáng sinh — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: đêm 24 và ngày 25 tháng 12, cây thông, ông già Noel, quà, người tuyết, sẻ chia.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Giáng sinh là mùa yêu thương và sẻ chia.',
  khoi: [{ tu: 'cây thông' }, { tu: 'người tuyết' }, { tu: 'tuyết rơi' }, { tu: 'ngôi sao' }, { tu: 'quà', cau: 'Em gói quà tặng bạn.' }],
  tuMoi: [['Giáng sinh', 'lễ ngày 25 tháng 12, còn gọi là Noel'], ['ông già Noel', 'ông râu trắng, áo đỏ, mang quà cho trẻ em'], ['trang trí', 'làm cho đẹp hơn'], ['người tuyết', 'hình người nặn bằng tuyết'],
    ['lấp lánh', 'sáng nhấp nháy, đẹp mắt'], ['sẻ chia', 'chia cho người khác cùng dùng, cùng vui'], ['ấm áp', 'ấm, dễ chịu'], ['điều ước', 'điều mình mong có']],
  tuKho: ['Giáng sinh', 'trang trí', 'người tuyết', 'lấp lánh', 'sẻ chia', 'điều ước'],
  doan: [
    { text: 'Ngày 25 tháng 12 là lễ Giáng sinh. Ở nhiều nước, mùa này trời lạnh và có tuyết rơi. Các bạn nhỏ ra sân nặn người tuyết.',
      hoi: [{ q: 'Lễ Giáng sinh là ngày nào?', dung: 'Ngày 25 tháng 12.', sai: ['Ngày 31 tháng 10.', 'Ngày 1 tháng 6.'] },
            { q: 'Các bạn nhỏ ra sân làm gì?', dung: 'Nặn người tuyết.', sai: ['Tắm biển.', 'Thả diều.'] }] },
    { text: 'Cả nhà cùng trang trí cây thông. Bố treo đèn lấp lánh. Em gắn ngôi sao vàng lên ngọn cây. Phòng khách thật ấm áp.',
      hoi: [{ q: 'Cả nhà trang trí cây gì?', dung: 'Cây thông.', sai: ['Cây chuối.', 'Cây cau.'] },
            { q: 'Em gắn gì lên ngọn cây?', dung: 'Ngôi sao vàng.', sai: ['Quả bóng đá.', 'Chiếc giày.'] }] },
    { text: 'Đêm Giáng sinh, em viết điều ước gửi ông già Noel. Em gói quà tặng ông bà và các bạn. Giáng sinh là mùa sẻ chia và yêu thương.',
      hoi: [{ q: 'Em viết gì gửi ông già Noel?', dung: 'Điều ước.', sai: ['Bài toán.', 'Thực đơn.'] },
            { q: 'Em gói quà tặng ai?', dung: 'Ông bà và các bạn.', sai: ['Chỉ tặng mình.', 'Không tặng ai.'] }] }
  ],
  hieu: [
    { q: 'Ông già Noel mặc áo màu gì?', dung: 'Màu đỏ.', sai: ['Màu xanh lá.', 'Màu tím.'] },
    { q: 'Vì sao Giáng sinh là mùa sẻ chia?', dung: 'Vì mọi người tặng quà, giúp đỡ nhau.', sai: ['Vì trời lạnh.', 'Vì có nhiều tuyết.'] },
    { q: 'Em có thể sẻ chia thế nào?', dung: 'Tặng đồ chơi cũ cho bạn khó khăn.', sai: ['Giữ hết quà cho mình.', 'Đòi thêm quà.'] }
  ],
  thuTu: ['Các bạn nhỏ nặn người tuyết.', 'Cả nhà trang trí cây thông.', 'Em gắn ngôi sao lên ngọn cây.', 'Em gói quà tặng ông bà.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Bố|treo|đèn lấp lánh.', 'Em|gắn|ngôi sao.', 'Các bạn|nặn|người tuyết.', 'Em|gói|quà tặng bà.'] },
  dien: [
    { cau: 'Ngày 25 tháng 12 là lễ ___ sinh.', dung: 'Giáng', sai: ['Sinh', 'Trung'] },
    { cau: 'Các bạn nhỏ nặn người ___.', dung: 'tuyết', sai: ['máy', 'gỗ'] },
    { cau: 'Cả nhà cùng trang trí cây ___.', dung: 'thông', sai: ['tre', 'cau'] },
    { cau: 'Em viết điều ___ gửi ông già Noel.', dung: 'ước', sai: ['hay', 'lạ'] },
    { cau: 'Giáng sinh là mùa ___ chia và yêu thương.', dung: 'sẻ', sai: ['bẻ', 'cắt'] }
  ],
  to: ['cây thông', 'người tuyết', 'sẻ chia'],
  noi: ['Điều ước Giáng sinh của em là gì?', 'Nhà em trang trí gì vào mùa Giáng sinh?', 'Em muốn tặng quà cho ai? Vì sao?'],
  viet: ['Lễ Giáng sinh là', 'Cả nhà em', 'Điều ước của em là', 'Em sẽ tặng quà cho']
};
docSetup();
