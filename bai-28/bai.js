/* Bài 28 · Vần om, ôm, ơm — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: "tôm hùm" → "con tôm" (um chưa học); bỏ "thơm lừng", "hôm qua", "thơm tho"; câu "canh chua" → "cà chua" (anh chưa học); thêm "xóm nhỏ", "lom khom", "khóm tre", "cốm", "quả thơm". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học các vần om, ôm, ơm nhé!'
});

const AM = {
  loai: 'van',
  am: ['om', 'ôm', 'ơm'],
  kho: 14,
  tho: ['Đá bờ sông,', 'Không sống chết,', 'Không có biết,', 'Không có ăn,', 'Không người lăn,', 'Cứ nằm đây.',
        'Như đá cuội,', 'Như đá xanh,', 'Như mảnh sành,', 'Như đất thó,', 'Các vật đó,', 'Theo loài kim.'],
  onCu: { chu: ['am', 'ăm', 'âm'], tu: ['quả cam', 'củ sâm', 'con tằm', 'tấm gỗ', 'mầm cỏ', 'chăm chỉ'] },
  khoa: [
    { am: 'om', dau: 'đ', tieng: 'đóm', tu: 'đom đóm' },
    { am: 'ôm', dau: 't', tieng: 'tôm', tu: 'con tôm' },
    { am: 'ơm', dau: 'c', tieng: 'cơm', tu: 'ăn cơm' }
  ],
  bang: { om: ['đ', 'c', 'l', 'kh'], ôm: ['t', 'đ', 'c', 'h'], ơm: ['c', 'r', 'b', 'th'] },
  tu: { om: ['xóm nhỏ', 'lom khom', 'khóm tre'], ôm: ['chó đốm', 'mẹ ôm bé', 'cốm'], ơm: ['bơm xe', 'rơm khô', 'quả thơm'] },
  cau: ['Mẹ ôm bé, má mẹ kề má bé.', 'Bé thơm má mẹ.', 'Cả nhà ăn cơm, có cá, có cà chua.']
};

amSetup();
