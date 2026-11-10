/* Bài 1 — phần riêng của bài: dữ liệu, lời thoại, tranh, trò chơi.
   Phần chung (giao diện, giọng Trâu Con, kéo thả, chuẩn chữ) nằm trong chung/. */
/* =====================================================================
   DỮ LIỆU BÀI HỌC
   ===================================================================== */
const POEM = ['Sách quốc ngữ,', 'Chữ nước ta.', 'Con cái nhà,', 'Đều phải học.', 'Miệng thì đọc,', 'Tai thì nghe.', 'Chớ ngủ nhè,', 'Chớ láu táu.', 'Con lên sáu,', 'Đang vỡ lòng,', 'Học cho thông,', 'Thầy khỏi mắng.'];
const WORD_PIC = { 'đu đủ':'papaya', 'trâu':'trau', 'nhà':'house', 'cặp':'bag', 'cá':'fish', 'gà':'hen', 'lá':'leaf', 'xe':'bike', 'vở':'notebook', 'mũ':'cap', 'nón':'nonla', 'ô':'umbrella', 'sen':'lotus', 'tô':'bowl', 'tôm':'shrimp', 'ốc':'snail', 'mắt':'eye', 'cốc':'cup', 'ấm':'teapot', 'em':'child' };
const TONE_SETS = [['la','là','lá','lạ','lả','lã'], ['ma','mà','má','mạ','mả','mã']];

/* Lời thoại riêng của bài (lời thoại chung nằm trong chung/dong-co.js) */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Mình là Trâu Con. Hôm nay mình cùng các bạn học Bài 1: bảng chữ cái, nguyên âm và phụ âm nhé!',
  'g1-intro': 'Các bạn ơi, mình cùng đọc bài thơ Lên Sáu của nhà thơ Tản Đà nhé. Các bạn chạm vào từng câu thơ để nghe mình đọc.',
  'g1-title': 'Lên Sáu. Thơ Tản Đà.',
  'g1-pick': 'Các bạn nghe câu thơ, rồi chạm vào bức tranh đúng nhé!',
  'g1-order': 'Các bạn xếp các câu thơ theo đúng thứ tự nhé! Chạm vào câu thơ để nghe.',
  'g1-place': 'Câu thơ này chưa đúng chỗ. Các bạn thử lại nhé!',
  'g2-intro': 'Có hai đoàn tàu đang chờ các bạn. Tàu vàng chở nguyên âm, tàu xanh chở phụ âm. Các bạn đưa từng chữ lên đúng tàu nhé!',
  'g2-to-v': 'là nguyên âm, lên tàu vàng các bạn nhé!',
  'g2-to-c': 'là phụ âm, lên tàu xanh các bạn nhé!',
  'g2-go': 'Tu tu! Đủ hai mươi chín chữ cái rồi. Tàu chạy thôi các bạn ơi!',
  'g3-intro': 'Mỗi chữ in hoa có một người bạn là chữ in thường. Các bạn chạm vào hai chữ là đôi bạn nhé!',
  'g3-flip': 'Các bạn lật hai thẻ, tìm hai chữ là đôi bạn nhé!',
  'g3-no': 'Hai chữ này chưa phải đôi bạn. Thử lại nhé!',
  'g4-v': 'Nguyên âm trốn ở đâu? Các bạn chạm vào các nguyên âm trong tiếng',
  'g4-c': 'Phụ âm trốn ở đâu? Các bạn chạm vào các phụ âm trong tiếng',
  'g4-not-v': 'là phụ âm. Các bạn tìm nguyên âm nhé!',
  'g4-not-c': 'là nguyên âm. Các bạn tìm phụ âm nhé!',
  'g4-all': 'Các bạn tìm được hết rồi!',
  'g5-intro': 'Mỗi tiếng giống như một ngôi nhà có ba phòng: âm đầu, âm chính và âm cuối. Các bạn đưa từng chữ vào đúng phòng nhé!',
  'g5-word': 'Mình cùng xây nhà cho tiếng',
  'g5-tone': 'Tiếng này mang thanh gì? Các bạn đặt dấu thanh lên mái nhà nhé!',
  'g5-main-v': 'Phòng âm chính dành cho nguyên âm các bạn ạ.',
  'g5-no-onset': 'Tiếng này không có âm đầu đâu các bạn ạ.',
  'g5-no-coda': 'Tiếng này không có âm cuối đâu các bạn ạ.',
  'g5-other': 'Chữ này ở phòng khác cơ. Thử lại nhé!',
  'g5-remember': 'Các bạn nhớ nhé: mỗi tiếng luôn phải có âm chính.',
  'g6-intro': 'Các bạn nghe mình đọc, rồi đặt dấu thanh lên chữ a nhé!',
  'g6-listen': 'Các bạn nghe nhé:',
  'g6-made': 'Đây là tiếng',
  'g6-need': 'Mình cần tiếng',
  'g6-nang': 'Dấu nặng thì đặt ở dưới chữ a các bạn nhé.',
  'g7-intro': 'Các bạn đặt ngón tay vào chấm xanh, rồi tô theo nét chấm đỏ nhé!',
  'g7-start': 'Các bạn bắt đầu từ chấm xanh nhé!',
  'g7-off': 'Các bạn tô sát theo nét chấm đỏ nhé!'
});

// Các nét cơ bản, đơn vị: ô li; y = 0 là đường kẻ dưới, y âm là phía trên.
const STROKES = [
  { id: 'ngang', name: 'Nét ngang', d: 'M0 -1 L2 -1' },
  { id: 'so-thang', name: 'Nét sổ thẳng', d: 'M1 -2 L1 0' },
  { id: 'xien-trai', name: 'Nét xiên trái', d: 'M1 -2 L0 0' },
  { id: 'xien-phai', name: 'Nét xiên phải', d: 'M0 -2 L1 0' },
  { id: 'moc-xuoi', name: 'Nét móc xuôi', d: 'M0 -1.3 Q0.35 -2.1 0.8 -1.95 Q1.05 -1.85 1.05 -1.45 L1.05 0' },
  { id: 'moc-nguoc', name: 'Nét móc ngược', d: 'M0 -2 L0 -0.45 Q0 0 0.4 0 Q0.8 0 1.05 -0.6' },
  { id: 'moc-hai-dau', name: 'Nét móc hai đầu', d: 'M0 -1.3 Q0.35 -2.1 0.8 -1.95 Q1.05 -1.85 1.05 -1.45 L1.05 -0.45 Q1.05 0 1.45 0 Q1.85 0 2.1 -0.6' },
  { id: 'cong-ho-phai', name: 'Nét cong hở phải', d: 'M1.6 -1.65 C1.3 -2.1 0.1 -2.1 0.05 -1 C0.05 0.1 1.3 0.1 1.65 -0.4' },
  { id: 'cong-ho-trai', name: 'Nét cong hở trái', d: 'M0.05 -1.65 C0.35 -2.1 1.55 -2.1 1.6 -1 C1.6 0.1 0.35 0.1 0 -0.4' },
  { id: 'cong-kin', name: 'Nét cong kín', d: 'M1.45 -1.8 C1.1 -2.15 0.05 -2 0.05 -1 C0.05 0.05 1.75 0.05 1.75 -1 C1.75 -1.45 1.65 -1.65 1.45 -1.8' },
  { id: 'khuyet-tren', name: 'Nét khuyết trên', d: 'M-0.2 -1.2 C0.4 -2 1.05 -3.6 0.95 -4.4 C0.85 -5.2 0.2 -5.1 0.3 -4.2 L0.3 0' },
  { id: 'khuyet-duoi', name: 'Nét khuyết dưới', d: 'M0.6 -2 L0.6 2.2 C0.6 3.1 -0.05 3.15 0 2.4 C0.05 1.6 0.8 0.3 1.3 -0.4' }
];

