/* Bài 136 · Nhà ở — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: các kiểu nhà (nhà sàn, nhà lá, nhà tầng, căn hộ), các phòng trong nhà, giữ nhà sạch đẹp.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Nhà là tổ ấm, em giữ nhà sạch đẹp.',
  khoi: [{ tu: 'nhà sàn' }, { tu: 'nhà lá' }, { tu: 'nhà tầng' }, { tu: 'tòa nhà' }, { tu: 'cửa sổ' }],
  tuMoi: [['nhà sàn', 'nhà dựng trên cột, cao khỏi mặt đất'], ['nhà tầng', 'nhà có nhiều tầng'], ['căn hộ', 'nhà ở trong một tòa nhà lớn'], ['phòng khách', 'phòng tiếp khách'],
    ['phòng ngủ', 'phòng để ngủ'], ['nhà bếp', 'nơi nấu ăn'], ['tổ ấm', 'nhà có gia đình yêu thương'], ['sạch sẽ', 'không bẩn, gọn gàng']],
  tuKho: ['nhà sàn', 'căn hộ', 'phòng khách', 'nhà bếp', 'tổ ấm', 'sạch sẽ'],
  doan: [
    { text: 'Có nhiều kiểu nhà ở. Trên núi có nhà sàn dựng trên cột cao. Ở quê có nhà lá, nhà ngói. Ở thành phố có nhà tầng và căn hộ trong tòa nhà lớn.',
      hoi: [{ q: 'Nhà sàn dựng trên gì?', dung: 'Trên cột cao.', sai: ['Trên nước.', 'Trên mây.'] },
            { q: 'Ở thành phố có kiểu nhà nào?', dung: 'Nhà tầng và căn hộ.', sai: ['Chỉ có nhà sàn.', 'Lều tuyết.'] }] },
    { text: 'Nhà em có phòng khách, nhà bếp và phòng ngủ. Phòng khách để tiếp khách. Nhà bếp là nơi mẹ nấu ăn. Phòng ngủ có giường và tủ quần áo.',
      hoi: [{ q: 'Phòng khách để làm gì?', dung: 'Để tiếp khách.', sai: ['Để nấu ăn.', 'Để tắm.'] },
            { q: 'Mẹ nấu ăn ở đâu?', dung: 'Nhà bếp.', sai: ['Phòng ngủ.', 'Ngoài sân.'] }] },
    { text: 'Nhà là tổ ấm của gia đình. Em giữ nhà sạch sẽ: xếp đồ chơi gọn, không vẽ bậy lên tường. Bàn học của em lúc nào cũng ngăn nắp.',
      hoi: [{ q: 'Nhà là gì của gia đình?', dung: 'Tổ ấm.', sai: ['Cửa hàng.', 'Trường học.'] },
            { q: 'Em giữ nhà sạch sẽ thế nào?', dung: 'Xếp đồ chơi gọn, không vẽ bậy lên tường.', sai: ['Vẽ lên tường.', 'Vứt đồ khắp nơi.'] }] }
  ],
  hieu: [
    { q: 'Giường và tủ quần áo ở phòng nào?', dung: 'Phòng ngủ.', sai: ['Nhà bếp.', 'Phòng khách.'] },
    { q: 'Vì sao gọi nhà là tổ ấm?', dung: 'Vì có gia đình yêu thương nhau.', sai: ['Vì nhà rất nóng.', 'Vì nhà có chim.'] },
    { q: 'Việc nào làm nhà bừa bộn?', dung: 'Vứt đồ chơi khắp nơi.', sai: ['Xếp đồ gọn gàng.', 'Lau bàn học.'] }
  ],
  thuTu: ['Khách đến chơi nhà.', 'Em mời khách vào phòng khách.', 'Em rót nước mời khách.', 'Khách về, em chào tạm biệt.'],
  cau: { mau: 'Ở đâu có gì?', nhan: ['Ở đâu?', 'có', 'gì?'], ds: ['Phòng khách|có|bàn ghế.', 'Phòng ngủ|có|giường.', 'Nhà bếp|có|nồi niêu.', 'Phòng học|có|bàn học.'] },
  dien: [
    { cau: 'Trên núi có nhà ___ dựng trên cột cao.', dung: 'sàn', sai: ['lá', 'tầng'] },
    { cau: 'Ở thành phố có căn ___ trong tòa nhà lớn.', dung: 'hộ', sai: ['phòng', 'nhà'] },
    { cau: 'Mẹ nấu ăn ở nhà ___.', dung: 'bếp', sai: ['tắm', 'khách'] },
    { cau: 'Nhà là tổ ___ của gia đình.', dung: 'ấm', sai: ['chim', 'kiến'] },
    { cau: 'Em không vẽ bậy lên ___.', dung: 'tường', sai: ['giấy', 'vở'] }
  ],
  to: ['nhà sàn', 'tổ ấm', 'nhà bếp'],
  noi: ['Nhà em có những phòng nào?', 'Em thích phòng nào nhất? Vì sao?', 'Em giữ nhà sạch sẽ thế nào?'],
  viet: ['Nhà em là', 'Nhà em có', 'Em thích', 'Em giữ nhà sạch bằng cách']
};
docSetup();
