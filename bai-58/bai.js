/* Bài 58 · Vần ươn, ương — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "bươn – bươn chải", "nhường – anh nhường em" đổi thành "vườn – khu vườn", "đường – con đường" (dễ vẽ); bỏ "hoa phượng" (oa chưa học), "kim cương"; ba đoạn văn rút gọn thành ba câu (bỏ "trong", "cũng", "đua", "nảy lộc", "không khí", "rộn rã", "sức sống"); thêm "quê hương". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần ươn và vần ương nhé!'
});

const AM = {
  loai: 'van',
  am: ['ươn', 'ương'],
  kho: 7,
  tho: ['Anh em ruột,', 'Một mẹ cha,', 'Mẹ đẻ ra,', 'Trước sau đó.', 'Cùng máu mủ,', 'Như tay chân,',
        'Nên yêu thân,', 'Chớ ganh tị.', 'Em coi chị,', 'Cũng như anh,', 'Trước là tình,', 'Sau có lễ.'],
  onCu: { chu: ['ươm', 'ươp'], tu: ['con bướm', 'quả mướp', 'hạt cườm', 'vàng ươm', 'mèo mướp', 'nườm nượp'] },
  khoa: [
    { am: 'ươn', dau: 'v', tieng: 'vườn', tu: 'khu vườn' },
    { am: 'ương', dau: 'đ', tieng: 'đường', tu: 'con đường' }
  ],
  bang: { ươn: ['v', 'l', 's', 'm'], ương: ['đ', 'tr', 'gi', 'h'] },
  tu: { ươn: ['con lươn', 'con vượn', 'sườn đồi'], ương: ['trường học', 'giường ngủ', 'quê hương'] },
  cau: ['Tết sắp đến, thời tiết bớt lạnh hơn.', 'Bầy chim ríu rít hót vang trên cành cây.', 'Trên con đường đến trường, em thấy sườn đồi xanh.']
};

amSetup();
