/* Bài 119 · Phòng bệnh sốt rét — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: muỗi truyền bệnh sốt rét; ngủ màn, mặc áo dài tay, dọn nước đọng, phát quang bụi rậm;
   sốt, rét run thì đi khám ngay. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Diệt muỗi, ngủ màn để phòng bệnh sốt rét.',
  khoi: [{ tu: 'nhiệt kế' }, { tu: 'bác sĩ' }, { tu: 'thùng rác' }, { tu: 'tuýp thuốc' },
    { tu: 'con muỗi', do: 'Con gì nhỏ xíu / Kêu vo ve vo / Đốt người ngứa ngáy / Ngủ màn là xong' }],
  tuMoi: [['sốt rét', 'bệnh làm người sốt cao, rét run'], ['muỗi', 'côn trùng nhỏ hút máu, kêu vo ve'], ['truyền bệnh', 'mang bệnh từ người này sang người khác'], ['mắc màn', 'treo màn để ngủ cho muỗi không đốt'],
    ['nước đọng', 'nước đứng yên lâu ngày trong chum, lốp xe'], ['bụi rậm', 'cây cỏ mọc dày, um tùm'], ['rét run', 'lạnh run cả người'], ['phòng bệnh', 'làm trước để không bị bệnh']],
  tuKho: ['sốt rét', 'truyền bệnh', 'mắc màn', 'nước đọng', 'bụi rậm', 'rét run'],
  doan: [
    { text: 'Sốt rét là bệnh do muỗi truyền bệnh. Muỗi đốt người bệnh rồi đốt người khỏe, bệnh sẽ lây sang. Người bị sốt rét thấy rét run rồi sốt cao.',
      hoi: [{ q: 'Con gì truyền bệnh sốt rét?', dung: 'Con muỗi.', sai: ['Con mèo.', 'Con cá.'] },
            { q: 'Người bị sốt rét thấy thế nào?', dung: 'Rét run rồi sốt cao.', sai: ['Rất khỏe.', 'Buồn cười.'] }] },
    { text: 'Muỗi đẻ trứng ở nước đọng và sống trong bụi rậm. Cả nhà em đậy kín chum vại, đổ nước đọng, phát quang bụi rậm quanh nhà.',
      hoi: [{ q: 'Muỗi đẻ trứng ở đâu?', dung: 'Ở nước đọng.', sai: ['Trên mây.', 'Trong tủ lạnh.'] },
            { q: 'Cả nhà em làm gì để diệt muỗi?', dung: 'Đổ nước đọng, phát quang bụi rậm.', sai: ['Trồng thêm bụi rậm.', 'Để chum vại mở nắp.'] }] },
    { text: 'Để phòng bệnh, buổi tối em mắc màn khi đi ngủ. Em mặc áo dài tay khi ra vườn. Nếu bị sốt, rét run, em báo ngay cho bố mẹ để đi bác sĩ khám.',
      hoi: [{ q: 'Buổi tối đi ngủ, em làm gì?', dung: 'Mắc màn.', sai: ['Mở toang cửa.', 'Ngủ ngoài vườn.'] },
            { q: 'Nếu bị sốt, em làm gì?', dung: 'Báo bố mẹ để đi bác sĩ.', sai: ['Giấu không nói.', 'Đi chơi tiếp.'] }] }
  ],
  hieu: [
    { q: 'Vì sao phải đổ nước đọng?', dung: 'Để muỗi không đẻ trứng.', sai: ['Để tưới cây.', 'Để có nước uống.'] },
    { q: 'Việc nào giúp phòng bệnh sốt rét?', dung: 'Ngủ màn.', sai: ['Để nước đọng.', 'Ngủ ngoài trời.'] },
    { q: 'Khi bố mẹ ốm, em làm gì?', dung: 'Hỏi han, lấy nước, chăm sóc bố mẹ.', sai: ['Chạy đi chơi.', 'Làm ồn.'] }
  ],
  thuTu: ['Muỗi đốt người bệnh.', 'Muỗi bay đi đốt người khỏe.', 'Người khỏe bị lây bệnh.', 'Người bệnh đi bác sĩ khám.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Em|mắc|màn.', 'Bố|đổ|nước đọng.', 'Mẹ|đậy|chum vại.', 'Bác sĩ|khám|bệnh.'] },
  dien: [
    { cau: 'Sốt rét là bệnh do ___ truyền.', dung: 'muỗi', sai: ['mèo', 'gió'] },
    { cau: 'Người bị sốt rét thấy ___ run.', dung: 'rét', sai: ['vui', 'nóng'] },
    { cau: 'Muỗi đẻ trứng ở nước ___.', dung: 'đọng', sai: ['chảy', 'nóng'] },
    { cau: 'Buổi tối, em mắc ___ khi đi ngủ.', dung: 'màn', sai: ['áo', 'mũ'] },
    { cau: 'Em mặc áo dài ___ khi ra vườn.', dung: 'tay', sai: ['chân', 'cổ'] }
  ],
  to: ['sốt rét', 'mắc màn', 'con muỗi'],
  noi: ['Nhà em làm gì để không có muỗi?', 'Khi bị ốm, em làm gì?', 'Khi bố mẹ ốm, em chăm sóc thế nào?'],
  viet: ['Sốt rét là bệnh', 'Để phòng bệnh, em', 'Buổi tối, em', 'Nếu bị sốt, em']
};
docSetup();
