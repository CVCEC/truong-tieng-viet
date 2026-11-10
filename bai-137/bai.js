/* Bài 137 · Ở nhà: nên và không nên — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng (tên slide: “Nhà ở – Nên/Không nên”); Trâu Con soạn theo chủ đề: việc nên làm ở nhà (giúp việc nhà, tắt đèn, khóa vòi nước)
   và việc không nên (nghịch ổ điện, bếp, dao kéo, leo cửa sổ, ban công). Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Ở nhà, làm việc tốt và tránh xa nguy hiểm.',
  khoi: [{ tu: 'bật đèn' }, { tu: 'cái phích' }, { tu: 'con dao' }, { tu: 'cửa sổ' }, { tu: 'lau nhà' }],
  tuMoi: [['nên', 'việc tốt, cần làm'], ['không nên', 'việc không tốt, không được làm'], ['ổ điện', 'chỗ cắm phích điện trên tường'], ['nguy hiểm', 'có thể làm mình bị thương'],
    ['ban công', 'chỗ đứng nhô ra ngoài nhà ở tầng cao'], ['tiết kiệm', 'dùng vừa đủ, không phí'], ['vòi nước', 'chỗ mở cho nước chảy'], ['bỏng', 'bị thương vì nóng']],
  tuKho: ['ổ điện', 'nguy hiểm', 'ban công', 'tiết kiệm', 'vòi nước', 'bỏng'],
  doan: [
    { text: 'Ở nhà, em nên giúp bố mẹ lau nhà, tưới cây, xếp dép. Ra khỏi phòng, em tắt đèn. Rửa tay xong, em khóa vòi nước để tiết kiệm.',
      hoi: [{ q: 'Ra khỏi phòng, em làm gì?', dung: 'Tắt đèn.', sai: ['Bật thêm đèn.', 'Mở ti vi.'] },
            { q: 'Vì sao em khóa vòi nước?', dung: 'Để tiết kiệm.', sai: ['Để nước chảy mãi.', 'Để chơi.'] }] },
    { text: 'Em không nên nghịch ổ điện vì dễ bị điện giật. Em không chạm vào bếp và phích nước nóng vì dễ bị bỏng. Em không cầm dao, kéo sắc để chơi.',
      hoi: [{ q: 'Vì sao không nghịch ổ điện?', dung: 'Vì dễ bị điện giật.', sai: ['Vì ổ điện bẩn.', 'Vì ổ điện xấu.'] },
            { q: 'Chạm vào phích nước nóng dễ bị gì?', dung: 'Bị bỏng.', sai: ['Bị lạnh.', 'Bị ướt.'] }] },
    { text: 'Em không leo trèo cửa sổ, ban công vì rất nguy hiểm. Khi thấy mùi khói hay đồ hỏng, em báo ngay cho người lớn.',
      hoi: [{ q: 'Vì sao không leo ban công?', dung: 'Vì rất nguy hiểm, dễ ngã.', sai: ['Vì ban công đẹp.', 'Vì có gió.'] },
            { q: 'Thấy mùi khói, em làm gì?', dung: 'Báo ngay cho người lớn.', sai: ['Lại gần xem.', 'Giấu đi.'] }] }
  ],
  hieu: [
    { q: 'Việc nào nên làm?', dung: 'Tưới cây giúp mẹ.', sai: ['Nghịch ổ điện.', 'Leo ban công.'] },
    { q: 'Việc nào không nên làm?', dung: 'Cầm dao để chơi.', sai: ['Xếp dép gọn.', 'Tắt đèn khi ra khỏi phòng.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Làm việc tốt và tránh xa nguy hiểm.', sai: ['Chơi gì cũng được.', 'Không cần nghe lời.'] }
  ],
  thuTu: ['Em rửa tay.', 'Em khóa vòi nước.', 'Em lau khô tay.', 'Em tắt đèn khi ra khỏi phòng.'],
  cau: { mau: 'Nên / Không nên', ds: ['Em nên|tắt đèn|khi ra khỏi phòng.', 'Em nên|khóa vòi nước.', 'Em không nên|nghịch|ổ điện.', 'Em không nên|leo|ban công.'] },
  dien: [
    { cau: 'Ra khỏi phòng, em tắt ___.', dung: 'đèn', sai: ['bát', 'sách'] },
    { cau: 'Rửa tay xong, em khóa vòi ___.', dung: 'nước', sai: ['gió', 'hoa'] },
    { cau: 'Nghịch ổ điện dễ bị điện ___.', dung: 'giật', sai: ['gió', 'sáng'] },
    { cau: 'Chạm vào bếp nóng dễ bị ___.', dung: 'bỏng', sai: ['bóng', 'lạnh'] },
    { cau: 'Em không leo trèo ___ công.', dung: 'ban', sai: ['bàn', 'bàng'] }
  ],
  to: ['nên', 'không nên', 'an toàn'],
  noi: ['Kể ba việc nên làm ở nhà.', 'Kể ba việc không nên làm ở nhà.', 'Khi thấy nguy hiểm, em làm gì?'],
  viet: ['Ở nhà, em nên', 'Em không nên', 'Vì', 'Khi thấy nguy hiểm, em']
};
docSetup();