Object.keys(WORD_PIC).forEach(w => { CLIPS['w:' + w] = w; });
TONE_SETS.flat().forEach(w => { CLIPS['w:' + w] = w; });
POEM.forEach((line, i) => { CLIPS['p:' + (i + 1)] = line; });
STROKES.forEach(s => { CLIPS['n:' + s.id] = s.name; });

/* =====================================================================
   HÌNH VẼ — Trâu Con và tranh minh họa (nét than chì, màu thương hiệu)
   ===================================================================== */
const ICONS = {
  papaya: SV(`<path d="M31 18 q3 -8 10 -7"/><ellipse cx="36" cy="52" rx="19" ry="33" transform="rotate(-18 36 52)" fill="#9BC46A"/><ellipse cx="63" cy="57" rx="21" ry="32" transform="rotate(14 63 57)" fill="#9BC46A"/><ellipse cx="63" cy="57" rx="16" ry="26" transform="rotate(14 63 57)" fill="#F4A04F" stroke="none"/><ellipse cx="64" cy="58" rx="7" ry="14" transform="rotate(14 64 58)" fill="#E07F36" stroke="none"/><g fill="#3A3B3C" stroke="none"><circle cx="61" cy="49" r="2.3"/><circle cx="66" cy="54" r="2.3"/><circle cx="61" cy="58" r="2.3"/><circle cx="66" cy="63" r="2.3"/><circle cx="63" cy="68" r="2.3"/><circle cx="59" cy="53" r="2"/></g>`),
  house: SV(`<path d="M10 86 H90"/><rect x="22" y="48" width="56" height="38" rx="2" fill="#F6E7CF"/><path d="M14 51 L50 21 L86 51 Z" fill="#D9653B"/><path d="M27 41 H73 M36 33 H64" stroke="#A94A28" stroke-width="2"/><rect x="44" y="61" width="14" height="25" rx="2" fill="#6E9E5A"/><rect x="27" y="57" width="11" height="11" fill="#BFDDE8"/><rect x="64" y="57" width="11" height="11" fill="#BFDDE8"/>`),
  bag: SV(`<path d="M38 24 q12 -12 24 0" stroke-width="4"/><rect x="22" y="24" width="56" height="62" rx="14" fill="#4D74A8"/><path d="M22 40 H78"/><rect x="44" y="34" width="12" height="11" rx="2" fill="#E8E2D4"/><rect x="31" y="56" width="38" height="24" rx="8" fill="#D9573F"/>`),
  fish: SV(`<path d="M50 33 q8 -10 16 -1" fill="#F6BC7E"/><path d="M16 50 C28 27 62 27 72 50 C62 73 28 73 16 50 Z" fill="#F29A4A"/><path d="M70 50 L90 33 L86 50 L90 67 Z" fill="#F29A4A"/><circle cx="31" cy="46" r="4" fill="#3A3B3C" stroke="none"/><path d="M43 39 q7 11 0 22" stroke-width="2.5"/>`),
  hen: SV(`<path d="M44 80 V90 M39 92 L44 90 L49 92 M60 80 V90 M55 92 L60 90 L65 92" stroke="#D9982B"/><path d="M72 52 q14 -24 20 2 q0 12 -14 12 Z" fill="#C9763A"/><ellipse cx="52" cy="60" rx="28" ry="22" fill="#EDBE7A"/><circle cx="31" cy="37" r="13" fill="#EDBE7A"/><path d="M24 26 q2 -9 7 -3 q3 -8 8 0 q3 4 -2 7 Z" fill="#D94A3A"/><path d="M18 37 L9 40 L18 43 Z" fill="#F2C14E"/><circle cx="28" cy="35" r="2.3" fill="#3A3B3C" stroke="none"/><path d="M20 45 q1 6 6 2" fill="#D94A3A"/><path d="M42 57 q11 11 24 0" stroke-width="2.5"/>`),
  leaf: SV(`<path d="M22 78 L12 90"/><path d="M22 78 C18 40 46 16 86 16 C86 56 60 84 22 78 Z" fill="#7DB25A"/><path d="M22 78 L72 28"/><path d="M38 62 V48 M50 50 V36 M62 38 L63 28 M38 62 H52 M50 50 L64 52 M62 38 L74 40" stroke-width="2"/>`),
  bike: SV(`<circle cx="25" cy="64" r="16" fill="#FFFCF6"/><circle cx="75" cy="64" r="16" fill="#FFFCF6"/><path d="M25 64 L42 40 L66 40 L75 64 M42 40 L51 64 L66 40 M51 64 H25" stroke="#D9573F" stroke-width="4"/><path d="M42 40 L38 30 M32 30 H45 M66 40 L64 28 L73 26" stroke-width="4"/><circle cx="25" cy="64" r="2.5" fill="#3A3B3C"/><circle cx="75" cy="64" r="2.5" fill="#3A3B3C"/>`),
  notebook: SV(`<rect x="24" y="14" width="54" height="72" rx="5" fill="#9FC7D9"/><path d="M31 14 V86" stroke-width="2.5"/><rect x="38" y="28" width="32" height="20" rx="3" fill="#FFFCF6"/><path d="M42 35 H66 M42 41 H59" stroke-width="2"/><path d="M38 62 H70 M38 70 H70" stroke="#6F98AB" stroke-width="2"/>`),
  cap: SV(`<path d="M18 64 C18 34 72 30 76 60 Z" fill="#D9573F"/><path d="M70 60 C82 58 94 62 94 68 L68 67 Z" fill="#B8432E"/><path d="M47 34 V62" stroke-width="2"/><circle cx="47" cy="33" r="4" fill="#B8432E"/><path d="M18 64 H72"/>`),
  nonla: SV(`<path d="M50 12 L90 64 Q50 76 10 64 Z" fill="#DDAA55"/><path d="M50 12 L30 70 M50 12 L42 73 M50 12 L58 73 M50 12 L70 70" stroke="#B9873E" stroke-width="2"/><path d="M28 44 Q50 51 72 44 M38 30 Q50 34 62 30" stroke="#B9873E" stroke-width="2"/><path d="M14 67 Q24 92 50 90 Q76 92 86 67" stroke="#E58F7B" stroke-width="3.5"/>`),
  umbrella: SV(`<path d="M50 24 V17" stroke-width="4"/><path d="M50 50 V80 q0 8 -8 8 q-6 0 -6 -6" stroke-width="4"/><path d="M12 50 C14 22 86 22 88 50 C82 44 74 44 69 50 C63 44 56 44 50 50 C44 44 37 44 31 50 C26 44 18 44 12 50 Z" fill="#E86B5A"/><path d="M50 25 C40 32 34 42 31 50 M50 25 C60 32 66 42 69 50" stroke-width="2"/>`),
  lotus: SV(`<path d="M12 78 Q50 62 88 78 Q50 94 12 78 Z" fill="#7DB25A"/><path d="M50 74 C33 72 21 58 20 43 C34 45 45 54 50 74 Z" fill="#F7BFCB"/><path d="M50 74 C67 72 79 58 80 43 C66 45 55 54 50 74 Z" fill="#F7BFCB"/><path d="M50 74 C36 63 34 42 50 22 C66 42 64 63 50 74 Z" fill="#F29AB0"/>`),
  bowl: SV(`<path d="M36 36 q-4 -8 2 -14 M50 34 q-4 -8 2 -14 M64 36 q-4 -8 2 -14" stroke="#A39588" stroke-width="2.5"/><rect x="36" y="80" width="28" height="8" rx="2" fill="#FFFCF6"/><path d="M12 46 H88 C88 70 72 84 50 84 C28 84 12 70 12 46 Z" fill="#FFFCF6"/><path d="M17 57 H83" stroke="#4D74A8" stroke-width="3.5"/><path d="M28 66 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0" stroke="#4D74A8" stroke-width="2"/>`),
  shrimp: SV(`<path d="M72 30 C80 18 88 14 94 12 M70 30 C72 18 78 10 84 6" stroke-width="2"/><path d="M48 80 l-3 8 M58 80 l0 8 M67 76 l3 7" stroke-width="2"/><path d="M24 64 L11 55 L13 71 Z" fill="#F28A5A"/><path d="M72 30 C90 44 84 74 58 80 C42 84 28 76 24 64 L40 60 C44 66 50 68 58 66 C70 62 72 48 63 38 Z" fill="#F28A5A"/><path d="M50 66 L53 60 M59 64 L61 56 M67 57 L72 53 M69 46 L76 45" stroke-width="2"/><circle cx="69" cy="34" r="2.6" fill="#3A3B3C" stroke="none"/>`),
  snail: SV(`<path d="M80 60 L84 44 M86 63 L94 50" stroke-width="2.5"/><circle cx="84" cy="43" r="2.6" fill="#3A3B3C"/><circle cx="94" cy="49" r="2.6" fill="#3A3B3C"/><path d="M10 80 H70 C80 80 88 72 88 62 L80 60 C78 68 74 72 66 72 H16 Z" fill="#E8D3A8"/><circle cx="45" cy="51" r="25" fill="#C68B59"/><path d="M45 51 m-4 0 a4 4 0 1 1 8 0 a9 9 0 1 1 -18 0 a14 14 0 1 1 28 0 a19 19 0 1 1 -38 0" stroke-width="2.5"/>`),
  eye: SV(`<path d="M27 33 L22 25 M40 27 L38 18 M60 27 L62 18 M73 33 L78 25" stroke-width="3"/><path d="M8 52 Q50 16 92 52 Q50 86 8 52 Z" fill="#FFFCF6"/><circle cx="50" cy="52" r="17" fill="#7A5A3C"/><circle cx="50" cy="52" r="8" fill="#2A231F" stroke="none"/><circle cx="55" cy="46" r="3.6" fill="#FFFFFF" stroke="none"/>`),
  cup: SV(`<path d="M27 46 H69 L65 84 H31 Z" fill="#7FB9D9" stroke="none"/><path d="M25 22 H71 L66 86 H30 Z"/><path d="M27 46 H69" stroke-width="2"/><path d="M33 30 L36 74" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>`),
  teapot: SV(`<path d="M24 52 C6 50 6 76 26 72" stroke-width="5"/><path d="M72 56 Q88 46 90 30 L84 29 Q82 42 70 48 Z" fill="#9FC7A8"/><ellipse cx="48" cy="61" rx="28" ry="22" fill="#9FC7A8"/><path d="M33 41 Q48 29 63 41 Z" fill="#9FC7A8"/><circle cx="48" cy="31" r="4" fill="#DDAA55"/><path d="M28 84 H68" stroke-width="4"/><path d="M34 60 q14 8 28 0" stroke="#5E8F6A" stroke-width="2"/>`),
  child: SV(`<path d="M24 92 Q26 80 50 80 Q74 80 76 92" fill="#7FB2D9"/><circle cx="50" cy="50" r="27" fill="#F6D2B8"/><path d="M23 50 C20 22 80 20 77 50 C70 36 54 30 40 34 C32 38 26 43 23 50 Z" fill="#3A3B3C"/><circle cx="40" cy="53" r="3" fill="#3A3B3C" stroke="none"/><circle cx="60" cy="53" r="3" fill="#3A3B3C" stroke="none"/><path d="M42 64 Q50 70 58 64"/><ellipse cx="33" cy="61" rx="5" ry="3" fill="#F2A7A0" stroke="none"/><ellipse cx="67" cy="61" rx="5" ry="3" fill="#F2A7A0" stroke="none"/>`),
  book: SV(`<path d="M8 30 V84 C24 80 40 80 50 88 C60 80 76 80 92 84 V30" stroke="#C68B59" stroke-width="3"/><path d="M50 30 C40 22 24 22 12 26 V78 C24 74 40 74 50 82 Z" fill="#FFFCF6"/><path d="M50 30 C60 22 76 22 88 26 V78 C76 74 60 74 50 82 Z" fill="#FFFCF6"/><path d="M20 38 H40 M20 47 H40 M20 56 H36 M60 38 H80 M60 47 H80 M60 56 H76" stroke="#A39588" stroke-width="2"/><path d="M22 66 h5 M58 66 h5" stroke="#D9573F" stroke-width="4"/>`),
  mouth: SV(`${FACE()}<circle cx="34" cy="54" r="2.8" fill="#3A3B3C" stroke="none"/><circle cx="54" cy="54" r="2.8" fill="#3A3B3C" stroke="none"/><ellipse cx="44" cy="67" rx="8" ry="6.5" fill="#B4553C"/><path d="M76 46 q6 9 0 18 M84 39 q11 16 0 32" stroke="#3E7A3A" stroke-width="3.5"/>`),
  ear: SV(`<path d="M20 42 q-6 9 0 18 M11 35 q-11 16 0 32" stroke="#3E7A3A" stroke-width="3.5"/><path d="M48 86 C38 82 40 72 44 68 C48 62 42 56 38 50 C30 38 38 16 58 16 C78 16 88 32 84 52 C82 62 74 66 70 74 C66 84 56 90 48 86 Z" fill="#F6D2B8"/><path d="M58 32 C70 32 72 46 66 52 C62 56 60 60 58 66" stroke-width="2.6"/>`),
  sleep: SV(`${FACE()}<path d="M30 56 q4 4 8 0 M50 56 q4 4 8 0" stroke-width="2.6"/><path d="M40 67 q4 2 8 0" stroke-width="2.6"/><path d="M70 30 h10 l-10 12 h10 M82 12 h8 l-8 9 h8" stroke="#4D74A8" stroke-width="3"/>`),
  cake: SV(`<rect x="14" y="82" width="72" height="6" rx="3" fill="#C68B59"/><rect x="20" y="52" width="60" height="31" rx="6" fill="#F7D3C3"/><path d="M20 62 q10 8 20 0 q10 8 20 0 q10 8 20 0" stroke="#FFFCF6" stroke-width="4"/><text x="50" y="47" text-anchor="middle" font-family="Nunito,Segoe UI,Arial,sans-serif" font-weight="900" font-size="32" fill="#DDAA55" stroke="#3A3B3C" stroke-width="2" paint-order="stroke">6</text><path d="M50 8 q6 7 0 11 q-6 -4 0 -11 Z" fill="#F29A4A"/>`),
  bulb: SV(`<path d="M50 4 V9 M17 19 l4 4 M83 19 l-4 4 M8 45 h5 M87 45 h5" stroke="#DDAA55" stroke-width="3.5"/><path d="M50 14 C30 14 22 32 26 44 C30 56 38 58 38 70 H62 C62 58 70 56 74 44 C78 32 70 14 50 14 Z" fill="#F7DC7C"/><rect x="38" y="70" width="24" height="12" rx="2" fill="#B9AFA6"/><path d="M40 76 H60" stroke-width="2"/><path d="M44 88 H56" stroke-width="4"/><path d="M44 50 l6 8 l6 -8" stroke="#C68B59" stroke-width="2.5"/>`),
  pencil: SV(`<path d="M22 78 L30 56 L70 16 L84 30 L44 70 Z" fill="#F2C14E"/><path d="M22 78 L30 56 L44 70 Z" fill="#F6E3BC"/><path d="M22 78 L25 70 L30 73 Z" fill="#3A3B3C"/><path d="M70 16 L84 30 L88 26 C90 24 90 20 88 18 L82 12 C80 10 76 10 74 12 Z" fill="#EEA48C"/><path d="M36 50 L76 10" stroke-width="2"/><path d="M14 90 C30 84 44 92 60 86" stroke="#D9573F" stroke-width="3" stroke-dasharray="2 6"/>`),
  aa: SV(`<rect x="6" y="18" width="50" height="62" rx="10" fill="#FFFCF6"/><rect x="44" y="22" width="50" height="62" rx="10" fill="#F6E3BC"/><text x="31" y="66" text-anchor="middle" font-family="Nunito,Segoe UI,Arial,sans-serif" font-weight="900" font-size="40" fill="#2A231F" stroke="none">Ă</text><text x="69" y="70" text-anchor="middle" font-family="Nunito,Segoe UI,Arial,sans-serif" font-weight="900" font-size="40" fill="#2A231F" stroke="none">ă</text>`),
  tone: SV(`<rect x="14" y="10" width="72" height="80" rx="14" fill="#F6E3BC"/><text x="50" y="76" text-anchor="middle" font-family="Nunito,Segoe UI,Arial,sans-serif" font-weight="900" font-size="58" fill="#2A231F" stroke="none">lá</text>`),
  trau: trauSVG(''),
  loco: kind => SV(`<path d="M4 50 L10 43 V55 Z" fill="#3A3B3C"/><rect x="10" y="24" width="44" height="31" rx="7" fill="${kind === 'vowel' ? '#DDAA55' : '#8DBF74'}"/><rect x="48" y="10" width="34" height="45" rx="7" fill="${kind === 'vowel' ? '#DDAA55' : '#8DBF74'}"/><rect x="55" y="18" width="20" height="14" rx="3" fill="#FFFCF6"/><rect x="16" y="9" width="11" height="16" rx="2" fill="#3A3B3C"/><circle cx="25" cy="59" r="9" fill="#3A3B3C"/><circle cx="64" cy="59" r="9" fill="#3A3B3C"/><circle cx="25" cy="59" r="3" fill="#E9E0D2" stroke="none"/><circle cx="64" cy="59" r="3" fill="#E9E0D2" stroke="none"/>`, '0 0 88 70')
};



