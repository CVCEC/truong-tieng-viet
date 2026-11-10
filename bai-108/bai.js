/* Bài 108 · Mua sắm — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: đi chợ cùng mẹ, ghi danh sách, hỏi giá lễ phép, trả tiền, cảm ơn, không đòi mua.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Mua sắm vừa đủ, nói năng lễ phép.',
  khoi: [{ tu: 'đi chợ' }, { tu: 'quả cam' }, { tu: 'cân' }, { tu: 'rổ cá' }, { tu: 'giỏ', tranh: 'Bà giữ giỏ.', cau: 'Bà xách giỏ đi chợ.' }],
  tuMoi: [['mua sắm', 'đi mua đồ cần dùng'], ['danh sách', 'các thứ ghi lần lượt trên giấy'], ['giá tiền', 'số tiền phải trả để mua'], ['người bán', 'người bán hàng'],
    ['trả tiền', 'đưa tiền cho người bán'], ['tiền thừa', 'tiền người bán trả lại'], ['cần thiết', 'phải có, không thể thiếu'], ['tiết kiệm', 'dùng vừa đủ, không phí']],
  tuKho: ['mua sắm', 'danh sách', 'giá tiền', 'trả tiền', 'tiền thừa', 'tiết kiệm'],
  doan: [
    { text: 'Chủ nhật, em cùng mẹ đi chợ mua sắm. Ở nhà, em giúp mẹ viết danh sách: rau, cá, cam và trứng. Có danh sách, mẹ con không quên món nào.',
      hoi: [{ q: 'Chủ nhật, em đi đâu cùng mẹ?', dung: 'Đi chợ.', sai: ['Đi học.', 'Đi biển.'] },
            { q: 'Vì sao phải viết danh sách?', dung: 'Để không quên món nào.', sai: ['Để tập vẽ.', 'Để gấp máy bay.'] }] },
    { text: 'Đến hàng hoa quả, em hỏi lễ phép: “Cô ơi, cam này bao nhiêu tiền một cân ạ?”. Người bán nói giá tiền rồi cân cam cho mẹ. Mẹ trả tiền, cô đưa lại tiền thừa.',
      hoi: [{ q: 'Em hỏi giá thế nào?', dung: '“Cô ơi, cam này bao nhiêu tiền một cân ạ?”', sai: ['“Bao nhiêu?”', '“Cam đắt thế!”'] },
            { q: 'Mẹ trả tiền, cô bán hàng làm gì?', dung: 'Đưa lại tiền thừa.', sai: ['Lấy thêm tiền.', 'Bỏ đi.'] }] },
    { text: 'Em thấy đồ chơi đẹp nhưng không đòi mua. Em chỉ mua đồ cần thiết để tiết kiệm. Mua xong, em cảm ơn cô bán hàng.',
      hoi: [{ q: 'Thấy đồ chơi đẹp, em làm gì?', dung: 'Không đòi mua.', sai: ['Khóc đòi mua.', 'Lấy luôn.'] },
            { q: 'Mua xong, em nói gì?', dung: 'Cảm ơn cô bán hàng.', sai: ['Không nói gì.', 'Chê cô bán đắt.'] }] }
  ],
  hieu: [
    { q: 'Vì sao em chỉ mua đồ cần thiết?', dung: 'Để tiết kiệm.', sai: ['Vì đồ chơi xấu.', 'Vì chợ đóng cửa.'] },
    { q: 'Khi hỏi giá, em cần nói thế nào?', dung: 'Lễ phép, có “ạ”.', sai: ['Nói trống không.', 'Hét thật to.'] },
    { q: 'Lấy đồ mà không trả tiền là việc làm thế nào?', dung: 'Sai, không được làm.', sai: ['Đúng, nên làm.', 'Không sao cả.'] }
  ],
  thuTu: ['Em giúp mẹ viết danh sách.', 'Em cùng mẹ đi chợ.', 'Em hỏi giá cam.', 'Mẹ trả tiền, em cảm ơn cô.'],
  cau: { mau: 'Hỏi giá', ds: ['Cô ơi,|cam này|bao nhiêu tiền|ạ?', 'Bác ơi,|rau này|bao nhiêu tiền|ạ?', 'Chú ơi,|cá này|bao nhiêu tiền|ạ?'] },
  dien: [
    { cau: 'Em giúp mẹ viết danh ___.', dung: 'sách', sai: ['bạ', 'thiếp'] },
    { cau: 'Cô ơi, cam này bao nhiêu tiền một ___ ạ?', dung: 'cân', sai: ['cái', 'con'] },
    { cau: 'Mẹ trả tiền, cô đưa lại tiền ___.', dung: 'thừa', sai: ['thiếu', 'lẻ'] },
    { cau: 'Em chỉ mua đồ cần thiết để tiết ___.', dung: 'kiệm', sai: ['mục', 'trời'] },
    { cau: 'Mua xong, em ___ ơn cô bán hàng.', dung: 'cảm', sai: ['nhớ', 'xin'] }
  ],
  to: ['mua sắm', 'trả tiền', 'tiết kiệm'],
  noi: ['Em hay đi mua sắm cùng ai?', 'Tập hỏi giá một món đồ thật lễ phép.', 'Vì sao không nên đòi mua đồ?'],
  viet: ['Em đi chợ cùng', 'Danh sách có', 'Em hỏi cô bán hàng', 'Mua xong, em']
};
docSetup();
