/* Bài 53 · Vần uôc, uôt — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js
   Sửa so với slide: slide không có thơ Lên Sáu, trò thơ ôn lại một khổ đã học; khóa "thuộc – thuộc lòng", "buốt – lạnh buốt" đổi thành "guốc – đôi guốc", "chuột – con chuột" (dễ vẽ); ca dao "Con mèo mà trèo cây cau" giữ hai dòng đầu (dòng sau có "đường" chưa học); đoạn Hà bị ốm rút gọn; bỏ "ngọn đuốc", "vỉ thuốc"; thêm "tuốt lúa". */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Hôm nay mình học vần uôc và vần uôt nhé!'
});

const AM = {
  loai: 'van',
  am: ['uôc', 'uôt'],
  kho: 2,
  tho: ['Trong trời đất,', 'Nhất là người.', 'Ở trên đời,', 'Hơn giống vật.', 'Con bé thật,', 'Chưa biết gì.',
        'Phải dạy bảo,', 'Cho biết đạo,', 'Mới nên thân.', 'Sau lớn dần,', 'Con sẽ khá.'],
  onCu: { chu: ['uôi', 'uôm'], tu: ['quả chuối', 'cánh buồm', 'con ruồi', 'cá đuối', 'chuỗi hạt', 'quả muỗm'] },
  khoa: [
    { am: 'uôc', dau: 'g', tieng: 'guốc', tu: 'đôi guốc' },
    { am: 'uôt', dau: 'ch', tieng: 'chuột', tu: 'con chuột' }
  ],
  bang: { uôc: ['g', 'c', 'th', 'l'], uôt: ['ch', 'b', 'v', 't'] },
  tu: { uôc: ['cái cuốc', 'bạch tuộc', 'rau luộc'], uôt: ['rét buốt', 'vuốt râu', 'tuốt lúa'] },
  cau: ['Con mèo mà trèo cây cau.', 'Hỏi thăm chú chuột đi đâu vắng nhà.', 'Mẹ mua thuốc cho Hà.']
};

amSetup();