/* ---------- 1. Thơ “Lên Sáu” ---------- */
GAMES.g1 = {
  num: 1, title: 'Thơ “Lên Sáu”', icon: 'book', desc: 'Nghe thơ Tản Đà, chọn tranh đúng và xếp câu thơ theo thứ tự',
  levels: ['Đọc thơ', 'Nghe thơ, chọn tranh', 'Xếp thơ'], chain: true,
  start(level) { [this.reader, this.pickPic, this.order][level].call(this); },
  reader() {
    const lines = POEM.map((t, i) => h('button', { class: 'pline', type: 'button', onclick: e => { mark(e.currentTarget); Speech.say(['p:' + (i + 1)]); } }, t));
    const mark = el => { document.querySelectorAll('.pline.reading').forEach(x => x.classList.remove('reading')); el.classList.add('reading'); };
    UI.stage.append(h('div', { class: 'poem' },
      h('button', { class: 'poem-head', type: 'button', onclick: () => Speech.say(['s:g1-title', ...POEM.map((_, i) => 'p:' + (i + 1))]) },
        h('strong', null, 'LÊN SÁU'), h('span', null, 'Thơ: Tản Đà · Viết năm 1919')),
      h('div', { class: 'poem-cols' }, h('div', null, lines.slice(0, 6)), h('div', null, lines.slice(6))),
      h('p', { class: 'poem-hint' }, 'Chạm vào tên bài thơ để nghe cả bài. Chạm vào từng câu để nghe từng câu.'),
      h('div', { style: 'display:flex;justify-content:center;margin-top:14px' }, h('button', { class: 'btn', type: 'button', onclick: () => Runner.open('g1', 1) }, 'Chơi: Nghe thơ, chọn tranh ›'))
    ));
    UI.guide(['s:g1-intro']);
  },
  pickPic() {
    const Q = shuffle([{ line: 0, pic: 'book' }, { line: 4, pic: 'mouth' }, { line: 5, pic: 'ear' }, { line: 6, pic: 'sleep' }, { line: 8, pic: 'cake' }, { line: 10, pic: 'bulb' }]);
    const allPics = Q.map(q => q.pic);
    let i = 0, wrongHere = 0;
    const show = () => {
      const q = Q[i]; wrongHere = 0; let locked = false;
      const opts = shuffle([q.pic, ...shuffle(allPics.filter(p => p !== q.pic)).slice(0, 2)]);
      const dots = h('div', { class: 'dots' }, Q.map((_, k) => h('span', { class: 'dot' + (k < i ? ' done' : k === i ? ' cur' : '') })));
      const choices = opts.map(p => h('button', { class: 'choice', type: 'button', 'data-pic': p, 'aria-label': 'Tranh', html: ICONS[p], onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (p === q.pic) {
          locked = true; el.classList.add('right'); UI.ok(el, [pick(PRAISE), 'p:' + (q.line + 1)]);
          later(() => { i++; if (i < Q.length) show(); else UI.finish(Q.length, 'Các bạn đã ghép đúng 6 câu thơ với tranh.'); }, 1700);
        } else {
          wrongHere++; UI.no(el, [pick(RETRY), 'p:' + (q.line + 1)]);
          if (wrongHere >= 2) UI.hint(choices[opts.indexOf(q.pic)]);
        }
      } }));
      UI.stage.replaceChildren(
        h('button', { class: 'qline', type: 'button', onclick: () => Speech.say(['p:' + (q.line + 1)]) }, POEM[q.line].replace(/[,.]$/, '')),
        h('div', { class: 'choices' }, choices), dots);
      UI.progress((i + 1) + ' / ' + Q.length);
      UI.guide(i === 0 ? ['s:g1-pick', 'p:' + (q.line + 1)] : ['p:' + (q.line + 1)]);
    };
    show();
  },
  order() {
    let part = 0;
    const show = () => {
      const idxs = part === 0 ? [0, 1, 2, 3, 4, 5] : [6, 7, 8, 9, 10, 11];
      let order = shuffle(idxs.slice());
      if (order.every((v, k) => v === idxs[k])) order = order.reverse();
      const picker = Picker(); let placed = 0;
      const slots = idxs.map(ix => { const s = h('div', { class: 'slot-line', 'aria-label': 'Chỗ câu ' + (ix - idxs[0] + 1) }); s._ix = ix; return s; });
      const tryPlace = (chip, slot) => {
        if (slot._filled || chip._ix !== slot._ix) { UI.no(chip, ['s:g1-place']); return false; }
        slot._filled = true; slot.classList.add('filled'); slot.append(POEM[chip._ix]); chip.remove(); picker.clear(); placed++;
        UI.ok(slot, null); Speech.say(['p:' + (chip._ix + 1)]);
        UI.progress((part * 6 + placed) + ' / 12');
        if (placed === 6) later(() => {
          if (part === 0) { part = 1; UI.ok(null); later(show, 1500); }
          else UI.finish(12, 'Các bạn đã xếp đúng cả 12 câu thơ “Lên Sáu”.');
        }, 900);
        return true;
      };
      slots.forEach(s => asZone(s, picker, tryPlace));
      const chips = order.map(ix => {
        const c = h('button', { class: 'lchip', type: 'button' }, POEM[ix]); c._ix = ix;
        draggable(c, { zones: () => slots, onPick: () => Speech.say(['p:' + (ix + 1)]), onTap: el => picker.toggle(el), onDrop: (el, z) => tryPlace(el, z) });
        return c;
      });
      UI.stage.replaceChildren(h('div', { class: 'order' }, h('div', { class: 'slots' }, slots), h('div', { class: 'pool' }, chips)));
      UI.progress((part * 6) + ' / 12');
      UI.guide(['s:g1-order']);
    };
    show();
  }
};

