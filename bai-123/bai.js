/* Bài 123 · Động vật trên cạn — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: vật nuôi và thú rừng, đặc điểm voi, hươu cao cổ, khỉ, thỏ; yêu quý, bảo vệ động vật.
   Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Em yêu quý và bảo vệ các loài động vật.',
  khoi: [{ tu: 'con voi' }, { tu: 'hươu cao cổ' }, { tu: 'chú khỉ' }, { tu: 'thỏ' }, { tu: 'sư tử' }],
  tuMoi: [['động vật', 'các loài vật'], ['trên cạn', 'sống trên mặt đất, không ở dưới nước'], ['vật nuôi', 'con vật người nuôi trong nhà'], ['thú rừng', 'con vật sống trong rừng'],
    ['vòi', 'mũi dài của con voi'], ['chuyền cành', 'nhảy từ cành này sang cành khác'], ['sở thú', 'nơi nuôi nhiều con vật cho mọi người xem'], ['bảo vệ', 'giữ gìn cho an toàn']],
  tuKho: ['động vật', 'trên cạn', 'vật nuôi', 'thú rừng', 'chuyền cành', 'sở thú'],
  doan: [
    { text: 'Có nhiều động vật sống trên cạn. Chó, mèo, gà, trâu là vật nuôi trong nhà. Voi, hổ, khỉ, hươu là thú rừng.',
      hoi: [{ q: 'Con nào là vật nuôi?', dung: 'Con mèo.', sai: ['Con hổ.', 'Con voi.'] },
            { q: 'Con nào là thú rừng?', dung: 'Con khỉ.', sai: ['Con gà.', 'Con chó.'] }] },
    { text: 'Chủ nhật, cả nhà đi sở thú. Con voi to lớn, có cái vòi dài. Hươu cao cổ có cổ rất dài để ăn lá trên cao. Chú khỉ nhanh nhẹn chuyền cành.',
      hoi: [{ q: 'Con voi có gì dài?', dung: 'Cái vòi.', sai: ['Cái đuôi ngắn.', 'Đôi cánh.'] },
            { q: 'Hươu cao cổ có cổ dài để làm gì?', dung: 'Để ăn lá trên cao.', sai: ['Để bơi.', 'Để hát.'] }] },
    { text: 'Ở sở thú, em không ném đồ, không trêu chọc con vật. Ở nhà, em cho mèo ăn và chơi với chó nhẹ nhàng. Em yêu quý và bảo vệ động vật.',
      hoi: [{ q: 'Ở sở thú, em không làm gì?', dung: 'Không trêu chọc con vật.', sai: ['Không nhìn con vật.', 'Không đi bộ.'] },
            { q: 'Ở nhà, em làm gì với con mèo?', dung: 'Cho mèo ăn.', sai: ['Kéo đuôi mèo.', 'Đuổi mèo đi.'] }] }
  ],
  hieu: [
    { q: 'Vật nuôi sống ở đâu?', dung: 'Trong nhà, với con người.', sai: ['Trong rừng sâu.', 'Dưới biển.'] },
    { q: 'Con nào chuyền cành giỏi?', dung: 'Chú khỉ.', sai: ['Con voi.', 'Con trâu.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Yêu quý, bảo vệ động vật.', sai: ['Trêu chọc con vật.', 'Bắt chim về nhốt.'] }
  ],
  thuTu: ['Cả nhà đi sở thú.', 'Em xem con voi.', 'Em xem hươu cao cổ.', 'Em xem chú khỉ chuyền cành.'],
  cau: { mau: 'Con gì thế nào?', nhan: ['Con gì?', 'thế nào?'], ds: ['Con voi|to lớn.', 'Chú khỉ|nhanh nhẹn.', 'Con thỏ|hiền lành.', 'Hươu cao cổ|cổ rất dài.'] },
  dien: [
    { cau: 'Chó, mèo, gà là vật ___ trong nhà.', dung: 'nuôi', sai: ['rừng', 'biển'] },
    { cau: 'Con voi có cái ___ dài.', dung: 'vòi', sai: ['vây', 'mỏ'] },
    { cau: 'Hươu cao ___ ăn lá trên cao.', dung: 'cổ', sai: ['chân', 'tay'] },
    { cau: 'Chú khỉ nhanh nhẹn chuyền ___.', dung: 'cành', sai: ['bóng', 'tay'] },
    { cau: 'Em yêu quý và bảo ___ động vật.', dung: 'vệ', sai: ['ban', 'cho'] }
  ],
  to: ['động vật', 'con voi', 'chú khỉ'],
  noi: ['Em thích con vật nào nhất? Vì sao?', 'Nhà em có nuôi con vật nào không?', 'Đi sở thú, em cần nhớ điều gì?'],
  viet: ['Con vật em thích là', 'Nó có', 'Nó thích', 'Em sẽ']
};
docSetup();
