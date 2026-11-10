/* Ôn tập số 6 · Bài 37–41: oc, ôc, uc, ưc, at, ăt, ât, ot, ôt, ơt, et, êt, it, ut, ưt — chỉ có dữ liệu; trò chơi ở chung/mau/bo-doc.js
   Theo slide “Bài ôn tập số 6 (37-41)”: đoàn tàu vần, từ phân loại theo bài, câu luyện đọc và đoạn văn ngày Tết.
   Sửa theo nguyên tắc chỉ dùng vần đã học: đoạn văn viết lại ngắn (bỏ “mồng, dựng, trước, bánh, bình, Việt, viết, đẹp, vườn, cũng, trong”);
   “Thợ mộc đóng chiếc bàn” → “Thợ mộc làm cái bàn”; “sáng long lanh” → “đen láy”; “Bé viết từng nét” → “Bé tô nét chữ”.
   Đoạn văn chia thành 3 đoạn; câu hỏi trắc nghiệm do Trâu Con soạn. */
const DOC = {
  nhom: [
    { bai: 37, chu: ['oc', 'ôc', 'uc', 'ưc'], tu: ['cóc', 'mộc', 'cúc', 'mực'] },
    { bai: 38, chu: ['at', 'ăt', 'ât'], tu: ['cát', 'mắt', 'đất', 'hạt'] },
    { bai: 39, chu: ['ot', 'ôt', 'ơt'], tu: ['hót', 'cột', 'vớt', 'ớt'] },
    { bai: 40, chu: ['et', 'êt', 'it'], tu: ['nét', 'Tết', 'mít', 'vịt'] },
    { bai: 41, chu: ['ut', 'ưt'], tu: ['bút', 'mứt', 'đứt', 'phút'] }
  ],
  y: 'Đọc rõ âm chính và âm cuối của từng vần.',
  khoi: [{ tu: 'con cóc' }, { tu: 'thợ mộc' }, { tu: 'con mực' }, { tu: 'bãi cát' }, { tu: 'quả mít' }],
  tuMoi: [['thợ mộc', 'người làm đồ bằng gỗ'], ['bãi cát', 'chỗ có nhiều cát bên bờ'], ['cột cờ', 'cột cao để treo cờ'], ['vớt cá', 'lấy cá lên khỏi nước'],
    ['mứt Tết', 'đồ ngọt ăn vào ngày Tết'], ['ríu rít', 'tiếng chim kêu vui, liên tục'], ['đen láy', 'đen và sáng'], ['lời chúc', 'câu nói mong điều tốt cho người khác']],
  tuKho: ['hoa cúc', 'đôi mắt', 'chim hót', 'nét chữ', 'bút mực', 'ngày Tết'],
  doan: [
    { text: 'Ngày Tết, cả nhà dậy sớm. Bố treo cờ lên cột ở sân.',
      hoi: [{ q: 'Ngày Tết, cả nhà làm gì?', dung: 'Cả nhà dậy sớm.', sai: ['Cả nhà ngủ dậy trễ.', 'Cả nhà đi vớt cá.'] },
            { q: 'Bố treo cờ ở đâu?', dung: 'Lên cột ở sân.', sai: ['Lên cây mít.', 'Ở bãi cát.'] }] },
    { text: 'Mẹ bày mứt Tết và hoa cúc. Bé Tâm cầm bút mực ghi lời chúc Tết.',
      hoi: [{ q: 'Mẹ bày những gì?', dung: 'Mứt Tết và hoa cúc.', sai: ['Ớt và cà chua.', 'Bút và vở.'] },
            { q: 'Bé Tâm ghi gì?', dung: 'Lời chúc Tết.', sai: ['Nét chữ a.', 'Tên con cóc.'] }] },
    { text: 'Ở sau nhà, chim hót ríu rít trên cây mít. Ai nấy đều vui vì Tết đã về.',
      hoi: [{ q: 'Chim hót ở đâu?', dung: 'Trên cây mít.', sai: ['Trên cột cờ.', 'Trên bãi cát.'] },
            { q: 'Vì sao ai nấy đều vui?', dung: 'Vì Tết đã về.', sai: ['Vì trời mưa.', 'Vì bé ốm.'] }] }
  ],
  hieu: [
    { q: 'Đoạn văn kể về ngày gì?', dung: 'Ngày Tết.', sai: ['Ngày đi học.', 'Ngày đi biển.'] },
    { q: 'Tiếng nào có vần “ưt”?', dung: 'mứt', sai: ['mít', 'mắt'] },
    { q: 'Tiếng nào có vần “ôt”?', dung: 'cột', sai: ['hót', 'vớt'] }
  ],
  thuTu: ['Cả nhà dậy sớm.', 'Bố treo cờ lên cột ở sân.', 'Mẹ bày mứt Tết và hoa cúc.', 'Bé Tâm ghi lời chúc Tết.'],
  cau: { mau: 'Ai làm gì?', nhan: ['Ai?', 'làm', 'gì?'], ds: ['Thợ mộc|làm|cái bàn.', 'Mẹ|làm|mứt.', 'Bé|tô|nét chữ.', 'Bố|treo|cờ.'] },
  dien: [
    { cau: 'Con ___ ngồi bên gốc cây.', dung: 'cóc', sai: ['cúc', 'cát'] },
    { cau: 'Lá cờ bay trên ___ cao.', dung: 'cột', sai: ['cát', 'cút'] },
    { cau: 'Ngày Tết, mẹ làm ___.', dung: 'mứt', sai: ['mít', 'mắt'] },
    { cau: 'Bé tô nét chữ bằng bút ___.', dung: 'mực', sai: ['mộc', 'mứt'] },
    { cau: 'Đôi ___ bé đen láy.', dung: 'mắt', sai: ['mứt', 'mít'] }
  ],
  to: ['hoa cúc', 'quả mít', 'bút'],
  noi: ['Ngày Tết, nhà em làm gì?', 'Em thích ăn mứt gì?', 'Nói một câu có tiếng “bút”.'],
  viet: ['Ngày Tết', 'Mẹ bày', 'Bé tô', 'Chim hót']
};
docSetup();