/* ---------- 2. Chuyến tàu chữ cái ---------- */
GAMES.g2 = {
  num: 2, title: 'Chuyến tàu chữ cái', icon: 'loco', desc: 'Đưa 12 nguyên âm lên tàu vàng, 17 phụ âm lên tàu xanh',
  levels: ['Chữ in thường', 'Chữ in hoa', 'Trộn lẫn'], chain: true,
  start(level) {
    const queue = shuffle(ALPHABET.slice()).map(l => ({ l, show: level === 1 || (level === 2 && Math.random() < 0.5) ? l.toUpperCase() : l }));
    const mkTrain = (kind, label, n) => {
      const seats = Array.from({ length: n }, () => h('span', { class: 'seat' }));
      const el = h('div', { class: 'train ' + kind, 'aria-label': label + ', ' + n + ' chỗ' },
        h('div', { class: 'ride' }, h('div', { class: 'loco', html: ICONS.loco(kind) }, h('span', null, label)), h('div', { class: 'seats' }, seats)));
      let filled = 0;
      return { el, fill(t) { const s = seats[filled++]; if (s) { s.textContent = t; s.classList.add('filled'); bounce(s, 'pop-ok'); } } };
    };
    const vT = mkTrain('vowel', 'Tàu nguyên âm', 12), cT = mkTrain('cons', 'Tàu phụ âm', 17);
    const platform = h('div', { class: 'platform', 'aria-label': 'Sân ga' });
    const picker = Picker(); let placed = 0;
    const wrongs = new Map();
    const board = (tile, zone) => {
      const isV = VN.isVowel(tile._l); const want = isV ? vT : cT;
      if (zone === want.el) {
        want.fill(tile._show); tile.remove(); picker.clear(); placed++;
        UI.ok(null, placed % 5 === 0 ? undefined : null);
        UI.progress(placed + ' / 29'); refill();
        if (placed === 29) {
          later(() => { Sfx.whistle(); vT.el.classList.add('leave'); cT.el.classList.add('leave'); Speech.say(['s:g2-go']); }, 500);
          later(() => UI.finish(29, 'Đủ 12 nguyên âm và 17 phụ âm đã lên tàu.'), 2700);
        }
        return true;
      }
      const w = (wrongs.get(tile) || 0) + 1; wrongs.set(tile, w);
      UI.no(tile, ['l:' + tile._l, isV ? 's:g2-to-v' : 's:g2-to-c']);
      if (w >= 2) UI.hint(want.el);
      return false;
    };
    const addTile = it => {
      const t = h('button', { class: 'tile', type: 'button', 'aria-label': 'Chữ ' + it.show }, it.show);
      t._l = it.l; t._show = it.show;
      draggable(t, { zones: () => [vT.el, cT.el], onPick: () => Speech.say(['l:' + it.l]), onTap: el => picker.toggle(el), onDrop: board });
      platform.append(t);
    };
    const refill = () => { while (platform.querySelectorAll('.tile').length < 6 && queue.length) addTile(queue.shift()); };
    asZone(vT.el, picker, board); asZone(cT.el, picker, board);
    UI.stage.append(h('div', { class: 'trains' }, vT.el, platform, cT.el));
    refill(); UI.progress('0 / 29');
    UI.guide(['s:g2-intro']);
  }
};

