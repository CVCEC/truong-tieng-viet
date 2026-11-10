/* Bài 127 · Bảo vệ rừng — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Slide rất nặng; Trâu Con soạn theo chủ đề: rừng cho không khí trong lành, gỗ, là nhà của muông thú, giữ đất khi mưa lũ;
   không chặt phá, không đốt lửa, trồng cây. Thơ mở đầu: Lên Tám (Tản Đà). */
const DOC = {
  y: 'Rừng là lá phổi xanh, em chung tay bảo vệ rừng.',
  khoi: [{ tu: 'rừng cây' }, { tu: 'con sóc' }, { tu: 'con hươu' }, { tu: 'cái rìu' }, { tu: 'gốc cây' }],
  tuMoi: [['muông thú', 'các loài thú'], ['trong lành', 'sạch, mát, dễ thở'], ['lá phổi xanh', 'nơi cho ta không khí sạch'], ['chặt phá', 'đốn cây bừa bãi'],
    ['cháy rừng', 'lửa đốt cháy cây trong rừng'], ['lũ lụt', 'nước dâng cao, tràn ngập'], ['trồng cây', 'đặt cây con xuống đất cho lớn lên'], ['chung tay', 'cùng nhau làm']],
  tuKho: ['muông thú', 'trong lành', 'lá phổi xanh', 'chặt phá', 'cháy rừng', 'chung tay'],
  doan: [
    { text: 'Rừng có nhiều cây xanh. Rừng cho ta không khí trong lành, nên được gọi là lá phổi xanh. Rừng còn là nhà của muông thú như hươu, sóc, chim.',
      hoi: [{ q: 'Vì sao rừng được gọi là lá phổi xanh?', dung: 'Vì rừng cho không khí trong lành.', sai: ['Vì lá cây màu đỏ.', 'Vì rừng biết thở.'] },
            { q: 'Rừng là nhà của ai?', dung: 'Của muông thú.', sai: ['Của cá voi.', 'Của ô tô.'] }] },
    { text: 'Rễ cây giữ đất. Khi mưa to, rừng giúp ngăn lũ lụt. Nếu chặt phá rừng, đất bị trôi, muông thú mất nhà.',
      hoi: [{ q: 'Rễ cây giúp gì?', dung: 'Giữ đất.', sai: ['Làm đất trôi.', 'Làm cây đổ.'] },
            { q: 'Nếu chặt phá rừng thì sao?', dung: 'Đất bị trôi, muông thú mất nhà.', sai: ['Rừng đẹp hơn.', 'Có nhiều thú hơn.'] }] },
    { text: 'Đi cắm trại, em không đốt lửa bừa bãi để tránh cháy rừng. Em không bẻ cành, không bắt chim. Tết trồng cây, em cùng bố trồng một cây non. Cả nhà chung tay bảo vệ rừng.',
      hoi: [{ q: 'Vì sao không đốt lửa bừa bãi?', dung: 'Để tránh cháy rừng.', sai: ['Để được ấm hơn.', 'Vì lửa đẹp.'] },
            { q: 'Tết trồng cây, em làm gì?', dung: 'Cùng bố trồng một cây non.', sai: ['Chặt một cây to.', 'Bẻ cành hoa.'] }] }
  ],
  hieu: [
    { q: 'Việc nào bảo vệ rừng?', dung: 'Trồng cây.', sai: ['Chặt phá rừng.', 'Đốt lửa bừa bãi.'] },
    { q: 'Rừng giúp gì khi mưa to?', dung: 'Ngăn lũ lụt.', sai: ['Làm mưa to hơn.', 'Không giúp gì.'] },
    { q: 'Bài đọc khuyên em điều gì?', dung: 'Chung tay bảo vệ rừng.', sai: ['Lấy gỗ thật nhiều.', 'Bắt chim về nuôi.'] }
  ],
  thuTu: ['Em đào một hố nhỏ.', 'Em đặt cây non xuống hố.', 'Em lấp đất quanh gốc.', 'Em tưới nước cho cây.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Em|trồng|cây non.', 'Bố|tưới|nước cho cây.', 'Con sóc|chuyền|cành cây.', 'Chúng em|bảo vệ|rừng xanh.'] },
  dien: [
    { cau: 'Rừng cho ta không khí trong ___.', dung: 'lành', sai: ['xanh', 'nóng'] },
    { cau: 'Rừng là nhà của muông ___.', dung: 'thú', sai: ['cá', 'xe'] },
    { cau: 'Rễ cây giữ ___.', dung: 'đất', sai: ['nước', 'gió'] },
    { cau: 'Em không đốt lửa bừa bãi để tránh cháy ___.', dung: 'rừng', sai: ['nhà', 'chợ'] },
    { cau: 'Cả nhà chung ___ bảo vệ rừng.', dung: 'tay', sai: ['chân', 'nhà'] }
  ],
  to: ['rừng xanh', 'trồng cây', 'muông thú'],
  noi: ['Rừng có ích gì cho chúng ta?', 'Em đã trồng cây bao giờ chưa?', 'Em làm gì để bảo vệ cây xanh?'],
  viet: ['Rừng cho ta', 'Rừng là nhà của', 'Để bảo vệ rừng, em', 'Em sẽ trồng']
};
docSetup();
