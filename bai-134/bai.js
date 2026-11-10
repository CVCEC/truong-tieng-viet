/* Bài 134 · Vui chơi — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: vui chơi ở công viên (cầu trượt, bập bênh, xích đu), chơi an toàn, xếp hàng, nhường bạn,
   chơi đúng giờ. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Vui chơi an toàn, biết nhường nhịn bạn bè.',
  khoi: [{ tu: 'cầu trượt' }, { tu: 'bập bênh' }, { tu: 'bóng bay' }, { tu: 'nhảy dây' }, { tu: 'con diều' }],
  tuMoi: [['vui chơi', 'chơi đùa cho vui'], ['công viên', 'khu đất rộng có cây, có đồ chơi cho mọi người'], ['xích đu', 'ghế treo bằng dây, đu qua đu lại'], ['bập bênh', 'đồ chơi hai đầu lên xuống'],
    ['an toàn', 'không có nguy hiểm'], ['xếp hàng', 'đứng nối nhau theo thứ tự'], ['lần lượt', 'người này xong đến người kia'], ['nhường', 'để bạn được trước']],
  tuKho: ['vui chơi', 'công viên', 'xích đu', 'an toàn', 'lần lượt', 'nhường'],
  doan: [
    { text: 'Chiều chủ nhật, em cùng các bạn ra công viên vui chơi. Công viên có cầu trượt, bập bênh và xích đu. Trẻ em cười nói vui vẻ.',
      hoi: [{ q: 'Chiều chủ nhật, em đi đâu?', dung: 'Ra công viên.', sai: ['Đi học.', 'Đi chợ.'] },
            { q: 'Công viên có đồ chơi gì?', dung: 'Cầu trượt, bập bênh, xích đu.', sai: ['Bàn học.', 'Bếp ga.'] }] },
    { text: 'Ở cầu trượt, các bạn xếp hàng lần lượt. Em không chen lấn, không xô đẩy. Bạn nhỏ hơn đến, em nhường bạn đi trước.',
      hoi: [{ q: 'Ở cầu trượt, các bạn làm gì?', dung: 'Xếp hàng lần lượt.', sai: ['Chen lấn nhau.', 'Trèo ngược lên.'] },
            { q: 'Bạn nhỏ hơn đến, em làm gì?', dung: 'Nhường bạn đi trước.', sai: ['Đẩy bạn ra.', 'Trêu bạn.'] }] },
    { text: 'Em chơi an toàn: không đứng trên xích đu, không chạy ra đường. Chơi xong, em bỏ rác vào thùng. Trời tối, em về nhà đúng giờ.',
      hoi: [{ q: 'Chơi an toàn là thế nào?', dung: 'Không đứng trên xích đu, không chạy ra đường.', sai: ['Đứng trên xích đu.', 'Chạy ra đường.'] },
            { q: 'Chơi xong, em làm gì?', dung: 'Bỏ rác vào thùng, về nhà đúng giờ.', sai: ['Vứt rác xuống cỏ.', 'Ở lại đến khuya.'] }] }
  ],
  hieu: [
    { q: 'Vì sao phải xếp hàng?', dung: 'Để ai cũng được chơi, không ai bị ngã.', sai: ['Để chơi lâu hơn bạn.', 'Để không ai được chơi.'] },
    { q: 'Việc nào không an toàn?', dung: 'Đứng trên xích đu.', sai: ['Ngồi ngay ngắn trên xích đu.', 'Xếp hàng chờ.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Chơi an toàn và nhường bạn.', sai: ['Chơi một mình.', 'Giành đồ chơi.'] }
  ],
  thuTu: ['Em ra công viên.', 'Em xếp hàng chờ cầu trượt.', 'Em trượt xuống thật vui.', 'Chơi xong, em bỏ rác vào thùng.'],
  cau: { mau: 'Ai chơi gì?', nhan: ['Ai?', 'chơi', 'gì?'], ds: ['Em|chơi|cầu trượt.', 'Hai bạn|chơi|bập bênh.', 'Các bạn|chơi|nhảy dây.', 'Anh em|chơi|thả diều.'] },
  dien: [
    { cau: 'Em cùng các bạn ra công ___ vui chơi.', dung: 'viên', sai: ['trường', 'ty'] },
    { cau: 'Ở cầu trượt, các bạn xếp hàng lần ___.', dung: 'lượt', sai: ['lượng', 'lướt'] },
    { cau: 'Bạn nhỏ hơn đến, em ___ bạn đi trước.', dung: 'nhường', sai: ['đẩy', 'trêu'] },
    { cau: 'Em không đứng trên xích ___.', dung: 'đu', sai: ['đo', 'đá'] },
    { cau: 'Chơi xong, em bỏ rác vào ___.', dung: 'thùng', sai: ['túi áo', 'cỏ'] }
  ],
  to: ['vui chơi', 'công viên', 'xếp hàng'],
  noi: ['Em thích chơi trò gì ở công viên?', 'Khi chơi, em cần nhớ điều gì để an toàn?', 'Em đã nhường bạn lần nào chưa?'],
  viet: ['Em thích chơi', 'Em chơi cùng', 'Khi chơi, em', 'Chơi xong, em']
};
docSetup();