/* ---------- 3. Tìm bạn cho chữ ---------- */
const PAIR_ROUNDS = [['a','ă','â','e','ê','i'], ['o','ô','ơ','u','ư','y'], ['b','d','đ','p','q','g'], ['c','h','k','l','m','n'], ['r','s','t','v','x']];
GAMES.g3 = {
  num: 3, title: 'Tìm bạn cho chữ', icon: 'aa', desc: 'Ghép chữ in hoa với chữ in thường, chú ý các chữ dễ nhầm',
  levels: PAIR_ROUNDS.map(r => r.join(' ')), chain: true,
  start(level) {
    const set = PAIR_ROUNDS[level]; const flip = Store.get('flip', false);
    const cards = shuffle(set.flatMap(l => [{ l, up: true }, { l, up: false }]));
    let first = null, lock = false, matched = 0;
    const els = cards.map(c => {
      const b = h('button', { class: 'pcard' + (flip ? ' down' : ''), type: 'button', 'aria-label': flip ? 'Thẻ úp' : 'Chữ ' + (c.up ? 'in hoa ' : 'in thường ') + c.l }, c.up ? c.l.toUpperCase() : c.l);
      b._c = c;
      b.addEventListener('click', () => {
        if (lock || b.classList.contains('matched') || b === first) { if (b === first && !flip) { b.classList.remove('sel'); first = null; } return; }
        App.unlockAudio();
        if (flip) { b.classList.remove('down'); b.setAttribute('aria-label', 'Chữ ' + b.textContent); }
        Speech.say(['l:' + c.l]);
        if (!first) { first = b; b.classList.add('sel'); return; }
        const a = first; first = null; a.classList.remove('sel');
        if (a._c.l === c.l && a._c.up !== c.up) {
          a.classList.add('matched'); b.classList.add('matched'); matched++;
          UI.ok([a, b], [pick(PRAISE), 'l:' + c.l]); UI.progress(matched + ' / ' + set.length);
          if (matched === set.length) later(() => UI.finish(set.length * 2, 'Các bạn đã tìm đủ ' + set.length + ' đôi bạn chữ.'), 1200);
        } else {
          UI.no([a, b], ['s:g3-no']);
          if (flip) { lock = true; later(() => { [a, b].forEach(x => { x.classList.add('down'); x.setAttribute('aria-label', 'Thẻ úp'); }); lock = false; }, 1100); }
        }
      });
      return b;
    });
    const toggle = h('button', { class: 'chip', type: 'button', 'aria-pressed': String(flip), onclick: () => { Store.set('flip', !flip); Runner.open('g3', level); } }, flip ? 'Lật thẻ: đang bật' : 'Lật thẻ: đang tắt');
    UI.stage.append(h('div', { class: 'pairs-top' }, toggle), h('div', { class: 'pairs' }, els));
    UI.progress('0 / ' + set.length);
    UI.guide([flip ? 's:g3-flip' : 's:g3-intro']);
  }
};

