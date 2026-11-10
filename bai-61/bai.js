/* Bài 61 · Vần oai, uê, uy — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "thuê – thuê phòng", "huy – huy chương vàng" đổi thành "huệ – hoa huệ", "thủy – tàu thủy" (dễ vẽ); bỏ "hậu duệ", "chỉ huy"; đoạn hạt cát bỏ (tòa, uy nghi, quý giá… khó với trẻ); thêm "điện thoại", "thuê xe", "xum xuê", "huy hiệu", "khuy áo". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần oai, uê, uy nhé!'
});

const AM = {
  loai: 'van',
  am: ['oai', 'uê', 'uy'],
  kho: 10,
  tho: ['Con bé dại,', 'Mải vui chơi.', 'Muốn ra người,', 'Phải chăm học.', 'Miệng đang đọc,', 'Đừng trông ngang.',
        'Học dở dang,', 'Đừng có chán.', 'Học có bạn,', 'Con dễ hay.', 'Mến trọng thầy,', 'Học chóng biết.'],
  onCu: { chu: ['oan', 'oăn', 'oat', 'oăt'], tu: ['máy khoan', 'tóc xoăn', 'hoạt hình', 'loắt choắt', 'sách toán', 'bé ngoan'] },
  khoa: [
    { am: 'oai', dau: 'x', tieng: 'xoài', tu: 'quả xoài' },
    { am: 'uê', dau: 'h', tieng: 'huệ', tu: 'hoa huệ' },
    { am: 'uy', dau: 'th', tieng: 'thủy', tu: 'tàu thủy' }
  ],
  bang: { oai: ['x', 'kh', 'ng', 'l'], uê: ['h', 'th', 't', 'x'], uy: ['th', 'h', 'l', 'kh'] },
  tu: { oai: ['củ khoai', 'bà ngoại', 'điện thoại'], uê: ['cây vạn tuế', 'thuê xe', 'xum xuê'], uy: ['lũy tre', 'huy hiệu', 'khuy áo'] },
  cau: ['Mẹ cho bé về quê ngoại.', 'Ở quê có hoa huệ, hoa quế.', 'Bé nhớ lũy tre và cây vạn tuế.']
};

amSetup();