/* ---------- 4. Nguyên âm / Phụ âm trốn ở đâu? ---------- */
GAMES.g4 = {
  num: 4, title: 'Chữ trốn ở đâu?', icon: 'papaya', desc: 'Tìm nguyên âm và phụ âm trốn trong từng tiếng có tranh',
  levels: ['Nguyên âm trốn ở đâu?', 'Phụ âm trốn ở đâu?'], chain: true,
  start(level) {
    const wantV = level === 0;
    const items = wantV
      ? ['đu đủ', 'trâu', 'nhà', 'cặp', ...shuffle(['cá', 'gà', 'lá', 'xe', 'vở', 'mũ', 'nón', 'ô', 'sen', 'tô', 'tôm', 'ốc', 'mắt', 'cốc', 'ấm']).slice(0, 2)]
      : shuffle(['đu đủ', 'cặp', 'cá', 'gà', 'lá', 'xe', 'vở', 'mũ', 'nón', 'sen', 'tô', 'tôm', 'ốc', 'mắt', 'cốc', 'ấm']).slice(0, 6);
    let i = 0;
    const show = () => {
      const word = items[i]; const letters = VN.chars(word);
      const need = letters.filter(ch => ch !== ' ' && (wantV ? VN.isVowel(ch) : VN.isConsonant(ch))).length;
      let found = 0, done = false;
      const count = h('p', { class: 'find-count' });
      const setCount = () => { count.textContent = done ? 'Tìm đủ rồi!' : 'Còn ' + (need - found) + ' ' + (wantV ? 'nguyên âm' : 'phụ âm') + ' đang trốn'; };
      const tiles = letters.map(ch => {
        if (ch === ' ') return h('span', { class: 'gap', 'aria-hidden': 'true' });
        const t = h('button', { class: 'tile', type: 'button', 'aria-label': 'Chữ ' + ch }, ch);
        t.addEventListener('click', () => {
          if (done || t._found) return;
          App.unlockAudio();
          const hit = wantV ? VN.isVowel(ch) : VN.isConsonant(ch);
          if (hit) {
            t._found = true; found++; t.classList.add(wantV ? 'found-v' : 'found-c');
            Sfx.ok(); bounce(t, 'pop-ok'); Speech.say(['l:' + VN.base(ch)]);
            if (found === need) {
              done = true; setCount();
              later(() => UI.ok(null, ['s:g4-all', 'w:' + word]), 500);
              later(() => { i++; if (i < items.length) show(); else UI.finish(items.length * 2, 'Các bạn đã tìm hết chữ trốn trong ' + items.length + ' tiếng.'); }, 2300);
            } else setCount();
          } else UI.no(t, ['l:' + VN.base(ch), wantV ? 's:g4-not-v' : 's:g4-not-c']);
        });
        return t;
      });
      setCount();
      const dots = h('div', { class: 'dots' }, items.map((_, k) => h('span', { class: 'dot' + (k < i ? ' done' : k === i ? ' cur' : '') })));
      UI.stage.replaceChildren(h('div', { class: 'hide' },
        h('button', { class: 'pic', type: 'button', 'aria-label': 'Nghe tiếng ' + word, html: ICONS[WORD_PIC[word]], onclick: () => Speech.say(['w:' + word]) }),
        h('div', { class: 'hide-right' }, h('div', { class: 'word' }, tiles), count, dots)));
      UI.progress((i + 1) + ' / ' + items.length);
      UI.guide([wantV ? 's:g4-v' : 's:g4-c', 'w:' + word]);
    };
    show();
  }
};

/* ---------- 5. Xây nhà cho tiếng ---------- */
const BUILD_ROUNDS = [['xe', 'cá', 'gà', 'mũ', 'vở', 'tô'], ['sen', 'tôm', 'nón', 'cặp', 'cốc', 'mắt'], ['ô', 'ốc', 'ấm', 'em']];
function toneCard(t) {
  const c = h('button', { class: 'tcard', type: 'button', 'aria-label': 'Thanh ' + TONE_NAME[t], html: TONE_ICON[t] }, h('span', null, TONE_NAME[t]));
  c._tone = t; return c;
}
GAMES.g5 = {
  num: 5, title: 'Xây nhà cho tiếng', icon: 'house', desc: 'Đưa chữ vào phòng âm đầu, âm chính, âm cuối rồi đặt dấu thanh',
  levels: ['Âm đầu + âm chính', 'Đủ ba phần', 'Không có âm đầu'], chain: true,
  start(level) {
    const words = shuffle(BUILD_ROUNDS[level].slice());
    let i = 0;
    const show = () => {
      const word = words[i]; const A = VN.analyze(word); const plain = VN.stripTone(word);
      const want = { onset: A.onset, main: A.nucleus, coda: A.coda };
      const filled = { onset: false, main: false, coda: false };
      let phase = 'letters'; const picker = Picker();
      const mkRoom = (key, title, sub) => {
        const slot = h('div', { class: 'slot' });
        const r = h('div', { class: 'room ' + key, 'aria-label': title }, h('h4', null, title), h('span', { class: 'sub' }, sub), slot);
        r._key = key; r._slot = slot; return r;
      };
      const rooms = [mkRoom('onset', 'Âm đầu', 'phụ âm · có thể không có'), mkRoom('main', 'Âm chính', 'nguyên âm · bắt buộc'), mkRoom('coda', 'Âm cuối', 'phụ âm · có thể không có')];
      const roofSlot = h('div', { class: 'roof-slot', 'aria-label': 'Mái nhà: chỗ đặt dấu thanh' }, 'Thanh ?');
      const tray = h('div', { class: 'tray' });
      const tones = h('div', { class: 'tones', hidden: true });
      const big = h('span', { class: 'big' }, word);
      const placeLetter = (tile, room) => {
        if (phase !== 'letters') return false;
        const k = room._key, ch = tile._ch;
        if (!filled[k] && want[k] === ch) {
          filled[k] = true; room._slot.textContent = ch; room._slot.classList.add('filled'); tile.remove(); picker.clear();
          UI.ok(room._slot, null); Speech.say(['l:' + ch]);
          if (!tray.querySelector('.tile')) toTone();
          return true;
        }
        let msg = 's:g5-other';
        if (k === 'main' && !VN.isVowel(ch)) msg = 's:g5-main-v';
        else if (!want[k]) msg = k === 'onset' ? 's:g5-no-onset' : k === 'coda' ? 's:g5-no-coda' : msg;
        UI.no(tile, [msg]);
        return false;
      };
      const toTone = () => {
        phase = 'tone';
        rooms.forEach(r => { if (!want[r._key]) { r._slot.textContent = '—'; r._slot.classList.add('empty'); r._slot.setAttribute('aria-label', 'không có'); } });
        tones.hidden = false; tray.hidden = true;
        later(() => UI.guide(['s:g5-tone']), 600);
      };
      const placeTone = (card, zone) => {
        if (phase !== 'tone' || zone !== roofSlot) return false;
        if (card._tone === A.tone) {
          phase = 'done'; roofSlot.classList.add('filled'); roofSlot.innerHTML = TONE_ICON[A.tone] + '<span>' + TONE_NAME[A.tone] + '</span>';
          tones.hidden = true; picker.clear();
          const extra = !A.onset ? ['s:g5-remember'] : [];
          UI.ok([roofSlot, big], [pick(PRAISE), 'w:' + word, 't:' + A.tone, ...extra]);
          later(() => { i++; if (i < words.length) show(); else UI.finish(words.length * 2, 'Các bạn đã xây nhà cho ' + words.length + ' tiếng.'); }, extra.length ? 4200 : 2800);
          return true;
        }
        UI.no(card, [pick(RETRY), 's:g6-listen', 'w:' + word]);
        return false;
      };
      VN.chars(plain).forEach(ch => {
        const t = h('button', { class: 'tile', type: 'button', 'aria-label': 'Chữ ' + ch }, ch); t._ch = ch;
        draggable(t, { zones: () => rooms, onPick: () => Speech.say(['l:' + ch]), onTap: el => picker.toggle(el), onDrop: placeLetter });
        tray.append(t);
      });
      if (tray.children.length > 1 && [...tray.children].map(t => t._ch).join('') === plain) tray.append(tray.firstElementChild);
      TONES.forEach(tn => {
        const c = toneCard(tn);
        draggable(c, { zones: () => [roofSlot], onPick: () => Speech.say(['t:' + tn]), onTap: el => picker.toggle(el), onDrop: placeTone });
        tones.append(c);
      });
      rooms.forEach(r => asZone(r, picker, placeLetter));
      asZone(roofSlot, picker, placeTone);
      const dots = h('div', { class: 'dots' }, words.map((_, k) => h('span', { class: 'dot' + (k < i ? ' done' : k === i ? ' cur' : '') })));
      UI.stage.replaceChildren(h('div', { class: 'build' },
        h('button', { class: 'target', type: 'button', 'aria-label': 'Nghe tiếng ' + word, onclick: () => Speech.say(['w:' + word]) },
          h('span', { class: 'mini', html: ICONS[WORD_PIC[word]] }), big),
        h('div', { class: 'house' }, h('div', { class: 'roof' }, roofSlot), h('div', { class: 'rooms' }, rooms)),
        tray, tones,
        h('p', { class: 'note' }, h('b', null, 'Ghi nhớ:'), ' Âm chính luôn có mặt; âm đầu và âm cuối có thể vắng.'),
        dots));
      UI.progress((i + 1) + ' / ' + words.length);
      UI.guide(i === 0 ? ['s:g5-intro', 's:g5-word', 'w:' + word] : ['s:g5-word', 'w:' + word]);
    };
    show();
  }
};

/* ---------- 6. Đội dấu cho chữ ---------- */
GAMES.g6 = {
  num: 6, title: 'Đội dấu cho chữ', icon: 'tone', desc: 'Nghe Trâu Con đọc, đặt dấu lên chữ a: la, là, lá, lạ, lả, lã',
  levels: ['la · là · lá · lạ · lả · lã', 'ma · mà · má · mạ · mả · mã'], chain: true,
  start(level) {
    const set = shuffle(TONE_SETS[level].slice()); let i = 0;
    const show = () => {
      const target = set[i]; const tone = VN.toneOf(target); const plain = VN.stripTone(target);
      const vi = VN.mainVowelIndex(plain); const cs = VN.chars(plain);
      const head = cs.slice(0, vi).join(''), vowel = cs[vi], tail = cs.slice(vi + 1).join('');
      const vow = h('span', { class: 'vow', 'aria-label': 'Chỗ đặt dấu trên chữ ' + vowel }, vowel);
      const syl = h('div', { class: 'syl', 'aria-label': 'Nghe lại' }, h('span', { class: 'c' }, head), vow, tail ? h('span', { class: 'c' }, tail) : null);
      const picker = Picker(); let locked = false, lastPlace = 0;
      const place = (card, zone) => {
        if (locked || zone !== vow) return false;
        lastPlace = performance.now();
        const made = VN.addTone(plain, card._tone);
        vow.textContent = VN.chars(made)[vi];
        if (card._tone === tone) {
          locked = true; vow.classList.add('right'); picker.clear();
          UI.ok(vow, [pick(PRAISE), 'w:' + target, ...(tone === 'nang' ? ['s:g6-nang'] : [])]);
          later(() => { i++; if (i < set.length) show(); else UI.finish(set.length, 'Các bạn đã đặt đúng dấu cho cả 6 tiếng.'); }, tone === 'nang' ? 3600 : 2200);
          return true;
        }
        locked = true; vow.classList.add('wrongtry');
        UI.no(card, ['s:g6-made', 'w:' + made, 's:g6-need', 'w:' + target, pick(RETRY)]);
        later(() => { vow.textContent = vowel; vow.classList.remove('wrongtry'); locked = false; }, 1800);
        return false;
      };
      syl.addEventListener('click', e => { if (picker.get() || performance.now() - lastPlace < 600) return; App.unlockAudio(); Speech.say(['w:' + target]); });
      asZone(vow, picker, place);
      const cards = TONES.map(tn => {
        const c = toneCard(tn);
        draggable(c, { zones: () => [vow], onPick: () => Speech.say(['t:' + tn]), onTap: el => picker.toggle(el), onDrop: place });
        return c;
      });
      const dots = h('div', { class: 'dots' }, set.map((_, k) => h('span', { class: 'dot' + (k < i ? ' done' : k === i ? ' cur' : '') })));
      UI.stage.replaceChildren(h('div', { class: 'tone-game' }, syl, h('div', { class: 'tones' }, cards), dots));
      UI.progress((i + 1) + ' / ' + set.length);
      UI.guide(i === 0 ? ['s:g6-intro', 's:g6-listen', 'w:' + target] : ['s:g6-listen', 'w:' + target]);
    };
    show();
  }
};

/* ---------- 7. Tô nét cơ bản ---------- */
GAMES.g7 = {
  num: 7, title: 'Tô nét cơ bản', icon: 'pencil', desc: 'Tô 12 nét cơ bản theo nét chấm đỏ trên khung ô li',
  levels: [], chain: false,
  start() {
    const doneSet = new Set(); let cur = 0;
    const mp = $('#measurePath');
    const sample = d => { mp.setAttribute('d', d); const L = mp.getTotalLength(); const n = Math.max(24, Math.round(L / 0.05)); const pts = []; for (let k = 0; k <= n; k++) { const p = mp.getPointAtLength(L * k / n); pts.push({ x: p.x, y: p.y }); } return pts; };
    const S = STROKES.map(s => { const pts = sample(s.d); const xs = pts.map(p => p.x), ys = pts.map(p => p.y); return { ...s, pts, b: { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) } }; });
    const thumb = s => { const pad = 0.5; const w = s.b.x1 - s.b.x0 + pad * 2, hh = s.b.y1 - s.b.y0 + pad * 2, m = Math.max(w, hh); const cx = (s.b.x0 + s.b.x1) / 2, cy = (s.b.y0 + s.b.y1) / 2; return `<svg viewBox="${cx - m / 2} ${cy - m / 2} ${m} ${m}" aria-hidden="true"><path d="${s.d}" fill="none" stroke="#B4553C" stroke-width="${m * 0.07}" stroke-linecap="round" stroke-linejoin="round"/></svg>`; };
    const chips = S.map((s, k) => h('button', { class: 'schip', type: 'button', 'aria-label': s.name, html: thumb(s), onclick: () => { App.unlockAudio(); go(k); } }));
    const name = h('h3', { class: 'stroke-name' });
    const canvas = h('canvas', { id: 'traceCanvas', 'aria-label': 'Khung ô li để tô nét' });
    const btnReset = h('button', { class: 'btn ghost small', type: 'button', onclick: () => go(cur) }, 'Tô lại');
    const btnNext = h('button', { class: 'btn small', type: 'button', onclick: () => next() }, 'Nét tiếp theo ›');
    UI.stage.append(h('div', { class: 'trace' }, h('div', { class: 'stroke-row' }, chips), name, h('div', { class: 'trace-card' }, canvas), h('div', { class: 'trace-actions' }, btnReset, btnNext)));
    const ctx = canvas.getContext('2d');
    let st = null, W = 0, H = 0, dpr = 1, lastHint = 0;
    const view = () => {
      const s = S[cur];
      const bw = s.b.x1 - s.b.x0, bh = s.b.y1 - s.b.y0;
      const ly = Math.min(W / (bw + 1.6), H / (bh + 1.6), H / 3.4);
      const ox = W / 2 - ((s.b.x0 + s.b.x1) / 2) * ly, oy = H / 2 - ((s.b.y0 + s.b.y1) / 2) * ly;
      return { ly, ox, oy, tol: Math.max(0.42 * ly, 22) };
    };
    const P = (p, v) => ({ x: v.ox + p.x * v.ly, y: v.oy + p.y * v.ly });
    const draw = () => {
      if (!st) return;
      const v = view(), s = S[cur];
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, W, H);
      // khung ô li
      const k0 = Math.floor(-v.ox / v.ly) - 1, k1 = Math.ceil((W - v.ox) / v.ly) + 1;
      const j0 = Math.floor(-v.oy / v.ly) - 1, j1 = Math.ceil((H - v.oy) / v.ly) + 1;
      for (let k = k0; k <= k1; k++) { const x = v.ox + k * v.ly; ctx.strokeStyle = 'rgba(70,140,200,.30)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let j = j0; j <= j1; j++) { const y = v.oy + j * v.ly; ctx.strokeStyle = j === 0 ? 'rgba(40,100,170,.75)' : 'rgba(70,140,200,.35)'; ctx.lineWidth = j === 0 ? 2.2 : 1; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      const path = (pts, upto) => { ctx.beginPath(); pts.slice(0, upto).forEach((p, n) => { const q = P(p, v); n ? ctx.lineTo(q.x, q.y) : ctx.moveTo(q.x, q.y); }); };
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      // nét mẫu chấm đỏ
      ctx.setLineDash([v.ly * 0.05, v.ly * 0.22]); ctx.strokeStyle = '#E2675A'; ctx.lineWidth = v.ly * 0.17; path(s.pts, s.pts.length); ctx.stroke(); ctx.setLineDash([]);
      // phần đã tô đúng
      if (st.progress > 1) { ctx.strokeStyle = st.done ? '#3E8E4A' : 'rgba(62,142,74,.9)'; ctx.lineWidth = v.ly * 0.24; path(s.pts, st.progress); ctx.stroke(); }
      // nét tay của các bạn
      ctx.strokeStyle = 'rgba(58,59,60,.45)'; ctx.lineWidth = Math.max(3, v.ly * 0.07);
      st.ink.forEach(line => { ctx.beginPath(); line.forEach((p, n) => n ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.stroke(); });
      // mũi tên chỉ hướng
      ctx.fillStyle = '#B4553C';
      [0.33, 0.7].forEach(f => {
        const n = Math.floor(s.pts.length * f), a = P(s.pts[n], v), b = P(s.pts[Math.min(n + 4, s.pts.length - 1)], v);
        const ang = Math.atan2(b.y - a.y, b.x - a.x), r = v.ly * 0.2;
        ctx.save(); ctx.translate(a.x, a.y); ctx.rotate(ang); ctx.beginPath(); ctx.moveTo(r, 0); ctx.lineTo(-r * 0.7, -r * 0.75); ctx.lineTo(-r * 0.7, r * 0.75); ctx.closePath(); ctx.fill(); ctx.restore();
      });
      // chấm xanh (điểm đặt bút) và chấm kết thúc
      const a = P(s.pts[0], v), z = P(s.pts[s.pts.length - 1], v);
      ctx.fillStyle = '#B4553C'; ctx.beginPath(); ctx.arc(z.x, z.y, v.ly * 0.08, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#3E8E4A'; ctx.beginPath(); ctx.arc(a.x, a.y, Math.max(11, v.ly * 0.17), 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 3; ctx.stroke();
    };
    const resize = () => {
      const r = canvas.getBoundingClientRect(); if (!r.width) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2.5); W = r.width; H = r.height;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); draw();
    };
    const go = k => {
      cur = k; st = { progress: 0, ink: [], drawing: false, done: false, off: false };
      chips.forEach((c, n) => { c.setAttribute('aria-current', String(n === k)); c.classList.toggle('done', doneSet.has(n)); });
      name.textContent = S[k].name; btnNext.textContent = k === S.length - 1 ? 'Hoàn thành ›' : 'Nét tiếp theo ›';
      UI.progress(doneSet.size + ' / ' + S.length);
      UI.guide(k === 0 && !doneSet.size ? ['s:g7-intro', 'n:' + S[k].id] : ['n:' + S[k].id]);
      resize();
    };
    const next = () => {
      if (cur < S.length - 1) go(cur + 1);
      else UI.finish(S.length, doneSet.size === S.length ? 'Các bạn đã tô đủ 12 nét cơ bản.' : 'Các bạn đã tô ' + doneSet.size + ' / 12 nét. Mình tô tiếp các nét còn lại nhé!');
    };
    const local = e => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const nearIdx = (p, v) => { const s = S[cur]; let best = Infinity, bi = -1; for (let j = st.progress; j < Math.min(st.progress + 30, s.pts.length); j++) { const q = P(s.pts[j], v); const d = Math.hypot(q.x - p.x, q.y - p.y); if (d < best) { best = d; bi = j; } } return { d: best, i: bi }; };
    const say = id => { const t = performance.now(); if (t - lastHint > 3500) { lastHint = t; Speech.say([id]); } };
    const advance = p => {
      const v = view(), s = S[cur];
      for (let j = st.progress; j < Math.min(st.progress + 30, s.pts.length); j++) { const q = P(s.pts[j], v); if (Math.hypot(q.x - p.x, q.y - p.y) <= v.tol) st.progress = j + 1; }
      const n = nearIdx(p, v); if (n.d > v.tol * 2.4 && !st.off) { st.off = true; UI.no(null, ['s:g7-off']); UI.mistakes--; }
      if (st.progress >= s.pts.length - 2 && !st.done) win();
    };
    const win = () => {
      st.done = true; st.drawing = false; doneSet.add(cur); chips[cur].classList.add('done');
      UI.progress(doneSet.size + ' / ' + S.length); draw();
      UI.ok(chips[cur], [pick(PRAISE), 'n:' + S[cur].id]);
      const k = cur; later(() => { if (cur === k) next(); }, 2200);
    };
    canvas.addEventListener('pointerdown', e => {
      if (!st || st.done) return;
      e.preventDefault(); App.unlockAudio();
      const p = local(e), v = view(), s = S[cur];
      const target = P(s.pts[Math.min(st.progress, s.pts.length - 1)], v);
      if (Math.hypot(target.x - p.x, target.y - p.y) > v.tol * 1.8) { say(st.progress ? 's:g7-off' : 's:g7-start'); return; }
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
      st.drawing = true; st.off = false; st.ink.push([p]); advance(p); draw();
    });
    canvas.addEventListener('pointermove', e => {
      if (!st || !st.drawing) return;
      const p = local(e); st.ink[st.ink.length - 1].push(p); advance(p); draw();
    });
    const up = () => { if (st) st.drawing = false; };
    canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas); else window.addEventListener('resize', resize);
    go(0);
  }
};
GAME_ORDER.push('g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7');
