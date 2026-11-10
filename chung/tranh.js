/* =====================================================================
   THƯ VIỆN TRANH DÙNG CHUNG cho các bài dạy âm và vần (Bài 3–70)
   TRANH['từ'] hoặc TRANH['Câu.'] = hình SVG (khung 100 × 100). Bài sau gặp lại từ cũ thì dùng lại tranh cũ.
   Mỗi tranh chỉ vẽ đúng sự vật; không có chữ trong tranh để các bạn phải tự đọc.
   Không vẽ quốc kỳ hay biểu tượng chính trị nào (lá cờ là cờ đuôi nheo trang trí).
   ===================================================================== */
const TRANH = (() => {
  const G = '#DCCFBC';                                      // vạch đất
  const ground = (y = 92) => `<path d="M6 ${y} H94" stroke="${G}" stroke-width="2.5"/>`;
  const at = (x, y, s, inner) => `<g transform="translate(${x} ${y}) scale(${s})">${inner}</g>`;
  const eyes = (x1, x2, y, r = 2.2) => `<circle cx="${x1}" cy="${y}" r="${r}" fill="#3A3B3C" stroke="none"/><circle cx="${x2}" cy="${y}" r="${r}" fill="#3A3B3C" stroke="none"/>`;
  const cheeks = (x1, x2, y) => `<ellipse cx="${x1}" cy="${y}" rx="3.6" ry="2.1" fill="#F2A7A0" stroke="none"/><ellipse cx="${x2}" cy="${y}" rx="3.6" ry="2.1" fill="#F2A7A0" stroke="none"/>`;

  /* --- Người --- */
  // Em bé quấn khăn, đầu ở (0,0), mặt hướng sang trái
  const BABY_BUNDLE = `<ellipse cx="18" cy="9" rx="21" ry="12" fill="#F6E3BC"/><path d="M4 4 C14 12 28 12 36 6" stroke="#DDAA55" stroke-width="2"/>` +
    `<circle cx="0" cy="0" r="10.5" fill="${SKIN}"/><path d="M-6 -7 C-2 -13 5 -12 7 -8 C3 -9 -1 -9 -6 -7 Z" fill="${HAIR}"/>` +
    `<path d="M-6 0 q2.4 2 4.8 0 M2 0 q2.4 2 4.8 0" stroke-width="1.8"/><path d="M-2 5 q2 1.6 4 0" stroke-width="1.8"/>${cheeks(-6, 7, 4)}`;
  // Người lớn (nửa người, mặt nhìn thẳng): bo (bố) · ba (bà) · me (mẹ) · di (dì) · co (cô)
  const LOOK = {
    bo: { shirt: '#5B8FC9', back: '', front: `<path d="M25 29 C24 12 60 11 59 29 C54 21 34 20 25 29 Z" fill="${HAIR}"/>` },
    ba: { shirt: '#6F5A8E', btn: '#4E3E66', old: true, back: '', front: `<path d="M24 32 C22 14 62 12 60 32 C56 22 30 22 24 32 Z" fill="#C8C3BC"/><circle cx="42" cy="13" r="7" fill="#C8C3BC"/>` },
    me: { shirt: '#E58FA0', back: `<path d="M24 34 C20 12 64 12 60 34 L63 60 C56 63 52 56 52 56 H32 C32 56 28 63 21 60 Z" fill="${HAIR}"/>`, front: `<path d="M25 30 C26 15 58 14 59 30 C50 21 36 21 25 30 Z" fill="${HAIR}"/>` },
    di: { shirt: '#6FAE4F', back: `<circle cx="59" cy="20" r="8" fill="${HAIR}"/>`, front: `<path d="M25 31 C24 13 60 12 59 31 C52 20 38 26 25 31 Z" fill="${HAIR}"/>` },
    co: { shirt: '#DDAA55', btn: '#B9873E', back: `<path d="M24 34 C20 12 64 12 60 34 L60 50 H24 Z" fill="${HAIR}"/>`, front: `<path d="M25 30 C26 15 58 14 59 30 C52 24 44 18 25 30 Z" fill="${HAIR}"/>` }
  };
  const ADULT = (kind, mouth = 'smile') => {
    const L = LOOK[kind];
    const face = L.old
      ? `<path d="M33 34 q3 -2.6 6 0 M46 34 q3 -2.6 6 0" stroke-width="2.2"/><path d="M30 39 q2 2 4 1 M50 40 q2 1 4 -1" stroke="#C9A58C" stroke-width="1.4"/>`
      : eyes(36, 49, 34, 2.4);
    const m = mouth === 'sing' ? `<ellipse cx="42" cy="44" rx="4" ry="4.6" fill="#B4553C"/>` : `<path d="M37 43 q5 4 10 0" stroke-width="2.4"/>`;
    return `${L.back}<path d="M14 96 C14 70 26 58 42 58 C58 58 70 70 70 96 Z" fill="${L.shirt}"/>` +
      (L.btn ? `<path d="M42 60 V96" stroke="${L.btn}" stroke-width="2"/><circle cx="42" cy="72" r="1.6" fill="#FFFCF6" stroke="none"/><circle cx="42" cy="84" r="1.6" fill="#FFFCF6" stroke="none"/>` : '') +
      `<rect x="37" y="48" width="10" height="12" fill="${SKIN}" stroke="none"/><circle cx="42" cy="33" r="17" fill="${SKIN}"/>${L.front}${face}${m}${cheeks(31, 54, 40)}`;
  };
  // Người lớn bế em bé; cry = em bé đang khóc/ho
  const HOLD = (kind, cry = false) => {
    const shirt = LOOK[kind].shirt;
    const baby = cry ? BABY_BUNDLE.replace('<path d="M-2 5 q2 1.6 4 0" stroke-width="1.8"/>', '<ellipse cx="0" cy="5.5" rx="2.4" ry="2" fill="#B4553C"/>') +
      `<path d="M-7 3 q-1 4 0 6" stroke="#7FB2D9" stroke-width="2"/><path d="M-14 -4 q-4 -2 -6 -6 M-14 2 h-7" stroke="#A39588" stroke-width="1.8"/>` : BABY_BUNDLE;
    return `${ground(96)}${ADULT(kind)}` + at(60, 70, 0.88, baby) +
      `<path d="M24 74 C32 88 58 90 78 79" stroke="${shirt}" stroke-width="10"/><path d="M74 75 C80 75 84 79 82 83 C78 87 72 85 72 81 Z" fill="${HAND}"/>`;
  };
  const KID = (shirt = '#E86A4F') => `<path d="M30 96 C30 76 38 66 50 66 C62 66 70 76 70 96 Z" fill="${shirt}"/>` +
    `<circle cx="50" cy="48" r="17" fill="${SKIN}"/><path d="M33 46 C30 28 70 28 67 46 C62 36 40 34 33 46 Z" fill="${HAIR}"/>${eyes(44, 56, 49, 2.4)}<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>${cheeks(39, 61, 55)}`;

  /* --- Đồ vật, con vật --- */
  const PENNANT = (fill = '#D9473A', stripe = '#F2C14E') => `<path d="M0 0 L46 14 L0 28 Z" fill="${fill}"/><path d="M0 9 L30 14 L0 19" stroke="${stripe}" stroke-width="3"/>`;
  const FLAG = `${ground()}<ellipse cx="30" cy="92" rx="12" ry="3.5" fill="${G}" stroke="none"/><path d="M30 92 V12" stroke="#8C5A32" stroke-width="4"/><circle cx="30" cy="10" r="4" fill="#DDAA55"/>` + at(32, 16, 1.15, PENNANT());
  const BETTA = `<path d="M58 50 C70 22 98 24 94 50 C98 76 70 78 58 50 Z" fill="#D9473A"/><path d="M66 38 C76 40 84 44 90 50 M66 62 C76 60 84 56 90 50 M64 50 H92" stroke="#A8322A" stroke-width="1.8"/>` +
    `<path d="M30 40 C30 26 50 22 60 41 Z" fill="#5B8FC9"/><path d="M34 39 L42 28 M44 39 L50 28" stroke="#3F6FA6" stroke-width="1.6"/><path d="M32 60 C34 76 52 78 60 59 Z" fill="#5B8FC9"/><path d="M38 61 L42 72 M48 61 L50 72" stroke="#3F6FA6" stroke-width="1.6"/>` +
    `<ellipse cx="40" cy="50" rx="25" ry="13" fill="#E86A4F"/><path d="M44 42 q4 8 0 16 M52 42 q4 8 0 16" stroke="#C24E36" stroke-width="1.8"/>` +
    `<circle cx="24" cy="47" r="3.4" fill="#FFFFFF"/><circle cx="23.5" cy="47" r="1.8" fill="#3A3B3C" stroke="none"/><path d="M15 52 q3 1.5 5 0" stroke-width="2"/>`;
  const TURTLE = `${ground(84)}<ellipse cx="26" cy="74" rx="10" ry="5" transform="rotate(-25 26 74)" fill="#8FA36B"/><ellipse cx="72" cy="75" rx="10" ry="5" transform="rotate(25 72 75)" fill="#8FA36B"/>` +
    `<ellipse cx="28" cy="46" rx="9" ry="4.5" transform="rotate(30 28 46)" fill="#8FA36B"/><ellipse cx="70" cy="45" rx="9" ry="4.5" transform="rotate(-30 70 45)" fill="#8FA36B"/>` +
    `<path d="M14 62 l-8 3" stroke-width="3"/><ellipse cx="48" cy="60" rx="32" ry="20" fill="#A8B985"/><ellipse cx="48" cy="58" rx="23" ry="13" fill="#7E9460"/>` +
    `<g fill="#5F7447" stroke="none"><circle cx="40" cy="54" r="2.4"/><circle cx="52" cy="52" r="2.4"/><circle cx="46" cy="63" r="2.4"/><circle cx="58" cy="61" r="2.4"/></g>` +
    `<path d="M78 56 C84 50 94 50 97 54 C97 59 88 62 79 63 Z" fill="#8FA36B"/><circle cx="88" cy="54" r="1.8" fill="#3A3B3C" stroke="none"/>`;
  const AO_BA_BA = `<path d="M38 12 q0 -6 7 -6 q7 0 6 6 q-1 4 -6 5" stroke="#8C5A32" stroke-width="2.5"/><path d="M20 26 L45 17 L70 26" stroke="#8C5A32" stroke-width="3"/>` +
    `<path d="M36 22 L20 28 L6 68 L17 72 L27 46 L27 94 H63 V46 L73 72 L84 68 L70 28 L54 22 C52 30 38 30 36 22 Z" fill="#6F5A8E"/>` +
    `<path d="M45 29 V94" stroke="#4E3E66" stroke-width="2"/><g fill="#FFFCF6" stroke="none"><circle cx="45" cy="40" r="1.8"/><circle cx="45" cy="54" r="1.8"/><circle cx="45" cy="68" r="1.8"/><circle cx="45" cy="82" r="1.8"/></g>` +
    `<rect x="31" y="72" width="10" height="11" rx="1.5" stroke="#4E3E66" stroke-width="2"/><rect x="49" y="72" width="10" height="11" rx="1.5" stroke="#4E3E66" stroke-width="2"/>`;
  const GRASS = (s = 1) => {
    // một bó cỏ, gốc ở (0,0), cao khoảng 60
    const blades = [-16, -10, -5, 0, 5, 10, 16].map((x, i) => `<path d="M${x * 0.3} 0 C${x * 0.5} -20 ${x} -40 ${x * 1.35} ${-52 - (i % 2) * 8}" stroke="#5E9A49" stroke-width="3.2"/>`).join('');
    return `<g transform="scale(${s})"><path d="M-10 0 C-8 -20 8 -20 10 0 Z" fill="#7DB25A" stroke="#5E9A49" stroke-width="2"/>${blades}<rect x="-8" y="-24" width="16" height="7" rx="2" fill="#DDAA55" stroke="#B9873E" stroke-width="2"/></g>`;
  };
  const TANK = `<rect x="10" y="18" width="80" height="68" rx="6" fill="#DCEFF5"/><rect x="10" y="30" width="80" height="56" fill="#A9D3E4" stroke="none"/><path d="M10 30 H90" stroke="#5B8FC9" stroke-width="2"/>` +
    `<path d="M12 84 C30 74 50 80 88 76 V84 H12 Z" fill="#E8D3A8" stroke="none"/><path d="M24 82 C20 70 28 60 22 48 M28 82 C32 68 26 58 32 46" stroke="#5E9A49" stroke-width="3"/>` +
    at(52, 42, 0.32, `<path d="M58 50 C70 30 92 32 90 50 C92 68 70 70 58 50 Z" fill="#F2903A"/><ellipse cx="40" cy="50" rx="25" ry="15" fill="#F2B04A"/><circle cx="24" cy="47" r="3.4" fill="#3A3B3C" stroke="none"/>`) +
    at(46, 58, 0.26, `<path d="M58 50 C70 30 92 32 90 50 C92 68 70 70 58 50 Z" fill="#D9473A"/><ellipse cx="40" cy="50" rx="25" ry="15" fill="#E86A4F"/><circle cx="24" cy="47" r="3.4" fill="#3A3B3C" stroke="none"/>`) +
    `<g fill="#FFFFFF" stroke="#7FB2D9" stroke-width="1.4"><circle cx="70" cy="38" r="2"/><circle cx="74" cy="32" r="1.6"/></g><rect x="6" y="84" width="88" height="8" rx="2" fill="#C68B59"/>`;
  const MARBLES = `<circle cx="0" cy="0" r="6" fill="#5B8FC9"/><path d="M-3 -2 q3 -3 6 0" stroke="#FFFFFF" stroke-width="1.5"/><circle cx="14" cy="1" r="6" fill="#F2C14E"/><path d="M11 -1 q3 -3 6 0" stroke="#FFFFFF" stroke-width="1.5"/><circle cx="7" cy="-10" r="6" fill="#6FAE4F"/><path d="M4 -12 q3 -3 6 0" stroke="#FFFFFF" stroke-width="1.5"/>`;
  // Con bò (thân màu f), đầu bên trái; khung ~ 0..100
  const COW = (f = '#B9895E', spot = '#8C5A32') => `<path d="M83 58 q9 6 5 20" stroke-width="2.5"/><path d="M87 77 l3 4 l-4 0 Z" fill="#3A3B3C"/>` +
    `<rect x="34" y="66" width="7" height="24" rx="3" fill="${spot}"/><rect x="72" y="66" width="7" height="24" rx="3" fill="${spot}"/><ellipse cx="58" cy="60" rx="28" ry="16" fill="${f}"/>` +
    `<ellipse cx="66" cy="56" rx="8" ry="5" fill="${spot}" stroke="none"/><rect x="44" y="68" width="7" height="22" rx="3" fill="${f}"/><rect x="62" y="68" width="7" height="22" rx="3" fill="${f}"/>` +
    `<path d="M20 38 q-5 -8 -10 -7 M34 38 q4 -8 9 -8" stroke-width="4"/><ellipse cx="40" cy="44" rx="7" ry="3.5" transform="rotate(20 40 44)" fill="${f}"/>` +
    `<ellipse cx="27" cy="50" rx="15" ry="13" fill="${f}"/><ellipse cx="19" cy="58" rx="9" ry="7" fill="#F2CFC0"/><circle cx="16" cy="57" r="1.4" fill="#3A3B3C" stroke="none"/><circle cx="22" cy="57" r="1.4" fill="#3A3B3C" stroke="none"/>` +
    `<circle cx="27" cy="46" r="3" fill="#3A3B3C" stroke="none"/><circle cx="26" cy="45" r="1" fill="#FFFFFF" stroke="none"/>`;
  const BABBLE = `<circle cx="42" cy="56" r="24" fill="${SKIN}"/><path d="M28 40 C34 28 52 28 56 38 C48 34 36 34 28 40 Z" fill="${HAIR}"/><path d="M42 33 q4 -6 0 -9" stroke="${HAIR}" stroke-width="3"/>` +
    `${eyes(34, 50, 54, 2.8)}<ellipse cx="42" cy="66" rx="5" ry="4.2" fill="#B4553C"/>${cheeks(28, 56, 62)}` +
    `<path d="M24 92 C24 82 32 78 42 78 C52 78 60 82 60 92 Z" fill="#F6E3BC"/>` +
    `<path d="M66 18 H92 a4 4 0 0 1 4 4 V36 a4 4 0 0 1 -4 4 H76 L68 48 L70 40 H66 a4 4 0 0 1 -4 -4 V22 a4 4 0 0 1 4 -4 Z" fill="#FFFCF6"/>` +
    `<g fill="#DDAA55" stroke="none"><circle cx="71" cy="29" r="2.6"/><circle cx="79" cy="29" r="2.6"/><circle cx="87" cy="29" r="2.6"/></g>`;

  const T = {
    /* Bài 3 */
    'bi bô': SV(BABBLE),
    'bố bế bé': SV(HOLD('bo')),
    'bế bé': SV(HOLD('bo')),
    'cá cờ': SV(BETTA),
    'cờ': SV(FLAG),
    'ba ba': SV(TURTLE),
    'bà ba': SV(AO_BA_BA),
    'bó cỏ': SV(`${ground()}${at(50, 92, 1.15, GRASS())}`),
    'bể cá': SV(TANK),
    'Bà Ba bế bé Bi.': SV(HOLD('ba')),
    'Bò bê có ba bó cỏ.': SV(`${ground(94)}${at(30, 30, 0.7, COW())}${at(-2, 49, 0.5, COW('#D7B48E', '#B9895E'))}${at(8, 96, 0.3, GRASS())}${at(88, 96, 0.36, GRASS())}${at(97, 97, 0.3, GRASS())}`),
    'Bé có cờ, có cả bi.': SV(`${ground(96)}${at(-6, 10, 0.9, KID())}<path d="M58 82 L66 24" stroke="#8C5A32" stroke-width="3.5"/>${at(66, 26, 0.66, PENNANT())}<path d="M54 84 C58 80 64 82 62 88 C58 90 54 88 54 84 Z" fill="${HAND}"/>${at(74, 90, 1, MARBLES)}`)
  };
  /* ---------- Bài 4–7 ---------- */
  const WATER = (y = 70) => `<path d="M0 ${y} H100 V100 H0 Z" fill="#A9D3E4" stroke="none"/><path d="M8 ${y + 8} q6 -4 12 0 M40 ${y + 14} q6 -4 12 0 M72 ${y + 7} q6 -4 12 0" stroke="#5B8FC9" stroke-width="2"/>`;
  const FISH = (body, fin, eye = true) => `<path d="M58 50 C70 34 90 34 92 50 C90 66 70 66 58 50 Z" fill="${fin}"/><ellipse cx="38" cy="50" rx="26" ry="14" fill="${body}"/>` + (eye ? `<circle cx="22" cy="47" r="3" fill="#3A3B3C" stroke="none"/>` : '');
  // Bé đứng cả người (đầu, áo, quần, chân); walk = bước đi
  const KID_FULL = (shirt = '#E86A4F', walk = false, extra = '') =>
    (walk ? `<path d="M44 74 L36 94 M56 74 L64 94" stroke-width="6" stroke="#4D74A8"/><path d="M32 94 h8 M60 94 h8" stroke-width="5"/>` : `<path d="M44 74 V94 M56 74 V94" stroke-width="6" stroke="#4D74A8"/><path d="M40 95 h8 M52 95 h8" stroke-width="5"/>`) +
    `<path d="M36 76 C36 58 42 50 50 50 C58 50 64 58 64 76 Z" fill="${shirt}"/>` +
    (walk ? `<path d="M38 56 L28 70 M62 56 L72 66" stroke="${SKIN}" stroke-width="6"/>` : `<path d="M38 56 L32 72 M62 56 L68 72" stroke="${SKIN}" stroke-width="6"/>`) +
    `<circle cx="50" cy="34" r="15" fill="${SKIN}"/><path d="M35 32 C33 16 67 16 65 32 C60 24 42 22 35 32 Z" fill="${HAIR}"/>${eyes(45, 55, 35, 2.2)}<path d="M46 42 q4 3 8 0" stroke-width="2.2"/>${cheeks(40, 60, 40)}${extra}`;
  const GOAT = `<path d="M30 40 C26 30 30 22 36 22 M38 38 C38 28 44 22 50 24" stroke="#A39588" stroke-width="4"/>` +
    `<rect x="44" y="64" width="6" height="26" rx="2.5" fill="#E8E2D8"/><rect x="74" y="64" width="6" height="26" rx="2.5" fill="#E8E2D8"/>` +
    `<ellipse cx="62" cy="58" rx="26" ry="15" fill="#F6F2EA"/><rect x="52" y="66" width="6" height="24" rx="2.5" fill="#F6F2EA"/><rect x="66" y="66" width="6" height="24" rx="2.5" fill="#F6F2EA"/><path d="M87 52 l6 -6" stroke-width="3"/>` +
    `<path d="M24 44 C24 34 44 32 46 44 L44 58 C42 66 30 68 26 60 Z" fill="#F6F2EA"/><path d="M28 64 L30 76 L34 64" fill="#E8E2D8"/><ellipse cx="22" cy="46" rx="7" ry="3" transform="rotate(-20 22 46)" fill="#F6F2EA"/>` +
    `<circle cx="36" cy="46" r="2.4" fill="#3A3B3C" stroke="none"/><ellipse cx="31" cy="60" rx="4" ry="2.4" fill="#F2CFC0" stroke="none"/>`;
  const BIRD = (body, wing, extra = '') => `<path d="M30 80 l-4 10 M44 80 l2 10 M22 90 h8 M42 90 h8" stroke="#D9982B" stroke-width="3"/><path d="M76 52 L96 42 L92 58 Z" fill="${wing}"/>` +
    `<ellipse cx="50" cy="60" rx="32" ry="22" fill="${body}"/><path d="M42 54 C54 46 74 50 80 62 C68 72 50 70 42 54 Z" fill="${wing}"/>` +
    `<circle cx="24" cy="40" r="14" fill="${body}"/><circle cx="20" cy="37" r="2.6" fill="#3A3B3C" stroke="none"/>${extra}`;
  const SHELF = (old = false) => `${ground(94)}<rect x="16" y="14" width="68" height="78" rx="3" fill="${old ? '#A88566' : '#C68B59'}"/><path d="M16 38 H84 M16 62 H84" stroke="#8C5A32" stroke-width="3"/>` +
    `<rect x="22" y="18" width="7" height="20" fill="#5B8FC9"/><rect x="30" y="21" width="7" height="17" fill="#E86A4F"/><rect x="38" y="19" width="6" height="19" fill="#6FAE4F"/><path d="M60 38 C60 30 72 30 72 38 Z" fill="#F2C14E"/><ellipse cx="34" cy="58" rx="9" ry="4" fill="#FFFCF6"/><rect x="58" y="48" width="14" height="14" rx="2" fill="#DDAA55"/>` +
    (old ? `<path d="M50 66 l4 8 l-3 6 l4 8 M24 70 l6 6" stroke="#5E4530" stroke-width="2"/><path d="M84 14 L72 14 M84 14 L84 26 M84 14 L74 24 M76 14 C76 20 80 22 84 22 M80 14 C80 18 82 19 84 18" stroke="#A39588" stroke-width="1.2"/>` : '');
  const LAKE = `<path d="M0 0 H100 V56 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 56 C20 50 40 54 60 50 C76 47 90 52 100 50 V100 H0 Z" fill="#A9D3E4" stroke="none"/><path d="M18 66 q6 -3 12 0 M58 76 q6 -3 12 0 M30 88 q6 -3 12 0" stroke="#5B8FC9" stroke-width="2"/><path d="M0 52 C20 46 30 50 40 48" stroke="#6FAE4F" stroke-width="5"/>`;
  const BANK = `<path d="M0 80 C30 72 60 78 100 86 V100 H0 Z" fill="#9BC46A"/>`;
  const TREE = `<path d="M50 90 V56" stroke="#8C5A32" stroke-width="7"/><circle cx="50" cy="40" r="22" fill="#7DB25A"/><circle cx="36" cy="50" r="13" fill="#7DB25A"/><circle cx="64" cy="50" r="13" fill="#7DB25A"/>`;
  const DIKE = `<path d="M0 0 H100 V60 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 60 L30 44 H70 L100 60 V100 H0 Z" fill="#9BC46A"/><path d="M30 44 H70" stroke="#C9A060" stroke-width="5"/><path d="M0 74 C30 70 60 76 100 72 V100 H0 Z" fill="#A9D3E4" stroke="none"/>`;
  const CRICKET = `<ellipse cx="0" cy="0" rx="9" ry="4.5" fill="#6B4A2E"/><circle cx="-9" cy="-1" r="3.5" fill="#6B4A2E"/><path d="M-11 -4 q-8 -8 -14 -6 M2 3 l6 6 M-4 3 l-4 6 M6 -2 l10 -8 l4 10" stroke="#3A3B3C" stroke-width="1.4"/>`;
  const BOAT = `<path d="M6 70 H94 L80 86 H20 Z" fill="#B47846"/><path d="M6 70 H94" stroke="#8C5A32" stroke-width="3"/>`;
  const JAR = (fill = '#BFDDE8', inner = '') => `<path d="M36 26 H64 V34 C76 40 78 52 78 64 C78 84 70 90 50 90 C30 90 22 84 22 64 C22 52 24 40 36 34 Z" fill="${fill}"/>${inner}<rect x="33" y="18" width="34" height="10" rx="3" fill="#C68B59"/>`;
  const NOTES = `<g fill="#3A3B3C" stroke="none"><ellipse cx="80" cy="30" rx="4" ry="3"/><ellipse cx="92" cy="20" rx="4" ry="3"/></g><path d="M84 30 V12 L96 6 V20" stroke-width="2.4"/>`;
  const BOW = (c = '#D9473A') => `<path d="M50 50 L18 30 C10 34 10 66 18 70 Z" fill="${c}"/><path d="M50 50 L82 30 C90 34 90 66 82 70 Z" fill="${c}"/><path d="M46 54 L38 84 L46 78 L50 86 Z M54 54 L62 84 L54 78 L50 86 Z" fill="${c}"/><circle cx="50" cy="50" r="8" fill="#B8352A"/>`;
  const FLOWER = (x, y, r, c) => `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map(a => `<ellipse cx="0" cy="${-r}" rx="${r * 0.6}" ry="${r}" transform="rotate(${a})" fill="${c}"/>`).join('')}<circle r="${r * 0.55}" fill="#F2C14E"/></g>`;
  const BASKET = (inner = '') => `${inner}<path d="M10 54 H90 L80 90 H20 Z" fill="#DDAA55"/><path d="M14 66 H86 M17 78 H83" stroke="#B9873E" stroke-width="2.5"/><path d="M30 56 L34 90 M50 56 V90 M70 56 L66 90" stroke="#B9873E" stroke-width="2.5"/><rect x="6" y="48" width="88" height="9" rx="4.5" fill="#C68B59"/>`;
  const PERCH = FISH('#7E8C55', '#5F6E3E') + `<path d="M22 40 L30 30 L36 38 L42 28 L48 37 L54 30 L58 40" fill="#5F6E3E"/><path d="M30 46 v10 M40 44 v12 M50 46 v10" stroke="#5F6E3E" stroke-width="1.6"/>`;
  const TOMATO = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#D9473A"/><path d="M${x - r * 0.4} ${y - r * 0.9} l${r * 0.4} ${r * 0.3} l${r * 0.4} ${-r * 0.3} M${x} ${y - r * 0.6} v${-r * 0.5}" stroke="#4F8A3B" stroke-width="2.5"/><path d="M${x - r * 0.6} ${y - r * 0.2} q${r * 0.2} ${-r * 0.4} ${r * 0.5} ${-r * 0.4}" stroke="#FFFFFF" stroke-width="2" opacity=".6"/>`;
  const strip = svg => svg.replace(/^<svg[^>]*>|<\/svg>$/g, '');
  const PAPAYA = `<path d="M50 24 v-10" stroke="#6E8F3A" stroke-width="3"/><ellipse cx="50" cy="56" rx="40" ry="26" fill="#7DB25A"/><ellipse cx="50" cy="56" rx="35" ry="21" fill="#F2903A"/><ellipse cx="50" cy="56" rx="20" ry="8" fill="#F6C08A"/><g fill="#3A3B3C" stroke="none">${[34, 40, 46, 52, 58, 64].map((x, i) => `<circle cx="${x}" cy="${56 + (i % 2 ? 3 : -3)}" r="2.4"/>`).join('')}</g>`;
  const PEAR = (x = 50, y = 58, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -36 q2 -8 8 -10" stroke="#8C5A32" stroke-width="3"/><path d="M4 -40 C14 -48 26 -44 28 -38 C18 -34 10 -36 4 -40 Z" fill="#7DB25A"/><path d="M0 -34 C-10 -34 -12 -18 -16 -8 C-28 6 -22 30 0 30 C22 30 28 6 16 -8 C12 -18 10 -34 0 -34 Z" fill="#D9D25A"/><path d="M-8 -6 q-4 10 0 20" stroke="#FFFFFF" stroke-width="2.5" opacity=".6"/></g>`;
  const CUSTARD = `<path d="M50 20 v-8" stroke="#6E8F3A" stroke-width="3"/><circle cx="50" cy="54" r="34" fill="#9BC46A"/>${[[38, 36], [54, 32], [68, 42], [30, 52], [46, 50], [62, 56], [74, 62], [36, 68], [52, 70], [64, 76], [24, 66]].map(([x, y]) => `<path d="M${x - 6} ${y} q6 -7 12 0 q-6 7 -12 0 Z" fill="#7DA44A" stroke="#5E8A38" stroke-width="1.6"/>`).join('')}`;

  Object.assign(T, {
    /* Bài 4 · d, đ */
    'da dẻ': SV(BABBLE.replace(/<ellipse cx="42" cy="66"[^>]*\/>/, '<path d="M36 65 q6 5 12 0" stroke-width="2.6"/>').replace(/<path d="M66 18 H92[\s\S]*$/, '') + `<ellipse cx="28" cy="62" rx="7" ry="4.5" fill="#F28B86" stroke="none"/><ellipse cx="56" cy="62" rx="7" ry="4.5" fill="#F28B86" stroke="none"/><path d="M76 30 l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 Z M64 18 l2 -5 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 Z" fill="#F2C14E" stroke="none"/>`),
    'dì Ba': SV(`${ground(96)}${ADULT('di')}<path d="M68 70 L82 44" stroke="#6FAE4F" stroke-width="10"/><circle cx="84" cy="40" r="6" fill="${HAND}"/>`),
    'đu đủ': SV(PAPAYA),
    'đo đỏ': SV(`${ground(90)}${TOMATO(36, 62, 24)}${TOMATO(68, 70, 18)}`),
    'dê': SV(`${ground()}${GOAT}`),
    'dỗ bé': SV(HOLD('me', true)),
    'e dè': SV(`${ground(96)}<rect x="62" y="8" width="34" height="88" fill="#C68B59"/><path d="M62 8 V96" stroke="#8C5A32" stroke-width="3"/>${at(10, 0, 1, KID_FULL('#9C6FA8').replace(/<path d="M46 42 q4 3 8 0"[^>]*\/>/, '<path d="M47 43 h6" stroke-width="2.2"/>').replace(eyes(45, 55, 35, 2.2), eyes(45, 55, 37, 2.2)))}<ellipse cx="50" cy="42" rx="8" ry="3" fill="#F28B86" stroke="none" opacity=".7"/>`),
    'đa đa': SV(`${ground(90)}${BIRD('#B98A5E', '#8C6440', '<g fill="#FFFCF6" stroke="none"><circle cx="40" cy="62" r="2"/><circle cx="52" cy="70" r="2"/><circle cx="60" cy="60" r="2"/><circle cx="30" cy="70" r="2"/></g><path d="M10 40 L4 44 L10 46 Z" fill="#D9982B"/>')}`),
    'bờ đê': SV(DIKE),
    'đi bộ': SV(`${ground(96)}${KID_FULL('#5B8FC9', true)}`),
    'Dì Ba bế bé đi đò.': SV(`${WATER(66)}${at(16, -8, 0.72, strip(SV(HOLD('di')).replace(ground(96), '')))}${BOAT}`),
    'Bé đi đá dế ở bờ đê.': SV(`${DIKE}${at(4, 18, 0.62, KID_FULL('#E86A4F'))}${at(66, 52, 1.1, CRICKET)}${at(80, 56, 1, CRICKET.replace(/#6B4A2E/g, '#3A3B3C'))}`),
    'Bà dỗ bé, dì Ba bế bé.': SV(`${ground(96)}${at(-4, 28, 0.7, ADULT('ba'))}${at(38, 28, 0.7, strip(SV(HOLD('di', true))).replace(ground(96), ''))}`),

    /* Bài 5 · k, h */
    'cũ kĩ': SV(SHELF(true)),
    'kệ': SV(SHELF(false)),
    'bờ hồ': SV(`${LAKE}${at(-16, 8, 0.7, TREE)}${BANK}`),
    'hổ dữ': SV(`<circle cx="50" cy="52" r="36" fill="#F2903A"/><circle cx="22" cy="22" r="10" fill="#F2903A"/><circle cx="78" cy="22" r="10" fill="#F2903A"/><circle cx="22" cy="22" r="5" fill="#F6E3BC"/><circle cx="78" cy="22" r="5" fill="#F6E3BC"/>` +
      `<path d="M50 16 v12 M38 18 l3 10 M62 18 l-3 10 M16 46 h12 M16 56 h10 M84 46 h-12 M84 56 h-10" stroke="#3A3B3C" stroke-width="3.5"/><ellipse cx="50" cy="66" rx="20" ry="16" fill="#FFFCF6"/>` +
      `<path d="M36 42 l8 4 M64 42 l-8 4" stroke-width="3"/>${eyes(40, 60, 48, 3)}<path d="M45 58 h10 l-5 5 Z" fill="#3A3B3C"/><path d="M40 68 C44 80 56 80 60 68 Z" fill="#B4553C"/><path d="M42 68 l2 5 l2 -5 M54 68 l2 5 l2 -5" fill="#FFFFFF" stroke-width="1.4"/>`),
    'kì đà': SV(`${ground(80)}<path d="M64 62 C80 62 96 70 98 80" stroke="#7E8C55" stroke-width="7"/><path d="M30 66 l-8 12 M44 68 l-2 12 M58 66 l6 12" stroke="#7E8C55" stroke-width="6"/><ellipse cx="44" cy="60" rx="24" ry="10" fill="#7E8C55"/>` +
      `<path d="M22 56 C14 50 4 52 2 58 C4 64 14 66 22 62 Z" fill="#7E8C55"/><circle cx="12" cy="56" r="1.8" fill="#3A3B3C" stroke="none"/><path d="M2 60 l-3 2 M2 60 l-3 -1" stroke="#D9473A" stroke-width="1.4"/><g fill="#D7D2A0" stroke="none"><circle cx="36" cy="56" r="2"/><circle cx="46" cy="54" r="2"/><circle cx="54" cy="58" r="2"/><circle cx="40" cy="64" r="2"/></g>`),
    'ê ke': SV(`<path d="M16 86 V16 L86 86 Z" fill="#F2C14E"/><path d="M28 74 V48 L54 74 Z" fill="#FFFCF6"/><path d="M16 30 h6 M16 44 h4 M16 58 h6 M16 72 h4 M30 86 v-6 M44 86 v-4 M58 86 v-6 M72 86 v-4" stroke-width="2"/>`),
    'kì cọ': SV(`<path d="M8 60 H92 L84 92 H16 Z" fill="#E8E2D8"/>${at(0, 2, 1, `<circle cx="50" cy="38" r="15" fill="${SKIN}"/><path d="M35 36 C33 20 67 20 65 36 C60 28 42 26 35 36 Z" fill="${HAIR}"/>${eyes(45, 55, 39, 2.2)}<path d="M46 46 q4 3 8 0" stroke-width="2.2"/>${cheeks(40, 60, 44)}`)}<path d="M66 50 L78 40" stroke="${SKIN}" stroke-width="6"/><rect x="74" y="30" width="16" height="9" rx="3" fill="#F2C14E" transform="rotate(-35 82 34)"/>` +
      `<g fill="#FFFFFF" stroke="#7FB2D9" stroke-width="1.6">${[[20, 58, 7], [32, 54, 6], [70, 56, 7], [82, 52, 5], [56, 56, 5], [26, 46, 4], [88, 40, 4]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>`),
    'hồ cá': SV(`<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><ellipse cx="50" cy="64" rx="46" ry="28" fill="#A9D3E4"/><ellipse cx="22" cy="54" rx="11" ry="5" fill="#7DB25A"/><ellipse cx="78" cy="76" rx="10" ry="4.5" fill="#7DB25A"/>${at(36, 52, 0.32, FISH('#F2B04A', '#F2903A'))}${at(54, 66, 0.28, FISH('#E86A4F', '#D9473A'))}`),
    'cá hố': SV(`<path d="M8 50 C30 36 70 36 96 46 C70 58 30 62 8 50 Z" fill="#D5DDE3"/><path d="M20 44 C40 38 70 38 90 44" stroke="#9AA6AF" stroke-width="2"/><circle cx="16" cy="48" r="2.6" fill="#3A3B3C" stroke="none"/><path d="M8 52 l-5 3" stroke-width="2"/>`),
    'hí hí': SV(`<circle cx="50" cy="50" r="32" fill="${SKIN}"/><path d="M20 44 C16 14 84 14 80 44 C72 30 30 28 20 44 Z" fill="${HAIR}"/><path d="M34 46 q5 -5 10 0 M56 46 q5 -5 10 0" stroke-width="2.6"/><path d="M36 60 C40 76 60 76 64 60 Z" fill="#B4553C"/><path d="M38 60 H62" stroke="#FFFFFF" stroke-width="3"/>${cheeks(30, 70, 58)}<path d="M86 30 l8 -6 M88 42 h10 M86 54 l8 6" stroke="#DDAA55" stroke-width="3"/>`),
    'kẻ ô': SV(`<rect x="10" y="14" width="64" height="76" rx="4" fill="#FFFFFF"/><path d="M10 30 H74 M10 46 H74 M10 62 H74 M10 78 H74 M26 14 V90 M42 14 V90 M58 14 V90" stroke="#5B8FC9" stroke-width="1.8"/><rect x="74" y="12" width="12" height="80" rx="2" fill="#F2C14E" transform="rotate(8 80 52)"/><path d="M78 22 h5 M78 32 h3 M78 42 h5 M78 52 h3 M78 62 h5" stroke-width="1.6" transform="rotate(8 80 52)"/>`),
    'Cô Ba có kệ đã cũ kĩ.': SV(`${at(36, -2, 0.7, SHELF(true))}${at(-6, 30, 0.7, ADULT('co'))}`),
    'Bé bị ho, bà bế bé, bà dỗ bé.': SV(HOLD('ba', true)),
    'Bố bế bé đi bộ ở bờ hồ.': SV(`${LAKE}${at(46, 4, 0.45, TREE)}${BANK}${at(4, 30, 0.66, strip(SV(HOLD('bo'))).replace(ground(96), ''))}`),

    /* Bài 6 · l, m */
    'lá cờ': SV(FLAG),
    'lọ': SV(JAR('#9FC7D8')),
    'mì Ý': SV(`<ellipse cx="50" cy="66" rx="44" ry="18" fill="#FFFCF6"/><ellipse cx="50" cy="62" rx="30" ry="11" stroke="#DCCFBC" stroke-width="2"/><path d="M26 60 C30 40 70 40 74 60 Z" fill="#F2D27A"/><path d="M30 56 q6 -8 12 0 q6 -8 12 0 q6 -8 12 0 M34 50 q6 -6 12 0 q6 -6 12 0" stroke="#D9A94A" stroke-width="2"/><circle cx="42" cy="48" r="5" fill="#D9473A"/><circle cx="58" cy="50" r="5" fill="#D9473A"/><circle cx="50" cy="42" r="2.5" fill="#6FAE4F" stroke="none"/><path d="M76 20 L60 52 M84 24 L64 54" stroke="#A39588" stroke-width="3"/>`),
    'mẹ bế bé': SV(HOLD('me')),
    'lê': SV(`${ground(92)}${PEAR(50, 60, 1.2)}`),
    'li': SV(`${ground(92)}<path d="M28 18 H72 L64 90 H36 Z" fill="#E3F0F4"/><path d="M31 40 H69 L64 90 H36 Z" fill="#F2B04A"/><path d="M58 8 L52 60" stroke="#D9473A" stroke-width="4"/><path d="M38 50 v28" stroke="#FFFFFF" stroke-width="3" opacity=".7"/>`),
    'le le': SV(`${WATER(72)}${at(0, 4, 0.9, BIRD('#8C6E50', '#5E4530', '<path d="M8 40 L0 44 L10 46 Z" fill="#3A3B3C"/><path d="M14 34 q8 -4 16 0" stroke="#FFFCF6" stroke-width="2"/>'))}`),
    'mũ': SV(`${ground(80)}<ellipse cx="50" cy="66" rx="44" ry="12" fill="#E9C46A"/><path d="M24 64 C24 30 76 30 76 64 Z" fill="#E9C46A"/><path d="M24 58 C40 64 60 64 76 58" stroke="#D9473A" stroke-width="6"/>`),
    'me': SV(`<path d="M20 14 C30 12 40 14 46 20" stroke="#6E8F3A" stroke-width="3"/>${[[0, 0], [24, 6], [46, 0]].map(([dx, dy]) => `<path d="M${22 + dx} ${22 + dy} C${12 + dx} ${40 + dy} ${30 + dx} ${54 + dy} ${20 + dx} ${76 + dy} C${18 + dx} ${86 + dy} ${30 + dx} ${88 + dy} ${32 + dx} ${78 + dy} C${40 + dx} ${56 + dy} ${26 + dx} ${42 + dy} ${32 + dx} ${24 + dy} Z" fill="#9C6B42"/>`).join('')}`),
    'mơ': SV(`${ground(88)}<path d="M48 22 C52 14 62 12 70 16 C64 24 54 26 48 22 Z" fill="#7DB25A"/><circle cx="36" cy="58" r="22" fill="#F2A541"/><circle cx="66" cy="64" r="20" fill="#F2B04A"/><path d="M36 38 q4 10 0 20 M66 46 q4 9 0 18" stroke="#D98A2B" stroke-width="2"/><path d="M48 22 L40 36" stroke="#8C5A32" stroke-width="3"/>`),
    'Bé có lê.': SV(`${ground(96)}${KID_FULL('#6FAE4F')}${PEAR(76, 66, 0.5)}`),
    'Mẹ bế bé.': SV(HOLD('me')),
    'Bà có lọ cà, có cả lọ đỗ.': SV(`${ground(96)}${at(-8, 28, 0.7, ADULT('ba'))}${at(42, 40, 0.5, JAR('#E3F0F4', '<g fill="#7E4B8C"><ellipse cx="40" cy="64" rx="9" ry="16" transform="rotate(-20 40 64)"/><ellipse cx="60" cy="64" rx="9" ry="16" transform="rotate(20 60 64)"/></g>'))}${at(66, 44, 0.46, JAR('#E3F0F4', '<g fill="#6FAE4F" stroke="none">' + [[36, 60], [50, 56], [64, 60], [42, 72], [58, 72], [50, 82], [30, 74], [70, 74]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5"/>`).join('') + '</g>'))}`),
    'Dì Ba ca: là lá la la.': SV(`${ground(96)}${at(-6, 6, 0.95, ADULT('di', 'sing'))}${NOTES}<g transform="translate(-16 22)">${NOTES}</g>`),

    /* Bài 7 · n, r */
    'na': SV(CUSTARD),
    'nơ đỏ': SV(BOW()),
    'nơ': SV(BOW()),
    'bộ rễ': SV(`<path d="M0 0 H100 V44 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 44 H100 V100 H0 Z" fill="#C9A47A" stroke="none"/><path d="M0 44 H100" stroke="#8C5A32" stroke-width="2.5"/><path d="M50 44 V16" stroke="#5E9A49" stroke-width="4"/><path d="M50 26 C40 16 30 18 28 24 C36 30 44 30 50 26 Z M50 22 C60 12 70 14 72 20 C64 26 56 26 50 22 Z" fill="#7DB25A"/>` +
      `<path d="M50 44 C50 60 44 70 36 84 M50 50 C56 62 64 70 70 88 M48 56 C40 60 30 62 20 70 M52 58 C62 60 74 60 84 66 M44 70 L38 92 M58 70 L62 94" stroke="#F6E3BC" stroke-width="3"/>`),
    'cá rô': SV(PERCH),
    'ca nô': SV(`${WATER(62)}<path d="M8 60 H88 C96 60 96 66 90 72 L84 78 H18 C12 72 8 66 8 60 Z" fill="#FFFCF6"/><path d="M8 64 H92" stroke="#D9473A" stroke-width="4"/><path d="M30 60 V46 H64 L72 60 Z" fill="#BFDDE8"/><path d="M4 74 q-4 4 -2 8 M10 80 q-6 2 -8 6" stroke="#FFFFFF" stroke-width="2.5"/>`),
    'mũ nỉ': SV(`<path d="M18 72 C18 34 82 34 82 72 Z" fill="#5B8FC9"/><rect x="14" y="66" width="72" height="16" rx="6" fill="#3F6FA6"/><path d="M24 70 v10 M34 70 v10 M44 70 v10 M54 70 v10 M64 70 v10 M74 70 v10" stroke="#2E5A8C" stroke-width="2"/><circle cx="50" cy="28" r="10" fill="#F2C14E"/>`),
    'nụ cà': SV(`<path d="M50 96 C48 70 52 50 50 30" stroke="#5E9A49" stroke-width="4"/><path d="M50 70 C36 64 24 66 18 72 C28 80 40 78 50 70 Z" fill="#7DB25A"/><path d="M50 30 C40 26 36 14 50 6 C64 14 60 26 50 30 Z" fill="#9C6FA8"/><path d="M42 30 L50 38 L58 30 Z" fill="#6E8F3A"/><path d="M50 52 C64 48 74 54 78 60 C68 64 58 60 50 52 Z" fill="#7DB25A"/>`),
    'rổ cá': SV(`${ground(92)}${BASKET(`${at(10, 20, 0.5, FISH('#7E8C55', '#5F6E3E'))}${at(36, 14, 0.5, FISH('#A8B0B8', '#8D959D'))}${at(56, 22, 0.42, FISH('#7E8C55', '#5F6E3E'))}`)}`),
    'rò rỉ': SV(`<rect x="0" y="22" width="56" height="16" fill="#A8B0B8"/><rect x="52" y="18" width="12" height="24" rx="2" fill="#8D959D"/><path d="M64 26 H80 C88 26 90 32 90 40 V48" stroke="#8D959D" stroke-width="10"/><path d="M60 38 C58 44 62 46 60 50" stroke="#7FB2D9" stroke-width="2.5"/><g fill="#7FB2D9" stroke="none"><path d="M90 56 C86 62 86 66 90 66 C94 66 94 62 90 56 Z"/><path d="M90 72 C86 78 86 82 90 82 C94 82 94 78 90 72 Z"/><path d="M60 56 C57 60 57 63 60 63 C63 63 63 60 60 56 Z"/></g><ellipse cx="86" cy="92" rx="12" ry="3" fill="#BFDDE8" stroke="none"/>`),
    'nở rộ': SV(`${ground(94)}<path d="M20 94 V60 M38 94 V44 M56 94 V56 M76 94 V40" stroke="#5E9A49" stroke-width="3"/>${FLOWER(20, 56, 9, '#E58FA0')}${FLOWER(38, 38, 10, '#F2903A')}${FLOWER(56, 52, 9, '#D9473A')}${FLOWER(76, 34, 11, '#E58FA0')}${FLOWER(88, 70, 7, '#F2C14E')}${FLOWER(8, 78, 7, '#9C6FA8')}`),
    'Bé có nơ.': SV(`${ground(96)}${KID('#E58FA0')}${at(54, 14, 0.3, BOW())}`),
    'Bé ra bờ hồ.': SV(`${LAKE}${at(46, 2, 0.5, TREE)}${BANK}${at(-4, 22, 0.72, KID_FULL('#E86A4F', true))}`),
    'Bà có rổ cá rô.': SV(`${ground(96)}${at(-8, 28, 0.7, ADULT('ba'))}${at(44, 48, 0.55, BASKET(`${at(10, 20, 0.5, PERCH)}${at(36, 14, 0.5, PERCH)}${at(56, 22, 0.42, PERCH)}`))}`)
  });
  /* ---------- Bài 8–12 ---------- */
  const CAR = (c = '#D9473A') => `<path d="M10 70 V58 C10 52 14 50 20 50 L32 34 C34 31 37 30 40 30 H64 C68 30 70 31 72 34 L82 50 C88 50 92 54 92 60 V70 Z" fill="${c}"/>` +
    `<path d="M36 36 H50 V50 H28 Z M54 36 H68 L76 50 H54 Z" fill="#DCEFF5"/><circle cx="28" cy="72" r="10" fill="#3A3B3C"/><circle cx="28" cy="72" r="4" fill="#C8C3BC"/><circle cx="74" cy="72" r="10" fill="#3A3B3C"/><circle cx="74" cy="72" r="4" fill="#C8C3BC"/><rect x="84" y="56" width="8" height="5" rx="2" fill="#F2C14E"/>`;
  const SA = `<g>${[-12, -6, 0, 6, 12].map((x, i) => `<path d="M${50 + x * 0.4} 92 C${50 + x * 0.6} 60 ${50 + x * 1.6} 34 ${50 + x * 3} ${10 + (i % 2) * 8}" stroke="#7DB25A" stroke-width="5"/>`).join('')}<path d="M40 92 C40 80 60 80 60 92 Z" fill="#E9E0C6"/><path d="M42 84 H58" stroke="#C9B98E" stroke-width="2"/></g>`;
  const SUSU = (x = 50, y = 56, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -36 C18 -36 30 -18 30 6 C30 26 16 34 0 34 C-16 34 -30 26 -30 6 C-30 -18 -18 -36 0 -36 Z" fill="#B8D98A"/><path d="M0 -34 C-6 -10 -6 14 0 32 M-14 -28 C-20 -6 -18 16 -12 30 M14 -28 C20 -6 18 16 12 30" stroke="#8DB55E" stroke-width="2"/><path d="M0 -36 q-2 -8 4 -12" stroke="#6E8F3A" stroke-width="3"/></g>`;
  const SHIRT = (c = '#FFFFFF') => `<path d="M34 16 L18 24 L6 54 L18 58 L26 40 V92 H74 V40 L82 58 L94 54 L82 24 L66 16 C62 22 38 22 34 16 Z" fill="${c}"/><path d="M34 16 L44 30 L50 22 L56 30 L66 16" fill="#FFFFFF"/><path d="M50 24 V92" stroke="#C8C3BC" stroke-width="2"/><g fill="#A39588" stroke="none"><circle cx="54" cy="38" r="1.8"/><circle cx="54" cy="52" r="1.8"/><circle cx="54" cy="66" r="1.8"/><circle cx="54" cy="80" r="1.8"/></g><rect x="30" y="44" width="12" height="10" rx="1.5" stroke="#A39588" stroke-width="2"/>`;
  const MIC = `<path d="M66 64 L82 40" stroke="#3A3B3C" stroke-width="5"/><circle cx="84" cy="36" r="7" fill="#A39588"/>`;
  const FACE_BIG = (eyesSvg, mouthSvg, extra = '') => `<circle cx="50" cy="52" r="34" fill="${SKIN}"/><path d="M16 46 C14 14 86 14 84 46 C76 30 54 26 34 32 C26 36 20 40 16 46 Z" fill="${HAIR}"/>${eyesSvg}${mouthSvg}${cheeks(30, 70, 64)}${extra}`;
  const LION = `<circle cx="50" cy="50" r="40" fill="#C9772E"/>${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => `<ellipse cx="50" cy="14" rx="9" ry="12" transform="rotate(${a} 50 50)" fill="#B05F22" stroke="none"/>`).join('')}<circle cx="50" cy="54" r="27" fill="#F2B04A"/>` +
    `<circle cx="28" cy="32" r="7" fill="#F2B04A"/><circle cx="72" cy="32" r="7" fill="#F2B04A"/>${eyes(40, 60, 48, 3)}<path d="M44 58 L56 58 L50 65 Z" fill="#6B4A2E"/><path d="M50 65 v4 M50 69 q-6 5 -11 1 M50 69 q6 5 11 1" stroke-width="2.4"/>`;
  const BARBELL = `<path d="M8 22 H92" stroke="#7A6E66" stroke-width="5"/><rect x="6" y="8" width="10" height="28" rx="2" fill="#3A3B3C"/><rect x="16" y="12" width="7" height="20" rx="2" fill="#3A3B3C"/><rect x="84" y="8" width="10" height="28" rx="2" fill="#3A3B3C"/><rect x="77" y="12" width="7" height="20" rx="2" fill="#3A3B3C"/>`;
  const PAPER = `<rect x="14" y="20" width="72" height="62" rx="4" fill="#FFFFFF"/>`;
  const CRAYON = (c = '#E86A4F') => `<g transform="rotate(35 80 70)"><rect x="76" y="40" width="9" height="36" rx="2" fill="${c}"/><path d="M76 76 L80.5 86 L85 76 Z" fill="#F6D2B8"/><path d="M78.5 82 L80.5 86 L82.5 82 Z" fill="${c}"/></g>`;
  const VASE = `<path d="M40 14 H60 V22 C72 30 76 46 72 64 C68 80 60 88 50 88 C40 88 32 80 28 64 C24 46 28 30 40 22 Z" fill="#F4F6FA"/><path d="M34 40 C42 46 58 46 66 40 M32 62 C42 68 58 68 68 62" stroke="#3F6FA6" stroke-width="2.5"/><path d="M40 52 q5 -6 10 0 q5 6 10 0" stroke="#3F6FA6" stroke-width="2"/><rect x="38" y="10" width="24" height="6" rx="2" fill="#E9E0D2"/>`;
  const CUPBOARD = `<rect x="14" y="12" width="72" height="80" rx="3" fill="#B47846"/><path d="M50 12 V92" stroke="#8C5A32" stroke-width="3"/><rect x="20" y="18" width="24" height="68" rx="2" stroke="#8C5A32" stroke-width="2"/><rect x="56" y="18" width="24" height="68" rx="2" stroke="#8C5A32" stroke-width="2"/><circle cx="45" cy="54" r="2" fill="#F2C14E"/><circle cx="55" cy="54" r="2" fill="#F2C14E"/>`;
  const KITE = `<path d="M60 8 L84 30 L62 56 L40 32 Z" fill="#E86A4F"/><path d="M60 8 L62 56 M40 32 L84 30" stroke="#B4553C" stroke-width="2"/><path d="M62 56 C56 66 66 72 58 80 C52 86 58 92 52 96" stroke="#3A3B3C" stroke-width="1.8"/><path d="M58 70 l-5 -3 l1 6 Z M55 84 l-5 -2 l2 6 Z" fill="#F2C14E"/>`;
  const WIND = (y = 0) => `<path d="M6 ${30 + y} H36 C44 ${30 + y} 46 ${20 + y} 40 ${18 + y} C36 ${16 + y} 32 ${20 + y} 34 ${23 + y} M6 ${44 + y} H44 C54 ${44 + y} 56 ${56 + y} 48 ${58 + y} C44 ${59 + y} 40 ${56 + y} 42 ${52 + y} M10 ${58 + y} H30" stroke="#7FB2D9" stroke-width="3.2"/>`;
  const SKETCH = (inner) => `<rect x="10" y="16" width="80" height="70" rx="3" fill="#FFFFFF"/><path d="M14 16 V86" stroke="#C8C3BC" stroke-width="1.5"/>${[22, 32, 42, 52, 62, 72, 82].map(x => `<circle cx="${x}" cy="13" r="3" fill="none" stroke="#7A6E66" stroke-width="2"/>`).join('')}${inner}`;
  const ENVELOPE = `<rect x="22" y="10" width="56" height="82" rx="5" fill="#D9473A"/><path d="M22 30 C40 42 60 42 78 30" stroke="#A8322A" stroke-width="2.5"/><circle cx="50" cy="58" r="13" fill="#F2C14E"/><circle cx="50" cy="58" r="7" fill="#D9473A" stroke="#F2C14E" stroke-width="2"/><path d="M30 80 h40" stroke="#F2C14E" stroke-width="2.5"/>`;
  const ROLLER = `${ground(90)}<rect x="44" y="30" width="34" height="34" rx="3" fill="#F2C14E"/><rect x="50" y="36" width="20" height="14" fill="#DCEFF5"/><path d="M44 30 H80" stroke="#3A3B3C" stroke-width="4"/><rect x="40" y="56" width="44" height="12" rx="2" fill="#F2C14E"/>` +
    `<rect x="6" y="58" width="38" height="32" rx="16" fill="#8E8A86"/><path d="M14 74 H36" stroke="#6E6A66" stroke-width="2"/><path d="M38 58 L46 50" stroke="#3A3B3C" stroke-width="4"/><circle cx="74" cy="78" r="11" fill="#3A3B3C"/><circle cx="74" cy="78" r="4" fill="#C8C3BC"/>`;
  const SHELL = `<path d="M50 86 L14 46 C14 20 86 20 86 46 Z" fill="#F7D3C3"/>${[-30, -15, 0, 15, 30].map(a => `<path d="M50 86 L${50 + a * 1.2} ${28 + Math.abs(a) * 0.3}" stroke="#D9967A" stroke-width="2.2"/>`).join('')}<path d="M40 86 H60 L56 94 H44 Z" fill="#F2B7A0"/>`;
  const BEE = `<ellipse cx="56" cy="54" rx="22" ry="15" fill="#F2C14E"/><path d="M48 40 V68 M60 40 V68" stroke="#3A3B3C" stroke-width="5"/><circle cx="36" cy="52" r="9" fill="#3A3B3C"/><circle cx="33" cy="50" r="2" fill="#FFFFFF" stroke="none"/>` +
    `<ellipse cx="54" cy="34" rx="10" ry="14" transform="rotate(-20 54 34)" fill="#E3F0F4"/><ellipse cx="66" cy="34" rx="9" ry="13" transform="rotate(20 66 34)" fill="#E3F0F4"/><path d="M78 54 l8 0" stroke-width="3"/><path d="M84 38 H96 M86 50 H98 M84 62 H96" stroke="#A39588" stroke-width="3"/>`;
  const BUS = `<rect x="6" y="26" width="88" height="46" rx="8" fill="#5B8FC9"/><g fill="#DCEFF5"><rect x="12" y="32" width="14" height="16" rx="2"/><rect x="30" y="32" width="14" height="16" rx="2"/><rect x="48" y="32" width="14" height="16" rx="2"/><rect x="66" y="32" width="22" height="16" rx="2"/></g>` +
    `<path d="M6 56 H94" stroke="#F2C14E" stroke-width="4"/><circle cx="26" cy="74" r="9" fill="#3A3B3C"/><circle cx="26" cy="74" r="3.5" fill="#C8C3BC"/><circle cx="74" cy="74" r="9" fill="#3A3B3C"/><circle cx="74" cy="74" r="3.5" fill="#C8C3BC"/>`;
  const SPRING = `<path d="M30 86 H70" stroke-width="4"/><path d="M50 86 ${[0, 1, 2, 3, 4, 5].map(i => `C76 ${80 - i * 11} 76 ${74 - i * 11} 50 ${74 - i * 11} C24 ${74 - i * 11} 24 ${68 - i * 11} 50 ${68 - i * 11}`).join(' ')}" stroke="#7A8A9A" stroke-width="4"/><path d="M30 18 H70" stroke-width="4"/>`;
  const TICKET = `<path d="M8 28 H92 V44 C86 44 86 56 92 56 V72 H8 V56 C14 56 14 44 8 44 Z" fill="#F6E3BC"/><path d="M66 30 V70" stroke="#C68B59" stroke-width="2" stroke-dasharray="4 4"/>${at(14, 32, 0.46, BUS)}<path d="M74 40 h10 M74 50 h10 M74 60 h6" stroke="#C68B59" stroke-width="3"/>`;
  const BIKE = `<circle cx="22" cy="76" r="16" stroke-width="3.5"/><circle cx="78" cy="76" r="16" stroke-width="3.5"/><path d="M22 76 L42 52 H70 L78 76 M42 52 L52 76 L70 52 M38 46 H48 M70 52 L66 40 H74" stroke="#D9473A" stroke-width="4"/>`;
  const DOG = (c = '#C68B59', fluffy = false) => fluffy
    ? `<g fill="#F6F2EA">${[[30, 58], [42, 54], [54, 56], [66, 58], [36, 66], [50, 66], [64, 66]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10"/>`).join('')}<circle cx="74" cy="72" r="6"/>${[[30, 82], [64, 82]].map(([x, y]) => `<rect x="${x - 5}" y="${y - 10}" width="10" height="16" rx="5"/>`).join('')}<circle cx="24" cy="40" r="15"/><circle cx="14" cy="34" r="7"/><circle cx="34" cy="30" r="7"/><circle cx="14" cy="48" r="8"/><circle cx="80" cy="50" r="7"/></g><circle cx="22" cy="40" r="2.4" fill="#3A3B3C" stroke="none"/><circle cx="12" cy="44" r="3" fill="#3A3B3C" stroke="none"/>`
    : `<path d="M74 54 q12 -6 14 -18" stroke="${c}" stroke-width="5"/><rect x="28" y="64" width="8" height="24" rx="3" fill="${c}"/><rect x="62" y="64" width="8" height="24" rx="3" fill="${c}"/><ellipse cx="52" cy="60" rx="26" ry="13" fill="${c}"/><rect x="40" y="66" width="8" height="22" rx="3" fill="${c}"/>` +
      `<ellipse cx="24" cy="42" rx="14" ry="13" fill="${c}"/><ellipse cx="12" cy="48" rx="8" ry="6" fill="${c}"/><circle cx="6" cy="46" r="3" fill="#3A3B3C" stroke="none"/><path d="M26 32 C34 30 36 46 30 52 C26 48 24 40 26 32 Z" fill="#8C5A32"/><circle cx="20" cy="40" r="2.4" fill="#3A3B3C" stroke="none"/>`;
  const CHE = `<path d="M30 24 H70 L64 90 H36 Z" fill="#E3F0F4"/><path d="M33 40 H67 L65 56 H35 Z" fill="#7DB25A" stroke="none"/><path d="M35 56 H65 L63.6 72 H36.4 Z" fill="#F2C14E" stroke="none"/><path d="M36.4 72 H63.6 L62.4 86 H37.6 Z" fill="#B47846" stroke="none"/><path d="M30 24 H70 L64 90 H36 Z"/><path d="M58 8 L52 60" stroke="#E86A4F" stroke-width="4"/>`;
  const AWNING = `<path d="M4 8 H96 V26 H4 Z" fill="#E86A4F"/><path d="M4 26 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0" fill="#FFFCF6"/><path d="M20 8 V26 M44 8 V26 M68 8 V26" stroke="#FFFCF6" stroke-width="5"/>`;
  const STALL = (inner = '') => `${AWNING}<path d="M8 26 V92 M92 26 V92" stroke="#8C5A32" stroke-width="4"/><rect x="4" y="62" width="92" height="10" rx="2" fill="#C68B59"/>${inner}`;
  const HEN = `<path d="M80 40 C92 30 96 44 88 50" fill="#D9473A"/><path d="M14 60 C14 34 40 28 62 38 C78 30 92 42 86 58 C82 76 62 86 40 84 C24 82 14 74 14 60 Z" fill="#E8C089"/><path d="M30 48 C46 44 64 52 70 66 C56 74 36 72 30 48 Z" fill="#C9973F"/>` +
    `<circle cx="80" cy="44" r="2.4" fill="#3A3B3C" stroke="none"/><path d="M90 46 l8 3 l-8 3 Z" fill="#F2B134"/><path d="M84 30 q2 -8 6 -4 q2 -6 6 0" fill="#D9473A"/>`;
  const CHICK = (x, y) => `<g transform="translate(${x} ${y})"><circle cx="0" cy="0" r="8" fill="#F2D24E"/><circle cx="-6" cy="-6" r="5" fill="#F2D24E"/><circle cx="-7" cy="-7" r="1.2" fill="#3A3B3C" stroke="none"/><path d="M-11 -6 l-4 1 l4 2 Z" fill="#F2903A"/></g>`;
  const STARFRUIT = (x = 50, y = 50, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-34 -6 C-30 -22 30 -22 34 -6 C36 4 30 14 20 16 C10 20 -10 20 -20 16 C-30 14 -36 4 -34 -6 Z" fill="#F2D24E"/><path d="M-30 -2 C-10 -10 10 -10 30 -2 M-28 8 C-10 4 10 4 28 8" stroke="#C9A62E" stroke-width="2"/><path d="M34 -6 q8 -4 10 -10" stroke="#6E8F3A" stroke-width="3"/></g>`;
  const STARSLICE = (x, y, r) => `<path d="${Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.5 : r; return (i ? 'L' : 'M') + (x + rr * Math.cos(a)).toFixed(1) + ' ' + (y + rr * Math.sin(a)).toFixed(1); }).join(' ')} Z" fill="#F7E58A" stroke="#C9A62E"/>`;
  const POT = (inner = '') => `<path d="M14 46 H86 C86 74 74 88 50 88 C26 88 14 74 14 46 Z" fill="#9C5B3A"/>${inner}<rect x="10" y="40" width="80" height="9" rx="4" fill="#B4693F"/><path d="M8 52 q-6 4 0 8 M92 52 q6 4 0 8" stroke="#9C5B3A" stroke-width="4"/><path d="M34 30 q-4 -8 0 -16 M50 30 q-4 -8 0 -16 M66 30 q-4 -8 0 -16" stroke="#C8C3BC" stroke-width="3"/>`;
  const MONKEY = `<path d="M66 70 C88 70 92 48 82 40" stroke="#8C5A32" stroke-width="5"/><ellipse cx="54" cy="68" rx="18" ry="20" fill="#A0714A"/><ellipse cx="54" cy="72" rx="11" ry="13" fill="#E8C9A0"/>` +
    `<circle cx="28" cy="34" r="8" fill="#A0714A"/><circle cx="72" cy="34" r="8" fill="#A0714A"/><circle cx="50" cy="36" r="22" fill="#A0714A"/><path d="M34 40 C34 24 66 24 66 40 C66 52 58 56 50 56 C42 56 34 52 34 40 Z" fill="#E8C9A0"/>` +
    `${eyes(43, 57, 38, 2.6)}<path d="M44 48 q6 5 12 0" stroke-width="2.4"/><path d="M38 76 L30 92 M70 76 L76 92" stroke="#A0714A" stroke-width="7"/>`;
  const LEAF = (x, y, a, c = '#C9973F') => `<g transform="translate(${x} ${y}) rotate(${a})"><path d="M0 0 C8 -14 26 -14 34 0 C26 14 8 14 0 0 Z" fill="${c}"/><path d="M0 0 H34 M12 0 l6 -6 M20 0 l6 6" stroke="#8C5A32" stroke-width="1.6"/></g>`;
  const DRYFISH = (x, y) => `<g transform="translate(${x} ${y}) rotate(90)"><path d="M0 0 C10 -10 34 -10 44 0 C34 10 10 10 0 0 Z" fill="#D9B27A"/><path d="M44 0 l10 -8 v16 Z" fill="#C9973F"/><path d="M12 -4 v8 M20 -5 v10 M28 -4 v8" stroke="#B48A55" stroke-width="1.4"/><circle cx="7" cy="-1" r="1.6" fill="#3A3B3C" stroke="none"/></g>`;
  const ROCKS = `${ground(92)}<path d="M6 92 L14 40 L38 26 L48 92 Z" fill="#A8A29C"/><path d="M52 92 L56 30 L82 22 L96 50 L94 92 Z" fill="#B9B3AD"/><path d="M48 92 L50 60 L52 92" fill="#3A3B3C"/><path d="M50 60 C46 52 40 50 36 52 M50 62 C54 54 60 52 64 54" stroke="#5E9A49" stroke-width="3"/>`;
  const CLOCK = `<circle cx="50" cy="52" r="38" fill="#FFFCF6"/><circle cx="50" cy="52" r="38" stroke-width="5"/>${Array.from({ length: 12 }, (_, i) => `<path d="M50 18 V${i % 3 ? 22 : 26}" stroke-width="${i % 3 ? 2 : 3.5}" transform="rotate(${i * 30} 50 52)"/>`).join('')}<path d="M50 52 V30 M50 52 L66 60" stroke-width="4"/><circle cx="50" cy="52" r="3" fill="#3A3B3C"/><path d="M22 18 l-8 -6 M78 18 l8 -6" stroke-width="4"/>`;
  const CANE = `<path d="M74 54 V96 M74 54 q0 -8 -8 -8" stroke="#8C5A32" stroke-width="4"/>`;
  const CREEL = (inner = '') => `${inner}<path d="M22 40 C10 54 14 84 30 92 H70 C86 84 90 54 78 40 Z" fill="#DDAA55"/><path d="M18 56 H82 M16 70 H84 M22 84 H78" stroke="#B9873E" stroke-width="2.5"/><path d="M36 40 L34 92 M50 40 V92 M64 40 L66 92" stroke="#B9873E" stroke-width="2"/><ellipse cx="50" cy="40" rx="28" ry="6" fill="#C9973F"/>`;
  const SPROUTS = `<ellipse cx="50" cy="78" rx="42" ry="12" fill="#FFFCF6"/>${Array.from({ length: 16 }, (_, i) => { const x = 16 + i * 4.4, y = 74 - (i % 4) * 4; return `<path d="M${x} ${y} C${x + 6} ${y - 18} ${x + 14} ${y - 22} ${x + 18} ${y - 34}" stroke="#F0EEDC" stroke-width="3.4"/><path d="M${x} ${y} C${x + 6} ${y - 18} ${x + 14} ${y - 22} ${x + 18} ${y - 34}" stroke="#D8D4B4" stroke-width="1"/><ellipse cx="${x + 18}" cy="${y - 36}" rx="3" ry="2.2" fill="#C9D86A" stroke="none"/>`; }).join('')}`;
  const GIOCHA = `<path d="M6 78 C30 60 70 60 94 78 C70 92 30 92 6 78 Z" fill="#6FAE4F"/><path d="M10 78 H90" stroke="#4E8A3A" stroke-width="1.6"/><rect x="18" y="44" width="40" height="26" rx="13" fill="#F2E3C8"/><ellipse cx="58" cy="57" rx="7" ry="13" fill="#F7EBD6"/><path d="M18 46 H40 V68 H18" fill="#6FAE4F" stroke="#4E8A3A"/>` +
    `<g transform="translate(70 66)"><ellipse rx="12" ry="6" fill="#F7EBD6"/><circle cx="-4" cy="-1" r="1" fill="#C9B98E" stroke="none"/><circle cx="3" cy="1" r="1" fill="#C9B98E" stroke="none"/></g>`;
  const SPICES = `${ground(90)}${[[24, '#D9473A'], [50, '#3A3B3C'], [76, '#FFFFFF']].map(([x, c]) => `<rect x="${x - 11}" y="44" width="22" height="46" rx="5" fill="#E3F0F4"/><rect x="${x - 9}" y="58" width="18" height="30" rx="3" fill="${c}" stroke="none"/><rect x="${x - 12}" y="36" width="24" height="10" rx="3" fill="#C68B59"/>`).join('')}<path d="M18 22 C24 14 30 16 30 24" stroke="#D9473A" stroke-width="5"/><path d="M30 24 q4 -2 6 -6" stroke="#5E9A49" stroke-width="3"/>`;
  const SWEAT = `<path d="M82 22 C78 30 78 34 82 36 C86 34 86 30 82 22 Z" fill="#7FB2D9"/>`;
  const SHH = `<path d="M50 70 V52" stroke="${HAND}" stroke-width="7"/>`;
  const re = (svg, from, to) => svg.split(from).join(to);

  Object.assign(T, {
    /* Bài 8 · s, t */
    'lá sả': SV(`${ground(94)}${SA}`),
    'su su': SV(`${SUSU(40, 56, 1)}${SUSU(76, 66, 0.6)}`),
    'ô tô': SV(`${ground(84)}${CAR()}`),
    'tò mò': SV(`${ground(96)}<rect x="62" y="10" width="34" height="86" fill="#C68B59"/><path d="M62 10 V96" stroke="#8C5A32" stroke-width="3"/>${at(-4, 10, 0.9, KID('#6FAE4F'))}<circle cx="64" cy="44" r="10" fill="#DCEFF5" stroke-width="3"/><path d="M57 52 L50 62" stroke-width="5"/>`),
    'sơ mi': SV(SHIRT('#DCEFF5')),
    'ca sĩ': SV(`${ground(96)}${ADULT('co', 'sing')}${MIC}${NOTES}`),
    'lo sợ': SV(FACE_BIG(`<circle cx="38" cy="50" r="5" fill="#FFFFFF"/><circle cx="38" cy="51" r="2.4" fill="#3A3B3C" stroke="none"/><circle cx="62" cy="50" r="5" fill="#FFFFFF"/><circle cx="62" cy="51" r="2.4" fill="#3A3B3C" stroke="none"/><path d="M30 40 L42 36 M70 40 L58 36" stroke-width="2.6"/>`, `<path d="M40 72 q4 -6 10 -2 q6 -4 10 2" stroke-width="2.6"/>`, SWEAT)),
    'ti hí': SV(FACE_BIG(`<path d="M32 52 q6 -4 12 0 M56 52 q6 -4 12 0" stroke-width="3"/>`, `<path d="M42 68 q8 6 16 0" stroke-width="2.6"/>`)),
    'sư tử': SV(LION),
    'cử tạ': SV(`${ground(96)}${at(0, 22, 0.8, KID_FULL('#E86A4F'))}<path d="M42 54 L34 34 M58 54 L66 34" stroke="${SKIN}" stroke-width="5"/>${at(0, 12, 1, BARBELL)}`),
    'Bé tô cá.': SV(`${PAPER}${at(22, 26, 0.55, FISH('#F2903A', '#E86A4F'))}${at(-16, 46, 0.56, KID('#5B8FC9'))}${CRAYON('#5B8FC9')}`),
    'Bố bé là ca sĩ, mẹ bé là y tá.': SV(`${ground(96)}${at(-10, 22, 0.76, ADULT('bo', 'sing') + MIC)}${at(42, 22, 0.76, ADULT('me'))}<path d="M66 24 H84 L82 32 H68 Z" fill="#FFFFFF"/><path d="M75 25 C72 22 69 26 75 30 C81 26 78 22 75 25 Z" fill="#E86A4F" stroke="none"/>`),
    'Bà cố có lọ sứ cổ.': SV(`${ground(96)}${at(-8, 24, 0.76, ADULT('ba'))}${at(50, 30, 0.66, VASE)}`),
    'Cô Na có tủ to, có cá rô, củ sả.': SV(`${ground(96)}${at(36, 2, 0.66, CUPBOARD)}${at(-8, 30, 0.7, ADULT('co'))}${at(56, 66, 0.4, PERCH)}${at(68, 52, 0.42, SA)}`),

    /* Bài 9 · v, x */
    'vi vu': SV(`<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${KITE}${WIND(30)}`),
    'vở vẽ': SV(SKETCH(`<circle cx="66" cy="34" r="8" fill="#F2C14E"/><path d="M26 76 L42 50 L58 76 Z" fill="#7DB25A"/><path d="M50 76 L64 58 L80 76 Z" fill="#9BC46A"/>`) + CRAYON('#5B8FC9')),
    'lì xì': SV(ENVELOPE),
    'xe lu': SV(ROLLER),
    'vỏ sò': SV(SHELL),
    'võ sĩ': SV(`${ground(96)}${re(KID_FULL('#FFFFFF'), '#4D74A8', '#E9E0D2')}<path d="M36 64 H64" stroke="#3A3B3C" stroke-width="4"/><path d="M62 56 L80 44" stroke="${SKIN}" stroke-width="6"/><circle cx="82" cy="43" r="5" fill="${SKIN}"/>`),
    'vù vù': SV(BEE),
    'xe ca': SV(`${ground(86)}${BUS}`),
    'lò xo': SV(SPRING),
    'vé xe': SV(TICKET),
    'Bé đi xe.': SV(`${ground(94)}${at(0, 4, 1, BIKE)}${at(24, -6, 0.62, KID('#E86A4F'))}<path d="M46 56 L66 42" stroke="${SKIN}" stroke-width="4"/>`),
    'Bé tô xe bò, xe lu và cả xe ca.': SV(`${PAPER}${at(18, 24, 0.3, `${COW()}`)}${at(48, 22, 0.34, ROLLER)}${at(20, 52, 0.4, BUS)}${CRAYON('#6FAE4F')}`),
    'Hè về, bố và bé đi bộ ở bờ hồ.': SV(`${LAKE}<circle cx="84" cy="16" r="9" fill="#F2C14E"/>${BANK}${at(-10, 22, 0.76, KID_FULL('#5B8FC9', true))}${at(30, 34, 0.62, KID_FULL('#E86A4F', true))}`),
    'Bé có vở vẽ, bé vẽ bò, dê và sư tử.': SV(SKETCH(`${at(18, 24, 0.3, COW())}${at(50, 22, 0.3, GOAT)}${at(36, 54, 0.3, LION)}`)),

    /* Bài 10 · ch */
    'chú chó': SV(`${ground(90)}${DOG()}`),
    'chè': SV(CHE),
    'cha mẹ': SV(`${ground(96)}${at(-8, 14, 0.84, ADULT('bo'))}${at(40, 14, 0.84, ADULT('me'))}`),
    'đi chợ': SV(`${STALL(`${at(14, 46, 0.3, TOMATO(30, 50, 20))}${at(56, 48, 0.24, PERCH)}`)}${at(28, 34, 0.66, KID_FULL('#6FAE4F', true))}`),
    'chó xù': SV(`${ground(90)}${DOG('#F6F2EA', true)}`),
    'chợ cá': SV(STALL(`${at(10, 38, 0.36, FISH('#A8B0B8', '#7A8A9A'))}${at(40, 36, 0.36, PERCH)}${at(66, 38, 0.3, FISH('#E86A4F', '#D9473A'))}`)),
    'cô chú': SV(`${ground(96)}${at(-8, 14, 0.84, ADULT('co'))}${at(40, 14, 0.84, re(ADULT('bo'), '#5B8FC9', '#6FAE4F'))}`),
    'che chở': SV(`${ground(90)}${at(0, 4, 1, HEN)}${CHICK(30, 84)}${CHICK(46, 86)}`),
    'Cha cho bé đi chợ.': SV(`${STALL()}${at(-6, 26, 0.7, ADULT('bo'))}${at(40, 40, 0.58, KID_FULL('#E86A4F', true))}`),
    'Chú chở bé và chị đi chợ.': SV(`${ground(94)}${at(0, 4, 1, BIKE)}${at(14, 4, 0.52, re(ADULT('bo'), '#5B8FC9', '#6FAE4F'))}${at(50, 22, 0.36, KID('#E58FA0'))}${at(34, 30, 0.32, KID('#5B8FC9'))}`),
    'Chợ có cá cờ, có cả cà và chả cá.': SV(STALL(`${at(6, 30, 0.36, JAR('#DCEFF5', at(26, 40, 0.5, BETTA)))}${at(40, 44, 0.28, `<ellipse cx="40" cy="50" rx="34" ry="16" fill="#7B4F9E"/><path d="M70 44 q12 -6 14 4" stroke="#5E9A49" stroke-width="6"/>`)}${at(66, 50, 1, `<circle cx="6" cy="6" r="6" fill="#E8C089"/><circle cx="18" cy="8" r="6" fill="#E8C089"/><circle cx="12" cy="0" r="6" fill="#E8C089"/>`)}`)),

    /* Bài 11 · kh */
    'khế': SV(`${STARFRUIT(46, 44, 1)}${STARSLICE(72, 76, 16)}`),
    'kho cá': SV(POT(`${at(26, 32, 0.4, FISH('#B48A55', '#8C6440', false))}`)),
    'chú khỉ': SV(`${ground(94)}${MONKEY}`),
    'lá khô': SV(`${ground(90)}${LEAF(10, 76, -10)}${LEAF(40, 60, 20, '#B48A55')}${LEAF(56, 82, -30, '#D9A55A')}${LEAF(20, 40, 40, '#A87A45')}`),
    'cá khô': SV(`<path d="M6 16 H94" stroke="#8C5A32" stroke-width="3"/>${DRYFISH(24, 18)}${DRYFISH(50, 18)}${DRYFISH(76, 18)}`),
    'khe đá': SV(ROCKS),
    'khò khè': SV(FACE_BIG(`<path d="M32 50 q6 4 12 0 M56 50 q6 4 12 0" stroke-width="3"/>`, `<ellipse cx="50" cy="72" rx="6" ry="5" fill="#B4553C"/>`, `<path d="M64 76 q10 0 14 -6 M66 84 q12 2 18 -4 M70 92 q10 2 14 -2" stroke="#A39588" stroke-width="2.4"/>`)),
    'Khỉ có khế.': SV(`${ground(94)}${MONKEY}${STARFRUIT(76, 70, 0.4)}`),
    'Mẹ kho cá cho bé.': SV(`${ground(96)}${at(-8, 10, 0.86, ADULT('me'))}${at(44, 44, 0.52, POT(at(26, 32, 0.4, FISH('#B48A55', '#8C6440', false))))}`),
    'Bé Vi đi khe khẽ.': SV(`${ground(96)}${at(0, 0, 1, re(KID_FULL('#E58FA0', true), '<path d="M46 42 q4 3 8 0" stroke-width="2.2"/>', '<circle cx="50" cy="43" r="2" fill="#B4553C" stroke="none"/>'))}<path d="M62 56 L56 44" stroke="${SKIN}" stroke-width="5"/><path d="M76 24 q4 -4 8 0 M80 14 q4 -4 8 0" stroke="#A39588" stroke-width="2.4"/>`),
    'Bà có rổ khế to.': SV(`${ground(96)}${at(-8, 24, 0.72, ADULT('ba'))}${at(44, 46, 0.52, BASKET(`${STARFRUIT(34, 46, 0.5)}${STARFRUIT(64, 44, 0.5)}`))}`),

    /* Bài 12 · gi */
    'gió to': SV(`${ground(94)}<path d="M40 94 C40 70 44 56 54 44" stroke="#8C5A32" stroke-width="7"/><ellipse cx="62" cy="34" rx="28" ry="20" transform="rotate(-20 62 34)" fill="#7DB25A"/>${WIND(10)}${LEAF(70, 70, 20, '#7DB25A')}${LEAF(84, 52, -20, '#9BC46A')}`),
    'giờ': SV(CLOCK),
    'cụ già': SV(`${ground(96)}${ADULT('ba')}${CANE}`),
    'giỏ cá': SV(CREEL(`${at(30, 10, 0.3, FISH('#7E8C55', '#5F6E3E'))}<g transform="rotate(-70 50 30)">${at(40, 14, 0.3, FISH('#A8B0B8', '#7A8A9A'))}</g>`)),
    'giá đỗ': SV(SPROUTS),
    'giò chả': SV(GIOCHA),
    'gia vị': SV(SPICES),
    'Bà giữ giỏ.': SV(`${ground(96)}${at(-8, 10, 0.86, ADULT('ba'))}${at(50, 46, 0.5, CREEL())}`),
    'Bé che gió.': SV(`${ground(96)}${WIND(-10)}${at(10, 0, 1, KID_FULL('#5B8FC9'))}<path d="M62 56 L70 40" stroke="${SKIN}" stroke-width="6"/><path d="M60 26 C70 22 80 26 82 36 L64 44 Z" fill="#E86A4F"/>`),
    'Chú chó xù giữ giỏ cá cho bà.': SV(`${ground(96)}${at(-8, 10, 0.86, ADULT('ba'))}${at(46, 40, 0.56, DOG('#F6F2EA', true))}${at(66, 60, 0.36, CREEL())}`),
    'Bố đi giỗ cụ về, có giò chả cho bé.': SV(`${ground(96)}${at(-10, 8, 0.86, ADULT('bo'))}${at(30, 46, 0.4, GIOCHA)}${at(40, 30, 0.66, KID('#E86A4F'))}`)
  });

  /* ---------- Bài 13–17 ---------- */
  const EGG = (x, y, s = 1) => `<ellipse cx="${x}" cy="${y}" rx="${7 * s}" ry="${9 * s}" fill="#FFF6E6"/>`;
  const NEST = (inner = '') => `<ellipse cx="50" cy="80" rx="40" ry="12" fill="#D9B27A"/>${inner}<path d="M12 78 C30 92 70 92 88 78 M16 84 C34 96 66 96 84 84" stroke="#B48A55" stroke-width="2.5"/>`;
  const MO = `<path d="M18 70 C10 52 22 30 50 30 C78 30 90 52 82 70 C76 84 24 84 18 70 Z" fill="#B4693F"/><path d="M24 62 C40 66 60 66 76 62" stroke="#7A4428" stroke-width="5"/><circle cx="36" cy="48" r="4" fill="#7A4428"/><ellipse cx="50" cy="86" rx="30" ry="5" fill="#E9C9A0"/>`;
  const STICK = `<path d="M70 14 L52 40" stroke="#8C5A32" stroke-width="5"/><circle cx="50" cy="42" r="6" fill="#C68B59"/>`;
  const WOODFISH = `<path d="M58 50 C70 34 90 34 92 50 C90 66 70 66 58 50 Z" fill="#B47846"/><ellipse cx="38" cy="50" rx="26" ry="14" fill="#C68B59"/><path d="M20 46 C30 42 46 42 60 48 M22 54 C34 58 48 58 60 52" stroke="#8C5A32" stroke-width="1.8"/><circle cx="22" cy="47" r="3" fill="#3A3B3C" stroke="none"/><rect x="34" y="62" width="6" height="22" fill="#8C5A32"/><rect x="22" y="84" width="30" height="6" rx="2" fill="#8C5A32"/>`;
  const CHAIR = (c = '#C68B59', d = '#8C5A32') => `<rect x="30" y="10" width="40" height="44" rx="4" fill="${c}"/><path d="M36 18 H64 M36 30 H64 M36 42 H64" stroke="${d}" stroke-width="2.5"/><rect x="24" y="52" width="52" height="10" rx="3" fill="${c}"/><path d="M30 62 V92 M70 62 V92" stroke="${d}" stroke-width="6"/><path d="M30 78 H70" stroke="${d}" stroke-width="3"/>`;
  const CRAB = (c = '#D9473A') => `<ellipse cx="50" cy="58" rx="28" ry="18" fill="${c}"/>${[-1, 1].map(k => `<path d="M${50 + k * 24} 66 l${k * 14} 10 M${50 + k * 26} 60 l${k * 16} 6 M${50 + k * 22} 70 l${k * 10} 14" stroke="${c}" stroke-width="4"/><path d="M${50 + k * 20} 46 C${50 + k * 26} 30 ${50 + k * 34} 26 ${50 + k * 38} 22" stroke="${c}" stroke-width="5"/><path d="M${50 + k * 38} 22 l${k * 6} -10 l${k * -12} 2 Z" fill="${c}"/>`).join('')}<circle cx="42" cy="44" r="4" fill="#FFFFFF"/><circle cx="58" cy="44" r="4" fill="#FFFFFF"/><circle cx="42" cy="44" r="2" fill="#3A3B3C" stroke="none"/><circle cx="58" cy="44" r="2" fill="#3A3B3C" stroke="none"/>`;
  const NOTEPAD = `<rect x="18" y="12" width="56" height="78" rx="4" fill="#FFF4B8"/><path d="M26 30 H66 M26 42 H66 M26 54 H56 M26 66 H62" stroke="#C9B98E" stroke-width="3"/><g transform="rotate(30 74 60)"><rect x="70" y="20" width="9" height="50" rx="2" fill="#F2C14E"/><path d="M70 70 L74.5 82 L79 70 Z" fill="#F6D2B8"/><path d="M73 78 L74.5 82 L76 78 Z" fill="#3A3B3C"/></g>`;
  const BENCH = `<rect x="6" y="50" width="88" height="12" rx="3" fill="#B9B3AD"/><rect x="12" y="62" width="14" height="26" fill="#A8A29C"/><rect x="74" y="62" width="14" height="26" fill="#A8A29C"/><path d="M20 56 h10 M60 54 h14" stroke="#9A948E" stroke-width="2"/>`;
  const ARMCHAIR = `<rect x="22" y="20" width="56" height="44" rx="12" fill="#8C4A2E"/><rect x="10" y="44" width="18" height="34" rx="8" fill="#9C5B3A"/><rect x="72" y="44" width="18" height="34" rx="8" fill="#9C5B3A"/><rect x="24" y="56" width="52" height="20" rx="6" fill="#A8613E"/><path d="M18 78 V90 M82 78 V90" stroke="#5E3A22" stroke-width="5"/><g fill="#5E3A22" stroke="none"><circle cx="38" cy="34" r="1.8"/><circle cx="50" cy="34" r="1.8"/><circle cx="62" cy="34" r="1.8"/><circle cx="44" cy="46" r="1.8"/><circle cx="56" cy="46" r="1.8"/></g>`;
  const HOUSE = (wall = '#C68B59', roof = '#8C4A2E') => `<path d="M14 50 L50 18 L86 50 Z" fill="${roof}"/><rect x="20" y="48" width="60" height="42" fill="${wall}"/><path d="M20 60 H80 M20 72 H80" stroke="#8C5A32" stroke-width="1.6"/><rect x="42" y="62" width="16" height="28" fill="#6B4A2E"/><rect x="26" y="56" width="12" height="12" fill="#DCEFF5"/><rect x="62" y="56" width="12" height="12" fill="#DCEFF5"/>`;
  const HUT = `<path d="M8 54 L50 20 L92 54 Z" fill="#D9B45A"/><path d="M14 50 L50 22 M30 46 L50 28 M86 50 L50 22 M70 46 L50 28" stroke="#B48A35" stroke-width="2"/><rect x="18" y="52" width="64" height="38" fill="#C9A06A"/><rect x="42" y="62" width="16" height="28" fill="#6B4A2E"/><rect x="24" y="60" width="12" height="12" fill="#6B4A2E"/>`;
  const GRAPES = (c = '#7B2E5E') => `<path d="M50 20 q2 -8 10 -10" stroke="#6E8F3A" stroke-width="3"/><path d="M54 18 C64 10 78 14 80 22 C70 26 60 24 54 18 Z" fill="#7DB25A"/>${[[40, 30], [52, 30], [64, 30], [34, 42], [46, 42], [58, 42], [70, 42], [40, 54], [52, 54], [64, 54], [46, 66], [58, 66], [52, 78]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="${c}"/>`).join('')}`;
  const TRAIN = `${ground(88)}<path d="M4 84 H96" stroke="#7A6E66" stroke-width="3"/><rect x="8" y="36" width="70" height="40" rx="8" fill="#5B8FC9"/><rect x="14" y="44" width="16" height="14" rx="2" fill="#DCEFF5"/><rect x="36" y="44" width="16" height="14" rx="2" fill="#DCEFF5"/><path d="M78 76 L92 76 L92 56 C92 46 86 40 78 40 Z" fill="#3F6FA6"/><rect x="58" y="24" width="10" height="14" fill="#3A3B3C"/>${[22, 46, 70].map(x => `<circle cx="${x}" cy="80" r="7" fill="#3A3B3C"/>`).join('')}<path d="M8 66 H92" stroke="#F2C14E" stroke-width="3"/>`;
  const TOOTH = `<path d="M30 30 C30 18 44 16 50 22 C56 16 70 18 70 30 C70 44 66 50 64 70 C62 82 56 82 54 68 C53 60 47 60 46 68 C44 82 38 82 36 70 C34 50 30 44 30 30 Z" fill="#FFFFFF"/>`;
  const DREAM = `<path d="M62 20 C60 10 76 6 80 14 C88 8 98 16 92 24 C98 30 88 38 82 34 C76 40 64 36 66 30 C58 30 58 22 62 20 Z" fill="#FFFCF6"/><circle cx="60" cy="40" r="3" fill="#FFFCF6"/><circle cx="56" cy="46" r="2" fill="#FFFCF6"/><path d="M76 22 l2 -4 l2 4 l4 0 l-3 3 l1 4 l-4 -2 l-4 2 l1 -4 l-3 -3 Z" fill="#F2C14E" stroke="none"/>`;
  const SLEEP = `<rect x="6" y="62" width="88" height="24" rx="6" fill="#E9E0D2"/><rect x="10" y="54" width="26" height="14" rx="6" fill="#FFFFFF"/><path d="M30 70 C30 58 86 58 90 70 Z" fill="#9FC7D8"/><circle cx="26" cy="54" r="12" fill="${SKIN}"/><path d="M14 52 C14 38 38 38 38 50 C32 44 22 44 14 52 Z" fill="${HAIR}"/><path d="M20 56 q3 2 6 0" stroke-width="2"/><path d="M42 30 h8 l-8 8 h8 M54 18 h6 l-6 6 h6" stroke="#5B8FC9" stroke-width="2.4"/>`;
  const HAT = `<ellipse cx="0" cy="0" rx="22" ry="5" fill="#5E4530"/><path d="M-13 0 C-13 -18 13 -18 13 0 Z" fill="#6B4A2E"/><path d="M-13 -4 H13" stroke="#D9473A" stroke-width="3"/>`;
  const PUMPKIN = `<path d="M50 24 q0 -10 8 -14" stroke="#6E8F3A" stroke-width="4"/><ellipse cx="50" cy="58" rx="42" ry="32" fill="#F2903A"/><path d="M50 26 C34 34 34 82 50 90 C66 82 66 34 50 26 M50 26 C18 30 16 84 50 90 M50 26 C82 30 84 84 50 90" stroke="#D9732A" stroke-width="2.5"/><path d="M58 18 C66 14 74 18 74 24 C66 26 60 24 58 18 Z" fill="#7DB25A"/>`;
  const TUNA = `<path d="M70 50 L92 30 L86 50 L92 70 Z" fill="#3F5E8C"/><path d="M8 50 C20 30 56 28 72 50 C56 72 20 70 8 50 Z" fill="#5B7FAF"/><path d="M8 50 C20 60 56 62 72 50 C56 70 20 70 8 50 Z" fill="#D8E2EE" stroke="none"/><path d="M40 34 L46 22 L52 34 M40 66 L46 76 L52 66" fill="#3F5E8C"/><circle cx="20" cy="46" r="3" fill="#3A3B3C" stroke="none"/><path d="M28 40 C30 46 30 54 28 60" stroke="#3F5E8C" stroke-width="2"/>`;
  const ALLEY = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 0 L38 30 V92 L0 100 Z" fill="#E9C9A0"/><path d="M100 0 L62 30 V92 L100 100 Z" fill="#D9B48A"/><path d="M38 92 H62 L100 100 H0 Z" fill="#C8C3BC"/><path d="M38 30 H62" stroke="none"/><rect x="10" y="40" width="14" height="18" fill="#8C5A32"/><rect x="76" y="40" width="14" height="18" fill="#8C5A32"/><path d="M44 92 L48 60 M56 92 L52 60" stroke="#B9B3AD" stroke-width="1.5"/>`;
  const CORN = (x, y, s = 1, a = 0) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})"><ellipse cx="0" cy="0" rx="11" ry="26" fill="#F2C14E"/>${[-16, -8, 0, 8, 16].map(yy => `<path d="M-9 ${yy} H9" stroke="#D9A42E" stroke-width="1.6"/>`).join('')}<path d="M-6 -24 V24 M0 -26 V26 M6 -24 V24" stroke="#D9A42E" stroke-width="1.4"/><path d="M-12 20 C-18 0 -14 -20 -4 -30 C-10 -10 -8 10 0 26 Z M12 20 C18 0 14 -20 4 -30 C10 -10 8 10 0 26 Z" fill="#7DB25A"/></g>`;
  const CROSS = `<path d="M0 0 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/><path d="M40 0 H60 V100 H40 Z M60 46 H100 V64 H60 Z" fill="#D9C9A8" stroke="none"/><path d="M50 4 V40 M50 70 V96 M66 55 H96" stroke="#FFFCF6" stroke-width="2" stroke-dasharray="5 5"/>`;
  const CALF = `<path d="M80 54 q10 6 8 20" stroke-width="2.5"/><rect x="38" y="64" width="7" height="24" rx="3" fill="#5E5A58"/><rect x="70" y="64" width="7" height="24" rx="3" fill="#5E5A58"/><ellipse cx="58" cy="58" rx="24" ry="14" fill="#7A7672"/><rect x="46" y="66" width="7" height="22" rx="3" fill="#7A7672"/><rect x="62" y="66" width="7" height="22" rx="3" fill="#7A7672"/>` +
    `<path d="M22 34 C18 28 22 24 26 26 M34 34 C38 28 34 24 30 26" stroke="#C8C3BC" stroke-width="3"/><ellipse cx="28" cy="48" rx="14" ry="13" fill="#7A7672"/><ellipse cx="22" cy="56" rx="9" ry="7" fill="#A8A29C"/><circle cx="19" cy="55" r="1.3" fill="#3A3B3C" stroke="none"/><circle cx="25" cy="55" r="1.3" fill="#3A3B3C" stroke="none"/><circle cx="28" cy="44" r="2.6" fill="#3A3B3C" stroke="none"/><ellipse cx="42" cy="42" rx="6" ry="3" transform="rotate(20 42 42)" fill="#7A7672"/>`;
  const TURMERIC = `${ground(88)}<path d="M20 70 C14 56 30 48 44 56 C52 44 70 46 72 58 C84 56 90 70 80 76 C70 86 30 88 20 70 Z" fill="#D9A23A"/><path d="M44 56 C42 50 46 42 52 40 M72 58 C76 50 82 48 86 50" stroke="#C48E2E" stroke-width="6"/><path d="M30 66 h8 M54 70 h10" stroke="#B07A20" stroke-width="2"/><circle cx="60" cy="82" r="9" fill="#F2A31B"/>`;
  const BEACH = `<path d="M0 0 H100 V60 H0 Z" fill="#DCEFF5" stroke="none"/><circle cx="80" cy="18" r="10" fill="#F2C14E"/><path d="M0 50 H100 V70 H0 Z" fill="#7FB2D9" stroke="none"/><path d="M0 68 C30 62 70 64 100 70 V100 H0 Z" fill="#F2DDA8"/><path d="M24 92 V44" stroke="#8C5A32" stroke-width="3"/><path d="M4 50 C10 30 40 30 44 50 Z" fill="#E86A4F"/><path d="M14 46 L24 32 L34 46" stroke="#FFFCF6" stroke-width="3"/>`;
  const EASEL = `<path d="M60 92 L70 30 L80 92 M70 30 L70 94" stroke="#8C5A32" stroke-width="3"/><rect x="54" y="26" width="34" height="30" fill="#FFFFFF"/><circle cx="64" cy="36" r="5" fill="#F2C14E"/><path d="M58 52 L68 42 L76 50 L84 44 V54 H58 Z" fill="#7DB25A"/>`;
  const PALETTE = `<path d="M8 66 C8 52 30 46 40 54 C46 58 40 64 44 68 C48 72 40 80 28 80 C16 80 8 74 8 66 Z" fill="#E9C9A0"/><g stroke="none"><circle cx="18" cy="62" r="3" fill="#D9473A"/><circle cx="26" cy="57" r="3" fill="#5B8FC9"/><circle cx="34" cy="58" r="3" fill="#F2C14E"/><circle cx="20" cy="71" r="3" fill="#6FAE4F"/></g>`;

  Object.assign(T, {
    /* Bài 13 · g */
    'gà ri': SV(`${ground(90)}${HEN}`),
    'đồ gỗ': SV(`${ground(94)}${at(-6, 6, 0.9, CHAIR())}${at(46, 30, 0.6, CUPBOARD)}`),
    'gõ mõ': SV(`${MO}${STICK}`),
    'gà gô': SV(`${ground(92)}${BIRD('#9C7A55', '#6B4A2E', '<path d="M40 58 h8 M54 62 h8 M46 68 h8" stroke="#FFFCF6" stroke-width="2"/>')}`),
    'gà đẻ': SV(NEST(`${at(6, -4, 0.8, HEN)}${EGG(80, 78)}`)),
    'cá gỗ': SV(`${ground(92)}${WOODFISH}`),
    'Bé gõ mõ.': SV(`${ground(96)}${at(-10, 10, 0.86, KID('#E86A4F'))}${at(46, 40, 0.56, MO + STICK)}`),
    'Gà gô đi bộ ở bờ đê.': SV(`${DIKE}${at(26, 22, 0.5, BIRD('#9C7A55', '#6B4A2E'))}`),
    'Gà mẹ có ba chú gà ri.': SV(`${ground(92)}${at(-4, 2, 0.8, HEN)}${CHICK(60, 84)}${CHICK(76, 82)}${CHICK(90, 86)}`),

    /* Bài 14 · gh */
    'ghế gỗ': SV(`${ground(94)}${CHAIR()}`),
    'ghẹ đỏ': SV(CRAB()),
    'ghi chú': SV(NOTEPAD),
    'ghế đá': SV(`${ground(90)}${BENCH}`),
    'ghế da': SV(`${ground(92)}${ARMCHAIR}`),
    'gồ ghề': SV(`<path d="M0 0 H100 V60 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 70 C10 56 18 76 28 64 C38 52 44 78 56 66 C66 56 74 74 84 62 C90 56 96 64 100 62 V100 H0 Z" fill="#C9A06A"/><circle cx="20" cy="82" r="5" fill="#A8A29C"/><circle cx="62" cy="86" r="6" fill="#A8A29C"/><circle cx="84" cy="80" r="4" fill="#A8A29C"/>${at(30, 22, 0.4, BIKE)}`),
    'Bé có ghế gỗ.': SV(`${ground(96)}${at(-12, 8, 0.86, KID('#6FAE4F'))}${at(44, 30, 0.6, CHAIR())}`),
    'Bố đi chợ về có ghế gỗ cho bé.': SV(`${ground(96)}${at(-10, 8, 0.84, ADULT('bo'))}${at(46, 40, 0.5, CHAIR())}${at(60, 44, 0.5, KID('#E86A4F'))}`),
    'Ghẹ bò ra bờ đá.': SV(`${ROCKS}${at(30, 46, 0.5, CRAB())}`),

    /* Bài 15 · nh */
    'nhà gỗ': SV(`${ground(92)}${HOUSE()}`),
    'nho đỏ': SV(GRAPES('#A8324A')),
    'nhổ cỏ': SV(`${ground(96)}${at(-6, 12, 0.86, KID_FULL('#6FAE4F'))}${at(66, 92, 0.6, GRASS())}<path d="M64 60 L68 70" stroke="${SKIN}" stroke-width="5"/>`),
    'nha sĩ': SV(`${ground(96)}${re(ADULT('bo'), '#5B8FC9', '#FFFFFF')}${at(62, 20, 0.36, TOOTH)}<path d="M66 70 L80 56" stroke="#A39588" stroke-width="3"/><circle cx="82" cy="54" r="3" fill="#C8C3BC"/>`),
    'nhà ga': SV(TRAIN),
    'nhà lá': SV(`${ground(92)}${HUT}`),
    'Bố mẹ ở nhà lá, nhà bố mẹ nho nhỏ.': SV(`${ground(94)}${at(30, 6, 0.66, HUT)}${at(-8, 40, 0.56, ADULT('bo'))}${at(64, 40, 0.56, ADULT('me'))}`),
    'Bố chở bé đi nhà ga.': SV(`${at(40, 6, 0.6, TRAIN)}${ground(96)}${at(-2, 34, 0.62, BIKE)}${at(4, 14, 0.42, ADULT('bo'))}${at(26, 34, 0.3, KID('#E86A4F'))}`),
    'Mẹ nhờ Nhi bê ghế nhỏ.': SV(`${ground(96)}${at(-10, 8, 0.84, ADULT('me'))}${at(38, 30, 0.66, KID_FULL('#E58FA0'))}${at(56, 52, 0.3, CHAIR())}`),

    /* Bài 16 · ng */
    'ngủ mơ': SV(`${SLEEP}${DREAM}`),
    'ngả mũ': SV(`${ground(96)}${ADULT('bo')}${at(74, 22, 0.9, `<g transform="rotate(-25)">${HAT}</g>`)}<path d="M62 70 L74 34" stroke="${SKIN}" stroke-width="6"/>`),
    'bí ngô': SV(PUMPKIN),
    'cá ngừ': SV(TUNA),
    'ngõ nhỏ': SV(ALLEY),
    'ru ngủ': SV(`${HOLD('ba')}${NOTES}`),
    'bẻ ngô': SV(`${CORN(34, 52, 1.2, -20)}${CORN(66, 56, 1, 30)}`),
    'Bé ngủ.': SV(SLEEP),
    'Nhà bà ở ngã ba, có ngõ nhỏ.': SV(`${CROSS}${at(2, 6, 0.36, HOUSE())}${at(64, 66, 0.34, HOUSE('#E9C9A0', '#B4553C'))}`),
    'Bà bẻ ngô cho bé và chị Nga.': SV(`${ground(96)}${at(-8, 12, 0.8, ADULT('ba'))}${CORN(56, 64, 0.5, 20)}${at(48, 40, 0.5, KID('#E58FA0'))}${at(66, 48, 0.42, KID('#5B8FC9'))}`),

    /* Bài 17 · ngh */
    'nghé ọ': SV(`${ground(90)}${CALF}<path d="M8 30 q-4 -6 0 -12 M2 34 q-6 -8 0 -18" stroke="#A39588" stroke-width="2.4"/>`),
    'củ nghệ': SV(TURMERIC),
    'nghỉ hè': SV(BEACH),
    'nghệ sĩ': SV(`${ground(96)}${at(-10, 10, 0.84, re(ADULT('co'), '#DDAA55', '#7B4F9E'))}${EASEL}${at(6, 20, 0.8, PALETTE)}`),
    'bé nghe bà': SV(`${ground(96)}${at(-8, 10, 0.84, ADULT('ba'))}${at(46, 34, 0.62, KID('#6FAE4F'))}<path d="M44 26 q6 -4 12 0 M42 18 q8 -6 16 0" stroke="#A39588" stroke-width="2.4"/>`),
    'đề nghị': SV(`${ground(96)}${KID('#5B8FC9')}<path d="M66 76 L76 20" stroke="${SKIN}" stroke-width="7"/><circle cx="77" cy="16" r="5" fill="${SKIN}"/>`),
    'Bố chú Tư là nghệ sĩ.': SV(`${ground(96)}${at(-10, 10, 0.84, ADULT('bo'))}${EASEL}${at(6, 20, 0.8, PALETTE)}`),
    'Nhà cô Hà có chú nghé tơ.': SV(`${ground(94)}${at(-6, 18, 0.7, ADULT('co'))}${at(40, 34, 0.6, CALF)}`),
    'Nghỉ hè, bé về ở nhà bà, bà cho bé đi lễ.': SV(`${ground(96)}${at(40, 4, 0.56, HOUSE('#E9C9A0', '#B4553C'))}${at(-8, 26, 0.72, ADULT('ba'))}${at(46, 40, 0.56, KID_FULL('#E86A4F', true))}`)
  });


  /* ---------- Bài 18–21 ---------- */
  const ICEDTEA = `<path d="M30 20 H70 L64 90 H36 Z" fill="#F4F6FA"/><path d="M32.5 36 H67.5 L64 88 H36 Z" fill="#D9A04A" stroke="none"/>` +
    `<g fill="#F4FAFC" stroke="#C8DCE4" stroke-width="1.5"><rect x="38" y="40" width="11" height="11" rx="2" transform="rotate(-12 43 45)"/><rect x="52" y="46" width="11" height="11" rx="2" transform="rotate(10 57 51)"/><rect x="42" y="58" width="10" height="10" rx="2"/></g>` +
    `<path d="M30 20 H70 L64 90 H36 Z"/><path d="M60 8 L54 70" stroke="#E86A4F" stroke-width="4"/>`;
  const BAMBOO = `${ground(94)}${[[30, 0], [50, -6], [70, 4]].map(([x, d]) => `<path d="M${x} 94 V${10 + d}" stroke="#7DB25A" stroke-width="9"/>${[30, 52, 74].map(y => `<path d="M${x - 5} ${y + d} H${x + 5}" stroke="#4E8A3A" stroke-width="2.5"/>`).join('')}`).join('')}` +
    [[30, 30, -150], [50, 22, -30], [50, 46, -160], [70, 40, -20], [30, 56, -25], [70, 64, -150]].map(([x, y, a]) => `<g transform="translate(${x} ${y}) scale(0.62) translate(${-x} ${-y})">${LEAF(x, y, a, '#8CC063')}</g>`).join('');
  const CATFISH = `<path d="M60 50 C70 40 88 40 94 50 C88 60 70 60 60 50 Z" fill="#4E4A46"/><path d="M8 52 C10 38 30 36 60 44 C70 47 70 55 60 56 C30 64 10 64 8 52 Z" fill="#6B6560"/>` +
    `<path d="M28 40 C36 32 48 36 52 44" fill="#4E4A46"/><circle cx="18" cy="48" r="2.6" fill="#FFFFFF" stroke="none"/><circle cx="18" cy="48" r="1.4" fill="#3A3B3C" stroke="none"/>` +
    `<path d="M10 54 C2 58 0 66 4 70 M12 56 C8 64 10 72 14 74 M10 50 C2 44 0 40 2 36" stroke="#4E4A46" stroke-width="2"/>`;
  const SPACE = `<rect x="2" y="2" width="96" height="96" rx="8" fill="#2E3A5C"/>` +
    `<circle cx="38" cy="54" r="20" fill="#E8A65A"/><path d="M22 46 C30 50 46 50 56 44 M20 58 C30 62 46 62 57 56" stroke="#C4803A" stroke-width="3"/><ellipse cx="38" cy="56" rx="32" ry="7" transform="rotate(-14 38 56)" fill="none" stroke="#F2D27A" stroke-width="3"/>` +
    `<circle cx="78" cy="24" r="9" fill="#F2E6B8" stroke="none"/><circle cx="82" cy="21" r="8" fill="#2E3A5C" stroke="none"/>` +
    `<g fill="#FFFFFF" stroke="none">${[[14, 14], [56, 14], [88, 52], [72, 82], [16, 86], [46, 88], [92, 88], [28, 24]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8"/>`).join('')}</g>` +
    `<path d="M76 66 L82 60 L88 66 L82 72 Z" fill="#F2C14E" stroke="none"/>`;
  const RABBIT = `<ellipse cx="52" cy="72" rx="24" ry="18" fill="#F4F0EA"/><circle cx="78" cy="78" r="6" fill="#FFFFFF"/><circle cx="36" cy="52" r="15" fill="#F4F0EA"/>` +
    `<ellipse cx="30" cy="22" rx="5.5" ry="18" fill="#F4F0EA"/><ellipse cx="42" cy="22" rx="5.5" ry="18" fill="#F4F0EA"/><ellipse cx="30" cy="24" rx="2.4" ry="12" fill="#F2B8B0" stroke="none"/><ellipse cx="42" cy="24" rx="2.4" ry="12" fill="#F2B8B0" stroke="none"/>` +
    `${eyes(31, 41, 50, 2.2)}<path d="M34 56 l2 2 l2 -2 Z" fill="#E58FA0"/><path d="M36 58 v3" stroke-width="1.6"/>${cheeks(27, 45, 57)}<path d="M38 88 h12 M60 88 h12" stroke-width="2.4"/>`;
  const MAIL = `<rect x="10" y="26" width="80" height="54" rx="4" fill="#FFFCF6"/><path d="M10 28 L50 58 L90 28" stroke-width="2.5"/><path d="M10 78 L38 50 M90 78 L62 50" stroke="#C8C3BC" stroke-width="2"/><rect x="70" y="32" width="12" height="14" fill="#E86A4F" stroke="none"/>`;
  const MACKEREL = `<path d="M70 50 L92 34 L88 50 L92 66 Z" fill="#3F5E8C"/><path d="M6 50 C18 34 52 34 72 50 C52 66 18 66 6 50 Z" fill="#7FA6C9"/><path d="M6 50 C18 58 52 60 72 50" fill="#E3EDF4" stroke="none"/>` +
    `<path d="M22 42 l6 -4 M32 40 l6 -4 M42 40 l6 -4 M52 42 l6 -4" stroke="#3F5E8C" stroke-width="2"/><circle cx="16" cy="48" r="2.6" fill="#3A3B3C" stroke="none"/><path d="M6 50 C18 34 52 34 72 50 C52 66 18 66 6 50 Z"/>`;
  const PEN = `<path d="M60 70 L84 22" stroke="#5B8FC9" stroke-width="5"/><path d="M60 70 l-2 8 l6 -5 Z" fill="#3A3B3C"/>`;
  const ZOO = `${ground(94)}<path d="M4 34 H96" stroke="#8C5A32" stroke-width="4"/>${[10, 26, 42, 58, 74, 90].map(x => `<path d="M${x} 30 V94" stroke="#8C5A32" stroke-width="3.5"/>`).join('')}`;
  const BOWL = (inner = '') => `${inner}<path d="M10 50 H90 C88 72 72 86 50 86 C28 86 12 72 10 50 Z" fill="#FFFFFF"/><path d="M16 60 H84" stroke="#5B8FC9" stroke-width="3"/><path d="M36 86 H64 V90 H36 Z" fill="#FFFFFF"/>`;
  const PHO = BOWL(`<path d="M10 50 C20 40 80 40 90 50 Z" fill="#F2E6C8"/><path d="M22 46 q6 -4 12 0 q6 -4 12 0 q6 -4 12 0 q6 -4 12 0" stroke="#E6D3A8" stroke-width="2"/>` +
    `<path d="M24 44 C30 38 40 38 44 44 Z M48 42 C54 36 64 36 68 42 Z" fill="#9C5B3A"/><circle cx="74" cy="44" r="4" fill="#7DB25A"/><circle cx="36" cy="40" r="3" fill="#7DB25A"/><circle cx="58" cy="46" r="3" fill="#7DB25A"/>`) +
    `<path d="M60 34 L90 10 M66 36 L94 14" stroke="#B47846" stroke-width="3"/><path d="M30 30 q-4 -8 0 -16 M44 28 q-4 -8 0 -16" stroke="#C8C3BC" stroke-width="2.5"/>`;
  const OLDHOUSE = (x, c) => `<g transform="translate(${x} 0)"><rect x="0" y="40" width="34" height="52" fill="${c}"/><path d="M-4 42 L17 26 L38 42 Z" fill="#8C4A2E"/><path d="M-4 42 H38" stroke="#6B3A22" stroke-width="2"/>` +
    `<rect x="11" y="64" width="12" height="28" fill="#6B4A2E"/><rect x="6" y="48" width="9" height="10" fill="#5E8F6A"/><rect x="19" y="48" width="9" height="10" fill="#5E8F6A"/></g>`;
  const OLDTOWN = `${ground(92)}${OLDHOUSE(4, '#F2D27A')}${OLDHOUSE(36, '#E9C9A0')}${OLDHOUSE(68, '#F2D27A')}` +
    `<path d="M10 36 q3 -4 6 0 M54 36 q3 -4 6 0" stroke="#3A3B3C" stroke-width="1.4"/><ellipse cx="13" cy="44" rx="5" ry="6" fill="#E86A4F"/><ellipse cx="57" cy="44" rx="5" ry="6" fill="#E86A4F"/>`;
  const FERRY = `${WATER(66)}<path d="M4 60 H96 L88 76 H12 Z" fill="#E9E0D2"/><path d="M4 60 H96" stroke-width="3"/><rect x="62" y="34" width="22" height="26" rx="2" fill="#5B8FC9"/><rect x="66" y="38" width="14" height="8" fill="#DCEFF5"/>` +
    `${at(6, 22, 0.5, CAR('#F2C14E'))}`;
  const COFFEE = `<rect x="34" y="18" width="32" height="22" rx="2" fill="#B9B3AD"/><path d="M28 40 H72" stroke="#7A6E66" stroke-width="4"/><path d="M50 42 V48" stroke="#5E3A22" stroke-width="2.5" stroke-dasharray="3 2"/>` +
    `<path d="M30 48 H70 L66 84 H34 Z" fill="#F4F6FA"/><path d="M31.5 60 H68.5 L66 84 H34 Z" fill="#6B4A2E" stroke="none"/><path d="M30 48 H70 L66 84 H34 Z"/><path d="M69 56 C82 56 82 74 67 72" stroke-width="3"/><ellipse cx="50" cy="88" rx="28" ry="4" fill="#E9E0D2"/>`;
  const PLANE = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/><path d="M14 74 q8 -6 16 0 q8 -6 16 0 Z M60 86 q6 -5 12 0 q6 -5 12 0 Z" fill="#FFFFFF"/>` +
    `<path d="M10 52 C10 44 20 42 30 42 H82 C92 42 96 48 96 50 C96 54 90 56 82 56 H24 C16 56 10 56 10 52 Z" fill="#FFFFFF"/><path d="M50 44 L36 14 H46 L66 44 Z M48 56 L36 80 H46 L64 56 Z M16 44 L10 28 H18 L28 44 Z" fill="#5B8FC9"/>` +
    `${[56, 64, 72].map(x => `<circle cx="${x}" cy="49" r="2.4" fill="#5B8FC9" stroke="none"/>`).join('')}<path d="M86 46 C90 46 92 48 92 50" stroke="#5B8FC9" stroke-width="3"/>`;
  const TEAPOT = `<ellipse cx="46" cy="48" rx="24" ry="20" fill="#5E8F6A"/><path d="M68 42 C80 40 84 32 88 26" stroke="#5E8F6A" stroke-width="7"/><path d="M22 40 C10 40 10 58 24 56" stroke="#4E7A5A" stroke-width="4"/><rect x="38" y="24" width="16" height="6" rx="3" fill="#4E7A5A"/>` +
    `<path d="M88 28 C90 40 86 56 84 64" stroke="#C9973F" stroke-width="3"/><path d="M70 66 H96 L92 90 H74 Z" fill="#FFFFFF"/><path d="M72 72 H94 L92 88 H74 Z" fill="#D9A04A" stroke="none"/><path d="M70 66 H96 L92 90 H74 Z"/>`;
  const NONLA = `<path d="M0 0 L-26 16 H26 Z" fill="#E9D49A"/><path d="M-26 16 H26" stroke="#B9A06A" stroke-width="2.5"/><path d="M-13 8 H13" stroke="#C9B37A" stroke-width="1.5"/>`;
  const AODAI = `<path d="M30 58 C34 50 50 48 54 58 L60 96 H24 Z" fill="#F4F6FA"/>`;
  const GIFT = `<rect x="16" y="40" width="68" height="50" rx="3" fill="#E86A4F"/><rect x="12" y="30" width="76" height="14" rx="3" fill="#D9473A"/><path d="M50 30 V90" stroke="#F2C14E" stroke-width="8"/>` +
    `<path d="M50 30 C36 14 24 20 34 28 C38 31 46 31 50 30 C54 31 62 31 66 28 C76 20 64 14 50 30 Z" fill="#F2C14E"/>`;
  const COUNTRY = `<path d="M0 0 H100 V56 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 50 C30 40 60 44 100 48 V100 H0 Z" fill="#9BC46A" stroke="none"/>` +
    `${[62, 72, 82, 92].map((y, i) => `<path d="M${4 + i * 2} ${y} q6 -6 12 0 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0" stroke="#6FAE4F" stroke-width="2"/>`).join('')}` +
    `${at(46, 2, 0.52, HUT)}${at(0, 0, 0.5, TREE)}<circle cx="86" cy="14" r="7" fill="#F2C14E"/>`;
  const CROW = `<path d="M30 60 C30 40 48 32 64 38 C74 30 88 34 90 40 L98 42 L90 46 C88 54 80 58 72 60 C66 74 46 78 30 60 Z" fill="#3A3B3C"/><path d="M30 60 L10 70 L14 58 Z" fill="#3A3B3C"/><path d="M40 50 C50 44 62 46 66 54" stroke="#5E5A58" stroke-width="2.5"/><circle cx="80" cy="40" r="2.4" fill="#FFFFFF" stroke="none"/><path d="M56 74 v10 M64 72 v12" stroke="#3A3B3C" stroke-width="2.5"/>`;
  const CROWNEST = `<path d="M0 74 C30 70 60 72 100 64" stroke="#8C5A32" stroke-width="7"/>${LEAF(80, 66, -40, '#7DB25A')}${LEAF(8, 72, 160, '#7DB25A')}` +
    `${at(14, 14, 0.72, NEST())}${at(18, 6, 0.6, CROW)}`;
  const SNAKEHEAD = `<path d="M78 50 L96 38 L94 62 Z" fill="#4A4E3A"/><path d="M6 50 C8 40 20 38 40 40 H80 V60 H40 C20 62 8 60 6 50 Z" fill="#6E7351"/><path d="M30 40 C40 34 70 34 80 40 Z M34 60 C44 66 70 66 80 60 Z" fill="#5A5E40"/>` +
    `<g fill="#4A4E3A" stroke="none">${[30, 44, 58, 70].map((x, i) => `<ellipse cx="${x}" cy="${48 + (i % 2) * 4}" rx="5" ry="3.5"/>`).join('')}</g><circle cx="14" cy="47" r="2.6" fill="#3A3B3C" stroke="none"/><path d="M6 52 h8" stroke-width="1.8"/>`;
  const GEMS = `${ground(86)}<path d="M18 50 L30 38 H50 L62 50 L40 76 Z" fill="#5B8FC9"/><path d="M18 50 H62 M30 38 L36 50 L40 76 M50 38 L44 50 L40 76" stroke="#3F6FA6" stroke-width="1.6"/>` +
    `<path d="M58 70 L66 60 H80 L88 70 L73 86 Z" fill="#D9473A"/><path d="M58 70 H88 M73 86 L70 70 L66 60 M73 86 L76 70 L80 60" stroke="#A8322A" stroke-width="1.4"/>` +
    `<path d="M20 78 L26 70 H34 L40 78 L30 88 Z" fill="#6FAE4F"/><path d="M60 30 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 Z" fill="#F2C14E" stroke="none"/>`;
  const BRANCHFRUIT = (fruit) => `<path d="M0 18 C30 22 60 18 100 10" stroke="#8C5A32" stroke-width="5"/>${LEAF(70, 14, -20, '#7DB25A')}${LEAF(14, 20, 170, '#7DB25A')}<path d="M50 20 V30" stroke="#6E8F3A" stroke-width="3"/>${fruit}`;
  const TALK = `<path d="M32 42 q4 4 0 8 M37 38 q6 8 0 16" stroke="#A39588" stroke-width="2.4"/>`;

  Object.assign(T, {
    /* Bài 18 · tr */
    'trà đá': SV(ICEDTEA),
    'tre': SV(BAMBOO),
    'nhà trẻ': SV(`${ground(94)}${at(10, -8, 0.8, HOUSE('#F2D27A', '#D9473A'))}${at(-4, 50, 0.46, KID_FULL('#5B8FC9'))}${at(54, 50, 0.46, KID_FULL('#E86A4F'))}<circle cx="80" cy="16" r="5" fill="#F2C14E"/>`),
    'cá trê': SV(CATFISH),
    'vũ trụ': SV(SPACE),
    'trở về': SV(`${ground(94)}${at(44, 10, 0.62, HOUSE())}${at(-4, 22, 0.74, KID_FULL('#6FAE4F', true))}<path d="M40 70 h10 l-4 -4 M50 70 l-4 4" stroke="#A39588" stroke-width="2.4"/>`),
    'Mẹ bế bé đi nhà trẻ.': SV(`${at(56, 6, 0.44, HOUSE('#F2D27A', '#D9473A'))}${at(-6, 14, 0.84, HOLD('me'))}`),
    'Bà có trà đá cho bé.': SV(`${ground(96)}${at(-10, 10, 0.86, ADULT('ba'))}${at(46, 48, 0.38, ICEDTEA)}${at(52, 34, 0.62, KID('#5B8FC9'))}`),
    'Hồ cá nhà bà có cá trê, cá mè, cá rô.': SV(`${WATER(30)}${at(4, 26, 0.5, CATFISH)}${at(50, 44, 0.44, FISH('#C8CCD0', '#A8AEB4'))}${at(14, 60, 0.42, PERCH)}<path d="M0 30 H100" stroke="#6FAE4F" stroke-width="5"/>`),

    /* Bài 19 · th */
    'chú thỏ': SV(`${ground(90)}${RABBIT}`),
    'thỏ': SV(`${ground(90)}${RABBIT}`),
    'thả cá': SV(`${WATER(62)}${at(-6, 6, 0.8, KID('#E86A4F'))}<path d="M40 70 L54 58" stroke="${SKIN}" stroke-width="7"/>${at(54, 50, 0.4, `<g transform="rotate(40 50 50)">${FISH('#F2903A', '#E86A4F')}</g>`)}<path d="M78 80 q4 -4 8 0" stroke="#5B8FC9" stroke-width="2"/>`),
    'lá thư': SV(MAIL),
    'cá thu': SV(MACKEREL),
    'nhà thơ': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('bo'))}${at(44, 30, 0.6, NOTEPAD)}${at(20, 16, 0.7, PEN)}`),
    'thủ thỉ': SV(`${ground(96)}${at(-12, 10, 0.86, ADULT('ba'))}${at(38, 30, 0.64, KID('#E58FA0'))}<path d="M58 68 L52 52" stroke="${SKIN}" stroke-width="5"/><path d="M38 40 q-4 2 -6 0 M40 48 q-5 2 -8 0" stroke="#A39588" stroke-width="2"/>`),
    'sở thú': SV(`${at(6, 30, 0.5, LION)}${at(48, 28, 0.6, MONKEY)}${ZOO}`),
    'tô': SV(`${ground(92)}${at(0, 6, 1, BOWL(`<path d="M10 50 C20 42 80 42 90 50 Z" fill="#F4F0EA"/>`))}`),
    'Bà cho bé cá thu.': SV(`${ground(96)}${at(-10, 10, 0.86, ADULT('ba'))}${at(26, 52, 0.46, MACKEREL)}${at(52, 34, 0.62, KID('#6FAE4F'))}`),
    'Xe ô tô chở khỉ và thỏ về sở thú.': SV(`${ground(90)}${at(20, 8, 0.36, ZOO.replace(ground(94), ''))}${at(0, 10, 1, CAR('#5B8FC9'))}${at(26, 6, 0.34, MONKEY)}${at(54, 4, 0.32, RABBIT)}`),
    'Bà ra thủ đô, bé có lá thư cho bà.': SV(`${ground(96)}${at(-10, 10, 0.86, ADULT('ba'))}${at(48, 34, 0.62, KID('#E86A4F'))}${at(42, 66, 0.3, MAIL)}`),

    /* Bài 20 · ph */
    'phở bò': SV(PHO),
    'phố cổ': SV(OLDTOWN),
    'đi phà': SV(FERRY),
    'cà phê': SV(COFFEE),
    'phi cơ': SV(PLANE),
    'pha trà': SV(TEAPOT),
    'phụ nữ': SV(`${ground(96)}${at(8, 14, 0.86, ADULT('me'))}${at(44, 22, 1.05, NONLA)}`),
    'Hè về, mẹ cho bé ra phố.': SV(`${at(0, -6, 1, OLDTOWN)}${at(-6, 30, 0.72, ADULT('me'))}${at(48, 46, 0.52, KID_FULL('#6FAE4F', true))}`),
    'Chú Tư đi cà phê ở phố cổ.': SV(`${at(30, -10, 0.8, OLDTOWN)}${at(-12, 10, 0.86, ADULT('bo'))}${at(52, 54, 0.42, COFFEE)}`),
    'Bé bê tô phở bò cho bà.': SV(`${ground(96)}${at(-10, 10, 0.86, ADULT('ba'))}${at(44, 30, 0.66, KID('#5B8FC9'))}${at(42, 62, 0.4, PHO)}`),

    /* Bài 21 · qu */
    'quà': SV(GIFT),
    'quả lê': SV(BRANCHFRUIT(PEAR(50, 64, 1))),
    'quê nhà': SV(COUNTRY),
    'tổ quạ': SV(CROWNEST),
    'cá quả': SV(SNAKEHEAD),
    'đá quý': SV(GEMS),
    'quả khế': SV(`${BRANCHFRUIT(STARFRUIT(44, 54, 0.7))}${STARSLICE(78, 80, 13)}`),
    'Chú Kha ở quê ra có quà cho bé.': SV(`${ground(96)}${at(-12, 10, 0.86, ADULT('bo'))}${at(30, 56, 0.36, GIFT)}${at(48, 32, 0.64, KID('#E86A4F'))}`),
    'Bé và mẹ qua nhà dì Hà, dì cho bé quả na.': SV(`${ground(96)}${at(-12, 10, 0.86, ADULT('di'))}${at(28, 52, 0.36, CUSTARD)}${at(48, 32, 0.64, KID('#E58FA0'))}`),
    'Dì kể cho bé nghe về bà, bé chú ý nghe dì kể.': SV(`${ground(96)}${at(-10, 10, 0.86, ADULT('di', 'sing'))}${at(46, 34, 0.62, KID('#5B8FC9'))}${TALK}`)
  });


  /* ---------- Bài 22–23 (vần ia, ua, ưa) ---------- */
  const CANE_STALK = (x, a = 0) => `<g transform="rotate(${a} ${x} 92)"><path d="M${x} 92 V14" stroke="#7B3F6E" stroke-width="8"/>${[30, 50, 70].map(y => `<path d="M${x - 5} ${y} H${x + 5}" stroke="#5A2C50" stroke-width="2.5"/>`).join('')}<path d="M${x} 16 C${x - 10} 6 ${x - 20} 8 ${x - 26} 14 M${x} 16 C${x + 10} 4 ${x + 22} 6 ${x + 26} 12" stroke="#6FAE4F" stroke-width="4"/></g>`;
  const SPOON = `<ellipse cx="34" cy="34" rx="16" ry="22" transform="rotate(-40 34 34)" fill="#D8DDE2"/><ellipse cx="34" cy="34" rx="10" ry="15" transform="rotate(-40 34 34)" fill="#EEF1F4" stroke="none"/><path d="M46 48 L86 88" stroke="#B9C0C8" stroke-width="8"/>`;
  const PLATE = `<ellipse cx="50" cy="56" rx="44" ry="26" fill="#FFFFFF"/><ellipse cx="50" cy="54" rx="30" ry="16" fill="#F4F6FA"/><path d="M14 58 C30 70 70 70 86 58" stroke="#5B8FC9" stroke-width="3"/>`;
  const PERILLA = `<path d="M50 94 V30" stroke="#6E8F3A" stroke-width="4"/>${[[50, 34, -60], [50, 34, -120], [50, 56, -20], [50, 56, -160], [50, 78, -30], [50, 78, -150]].map(([x, y, a]) => `<g transform="translate(${x} ${y}) rotate(${a})"><path d="M0 0 C8 -14 30 -14 38 0 C30 14 8 14 0 0 Z" fill="#8E4A8C"/><path d="M0 0 H38" stroke="#6B2E6A" stroke-width="1.6"/><path d="M4 -4 l4 -3 l4 3 l4 -3 l4 3 l4 -3 l4 3" stroke="#6FAE4F" stroke-width="1.4" fill="none"/></g>`).join('')}`;
  const SIDEWALK = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 60 H100 V82 H0 Z" fill="#D9C9A8"/>${[12, 37, 62, 87].map(x => `<path d="M${x} 60 L${x - 6} 82" stroke="#B9A88A" stroke-width="2"/>`).join('')}<path d="M0 82 H100" stroke="#8C8478" stroke-width="4"/><path d="M0 84 H100 V100 H0 Z" fill="#7A7672" stroke="none"/><path d="M8 92 H24 M40 92 H56 M72 92 H88" stroke="#FFFCF6" stroke-width="2.5"/>${at(56, -2, 0.62, TREE)}`;
  const NOTEBOOK = `<rect x="22" y="12" width="58" height="78" rx="4" fill="#5B8FC9"/><rect x="22" y="12" width="10" height="78" fill="#3F6FA6"/><rect x="40" y="26" width="32" height="16" rx="3" fill="#FFFCF6"/><path d="M44 32 H68 M44 37 H62" stroke="#A39588" stroke-width="2"/><circle cx="56" cy="64" r="9" fill="#F2C14E" stroke="none"/>`;
  const DANCER = `<path d="M44 74 L38 94 M56 74 L66 92" stroke-width="6" stroke="${SKIN}"/><path d="M34 95 h8 M64 93 h8" stroke-width="5"/>` +
    `<path d="M32 80 C36 62 42 50 50 50 C58 50 64 62 68 80 Z" fill="#E58FA0"/><path d="M38 56 L20 40 M62 56 L80 40" stroke="${SKIN}" stroke-width="6"/>` +
    `<path d="M20 40 C10 34 8 22 16 18 C20 26 22 32 20 40 Z M80 40 C90 34 92 22 84 18 C80 26 78 32 80 40 Z" fill="#F2C14E"/>` +
    `<circle cx="50" cy="34" r="15" fill="${SKIN}"/><path d="M35 32 C33 16 67 16 65 32 C60 24 42 22 35 32 Z" fill="${HAIR}"/><circle cx="62" cy="20" r="6" fill="${HAIR}"/>${eyes(45, 55, 35, 2.2)}<path d="M46 42 q4 3 8 0" stroke-width="2.2"/>${cheeks(40, 60, 40)}`;
  const YOGURT = `<path d="M26 34 H74 L68 88 H32 Z" fill="#FFFFFF"/><path d="M28 50 H72 L70 66 H30 Z" fill="#F2B8C6" stroke="none"/><path d="M26 34 H74 L68 88 H32 Z"/><ellipse cx="50" cy="34" rx="26" ry="6" fill="#F4F6FA"/><path d="M60 30 L84 10" stroke="#B9C0C8" stroke-width="4"/><ellipse cx="86" cy="8" rx="5" ry="3" fill="#D8DDE2"/>`;
  const MELON = (x = 50, y = 56, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="34" ry="26" fill="#F2E6A8"/>${[-20, -8, 4, 16].map(dx => `<path d="M${dx} -24 C${dx + 6} -8 ${dx + 6} 8 ${dx} 24" stroke="#D9C46A" stroke-width="2" fill="none"/>`).join('')}<ellipse cx="0" cy="0" rx="34" ry="26" fill="none"/><path d="M30 -10 q8 -6 10 -14" stroke="#6E8F3A" stroke-width="3"/></g>`;
  const WATERMELON = `<ellipse cx="50" cy="56" rx="40" ry="30" fill="#4E8A3A"/>${[-24, -8, 8, 24].map(dx => `<path d="M${50 + dx} 27 C${56 + dx} 44 ${56 + dx} 68 ${50 + dx} 85" stroke="#2F6A2A" stroke-width="4" fill="none"/>`).join('')}<ellipse cx="50" cy="56" rx="40" ry="30" fill="none"/>` +
    `<path d="M62 78 L96 78 C96 90 84 96 79 96 C74 96 62 90 62 78 Z" fill="#E8584A"/><path d="M62 78 H96" stroke="#7DB25A" stroke-width="3"/>${[[72, 84], [80, 88], [86, 83]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#3A3B3C" stroke="none"/>`).join('')}`;
  const PAGODA = `${ground(94)}<rect x="30" y="64" width="40" height="30" fill="#E9C9A0"/><rect x="44" y="72" width="12" height="22" fill="#8C4A2E"/>` +
    `<path d="M10 66 C24 64 30 58 34 52 H66 C70 58 76 64 90 66 Z" fill="#B4553C"/><rect x="36" y="38" width="28" height="16" fill="#E9C9A0"/><path d="M18 40 C28 38 34 32 38 26 H62 C66 32 72 38 82 40 Z" fill="#B4553C"/>` +
    `<path d="M50 26 V10" stroke="#C9973F" stroke-width="3"/><circle cx="50" cy="9" r="3" fill="#F2C14E"/><path d="M10 66 q-2 -4 0 -6 M90 66 q2 -4 0 -6 M18 40 q-2 -4 0 -6 M82 40 q2 -4 0 -6" stroke="#B4553C" stroke-width="2.5"/>`;
  const CHOPSTICKS = `<path d="M18 86 L80 10 M30 90 L88 18" stroke="#B47846" stroke-width="5"/><path d="M68 24 L80 10 M78 30 L88 18" stroke="#D9473A" stroke-width="6"/>`;
  const WINDOW = `<path d="M0 0 H100 V100 H0 Z" fill="#E9C9A0" stroke="none"/><rect x="18" y="16" width="64" height="68" fill="#BFE0F0"/><circle cx="66" cy="34" r="8" fill="#F2C14E" stroke="none"/>` +
    `<path d="M18 16 H82 V84 H18 Z M50 16 V84 M18 50 H82" stroke="#8C5A32" stroke-width="4"/><path d="M18 16 L4 22 V90 L18 84 M82 16 L96 22 V90 L82 84" fill="#C68B59"/><rect x="12" y="84" width="76" height="6" rx="2" fill="#8C5A32"/>`;
  const SAW = `${ground(92)}<rect x="8" y="64" width="84" height="20" rx="2" fill="#D9A86A"/><path d="M8 64 V84 M92 64 V84" stroke="#B47846" stroke-width="2"/><ellipse cx="92" cy="74" rx="4" ry="10" fill="#E9C9A0"/>` +
    `<path d="M24 62 L70 30 L80 44 L34 66 Z" fill="#C8CCD0"/><path d="M24 62 ${Array.from({ length: 8 }, (_, i) => `l${4.6} ${-3.2 + (i % 2 ? 0 : 0)} l1 3`).join(' ')}" stroke="#7A8088" stroke-width="1.4" fill="none"/>` +
    `<path d="M70 30 L84 20 C90 18 94 24 92 30 L80 44 Z" fill="#B4553C"/><path d="M82 26 L86 32" stroke="#8C3A2A" stroke-width="3"/><path d="M50 72 q4 -4 8 0" stroke="#A97A44" stroke-width="2"/>`;
  const SHUTTER_KID = `${WINDOW}${at(22, 30, 0.6, KID('#E86A4F'))}`;

  Object.assign(T, {
    /* Bài 22 · ia */
    'bẻ mía': SV(`${ground(94)}${CANE_STALK(30, -6)}${CANE_STALK(50, 0)}<g transform="translate(70 0)"><path d="M0 92 V44" stroke="#7B3F6E" stroke-width="8"/><path d="M-6 44 l6 -4 l6 4 M-6 70 H6" stroke="#5A2C50" stroke-width="2.5"/></g><g transform="rotate(28 82 40)"><path d="M82 40 V10" stroke="#7B3F6E" stroke-width="8"/><path d="M76 40 l6 4 l6 -4" stroke="#5A2C50" stroke-width="2.5"/></g>`),
    'thìa': SV(SPOON),
    'đĩa': SV(PLATE),
    'lá tía tô': SV(`${ground(94)}${PERILLA}`),
    'vỉa hè': SV(SIDEWALK),
    'bìa vở': SV(NOTEBOOK),
    'Nhà cô Nghĩa có lá mía và lá tía tô.': SV(`${ground(96)}${at(-14, 10, 0.86, ADULT('co'))}${at(40, 4, 0.6, `${CANE_STALK(30, 0)}`)}${at(56, 34, 0.6, PERILLA)}`),
    'Bé chia thìa, chia đĩa cho cả nhà.': SV(`${ground(96)}${at(-10, 22, 0.78, KID('#6FAE4F'))}${at(46, 46, 0.5, PLATE)}${at(58, 30, 0.42, PLATE)}${at(52, 56, 0.34, SPOON)}`),
    'Thìa đĩa to cho bố mẹ, thìa đĩa nhỏ cho bé.': SV(`${at(-4, -10, 0.74, PLATE)}${at(40, -4, 0.44, SPOON)}${at(46, 48, 0.42, PLATE)}${at(70, 52, 0.26, SPOON)}${at(-6, 42, 0.6, KID('#E58FA0'))}`),

    /* Bài 23 · ua, ưa */
    'bé múa': SV(DANCER),
    'cua bể': SV(`${WATER(74)}${at(0, -8, 1, CRAB('#C2492E'))}`),
    'sữa chua': SV(YOGURT),
    'dưa lê': SV(`${ground(88)}${MELON(50, 58, 1.1)}`),
    'cà chua': SV(`${ground(90)}${TOMATO(36, 62, 22)}${TOMATO(70, 70, 16)}`),
    'chùa': SV(PAGODA),
    'đũa': SV(CHOPSTICKS),
    'cửa sổ': SV(WINDOW),
    'quả dưa': SV(WATERMELON),
    'cưa gỗ': SV(SAW),
    'Bé mở cửa sổ để đưa thư cho mẹ.': SV(`${at(-8, 0, 0.7, WINDOW)}${at(4, 26, 0.42, KID('#E86A4F'))}${at(44, 52, 0.26, MAIL)}${at(50, 12, 0.62, ADULT('me'))}`),
    'Bà cho quà, bé chia quà cho cả nhà.': SV(`${ground(96)}${at(-12, 10, 0.86, ADULT('ba'))}${at(30, 60, 0.3, GIFT)}${at(48, 32, 0.64, KID('#5B8FC9'))}${at(70, 70, 0.24, GIFT)}`),
    'Cua bể cho bố, cà chua cho mẹ, sữa chua cho chị.': SV(`${ground(92)}${at(-8, 14, 0.62, CRAB('#C2492E'))}${TOMATO(54, 74, 16)}${at(54, 22, 0.52, YOGURT)}`)
  });


  /* ---------- Bài 24–28 (vần an ăn ân, on ôn ơn, en ên in un, am ăm âm, om ôm ơm) ---------- */
  const SCARF = `<path d="M20 20 H80 V60 L66 92 H54 L60 60 H40 L46 92 H34 L20 60 Z" fill="#FFFFFF"/>` +
    `<g fill="#3A3B3C" stroke="none">${[0, 1, 2, 3, 4].flatMap(i => [0, 1, 2, 3].map(j => (i + j) % 2 ? '' : `<rect x="${20 + i * 12}" y="${20 + j * 10}" width="12" height="10"/>`)).join('')}</g>` +
    `<path d="M20 20 H80 V60 H20 Z"/><path d="M34 92 l-2 6 M40 92 v6 M46 92 l2 6 M54 92 l-2 6 M60 92 v6 M66 92 l2 6" stroke-width="2"/>`;
  const PLUM = (x, y, r = 14) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#9C3D6E"/><path d="M${x} ${y - r} C${x - 4} ${y - r * 0.3} ${x - 4} ${y + r * 0.3} ${x} ${y + r}" stroke="#7A2C55" stroke-width="1.6" fill="none"/><ellipse cx="${x - r * 0.4}" cy="${y - r * 0.4}" rx="${r * 0.2}" ry="${r * 0.3}" fill="#C7709B" stroke="none"/>`;
  const TABLE = `<rect x="8" y="44" width="62" height="8" rx="2" fill="#B47846"/><path d="M14 52 V92 M64 52 V92" stroke="#8C5A32" stroke-width="5"/>`;
  const STILT = `${ground(94)}<path d="M8 46 L50 16 L92 46 Z" fill="#B48A35"/><path d="M14 44 L50 20 M86 44 L50 20 M30 44 L50 26 M70 44 L50 26" stroke="#8C6A25" stroke-width="2"/><rect x="16" y="44" width="68" height="26" fill="#C68B59"/><path d="M16 52 H84 M16 60 H84" stroke="#8C5A32" stroke-width="1.6"/><rect x="44" y="50" width="12" height="20" fill="#6B4A2E"/>` +
    `<path d="M20 70 V94 M40 70 V94 M60 70 V94 M80 70 V94" stroke="#8C5A32" stroke-width="5"/><path d="M58 70 L70 94 M62 76 H66 M64 82 H68 M66 88 H70" stroke="#8C5A32" stroke-width="2.5"/>`;
  const DUCK = (x, y, s = 1, c = '#F4F0EA') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-22 4 C-22 -10 4 -12 12 -4 C18 -16 34 -14 34 -2 C34 4 30 6 26 6 C24 14 10 18 -2 18 C-14 18 -22 12 -22 4 Z" fill="${c}"/><path d="M34 -4 L44 -2 L34 2 Z" fill="#D9473A"/><circle cx="26" cy="-6" r="1.8" fill="#3A3B3C" stroke="none"/><path d="M-10 4 C-2 0 6 2 10 8" stroke="#C8C3BC" stroke-width="2"/><circle cx="12" cy="-6" r="0" /></g>`;
  const DIVER = `<path d="M0 0 H100 V100 H0 Z" fill="#7FB2D9" stroke="none"/><g fill="#FFFFFF" stroke="#5B8FC9" stroke-width="1.5"><circle cx="82" cy="20" r="4"/><circle cx="88" cy="10" r="3"/><circle cx="78" cy="8" r="2.4"/></g>` +
    `<path d="M10 66 C20 56 50 54 64 58 L70 70 C56 74 24 78 10 66 Z" fill="#3A3B3C"/><path d="M10 66 L0 58 L2 74 Z" fill="#F2C14E"/><path d="M64 58 L80 46 M68 66 L84 62" stroke="#3A3B3C" stroke-width="6"/>` +
    `<circle cx="74" cy="44" r="12" fill="${SKIN}"/><rect x="66" y="38" width="16" height="10" rx="4" fill="#BFE0F0" stroke-width="2.5"/><path d="M60 40 C64 30 82 28 86 38" stroke="#3A3B3C" stroke-width="3"/><path d="M84 46 L90 30" stroke="#F2903A" stroke-width="3"/><rect x="30" y="48" width="22" height="9" rx="4" fill="#C8CCD0"/>` +
    `${at(4, 74, 0.3, FISH('#F2903A', '#E86A4F'))}`;
  const CASSAVA = `${ground(90)}${[[-24, 0], [0, -6], [22, 4]].map(([dx, a]) => `<g transform="rotate(${a} 50 30)"><path d="M${50 + dx * 0.4} 28 C${44 + dx} 40 ${42 + dx} 70 ${50 + dx} 88 C${58 + dx} 70 ${56 + dx} 40 ${50 + dx * 0.4} 28 Z" fill="#8C5A32"/><path d="M${48 + dx} 50 l6 -2 M${48 + dx} 66 l6 -2" stroke="#6B4A2E" stroke-width="1.6"/></g>`).join('')}<path d="M50 28 V10 M50 14 L38 4 M50 14 L62 4" stroke="#6E8F3A" stroke-width="3"/>`;
  const FOOT = `<path d="M30 20 C26 50 22 70 28 84 C34 96 70 96 76 86 C80 76 70 70 62 60 C58 50 60 30 58 20 Z" fill="${SKIN}"/>${[[30, 86, 6], [42, 92, 5], [54, 93, 4.5], [64, 91, 4], [72, 87, 3.6]].map(([x, y, r]) => `<circle cx="${x}" cy="${y - 4}" r="${r}" fill="${SKIN}"/>`).join('')}<path d="M34 50 q6 4 14 2" stroke="#E0B49A" stroke-width="1.6"/>`;
  const SCALE = `${ground(90)}<rect x="22" y="56" width="56" height="34" rx="6" fill="#D9473A"/><circle cx="50" cy="73" r="11" fill="#FFFCF6"/><path d="M50 73 L56 66" stroke-width="2"/><path d="M50 56 V48" stroke-width="4"/><path d="M18 48 H82 C80 38 20 38 18 48 Z" fill="#C8CCD0"/>${TOMATO(40, 36, 8)}${TOMATO(58, 36, 8)}`;
  const CARRY = `${ground(96)}${KID_FULL('#6FAE4F', true)}<path d="M38 56 L44 64 M62 56 L56 64" stroke="${SKIN}" stroke-width="6"/><path d="M42 56 H58 L56 70 H44 Z" fill="#DCEFF5"/><path d="M43 60 H57" stroke="#7FB2D9" stroke-width="3"/><path d="M68 26 q6 -6 12 0 M72 18 q6 -6 12 0" stroke="#A39588" stroke-width="2"/>`;
  const FRIENDS = `${ground(96)}${at(-6, 6, 0.9, KID_FULL('#E58FA0'))}${at(36, 6, 0.9, KID_FULL('#5B8FC9'))}<path d="M50 60 C52 54 60 54 62 60" stroke="${SKIN}" stroke-width="6"/><path d="M48 14 C44 8 36 10 38 16 C40 22 48 24 48 26 C48 24 56 22 58 16 C60 10 52 8 48 14 Z" fill="#E86A4F"/>`;
  const GOAL = `${ground(94)}<path d="M8 94 V20 H92 V94" stroke-width="5" stroke="#FFFFFF"/><path d="M8 94 V20 H92 V94" stroke-width="1.5"/>${[20, 32, 44, 56, 68, 80].map(x => `<path d="M${x} 22 V92" stroke="#C8C3BC" stroke-width="1"/>`).join('')}${[34, 48, 62, 76].map(y => `<path d="M10 ${y} H90" stroke="#C8C3BC" stroke-width="1"/>`).join('')}`;
  const BALL = (x, y, r = 8) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFFFFF"/><path d="M${x} ${y - r * 0.4} l${r * 0.4} ${r * 0.3} l${-r * 0.15} ${r * 0.45} h${-r * 0.5} l${-r * 0.15} ${-r * 0.45} Z" fill="#3A3B3C"/>`;
  const KEEPER = `${GOAL}${at(14, 20, 0.8, `<path d="M38 56 L18 38 M62 56 L82 38" stroke="${SKIN}" stroke-width="6"/><circle cx="16" cy="36" r="5" fill="#6FAE4F"/><circle cx="84" cy="36" r="5" fill="#6FAE4F"/>${KID_FULL('#F2C14E').replace(/<path d="M38 56 L32 72 M62 56 L68 72"[^>]*\/>/, '')}`)}${BALL(80, 24, 7)}`;
  const CAN = `<rect x="30" y="20" width="40" height="66" rx="6" fill="#D9473A"/><ellipse cx="50" cy="22" rx="20" ry="5" fill="#C8CCD0"/><ellipse cx="50" cy="84" rx="20" ry="5" fill="#B4553C"/><path d="M34 44 H66 V62 H34 Z" fill="#FFFCF6" stroke="none"/><path d="M40 53 q10 -8 20 0" stroke="#D9473A" stroke-width="3"/><path d="M50 20 l6 -2" stroke-width="2"/>`;
  const GRASSTIPS = `${ground(92)}${Array.from({ length: 9 }, (_, i) => { const x = 12 + i * 9.5, hgt = 40 + (i % 3) * 14; return `<path d="M${x} 92 C${x - 2} ${92 - hgt / 2} ${x + 4} ${92 - hgt * 0.8} ${x + 8} ${92 - hgt}" stroke="#6FAE4F" stroke-width="4"/><circle cx="${x + 8}" cy="${92 - hgt}" r="2.6" fill="#B9D86A" stroke="none"/>`; }).join('')}`;
  const WEASEL = `${ground(90)}<path d="M18 70 C10 60 6 44 14 34" stroke="#A0714A" stroke-width="8"/><path d="M14 34 l-4 -4" stroke="#FFFFFF" stroke-width="6"/><ellipse cx="44" cy="70" rx="28" ry="12" fill="#A0714A"/><path d="M28 80 v10 M58 80 v10" stroke="#8C5A32" stroke-width="5"/>` +
    `<path d="M64 66 C66 52 80 46 88 52 L96 60 L84 66 Z" fill="#A0714A"/><path d="M84 66 L96 60 L88 70 Z" fill="#FFFFFF"/><path d="M72 50 L74 40 L80 48 Z" fill="#A0714A"/><circle cx="84" cy="56" r="2" fill="#3A3B3C" stroke="none"/><circle cx="96" cy="60" r="1.8" fill="#3A3B3C" stroke="none"/>`;
  const KISS = `${ground(96)}${at(-12, 8, 0.88, ADULT('me'))}${at(38, 30, 0.66, KID('#6FAE4F'))}<path d="M56 44 C54 40 49 41 50 45 C51 48 56 50 56 51 C56 50 61 48 62 45 C63 41 58 40 56 44 Z" fill="#E86A4F"/>`;
  const PIGLET = `${ground(90)}<ellipse cx="50" cy="62" rx="32" ry="22" fill="#F2B8C0"/><path d="M28 80 v8 M42 82 v8 M58 82 v8 M72 80 v8" stroke="#E58FA0" stroke-width="6"/><path d="M82 58 q8 -4 4 -10 q-6 2 -2 8" stroke="#E58FA0" stroke-width="2.4" fill="none"/>` +
    `<circle cx="28" cy="52" r="16" fill="#F2B8C0"/><path d="M18 40 L14 28 L26 36 Z M34 38 L40 28 L40 42 Z" fill="#E58FA0"/><ellipse cx="18" cy="58" rx="7" ry="5" fill="#E58FA0"/><circle cx="16" cy="58" r="1.4" fill="#B4553C" stroke="none"/><circle cx="20" cy="58" r="1.4" fill="#B4553C" stroke="none"/><circle cx="26" cy="48" r="2" fill="#3A3B3C" stroke="none"/>`;
  const PAINTER = `${ground(96)}<rect x="52" y="6" width="44" height="88" fill="#F2D27A"/><rect x="52" y="6" width="22" height="88" fill="#FFFFFF"/>${at(-10, 10, 0.86, ADULT('bo'))}<path d="M50 68 L70 44" stroke="${SKIN}" stroke-width="7"/><path d="M70 44 L76 36" stroke="#8C5A32" stroke-width="3"/><rect x="66" y="22" width="22" height="12" rx="3" fill="#F2C14E"/>`;
  const RAINCLOUD = `<path d="M18 46 C10 46 8 32 18 30 C18 18 34 14 40 22 C46 10 66 10 70 24 C82 22 90 32 84 42 C82 46 78 46 76 46 Z" fill="#A8B4C0"/>${[[22, 56], [36, 64], [50, 56], [64, 66], [78, 56], [30, 80], [58, 84], [72, 80], [44, 78]].map(([x, y]) => `<path d="M${x} ${y} l-3 8" stroke="#5B8FC9" stroke-width="3"/>`).join('')}`;
  const LOTUSLEAF = `${WATER(56)}<ellipse cx="44" cy="66" rx="36" ry="14" fill="#6FAE4F"/><path d="M44 66 L80 66 L74 58 Z" fill="#A9D3E4" stroke="none"/><path d="M44 66 L14 60 M44 66 L26 76 M44 66 L58 78 M44 66 L36 54" stroke="#4E8A3A" stroke-width="1.6"/><path d="M72 64 C70 40 74 30 74 24" stroke="#6E8F3A" stroke-width="3"/><path d="M74 26 C64 18 66 4 74 0 C82 4 84 18 74 26 Z" fill="#F2A7B8"/><path d="M74 24 C70 16 72 8 74 4" stroke="#E58FA0" stroke-width="1.6"/>`;
  const SNAIL = `${ground(86)}<path d="M14 84 C14 76 22 74 30 74 H74 C80 74 84 78 86 84 Z" fill="#C9B07A"/><path d="M78 74 C80 62 84 54 90 50 M84 74 C88 64 94 60 96 54" stroke="#C9B07A" stroke-width="4"/><circle cx="90" cy="48" r="2.6" fill="#3A3B3C"/><circle cx="96" cy="52" r="2.4" fill="#3A3B3C"/>` +
    `<circle cx="46" cy="56" r="24" fill="#C68B59"/><path d="M46 56 m0 -16 a16 16 0 1 1 -14 8 a10 10 0 1 1 10 -2 a4 4 0 1 1 4 6" stroke="#8C5A32" stroke-width="3" fill="none"/>`;
  const TORCH = `<path d="M8 60 L40 44 H80 V76 H40 Z" fill="#5B8FC9"/><rect x="80" y="42" width="14" height="36" rx="4" fill="#3F6FA6"/><rect x="50" y="52" width="14" height="6" rx="3" fill="#F2C14E"/><path d="M8 60 L0 40 M8 60 L0 60 M8 60 L0 80" stroke="#F2C14E" stroke-width="2"/><path d="M8 40 L0 30 V90 L8 80 Z" fill="#FFF4B8" stroke="none" opacity=".8"/>`;
  const PUPPY = `${ground(90)}<ellipse cx="50" cy="70" rx="24" ry="16" fill="#E9C9A0"/><path d="M34 82 v8 M64 82 v8" stroke="#C9A578" stroke-width="7"/><path d="M74 66 q10 -8 8 -18" stroke="#C9A578" stroke-width="5"/>` +
    `<circle cx="38" cy="46" r="20" fill="#E9C9A0"/><ellipse cx="20" cy="46" rx="7" ry="13" fill="#C9A578"/><ellipse cx="56" cy="46" rx="7" ry="13" fill="#C9A578"/>${eyes(31, 45, 44, 2.4)}<ellipse cx="38" cy="54" rx="4" ry="3" fill="#3A3B3C"/><path d="M34 58 q4 4 8 0" stroke-width="2"/>`;
  const BEANIE = `<path d="M18 70 C18 30 82 30 82 70 Z" fill="#E86A4F"/>${[30, 42, 54, 66].map(x => `<path d="M${x} 40 V70" stroke="#C24E36" stroke-width="2"/>`).join('')}<rect x="14" y="66" width="72" height="16" rx="6" fill="#F2C14E"/><path d="M22 70 V80 M30 70 V80 M38 70 V80 M46 70 V80 M54 70 V80 M62 70 V80 M70 70 V80 M78 70 V80" stroke="#D9A23A" stroke-width="1.6"/><circle cx="50" cy="28" r="9" fill="#FFFFFF"/>`;
  const TEACUP = `<ellipse cx="50" cy="80" rx="36" ry="8" fill="#E9E0D2"/><path d="M24 44 H76 C76 68 66 78 50 78 C34 78 24 68 24 44 Z" fill="#FFFFFF"/><ellipse cx="50" cy="44" rx="26" ry="6" fill="#C9973F"/><path d="M30 58 q20 6 40 0" stroke="#5E8F6A" stroke-width="3"/><path d="M40 34 q-4 -8 0 -14 M56 34 q-4 -8 0 -14" stroke="#C8C3BC" stroke-width="2.5"/>`;
  const CANDLE = `<path d="M50 8 C40 22 42 32 50 34 C58 32 60 22 50 8 Z" fill="#F2C14E"/><path d="M50 18 C46 26 47 30 50 31 C53 30 54 26 50 18 Z" fill="#F2903A" stroke="none"/><path d="M50 34 V40" stroke-width="2"/><rect x="38" y="40" width="24" height="46" rx="3" fill="#FFF6E6"/><path d="M42 40 V54 q2 4 4 0 V40" fill="#FFF6E6"/><ellipse cx="50" cy="88" rx="26" ry="6" fill="#C9973F"/>`;
  const ROCKET = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/><g transform="rotate(30 50 50)"><path d="M50 6 C64 18 66 40 64 70 H36 C34 40 36 18 50 6 Z" fill="#F4F6FA"/><circle cx="50" cy="36" r="7" fill="#7FB2D9"/><path d="M36 56 L22 78 H36 Z M64 56 L78 78 H64 Z" fill="#D9473A"/><path d="M40 70 L44 92 L50 80 L56 92 L60 70 Z" fill="#F2903A"/><path d="M44 70 L50 84 L56 70 Z" fill="#F2C14E" stroke="none"/></g>`;
  const DOCK = `${WATER(64)}<path d="M0 60 H40 V70 H0 Z" fill="#B47846"/><path d="M8 70 V96 M30 70 V96" stroke="#8C5A32" stroke-width="5"/>${at(36, 6, 0.64, `<path d="M4 60 H96 L88 76 H12 Z" fill="#E9E0D2"/><path d="M4 60 H96" stroke-width="3"/><rect x="62" y="34" width="22" height="26" rx="2" fill="#5B8FC9"/><rect x="66" y="38" width="14" height="8" fill="#DCEFF5"/>`)}`;
  const MANGO = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-20 -10 C-10 -30 26 -26 28 0 C30 22 6 30 -10 22 C-26 14 -28 0 -20 -10 Z" fill="#F2B134"/><path d="M-20 -10 C-14 -20 0 -24 10 -22" stroke="#E8743B" stroke-width="3" fill="none"/><path d="M20 -18 q4 -8 10 -10" stroke="#6E8F3A" stroke-width="3"/></g>`;
  const PHONE = `<rect x="28" y="8" width="44" height="84" rx="8" fill="#3A3B3C"/><rect x="32" y="16" width="36" height="66" rx="3" fill="#DCEFF5"/><path d="M36 26 H60 C64 26 64 40 60 40 H42 L36 46 Z" fill="#6FAE4F"/><path d="M40 33 H56" stroke="#FFFFFF" stroke-width="2.5"/><path d="M64 52 H42 C38 52 38 64 42 64 H58 L64 70 Z" fill="#FFFFFF"/><path d="M44 58 H58" stroke="#A39588" stroke-width="2.5"/>`;
  const ASK = `${ground(96)}${at(-12, 8, 0.88, ADULT('me'))}${at(34, 30, 0.66, KID('#E86A4F'))}<path d="M50 80 C54 74 64 74 70 78" stroke="${SKIN}" stroke-width="6"/>${at(56, 62, 0.28, GIFT)}`;
  const DRIZZLE = `<path d="M0 0 H100 V100 H0 Z" fill="#E3E8EC" stroke="none"/>${Array.from({ length: 30 }, (_, i) => { const x = 6 + (i * 37) % 92, y = 6 + (i * 53) % 84; return `<path d="M${x} ${y} l-1.5 4" stroke="#7FA6C9" stroke-width="1.8"/>`; }).join('')}${at(26, 34, 0.62, KID_FULL('#F2C14E'))}<path d="M30 40 C30 22 70 22 70 40 Z" fill="#5B8FC9"/><path d="M50 26 V20" stroke-width="2"/>`;
  const WORM = `${ground(80)}<path d="M0 80 H100 V100 H0 Z" fill="#8C6A4A" stroke="none"/><path d="M14 70 C24 52 38 52 44 66 C50 80 64 80 70 64 C74 54 82 52 88 58" stroke="#E58FA0" stroke-width="10"/>${[24, 34, 54, 64].map((x, i) => `<path d="M${x} ${[60, 58, 74, 72][i] - 5} v10" stroke="#C9707E" stroke-width="1.5"/>`).join('')}<circle cx="88" cy="56" r="1.8" fill="#3A3B3C" stroke="none"/>`;
  const BUNCHA = `${at(-4, 30, 0.6, BOWL(`<path d="M10 50 C20 42 80 42 90 50 Z" fill="#E8B07A"/><path d="M26 46 h14 M50 44 h16" stroke="#8C4A2E" stroke-width="5"/>`))}<ellipse cx="68" cy="40" rx="28" ry="10" fill="#FFFFFF"/>${Array.from({ length: 7 }, (_, i) => `<path d="M${48 + i * 6} 36 q3 4 6 0" stroke="#E9E0D2" stroke-width="2"/>`).join('')}${[[60, 20], [74, 16], [86, 24]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#7DB25A"/>`).join('')}`;
  const ORANGE = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#F2903A"/><circle cx="${x - r * 0.3}" cy="${y - r * 0.35}" r="${r * 0.15}" fill="#F6B46A" stroke="none"/><path d="M${x} ${y - r} q${r * 0.2} ${-r * 0.4} ${r * 0.6} ${-r * 0.5}" stroke="#6E8F3A" stroke-width="2.5"/>`;
  const PICKS = `<path d="M30 56 H70 L66 90 H34 Z" fill="#B47846"/><path d="M33 66 H67" stroke="#8C5A32" stroke-width="2"/>${[36, 42, 48, 54, 60, 66].map((x, i) => `<path d="M${x} 58 L${x - 6 + i * 2.4} ${12 + (i % 3) * 6}" stroke="#E9D49A" stroke-width="2.5"/>`).join('')}`;
  const GINSENG = `<path d="M50 20 C40 26 38 40 42 52 C36 60 30 74 26 88 M44 54 C48 66 50 80 54 92 M46 40 C56 46 66 52 74 64 M44 44 C34 44 24 40 16 34" stroke="#E9D0A0" stroke-width="9"/><path d="M50 20 C40 26 38 40 42 52" stroke="#D9BC86" stroke-width="2"/><path d="M50 20 V8 M50 12 L40 4 M50 12 L60 2" stroke="#6E8F3A" stroke-width="3"/><circle cx="60" cy="4" r="3" fill="#D9473A" stroke="none"/>`;
  const CLINIC = `${ground(94)}<rect x="12" y="34" width="76" height="60" fill="#FFFFFF"/><path d="M8 36 L50 14 L92 36 Z" fill="#5B8FC9"/><rect x="42" y="64" width="16" height="30" fill="#7FB2D9"/><rect x="18" y="52" width="16" height="14" fill="#DCEFF5"/><rect x="66" y="52" width="16" height="14" fill="#DCEFF5"/><path d="M50 38 V56 M41 47 H59" stroke="#3E8E4A" stroke-width="6"/>`;
  const BRIDGE = `${WATER(66)}<path d="M0 66 C30 50 70 50 100 66" stroke="#9BC46A" stroke-width="6" fill="none"/><path d="M4 52 L96 52" stroke="#C9A060" stroke-width="5"/><path d="M14 52 V80 M50 52 V82 M86 52 V80 M4 38 L96 38" stroke="#B48A35" stroke-width="3"/>${at(26, -6, 0.6, KID_FULL('#E86A4F', true))}`;
  const BOW_KID = `${ground(96)}${at(0, 8, 0.86, ADULT('co'))}<g transform="rotate(18 70 90)">${at(44, 26, 0.66, KID('#5B8FC9'))}</g><path d="M54 84 L68 80 L82 84" stroke="${SKIN}" stroke-width="6"/>`;
  const SILKWORM = `<path d="M6 70 C20 50 60 46 94 60 C70 78 30 84 6 70 Z" fill="#7DB25A"/><path d="M8 70 C40 62 70 60 92 60" stroke="#4E8A3A" stroke-width="1.8"/>` +
    `${[22, 32, 42, 52, 62].map((x, i) => `<circle cx="${x}" cy="${50 - (i % 2) * 3}" r="7" fill="#F4F0EA"/>`).join('')}<circle cx="72" cy="46" r="8" fill="#F4F0EA"/><circle cx="76" cy="44" r="1.8" fill="#3A3B3C" stroke="none"/>`;
  const STUDY = `${ground(96)}${TABLE.replace('x="8" y="44" width="62"', 'x="30" y="60" width="66"').replace('M14 52 V92 M64 52 V92', 'M36 68 V96 M90 68 V96')}${at(-8, 14, 0.8, KID('#E58FA0'))}<rect x="50" y="48" width="30" height="12" fill="#FFFFFF"/><path d="M65 48 V60" stroke-width="1.5"/>${at(10, 0, 0.6, PEN)}`;
  const BATH = `<path d="M8 50 H92 V60 C92 80 80 90 50 90 C20 90 8 80 8 60 Z" fill="#FFFFFF"/><path d="M20 90 l-4 6 M80 90 l4 6" stroke-width="3"/>${at(18, 6, 0.6, KID('#E58FA0').replace(/<path d="M30 96[^>]*\/>/, ''))}${[[22, 48], [34, 42], [70, 46], [80, 40], [62, 38]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#DCEFF5"/>`).join('')}<path d="M8 50 H92" stroke-width="3"/>`;
  const PLANK = `${ground(84)}<path d="M8 50 L76 36 L92 46 L24 62 Z" fill="#E9C9A0"/><path d="M24 62 L92 46 V56 L24 72 Z" fill="#C9A060"/><path d="M8 50 V60 L24 72 V62 Z" fill="#B48A35"/><path d="M20 54 C40 48 56 46 72 42 M30 58 C46 54 60 50 80 46" stroke="#C9A060" stroke-width="1.6"/>`;
  const SEEDLING = `<path d="M0 70 H100 V100 H0 Z" fill="#9C7A5A" stroke="none"/><path d="M0 70 H100" stroke="#7A5A3E" stroke-width="2"/>${[24, 50, 76].map((x, i) => `<path d="M${x} 70 V${48 - i * 4}" stroke="#6FAE4F" stroke-width="3"/><path d="M${x} ${52 - i * 4} C${x - 14} ${46 - i * 4} ${x - 16} ${34 - i * 4} ${x - 4} ${36 - i * 4} C${x} ${40 - i * 4} ${x} ${48 - i * 4} ${x} ${52 - i * 4} Z M${x} ${52 - i * 4} C${x + 14} ${46 - i * 4} ${x + 16} ${34 - i * 4} ${x + 4} ${36 - i * 4} C${x} ${40 - i * 4} ${x} ${48 - i * 4} ${x} ${52 - i * 4} Z" fill="#8CC063"/>`).join('')}`;
  const MUSHROOM = (x, y, s = 1, c = '#D9473A') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-8 0 C-10 14 -10 24 -12 30 H12 C10 24 10 14 8 0 Z" fill="#FFF6E6"/><path d="M-30 2 C-30 -26 30 -26 30 2 Z" fill="${c}"/><g fill="#FFFFFF" stroke="none"><circle cx="-14" cy="-10" r="4"/><circle cx="6" cy="-14" r="3.4"/><circle cx="18" cy="-4" r="3"/><circle cx="-2" cy="-4" r="2.6"/></g></g>`;
  const TURTLE_S = (x, y, s = 1) => at(x, y, s, TURTLE);
  const RABBIT_S = (x, y, s = 1) => at(x, y, s, RABBIT);
  const FIREFLY = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="#F2E67A" stroke="none" opacity=".5"/><circle cx="${x}" cy="${y}" r="3" fill="#FFF4B8" stroke="none"/><path d="M${x - 5} ${y - 4} l-4 -4 M${x - 5} ${y - 4} l-5 1" stroke="#3A3B3C" stroke-width="1.2"/>`;
  const NIGHT = `<rect x="2" y="2" width="96" height="96" rx="8" fill="#2E3A5C"/><path d="M2 80 C30 72 70 76 98 70 V90 C98 95 94 98 90 98 H10 C6 98 2 95 2 90 Z" fill="#3E5A3A" stroke="none"/><circle cx="78" cy="20" r="8" fill="#F2E6B8" stroke="none"/>`;
  const RICEBOWL = `${BOWL(`<path d="M10 50 C14 30 86 30 90 50 Z" fill="#FFFFFF"/>${[[30, 42], [42, 36], [56, 38], [68, 44], [48, 46], [36, 48], [62, 48]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="3" ry="1.8" fill="#F4F0EA" stroke="#D8D4C8" stroke-width="1"/>`).join('')}`)}<path d="M70 28 L96 8 M74 32 L98 14" stroke="#B47846" stroke-width="3"/>`;
  const SHRIMP = `<path d="M80 40 C86 60 70 84 44 82 C26 80 14 68 16 56" stroke="#F2903A" stroke-width="18" fill="none"/>${[[74, 58], [64, 72], [50, 78], [34, 74]].map(([x, y]) => `<path d="M${x - 6} ${y - 8} q6 6 0 14" stroke="#D9673A" stroke-width="2" fill="none"/>`).join('')}<path d="M16 56 L4 50 L8 64 Z" fill="#F2903A"/><circle cx="80" cy="36" r="10" fill="#F2903A"/><circle cx="84" cy="32" r="2" fill="#3A3B3C" stroke="none"/><path d="M86 30 C92 18 96 10 98 4 M84 30 C86 18 82 8 78 2" stroke="#D9673A" stroke-width="1.6" fill="none"/>`;
  const HAMLET = `${ground(94)}<path d="M0 0 H100 V60 H0 Z" fill="#E3F0F4" stroke="none"/>${at(0, 30, 0.5, HOUSE('#E9C9A0', '#B4553C'))}${at(48, 34, 0.46, HOUSE())}${at(26, 44, 0.5, HUT)}${at(70, 10, 0.4, TREE)}`;
  const STOOP = `${ground(96)}<g transform="rotate(-16 40 96)">${at(6, 16, 0.8, ADULT('ba'))}</g><path d="M56 66 L72 58" stroke="${SKIN}" stroke-width="6"/>${at(0, 4, 1, CANE)}`;
  const COM = `<path d="M10 70 C30 50 70 50 90 70 C70 86 30 86 10 70 Z" fill="#6FAE4F"/><path d="M14 70 H86" stroke="#4E8A3A" stroke-width="1.6"/><ellipse cx="50" cy="62" rx="30" ry="12" fill="#B9D86A"/>${Array.from({ length: 22 }, (_, i) => `<ellipse cx="${26 + (i * 13) % 48}" cy="${56 + (i * 7) % 12}" rx="2.6" ry="1.4" fill="#8CB040" stroke="none"/>`).join('')}`;
  const PUMP = `${at(0, 20, 0.7, BIKE)}<rect x="74" y="20" width="10" height="52" rx="3" fill="#5B8FC9"/><path d="M79 20 V8 M70 8 H88" stroke-width="4"/><path d="M76 70 C66 86 50 84 40 76" stroke-width="2.5" fill="none"/><rect x="70" y="72" width="18" height="6" rx="2" fill="#3A3B3C"/>`;
  const STRAW = `${ground(92)}<path d="M8 92 C10 60 30 30 50 26 C70 30 90 60 92 92 Z" fill="#E9C25A"/>${Array.from({ length: 14 }, (_, i) => `<path d="M${16 + i * 5} 90 C${20 + i * 4} 70 ${30 + i * 3} 46 ${40 + i * 1.6} ${32 + (i % 3) * 4}" stroke="#C9A040" stroke-width="1.6"/>`).join('')}<path d="M50 26 V14" stroke="#8C5A32" stroke-width="3"/>`;
  const PINEAPPLE = `<path d="M50 34 L40 8 L50 20 L56 4 L58 22 L70 10 L60 34 Z" fill="#6FAE4F"/><ellipse cx="50" cy="62" rx="24" ry="30" fill="#F2B134"/>${[-12, 0, 12].flatMap(dx => [44, 56, 68, 80].map(y => `<path d="M${50 + dx - 5} ${y} l5 -5 l5 5" stroke="#C98A20" stroke-width="1.8" fill="none"/>`)).join('')}`;

  Object.assign(T, {
    /* Bài 24 · an ăn ân */
    'bạn thân': SV(FRIENDS),
    'khăn rằn': SV(SCARF),
    'quả mận': SV(`${PLUM(36, 58, 18)}${PLUM(64, 62, 16)}<path d="M36 40 q4 -14 14 -18 M64 46 q0 -14 -10 -22" stroke="#6E8F3A" stroke-width="3"/>${LEAF(50, 24, -30, '#7DB25A')}`),
    'bàn ghế': SV(`${ground(94)}${TABLE}${at(44, 30, 0.64, CHAIR())}`),
    'nhà sàn': SV(STILT),
    'đàn ngan': SV(`${ground(90)}${DUCK(26, 40, 0.8)}${DUCK(60, 54, 0.8)}${DUCK(30, 72, 0.7)}`),
    'bé ăn': SV(`${ground(96)}${at(-6, 10, 0.86, KID('#6FAE4F'))}${at(36, 46, 0.56, RICEBOWL)}`),
    'thợ lặn': SV(DIVER),
    'củ sắn': SV(CASSAVA),
    'bàn chân': SV(FOOT),
    'cân': SV(SCALE),
    'cẩn thận': SV(CARRY),
    'Bé Vân và bé Lan là bạn thân.': SV(FRIENDS),
    'Đàn gà cứ tha thẩn gần chân mẹ.': SV(`${ground(92)}${at(0, 4, 0.8, HEN)}${CHICK(70, 80)}${CHICK(86, 72)}${CHICK(58, 86)}`),
    'Có mẹ che chở, cả đàn chả sợ lũ quạ dữ.': SV(`${ground(92)}${at(0, 20, 0.76, HEN)}${CHICK(36, 86)}${CHICK(50, 84)}${at(52, -4, 0.5, CROW)}`),

    /* Bài 25 · on ôn ơn */
    'nón lá': SV(`${ground(90)}<path d="M50 14 L6 74 C30 84 70 84 94 74 Z" fill="#E9D49A"/><path d="M6 74 C30 84 70 84 94 74" stroke="#B9A06A" stroke-width="3"/>${[30, 44, 58].map(y => `<path d="M${50 - (y - 14) * 0.73} ${y} C40 ${y + 4} 60 ${y + 4} ${50 + (y - 14) * 0.73} ${y}" stroke="#C9B37A" stroke-width="1.6" fill="none"/>`).join('')}<path d="M24 76 C30 92 70 92 76 76" stroke="#D9473A" stroke-width="2.4" fill="none"/>`),
    'thủ môn': SV(KEEPER),
    'sơn ca': SV(`${at(0, 4, 0.9, BIRD('#B9895E', '#8C5A32'))}${NOTES}`),
    'vỏ lon': SV(`${ground(90)}${CAN}`),
    'ngọn cỏ': SV(GRASSTIPS),
    'con dê': SV(`${ground(92)}${GOAT}`),
    'con chồn': SV(WEASEL),
    'mẹ hôn bé': SV(KISS),
    'bốn quả': SV(`${ground(92)}${ORANGE(26, 70, 15)}${ORANGE(56, 72, 15)}${ORANGE(40, 46, 15)}${ORANGE(74, 48, 14)}`),
    'lợn con': SV(PIGLET),
    'thợ sơn': SV(PAINTER),
    'cơn mưa': SV(RAINCLOUD),
    'Mẹ cho dì Ba nón lá và khăn rằn.': SV(`${ground(96)}${at(-12, 10, 0.84, ADULT('me'))}${at(46, 10, 0.84, ADULT('di'))}${at(42, 60, 0.7, NONLA)}${at(36, 60, 0.3, SCARF)}`),
    'Nhà bà có bốn chú lợn con to tròn.': SV(`${ground(94)}${at(-2, 6, 0.5, PIGLET)}${at(48, 4, 0.5, PIGLET)}${at(-2, 48, 0.5, PIGLET)}${at(48, 46, 0.5, PIGLET)}`),
    'Chú Sơn đi đón bà ở nhà ga.': SV(`${at(0, -18, 0.9, TRAIN)}${at(-6, 34, 0.62, ADULT('bo'))}${at(46, 34, 0.62, ADULT('ba'))}`),

    /* Bài 26 · en ên in un */
    'lá sen': SV(LOTUSLEAF),
    'con sên': SV(SNAIL),
    'đèn pin': SV(TORCH),
    'cún con': SV(PUPPY),
    'mũ len': SV(BEANIE),
    'chén trà': SV(TEACUP),
    'dế mèn': SV(`${ground(80)}${at(62, 62, 2.6, CRICKET)}${at(0, 40, 0.5, GRASS(1))}`),
    'ngọn nến': SV(CANDLE),
    'tên lửa': SV(ROCKET),
    'bến phà': SV(DOCK),
    'quả chín': SV(`${BRANCHFRUIT(MANGO(48, 58, 1.1))}`),
    'tin nhắn': SV(PHONE),
    'bé xin quà': SV(ASK),
    'mưa phùn': SV(DRIZZLE),
    'con giun': SV(WORM),
    'bún chả': SV(BUNCHA),
    'Ở ven hồ có lá sen to.': SV(`${LOTUSLEAF}${at(56, 50, 0.5, `<ellipse cx="44" cy="66" rx="36" ry="14" fill="#6FAE4F"/>`)}`),
    'Chín chú lợn con ăn đã no tròn, cả đàn đi ngủ.': SV(`${ground(94)}${Array.from({ length: 9 }, (_, i) => at(2 + (i % 3) * 32, 4 + Math.floor(i / 3) * 30, 0.32, PIGLET.replace('<circle cx="26" cy="48" r="2" fill="#3A3B3C" stroke="none"/>', '<path d="M22 48 q4 2 8 0" stroke-width="2.4"/>'))).join('')}<path d="M80 6 h8 l-8 8 h8" stroke="#5B8FC9" stroke-width="2.4"/>`),
    'Mẹ cho cún con ăn.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('me'))}${at(46, 38, 0.6, PUPPY)}${at(36, 74, 0.3, BOWL())}`),

    /* Bài 27 · am ăm âm */
    'quả cam': SV(`${ground(90)}${ORANGE(48, 58, 30)}${LEAF(56, 26, -40, '#7DB25A')}`),
    'tăm tre': SV(PICKS),
    'củ sâm': SV(GINSENG),
    'trạm y tế': SV(CLINIC),
    'can đảm': SV(BRIDGE),
    'cảm ơn': SV(BOW_KID),
    'con tằm': SV(SILKWORM),
    'chăm chỉ': SV(STUDY),
    'bé tắm': SV(BATH),
    'tấm gỗ': SV(PLANK),
    'mầm cỏ': SV(SEEDLING),
    'nấm': SV(`${ground(90)}${MUSHROOM(38, 60, 1.1)}${MUSHROOM(74, 70, 0.7, '#C68B59')}`),
    'Rùa bò chậm, thỏ chê rùa.': SV(`${ground(92)}${TURTLE_S(-6, 30, 0.62)}${RABBIT_S(48, 8, 0.62)}<path d="M54 40 L44 46" stroke="#F4F0EA" stroke-width="5"/>`),
    'Rùa cứ bò cần mẫn.': SV(`${TURTLE_S(6, 6, 0.9)}<path d="M8 84 h10 M22 84 h6" stroke="#A39588" stroke-width="2.4"/>`),
    'Thế là rùa đi xa hơn hẳn thỏ.': SV(`${ground(92)}${RABBIT_S(-2, 44, 0.46)}<path d="M8 40 h6 l-6 6 h6" stroke="#5B8FC9" stroke-width="2"/>${TURTLE_S(48, 30, 0.56)}<path d="M96 40 V92" stroke="#8C5A32" stroke-width="3"/><path d="M96 40 L80 46 L96 52 Z" fill="#D9473A"/>`),

    /* Bài 28 · om ôm ơm */
    'đom đóm': SV(`${NIGHT}${FIREFLY(30, 40)}${FIREFLY(54, 28)}${FIREFLY(70, 52)}${FIREFLY(40, 62)}${FIREFLY(20, 70)}`),
    'con tôm': SV(SHRIMP),
    'ăn cơm': SV(RICEBOWL),
    'xóm nhỏ': SV(HAMLET),
    'lom khom': SV(STOOP),
    'khóm tre': SV(BAMBOO),
    'chó đốm': SV(`${ground(92)}${DOG('#FFFFFF')}<g fill="#3A3B3C" stroke="none"><circle cx="46" cy="62" r="4"/><circle cx="60" cy="70" r="3.4"/><circle cx="36" cy="72" r="3"/></g>`),
    'mẹ ôm bé': SV(HOLD('me')),
    'cốm': SV(COM),
    'bơm xe': SV(PUMP),
    'rơm khô': SV(STRAW),
    'quả thơm': SV(PINEAPPLE),
    'Mẹ ôm bé, má mẹ kề má bé.': SV(HOLD('me')),
    'Bé thơm má mẹ.': SV(`${ground(96)}${at(-6, 8, 0.88, ADULT('me'))}${at(30, 34, 0.62, KID('#E86A4F'))}<path d="M30 30 C28 26 23 27 24 31 C25 34 30 36 30 37 C30 36 35 34 36 31 C37 27 32 26 30 30 Z" fill="#E86A4F"/>`),
    'Cả nhà ăn cơm, có cá, có cà chua.': SV(`${ground(96)}<rect x="4" y="66" width="92" height="8" rx="3" fill="#B47846"/>${at(0, 34, 0.36, RICEBOWL)}${at(34, 44, 0.34, FISH('#F2903A', '#E86A4F'))}${TOMATO(80, 58, 9)}${at(10, -6, 0.5, ADULT('bo'))}${at(52, -6, 0.5, ADULT('me'))}`)
  });


  /* ---------- Bài 29–33 (vần em êm im um, ai ay ây, oi ôi ơi, ui ưi, eo ao) ---------- */
  const STAMP = `<path d="M18 14 H82 V86 H18 Z" fill="#FFFFFF"/><path d="${Array.from({ length: 9 }, (_, i) => `M${18 + i * 8} 14 a3 3 0 0 0 0 0`).join(' ')}"/>${[14, 86].map(y => Array.from({ length: 9 }, (_, i) => `<circle cx="${18 + i * 8}" cy="${y}" r="3" fill="#F4F0EA" stroke="none"/>`).join('')).join('')}${[18, 82].map(x => Array.from({ length: 10 }, (_, i) => `<circle cx="${x}" cy="${14 + i * 8}" r="3" fill="#F4F0EA" stroke="none"/>`).join('')).join('')}` +
    `<rect x="26" y="22" width="48" height="56" fill="#BFE0F0"/><path d="M26 64 C36 50 46 56 52 60 C60 50 68 48 74 56 V78 H26 Z" fill="#6FAE4F" stroke="none"/><circle cx="60" cy="34" r="6" fill="#F2C14E" stroke="none"/>`;
  const NIGHTHOUSE = `${NIGHT}${at(14, 34, 0.6, HOUSE())}<rect x="34" y="72" width="7" height="7" fill="#F2E67A" stroke="none"/><rect x="58" y="72" width="7" height="7" fill="#F2E67A" stroke="none"/><g fill="#FFFFFF" stroke="none"><circle cx="18" cy="16" r="1.6"/><circle cx="46" cy="10" r="1.6"/><circle cx="60" cy="28" r="1.4"/></g>`;
  const ICECREAM = `<path d="M50 96 V74" stroke="#C9973F" stroke-width="6"/><path d="M30 76 V30 C30 10 70 10 70 30 V76 Z" fill="#F2B8C6"/><path d="M30 46 C40 52 46 42 52 48 C58 54 64 44 70 48 V30 C70 10 30 10 30 30 Z" fill="#8C5A32"/><circle cx="42" cy="26" r="2" fill="#F2C14E" stroke="none"/><circle cx="56" cy="22" r="2" fill="#6FAE4F" stroke="none"/>`;
  const ROLLS = `${PLATE}${[[30, 50, -10], [46, 46, 6], [62, 50, -6]].map(([x, y, a]) => `<g transform="rotate(${a} ${x} ${y})"><rect x="${x - 7}" y="${y - 16}" width="14" height="34" rx="7" fill="#D9963A"/><path d="M${x - 5} ${y - 6} h10 M${x - 5} ${y + 4} h10" stroke="#B8742A" stroke-width="1.6"/></g>`).join('')}${[[78, 54], [22, 62]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#7DB25A"/>`).join('')}`;
  const PORCH = `${ground(96)}${at(10, -6, 0.8, HOUSE('#E9C9A0', '#B4553C'))}<path d="M4 78 H96 V86 H4 Z M0 86 H100 V96 H0 Z" fill="#C8C3BC"/><path d="M4 78 H96 M0 86 H100" stroke-width="2"/>`;
  const TASTE = `${ground(96)}${at(-4, 8, 0.86, KID('#6FAE4F'))}<path d="M58 84 L64 60" stroke="${SKIN}" stroke-width="6"/><path d="M64 62 L52 48" stroke="#B9C0C8" stroke-width="4"/><ellipse cx="50" cy="46" rx="5" ry="3.6" fill="#D8DDE2"/>${at(60, 54, 0.4, POT())}`;
  const NEEDLE = `<path d="M20 82 L76 14" stroke="#9AA2AA" stroke-width="4"/><ellipse cx="72" cy="19" rx="2" ry="5" transform="rotate(40 72 19)" fill="#FFFFFF" stroke-width="1.5"/><path d="M72 19 C88 30 70 50 54 52 C36 54 30 70 44 80 C56 88 74 80 80 90" stroke="#D9473A" stroke-width="2.5" fill="none"/><ellipse cx="78" cy="78" rx="14" ry="10" fill="#E86A4F"/><path d="M66 74 H90 M66 80 H90" stroke="#C24E36" stroke-width="1.6"/>`;
  const SIM = `${BRANCHFRUIT([[38, 48], [52, 54], [64, 46], [46, 64], [60, 66]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="9" fill="#5E2E6E"/><path d="M${x - 3} ${y - 9} l3 2 l3 -2" stroke="#3E1E48" stroke-width="1.6"/>`).join(''))}`;
  const LOBSTER = `<g transform="rotate(-10 50 50)"><path d="M50 30 C62 30 64 50 62 64 L58 80 L66 92 H34 L42 80 L38 64 C36 50 38 30 50 30 Z" fill="#C2492E"/>${[46, 56, 66].map(y => `<path d="M40 ${y} H60" stroke="#8C3A2A" stroke-width="2"/>`).join('')}<path d="M40 34 C24 30 14 16 22 8 C28 14 34 16 38 22 M60 34 C76 30 86 16 78 8 C72 14 66 16 62 22" stroke="#C2492E" stroke-width="5" fill="none"/><ellipse cx="20" cy="10" rx="9" ry="6" fill="#C2492E"/><ellipse cx="80" cy="10" rx="9" ry="6" fill="#C2492E"/><circle cx="45" cy="32" r="2" fill="#3A3B3C" stroke="none"/><circle cx="55" cy="32" r="2" fill="#3A3B3C" stroke="none"/><path d="M46 28 C40 14 30 6 20 4 M54 28 C60 14 70 6 80 4" stroke="#8C3A2A" stroke-width="1.4" fill="none"/></g>`;
  const SCARFHEAD = `${ground(96)}${at(0, 4, 1, KID('#5B8FC9'))}<path d="M30 52 C26 26 74 26 70 52 C72 60 66 64 62 62 C60 44 40 44 38 62 C34 64 28 60 30 52 Z" fill="#E86A4F"/><path d="M60 62 L68 80 L58 78 Z" fill="#E86A4F"/>`;
  const LYCHEE = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#C8443A"/>${[[-0.4, -0.3], [0.3, -0.4], [0, 0.1], [-0.3, 0.4], [0.4, 0.3]].map(([a, b]) => `<path d="M${x + a * r - 2} ${y + b * r} l2 -2 l2 2" stroke="#8C2A22" stroke-width="1.2" fill="none"/>`).join('')}`;
  const CLOUD = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-30 10 C-42 10 -42 -8 -28 -8 C-28 -24 -6 -28 0 -16 C6 -30 30 -26 30 -10 C44 -10 44 10 30 10 Z" fill="#FFFFFF"/></g>`;
  const EAR = `<path d="M40 14 C70 8 84 30 78 54 C74 70 62 72 60 84 C58 94 42 94 40 86" fill="${SKIN}"/><path d="M46 30 C62 24 70 40 64 52 C58 62 52 58 52 50 C52 44 58 44 56 38" stroke="#D9A88A" stroke-width="3" fill="none"/><path d="M40 14 C30 30 30 70 40 86" stroke="${SKIN}" stroke-width="2"/>`;
  const BOTTLE = `<rect x="42" y="8" width="16" height="10" rx="2" fill="#5B8FC9"/><path d="M44 18 H56 V30 C70 36 72 44 72 54 V88 C72 92 68 94 64 94 H36 C32 94 28 92 28 88 V54 C28 44 30 36 44 30 Z" fill="#BFE0F0"/><path d="M28 60 H72 V88 C72 92 68 94 64 94 H36 C32 94 28 92 28 88 Z" fill="#7FB2D9" stroke="none"/><path d="M34 44 V80" stroke="#FFFFFF" stroke-width="3"/>`;
  const TRACTOR = `${ground(92)}<rect x="24" y="44" width="40" height="22" rx="3" fill="#D9473A"/><path d="M50 44 V22 H74 V66 H50" fill="#D9473A"/><rect x="54" y="26" width="16" height="16" fill="#DCEFF5"/><path d="M30 44 V32" stroke="#3A3B3C" stroke-width="4"/><circle cx="68" cy="72" r="18" fill="#3A3B3C"/><circle cx="68" cy="72" r="7" fill="#C8C3BC"/><circle cx="26" cy="78" r="12" fill="#3A3B3C"/><circle cx="26" cy="78" r="4.6" fill="#C8C3BC"/>`;
  const HAND_BIG = `<path d="M30 92 V60 C24 52 18 44 22 40 C26 36 32 44 36 50 V18 C36 12 44 12 44 18 V44 M44 14 C44 8 52 8 52 14 V44 M52 18 C52 12 60 12 60 18 V46 M60 26 C60 20 68 20 68 26 V60 C68 74 62 84 62 92 Z" fill="${SKIN}"/>`;
  const JUMPROPE = `${ground(96)}<path d="M20 64 C10 100 90 100 80 64" stroke="#E86A4F" stroke-width="3" fill="none"/>${at(0, -4, 1, KID_FULL('#F2C14E'))}<path d="M36 94 V90 M64 94 V90" stroke="#FFFFFF" stroke-width="0"/>`;
  const TEACHERS = `${ground(96)}${at(-12, 10, 0.84, ADULT('bo'))}${at(44, 10, 0.84, ADULT('co'))}`;
  const MASON = `${ground(96)}${[0, 1, 2, 3].map(r => Array.from({ length: 4 }, (_, i) => `<rect x="${44 + i * 13 + (r % 2) * 6}" y="${82 - r * 10}" width="12" height="9" fill="#C2492E"/>`).join('')).join('')}${at(-10, 4, 0.8, ADULT('bo'))}<path d="M52 56 L62 46" stroke="${SKIN}" stroke-width="6"/><path d="M62 46 L74 40 L70 50 Z" fill="#9AA2AA"/><path d="M2 26 C10 10 50 8 58 24 Z" fill="#F2C14E"/>`;
  const ORANGETREE = `${ground(94)}${TREE.replace(/#7DB25A/g, '#6FA84A').replace('M50 90 V56', 'M50 94 V56')}${[[38, 34], [58, 30], [48, 48], [66, 50], [32, 52]].map(([x, y]) => ORANGE(x, y, 6)).join('')}`;
  const RICEFIELD = `<path d="M0 0 H100 V44 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 44 H100 V100 H0 Z" fill="#A9D3E4" stroke="none"/>${[52, 64, 76, 88].map(y => Array.from({ length: 7 }, (_, i) => `<path d="M${8 + i * 14} ${y} l-3 -8 M${8 + i * 14} ${y} l3 -8 M${8 + i * 14} ${y} v-9" stroke="#6FAE4F" stroke-width="2"/>`).join('')).join('')}`;
  const CALL = `${ground(96)}${at(-6, 8, 0.88, ADULT('me', 'sing'))}<path d="M48 48 C56 46 58 54 52 56" stroke="${SKIN}" stroke-width="6"/><path d="M62 36 q6 6 0 12 M70 30 q10 10 0 24 M78 24 q14 14 0 36" stroke="#A39588" stroke-width="2.6" fill="none"/>`;
  const LIPS = `<path d="M10 52 C24 30 40 32 50 40 C60 32 76 30 90 52 C70 50 30 50 10 52 Z" fill="#D9473A"/><path d="M10 52 C30 80 70 80 90 52 C70 56 30 56 10 52 Z" fill="#E86A6A"/><path d="M14 52 C34 56 66 56 86 52" stroke="#8C2A22" stroke-width="2"/><ellipse cx="36" cy="64" rx="8" ry="3" fill="#F2A0A0" stroke="none"/>`;
  const SWIM = `${WATER(40)}<path d="M0 40 H100" stroke="#5B8FC9" stroke-width="2"/><circle cx="52" cy="42" r="13" fill="${SKIN}"/><path d="M39 40 C38 26 66 26 65 40 C60 32 44 32 39 40 Z" fill="${HAIR}"/>${eyes(47, 57, 42, 2)}<path d="M38 52 C28 46 18 50 12 44 M66 52 C76 46 86 50 92 44" stroke="${SKIN}" stroke-width="6"/><path d="M8 50 q6 -4 12 0 M80 50 q6 -4 12 0" stroke="#FFFFFF" stroke-width="2"/>`;
  const LOOKOUT = `${ground(94)}<path d="M28 94 L40 46 M72 94 L60 46 M32 76 H68 M36 60 H64" stroke="#8C5A32" stroke-width="4"/><rect x="34" y="40" width="32" height="8" fill="#B47846"/><path d="M28 42 L50 12 L72 42 Z" fill="#D9B45A"/><path d="M34 40 L50 16 M66 40 L50 16" stroke="#B48A35" stroke-width="2"/>${at(10, 54, 0.5, GRASS(1))}`;
  const WHISTLE = `<path d="M14 46 H58 C74 46 86 56 86 68 C86 82 74 90 60 90 C46 90 36 80 36 68 V60 H14 Z" fill="#C8CCD0"/><circle cx="60" cy="68" r="10" fill="#9AA2AA"/><rect x="40" y="46" width="8" height="8" fill="#3A3B3C" stroke="none"/><path d="M14 46 V60" stroke-width="2.5"/><path d="M78 50 C86 30 70 14 52 16" stroke="#D9473A" stroke-width="3" fill="none"/>`;
  const ELEPHANT = `${ground(92)}<ellipse cx="54" cy="56" rx="34" ry="24" fill="#A8B0B8"/><path d="M30 72 V92 M46 76 V92 M66 76 V92 M80 70 V92" stroke="#A8B0B8" stroke-width="11"/><path d="M88 52 q8 8 2 16" stroke="#A8B0B8" stroke-width="3"/>` +
    `<circle cx="26" cy="44" r="18" fill="#A8B0B8"/><path d="M36 34 C50 26 52 52 38 56 Z" fill="#9098A2"/><path d="M12 50 C4 60 6 76 14 82" stroke="#A8B0B8" stroke-width="10" fill="none"/><path d="M14 54 C18 58 20 62 18 66" stroke="#FFFFFF" stroke-width="3"/><circle cx="20" cy="40" r="2.4" fill="#3A3B3C" stroke="none"/>`;
  const RICEPOT = `${POT(`<path d="M18 48 C24 30 76 30 82 48 Z" fill="#FFFFFF"/>`)}`;
  const BROOM = `<path d="M70 8 L48 58" stroke="#B47846" stroke-width="5"/><path d="M48 56 L26 92 H70 L60 58 Z" fill="#E9C25A"/>${[32, 40, 48, 56, 64].map(x => `<path d="M${x + 2} 92 L${52 - (52 - x) * 0.4} 62" stroke="#C9A040" stroke-width="1.6"/>`).join('')}<path d="M46 62 H62" stroke="#D9473A" stroke-width="4"/>`;
  const TOYS = `${ground(92)}<rect x="8" y="58" width="24" height="24" rx="3" fill="#E86A4F"/><rect x="34" y="58" width="24" height="24" rx="3" fill="#5B8FC9"/><rect x="21" y="34" width="24" height="24" rx="3" fill="#F2C14E"/><circle cx="76" cy="70" r="16" fill="#6FAE4F"/><path d="M60 70 H92 M76 54 V86" stroke="#FFFFFF" stroke-width="3"/><path d="M80 18 L88 30 M88 30 L72 40 L80 18" fill="#E58FA0" stroke-width="2"/>`;
  const CLOTHESLINE = `${ground(94)}<path d="M8 94 V20 M92 94 V20" stroke="#8C5A32" stroke-width="4"/><path d="M8 24 C30 32 70 32 92 24" stroke-width="2"/>${at(14, 26, 0.36, SHIRT('#5B8FC9'))}${at(54, 26, 0.36, SHIRT('#E58FA0'))}${at(40, 20, 0.6, `<rect x="0" y="12" width="14" height="36" fill="#F2C14E"/><rect x="18" y="12" width="14" height="36" fill="#F2C14E"/><rect x="0" y="6" width="32" height="10" fill="#E9A63A"/>`)}<circle cx="80" cy="12" r="0"/>`;
  const BAT = `<path d="M0 0 H100 V100 H0 Z" fill="#2E3A5C" stroke="none"/><circle cx="78" cy="22" r="10" fill="#F2E6B8" stroke="none"/><path d="M50 50 C40 36 24 36 8 44 C14 48 16 54 14 60 C22 56 30 58 34 62 C38 56 44 56 50 60 C56 56 62 56 66 62 C70 58 78 56 86 60 C84 54 86 48 92 44 C76 36 60 36 50 50 Z" fill="#5E5A58"/><circle cx="50" cy="52" r="8" fill="#6B6560"/><path d="M45 44 l2 -6 l3 5 M55 44 l-2 -6 l-3 5" fill="#6B6560"/><circle cx="47" cy="51" r="1.4" fill="#F2E6B8" stroke="none"/><circle cx="53" cy="51" r="1.4" fill="#F2E6B8" stroke="none"/>`;
  const MOUNTAINS = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 80 L30 26 L52 62 L70 34 L100 80 V100 H0 Z" fill="#6FA84A"/><path d="M22 40 L30 26 L38 40 Z M64 44 L70 34 L76 44 Z" fill="#FFFFFF" stroke="none"/><path d="M0 84 C30 70 70 74 100 82 V100 H0 Z" fill="#9BC46A"/>`;
  const MAILBOX = `${ground(96)}<path d="M66 96 V62" stroke="#8C5A32" stroke-width="5"/><rect x="52" y="32" width="38" height="32" rx="10" fill="#E8B83A"/><rect x="58" y="42" width="24" height="5" rx="2" fill="#3A3B3C"/>${at(-6, 8, 0.84, KID('#5B8FC9'))}<path d="M54 80 L60 50" stroke="${SKIN}" stroke-width="6"/>${at(48, 30, 0.22, MAIL)}`;
  const BAG = `<path d="M34 34 C34 10 66 10 66 34" stroke="#8C4A2E" stroke-width="5" fill="none"/><path d="M18 34 H82 L76 90 H24 Z" fill="#D9473A"/><path d="M18 34 H82 V48 H18 Z" fill="#B4553C"/><rect x="44" y="44" width="12" height="8" rx="2" fill="#F2C14E"/>`;
  const FIREWOOD = `${ground(92)}${[[20, 70], [38, 72], [56, 70], [74, 72], [28, 54], [46, 56], [64, 54], [37, 38], [55, 40]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="#C68B59"/><circle cx="${x}" cy="${y}" r="4" fill="#E9C9A0" stroke="none"/>`).join('')}<path d="M10 62 C40 56 60 56 90 62" stroke="#6E8F3A" stroke-width="4"/>`;
  const DRUMSTICK = `<path d="M70 66 L86 82" stroke="#FFF6E6" stroke-width="10"/><circle cx="88" cy="78" r="6" fill="#FFF6E6"/><circle cx="82" cy="86" r="6" fill="#FFF6E6"/><path d="M40 16 C64 14 80 40 74 62 C70 74 56 76 44 70 C24 60 16 20 40 16 Z" fill="#C9772E"/><path d="M36 26 C46 24 56 32 58 42" stroke="#E8A65A" stroke-width="4" fill="none"/>`;
  const SNIFF = `${ground(96)}${at(-4, 8, 0.86, KID('#E58FA0'))}<path d="M56 80 L66 56" stroke="${SKIN}" stroke-width="6"/><path d="M68 56 V40" stroke="#6E8F3A" stroke-width="3"/>${FLOWER(68, 32, 8, '#E86A4F')}<circle cx="68" cy="32" r="4" fill="#F2C14E"/><path d="M60 28 q-4 -4 -2 -8 M56 34 q-6 -2 -6 -8" stroke="#A39588" stroke-width="2" fill="none"/>`;
  const GIVE = `${ground(96)}${at(-12, 8, 0.86, ADULT('ba'))}${at(48, 32, 0.64, KID('#6FAE4F'))}<path d="M40 80 C46 74 54 74 60 76" stroke="${SKIN}" stroke-width="6"/>${at(32, 56, 0.28, `<rect x="10" y="20" width="80" height="60" fill="#D9B27A"/><path d="M10 20 L50 50 L90 20 M50 50 V80" stroke="#B48A35" stroke-width="3"/>`)}`;
  const CAT = `${ground(92)}<path d="M76 74 C92 70 94 50 84 40" stroke="#8C8478" stroke-width="7" fill="none"/><ellipse cx="56" cy="72" rx="24" ry="18" fill="#A39588"/><path d="M42 86 v6 M68 86 v6" stroke="#8C8478" stroke-width="7"/>` +
    `<circle cx="36" cy="50" r="18" fill="#A39588"/><path d="M22 40 L20 22 L34 34 Z M50 40 L52 22 L38 34 Z" fill="#A39588"/><path d="M24 36 L22 26 L30 33 Z M48 36 L50 26 L42 33 Z" fill="#F2B8C0" stroke="none"/>${eyes(30, 42, 48, 2.4)}<path d="M36 54 l-2 -2 h4 Z" fill="#E58FA0"/><path d="M36 56 q-3 3 -6 1 M36 56 q3 3 6 1 M22 54 H12 M22 58 L13 61 M50 54 H60 M50 58 L59 61" stroke-width="1.4"/>`;
  const STAR = (x, y, r, c = '#F2C14E') => `<path d="${Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; return (i ? 'L' : 'M') + (x + rr * Math.cos(a)).toFixed(1) + ' ' + (y + rr * Math.sin(a)).toFixed(1); }).join(' ')} Z" fill="${c}"/>`;
  const SCISSORS = `<path d="M50 50 L86 14 M50 50 L90 30" stroke="#9AA2AA" stroke-width="7"/><circle cx="28" cy="70" r="13" fill="none" stroke="#E86A4F" stroke-width="7"/><circle cx="56" cy="80" r="13" fill="none" stroke="#E86A4F" stroke-width="7"/><path d="M36 62 L50 50 L52 68" stroke="#E86A4F" stroke-width="7"/><circle cx="50" cy="50" r="3" fill="#3A3B3C"/>`;
  const CLIMB = `${ground(96)}<path d="M50 96 V20" stroke="#8C5A32" stroke-width="12"/><circle cx="50" cy="20" r="20" fill="#7DB25A"/><circle cx="30" cy="30" r="12" fill="#7DB25A"/><circle cx="70" cy="30" r="12" fill="#7DB25A"/><g transform="rotate(-8 50 60)">${at(28, 30, 0.6, KID_FULL('#E86A4F', true))}</g>`;
  const CANDY = `<path d="M30 50 L8 34 V66 Z M70 50 L92 34 V66 Z" fill="#F2B8C6"/><ellipse cx="50" cy="50" rx="24" ry="18" fill="#E86A8A"/><path d="M36 38 C46 46 46 56 38 64 M52 34 C62 44 62 58 54 66" stroke="#FFFFFF" stroke-width="3" fill="none"/>`;
  const KNIFE = `<path d="M10 62 H58 V72 H18 C12 72 10 68 10 62 Z" fill="#8C5A32"/><path d="M58 58 H92 C92 70 80 76 58 76 Z" fill="#C8CCD0"/><path d="M58 58 V76" stroke-width="2"/><circle cx="24" cy="67" r="2" fill="#E9C9A0" stroke="none"/><circle cx="42" cy="67" r="2" fill="#E9C9A0" stroke="none"/>`;
  const GREET = `${ground(96)}${at(-12, 8, 0.86, ADULT('co'))}${at(44, 22, 0.74, KID('#5B8FC9'))}<path d="M62 84 L80 76 M84 84 L66 76" stroke="${SKIN}" stroke-width="6"/>`;

  Object.assign(T, {
    /* Bài 29 · em êm im um */
    'tem thư': SV(STAMP),
    'ban đêm': SV(NIGHTHOUSE),
    'chú chim': SV(`${at(0, 4, 0.9, BIRD('#5B8FC9', '#3F6FA6'))}`),
    'chùm nho': SV(GRAPES()),
    'que kem': SV(ICECREAM),
    'ngõ hẻm': SV(ALLEY),
    'nem rán': SV(ROLLS),
    'ghế đệm': SV(`${ground(92)}${ARMCHAIR}`),
    'thềm nhà': SV(PORCH),
    'bé nếm': SV(TASTE),
    'kim chỉ': SV(NEEDLE),
    'chim sẻ': SV(`${at(10, 14, 0.76, BIRD('#A0714A', '#6B4A2E'))}<path d="M0 92 C30 86 70 88 100 84" stroke="#8C5A32" stroke-width="5"/>`),
    'quả sim': SV(SIM),
    'tôm hùm': SV(LOBSTER),
    'trùm khăn': SV(SCARFHEAD),
    'chùm khế': SV(`${BRANCHFRUIT(`${STARFRUIT(36, 52, 0.5)}${STARFRUIT(62, 58, 0.5)}${STARFRUIT(48, 74, 0.5)}`)}`),
    'Ban đêm, chú chó ngủ ở thềm nhà.': SV(`${NIGHT}${at(6, 12, 0.7, HOUSE())}<path d="M2 82 H98" stroke="#C8C3BC" stroke-width="5"/>${at(50, 46, 0.42, DOG())}<path d="M86 52 h6 l-6 6 h6" stroke="#FFFFFF" stroke-width="2"/>`),
    'Chợ ở ngõ hẻm, mẹ đi bộ ra chợ.': SV(`${ALLEY}${at(28, 32, 0.5, STALL())}${at(-4, 34, 0.66, KID_FULL('#E58FA0', true).replace(/#E58FA0/g, '#E58FA0'))}`),
    'Mẹ mua cam, mua kim chỉ và cả chùm nho cho bé.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('me'))}${at(36, 60, 0.3, CREEL(`${ORANGE(30, 40, 12)}${ORANGE(54, 36, 12)}`))}${at(62, 32, 0.4, GRAPES())}${at(60, 66, 0.26, NEEDLE)}`),

    /* Bài 30 · ai ay ây */
    'quả vải': SV(`${BRANCHFRUIT(`${LYCHEE(38, 50, 11)}${LYCHEE(58, 56, 11)}${LYCHEE(46, 72, 11)}`)}`),
    'máy bay': SV(PLANE),
    'đám mây': SV(`<path d="M0 0 H100 V100 H0 Z" fill="#BFE0F0" stroke="none"/>${CLOUD(50, 46, 1.2)}${CLOUD(22, 80, 0.5)}`),
    'gà mái': SV(`${ground(92)}${at(0, 4, 0.94, HEN)}`),
    'cái tai': SV(EAR),
    'cái chai': SV(BOTTLE),
    'máy cày': SV(TRACTOR),
    'bàn tay': SV(HAND_BIG),
    'nhảy dây': SV(JUMPROPE),
    'thầy cô': SV(TEACHERS),
    'thợ xây': SV(MASON),
    'cây cam': SV(ORANGETREE),
    'Mẹ Hải cấy lúa, bố Hải lái máy cày.': SV(`${RICEFIELD}${at(-6, 20, 0.6, ADULT('me'))}${at(44, 30, 0.56, TRACTOR)}`),
    'Cô dạy bé vẽ máy bay.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('co'))}${at(40, 16, 0.6, SKETCH(at(10, 10, 0.8, PLANE.replace('<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/>', ''))))}`),
    'Ngày mai, bé chú ý nghe cô dạy.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('co', 'sing'))}${at(44, 32, 0.64, KID('#6FAE4F'))}${TALK}`),

    /* Bài 31 · oi ôi ơi */
    'mẹ gọi': SV(CALL),
    'đôi môi': SV(LIPS),
    'đi bơi': SV(SWIM),
    'cái chòi': SV(LOOKOUT),
    'cái còi': SV(WHISTLE),
    'con voi': SV(ELEPHANT),
    'bà nội': SV(`${ground(96)}${at(8, 8, 0.9, ADULT('ba'))}`),
    'nồi cơm': SV(RICEPOT),
    'cái chổi': SV(BROOM),
    'đồ chơi': SV(TOYS),
    'phơi đồ': SV(CLOTHESLINE),
    'con dơi': SV(BAT),
    'Bé Hà ngồi ở chòi mới, chơi đồ chơi.': SV(`${LOOKOUT}${at(36, 22, 0.3, KID('#E58FA0'))}${at(56, 64, 0.34, TOYS)}`),
    'Chú Ngợi là bộ đội, chú giỏi bơi lội.': SV(`${WATER(56)}${at(10, 2, 0.8, ADULT('bo'))}<path d="M18 22 C20 6 64 6 66 22 Z" fill="#5E7A3A"/><path d="M14 22 H70" stroke="#4E6A2E" stroke-width="4"/>`),
    'Hè về, chú dạy bé bơi.': SV(`${WATER(46)}${at(-10, 10, 0.64, ADULT('bo'))}${at(40, 14, 0.7, SWIM.replace(WATER(40), '').replace('<path d="M0 40 H100" stroke="#5B8FC9" stroke-width="2"/>', ''))}<circle cx="86" cy="14" r="8" fill="#F2C14E"/>`),

    /* Bài 32 · ui ưi */
    'đồi núi': SV(MOUNTAINS),
    'gửi thư': SV(MAILBOX),
    'cái túi': SV(BAG),
    'bó củi': SV(FIREWOOD),
    'đùi gà': SV(DRUMSTICK),
    'ngửi mùi': SV(SNIFF),
    'gửi quà': SV(GIVE),
    'Bà gửi cho bé Mùi cái túi đỏ.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('ba'))}${at(48, 32, 0.64, KID('#E58FA0'))}${at(30, 56, 0.34, BAG)}`),
    'Mùi gửi thư cho Mai, kể về quê Mùi.': SV(`${at(0, 0, 1, MAILBOX.replace("KID('#5B8FC9')", ''))}`),
    'Quê Mùi có núi đồi, có cả nghề đan nón.': SV(`${MOUNTAINS}${at(10, 50, 0.4, HUT)}${at(58, 76, 0.7, NONLA)}`)
  });
  Object.assign(T, {
    /* Bài 33 · eo ao */
    'con mèo': SV(CAT),
    'ngôi sao': SV(`<rect x="2" y="2" width="96" height="96" rx="8" fill="#2E3A5C"/>${STAR(50, 52, 34)}${STAR(16, 18, 6)}${STAR(84, 84, 5)}`),
    'cái kéo': SV(SCISSORS),
    'leo trèo': SV(CLIMB),
    'cái kẹo': SV(CANDY),
    'áo mới': SV(`${SHIRT('#5B8FC9')}${STAR(80, 14, 7)}${STAR(16, 20, 5)}`),
    'con dao': SV(KNIFE),
    'chào cô': SV(GREET),
    'Mèo con leo cây cao.': SV(`${ground(96)}<path d="M50 96 V20" stroke="#8C5A32" stroke-width="12"/><circle cx="50" cy="16" r="18" fill="#7DB25A"/><circle cx="30" cy="26" r="11" fill="#7DB25A"/><circle cx="70" cy="26" r="11" fill="#7DB25A"/>${at(36, 30, 0.42, CAT.replace(ground(92), ''))}`),
    'Nai con thấy thế, đòi leo theo mèo.': SV(`${ground(94)}<path d="M74 94 V20" stroke="#8C5A32" stroke-width="10"/><circle cx="74" cy="18" r="16" fill="#7DB25A"/>${at(60, 26, 0.34, CAT.replace(ground(92), ''))}${at(-4, 30, 0.66, GOAT.replace(/#F6F2EA/g, '#C9915A').replace(/#E8E2D8/g, '#A8743E'))}`),
    'Bé có áo mới, bé chào bà.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('ba'))}${at(44, 22, 0.74, KID('#5B8FC9'))}<path d="M62 84 L80 76 M84 84 L66 76" stroke="${SKIN}" stroke-width="6"/>${STAR(86, 50, 5)}`)
  });


  /* ---------- Bài 34–38 (vần au âu êu, iu ưu, ac ăc âc, oc ôc uc ưc, at ăt ât) ---------- */
  const ARECA = `${ground(94)}<path d="M50 94 V30" stroke="#A39588" stroke-width="6"/>${[-60, -30, 0, 30, 60].map(a => `<path d="M50 30 C${50 + a * 0.5} 20 ${50 + a} 16 ${50 + a * 0.9} 30" stroke="#6FAE4F" stroke-width="4" fill="none"/>`).join('')}${[[44, 40], [56, 40], [50, 46], [44, 50], [56, 50]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#6FAE4F"/>`).join('')}`;
  const ARECA_FRUIT = `${ground(90)}${[[34, 62], [56, 66], [44, 44]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="13" ry="16" fill="#8CC063"/><path d="M${x - 4} ${y - 16} l4 -4 l4 4" fill="#6E8F3A"/>`).join('')}<ellipse cx="74" cy="76" rx="12" ry="9" fill="#F2B134"/>`;
  const BRIDGE_ARCH = `${WATER(66)}<path d="M0 60 C30 26 70 26 100 60 V66 C70 36 30 36 0 66 Z" fill="#C8443A"/><path d="M0 52 C30 18 70 18 100 52" stroke="#8C3A2A" stroke-width="3" fill="none"/>${[14, 30, 50, 70, 86].map(x => `<path d="M${x} ${x === 50 ? 22 : x < 50 ? 50 - x * 0.6 : 50 - (100 - x) * 0.6} V${x === 50 ? 30 : 56 - Math.abs(50 - x) * 0}" stroke="#8C3A2A" stroke-width="2"/>`).join('')}`;
  const NEU = `${ground(94)}<path d="M50 94 V12" stroke="#8C9A5A" stroke-width="5"/><path d="M50 14 C40 10 34 18 38 24 M50 14 C60 10 66 18 62 24" stroke="#6FAE4F" stroke-width="3" fill="none"/>${[36, 48, 60].map((y, i) => `<path d="M50 ${y} L${36 - i * 2} ${y + 14} M50 ${y} L${64 + i * 2} ${y + 14}" stroke="#C9973F" stroke-width="1.6"/><circle cx="${36 - i * 2}" cy="${y + 16}" r="3" fill="${['#D9473A', '#F2C14E', '#5B8FC9'][i]}"/><circle cx="${64 + i * 2}" cy="${y + 16}" r="3" fill="${['#F2C14E', '#5B8FC9', '#D9473A'][i]}"/>`).join('')}`;
  const CABBAGE = `${ground(92)}<ellipse cx="50" cy="66" rx="38" ry="24" fill="#8CC063"/>${[[-26, -10], [0, -18], [24, -8]].map(([dx, dy]) => `<path d="M50 80 C${50 + dx} ${66 + dy} ${50 + dx * 1.4} ${40 + dy} ${50 + dx * 0.8} ${30 + dy}" stroke="#4E8A3A" stroke-width="2" fill="none"/>`).join('')}<path d="M24 54 C30 34 70 34 76 54" fill="#B9D86A"/><path d="M40 92 V84 M60 92 V84" stroke="#F4F0EA" stroke-width="5"/>`;
  const SHIP = `${WATER(66)}<path d="M6 60 H94 L82 80 H18 Z" fill="#D9473A"/><path d="M6 60 H94" stroke-width="3"/><rect x="24" y="40" width="50" height="20" rx="2" fill="#FFFFFF"/>${[30, 42, 54, 66].map(x => `<circle cx="${x}" cy="50" r="3.4" fill="#7FB2D9"/>`).join('')}<rect x="40" y="24" width="10" height="16" fill="#3A3B3C"/><rect x="40" y="24" width="10" height="5" fill="#D9473A" stroke="none"/><path d="M48 20 q4 -6 0 -12" stroke="#C8C3BC" stroke-width="3" fill="none"/>`;
  const MOP = `<path d="M0 82 H100 V100 H0 Z" fill="#E9C9A0" stroke="none"/>${at(-4, 2, 0.8, KID_FULL('#5B8FC9', true))}<path d="M60 52 L80 88" stroke="#B47846" stroke-width="4"/><path d="M70 88 C74 82 88 82 92 88 L94 96 H68 Z" fill="#DCEFF5"/><path d="M50 90 q6 -2 12 0" stroke="#7FB2D9" stroke-width="2"/>`;
  const STRAWB = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-16 -8 C-16 -20 16 -20 16 -8 C16 10 4 22 0 22 C-4 22 -16 10 -16 -8 Z" fill="#D9473A"/>${[[-8, -6], [4, -8], [-2, 4], [8, 4], [-8, 8]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="1.2" ry="1.8" fill="#F2D24E" stroke="none"/>`).join('')}<path d="M-10 -16 L-4 -12 L0 -20 L4 -12 L10 -16 L6 -8 H-6 Z" fill="#6FAE4F"/></g>`;
  const CATERPILLAR = `${ground(84)}<path d="M4 84 C30 76 70 78 96 82" stroke="#8C5A32" stroke-width="5" fill="none"/>${[18, 30, 42, 54, 66].map((x, i) => `<circle cx="${x}" cy="${70 - (i % 2) * 6}" r="9" fill="#8CC063"/>`).join('')}<circle cx="80" cy="60" r="11" fill="#8CC063"/><circle cx="84" cy="56" r="2" fill="#3A3B3C" stroke="none"/><path d="M78 50 l-4 -8 M84 50 l2 -8" stroke-width="2"/>`;
  const GRASSHOPPER = `${ground(86)}<path d="M20 60 C30 46 66 44 78 54 L86 60 L76 64 C60 70 32 72 20 60 Z" fill="#7DB25A"/><path d="M40 54 L58 34 L76 58" stroke="#5E8F3A" stroke-width="4" fill="none"/><path d="M58 34 L66 82" stroke="#5E8F3A" stroke-width="3"/><path d="M30 66 l-6 18 M42 68 l2 18" stroke="#5E8F3A" stroke-width="2.4"/><circle cx="78" cy="56" r="2.4" fill="#3A3B3C" stroke="none"/><path d="M82 54 C88 40 92 30 96 24 M80 52 C82 38 80 28 76 20" stroke="#5E8F3A" stroke-width="1.6" fill="none"/>`;
  const EMBROIDER = `<circle cx="50" cy="52" r="38" fill="#C9973F"/><circle cx="50" cy="52" r="33" fill="#FFFFFF"/>${FLOWER(46, 50, 10, '#E86A4F')}<circle cx="46" cy="50" r="5" fill="#F2C14E"/><path d="M58 64 C66 62 70 68 64 72" stroke="#6FAE4F" stroke-width="3" fill="none"/><path d="M70 30 L92 6" stroke="#9AA2AA" stroke-width="2.4"/><path d="M70 30 C66 40 60 44 58 50" stroke="#E86A4F" stroke-width="1.6" fill="none"/>`;
  const TENT = `${ground(92)}<path d="M8 92 L50 20 L92 92 Z" fill="#F2903A"/><path d="M50 20 L40 92 H60 Z" fill="#B4553C"/><path d="M50 20 V10" stroke-width="3"/><path d="M50 10 L64 14 L50 18" fill="#F2C14E"/>`;
  const POUT = `${ground(96)}${KID('#E58FA0').replace('<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>', '<path d="M44 60 q6 -5 12 0" stroke-width="2.4"/>')}<path d="M40 54 q-1 4 0 6" stroke="#7FB2D9" stroke-width="2.4"/>`;
  const AXE = `<path d="M30 92 L66 22" stroke="#B47846" stroke-width="7"/><path d="M56 14 C70 6 90 14 90 30 C80 30 70 36 64 40 Z" fill="#9AA2AA"/><path d="M56 14 L64 40" stroke-width="2"/>`;
  const SHEEP = `${ground(90)}<path d="M30 72 V90 M44 74 V90 M60 74 V90 M72 72 V90" stroke="#5E5A58" stroke-width="6"/>${[[30, 56], [44, 50], [58, 50], [70, 56], [36, 68], [52, 70], [66, 68]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="12" fill="#F6F2EA"/>`).join('')}<ellipse cx="20" cy="54" rx="10" ry="13" fill="#5E5A58"/><circle cx="16" cy="52" r="1.8" fill="#FFFFFF" stroke="none"/><path d="M26 44 C34 40 34 50 28 50" fill="#5E5A58"/>`;
  const SLING = `${ground(96)}${at(-8, 8, 0.86, ADULT('me'))}<path d="M24 60 C40 76 56 82 66 70" stroke="#5B8FC9" stroke-width="8" fill="none"/><circle cx="56" cy="70" r="9" fill="${SKIN}"/><path d="M48 66 C50 58 62 58 64 66 C58 62 52 62 48 66 Z" fill="${HAIR}"/><path d="M48 74 C52 84 66 84 70 72" fill="#5B8FC9"/>`;
  const SINGBIRDS = `<path d="M0 74 C30 70 70 72 100 66" stroke="#8C5A32" stroke-width="5" fill="none"/>${at(0, 26, 0.5, BIRD('#F2C14E', '#D9A23A'))}${at(46, 22, 0.5, BIRD('#E86A4F', '#C24E36'))}${NOTES}<g transform="translate(-50 10)">${NOTES}</g>`;
  const TINY = `${ground(92)}${at(0, 0, 1, ELEPHANT.replace(ground(92), ''))}${at(74, 64, 0.26, KID_FULL('#E86A4F'))}`;
  const POMEGRANATE = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#C8443A"/><path d="M${x - r * 0.3} ${y - r} l${r * 0.1} ${-r * 0.3} l${r * 0.2} ${r * 0.2} l${r * 0.2} ${-r * 0.2} l${r * 0.1} ${r * 0.3} Z" fill="#A8322A"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.3}" r="${r * 0.15}" fill="#E87A6A" stroke="none"/>`;
  const POSTMAN = `${ground(96)}${at(-6, 8, 0.86, ADULT('bo'))}<path d="M14 30 C14 12 70 12 70 30 Z" fill="#3E8E4A"/><path d="M8 30 H72" stroke="#2E6A3A" stroke-width="4"/><path d="M26 60 L64 92" stroke="#8C5A32" stroke-width="4"/><rect x="50" y="70" width="34" height="24" rx="3" fill="#B47846"/>${at(54, 68, 0.26, MAIL)}`;
  const RETIRE = `${ground(96)}${at(0, 30, 0.9, `<rect x="6" y="40" width="70" height="10" rx="3" fill="#B47846"/><path d="M10 50 L4 66 M72 50 L78 66" stroke="#8C5A32" stroke-width="4"/>`)}${at(4, 0, 0.8, ADULT('bo'))}<path d="M10 30 C10 18 32 14 40 16" stroke="#C8C3BC" stroke-width="5" fill="none"/>${at(56, 46, 0.36, TEACUP)}`;
  const PEANUT = `${[[30, 52, -20], [62, 48, 25], [46, 74, 0]].map(([x, y, a]) => `<g transform="rotate(${a} ${x} ${y})"><path d="M${x - 10} ${y - 16} C${x - 18} ${y - 6} ${x - 8} ${y} ${x - 12} ${y + 8} C${x - 16} ${y + 20} ${x + 12} ${y + 20} ${x + 8} ${y + 8} C${x + 6} ${y} ${x + 16} ${y - 6} ${x + 8} ${y - 16} C${x + 2} ${y - 24} ${x - 4} ${y - 24} ${x - 10} ${y - 16} Z" fill="#D9B27A"/><path d="M${x - 6} ${y - 8} h10 M${x - 6} ${y + 6} h10" stroke="#B48A55" stroke-width="1.6"/></g>`).join('')}`;
  const HANGER = `<path d="M50 30 V20 C50 12 60 12 60 18" stroke="#8C5A32" stroke-width="3" fill="none"/><path d="M50 30 L14 50 H86 Z" stroke="#8C5A32" stroke-width="3" fill="none"/>${at(14, 44, 0.72, SHIRT('#E58FA0'))}`;
  const GAC = `${ground(92)}<ellipse cx="46" cy="58" rx="30" ry="32" fill="#D9473A"/>${Array.from({ length: 24 }, (_, i) => `<circle cx="${24 + (i * 13) % 44}" cy="${34 + (i * 7) % 48}" r="1.8" fill="#A8322A" stroke="none"/>`).join('')}<path d="M46 26 q4 -10 14 -14" stroke="#6E8F3A" stroke-width="3"/><path d="M70 66 C82 62 90 74 86 86 C76 90 66 82 70 66 Z" fill="#F2903A"/>`;
  const MUSIC = `<rect x="14" y="14" width="72" height="72" rx="4" fill="#FFFFFF"/>${[30, 38, 46, 54, 62].map(y => `<path d="M20 ${y} H80" stroke="#A39588" stroke-width="1.4"/>`).join('')}<g fill="#3A3B3C" stroke="none"><ellipse cx="34" cy="54" rx="5" ry="4"/><ellipse cx="54" cy="46" rx="5" ry="4"/><ellipse cx="70" cy="58" rx="5" ry="4"/></g><path d="M39 54 V30 M59 46 V24 M75 58 V34 M59 24 L75 34" stroke-width="2.4"/>`;
  const DOCTOR = `${ground(96)}${at(-4, 8, 0.86, ADULT('bo').replace('#5B8FC9', '#FFFFFF'))}<path d="M28 66 C26 80 40 86 46 78 M46 78 C50 72 56 76 54 82" stroke="#3A3B3C" stroke-width="2.4" fill="none"/><circle cx="55" cy="84" r="4" fill="#9AA2AA"/><path d="M54 70 V84 M47 77 H61" stroke="#3E8E4A" stroke-width="0"/>`;
  const CRANE = `${ground(94)}<path d="M44 94 L48 66 M56 94 L52 66" stroke="#3A3B3C" stroke-width="2.4"/><ellipse cx="50" cy="60" rx="20" ry="12" fill="#FFFFFF"/><path d="M30 58 C26 60 22 66 26 70 L40 64 Z" fill="#3A3B3C"/><path d="M64 56 C70 40 66 26 60 18" stroke="#FFFFFF" stroke-width="5" fill="none"/><path d="M64 56 C70 40 66 26 60 18" stroke-width="1.5" fill="none"/><circle cx="60" cy="16" r="5" fill="#FFFFFF"/><circle cx="60" cy="12" r="2.4" fill="#D9473A" stroke="none"/><path d="M56 17 L40 20 L56 20" fill="#C9973F"/>`;
  const SHAKE = `${ground(96)}${KID('#6FAE4F').replace('<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>', '<path d="M45 59 h10" stroke-width="2.4"/>')}<path d="M24 40 q-6 8 0 16 M76 40 q6 8 0 16 M18 36 q-8 12 0 24 M82 36 q8 12 0 24" stroke="#A39588" stroke-width="2.4" fill="none"/>`;
  const DRESS = `${ground(96)}${KID_FULL('#F2C14E')}<path d="M30 56 C34 52 40 50 44 54 L46 60" stroke="#E58FA0" stroke-width="8" fill="none"/><path d="M52 54 C56 50 64 50 70 56" stroke="#E58FA0" stroke-width="8" fill="none"/>`;
  const GECKO = `<path d="M0 0 H100 V100 H0 Z" fill="#E9E0D2" stroke="none"/><path d="M20 50 C30 40 60 40 76 48 C84 52 92 50 96 46 L94 54 C84 60 70 60 60 58 C46 62 30 60 20 50 Z" fill="#7FA6C9"/>${[[34, 44], [50, 42], [64, 46], [44, 56], [58, 58]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.4" fill="#E86A4F" stroke="none"/>`).join('')}<path d="M34 46 L24 30 M34 56 L22 70 M62 46 L70 30 M62 58 L72 74" stroke="#7FA6C9" stroke-width="5"/><path d="M20 50 C10 48 4 44 4 40" stroke="#7FA6C9" stroke-width="5" fill="none"/><circle cx="88" cy="48" r="2" fill="#3A3B3C" stroke="none"/>`;
  const DREAMKID = `${SLEEP}<path d="M58 30 C56 20 72 16 76 24 C84 18 94 26 88 34 C94 40 84 48 78 44 C72 50 60 46 62 40 C54 40 54 32 58 30 Z" fill="#FFFCF6"/>${at(64, 22, 0.16, RABBIT)}${STAR(80, 40, 4)}`;
  const STEPS = `${ground(96)}${[0, 1, 2, 3].map(i => `<rect x="${20 + i * 14}" y="${80 - i * 14}" width="${80 - i * 14}" height="${16 + i * 0}" fill="#C8C3BC"/>`).join('')}${at(4, 26, 0.6, KID_FULL('#E86A4F', true))}`;
  const LIFT = `${ground(96)}${at(-6, 12, 0.8, KID_FULL('#6FAE4F'))}<path d="M36 56 L46 40 M64 56 L58 40" stroke="${SKIN}" stroke-width="6"/>${at(32, -10, 0.56, CHAIR())}`;
  const SQUIRREL = `${ground(90)}<path d="M60 84 C90 84 96 50 80 30 C72 20 60 26 66 36 C74 48 70 64 60 70" fill="#C9772E"/><ellipse cx="42" cy="70" rx="18" ry="16" fill="#D9883E"/><circle cx="34" cy="48" r="12" fill="#D9883E"/><path d="M28 38 L26 28 L34 36 Z" fill="#D9883E"/><circle cx="30" cy="46" r="2" fill="#3A3B3C" stroke="none"/><ellipse cx="38" cy="66" rx="6" ry="7" fill="#8C5A32"/><path d="M30 86 h8 M48 86 h8" stroke-width="2.4"/>`;
  const GLASS = `<path d="M28 18 H72 L66 90 H34 Z" fill="#EEF6FA"/><path d="M30 40 H70 L66 88 H34 Z" fill="#BFE0F0" stroke="none"/><path d="M28 18 H72 L66 90 H34 Z"/><path d="M36 26 V80" stroke="#FFFFFF" stroke-width="3"/>`;
  const BUTTON = `<circle cx="50" cy="50" r="32" fill="#E86A4F"/><circle cx="50" cy="50" r="24" fill="none" stroke="#C24E36" stroke-width="2"/>${[[42, 42], [58, 42], [42, 58], [58, 58]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#F4F0EA"/>`).join('')}<path d="M42 42 L58 58 M58 42 L42 58" stroke="#3A3B3C" stroke-width="2"/>`;
  const SQUID = `<path d="M50 6 L70 30 V60 H30 V30 Z" fill="#F2B8C0"/><path d="M30 30 L18 24 L30 44 M70 30 L82 24 L70 44" fill="#F2B8C0"/>${[34, 42, 50, 58, 66].map((x, i) => `<path d="M${x} 60 C${x - 4 + i * 2} 74 ${x + 4} 82 ${x - 2 + i} 94" stroke="#F2B8C0" stroke-width="5" fill="none"/>`).join('')}${eyes(42, 58, 50, 3)}`;
  const TOAD = `${ground(88)}<ellipse cx="50" cy="66" rx="34" ry="20" fill="#8C9A5A"/>${[[34, 60], [52, 56], [64, 66], [44, 72]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#6E7A3E" stroke="none"/>`).join('')}<circle cx="34" cy="46" r="8" fill="#8C9A5A"/><circle cx="62" cy="46" r="8" fill="#8C9A5A"/><circle cx="34" cy="45" r="3.4" fill="#3A3B3C" stroke="none"/><circle cx="62" cy="45" r="3.4" fill="#3A3B3C" stroke="none"/><path d="M36 64 q14 6 28 0" stroke-width="2.4"/><path d="M16 80 l-8 6 M84 80 l8 6" stroke="#8C9A5A" stroke-width="6"/>`;
  const STUMP = `${ground(90)}<path d="M20 90 C26 80 28 60 26 44 H74 C72 60 74 80 80 90 Z" fill="#A0714A"/><ellipse cx="50" cy="44" rx="24" ry="8" fill="#E9C9A0"/><ellipse cx="50" cy="44" rx="14" ry="4.6" fill="none" stroke="#C9A060" stroke-width="1.6"/><path d="M20 90 L8 92 M80 90 L92 92" stroke="#A0714A" stroke-width="5"/><path d="M70 50 C80 40 86 46 84 54" stroke="#6FAE4F" stroke-width="3" fill="none"/>`;
  const SNAILSHELL = `${ground(86)}<path d="M20 84 C14 50 40 26 64 34 C84 40 90 64 76 84 Z" fill="#E9C9A0"/><path d="M76 84 C82 64 66 46 52 54 C40 62 48 78 60 74" stroke="#B48A55" stroke-width="3" fill="none"/>`;
  const CARPENTER = `${ground(96)}${at(-8, 8, 0.86, ADULT('bo'))}${PLANK.replace(ground(84), '').replace('M8 50 L76 36', 'M8 50 L76 36')}<path d="M56 74 L70 60" stroke="${SKIN}" stroke-width="6"/>`;
  const EXCAVATOR = `${ground(92)}<rect x="10" y="72" width="54" height="16" rx="8" fill="#5E5A58"/>${[18, 30, 42, 54].map(x => `<circle cx="${x}" cy="80" r="4" fill="#9AA2AA"/>`).join('')}<rect x="14" y="46" width="42" height="26" rx="3" fill="#F2B134"/><rect x="18" y="50" width="16" height="14" fill="#DCEFF5"/><path d="M52 52 L74 26 L90 50" stroke="#F2B134" stroke-width="7" fill="none"/><path d="M84 50 L96 50 L92 66 L80 60 Z" fill="#5E5A58"/>`;
  const MARIGOLD = `${ground(92)}${[[30, 50], [54, 40], [72, 58]].map(([x, y]) => `<path d="M${x} ${y} V92" stroke="#6E8F3A" stroke-width="3"/>${Array.from({ length: 12 }, (_, i) => `<circle cx="${x + 10 * Math.cos(i * Math.PI / 6)}" cy="${y + 10 * Math.sin(i * Math.PI / 6)}" r="5" fill="#F2903A"/>`).join('')}<circle cx="${x}" cy="${y}" r="7" fill="#F2B134"/>`).join('')}`;
  const SPOONFEED = `${ground(96)}${at(-10, 8, 0.86, ADULT('me'))}${at(46, 34, 0.62, KID('#E86A4F'))}<path d="M44 74 L58 66" stroke="#B9C0C8" stroke-width="3"/><ellipse cx="60" cy="65" rx="4" ry="3" fill="#FFFFFF"/>${at(20, 64, 0.3, RICEBOWL)}`;
  const INKPOT = `${ground(90)}<path d="M32 40 H68 V48 C80 52 82 60 82 70 V90 H18 V70 C18 60 20 52 32 48 Z" fill="#7B4F9E"/><rect x="36" y="30" width="28" height="12" rx="2" fill="#3A3B3C"/><path d="M24 64 H76" stroke="#5E3A7E" stroke-width="2"/>`;
  const SOB = `${ground(96)}${KID('#5B8FC9').replace('<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>', '<ellipse cx="50" cy="59" rx="4" ry="3" fill="#B4553C"/>')}<path d="M42 52 q-2 8 0 14 M58 52 q2 8 0 14" stroke="#7FB2D9" stroke-width="3"/>`;
  const WAKE = `<rect x="6" y="62" width="88" height="24" rx="6" fill="#E9E0D2"/><path d="M40 70 C40 58 86 58 90 70 Z" fill="#9FC7D8"/>${at(-6, 6, 0.74, KID('#E86A4F'))}<path d="M18 46 L6 30 M62 46 L74 30" stroke="${SKIN}" stroke-width="6"/><circle cx="84" cy="16" r="10" fill="#F2C14E"/>`;
  const SING = `${ground(96)}${KID_FULL('#E58FA0').replace('<path d="M46 42 q4 3 8 0" stroke-width="2.2"/>', '<ellipse cx="50" cy="43" rx="3.4" ry="4" fill="#B4553C"/>')}${NOTES}`;
  const HANDSHAKE = `${ground(96)}${at(-14, 8, 0.8, ADULT('bo'))}${at(38, 8, 0.8, ADULT('co'))}<path d="M38 72 L50 64 L62 72" stroke="${SKIN}" stroke-width="7" fill="none"/>`;
  const ROLYPOLY = `${ground(92)}<ellipse cx="50" cy="68" rx="28" ry="24" fill="#D9473A"/><circle cx="50" cy="34" r="18" fill="#D9473A"/><circle cx="50" cy="36" r="13" fill="#F6D2B8"/>${eyes(45, 55, 35, 2)}<path d="M46 41 q4 3 8 0" stroke-width="2"/><path d="M34 70 C40 80 60 80 66 70" stroke="#F2C14E" stroke-width="4" fill="none"/>${FLOWER(50, 62, 4, '#F2C14E')}`;
  const SANDBEACH = `<path d="M0 0 H100 V44 H0 Z" fill="#DCEFF5" stroke="none"/><path d="M0 40 H100 V56 H0 Z" fill="#7FB2D9" stroke="none"/><path d="M0 54 C30 48 70 50 100 56 V100 H0 Z" fill="#F2DDA8"/><path d="M30 80 L36 66 H54 L60 80 Z" fill="#E86A4F"/><path d="M36 66 C40 58 50 58 54 66" stroke="#3A3B3C" stroke-width="2" fill="none"/><path d="M66 84 C70 74 86 74 90 84 Z" fill="#E9C25A"/>`;
  const GRAIN = `${ground(90)}<path d="M50 90 C50 60 46 40 40 20" stroke="#C9A040" stroke-width="3" fill="none"/>${Array.from({ length: 7 }, (_, i) => `<ellipse cx="${44 - i * 1 + (i % 2 ? 6 : -6)}" cy="${26 + i * 7}" rx="3.4" ry="6" transform="rotate(${i % 2 ? 30 : -30} ${44 - i + (i % 2 ? 6 : -6)} ${26 + i * 7})" fill="#E9C25A"/>`).join('')}${[[66, 80], [72, 84], [78, 80], [70, 74]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="3" ry="5" fill="#E9C25A"/>`).join('')}`;
  const SHADE = `${ground(96)}<path d="M50 96 V30" stroke="#8C5A32" stroke-width="10"/><circle cx="50" cy="26" r="24" fill="#7DB25A"/><circle cx="26" cy="38" r="14" fill="#7DB25A"/><circle cx="74" cy="38" r="14" fill="#7DB25A"/><ellipse cx="50" cy="94" rx="40" ry="5" fill="#C9D8B0" stroke="none"/>${at(56, 46, 0.5, KID_FULL('#5B8FC9'))}<circle cx="90" cy="10" r="7" fill="#F2C14E"/>`;
  const SUN = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/><circle cx="50" cy="50" r="22" fill="#F2C14E"/>${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<path d="M${50 + 28 * Math.cos(a)} ${50 + 28 * Math.sin(a)} L${50 + 38 * Math.cos(a)} ${50 + 38 * Math.sin(a)}" stroke="#F2903A" stroke-width="4"/>`; }).join('')}`;
  const EYES = `<path d="M8 50 C24 26 76 26 92 50 C76 74 24 74 8 50 Z" fill="#FFFFFF"/><circle cx="50" cy="50" r="16" fill="#6B4A2E"/><circle cx="50" cy="50" r="8" fill="#3A3B3C"/><circle cx="54" cy="45" r="3.4" fill="#FFFFFF" stroke="none"/><path d="M14 40 L8 30 M28 30 L24 20 M50 26 V14 M72 30 L76 20 M86 40 L92 30" stroke-width="2.4"/>`;
  const MOW = `<path d="M0 72 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>${Array.from({ length: 12 }, (_, i) => `<path d="M${60 + i * 3.4} 72 l-2 -10 M${60 + i * 3.4} 72 l2 -8" stroke="#6FAE4F" stroke-width="2"/>`).join('')}${at(-6, 0, 0.8, ADULT('bo'))}<path d="M50 62 C60 70 64 76 62 82 C56 86 46 84 40 80" stroke="#9AA2AA" stroke-width="4" fill="none"/><path d="M50 62 L36 46" stroke="#B47846" stroke-width="4"/>`;
  const MOLASSES = `${JAR('#E8A030', `<path d="M24 50 H76" stroke="#C47A1A" stroke-width="3"/>`)}${at(58, 30, 0.5, `${CANE_STALK(30, 10)}`)}`;
  const DIG = `<path d="M0 70 H100 V100 H0 Z" fill="#9C7A5A" stroke="none"/><path d="M0 70 H100" stroke="#7A5A3E" stroke-width="2"/>${at(-4, -4, 0.74, KID_FULL('#F2C14E'))}<path d="M50 44 L70 78" stroke="#B47846" stroke-width="4"/><path d="M64 76 L76 72 L82 86 L70 90 Z" fill="#9AA2AA"/><path d="M80 66 C86 60 94 62 94 70 Z" fill="#9C7A5A"/>`;
  const LAMP = `<path d="M30 46 L40 14 H60 L70 46 Z" fill="#F2C14E"/><path d="M50 46 V82" stroke-width="4"/><ellipse cx="50" cy="86" rx="20" ry="5" fill="#5B8FC9"/><path d="M24 54 L14 64 M76 54 L86 64 M50 56 V66" stroke="#F2C14E" stroke-width="3"/><circle cx="70" cy="70" r="5" fill="#E86A4F"/><path d="M70 70 V82" stroke-width="1.6"/>`;

  Object.assign(T, {
    /* Bài 34 · au âu êu */
    'quả cau': SV(ARECA_FRUIT),
    'cây cầu': SV(BRIDGE_ARCH),
    'cây nêu': SV(NEU),
    'rau cải': SV(CABBAGE),
    'con tàu': SV(SHIP),
    'lau nhà': SV(MOP),
    'quả dâu': SV(`${ground(92)}${STRAWB(36, 60, 1.3)}${STRAWB(66, 66, 1)}`),
    'con sâu': SV(CATERPILLAR),
    'châu chấu': SV(GRASSHOPPER),
    'thêu áo': SV(EMBROIDER),
    'cái lều': SV(TENT),
    'bé mếu': SV(POUT),
    'Áo mẹ màu đỏ, áo bé màu nâu.': SV(`${ground(96)}${at(-8, 8, 0.86, ADULT('me').replace('#E58FA0', '#D9473A'))}${at(44, 32, 0.66, KID('#8C5A32'))}`),
    'Nhà dì Thêu ở quê có cây cau, cây dâu, quả bầu.': SV(`${ground(94)}${at(-10, -6, 0.7, ARECA)}${at(36, 46, 0.5, `${STRAWB(20, 30, 1)}${STRAWB(44, 34, 1)}`)}<ellipse cx="76" cy="78" rx="14" ry="12" fill="#8CC063"/><ellipse cx="76" cy="62" rx="9" ry="8" fill="#8CC063"/>`),
    'Đàn bồ câu bay trên cây cau.': SV(`<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${at(-6, 20, 0.8, ARECA)}${[[54, 14], [72, 26], [62, 40]].map(([x, y]) => `<g transform="translate(${x} ${y})"><path d="M0 6 C6 -6 16 -6 20 4 C26 -4 34 -2 34 6 C24 10 10 12 0 6 Z" fill="#C8CCD0"/><circle cx="2" cy="4" r="4" fill="#C8CCD0"/></g>`).join('')}`),

    /* Bài 35 · iu ưu */
    'cái rìu': SV(AXE),
    'con cừu': SV(SHEEP),
    'cái địu': SV(SLING),
    'líu lo': SV(SINGBIRDS),
    'bé xíu': SV(TINY),
    'quả lựu': SV(`${BRANCHFRUIT(`${POMEGRANATE(40, 54, 14)}${POMEGRANATE(64, 60, 12)}`)}`),
    'bưu tá': SV(POSTMAN),
    'nghỉ hưu': SV(RETIRE),
    'Cây vải và cây lựu đều trĩu quả.': SV(`${ground(96)}${at(-8, 4, 0.6, TREE)}${[[14, 30], [26, 26], [20, 40], [34, 36]].map(([x, y]) => LYCHEE(x, y, 4)).join('')}${at(42, 4, 0.6, TREE)}${[[64, 30], [76, 26], [70, 40], [84, 36]].map(([x, y]) => POMEGRANATE(x, y, 4.4)).join('')}`),
    'Bà đã già, nay bà đã nghỉ hưu.': SV(`${ground(96)}${at(0, 30, 0.9, `<rect x="6" y="40" width="70" height="10" rx="3" fill="#B47846"/>`)}${at(4, 0, 0.8, ADULT('ba'))}${at(56, 46, 0.36, TEACUP)}`),
    'Lời bà kể dịu êm bên tai bé.': SV(`${ground(96)}${at(-10, 10, 0.86, ADULT('ba', 'sing'))}${at(44, 32, 0.64, KID('#5B8FC9'))}${TALK}`),

    /* Bài 36 · ac ăc âc */
    'củ lạc': SV(PEANUT),
    'mắc áo': SV(HANGER),
    'quả gấc': SV(GAC),
    'bản nhạc': SV(MUSIC),
    'bác sĩ': SV(DOCTOR),
    'con hạc': SV(CRANE),
    'lắc đầu': SV(SHAKE),
    'mặc áo': SV(DRESS),
    'tắc kè': SV(GECKO),
    'giấc mơ': SV(DREAMKID),
    'bậc thềm': SV(STEPS),
    'nhấc ghế': SV(LIFT),
    'Bé kể mẹ nghe giấc mơ của bé.': SV(`${ground(96)}${at(-10, 8, 0.86, ADULT('me'))}${at(44, 32, 0.64, KID('#E86A4F'))}<path d="M58 30 C56 20 72 16 76 24 C84 18 94 26 88 34 C94 40 84 48 78 44 C72 50 60 46 62 40 C54 40 54 32 58 30 Z" fill="#FFFCF6"/>${STAR(76, 30, 5)}`),
    'Bà nhắc mẹ mặc áo ấm cho bé.': SV(`${ground(96)}${at(-12, 8, 0.8, ADULT('ba'))}${at(30, 8, 0.8, ADULT('me'))}${at(62, 44, 0.5, KID('#C24E36'))}<path d="M74 62 h18" stroke="#F2C14E" stroke-width="4"/>`),
    'Bác Lạc là bác sĩ.': SV(DOCTOR),

    /* Bài 37 · oc ôc uc ưc */
    'con sóc': SV(SQUIRREL),
    'cái cốc': SV(GLASS),
    'cúc áo': SV(BUTTON),
    'con mực': SV(SQUID),
    'tóc bạc': SV(`${ground(96)}${at(4, 8, 0.9, ADULT('ba'))}`),
    'bé học bài': SV(STUDY),
    'con cóc': SV(TOAD),
    'gốc cây': SV(STUMP),
    'con ốc': SV(SNAILSHELL),
    'thợ mộc': SV(CARPENTER),
    'máy xúc': SV(EXCAVATOR),
    'cúc vạn thọ': SV(MARIGOLD),
    'xúc cơm': SV(SPOONFEED),
    'lọ mực': SV(INKPOT),
    'nức nở': SV(SOB),
    'thức dậy': SV(WAKE),
    'Sau nhà, cúc vạn thọ đã nở rộ.': SV(`${at(40, -10, 0.6, HOUSE())}${at(-4, 30, 0.7, MARIGOLD)}${at(40, 36, 0.6, MARIGOLD)}`),
    'Mẹ mua lọ mực tím cho bé ở chợ gần nhà.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('me'))}${at(46, 34, 0.62, KID('#6FAE4F'))}${at(28, 60, 0.32, INKPOT)}`),
    'Chú Tư là thợ mộc, chú mua gốc cây về xẻ gỗ.': SV(`${CARPENTER}${at(56, 40, 0.5, STUMP)}`),

    /* Bài 38 · at ăt ât */
    'bé hát': SV(SING),
    'bắt tay': SV(HANDSHAKE),
    'lật đật': SV(ROLYPOLY),
    'bãi cát': SV(SANDBEACH),
    'hạt thóc': SV(GRAIN),
    'nghỉ mát': SV(SHADE),
    'đôi mắt': SV(EYES),
    'mặt trời': SV(SUN),
    'cắt cỏ': SV(MOW),
    'mật mía': SV(MOLASSES),
    'xúc đất': SV(DIG),
    'bật đèn': SV(LAMP),
    'Mặt trời lặn ở phía tây.': SV(`<path d="M0 0 H100 V64 H0 Z" fill="#F7D3A3" stroke="none"/><circle cx="50" cy="64" r="22" fill="#F2903A"/><path d="M0 64 H100 V100 H0 Z" fill="#7FB2D9"/><path d="M20 74 h20 M56 80 h26 M30 88 h14" stroke="#F2C14E" stroke-width="3"/>`),
    'Bé Nga có đôi mắt to tròn, đen láy.': SV(`${ground(96)}${at(-20, -18, 1.4, KID('#E58FA0'))}`),
    'Nghỉ hè, nhà bé Cúc đi nghỉ mát ở Cát Bà.': SV(`${BEACH}${at(36, 46, 0.42, KID_FULL('#E86A4F'))}${at(60, 44, 0.42, KID_FULL('#5B8FC9'))}`)
  });
  /* ---------- Bài 39–43 (vần ot ôt ơt, et êt it, ut ưt, ap ăp âp, op ôp ơp) ---------- */
  const SOT = `${ground(92)}<path d="M14 30 H86 L76 90 H24 Z" fill="#D9B45A"/>${[42, 54, 66, 78].map(y => `<path d="M${14 + (y - 30) / 6} ${y} H${86 - (y - 30) / 6}" stroke="#B9873E" stroke-width="2.5"/>`).join('')}${[28, 40, 52, 64, 76].map(x => `<path d="M${x} 30 L${50 + (x - 50) * 0.72} 90" stroke="#B9873E" stroke-width="2.5"/>`).join('')}<rect x="10" y="24" width="80" height="9" rx="4.5" fill="#C68B59"/>`;
  const CARROT = (x, y, s = 1, a = 0) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})"><path d="M-12 -20 C-12 -30 12 -30 12 -20 L2 34 C1 38 -1 38 -2 34 Z" fill="#F2903A"/><path d="M-8 -8 h6 M2 2 h6 M-5 14 h5" stroke="#D9732A" stroke-width="2"/><path d="M0 -26 C-4 -40 -12 -44 -16 -42 M0 -26 C0 -40 4 -48 8 -48 M0 -26 C6 -38 14 -40 18 -36" stroke="#6FAE4F" stroke-width="4" fill="none"/></g>`;
  const BOARD = `<circle cx="44" cy="58" r="34" fill="#D9A86A"/><circle cx="44" cy="58" r="27" fill="none" stroke="#B9873E" stroke-width="2"/><circle cx="44" cy="58" r="16" fill="none" stroke="#B9873E" stroke-width="1.6"/><path d="M60 32 L92 10 L96 16 L68 40 Z" fill="#C8CCD0"/><path d="M68 40 L60 46" stroke="#8C5A32" stroke-width="6"/>`;
  const OLEASTER = `<path d="M6 30 C30 24 60 26 94 18" stroke="#8C5A32" stroke-width="4" fill="none"/>${[[24, 50], [44, 56], [64, 48], [82, 42], [34, 72]].map(([x, y], i) => `<path d="M${x} ${y - 14} V${y - 24 + (i % 2) * 2}" stroke="#8C5A32" stroke-width="2"/><ellipse cx="${x}" cy="${y}" rx="8" ry="13" fill="#D9473A"/>${[[-3, -4], [2, 2], [-2, 6], [3, -7]].map(([a, b]) => `<circle cx="${x + a}" cy="${y + b}" r="1" fill="#F2C9A0" stroke="none"/>`).join('')}`).join('')}${LEAF(70, 26, -20, '#6FAE4F')}${LEAF(12, 32, 30, '#6FAE4F')}`;
  const GAUR = `${ground(92)}${at(0, 8, 0.96, COW('#3A2E28', '#2A201C'))}<path d="M16 34 C8 28 8 18 16 16 M30 34 C38 28 38 18 30 16" stroke="#E9E0D2" stroke-width="4" fill="none"/>`;
  const BETEL = `${ground(94)}<path d="M50 94 C50 74 46 60 40 50" stroke="#5E8F3A" stroke-width="3" fill="none"/>${[[32, 40, -30], [58, 56, 20], [30, 72, -50]].map(([x, y, a]) => `<g transform="translate(${x} ${y}) rotate(${a})"><path d="M0 18 C-22 4 -18 -20 0 -10 C18 -20 22 4 0 18 Z" fill="#5E9E3A"/><path d="M0 16 V-8 M0 4 L-8 -4 M0 4 L8 -4" stroke="#3E7A2A" stroke-width="1.6"/></g>`).join('')}`;
  const PILLAR = `${ground(94)}<path d="M4 34 L50 8 L96 34 Z" fill="#B4553C"/><rect x="4" y="32" width="92" height="8" fill="#8C4A2E"/>${[18, 50, 82].map(x => `<rect x="${x - 5}" y="40" width="10" height="50" fill="#C68B59"/><rect x="${x - 8}" y="86" width="16" height="6" rx="2" fill="#A39588"/>`).join('')}`;
  const BOOT = (x, c = '#8C5A32') => `<path d="M${x} 20 H${x + 22} V70 L${x + 40} 76 C${x + 44} 78 ${x + 44} 90 ${x + 38} 90 H${x - 2} Z" fill="${c}"/><path d="M${x} 28 H${x + 22}" stroke="#5E3A22" stroke-width="3"/>`;
  const BOOTS = `${ground(92)}${BOOT(10)}${BOOT(50, '#A86A3E')}`;
  const CHILI = (x, y, a, c = '#D9473A') => `<g transform="translate(${x} ${y}) rotate(${a})"><path d="M0 -26 C10 -24 12 0 6 18 C3 26 -2 32 -6 34 C-4 20 -10 0 -8 -18 C-7 -24 -4 -26 0 -26 Z" fill="${c}"/><path d="M-3 -26 C-4 -32 2 -34 4 -38" stroke="#5E8F3A" stroke-width="3" fill="none"/><path d="M-6 -24 C0 -28 6 -26 6 -22 Z" fill="#6FAE4F"/></g>`;
  const CHILIS = `${CHILI(34, 52, -20)}${CHILI(56, 50, 10, '#C8443A')}${CHILI(74, 58, 30, '#E86A4F')}`;
  const RACKET = `<g transform="rotate(-30 50 50)"><ellipse cx="50" cy="32" rx="20" ry="26" fill="#FFFFFF" stroke-width="4"/>${[36, 43, 50, 57, 64].map(x => `<path d="M${x} ${10 + Math.abs(50 - x) * 0.5} V${54 - Math.abs(50 - x) * 0.5}" stroke="#A39588" stroke-width="1.2"/>`).join('')}${[16, 24, 32, 40, 48].map(y => `<path d="M${32 + Math.abs(32 - y) * 0.3} ${y} H${68 - Math.abs(32 - y) * 0.3}" stroke="#A39588" stroke-width="1.2"/>`).join('')}<path d="M50 58 V96" stroke="#3A3B3C" stroke-width="5"/><rect x="45" y="78" width="10" height="20" rx="3" fill="#5B8FC9"/></g><path d="M78 76 C74 70 86 64 88 72 Z" fill="#FFFFFF"/><circle cx="80" cy="76" r="4" fill="#F2C14E"/>`;
  const OILCAN = `${ground(92)}<path d="M24 34 H68 V90 H24 Z" fill="#F2C14E"/><path d="M68 44 C80 44 82 56 70 60" stroke="#D9A23A" stroke-width="5" fill="none"/><rect x="30" y="24" width="14" height="10" rx="2" fill="#3A3B3C"/><rect x="34" y="50" width="24" height="24" rx="3" fill="#D9A23A" stroke="none"/><path d="M84 48 C80 56 80 62 84 62 C88 62 88 56 84 48 Z" fill="#6E5A2E"/>`;
  const PARROT = `${ground(92)}<path d="M54 30 V92" stroke="#8C5A32" stroke-width="0"/><path d="M10 82 H90" stroke="#8C5A32" stroke-width="5"/><path d="M44 66 C38 78 34 88 30 96 M52 66 C50 80 48 88 46 96" stroke="#3E8E4A" stroke-width="6"/><ellipse cx="50" cy="52" rx="16" ry="26" fill="#4CAF50"/><path d="M44 44 C56 46 64 60 60 76 C52 70 44 60 44 44 Z" fill="#2E7D32"/><circle cx="46" cy="26" r="13" fill="#D9473A"/><path d="M34 24 C26 24 26 36 34 36 C32 32 32 28 34 24 Z" fill="#F2C14E"/><circle cx="44" cy="22" r="2.4" fill="#3A3B3C" stroke="none"/><path d="M44 78 l-2 6 M52 78 l2 6" stroke="#5E5A58" stroke-width="2.4"/>`;
  const MAI = (n = 9) => Array.from({ length: n }, (_, i) => { const x = 14 + (i * 37) % 76, y = 12 + (i * 23) % 50; return `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map(a => `<ellipse cx="0" cy="-4" rx="2.6" ry="4" transform="rotate(${a})" fill="#F2C14E"/>`).join('')}<circle r="1.6" fill="#D9732A" stroke="none"/></g>`; }).join('');
  const MAIBRANCH = `<path d="M10 92 C30 70 40 50 70 30 M40 52 C30 40 26 26 30 14 M56 40 C70 46 84 44 92 36" stroke="#6B4A2E" stroke-width="4" fill="none"/>${MAI(9)}`;
  const LIXI = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="0" y="0" width="24" height="34" rx="2" fill="#D9473A"/><path d="M0 10 L12 18 L24 10" stroke="#F2C14E" stroke-width="2" fill="none"/><circle cx="12" cy="24" r="4" fill="#F2C14E" stroke="none"/></g>`;
  const TET = `${MAIBRANCH}${LIXI(62, 60, 1)}${LIXI(42, 66, 0.8)}`;
  const JACKFRUIT = `${ground(92)}<path d="M50 20 V10" stroke="#5E8F3A" stroke-width="4"/><ellipse cx="50" cy="56" rx="32" ry="36" fill="#9DBA4E"/>${Array.from({ length: 40 }, (_, i) => `<circle cx="${26 + (i * 17) % 48}" cy="${28 + (i * 11) % 58}" r="1.6" fill="#6E8F3A" stroke="none"/>`).join('')}`;
  const WRITE = `<rect x="10" y="22" width="80" height="62" rx="3" fill="#FFFFFF"/>${[38, 52, 66].map(y => `<path d="M16 ${y} H84" stroke="#BFE0F0" stroke-width="1.4"/>`).join('')}<path d="M18 36 c3 -8 6 -8 6 0 c0 6 4 6 6 0 c2 -6 6 -6 6 0 M18 50 c4 -8 8 0 10 -2 c3 -6 6 -2 8 0" stroke="#3A3B3C" stroke-width="2.2" fill="none"/>${at(30, 22, 0.8, `<path d="M40 60 L74 10" stroke="#F2C14E" stroke-width="7"/><path d="M40 60 l-2 8 l6 -5 Z" fill="#3A3B3C"/><path d="M60 48 C66 44 74 50 70 58 C64 62 56 56 60 48 Z" fill="${HAND}"/>`)}`;
  const THUNDER = `<rect x="2" y="2" width="96" height="96" rx="8" fill="#56607A" stroke="none"/><path d="M20 40 C12 40 10 28 20 26 C20 14 36 12 42 20 C48 8 70 8 72 22 C84 20 90 30 84 40 Z" fill="#8C93A6"/><path d="M52 40 L40 64 H52 L44 90 L66 58 H54 L62 40 Z" fill="#F2C14E"/>`;
  const COLDKID = `${ground(96)}${at(0, 4, 1, KID('#5B8FC9'))}${at(30, 18, 0.4, BEANIE)}<path d="M34 66 H66 V74 H34 Z" fill="#D9473A"/><path d="M56 72 V88 H64 V72" fill="#D9473A"/>${[[14, 24], [84, 30], [10, 60], [88, 66], [22, 84]].map(([x, y]) => `<path d="M${x - 5} ${y} h10 M${x} ${y - 5} v10 M${x - 3.5} ${y - 3.5} l7 7 M${x + 3.5} ${y - 3.5} l-7 7" stroke="#7FB2D9" stroke-width="1.6"/>`).join('')}`;
  const CENTIPEDE = `${ground(84)}<path d="M8 70 C20 50 34 76 50 60 C64 46 78 66 90 50" stroke="#8C3A2A" stroke-width="10" fill="none"/>${[14, 22, 30, 38, 46, 54, 62, 70, 78, 86].map((x, i) => `<path d="M${x} ${62 + Math.sin(i) * 6} l-3 -10 M${x} ${62 + Math.sin(i) * 6} l3 12" stroke="#C24E36" stroke-width="1.8"/>`).join('')}<circle cx="91" cy="48" r="6" fill="#8C3A2A"/><path d="M94 44 l4 -8 M90 43 l0 -8" stroke="#8C3A2A" stroke-width="1.6"/>`;
  const LOOM = `${ground(94)}<path d="M14 92 V20 M86 92 V20 M10 20 H90" stroke="#8C5A32" stroke-width="5"/>${[24, 32, 40, 48, 56, 64, 72].map(x => `<path d="M${x} 22 V58" stroke="#C8C3BC" stroke-width="1.4"/>`).join('')}<rect x="18" y="56" width="64" height="20" fill="#E86A4F"/>${[60, 66, 72].map(y => `<path d="M18 ${y} H82" stroke="#F2C14E" stroke-width="2"/>`).join('')}<rect x="16" y="76" width="68" height="6" rx="3" fill="#8C5A32"/>`;
  const SOAPBERRY = `${[[30, 50, -30], [50, 54, 0], [70, 50, 30]].map(([x, y, a]) => `<g transform="rotate(${a} ${x} ${y})"><path d="M${x - 6} ${y - 34} C${x + 10} ${y - 20} ${x + 10} ${y + 20} ${x - 4} ${y + 36} C${x - 12} ${y + 20} ${x - 14} ${y - 20} ${x - 6} ${y - 34} Z" fill="#5E3A22"/>${[-18, -6, 6, 18].map(d => `<ellipse cx="${x - 2}" cy="${y + d}" rx="3" ry="4" fill="#7A4E30" stroke="none"/>`).join('')}</g>`).join('')}`;
  const PENBIG = `<g transform="rotate(40 50 50)"><rect x="42" y="6" width="16" height="70" rx="5" fill="#5B8FC9"/><path d="M42 76 L50 94 L58 76 Z" fill="#E9E0D2"/><path d="M48 90 L50 94 L52 90 Z" fill="#3A3B3C"/><rect x="40" y="6" width="20" height="14" rx="4" fill="#3F6FA6"/><path d="M58 10 V40" stroke="#C8CCD0" stroke-width="3"/></g>`;
  const PENCIL = `<g transform="rotate(40 50 50)"><rect x="42" y="8" width="16" height="66" fill="#F2C14E"/><path d="M47 8 V74 M53 8 V74" stroke="#D9A23A" stroke-width="1.4"/><rect x="42" y="2" width="16" height="10" rx="3" fill="#E58FA0"/><path d="M42 74 L50 94 L58 74 Z" fill="#F6D9A8"/><path d="M47 86 L50 94 L53 86 Z" fill="#3A3B3C"/></g>`;
  const QUAIL = `${ground(88)}<path d="M40 76 l-2 10 M54 76 l2 10" stroke="#D9982B" stroke-width="3"/><ellipse cx="50" cy="60" rx="30" ry="20" fill="#B48A5A"/>${[[40, 54], [54, 50], [64, 60], [46, 66], [58, 70]].map(([x, y]) => `<path d="M${x - 4} ${y} q4 -4 8 0" stroke="#6B4A2E" stroke-width="2"/>`).join('')}<circle cx="26" cy="46" r="12" fill="#8C6A42"/><path d="M18 42 H34" stroke="#F4F0EA" stroke-width="2"/><circle cx="23" cy="46" r="2.2" fill="#3A3B3C" stroke="none"/><path d="M14 48 L8 50 L14 52 Z" fill="#5E5A58"/><path d="M78 56 L88 52 L84 62 Z" fill="#8C6A42"/>`;
  const KICK = `${ground(96)}${at(-10, 2, 0.94, KID_FULL('#E86A4F', true))}${BALL(82, 60, 9)}<path d="M64 66 h8 M60 58 h8 M62 74 h8" stroke="#A39588" stroke-width="2"/>`;
  const MUTDUA = `<ellipse cx="50" cy="66" rx="42" ry="16" fill="#FFFFFF"/><ellipse cx="50" cy="64" rx="34" ry="11" fill="#F4F0EA" stroke="#C8C3BC" stroke-width="2"/>${[[30, 58, 20], [44, 54, -10], [56, 60, 30], [66, 54, -20], [38, 64, -30], [52, 52, 10], [62, 64, 15]].map(([x, y, a], i) => `<rect x="${x - 10}" y="${y - 3}" width="20" height="6" rx="3" transform="rotate(${a} ${x} ${y})" fill="${['#FFFCF6', '#F2B8C6', '#B9D86A', '#FFFCF6', '#F2C14E', '#F2B8C6', '#FFFCF6'][i]}"/>`).join('')}`;
  const MUTJAR = JAR('#F7E2B0', `${[[42, 64], [56, 58], [50, 74], [60, 72]].map(([x, y], i) => `<rect x="${x - 6}" y="${y - 3}" width="12" height="6" rx="3" fill="${['#F2903A', '#B9D86A', '#F2B8C6', '#FFFCF6'][i]}"/>`).join('')}`);
  const CRACK = `<path d="M0 0 H100 V40 H0 Z" fill="#F7E3B8" stroke="none"/><circle cx="80" cy="18" r="10" fill="#F2C14E" stroke="none"/><path d="M0 40 H100 V100 H0 Z" fill="#C9A06A" stroke="none"/><path d="M10 50 L24 62 L18 78 L30 96 M24 62 L44 58 L52 72 L48 92 M44 58 L60 46 M52 72 L72 70 L80 88 M72 70 L86 56 L98 60" stroke="#7A5A3E" stroke-width="2.4" fill="none"/>`;
  const SNAP = `<path d="M6 40 C20 34 30 46 44 40 L46 46" stroke="#C68B59" stroke-width="6" fill="none"/><path d="M44 40 l4 -4 M44 40 l6 0 M44 40 l4 4" stroke="#C68B59" stroke-width="2"/><path d="M94 64 C80 70 70 58 56 64 L54 58" stroke="#C68B59" stroke-width="6" fill="none"/><path d="M56 64 l-4 -4 M56 64 l-6 0 M56 64 l-4 4" stroke="#C68B59" stroke-width="2"/><path d="M48 48 l4 4 M50 54 l-2 2" stroke="#A39588" stroke-width="2"/>`;
  const SHARK = `${WATER(30)}<path d="M8 62 C20 44 60 40 86 52 L98 40 L94 60 L98 78 L86 66 C60 78 22 76 8 62 Z" fill="#8C9AAA"/><path d="M8 62 C30 70 60 72 86 66" fill="#E9EEF2" stroke="none"/><path d="M46 46 L56 24 L62 46 Z" fill="#8C9AAA"/><circle cx="22" cy="56" r="2.4" fill="#3A3B3C" stroke="none"/><path d="M14 64 l4 2 l4 -2 l4 2 l4 -2" stroke="#3A3B3C" stroke-width="1.6"/><path d="M34 56 v8 M38 56 v8" stroke="#6E7A88" stroke-width="1.6"/>`;
  const CRAYONS = `${['#E86A4F', '#5B8FC9', '#6FAE4F', '#F2C14E', '#9B6FC9'].map((c, i) => `<g transform="translate(${16 + i * 15} 16)"><rect x="0" y="12" width="12" height="62" rx="2" fill="${c}"/><path d="M0 12 L6 0 L12 12 Z" fill="${c}"/><rect x="0" y="34" width="12" height="18" fill="#FFFCF6" stroke="none"/></g>`).join('')}`;
  const HOMEWORK = `${NOTEBOOK.replace('#5B8FC9', '#FFFFFF').replace('#3F6FA6', '#DCCFBC').replace('<circle cx="56" cy="64" r="9" fill="#F2C14E" stroke="none"/>', [52, 62, 72].map(y => `<path d="M40 ${y} H72" stroke="#BFE0F0" stroke-width="1.6"/>`).join(''))}${at(24, 8, 0.9, PEN)}`;
  const THEATER = `<rect x="4" y="8" width="92" height="84" fill="#5E3A3A"/><path d="M14 18 H86 V74 H14 Z" fill="#F7E2B0"/><path d="M14 18 C24 40 22 60 14 74 Z M86 18 C76 40 78 60 86 74 Z" fill="#C8443A"/><path d="M14 18 H86 V26 C70 30 30 30 14 26 Z" fill="#A8322A"/><rect x="4" y="74" width="92" height="18" fill="#8C5A32"/>${at(36, 30, 0.44, KID_FULL('#F2C14E'))}<circle cx="70" cy="34" r="0" />`;
  const CABBAGEHEAD = `${ground(92)}<circle cx="50" cy="58" r="32" fill="#9DCB6A"/><path d="M50 26 C34 40 34 74 50 90 M50 26 C66 40 66 74 50 90" stroke="#6E9E3E" stroke-width="2.4" fill="none"/><path d="M22 54 C30 36 40 32 50 34 C40 40 34 50 34 64" fill="#B9D86A"/><path d="M78 54 C70 36 60 32 50 34" stroke="#6E9E3E" stroke-width="2" fill="none"/>`;
  const SHRIMPS = `<ellipse cx="50" cy="70" rx="44" ry="16" fill="#FFFFFF"/>${at(8, 32, 0.46, SHRIMP)}${at(46, 34, 0.46, SHRIMP)}${at(26, 22, 0.46, SHRIMP)}<path d="M30 20 c-4 -6 4 -10 0 -16 M50 18 c-4 -6 4 -10 0 -16 M70 20 c-4 -6 4 -10 0 -16" stroke="#C8C3BC" stroke-width="2.4" fill="none"/>`;
  const BUSY = `<path d="M0 0 H100 V100 H0 Z" fill="#F4ECDD" stroke="none"/>${at(0, 0, 0.5, HOUSE('#E8A85A', '#B4553C'))}${at(50, 0, 0.5, HOUSE('#9FC7D8', '#5B8FC9'))}<path d="M0 50 H100 V100 H0 Z" fill="#C8C3BC" stroke="none"/>${at(2, 46, 0.4, KID_FULL('#E86A4F', true))}${at(28, 44, 0.42, KID_FULL('#6FAE4F', true))}${at(56, 56, 0.44, BIKE)}${at(70, 44, 0.4, KID_FULL('#F2C14E', true))}`;
  const NIGHTSTREET = `<rect x="2" y="2" width="96" height="96" rx="8" fill="#2E3A5C" stroke="none"/>${STAR(16, 12, 3)}${STAR(80, 10, 3)}${at(0, 4, 0.5, HOUSE('#E8A85A', '#8C4A2E'))}${at(50, 4, 0.5, HOUSE('#C68B59', '#8C4A2E'))}<rect x="14" y="30" width="8" height="8" fill="#F7E07A" stroke="none"/><rect x="64" y="30" width="8" height="8" fill="#F7E07A" stroke="none"/><path d="M2 54 H98 V98 H2 Z" fill="#5E6478" stroke="none"/>${at(4, 50, 0.42, KID_FULL('#E58FA0', true))}${at(30, 48, 0.44, KID_FULL('#5B8FC9', true))}${at(58, 60, 0.4, BIKE)}<circle cx="64" cy="88" r="3" fill="#F7E07A" stroke="none"/>`;
  const RIDE = `${ground(96)}${at(6, 40, 0.86, BIKE)}${at(14, -4, 0.62, ADULT('bo'))}${at(54, 22, 0.42, KID('#F2C14E'))}`;
  const PENCASE = `<rect x="10" y="44" width="80" height="38" rx="8" fill="#5B8FC9"/><path d="M10 56 H90" stroke="#3F6FA6" stroke-width="3"/><path d="M18 44 V18 L22 10 L26 18 V44" fill="#F2C14E"/><path d="M34 44 V14 H42 V44" fill="#E86A4F"/><path d="M50 44 V20 L54 12 L58 20 V44" fill="#6FAE4F"/><rect x="66" y="16" width="10" height="28" rx="2" fill="#9B6FC9"/><rect x="44" y="62" width="12" height="8" rx="2" fill="#F2C14E"/>`;
  const CLASSROOM = `<path d="M0 0 H100 V100 H0 Z" fill="#F4ECDD" stroke="none"/><rect x="18" y="8" width="64" height="34" rx="2" fill="#3E6B4A"/><path d="M18 42 H82" stroke="#8C5A32" stroke-width="4"/>${[[6, 50], [54, 50]].map(([x, y]) => `${at(x, y, 0.5, KID('#E86A4F'))}`).join('')}<rect x="4" y="82" width="42" height="6" fill="#C68B59"/><rect x="54" y="82" width="42" height="6" fill="#C68B59"/><path d="M10 88 V98 M40 88 V98 M60 88 V98 M90 88 V98" stroke="#8C5A32" stroke-width="3"/>`;
  const CRACKLING = `${BOWL([[34, 46], [46, 40], [58, 44], [70, 46], [40, 52], [52, 50], [64, 52]].map(([x, y]) => `<path d="M${x - 7} ${y} C${x - 6} ${y - 7} ${x + 6} ${y - 8} ${x + 7} ${y - 1} C${x + 4} ${y + 4} ${x - 4} ${y + 4} ${x - 7} ${y} Z" fill="#E9B04E"/>`).join(''))}`;
  const PEAK = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 92 L50 14 L100 92 Z" fill="#8C9A7A"/><path d="M38 33 L50 14 L62 33 L56 30 L50 36 L44 30 Z" fill="#FFFFFF"/><path d="M0 92 L20 66 L36 92 Z" fill="#6E8F5A"/><path d="M70 92 L86 70 L100 86 V92 Z" fill="#6E8F5A"/>`;
  const MARKET = `${STALL(`${at(14, 42, 0.3, BASKET())}${at(40, 46, 0.36, `${CHILI(40, 50, -10)}${CHILI(58, 50, 20)}`)}${at(62, 44, 0.26, CABBAGEHEAD)}`)}${at(-6, 64, 0.42, ADULT('ba'))}${at(56, 64, 0.42, ADULT('me'))}`;
  const TIRE = `<circle cx="50" cy="52" r="38" fill="#3A3B3C"/><circle cx="50" cy="52" r="18" fill="#C8CCD0"/><circle cx="50" cy="52" r="6" fill="#8C9AAA"/>${Array.from({ length: 16 }, (_, i) => { const a = i * Math.PI / 8; return `<path d="M${50 + Math.cos(a) * 30} ${52 + Math.sin(a) * 30} L${50 + Math.cos(a) * 37} ${52 + Math.sin(a) * 37}" stroke="#5E5A58" stroke-width="3"/>`; }).join('')}`;
  const CHOIR = `${ground(96)}${[['#E58FA0', -14], ['#5B8FC9', 16], ['#F2C14E', 46]].map(([c, x]) => at(x, 34, 0.66, KID_FULL(c).replace('<path d="M46 42 q4 3 8 0" stroke-width="2.2"/>', '<ellipse cx="50" cy="43" rx="3" ry="3.6" fill="#B4553C"/>'))).join('')}${at(-26, -16, 1, NOTES)}`;
  const ROOFRAIN = `<rect x="2" y="2" width="96" height="96" rx="8" fill="#DCE4EA" stroke="none"/><path d="M6 70 L50 40 L94 70 Z" fill="#B4553C"/>${[[20, 62], [36, 52], [50, 44], [64, 52], [80, 62]].map(([x, y]) => `<path d="M${x - 5} ${y - 3} l-2 -3 M${x + 5} ${y - 3} l2 -3 M${x} ${y - 5} v-3" stroke="#5B8FC9" stroke-width="1.8"/>`).join('')}${Array.from({ length: 12 }, (_, i) => `<path d="M${10 + (i * 29) % 82} ${6 + (i * 13) % 26} l-2 6" stroke="#5B8FC9" stroke-width="2.2"/>`).join('')}<rect x="20" y="70" width="60" height="26" fill="#E8C9A0"/><rect x="44" y="78" width="12" height="18" fill="#8C5A32"/>`;
  const BOLT = `<rect x="2" y="2" width="96" height="96" rx="8" fill="#2E3A5C" stroke="none"/><path d="M14 30 C6 30 6 18 16 18 C16 8 32 6 36 14 C42 4 62 6 62 18 C74 16 78 28 70 32 Z" fill="#6E7894"/><path d="M48 32 L34 60 H48 L38 94 L70 52 H54 L64 32 Z" fill="#F7E07A"/>`;
  const ROOFER = `${ground(96)}<path d="M4 96 V64 H96 V96" fill="#E8C9A0"/><path d="M0 66 L50 30 L100 66 Z" fill="#C8443A"/>${[42, 50, 58].map(y => `<path d="M${50 - (y - 30) * 1.38} ${y} H${50 + (y - 30) * 1.38}" stroke="#A8322A" stroke-width="2"/>`).join('')}<path d="M50 30 L100 66 L100 52 L66 30 Z" fill="#E9E0D2"/>${at(48, -2, 0.56, KID_FULL('#5B8FC9'))}<rect x="76" y="34" width="14" height="6" rx="1" fill="#C8443A" transform="rotate(35 83 37)"/>`;
  const FISHBITE = `${WATER(56)}<g transform="rotate(-30 46 58)">${at(10, 30, 0.8, FISH('#F2903A', '#E86A4F'))}</g><path d="M30 64 q6 -8 12 0 M60 70 q6 -8 12 0" stroke="#FFFFFF" stroke-width="2"/><path d="M60 0 V22" stroke="#A39588" stroke-width="1.4"/><path d="M60 22 c-4 0 -4 6 0 6" stroke="#A39588" stroke-width="1.6"/><ellipse cx="60" cy="30" rx="4" ry="2.4" fill="#C8443A"/>`;
  const FROG = (x, y, s = 1) => at(x, y, s, TOAD.replace(ground(88), '').replace(/#8C9A5A/g, '#7DB25A').replace(/#6E7A3E/g, '#5E8F3A'));
  const SPLASH = Array.from({ length: 14 }, (_, i) => `<path d="M${8 + (i * 31) % 86} ${30 + (i * 17) % 40} l-2 6" stroke="#5B8FC9" stroke-width="2.2"/>`).join('');

  Object.assign(T, {
    /* Bài 39 · ot ôt ơt */
    'cái sọt': SV(SOT),
    'cà rốt': SV(`${ground(92)}${CARROT(38, 50, 1.1, -20)}${CARROT(64, 56, 0.9, 15)}`),
    'cái thớt': SV(BOARD),
    'quả nhót': SV(OLEASTER),
    'bò tót': SV(GAUR),
    'kẹo ngọt': T['cái kẹo'],
    'lá lốt': SV(BETEL),
    'cột nhà': SV(PILLAR),
    'đôi bốt': SV(BOOTS),
    'quả ớt': SV(CHILIS),
    'cái vợt': SV(RACKET),
    'dầu nhớt': SV(OILCAN),
    'Sau nhà bà là cây nhót, cây ớt và cả cây lá lốt.': SV(`${ground(94)}${at(0, 0, 0.56, HOUSE())}${at(52, 0, 0.5, OLEASTER)}${at(48, 52, 0.42, BETEL)}${at(70, 50, 0.4, CHILIS)}`),
    'Bà hái cho bé Lan đầy một giỏ nhót.': SV(`${ground(96)}${at(-10, 8, 0.86, ADULT('ba'))}${at(50, 34, 0.5, KID('#E58FA0'))}${at(50, 50, 0.48, BASKET([[30, 46], [44, 42], [58, 46], [70, 44], [38, 40], [52, 38], [64, 40]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="6" ry="9" fill="#D9473A"/>`).join('')))}`),
    'Bố mua cho bé cái vợt mới.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('bo'))}${at(42, 34, 0.58, KID('#F2C14E'))}${at(64, 20, 0.42, RACKET)}`),
    /* Bài 40 · et êt it */
    'con vẹt': SV(PARROT),
    'ngày tết': SV(TET),
    'quả mít': SV(JACKFRUIT),
    'nét chữ': SV(WRITE),
    'sấm sét': SV(THUNDER),
    'trời rét': SV(COLDKID),
    'con rết': SV(CENTIPEDE),
    'dệt vải': SV(LOOM),
    'bồ kết': SV(SOAPBERRY),
    'con vịt': SV(`${WATER(74)}${DUCK(42, 56, 1.3, '#FFFFFF')}`),
    'ríu rít': SV(`<path d="M0 70 C30 66 70 68 100 62" stroke="#8C5A32" stroke-width="5" fill="none"/>${at(-2, 22, 0.5, BIRD('#8C6A42', '#6B4A2E'))}${at(30, 26, 0.44, BIRD('#F2C14E', '#D9A23A'))}${at(58, 20, 0.5, BIRD('#8C6A42', '#6B4A2E'))}${at(8, -10, 0.7, NOTES)}`),
    'thịt gà': T['đùi gà'],
    'Tết đến, bé và bố mẹ đi chúc tết nhà bà nội.': SV(`${ground(96)}${at(56, 0, 0.44, MAIBRANCH)}${at(-6, 34, 0.6, ADULT('ba'))}${at(30, 30, 0.56, ADULT('bo'))}${at(52, 34, 0.54, ADULT('me'))}${at(36, 52, 0.46, KID('#D9473A'))}`),
    'Cây mai đầu ngõ đã chi chít lộc non.': SV(`${ground(94)}<path d="M2 94 V54 H24 V94" fill="#C8C3BC"/><path d="M50 94 C50 70 46 56 40 44 M48 70 C58 58 70 50 84 46 M44 56 C34 46 26 40 20 30" stroke="#6B4A2E" stroke-width="5" fill="none"/>${at(10, 0, 0.9, MAI(14))}${[[30, 40], [62, 54], [76, 48], [40, 30], [48, 60]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="3" ry="2" fill="#8CC063" stroke="none"/>`).join('')}`),
    'Trời trở rét, mẹ mặc thêm áo ấm cho bé.': SV(`${ground(96)}${at(-8, 8, 0.86, ADULT('me'))}${at(40, 30, 0.66, KID('#D9473A'))}<path d="M66 82 L74 74 M70 70 C74 66 80 70 76 76 Z" fill="${HAND}"/>${[[86, 20], [12, 14], [90, 52]].map(([x, y]) => `<path d="M${x - 5} ${y} h10 M${x} ${y - 5} v10" stroke="#7FB2D9" stroke-width="1.8"/>`).join('')}`),
    /* Bài 41 · ut ưt */
    'cái bút': SV(PENBIG),
    'lọ mứt': SV(MUTJAR),
    'bút chì': SV(PENCIL),
    'chim cút': SV(QUAIL),
    'sút xa': SV(KICK),
    'mứt dừa': SV(MUTDUA),
    'nứt nẻ': SV(CRACK),
    'đứt dây': SV(SNAP),
    'Chị Thảo có bút chì, có cả bút bi nữa.': SV(`${ground(96)}${at(-4, 8, 0.86, ADULT('co').replace('#DDAA55', '#E58FA0'))}${at(54, 30, 0.44, PENCIL)}${at(66, 30, 0.44, PENBIG)}`),
    'Tết đến, mẹ làm mứt dừa gửi về quê cho bà.': SV(`${ground(96)}${at(-10, 8, 0.86, ADULT('me'))}${at(48, 50, 0.5, MUTDUA)}${at(60, 0, 0.4, MAIBRANCH)}`),
    'Bé cầm bút chì vẽ chú chim cút.': SV(`${ground(96)}${at(-12, 14, 0.8, KID('#5B8FC9'))}<rect x="40" y="36" width="56" height="50" rx="3" fill="#FFFFFF"/>${at(46, 40, 0.46, QUAIL.replace(ground(88), ''))}${at(26, 46, 0.4, PENCIL)}`),
    /* Bài 42 · ap ăp âp */
    'xe đạp': SV(`${ground(94)}${at(0, 2, 1, BIKE)}`),
    'cặp da': SV(BAG.replace('#D9473A', '#8C5A32').replace('#B4553C', '#6B4A2E').replace('#8C4A2E', '#5E3A22')),
    'cá mập': SV(SHARK),
    'sáp màu': SV(CRAYONS),
    'bài tập': SV(HOMEWORK),
    'rạp hát': SV(THEATER),
    'cải bắp': SV(CABBAGEHEAD),
    'bắp ngô': SV(`${ground(94)}${CORN(36, 54, 1.2, -12)}${CORN(64, 58, 1.1, 14)}`),
    'đắp chăn': SV(SLEEP.replace('#9FC7D8', '#E58FA0')),
    'tôm hấp': SV(SHRIMPS),
    'tấp nập': SV(BUSY),
    'tập bơi': T['đi bơi'],
    'Mẹ mua cho bé cặp da, bé hứa sẽ học tập thật chăm chỉ.': SV(`${ground(96)}${at(-10, 8, 0.86, ADULT('me'))}${at(44, 32, 0.6, KID('#5B8FC9'))}${at(66, 56, 0.36, BAG.replace('#D9473A', '#8C5A32').replace('#B4553C', '#6B4A2E'))}`),
    'Phố xá ban đêm thật tấp nập.': SV(NIGHTSTREET),
    'Bố và bé đạp xe khắp phố.': SV(`<path d="M0 0 H100 V100 H0 Z" fill="#F4ECDD" stroke="none"/>${at(-4, 0, 0.36, HOUSE('#E8A85A', '#B4553C'))}${at(30, 0, 0.36, HOUSE('#9FC7D8', '#5B8FC9'))}${at(64, 0, 0.36, HOUSE())}${at(0, 26, 0.74, RIDE)}`),
    /* Bài 43 · op ôp ơp */
    'con cọp': T['hổ dữ'],
    'hộp bút': SV(PENCASE),
    'lớp học': SV(CLASSROOM),
    'tóp mỡ': SV(CRACKLING),
    'chóp núi': SV(PEAK),
    'họp chợ': SV(MARKET),
    'lốp xe': SV(TIRE),
    'tốp ca': SV(CHOIR),
    'lộp độp': SV(ROOFRAIN),
    'tia chớp': SV(BOLT),
    'lợp nhà': SV(ROOFER),
    'cá đớp mồi': SV(FISHBITE),
    'Mưa rơi lộp độp.': SV(`<rect x="2" y="2" width="96" height="96" rx="8" fill="#DCE4EA" stroke="none"/>${at(0, -10, 0.9, RAINCLOUD)}${SPLASH}${WATER(84)}`),
    'Họ nhà nhái tụ họp bên bờ ao.': SV(`${WATER(70)}<path d="M0 72 C30 64 70 66 100 72 V60 H0 Z" fill="#9BC46A" stroke="none"/>${FROG(-6, 22, 0.5)}${FROG(28, 16, 0.5)}${FROG(60, 24, 0.5)}`),
    'Bé cất bút vào hộp, đội mũ và chào cô.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('co'))}${at(44, 22, 0.74, KID('#5B8FC9'))}${at(81, 49, 0.7, HAT)}${at(54, 78, 0.3, PENCASE)}`)
  });
  /* ---------- Bài 44–48 (vần ep êp ip up, anh ênh inh, ach êch ich, ang ăng âng, ong ông ung ưng) ---------- */
  const SANDAL = (x, y, a, c = '#5B8FC9') => `<g transform="translate(${x} ${y}) rotate(${a})"><path d="M-12 -30 C-14 -40 14 -40 12 -30 L12 26 C12 36 -12 36 -12 26 Z" fill="#F2C14E"/><path d="M-12 -14 C-4 -22 4 -22 12 -14 M-12 -14 L0 -2 L12 -14" stroke="${c}" stroke-width="5" fill="none"/></g>`;
  const SANDALS = `${SANDAL(34, 54, -10)}${SANDAL(66, 54, 10)}`;
  const TOQUE = `<path d="M28 30 C18 30 18 14 30 14 C32 4 46 2 50 10 C56 2 70 4 70 14 C82 14 82 30 72 30 V38 H28 Z" fill="#FFFFFF"/><path d="M28 34 H72" stroke="#DCCFBC" stroke-width="2"/>`;
  const CHEF = `${ground(96)}${at(0, 18, 0.86, ADULT('bo').replace('#5B8FC9', '#FFFFFF'))}${at(6, 6, 0.84, TOQUE)}<path d="M56 90 L84 62" stroke="#9AA2AA" stroke-width="4"/><ellipse cx="88" cy="58" rx="6" ry="8" fill="#9AA2AA" transform="rotate(45 88 58)"/>`;
  const COUCAL = `${ground(90)}<path d="M4 84 C30 78 60 80 96 74" stroke="#8C5A32" stroke-width="5" fill="none"/>${at(0, -6, 0.9, BIRD('#3A3B3C', '#A8622E', '<path d="M96 42 L100 54" stroke="none"/>'))}<circle cx="20" cy="37" r="3" fill="#D9473A" stroke="none"/>`;
  const LOTUSBUD = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V50" stroke="#5E8F3A" stroke-width="4"/><path d="M0 2 C-16 -10 -12 -34 0 -46 C12 -34 16 -10 0 2 Z" fill="#F2A7B8"/><path d="M0 2 C-8 -10 -6 -28 0 -40" stroke="#E07A94" stroke-width="2" fill="none"/></g>`;
  const LOTUSBUDS = `${WATER(70)}<ellipse cx="72" cy="74" rx="22" ry="7" fill="#6FAE4F"/>${LOTUSBUD(36, 52, 1)}${LOTUSBUD(62, 56, 0.7)}`;
  const CARP = `${WATER(30)}${at(4, 14, 0.94, FISH('#F2903A', '#E86A4F'))}${[[30, 56], [42, 62], [52, 56], [40, 50]].map(([x, y]) => `<path d="M${x - 4} ${y} q4 -4 8 0" stroke="#D9732A" stroke-width="1.8"/>`).join('')}<path d="M16 58 C10 66 6 66 4 62" stroke="#D9732A" stroke-width="1.8" fill="none"/>`;
  const HAIRCLIP = `<path d="M14 52 L86 40 L86 50 L14 62 Z" fill="#E58FA0"/><path d="M20 58 L84 46" stroke="#C86A80" stroke-width="2"/>${FLOWER(76, 38, 9, '#F2C14E')}<circle cx="76" cy="38" r="4" fill="#E86A4F"/>`;
  const STICKYRICE = BOWL(`<path d="M10 50 C14 26 86 26 90 50 Z" fill="#FFFFFF"/>${Array.from({ length: 14 }, (_, i) => `<ellipse cx="${22 + (i * 23) % 56}" cy="${34 + (i * 7) % 14}" rx="3" ry="1.6" fill="#E9E0D2" stroke="none"/>`).join('')}<path d="M32 30 C40 26 60 26 68 30" stroke="#F2C14E" stroke-width="3" fill="none"/>`);
  const FIRE = `${ground(92)}<path d="M18 92 L82 80 M18 80 L82 92" stroke="#8C5A32" stroke-width="7"/><path d="M50 86 C30 80 30 60 40 46 C42 58 48 56 46 44 C52 32 50 22 56 14 C60 30 72 38 70 56 C76 52 76 46 74 40 C84 54 80 80 50 86 Z" fill="#F2903A"/><path d="M50 84 C40 80 40 68 46 60 C48 68 54 66 54 58 C62 66 62 80 50 84 Z" fill="#F2C14E"/>`;
  const STACKCHAIRS = `${ground(96)}${at(-6, 10, 0.86, KID_FULL('#6FAE4F'))}${at(40, 30, 0.6, CHAIR())}${at(48, 14, 0.6, CHAIR())}`;
  const SQUINT = `${ground(96)}${KID('#F2C14E').replace(eyes(44, 56, 49, 2.4), '<path d="M40 49 q4 -3 8 0 M52 49 q4 -3 8 0" stroke-width="2.4"/>').replace('<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>', '<path d="M43 56 q7 7 14 0 Z" fill="#B4553C"/>')}${at(68, 4, 0.3, SUN)}`;
  const HURRY = `${ground(96)}${at(-8, 4, 0.9, KID_FULL('#5B8FC9', true))}${at(52, 8, 0.4, BAG)}${at(56, 48, 0.42, CLOCK)}<path d="M2 50 h10 M4 60 h8" stroke="#A39588" stroke-width="2"/>`;
  const CHIRP = `${ground(90)}${CHICK(30, 74)}${CHICK(56, 78)}${CHICK(78, 72)}${at(-10, -12, 0.7, NOTES)}`;
  const DOLL = `${ground(94)}<path d="M30 92 C30 70 38 60 50 60 C62 60 70 70 70 92 Z" fill="#E58FA0"/><path d="M30 92 H70" stroke="#C86A80" stroke-width="3"/><circle cx="50" cy="40" r="18" fill="${SKIN}"/><path d="M30 40 C26 16 74 16 70 40 C70 58 76 62 72 66 C64 52 66 34 50 30 C34 34 36 52 28 66 C24 62 30 58 30 40 Z" fill="#F2C14E"/>${eyes(44, 56, 42, 2.4)}<path d="M46 50 q4 3 8 0" stroke-width="2"/>${FLOWER(66, 26, 6, '#E86A4F')}`;
  const HELPMOM = `${ground(96)}${at(-10, 8, 0.86, ADULT('me'))}${at(44, 30, 0.66, KID('#6FAE4F'))}<path d="M78 40 L68 92" stroke="#B47846" stroke-width="4"/><path d="M60 88 L76 88 L80 96 H56 Z" fill="#D9B45A"/>`;
  const HUTS = `${ground(92)}${[[0, 40, 0.5], [32, 46, 0.42], [60, 38, 0.5]].map(([x, y, s]) => at(x, y, s, HUT)).join('')}`;
  const LIME = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#8CC063"/><circle cx="${x - r * 0.3}" cy="${y - r * 0.3}" r="${r * 0.2}" fill="#B9D86A" stroke="none"/><path d="M${x} ${y - r} l2 -6" stroke="#5E8F3A" stroke-width="2"/>`;
  const LIMES = `${ground(90)}${LIME(36, 62, 22)}<circle cx="70" cy="68" r="18" fill="#B9D86A"/><circle cx="70" cy="68" r="13" fill="#E6F2B8"/>${[0, 60, 120, 180, 240, 300].map(a => `<path d="M70 68 L${70 + Math.cos(a * Math.PI / 180) * 12} ${68 + Math.sin(a * Math.PI / 180) * 12}" stroke="#B9D86A" stroke-width="1.6"/>`).join('')}`;
  const CANAL = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 40 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/><path d="M30 40 H70 L96 100 H4 Z" fill="#7FB2D9"/><path d="M42 60 q4 -3 8 0 M34 80 q6 -3 12 0 M58 72 q6 -3 12 0" stroke="#FFFFFF" stroke-width="2"/>${at(4, 20, 0.3, TREE)}${at(70, 20, 0.3, TREE)}`;
  const SPECS = `<circle cx="28" cy="54" r="18" fill="#DCEFF5" stroke-width="5"/><circle cx="72" cy="54" r="18" fill="#DCEFF5" stroke-width="5"/><path d="M46 52 C48 46 52 46 54 52 M10 50 L2 40 M90 50 L98 40" stroke-width="5"/><path d="M20 46 l6 -4 M64 46 l6 -4" stroke="#FFFFFF" stroke-width="3"/>`;
  const GREENS = `${[['#3E8E4A', 26, 40], ['#6FAE4F', 50, 40], ['#9DCB6A', 74, 40], ['#5B8FC9', 38, 68], ['#7FB2D9', 62, 68]].map(([c, x, y]) => `<circle cx="${x}" cy="${y}" r="14" fill="${c}"/>`).join('')}`;
  const BREAD = `${ground(88)}<path d="M8 66 C8 46 92 40 94 58 C96 72 12 82 8 66 Z" fill="#E9B04E"/><path d="M26 58 l8 -6 M44 56 l8 -6 M62 54 l8 -6" stroke="#C68B3A" stroke-width="3"/>`;
  const BRANCH = `<path d="M4 70 C30 60 50 50 96 36 M50 52 C60 40 64 30 66 20 M30 62 C30 72 36 80 44 84" stroke="#8C5A32" stroke-width="5" fill="none"/>${LEAF(66, 18, -60, '#6FAE4F')}${LEAF(80, 40, -20, '#6FAE4F')}${LEAF(44, 84, 30, '#6FAE4F')}${LEAF(90, 34, 10, '#7DB25A')}`;
  const SEESAW = `${ground(92)}<path d="M40 92 L50 68 L60 92 Z" fill="#C68B59"/><path d="M6 80 L94 56" stroke="#D9473A" stroke-width="6"/>${at(-6, 28, 0.5, KID_FULL('#5B8FC9'))}${at(52, 4, 0.5, KID_FULL('#E58FA0'))}`;
  const ADRIFT = `${WATER(64)}<path d="M0 0 H100 V64 H0 Z" fill="#E3F0F4" stroke="none"/>${at(10, -14, 0.8, BOAT)}<path d="M50 42 V14 L72 40 Z" fill="#F4F0EA"/><path d="M50 42 V14" stroke-width="3"/>`;
  const BOB = `${WATER(50)}<path d="M0 0 H100 V50 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 58 C16 48 30 48 46 58 C62 68 78 68 100 56" stroke="#5B8FC9" stroke-width="3" fill="none"/><g transform="rotate(-12 50 50)">${at(20, -12, 0.6, BOAT)}</g><path d="M10 80 q6 -6 12 0 M64 84 q6 -6 12 0" stroke="#FFFFFF" stroke-width="2"/>`;
  const FAMILY = `${ground(96)}${at(-12, 10, 0.72, ADULT('bo'))}${at(34, 10, 0.72, ADULT('me'))}${at(20, 40, 0.5, KID('#F2C14E'))}${at(56, 40, 0.5, KID('#6FAE4F'))}`;
  const PUPIL = `${ground(96)}${KID_FULL('#FFFFFF', false, '<path d="M44 52 L50 60 L56 52" fill="#D9473A"/>')}${at(54, 50, 0.3, BAG)}`;
  const COMPUTER = `<rect x="14" y="14" width="72" height="50" rx="4" fill="#3A3B3C"/><rect x="20" y="20" width="60" height="38" fill="#7FB2D9" stroke="none"/><path d="M44 64 L40 78 H60 L56 64" fill="#A39588"/><rect x="18" y="80" width="64" height="10" rx="3" fill="#C8C3BC"/>`;
  const BOOKS = `${ground(92)}<rect x="14" y="70" width="70" height="12" rx="2" fill="#5B8FC9"/><rect x="18" y="58" width="64" height="12" rx="2" fill="#E86A4F"/><rect x="12" y="46" width="68" height="12" rx="2" fill="#6FAE4F"/><rect x="20" y="82" width="62" height="10" rx="2" fill="#F2C14E"/>${at(46, 6, 0.46, NOTEBOOK)}`;
  const UPNOSE = `${ground(96)}<path d="M30 96 C30 76 38 66 50 66 C62 66 70 76 70 96 Z" fill="#E86A4F"/><circle cx="50" cy="44" r="22" fill="${SKIN}"/><path d="M28 42 C26 18 74 18 72 42 C64 30 40 28 28 42 Z" fill="${HAIR}"/>${eyes(42, 58, 42, 2.4)}<path d="M46 52 C48 46 52 46 54 52 Z" fill="#E9B79C"/><circle cx="48" cy="51" r="1.4" fill="#8C5A32" stroke="none"/><circle cx="52" cy="51" r="1.4" fill="#8C5A32" stroke="none"/><path d="M45 58 q5 4 10 0" stroke-width="2.2"/>`;
  const CALENDAR = `<rect x="16" y="18" width="68" height="70" rx="4" fill="#FFFFFF"/><rect x="16" y="18" width="68" height="18" rx="4" fill="#D9473A"/><path d="M32 12 V24 M68 12 V24" stroke-width="4"/>${Array.from({ length: 12 }, (_, i) => `<rect x="${22 + (i % 4) * 15}" y="${42 + Math.floor(i / 4) * 14}" width="10" height="9" rx="1.5" fill="${i === 6 ? '#F2C14E' : '#E9E0D2'}" stroke="none"/>`).join('')}`;
  const COACH = `${ground(94)}<rect x="6" y="32" width="88" height="48" rx="8" fill="#5B8FC9"/>${[14, 32, 50, 68].map(x => `<rect x="${x}" y="40" width="14" height="14" rx="2" fill="#DCEFF5"/>`).join('')}<rect x="82" y="40" width="8" height="24" rx="2" fill="#DCEFF5"/><path d="M6 64 H94" stroke="#F2C14E" stroke-width="4"/><circle cx="26" cy="82" r="9" fill="#3A3B3C"/><circle cx="74" cy="82" r="9" fill="#3A3B3C"/>`;
  const BRICKS = `${[0, 1, 2, 3].map(r => [0, 1, 2].map(c => `<rect x="${8 + c * 28 + (r % 2) * 14}" y="${44 + r * 12}" width="26" height="10" rx="1" fill="#C8643A"/>`).join('')).join('')}<path d="M10 40 C20 26 40 22 50 30 C60 22 80 26 90 40" fill="#B4553C"/><path d="M10 40 C20 34 40 30 50 36 C60 30 80 34 90 40" stroke="#8C3A2A" stroke-width="2" fill="none"/>`;
  const CLEAN = `${ground(96)}<rect x="10" y="60" width="80" height="8" rx="2" fill="#C68B59"/><path d="M16 68 V96 M84 68 V96" stroke="#8C5A32" stroke-width="4"/>${[[30, 50], [66, 44], [50, 30]].map(([x, y]) => STAR(x, y, 5, '#F2C14E')).join('')}<path d="M40 56 C40 50 60 50 60 56 Z" fill="#7FB2D9"/>`;
  const FROGBIG = `${ground(90)}${at(0, 4, 1, TOAD.replace(ground(88), '').replace(/#8C9A5A/g, '#7DB25A').replace(/#6E7A3E/g, '#5E8F3A'))}`;
  const FROGLET = `${WATER(66)}${at(32, 30, 0.44, TOAD.replace(ground(88), '').replace(/#8C9A5A/g, '#9DCB6A').replace(/#6E7A3E/g, '#6FAE4F'))}<ellipse cx="50" cy="72" rx="26" ry="8" fill="#6FAE4F"/>`;
  const UNEVEN = `${ground(92)}<rect x="14" y="30" width="22" height="62" fill="#5B8FC9"/><rect x="40" y="62" width="22" height="30" fill="#E86A4F"/><rect x="66" y="46" width="22" height="46" fill="#6FAE4F"/>`;
  const SAUSAGE = `<ellipse cx="50" cy="74" rx="44" ry="12" fill="#FFFFFF"/>${[[30, 60, -15], [56, 58, 10], [42, 70, 5]].map(([x, y, a]) => `<g transform="rotate(${a} ${x} ${y})"><rect x="${x - 22}" y="${y - 7}" width="44" height="14" rx="7" fill="#C8643A"/><path d="M${x - 10} ${y - 4} l4 8 M${x} ${y - 4} l4 8 M${x + 10} ${y - 4} l4 8" stroke="#A8483A" stroke-width="1.8"/></g>`).join('')}`;
  const FLASK = `${ground(94)}<path d="M34 24 H66 V90 H34 Z" fill="#E86A4F"/><rect x="38" y="12" width="24" height="14" rx="3" fill="#5B8FC9"/><path d="M66 36 C80 36 80 70 66 70" stroke="#5B8FC9" stroke-width="5" fill="none"/><path d="M34 40 H66 M34 76 H66" stroke="#C24E36" stroke-width="3"/>${FLOWER(50, 58, 7, '#F2C14E')}`;
  const WARBLER = `<path d="M0 74 C30 70 70 72 100 66" stroke="#8C5A32" stroke-width="5" fill="none"/>${at(14, 14, 0.7, BIRD('#B9C46A', '#8C9A3E'))}<path d="M24 44 L12 44" stroke="#3A3B3C" stroke-width="2.4"/>`;
  const GOLDFISH = `<rect x="10" y="20" width="80" height="70" rx="14" fill="#DCEFF5"/><path d="M10 36 H90" stroke="#7FB2D9" stroke-width="2"/>${at(16, 24, 0.66, FISH('#F2903A', '#F2C14E'))}<path d="M30 80 C26 70 34 66 30 56 M70 82 C66 72 74 68 70 60" stroke="#6FAE4F" stroke-width="3" fill="none"/>`;
  const SHOOTS = `${ground(92)}${[[30, 1], [54, 1.2], [76, 0.9]].map(([x, s]) => `<g transform="translate(${x} 92) scale(${s})"><path d="M-10 0 C-10 -20 -4 -40 0 -54 C4 -40 10 -20 10 0 Z" fill="#C9B26A"/><path d="M-8 -14 L8 -22 M-6 -30 L6 -36" stroke="#8C7A3E" stroke-width="2"/></g>`).join('')}<path d="M86 92 V20" stroke="#6FAE4F" stroke-width="5"/><path d="M86 36 h-12 M86 56 h-12" stroke="#6FAE4F" stroke-width="3"/>`;
  const TOWER = `${ground(96)}<rect x="24" y="10" width="52" height="86" fill="#C8C3BC"/>${[18, 34, 50, 66].map(y => [32, 46, 60].map(x => `<rect x="${x}" y="${y}" width="9" height="9" fill="#7FB2D9" stroke="none"/>`).join('')).join('')}<rect x="44" y="80" width="12" height="16" fill="#8C5A32"/>`;
  const BLACKBOARD = `<rect x="10" y="16" width="80" height="56" rx="3" fill="#3E6B4A"/><rect x="10" y="16" width="80" height="56" rx="3" stroke="#8C5A32" stroke-width="5"/><path d="M24 34 C34 28 40 44 50 34 M24 50 H60" stroke="#FFFFFF" stroke-width="2.4"/><path d="M30 72 L24 92 M70 72 L76 92" stroke="#8C5A32" stroke-width="4"/>`;
  const YELLOWS = `${[['#F2C14E', 26, 40], ['#F7D774', 50, 40], ['#E9B04E', 74, 40], ['#F2D24E', 38, 68], ['#DDAA55', 62, 68]].map(([c, x, y]) => `<circle cx="${x}" cy="${y}" r="14" fill="${c}"/>`).join('')}`;
  const BANG = `${[[34, 50, -20, '#D9473A'], [62, 52, 20, '#6FAE4F']].map(([x, y, a, c]) => `<g transform="rotate(${a} ${x} ${y})"><path d="M${x} ${y - 34} C${x - 30} ${y - 30} ${x - 28} ${y + 26} ${x} ${y + 30} C${x + 28} ${y + 26} ${x + 30} ${y - 30} ${x} ${y - 34} Z" fill="${c}"/><path d="M${x} ${y - 30} V${y + 40}" stroke="#3A3B3C" stroke-width="2.4"/>${[-14, 0, 14].map(d => `<path d="M${x} ${y + d} L${x - 14} ${y + d - 10} M${x} ${y + d} L${x + 14} ${y + d - 10}" stroke="#3A3B3C" stroke-width="1.4"/>`).join('')}</g>`).join('')}`;
  const SUNNY = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/>${at(10, 0, 0.8, SUN)}<path d="M0 82 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>`;
  const BRUSH = `${ground(96)}${KID('#5B8FC9').replace('<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>', '<rect x="43" y="55" width="14" height="5" rx="2" fill="#FFFFFF"/>')}<path d="M58 58 L82 74" stroke="#6FAE4F" stroke-width="5"/><rect x="52" y="54" width="8" height="5" rx="1.5" fill="#FFFFFF" transform="rotate(34 56 56)"/><circle cx="62" cy="54" r="3" fill="#FFFFFF" stroke="none"/><circle cx="66" cy="50" r="2" fill="#FFFFFF" stroke="none"/>`;
  const FULLMOON = `<rect x="2" y="2" width="96" height="96" rx="8" fill="#2E3A5C" stroke="none"/><circle cx="54" cy="44" r="26" fill="#F7E07A"/><circle cx="46" cy="38" r="4" fill="#E9CC5A" stroke="none"/><circle cx="62" cy="52" r="5" fill="#E9CC5A" stroke="none"/>${STAR(16, 20, 3)}${STAR(84, 80, 3)}<path d="M2 84 C30 76 70 80 98 74 V98 H2 Z" fill="#3E4A6C" stroke="none"/>`;
  const CRESCENT = `<rect x="2" y="2" width="96" height="96" rx="8" fill="#2E3A5C" stroke="none"/><path d="M60 16 C34 16 24 44 34 64 C42 80 64 86 78 78 C58 76 46 60 48 42 C50 30 54 22 60 16 Z" fill="#F7E07A"/>${STAR(20, 24, 3)}${STAR(80, 30, 3)}${STAR(30, 82, 2.5)}`;
  const CHERISH = `${ground(96)}${at(-6, 8, 0.9, KID('#E58FA0'))}<path d="M26 78 C36 92 64 92 74 78" stroke="#E58FA0" stroke-width="10" fill="none"/>${at(30, 58, 0.4, DOLL.replace(ground(94), ''))}`;
  const OBEY = `${ground(96)}${at(-12, 8, 0.86, ADULT('me'))}${at(44, 22, 0.74, KID('#6FAE4F'))}<path d="M60 60 L74 50" stroke="${SKIN}" stroke-width="6"/>`;
  const BALLOON = (x, y, c) => `<path d="M${x} ${y + 18} C${x - 4} ${y + 34} ${x + 4} ${y + 44} ${x} ${y + 60}" stroke="#A39588" stroke-width="1.4" fill="none"/><ellipse cx="${x}" cy="${y}" rx="14" ry="18" fill="${c}"/><path d="M${x - 3} ${y + 18} l3 4 l3 -4 Z" fill="${c}"/><ellipse cx="${x - 5}" cy="${y - 6}" rx="3" ry="5" fill="#FFFFFF" stroke="none" opacity=".6"/>`;
  const BALLOONS = `${BALLOON(30, 30, '#E86A4F')}${BALLOON(52, 22, '#5B8FC9')}${BALLOON(72, 34, '#F2C14E')}`;
  const PINE = `${ground(94)}<path d="M50 94 V80" stroke="#8C5A32" stroke-width="7"/><path d="M50 8 L72 36 H60 L80 58 H64 L86 82 H14 L36 58 H20 L40 36 H28 Z" fill="#3E8E4A"/>`;
  const WATERLILY = `${WATER(58)}<ellipse cx="30" cy="74" rx="22" ry="7" fill="#6FAE4F"/><ellipse cx="76" cy="80" rx="18" ry="6" fill="#6FAE4F"/><path d="M52 70 V40" stroke="#5E8F3A" stroke-width="3"/>${[-50, -25, 0, 25, 50].map(a => `<ellipse cx="52" cy="28" rx="5" ry="14" transform="rotate(${a} 52 40)" fill="#B48ADC"/>`).join('')}<circle cx="52" cy="38" r="4" fill="#F2C14E"/>`;
  const EGGS = `<ellipse cx="50" cy="74" rx="40" ry="14" fill="#DDAA55"/><path d="M14 70 C30 82 70 82 86 70" stroke="#B9873E" stroke-width="3" fill="none"/>${[[34, 56], [50, 52], [66, 56], [42, 66], [58, 66]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="10" ry="13" fill="#F6E3C8"/>`).join('')}`;
  const PINWHEEL = `<path d="M50 50 V96" stroke="#8C5A32" stroke-width="4"/>${[['#E86A4F', 0], ['#F2C14E', 90], ['#5B8FC9', 180], ['#6FAE4F', 270]].map(([c, a]) => `<path d="M50 50 L50 14 C66 14 70 30 50 50 Z" fill="${c}" transform="rotate(${a} 50 50)"/>`).join('')}<circle cx="50" cy="50" r="4" fill="#3A3B3C"/>`;
  const HAMMOCK = `${ground(94)}<path d="M10 94 V20 M90 94 V20" stroke="#8C5A32" stroke-width="6"/><path d="M10 34 C30 70 70 70 90 34" stroke="#5B8FC9" stroke-width="10" fill="none"/>${[30, 50, 70].map(x => `<path d="M${x} ${56 + (x === 50 ? 6 : 0)} V${60 + (x === 50 ? 6 : 0)}" stroke="#3F6FA6" stroke-width="2"/>`).join('')}`;
  const BEEFLY = `${at(-6, 0, 1, BEE)}${FLOWER(80, 80, 10, '#E58FA0')}<circle cx="80" cy="80" r="4" fill="#F2C14E"/>`;
  const PEACOCK = `${ground(94)}${Array.from({ length: 9 }, (_, i) => { const a = -150 + i * 15; const r = a * Math.PI / 180; const x = 50 + Math.cos(r) * 40, y = 70 + Math.sin(r) * 50; return `<path d="M50 70 L${x} ${y}" stroke="#3E8E4A" stroke-width="5"/><circle cx="${x}" cy="${y}" r="7" fill="#3E8E4A"/><circle cx="${x}" cy="${y}" r="3.6" fill="#5B8FC9"/>`; }).join('')}<ellipse cx="50" cy="72" rx="12" ry="16" fill="#3F6FA6"/><path d="M50 58 C46 46 46 34 50 28" stroke="#3F6FA6" stroke-width="7" fill="none"/><circle cx="50" cy="26" r="7" fill="#3F6FA6"/><circle cx="48" cy="24" r="1.8" fill="#FFFFFF" stroke="none"/><path d="M50 18 l-3 -6 M50 18 l0 -7 M50 18 l3 -6" stroke="#3F6FA6" stroke-width="1.6"/><path d="M44 26 L38 27 L44 29 Z" fill="#F2C14E"/><path d="M46 86 V94 M54 86 V94" stroke="#8C5A32" stroke-width="2.4"/>`;
  const GATE = `${ground(94)}<rect x="8" y="22" width="16" height="72" fill="#C8C3BC"/><rect x="76" y="22" width="16" height="72" fill="#C8C3BC"/><path d="M4 22 H28 M72 22 H96" stroke="#A39588" stroke-width="4"/><path d="M24 40 H76 V94 H24 Z" fill="#8C5A32"/>${[32, 42, 52, 62, 70].map(x => `<path d="M${x} 40 V94" stroke="#5E3A22" stroke-width="2"/>`).join('')}<path d="M24 24 C40 10 60 10 76 24" stroke="#6FAE4F" stroke-width="5" fill="none"/>${FLOWER(40, 16, 5, '#E58FA0')}${FLOWER(62, 16, 5, '#E86A4F')}`;
  const BASKETROUND = `${ground(92)}<path d="M10 46 C10 92 90 92 90 46 Z" fill="#D9B45A"/><ellipse cx="50" cy="46" rx="40" ry="10" fill="#C68B59"/>${[58, 70, 80].map(y => `<path d="M${16 + (y - 46) * 0.4} ${y} C40 ${y + 6} 60 ${y + 6} ${84 - (y - 46) * 0.4} ${y}" stroke="#B9873E" stroke-width="2.4" fill="none"/>`).join('')}`;
  const FIGS = `<path d="M10 20 C40 26 60 22 90 30" stroke="#8C5A32" stroke-width="5" fill="none"/>${[[24, 46], [40, 54], [58, 48], [74, 56], [34, 70], [52, 72], [68, 74]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${y > 60 ? '#C8643A' : '#9DBA4E'}"/><circle cx="${x - 2}" cy="${y - 2}" r="1.2" fill="#FFFFFF" stroke="none"/>`).join('')}${LEAF(80, 24, 20, '#6FAE4F')}`;
  const BIN = `${ground(94)}<path d="M24 30 H76 L70 94 H30 Z" fill="#6FAE4F"/><rect x="18" y="20" width="64" height="12" rx="3" fill="#4E8A3A"/><rect x="42" y="12" width="16" height="8" rx="2" fill="#4E8A3A"/><path d="M40 42 V84 M50 42 V84 M60 42 V84" stroke="#4E8A3A" stroke-width="3"/>`;
  const CHUNG = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-30" y="-30" width="60" height="60" rx="4" fill="#4E8A3A"/><path d="M-30 -10 H30 M-30 10 H30 M-10 -30 V30 M10 -30 V30" stroke="#F2E6C8" stroke-width="3"/></g>`;
  const GINGER = `${ground(88)}<path d="M14 66 C14 52 30 50 36 58 C40 46 54 44 58 56 C64 48 80 50 82 62 C92 64 92 80 80 82 C60 88 30 86 18 80 C10 76 10 70 14 66 Z" fill="#E9C47A"/><path d="M30 64 q6 4 12 0 M54 66 q6 4 12 0 M40 76 q8 3 16 0" stroke="#C99A4A" stroke-width="2"/><path d="M36 58 C34 40 40 30 44 24 M58 56 C60 40 66 34 70 30" stroke="#6FAE4F" stroke-width="3" fill="none"/>`;
  const FOREST = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${[[0, 30, 0.6], [26, 20, 0.7], [56, 26, 0.64], [76, 34, 0.56], [14, 50, 0.5], [44, 48, 0.54]].map(([x, y, s]) => at(x, y, s, PINE)).join('')}`;
  const LOTUSPOND = `${WATER(60)}<path d="M0 0 H100 V60 H0 Z" fill="#E3F0F4" stroke="none"/><ellipse cx="22" cy="74" rx="20" ry="7" fill="#6FAE4F"/><ellipse cx="74" cy="80" rx="22" ry="7" fill="#6FAE4F"/>${[[48, 48, 1], [80, 58, 0.7]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V30" stroke="#5E8F3A" stroke-width="3"/>${[-40, -15, 15, 40].map(a => `<path d="M0 0 C-8 -10 -6 -26 0 -32 C6 -26 8 -10 0 0 Z" transform="rotate(${a})" fill="#F2A7B8"/>`).join('')}<circle r="4" fill="#F2C14E"/></g>`).join('')}`;
  const BENT = `${ground(96)}${at(-4, 8, 0.86, ADULT('ba'))}<path d="M70 50 L80 96" stroke="#8C5A32" stroke-width="4"/>${at(54, 68, 0.3, BASKET())}`;
  const TOMARKET = `${ground(96)}${at(-10, 8, 0.86, ADULT('ba'))}${at(52, 54, 0.44, BASKET(`${[[34, 46], [50, 42], [66, 46]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="9" fill="#F6E3C8"/>`).join('')}`))}${CHUNG(80, 50, 0.3)}`;

  Object.assign(T, {
    /* Bài 44 · ep êp ip up */
    'đôi dép': SV(SANDALS),
    'đầu bếp': SV(CHEF),
    'chim bìm bịp': SV(COUCAL),
    'búp sen': SV(LOTUSBUDS),
    'cá chép': SV(CARP),
    'kẹp tóc': SV(HAIRCLIP),
    'dọn dẹp': SV(HELPMOM),
    'cơm nếp': SV(STICKYRICE),
    'bếp lửa': SV(FIRE),
    'xếp ghế': SV(STACKCHAIRS),
    'híp mắt': SV(SQUINT),
    'kịp giờ': SV(HURRY),
    'chíp chíp': SV(CHIRP),
    'búp bê': SV(DOLL),
    'giúp mẹ': SV(HELPMOM.replace('#6FAE4F', '#E86A4F')),
    'lúp xúp': SV(HUTS),
    'Bé phụ mẹ dọn dẹp nhà cửa.': SV(HELPMOM),
    'Bé xếp ghế, lau bàn và cất đồ chơi vào sọt.': SV(`${ground(96)}${at(-8, 8, 0.86, KID_FULL('#F2C14E'))}${at(48, 50, 0.46, SOT)}${at(54, 36, 0.3, BALL(50, 50, 30))}`),
    'Mẹ khen bé chăm chỉ.': SV(`${ground(96)}${at(-10, 8, 0.86, ADULT('me'))}${at(44, 30, 0.66, KID('#6FAE4F'))}${STAR(84, 22, 8)}`),
    /* Bài 45 · anh ênh inh */
    'quả chanh': SV(LIMES),
    'con kênh': SV(CANAL),
    'cái kính': SV(SPECS),
    'màu xanh': SV(GREENS),
    'bánh mì': SV(BREAD),
    'cành cây': SV(BRANCH),
    'bập bênh': SV(SEESAW),
    'lênh đênh': SV(ADRIFT),
    'dập dềnh': SV(BOB),
    'gia đình': SV(FAMILY),
    'học sinh': SV(PUPIL),
    'máy vi tính': SV(COMPUTER),
    'Xe đạp của Hải có hai bánh màu xanh.': SV(`${ground(94)}${BIKE.replace('stroke="#D9473A"', 'stroke="#3E8E4A"').replace(/<circle cx="(22|78)" cy="76" r="16" stroke-width="3.5"\/>/g, '<circle cx="$1" cy="76" r="16" stroke="#3E8E4A" stroke-width="5"/>')}`),
    'Sinh nhật Hải, mẹ mua cho Hải xe đạp mới.': SV(`${ground(96)}${at(-10, 8, 0.8, ADULT('me'))}${at(32, 30, 0.5, KID('#5B8FC9'))}${at(44, 46, 0.56, BIKE)}`),
    'Bố dạy Hải tập đạp xe.': SV(`${ground(96)}${at(2, 34, 0.66, BIKE)}${at(6, 2, 0.5, KID_FULL('#5B8FC9'))}${at(50, 22, 0.7, ADULT('bo'))}`),
    /* Bài 46 · ach êch ich */
    'sách vở': SV(BOOKS),
    'mũi hếch': SV(UPNOSE),
    'tờ lịch': SV(CALENDAR),
    'xe khách': SV(COACH),
    'gạch ngói': SV(BRICKS),
    'sạch sẽ': SV(CLEAN),
    'con ếch': SV(FROGBIG),
    'ếch con': SV(FROGLET),
    'chênh lệch': SV(UNEVEN),
    'xúc xích': SV(SAUSAGE),
    'cái phích': SV(FLASK),
    'chim chích': SV(WARBLER),
    'Mẹ mua xúc xích cho bé.': SV(`${ground(96)}${at(-10, 8, 0.86, ADULT('me'))}${at(44, 30, 0.66, KID('#F2C14E'))}${at(56, 2, 0.4, SAUSAGE)}`),
    'Bé giúp mẹ lau bàn sạch sẽ.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('me'))}${at(34, 26, 0.6, KID('#6FAE4F'))}${at(20, 0, 0.8, `<rect x="40" y="86" width="60" height="6" rx="2" fill="#C68B59"/>`)}${STAR(90, 60, 4)}`),
    'Du khách đi tàu gỗ ra đảo Cô Tô.': SV(`${WATER(56)}<path d="M0 0 H100 V56 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M60 56 C64 40 84 36 98 44 V56 Z" fill="#9BC46A"/>${at(76, 22, 0.24, TREE)}${at(-6, 6, 0.72, BOAT)}${at(10, 28, 0.3, KID_FULL('#E86A4F'))}${at(26, 28, 0.3, KID_FULL('#5B8FC9'))}`),
    /* Bài 47 · ang ăng âng */
    'cá vàng': SV(GOLDFISH),
    'măng tre': SV(SHOOTS),
    'nhà tầng': SV(TOWER),
    'cái bảng': SV(BLACKBOARD),
    'màu vàng': SV(YELLOWS),
    'lá bàng': SV(BANG),
    'trời nắng': SV(SUNNY),
    'đánh răng': SV(BRUSH),
    'trăng rằm': SV(FULLMOON),
    'vầng trăng': SV(CRESCENT),
    'nâng niu': SV(CHERISH),
    'vâng lời': SV(OBEY),
    'Hôm nay trời nắng chang chang.': SV(`${SUNNY}${at(30, 40, 0.5, KID_FULL('#F2C14E', true))}`),
    'Mèo con đi học chẳng mang thứ gì.': SV(`${ground(94)}${at(4, 16, 0.86, CAT)}`),
    'Chỉ mang một cái bút chì.': SV(`${ground(94)}${at(-6, 18, 0.8, CAT)}${at(50, 10, 0.5, PENCIL)}`),
    /* Bài 48 · ong ông ung ưng */
    'bóng bay': SV(BALLOONS),
    'cây thông': SV(PINE),
    'bông súng': SV(WATERLILY),
    'trứng gà': SV(EGGS),
    'chong chóng': SV(PINWHEEL),
    'cái võng': SV(HAMMOCK),
    'con ong': SV(BEEFLY),
    'đồng hồ': T['giờ'],
    'con công': SV(PEACOCK),
    'cái cổng': SV(GATE),
    'cái thúng': SV(BASKETROUND),
    'quả sung': SV(FIGS),
    'thùng rác': SV(BIN),
    'bánh chưng': SV(`${ground(90)}${CHUNG(50, 56, 1.1)}`),
    'củ gừng': SV(GINGER),
    'rừng cây': SV(FOREST),
    'Trong đầm gì đẹp bằng sen.': SV(LOTUSPOND),
    'Bà Bảy đã già, lưng bà đã còng.': SV(BENT),
    'Bà mang trứng gà và bánh chưng ra chợ.': SV(TOMARKET)
  });
  /* ---------- Bài 49–53 (vần iên iêc iêp, iêng iêm yên, iêu yêu iêt, uôi uôm, uôc uôt) ---------- */
  const SEASHORE = `<path d="M0 0 H100 V46 H0 Z" fill="#DCEFF5" stroke="none"/><path d="M0 46 H100 V66 H0 Z" fill="#5B8FC9" stroke="none"/><path d="M0 64 C30 56 70 60 100 66 V100 H0 Z" fill="#F2DDA8"/><path d="M8 54 q8 -4 16 0 M44 52 q8 -4 16 0 M74 56 q8 -4 16 0" stroke="#FFFFFF" stroke-width="2"/>${at(68, 4, 0.22, SUN)}<path d="M18 86 l4 -4 l4 4 l-4 4 Z" fill="#E86A4F"/>`;
  const CIRCUS = `<path d="M6 40 L50 6 L94 40 Z" fill="#D9473A"/><path d="M50 6 L38 40 M50 6 L62 40" stroke="#FFFFFF" stroke-width="5"/><rect x="10" y="40" width="80" height="52" fill="#F7E2B0"/><path d="M10 40 H90" stroke="#B4553C" stroke-width="3"/><path d="M50 6 V0" stroke-width="2"/>${at(22, 50, 0.5, `<circle cx="50" cy="80" r="16" fill="#5B8FC9"/><path d="M44 64 L50 30 L56 64" fill="none"/>${at(30, 0, 0.4, KID_FULL('#F2C14E'))}`)}<circle cx="50" cy="90" r="0"/>${STAR(20, 54, 4)}${STAR(80, 54, 4)}`;
  const CARD = `<rect x="14" y="20" width="72" height="60" rx="4" fill="#FFFFFF"/><path d="M14 20 L50 54 L86 20" stroke="#DCCFBC" stroke-width="2.4" fill="none"/>${FLOWER(50, 64, 8, '#E86A4F')}<circle cx="50" cy="64" r="3.4" fill="#F2C14E"/>${STAR(28, 66, 4)}${STAR(72, 66, 4)}`;
  const ANT = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="-12" cy="0" rx="7" ry="6" fill="#3A3B3C"/><ellipse cx="0" cy="0" rx="5" ry="4" fill="#3A3B3C"/><ellipse cx="12" cy="-1" rx="6" ry="5" fill="#3A3B3C"/><path d="M-4 2 l-6 8 M0 3 l0 9 M4 2 l6 8 M-4 -2 l-6 -7 M4 -2 l6 -7" stroke="#3A3B3C" stroke-width="1.6"/><path d="M16 -5 l4 -8 M14 -5 l1 -9" stroke="#3A3B3C" stroke-width="1.4"/></g>`;
  const ANTS = `${ground(90)}${ANT(22, 84, 1)}${ANT(48, 76, 0.9)}${ANT(72, 68, 0.8)}${ANT(36, 60, 0.7)}<path d="M84 60 C90 50 96 50 98 56" stroke="#C9973F" stroke-width="3" fill="none"/><circle cx="80" cy="64" r="3" fill="#F6E3C8"/>`;
  const BIGMARBLES = `${ground(90)}${[[30, 66, '#5B8FC9'], [56, 72, '#E86A4F'], [74, 58, '#6FAE4F'], [44, 50, '#F2C14E']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="12" fill="${c}"/><path d="M${x - 6} ${y - 2} C${x - 2} ${y - 8} ${x + 4} ${y + 2} ${x + 8} ${y - 4}" stroke="#FFFFFF" stroke-width="2" fill="none"/><circle cx="${x - 5}" cy="${y - 6}" r="2" fill="#FFFFFF" stroke="none"/>`).join('')}`;
  const NATURE = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/>${at(64, 4, 0.24, SUN)}<path d="M0 60 L26 30 L50 56 L70 36 L100 64 V100 H0 Z" fill="#8CB66A" stroke="none"/><path d="M0 78 C30 70 60 74 100 72 V100 H0 Z" fill="#6FAE4F" stroke="none"/><path d="M30 100 C40 86 58 84 70 100" fill="#7FB2D9" stroke="none"/>${at(6, 50, 0.3, TREE)}${at(76, 50, 0.28, TREE)}`;
  const FEAST = `${ground(96)}<rect x="8" y="58" width="84" height="8" rx="2" fill="#C68B59"/><path d="M16 66 V96 M84 66 V96" stroke="#8C5A32" stroke-width="4"/>${at(10, 18, 0.4, BOWL('<path d="M10 50 C14 30 86 30 90 50 Z" fill="#FFFFFF"/>'))}${at(52, 20, 0.36, SAUSAGE)}${at(36, 4, 0.3, CHUNG(50, 50, 1))}${BALLOON(14, 20, '#E86A4F')}${BALLOON(86, 18, '#5B8FC9')}`;
  const HERON = CRANE.replace(/#FFFFFF/g, '#C8CCD0');
  const SCALLOP = `${ground(88)}${[[34, 62, '#F2B8A0'], [66, 66, '#F2D0A0']].map(([x, y, c]) => `<path d="M${x} ${y + 18} L${x - 24} ${y - 6} C${x - 20} ${y - 26} ${x + 20} ${y - 26} ${x + 24} ${y - 6} Z" fill="${c}"/>${[-16, -8, 0, 8, 16].map(d => `<path d="M${x} ${y + 18} L${x + d} ${y - 20}" stroke="#C8846A" stroke-width="1.6"/>`).join('')}<rect x="${x - 6}" y="${y + 16}" width="12" height="6" rx="2" fill="${c}"/>`).join('')}`;
  const LETTUCE = `${ground(92)}${[[-40, '#9DCB6A'], [-15, '#B9D86A'], [15, '#9DCB6A'], [40, '#B9D86A'], [0, '#C9E28A']].map(([a, c]) => `<path d="M50 90 C30 70 26 40 40 22 C50 30 54 20 60 22 C74 40 70 70 50 90 Z" transform="rotate(${a} 50 90)" fill="${c}"/>`).join('')}<path d="M50 90 V40" stroke="#6E9E3E" stroke-width="2"/>`;
  const RELAY = `${ground(96)}${at(-12, 6, 0.86, KID_FULL('#E86A4F', true))}${at(36, 6, 0.86, KID_FULL('#5B8FC9', true))}<rect x="40" y="58" width="16" height="6" rx="3" fill="#F2C14E" transform="rotate(-20 48 61)"/>`;
  const DURIAN = `${ground(92)}<ellipse cx="50" cy="58" rx="34" ry="30" fill="#9DBA4E"/>${Array.from({ length: 30 }, (_, i) => { const x = 22 + (i * 19) % 56, y = 34 + (i * 13) % 48; return `<path d="M${x - 3} ${y + 3} L${x} ${y - 4} L${x + 3} ${y + 3} Z" fill="#7E9A3A" stroke="none"/>`; }).join('')}<path d="M50 28 V16" stroke="#6B4A2E" stroke-width="4"/>`;
  const SWORDFISH = `${WATER(30)}<path d="M2 56 L34 54" stroke="#5E6E88" stroke-width="3"/><path d="M30 56 C40 42 66 40 82 50 L96 38 L92 56 L96 74 L82 62 C66 72 40 70 30 56 Z" fill="#5B7CA8"/><path d="M52 44 L60 26 L66 46 Z" fill="#5B7CA8"/><path d="M34 58 C50 64 66 64 82 60" fill="#C8D8E8" stroke="none"/><circle cx="40" cy="52" r="2.4" fill="#3A3B3C" stroke="none"/>`;
  const SADDLE = `${ground(92)}<path d="M14 50 C24 40 34 52 50 52 C66 52 76 40 86 50 C86 66 74 72 50 72 C26 72 14 66 14 50 Z" fill="#8C4A2E"/><path d="M18 52 C30 46 40 58 50 58 C60 58 70 46 82 52" stroke="#C68B59" stroke-width="3" fill="none"/><path d="M40 72 L36 90 M60 72 L64 90" stroke="#5E3A22" stroke-width="3"/><path d="M32 90 h8 M60 90 h8" stroke="#9AA2AA" stroke-width="4"/><path d="M14 50 L10 42 M86 50 L90 42" stroke="#8C4A2E" stroke-width="5"/>`;
  const GALANGAL = `${ground(88)}<path d="M10 70 C10 58 26 56 32 64 C36 54 50 52 54 62 C60 54 76 54 80 64 C92 64 94 80 82 82 C60 88 26 86 16 80 C10 78 8 74 10 70 Z" fill="#F2C9B0"/>${[24, 42, 60, 76].map(x => `<path d="M${x} 62 V84" stroke="#D99A80" stroke-width="2"/>`).join('')}<path d="M32 64 C30 46 36 34 40 26 M54 62 C56 46 62 38 66 30" stroke="#6FAE4F" stroke-width="3" fill="none"/>`;
  const DILIGENT = `${ground(96)}<rect x="40" y="62" width="56" height="6" rx="2" fill="#C68B59"/><path d="M46 68 V96 M90 68 V96" stroke="#8C5A32" stroke-width="3"/>${at(-8, 10, 0.84, KID('#5B8FC9'))}${at(46, 30, 0.4, NOTEBOOK)}${at(56, 22, 0.5, PEN)}`;
  const GONG = `<path d="M14 92 L30 14 M86 92 L70 14 M24 22 H76" stroke="#8C5A32" stroke-width="5"/><path d="M50 22 V30" stroke="#5E3A22" stroke-width="2"/><circle cx="50" cy="56" r="26" fill="#D9A23A"/><circle cx="50" cy="56" r="10" fill="#E9C25A"/><circle cx="50" cy="56" r="26" fill="none" stroke="#B9873E" stroke-width="3"/><path d="M78 80 L92 66" stroke="#8C5A32" stroke-width="4"/><circle cx="76" cy="82" r="5" fill="#D9473A"/>`;
  const MATCHBOX = `<rect x="16" y="40" width="68" height="40" rx="3" fill="#E86A4F"/><rect x="16" y="40" width="68" height="10" fill="#C24E36"/><rect x="40" y="56" width="20" height="16" rx="2" fill="#F2C14E" stroke="none"/>`;
  const SAPODILLA = `${ground(92)}${[[36, 62, 18], [64, 66, 16], [50, 44, 15]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.9}" fill="#A8743E"/><path d="M${x - 3} ${y - r * 0.9} l3 -5 l3 5" fill="#6E8F3A"/>`).join('')}<ellipse cx="80" cy="44" rx="10" ry="8" fill="#F2D0A0"/><circle cx="80" cy="44" r="3" fill="#3A3B3C" stroke="none"/>`;
  const SICKLE = `<path d="M30 92 L46 62" stroke="#8C5A32" stroke-width="7"/><path d="M46 62 C40 30 64 10 86 20 C70 22 56 36 54 62 Z" fill="#C8CCD0"/>`;
  const NESTSWIFT = `<path d="M0 0 H100 V100 H0 Z" fill="#E9E0D2" stroke="none"/><path d="M20 30 C20 70 80 70 80 30 Z" fill="#F6EEDC"/>${[38, 46, 54].map(y => `<path d="M${22 + (y - 30) * 0.4} ${y} C40 ${y + 6} 60 ${y + 6} ${78 - (y - 30) * 0.4} ${y}" stroke="#E0D2B4" stroke-width="2" fill="none"/>`).join('')}<path d="M10 30 H90" stroke="#A39588" stroke-width="3"/>`;
  const SWIFT = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 C-10 -4 -24 -14 -30 -10 C-20 -6 -12 0 -6 4 C-12 10 -20 20 -16 24 C-8 16 0 8 6 4 L14 2 L6 -2 Z" fill="#3A3B3C"/><circle cx="8" cy="0" r="1.2" fill="#FFFFFF" stroke="none"/></g>`;
  const SWIFTS = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/>${SWIFT(40, 30, 1.2)}${SWIFT(70, 50, 1)}${SWIFT(30, 70, 0.9)}${SWIFT(80, 20, 0.8)}`;
  const SITSTILL = `${ground(96)}<rect x="20" y="66" width="60" height="8" rx="2" fill="#C68B59"/><path d="M26 74 V96 M74 74 V96" stroke="#8C5A32" stroke-width="4"/>${at(10, -6, 0.8, KID_FULL('#6FAE4F'))}`;
  const KITEFLY = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/>${at(0, 0, 1, KITE)}<path d="M0 86 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>`;
  const LOVEMOM = `${ground(96)}${at(-10, 8, 0.86, ADULT('me'))}${at(38, 30, 0.66, KID('#F2C14E'))}<path d="M30 80 C40 92 66 92 76 80" stroke="#F2C14E" stroke-width="9" fill="none"/><path d="M80 22 C76 14 66 18 70 26 L80 36 L90 26 C94 18 84 14 80 22 Z" fill="#E86A4F"/>`;
  const THERMO = `<rect x="42" y="8" width="16" height="66" rx="8" fill="#FFFFFF"/><circle cx="50" cy="80" r="13" fill="#D9473A"/><rect x="47" y="34" width="6" height="44" fill="#D9473A" stroke="none"/>${[18, 28, 38, 48, 58].map(y => `<path d="M58 ${y} h8" stroke="#A39588" stroke-width="2"/>`).join('')}`;
  const MAT = `<path d="M10 30 H90 V84 H10 Z" fill="#E9C47A"/>${[38, 46, 54, 62, 70, 78].map(y => `<path d="M10 ${y} H90" stroke="#C99A4A" stroke-width="1.6"/>`).join('')}<path d="M10 30 H90 V84 H10 Z" fill="none" stroke="#B4553C" stroke-width="5"/><path d="M50 30 V84" stroke="#D9473A" stroke-width="3"/>`;
  const WILLOW = `${ground(94)}<path d="M50 94 V44" stroke="#8C5A32" stroke-width="7"/><path d="M50 44 C40 30 30 28 20 34 M50 44 C60 30 70 28 80 34" stroke="#8C5A32" stroke-width="4" fill="none"/>${Array.from({ length: 12 }, (_, i) => { const x = 16 + i * 6.4; return `<path d="M${x} ${30 + Math.abs(50 - x) * 0.1} C${x - 2} 50 ${x + 2} 64 ${x} ${74 - Math.abs(50 - x) * 0.3}" stroke="#7DB25A" stroke-width="3" fill="none"/>`; }).join('')}`;
  const PAMPER = `${ground(96)}${at(-10, 8, 0.86, ADULT('ba'))}${at(40, 36, 0.6, KID('#E86A4F'))}<path d="M30 78 C40 90 60 92 72 80" stroke="#6F5A8E" stroke-width="9" fill="none"/>`;
  const CUTE = `${ground(96)}${at(-6, 0, 1.1, DOLL.replace(ground(94), ''))}${[[16, 20], [86, 30]].map(([x, y]) => `<path d="M${x} ${y} C${x - 4} ${y - 8} ${x - 14} ${y - 4} ${x - 10} ${y + 4} L${x} ${y + 12} L${x + 10} ${y + 4} C${x + 14} ${y - 4} ${x + 4} ${y - 8} ${x} ${y} Z" fill="#F2A7B8"/>`).join('')}`;
  const WEAK = `${ground(96)}${at(0, 4, 1, KID('#9FC7D8').replace('<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>', '<path d="M45 59 q5 -3 10 0" stroke-width="2.4"/>'))}<path d="M30 40 q-4 6 0 10" stroke="#7FB2D9" stroke-width="2.4"/><path d="M78 30 h10 M83 25 v10" stroke="#A39588" stroke-width="2"/>`;
  const WEATHER = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/>${at(0, 0, 0.5, SUN)}${at(40, 4, 0.6, RAINCLOUD)}${[[30, 80], [56, 70], [80, 84]].map(([x, y]) => `<path d="M${x - 5} ${y} h10 M${x} ${y - 5} v10" stroke="#7FB2D9" stroke-width="2"/>`).join('')}`;
  const BANANA = `${ground(92)}${[[-24, 0], [0, -4], [22, 2]].map(([a, d]) => `<path d="M46 26 C${30 + d} 40 ${28 + d} 70 ${44 + d} 86 C${56 + d} 90 ${50 + d} 80 ${46 + d} 72 C${40 + d} 58 ${44 + d} 40 52 28 Z" transform="rotate(${a} 50 28)" fill="#F2D24E"/>`).join('')}<path d="M46 20 h8 v10 h-8 Z" fill="#8C7A3E"/>`;
  const SAILBOAT = `${WATER(64)}<path d="M0 0 H100 V64 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M14 66 H86 L74 82 H26 Z" fill="#B47846"/><path d="M50 66 V10" stroke="#5E3A22" stroke-width="3"/><path d="M52 12 L84 60 H52 Z" fill="#E86A4F"/><path d="M48 18 L22 60 H48 Z" fill="#F7E2B0"/>`;
  const FLY = `<ellipse cx="50" cy="56" rx="14" ry="20" fill="#3A3B3C"/><circle cx="50" cy="32" r="9" fill="#3A3B3C"/><circle cx="45" cy="30" r="4" fill="#C8443A" stroke="none"/><circle cx="55" cy="30" r="4" fill="#C8443A" stroke="none"/><ellipse cx="32" cy="46" rx="16" ry="9" transform="rotate(-30 32 46)" fill="#DCEFF5" opacity=".85"/><ellipse cx="68" cy="46" rx="16" ry="9" transform="rotate(30 68 46)" fill="#DCEFF5" opacity=".85"/><path d="M40 60 l-10 8 M40 68 l-10 10 M60 60 l10 8 M60 68 l10 10" stroke="#3A3B3C" stroke-width="2"/>`;
  const STINGRAY = `${WATER(20)}<path d="M50 30 C70 30 92 44 96 58 C80 56 64 62 50 72 C36 62 20 56 4 58 C8 44 30 30 50 30 Z" fill="#8C9AAA"/><path d="M50 72 C52 80 56 90 66 96" stroke="#6E7A88" stroke-width="3" fill="none"/><circle cx="44" cy="44" r="2" fill="#3A3B3C" stroke="none"/><circle cx="56" cy="44" r="2" fill="#3A3B3C" stroke="none"/>`;
  const BEADS = `<path d="M50 14 C20 14 16 70 50 86 C84 70 80 14 50 14 Z" fill="none" stroke="#C8C3BC" stroke-width="1.4"/>${Array.from({ length: 22 }, (_, i) => { const t = i / 22 * Math.PI * 2; const x = 50 + Math.sin(t) * 30, y = 50 - Math.cos(t) * 36; return `<circle cx="${x}" cy="${y}" r="5" fill="${['#E86A4F', '#F2C14E', '#5B8FC9', '#6FAE4F'][i % 4]}"/>`; }).join('')}`;
  const MANGO2 = `<path d="M6 18 C40 22 60 20 94 30" stroke="#8C5A32" stroke-width="4" fill="none"/>${[[30, 54, -10], [64, 60, 15]].map(([x, y, a]) => `<path d="M${x} ${y - 30} V${y - 20}" stroke="#8C5A32" stroke-width="2"/><ellipse cx="${x}" cy="${y}" rx="14" ry="22" transform="rotate(${a} ${x} ${y})" fill="#9DCB6A"/>`).join('')}${LEAF(80, 28, 30, '#6FAE4F')}${LEAF(10, 22, -10, '#6FAE4F')}`;
  const DYE = `${ground(96)}${at(-6, 6, 0.9, ADULT('di').replace(/#3A3B3C/g, '#3A3B3C'))}<path d="M21 36 C18 18 64 14 62 36" fill="#B4553C" stroke="none"/>${at(64, 52, 0.36, `<rect x="10" y="10" width="40" height="50" rx="4" fill="#B4553C"/><rect x="18" y="0" width="24" height="12" rx="3" fill="#3A3B3C"/>`)}`;
  const POND = `${WATER(46)}<path d="M0 0 H100 V46 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 50 C20 44 40 48 60 44 C80 40 90 46 100 44 V36 H0 Z" fill="#9BC46A" stroke="none"/>${at(4, 0, 0.36, TREE)}<ellipse cx="66" cy="74" rx="14" ry="5" fill="#6FAE4F"/><path d="M14 92 l2 -14 M20 92 l-2 -16 M26 92 l2 -12" stroke="#6FAE4F" stroke-width="2.4"/>`;
  const CLOG = (x, c) => `<path d="M${x} 56 C${x} 46 ${x + 40} 46 ${x + 40} 56 V66 H${x} Z" fill="${c}"/><rect x="${x - 2}" y="64" width="44" height="10" rx="3" fill="#8C5A32"/><path d="M${x + 4} 74 V84 M${x + 34} 74 V84" stroke="#5E3A22" stroke-width="6"/><path d="M${x + 6} 54 C${x + 14} 44 ${x + 26} 44 ${x + 34} 54" stroke="#D9473A" stroke-width="5" fill="none"/>`;
  const CLOGS = `${ground(90)}${CLOG(6, '#D9A86A')}${CLOG(54, '#C68B59')}`;
  const MOUSE = `${ground(88)}<path d="M80 72 C92 72 96 62 92 54" stroke="#C8A8A0" stroke-width="2.4" fill="none"/><ellipse cx="54" cy="68" rx="28" ry="18" fill="#A39588"/><path d="M26 66 L12 60 L26 52 Z" fill="#A39588"/><circle cx="34" cy="48" r="10" fill="#A39588"/><circle cx="34" cy="48" r="6" fill="#F2B8C0"/><circle cx="20" cy="58" r="2" fill="#3A3B3C" stroke="none"/><circle cx="11" cy="60" r="2" fill="#E07A94" stroke="none"/><path d="M14 62 l-10 2 M14 60 l-10 -4" stroke="#7A6E66" stroke-width="1.2"/>`;
  const HOE = `<path d="M24 92 L70 16" stroke="#8C5A32" stroke-width="7"/><path d="M62 14 L92 26 L86 40 L66 30 Z" fill="#9AA2AA"/>`;
  const OCTOPUS = `${WATER(20)}<ellipse cx="50" cy="40" rx="24" ry="22" fill="#E86A4F"/>${[22, 32, 42, 52, 62, 72, 78].map((x, i) => `<path d="M${x + 2} 56 C${x - 6 + (i % 2) * 10} 70 ${x + 6} 82 ${x - 2 + (i % 3) * 4} 94" stroke="#E86A4F" stroke-width="6" fill="none"/>`).join('')}${eyes(42, 58, 40, 3)}<path d="M44 50 q6 4 12 0" stroke-width="2"/>`;
  const BOILEDVEG = `${at(0, 6, 1, BOWL(`<path d="M14 50 C20 30 80 30 86 50 Z" fill="#B9D86A"/>${[[30, 40], [46, 34], [62, 38], [72, 44], [40, 46]].map(([x, y]) => `<path d="M${x - 8} ${y} C${x - 4} ${y - 6} ${x + 4} ${y - 6} ${x + 8} ${y}" stroke="#6E9E3E" stroke-width="2.4" fill="none"/>`).join('')}`))}<path d="M36 22 c-4 -6 4 -10 0 -16 M52 20 c-4 -6 4 -10 0 -16 M66 22 c-4 -6 4 -10 0 -16" stroke="#C8C3BC" stroke-width="2.4" fill="none"/>`;
  const WHISKER = `${ground(92)}${CAT}<path d="M12 48 C4 40 6 34 12 36" stroke="${HAND}" stroke-width="0"/>`;
  const THRESH = `${ground(94)}${at(-10, 8, 0.86, ADULT('me'))}${[60, 68, 76, 84].map((x, i) => `<path d="M${x} 94 C${x - 2} 70 ${x + 4} 50 ${x + 8} 36" stroke="#C9A85A" stroke-width="2.4" fill="none"/>${[0, 1, 2, 3].map(j => `<ellipse cx="${x + 6 - j * 1.2}" cy="${42 + j * 7}" rx="2.6" ry="4" fill="#E9C25A"/>`).join('')}`).join('')}`;

  Object.assign(T, {
    /* Bài 49 · iên iêc iêp */
    'bờ biển': SV(SEASHORE),
    'xem xiếc': SV(CIRCUS),
    'thiệp mời': SV(CARD),
    'đàn kiến': SV(ANTS),
    'viên bi': SV(BIGMARBLES),
    'thiên nhiên': SV(NATURE),
    'chiếc xe': SV(`${ground(92)}${at(0, 10, 1, CAR('#5B8FC9'))}`),
    'bữa tiệc': SV(FEAST),
    'con diệc': SV(HERON),
    'sò điệp': SV(SCALLOP),
    'rau diếp': SV(LETTUCE),
    'tiếp sức': SV(RELAY),
    'Bờ biển Hải Tiến có cát vàng.': SV(SEASHORE),
    'Du khách ăn sò điệp, tôm, mực.': SV(`${ground(96)}<rect x="6" y="66" width="88" height="6" rx="2" fill="#C68B59"/>${at(-4, -4, 0.62, ADULT('bo'))}${at(44, -2, 0.6, ADULT('me'))}${at(4, 48, 0.3, SCALLOP)}${at(36, 40, 0.3, SHRIMPS)}${at(66, 44, 0.28, SQUID)}`),
    'Cả nhà đi biển bằng chiếc xe ô tô.': SV(`${SEASHORE}${at(14, 40, 0.7, CAR('#5B8FC9'))}`),
    /* Bài 50 · iêng iêm yên */
    'sầu riêng': SV(DURIAN),
    'cá kiếm': SV(SWORDFISH),
    'yên ngựa': SV(SADDLE),
    'củ riềng': SV(GALANGAL),
    'siêng năng': SV(DILIGENT),
    'cái chiêng': SV(GONG),
    'bao diêm': SV(MATCHBOX),
    'hồng xiêm': SV(SAPODILLA),
    'cái liềm': SV(SICKLE),
    'tổ yến': SV(`${NESTSWIFT}${SWIFT(80, 16, 0.7)}`),
    'chim yến': SV(SWIFTS),
    'ngồi yên': SV(SITSTILL),
    'Đàn chim yến bay liệng trên bầu trời.': SV(`${SWIFTS}${CLOUD(74, 80, 0.5)}`),
    'Bé Thiêm siêng năng tập thể dục cùng bố.': SV(`${ground(96)}${at(-14, 6, 0.86, KID_FULL('#6FAE4F', false, '<path d="M38 56 L26 40 M62 56 L74 40" stroke="#F6D2B8" stroke-width="6"/>'))}${at(40, 10, 0.86, ADULT('bo'))}`),
    'Chị Nghiêm thích ăn sầu riêng và hồng xiêm.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('co').replace('#DDAA55', '#E58FA0'))}${at(56, 30, 0.42, DURIAN)}${at(60, 58, 0.4, SAPODILLA)}`),
    /* Bài 51 · iêu yêu iêt */
    'con diều': SV(KITEFLY),
    'yêu mẹ': SV(LOVEMOM),
    'nhiệt kế': SV(THERMO),
    'cái chiếu': SV(MAT),
    'vải thiều': T['quả vải'],
    'lá liễu': SV(WILLOW),
    'yêu chiều': SV(PAMPER),
    'đáng yêu': SV(CUTE),
    'yếu ớt': SV(WEAK),
    'thời tiết': SV(WEATHER),
    'viết chữ': SV(WRITE),
    'biết bơi': T['đi bơi'],
    'Cả nhà trải chiếu ở gốc cây liễu.': SV(`${ground(96)}${at(-16, -6, 0.8, WILLOW)}${at(30, 56, 0.66, `<path d="M10 30 H90 V60 H10 Z" fill="#E9C47A"/><path d="M10 38 H90 M10 46 H90 M10 54 H90" stroke="#C99A4A" stroke-width="1.6"/>`)}${at(40, 30, 0.4, ADULT('bo'))}${at(64, 30, 0.4, ADULT('me'))}`),
    'Bé nhìn nhiệt kế, thấy trời nóng.': SV(`${ground(96)}${at(-10, 8, 0.86, KID('#F2C14E'))}${at(54, 10, 0.6, THERMO)}${at(70, 0, 0.3, SUN)}`),
    'Trên cao, những cánh diều bay.': SV(`<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/>${at(-12, 0, 0.6, KITE)}${at(30, 18, 0.5, KITE.replace('#E86A4F', '#5B8FC9'))}${at(50, -4, 0.5, KITE.replace('#E86A4F', '#6FAE4F'))}<path d="M0 86 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>`),
    /* Bài 52 · uôi uôm */
    'quả chuối': SV(BANANA),
    'cánh buồm': SV(SAILBOAT),
    'con ruồi': SV(FLY),
    'cá đuối': SV(STINGRAY),
    'chuỗi hạt': SV(BEADS),
    'quả muỗm': SV(MANGO2),
    'nhuộm tóc': SV(DYE),
    'ao chuôm': SV(POND),
    'Buổi sáng bé chào mẹ.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('me'))}${at(44, 22, 0.74, KID('#5B8FC9'))}<path d="M62 84 L80 76 M84 84 L74 66" stroke="${SKIN}" stroke-width="0"/>${at(76, 0, 0.24, SUN)}`),
    'Chạy tới ôm cổ cô.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('co'))}${at(40, 26, 0.66, KID('#E86A4F'))}<path d="M46 74 C40 64 30 62 24 66 M70 74 C76 64 72 56 64 56" stroke="${SKIN}" stroke-width="6" fill="none"/>`),
    'Buổi chiều bé chào cô.': SV(`<path d="M0 0 H100 V100 H0 Z" fill="#F7E3C8" stroke="none"/>${ground(96)}${at(-12, 8, 0.86, ADULT('co'))}${at(44, 22, 0.74, KID('#5B8FC9'))}<circle cx="86" cy="20" r="9" fill="#F2903A" stroke="none"/>`),
    /* Bài 53 · uôc uôt */
    'đôi guốc': SV(CLOGS),
    'con chuột': SV(MOUSE),
    'cái cuốc': SV(HOE),
    'bạch tuộc': SV(OCTOPUS),
    'rau luộc': SV(BOILEDVEG),
    'rét buốt': SV(COLDKID),
    'vuốt râu': SV(WHISKER),
    'tuốt lúa': SV(THRESH),
    'Con mèo mà trèo cây cau.': SV(`${ground(94)}${at(-10, -6, 0.7, ARECA)}${at(10, 18, 0.4, CAT.replace(ground(92), ''))}`),
    'Hỏi thăm chú chuột đi đâu vắng nhà.': SV(`${ground(94)}${at(0, 0, 0.56, HOUSE())}${at(36, 30, 0.7, CAT.replace(ground(92), ''))}`),
    'Mẹ mua thuốc cho Hà.': SV(`${ground(96)}${at(-10, 8, 0.86, ADULT('me'))}${at(44, 30, 0.66, KID('#9FC7D8'))}<rect x="36" y="74" width="22" height="14" rx="3" fill="#FFFFFF"/><path d="M47 76 v10 M42 81 h10" stroke="#D9473A" stroke-width="2.4"/>`)
  });
  /* ---------- Bài 54–58 (vần uôn uông, ươi ươu, ươc ươt, ươm ươp, ươn ương) ---------- */
  const DRAGONFLY = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 L46 0" stroke="#5B8FC9" stroke-width="5"/><ellipse cx="14" cy="-12" rx="6" ry="16" transform="rotate(60 14 -12)" fill="#DCEFF5"/><ellipse cx="14" cy="12" rx="6" ry="16" transform="rotate(-60 14 12)" fill="#DCEFF5"/><ellipse cx="26" cy="-10" rx="5" ry="14" transform="rotate(70 26 -10)" fill="#DCEFF5"/><ellipse cx="26" cy="10" rx="5" ry="14" transform="rotate(-70 26 10)" fill="#DCEFF5"/><circle cx="-2" cy="0" r="6" fill="#3F6FA6"/></g>`;
  const DRAGONFLIES = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${DRAGONFLY(20, 34, 1)}${DRAGONFLY(46, 70, 0.8)}<path d="M0 90 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>`;
  const BELL = `<path d="M50 8 V16" stroke-width="3"/><circle cx="50" cy="8" r="4" fill="#D9A23A"/><path d="M50 16 C30 16 26 36 26 52 C26 64 18 70 14 76 H86 C82 70 74 64 74 52 C74 36 70 16 50 16 Z" fill="#F2C14E"/><path d="M14 76 H86" stroke-width="4"/><circle cx="50" cy="84" r="7" fill="#D9A23A"/><path d="M34 40 C34 30 40 26 44 26" stroke="#FFFFFF" stroke-width="3" fill="none"/>`;
  const SPOOL = `<rect x="26" y="14" width="48" height="10" rx="3" fill="#C68B59"/><rect x="26" y="76" width="48" height="10" rx="3" fill="#C68B59"/><rect x="32" y="24" width="36" height="52" fill="#D9473A"/>${[30, 38, 46, 54, 62, 70].map(y => `<path d="M32 ${y} H68" stroke="#A8322A" stroke-width="1.6"/>`).join('')}<path d="M68 60 C80 64 86 76 92 90" stroke="#D9473A" stroke-width="2" fill="none"/>`;
  const NOTEPAD2 = `<rect x="20" y="14" width="60" height="76" rx="4" fill="#6FAE4F"/>${[22, 32, 42, 52, 62, 72].map(x => `<circle cx="${x}" cy="14" r="3" fill="#FFFFFF" stroke-width="2"/>`).join('')}<rect x="28" y="28" width="44" height="54" rx="2" fill="#FFFFFF"/>${[40, 50, 60, 70].map(y => `<path d="M32 ${y} H68" stroke="#BFE0F0" stroke-width="1.6"/>`).join('')}`;
  const RICEROLL = `<ellipse cx="50" cy="70" rx="44" ry="14" fill="#FFFFFF"/>${[[30, 60], [52, 56], [72, 62], [42, 70], [62, 72]].map(([x, y]) => `<rect x="${x - 12}" y="${y - 6}" width="24" height="12" rx="6" fill="#F6F2EA"/><path d="M${x - 8} ${y} h16" stroke="#D9B27A" stroke-width="1.4"/>`).join('')}${[[34, 50], [58, 48]].map(([x, y]) => `<path d="M${x} ${y} c2 -6 6 -6 8 0" stroke="#6FAE4F" stroke-width="2" fill="none"/>`).join('')}<path d="M20 52 c-3 -5 3 -8 0 -12" stroke="#C8C3BC" stroke-width="2" fill="none"/>`;
  const BEDS = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 50 H100 V100 H0 Z" fill="#B48A5A" stroke="none"/>${[58, 74, 90].map(y => `<path d="M0 ${y} C30 ${y - 6} 70 ${y - 6} 100 ${y}" fill="#8C6A42"/>${[10, 26, 42, 58, 74, 90].map(x => `<path d="M${x} ${y - 4} C${x - 4} ${y - 14} ${x + 4} ${y - 14} ${x} ${y - 4} M${x} ${y - 4} C${x - 8} ${y - 10} ${x - 6} ${y - 4} ${x} ${y - 4} M${x} ${y - 4} C${x + 8} ${y - 10} ${x + 6} ${y - 4} ${x} ${y - 4}" fill="#6FAE4F" stroke="#4E8A3A" stroke-width="1"/>`).join('')}`).join('')}`;
  const SQUARE = `<rect x="18" y="18" width="64" height="64" rx="2" fill="#5B8FC9"/><path d="M18 30 h8 M30 18 v8" stroke="#FFFFFF" stroke-width="2"/>`;
  const BANANABUNCH = `${ground(94)}<path d="M50 2 V80" stroke="#8C7A3E" stroke-width="5"/>${[0, 1, 2, 3].map(r => [-3, -2, -1, 0, 1, 2, 3].map(k => { const y = 22 + r * 15, x = 50 + k * (8 - r); return `<path d="M${x} ${y + 10} C${x - 4} ${y} ${x - 2} ${y - 8} ${x + 2} ${y - 12} C${x + 4} ${y - 6} ${x + 4} ${y + 2} ${x + 3} ${y + 10} Z" fill="${r < 2 ? '#9DCB6A' : '#C9D86A'}" stroke-width="1.6"/>`; }).join('')).join('')}<path d="M44 82 C40 96 60 96 56 82 C54 76 46 76 44 82 Z" fill="#8C3A4A"/>`;
  const POMELO = `${ground(92)}<circle cx="46" cy="58" r="32" fill="#B9D86A"/><circle cx="34" cy="46" r="5" fill="#D6EAA0" stroke="none"/><path d="M46 26 l4 -8" stroke="#6E8F3A" stroke-width="3"/>${LEAF(50, 18, -30, '#6FAE4F')}<path d="M70 70 L92 70 A22 22 0 0 1 70 92 Z" fill="#F2A7A0"/><path d="M70 70 L84 84 M70 70 L90 76 M70 70 L78 90" stroke="#E07A6E" stroke-width="1.6"/>`;
  const DEER = GOAT.replace(/#F6F2EA/g, '#C9915A').replace(/#E8E2D8/g, '#A8743E');
  const DEERHEAD = `${ground(94)}${at(4, 10, 1, DEER)}${[[54, 58], [64, 52], [70, 62], [58, 66]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#F4F0EA" stroke="none"/>`).join('')}<path d="M30 24 l-6 -10 M30 20 l4 -8 M40 22 l2 -12 M42 16 l6 -6" stroke="#8C5A32" stroke-width="2.4"/>`;
  const SMILE = `${ground(96)}${KID('#F2C14E').replace('<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>', '<path d="M42 55 q8 9 16 0 Z" fill="#B4553C"/>')}${STAR(18, 24, 5)}${STAR(84, 28, 4)}`;
  const NET = `<path d="M50 6 L10 30 L22 94 H78 L90 30 Z" fill="#F4F0EA" opacity=".6"/>${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${10 + i * 2} ${30 + i * 12} H${90 - i * 2}" stroke="#7A6E66" stroke-width="1.4"/>`).join('')}${[20, 32, 44, 56, 68, 80].map(x => `<path d="M50 6 L${x} 94" stroke="#7A6E66" stroke-width="1.4"/>`).join('')}<path d="M10 30 L22 94 H78 L90 30" stroke="#5B8FC9" stroke-width="3" fill="none"/>`;
  const CANTALOUPE = `${ground(92)}<ellipse cx="44" cy="60" rx="32" ry="28" fill="#D9CA8A"/>${Array.from({ length: 10 }, (_, i) => `<path d="M${20 + i * 5} ${40 + (i % 3) * 4} l6 6 l-6 6 l6 6" stroke="#B8A86A" stroke-width="1.4" fill="none"/>`).join('')}<path d="M72 70 L94 70 A22 22 0 0 1 72 92 Z" fill="#F2B87A"/><path d="M74 72 L90 72" stroke="#F7D9B0" stroke-width="2"/>`;
  const APPLESNAIL = SNAIL.replace(/#C9973F|#D9B27A|#E9C47A|#C68B59/g, '#6E5A3E');
  const BABBLER = `<path d="M0 74 C30 70 70 72 100 66" stroke="#8C5A32" stroke-width="5" fill="none"/>${at(10, 6, 0.8, BIRD('#A8743E', '#6B4A2E', '<path d="M14 30 C18 26 28 26 32 32" stroke="#FFFFFF" stroke-width="3" fill="none"/>'))}${at(-14, -18, 0.6, NOTES)}`;
  const GIRAFFE = `${ground(96)}<path d="M38 96 V66 M46 96 V68 M62 96 V68 M70 96 V66" stroke="#E9B04E" stroke-width="6"/><ellipse cx="54" cy="62" rx="22" ry="12" fill="#E9B04E"/><path d="M40 58 L28 14" stroke="#E9B04E" stroke-width="10"/><ellipse cx="24" cy="12" rx="10" ry="7" fill="#E9B04E"/><path d="M22 4 v-4 M28 4 v-4" stroke="#8C5A32" stroke-width="2.4"/><circle cx="22" cy="10" r="1.6" fill="#3A3B3C" stroke="none"/>${[[50, 58], [60, 64], [66, 56], [36, 40], [32, 28], [46, 66]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#B4703A" stroke="none"/>`).join('')}`;
  const RULER = `<g transform="rotate(-30 50 50)"><rect x="6" y="40" width="88" height="20" rx="2" fill="#F2C14E"/>${Array.from({ length: 17 }, (_, i) => `<path d="M${10 + i * 5} 40 V${i % 2 ? 46 : 50}" stroke="#3A3B3C" stroke-width="1.4"/>`).join('')}</g>`;
  const SURF = `${WATER(54)}<path d="M0 0 H100 V54 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 60 C20 40 40 42 54 56" stroke="#FFFFFF" stroke-width="4" fill="none"/><path d="M20 74 L80 66 L82 72 L22 80 Z" fill="#E86A4F"/>${at(26, 4, 0.66, KID_FULL('#F2C14E'))}`;
  const COMB = `<rect x="14" y="30" width="72" height="18" rx="4" fill="#C68B59"/>${Array.from({ length: 13 }, (_, i) => `<rect x="${17 + i * 5.2}" y="46" width="3" height="${i % 2 ? 22 : 26}" rx="1" fill="#C68B59"/>`).join('')}`;
  const SODA = `${ground(92)}<path d="M36 22 H64 V30 C70 36 70 44 70 52 V88 C70 92 30 92 30 88 V52 C30 44 30 36 36 30 Z" fill="#7FB2D9"/><rect x="38" y="14" width="24" height="8" rx="2" fill="#D9473A"/><rect x="30" y="50" width="40" height="18" fill="#F2C14E" stroke="none"/>${[[44, 76], [54, 80], [50, 40]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="#FFFFFF" stroke="none"/>`).join('')}`;
  const WALK = `${ground(96)}${at(-4, 4, 0.92, KID_FULL('#6FAE4F', true))}<path d="M60 92 h6 M72 86 h6 M84 92 h6" stroke="#C8C3BC" stroke-width="3"/>`;
  const QUEUE = `${ground(96)}${[['#E86A4F', 52], ['#5B8FC9', 26], ['#F2C14E', 0]].map(([c, x]) => at(x, 22, 0.66, KID_FULL(c))).join('')}<path d="M84 50 V96 M76 50 H96" stroke="#8C5A32" stroke-width="3"/>`;
  const SLIDE = `${ground(94)}<path d="M20 94 V30 M34 94 V30" stroke="#5B8FC9" stroke-width="4"/>${[44, 56, 68, 80].map(y => `<path d="M20 ${y} H34" stroke="#5B8FC9" stroke-width="3"/>`).join('')}<path d="M20 30 H38 C56 30 70 70 92 88 L86 94 C66 76 52 40 38 38 H20 Z" fill="#E86A4F"/>${at(18, -4, 0.4, KID_FULL('#F2C14E'))}`;
  const SILKHAIR = `${ground(96)}<path d="M24 46 C20 16 80 16 76 46 L80 92 H20 Z" fill="${HAIR}"/><path d="M30 92 C30 76 38 66 50 66 C62 66 70 76 70 92 Z" fill="#E58FA0"/><circle cx="50" cy="44" r="17" fill="${SKIN}"/><path d="M33 42 C34 26 66 26 67 42 C60 32 40 32 33 42 Z" fill="${HAIR}"/>${eyes(44, 56, 46, 2.4)}<path d="M45 54 q5 4 10 0" stroke-width="2.4"/><path d="M28 40 C26 60 28 76 30 88 M72 40 C74 60 72 76 70 88" stroke="#5E5A58" stroke-width="1.6" fill="none"/>${at(54, 20, 0.36, COMB)}`;
  const BUTTERFLY = (x, y, s = 1, c = '#F2C14E') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 C-20 -30 -40 -20 -34 0 C-40 16 -20 24 0 6 Z" fill="${c}"/><path d="M0 0 C20 -30 40 -20 34 0 C40 16 20 24 0 6 Z" fill="${c}"/><circle cx="-18" cy="-6" r="4" fill="#E86A4F" stroke="none"/><circle cx="18" cy="-6" r="4" fill="#E86A4F" stroke="none"/><path d="M0 -12 V16" stroke-width="4"/><path d="M0 -12 l-6 -10 M0 -12 l6 -10" stroke-width="1.6"/></g>`;
  const LUFFA = `<path d="M6 16 C40 20 60 16 94 22" stroke="#6FAE4F" stroke-width="4" fill="none"/>${[[30, 56, -8], [62, 60, 10]].map(([x, y, a]) => `<path d="M${x} ${y - 36} V${y - 30}" stroke="#6FAE4F" stroke-width="2"/><g transform="rotate(${a} ${x} ${y})"><rect x="${x - 9}" y="${y - 30}" width="18" height="62" rx="9" fill="#7DB25A"/>${[-20, -8, 4, 16].map(d => `<path d="M${x - 9} ${y + d} h18" stroke="#5E8F3A" stroke-width="1.4"/>`).join('')}</g>`).join('')}${FLOWER(84, 36, 7, '#F2C14E')}${LEAF(14, 22, 20, '#6FAE4F')}`;
  const TABBY = CAT.replace(/#A39588/g, '#C9915A');
  const GOLDENFIELD = `<path d="M0 0 H100 V100 H0 Z" fill="#F7E3B8" stroke="none"/>${at(66, 2, 0.24, SUN)}<path d="M0 46 H100 V100 H0 Z" fill="#E9C25A" stroke="none"/>${Array.from({ length: 14 }, (_, i) => `<path d="M${4 + i * 7} 100 C${2 + i * 7} 80 ${8 + i * 7} 64 ${10 + i * 7} 52" stroke="#C9A040" stroke-width="2.4" fill="none"/>`).join('')}`;
  const PICKLEAF = `${ground(96)}${at(-6, 4, 0.92, KID_FULL('#5B8FC9'))}${LEAF(70, 88, -20, '#C9973F')}${LEAF(84, 80, 30, '#D9732A')}${LEAF(60, 76, 10, '#E9B04E')}`;
  const CROWD = `${ground(96)}${[['#E86A4F', -6, 20], ['#5B8FC9', 14, 14], ['#6FAE4F', 34, 20], ['#F2C14E', 54, 14], ['#E58FA0', 70, 22], ['#9B6FC9', 24, 36], ['#D9473A', 50, 36]].map(([c, x, y]) => at(x, y, 0.5, KID_FULL(c, true))).join('')}`;
  const TRELLIS = `${ground(96)}<path d="M8 96 V20 M92 96 V20 M8 22 H92" stroke="#8C5A32" stroke-width="4"/>${[30, 50, 70].map(x => `<path d="M${x} 22 V30" stroke="#8C5A32" stroke-width="2"/>`).join('')}${[14, 30, 46, 62, 78].map((x, i) => `${LEAF(x, 18, 20 + i * 30, '#6FAE4F')}`).join('')}${[[28, 50], [56, 46], [76, 56]].map(([x, y]) => `<rect x="${x - 6}" y="${y - 20}" width="12" height="44" rx="6" fill="#7DB25A"/>`).join('')}${FLOWER(42, 30, 5, '#F2C14E')}`;
  const GARDEN = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 50 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>${at(0, 10, 0.5, TREE)}${at(56, 6, 0.5, TREE)}${FLOWER(30, 80, 7, '#E86A4F')}${FLOWER(50, 86, 7, '#F2C14E')}${FLOWER(74, 78, 7, '#E58FA0')}<path d="M0 64 H100" stroke="#C68B59" stroke-width="3"/>${[6, 18, 30, 42, 54, 66, 78, 90].map(x => `<path d="M${x} 56 V70" stroke="#C68B59" stroke-width="3"/>`).join('')}`;
  const ROAD = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 40 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/><path d="M40 40 H60 L90 100 H10 Z" fill="#C8C3BC"/><path d="M50 46 V54 M50 62 V72 M50 80 V94" stroke="#FFFFFF" stroke-width="3"/>${at(0, 10, 0.34, TREE)}${at(70, 10, 0.34, TREE)}`;
  const EEL = `${WATER(30)}<path d="M8 70 C20 50 34 80 50 60 C64 42 78 70 90 54" stroke="#6E5A3E" stroke-width="12" fill="none"/><path d="M8 70 C20 50 34 80 50 60 C64 42 78 70 90 54" stroke="#8C7A5A" stroke-width="5" fill="none"/><circle cx="90" cy="53" r="2" fill="#3A3B3C" stroke="none"/>`;
  const GIBBON = `<path d="M0 14 H100" stroke="#8C5A32" stroke-width="5"/><path d="M40 16 C36 30 40 42 46 48 M60 16 C64 30 60 42 54 48" stroke="#3A3B3C" stroke-width="5" fill="none"/><ellipse cx="50" cy="62" rx="14" ry="18" fill="#3A3B3C"/><circle cx="50" cy="40" r="10" fill="#3A3B3C"/><circle cx="50" cy="42" r="6" fill="#C8A88A"/><circle cx="48" cy="40" r="1.2" fill="#3A3B3C" stroke="none"/><circle cx="52" cy="40" r="1.2" fill="#3A3B3C" stroke="none"/><path d="M44 78 L38 94 M56 78 L62 94" stroke="#3A3B3C" stroke-width="5"/>`;
  const HILLSIDE = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 100 V70 C30 30 60 20 100 40 V100 Z" fill="#8CB66A"/>${[[24, 60], [44, 44], [64, 36], [80, 40]].map(([x, y]) => at(x - 8, y - 18, 0.26, TREE)).join('')}<path d="M10 92 C30 80 50 70 74 60" stroke="#C9A06A" stroke-width="3" fill="none"/>`;
  const SCHOOL = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${ground(94)}<rect x="8" y="40" width="84" height="54" fill="#F2D24E"/><path d="M4 42 L50 16 L96 42 Z" fill="#C8443A"/>${[16, 34, 58, 76].map(x => `<rect x="${x}" y="52" width="10" height="12" fill="#7FB2D9"/>`).join('')}<rect x="42" y="66" width="16" height="28" fill="#8C5A32"/><circle cx="50" cy="32" r="5" fill="#FFFFFF"/>`;
  const BED = `${SLEEP.replace('#9FC7D8', '#7FB2D9')}<path d="M6 86 V96 M94 86 V96" stroke="#8C5A32" stroke-width="4"/><rect x="2" y="44" width="8" height="52" rx="2" fill="#C68B59"/>`;
  const HOMELAND = `${RICEFIELD}${at(56, 10, 0.4, HOUSE())}${at(4, 18, 0.3, TREE)}`;

  Object.assign(T, {
    /* Bài 54 · uôn uông */
    'chuồn chuồn': SV(DRAGONFLIES),
    'quả chuông': SV(BELL),
    'cuộn chỉ': SV(SPOOL),
    'cuốn sổ': SV(NOTEPAD2),
    'bánh cuốn': SV(RICEROLL),
    'luống rau': SV(BEDS),
    'hình vuông': SV(SQUARE),
    'buồng chuối': SV(BANANABUNCH),
    'Chuồn chuồn bay thấp thì mưa.': SV(`<rect x="2" y="2" width="96" height="96" rx="8" fill="#DCE4EA" stroke="none"/>${at(0, -14, 0.8, RAINCLOUD)}${DRAGONFLY(20, 74, 0.7)}${DRAGONFLY(58, 82, 0.6)}<path d="M0 90 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>`),
    'Bay cao thì nắng, bay vừa thì râm.': SV(`<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/>${at(60, 0, 0.36, SUN)}${DRAGONFLY(10, 20, 0.6)}${DRAGONFLY(40, 56, 0.6)}${CLOUD(30, 44, 0.5)}<path d="M0 90 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>`),
    'Cây chuối bên hè đã trổ buồng.': SV(`${ground(94)}<path d="M40 94 V36" stroke="#8CB66A" stroke-width="10"/><path d="M40 40 C20 20 6 30 2 40 C16 36 30 38 40 44 M40 40 C60 16 80 22 92 30 C76 32 56 38 40 44 M40 36 C36 16 44 6 52 4" stroke="#6FAE4F" stroke-width="7" fill="none"/>${at(36, 30, 0.5, BANANABUNCH.replace(ground(94), ''))}`),
    /* Bài 55 · ươi ươu */
    'quả bưởi': SV(POMELO),
    'con hươu': SV(DEERHEAD),
    'tươi cười': SV(SMILE),
    'cái lưới': SV(NET),
    'dưa lưới': SV(CANTALOUPE),
    'ốc bươu': SV(`${WATER(80)}${at(0, -6, 1, APPLESNAIL)}`),
    'chim khướu': SV(BABBLER),
    'hươu cao cổ': SV(GIRAFFE),
    'Bé Lan vẽ con hươu.': SV(`${ground(96)}${at(-12, 14, 0.8, KID('#E58FA0'))}<rect x="40" y="30" width="56" height="54" rx="3" fill="#FFFFFF"/>${at(42, 32, 0.5, DEER)}${at(26, 46, 0.4, PENCIL)}`),
    'Bé Hà thích vẽ chim khướu.': SV(`${ground(96)}${at(-12, 14, 0.8, KID('#F2C14E'))}<rect x="40" y="30" width="56" height="54" rx="3" fill="#FFFFFF"/>${at(44, 36, 0.5, BIRD('#A8743E', '#6B4A2E'))}${at(26, 46, 0.4, PENCIL)}`),
    'Cô cho mỗi bạn điểm mười đỏ tươi.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('co'))}${at(44, 22, 0.74, KID('#5B8FC9'))}${STAR(86, 22, 9, '#D9473A')}`),
    /* Bài 56 · ươc ươt */
    'thước kẻ': SV(RULER),
    'lướt ván': SV(SURF),
    'chiếc lược': SV(COMB),
    'nước ngọt': SV(SODA),
    'bước đi': SV(WALK),
    'lần lượt': SV(QUEUE),
    'cầu trượt': SV(SLIDE),
    'tóc mượt': SV(SILKHAIR),
    'Ca nô đi trước, ván lướt theo sau.': SV(`${WATER(50)}<path d="M0 0 H100 V50 H0 Z" fill="#E3F0F4" stroke="none"/>${at(40, -6, 0.6, T['ca nô'].replace(/^<svg[^>]*>|<\/svg>$/g, ''))}<path d="M44 40 L22 56" stroke="#3A3B3C" stroke-width="1.4"/>${at(-4, 30, 0.5, SURF.replace(WATER(54), '').replace('<path d="M0 0 H100 V54 H0 Z" fill="#E3F0F4" stroke="none"/>', ''))}`),
    'Các bạn lần lượt lấy cơm.': SV(`${ground(96)}${at(-10, 22, 0.66, KID_FULL('#F2C14E'))}${at(14, 22, 0.66, KID_FULL('#5B8FC9'))}${at(38, 22, 0.66, KID_FULL('#E86A4F'))}${at(66, 52, 0.36, RICEBOWL)}`),
    'Bé dùng thước kẻ.': SV(`${ground(96)}<rect x="30" y="64" width="66" height="6" rx="2" fill="#C68B59"/>${at(-12, 8, 0.84, KID('#6FAE4F'))}${at(46, 34, 0.46, RULER)}`),
    /* Bài 57 · ươm ươp */
    'con bướm': SV(`${BUTTERFLY(50, 48, 1.1)}`),
    'quả mướp': SV(LUFFA),
    'hạt cườm': SV(BEADS.replace(/#E86A4F|#F2C14E|#5B8FC9|#6FAE4F/g, '#E9E0D2')),
    'vàng ươm': SV(GOLDENFIELD),
    'lượm lá': SV(PICKLEAF),
    'mèo mướp': SV(TABBY),
    'nườm nượp': SV(CROWD),
    'giàn mướp': SV(TRELLIS),
    'Mùa này, mướp sai quả.': SV(TRELLIS),
    'Đàn bướm vàng bay qua bay lại.': SV(`<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${BUTTERFLY(30, 34, 0.6)}${BUTTERFLY(70, 28, 0.5)}${BUTTERFLY(52, 66, 0.6)}<path d="M0 88 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>${FLOWER(20, 84, 6, '#E86A4F')}${FLOWER(84, 86, 6, '#E58FA0')}`),
    'Em cùng mẹ hái quả mướp non.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('me'))}${at(30, 30, 0.6, KID('#F2C14E'))}${at(54, 0, 0.5, LUFFA)}`),
    /* Bài 58 · ươn ương */
    'khu vườn': SV(GARDEN),
    'con đường': SV(ROAD),
    'con lươn': SV(EEL),
    'con vượn': SV(GIBBON),
    'sườn đồi': SV(HILLSIDE),
    'trường học': SV(SCHOOL),
    'giường ngủ': SV(BED),
    'quê hương': SV(HOMELAND),
    'Tết sắp đến, thời tiết bớt lạnh hơn.': SV(`<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${at(50, 4, 0.36, SUN)}${at(-4, 20, 0.7, MAIBRANCH)}`),
    'Bầy chim ríu rít hót vang trên cành cây.': SV(`<path d="M4 70 C30 60 60 56 96 44" stroke="#8C5A32" stroke-width="5" fill="none"/>${LEAF(80, 44, -40, '#6FAE4F')}${at(0, 22, 0.44, BIRD('#8C6A42', '#6B4A2E'))}${at(30, 14, 0.4, BIRD('#F2C14E', '#D9A23A'))}${at(56, 4, 0.4, BIRD('#E86A4F', '#C24E36'))}${at(-10, -20, 0.6, NOTES)}`),
    'Trên con đường đến trường, em thấy sườn đồi xanh.': SV(`${HILLSIDE}<path d="M30 100 L46 60 H54 L80 100 Z" fill="#C8C3BC"/>${at(36, 52, 0.4, KID_FULL('#5B8FC9', true))}`)
  });
  /* ---------- Bài 59–63 (vần oa oe, oan oăn oat oăt, oai uê uy, uân uât, uyên uyêt) ---------- */
  const ROSE = (x, y, s = 1, c = '#D9473A') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 C0 20 2 40 0 60" stroke="#4E8A3A" stroke-width="4" fill="none"/>${LEAF(0, 30, -30, '#6FAE4F')}<path d="M-16 -4 C-18 -22 18 -22 16 -4 C14 10 -14 10 -16 -4 Z" fill="${c}"/><path d="M-8 -8 C-6 -16 6 -16 8 -8 C4 -4 -4 -4 -8 -8 Z M-10 -2 C-2 4 2 4 10 -2" stroke="#A8322A" stroke-width="1.8" fill="none"/></g>`;
  const ROSES = `${ground(94)}${ROSE(36, 34, 1)}${ROSE(64, 42, 0.9, '#E58FA0')}`;
  const STRONG = `${ground(96)}${KID_FULL('#E86A4F', false, '<path d="M38 56 L26 44 L28 34 M62 56 L74 44 L72 34" stroke="#F6D2B8" stroke-width="7" fill="none"/><circle cx="28" cy="32" r="5" fill="#F6D2B8" stroke="none"/><circle cx="72" cy="32" r="5" fill="#F6D2B8" stroke="none"/>')}`;
  const KEY = `<g transform="rotate(-35 50 50)"><circle cx="28" cy="50" r="16" fill="#F2C14E"/><circle cx="28" cy="50" r="6" fill="#FFFFFF"/><rect x="42" y="45" width="46" height="10" rx="2" fill="#F2C14E"/><path d="M74 55 V66 M84 55 V62" stroke="#D9A23A" stroke-width="5"/></g>`;
  const TOWERBLOCK = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${ground(96)}<rect x="10" y="30" width="34" height="66" fill="#C8C3BC"/><rect x="50" y="8" width="40" height="88" fill="#9FB4C8"/>${[38, 50, 62, 74].map(y => [16, 30].map(x => `<rect x="${x}" y="${y}" width="8" height="8" fill="#F7E07A" stroke="none"/>`).join('')).join('')}${[16, 28, 40, 52, 64, 76].map(y => [56, 70].map(x => `<rect x="${x}" y="${y}" width="10" height="7" fill="#DCEFF5" stroke="none"/>`).join('')).join('')}`;
  const WAGON = `${ground(88)}<path d="M4 84 H96" stroke="#7A6E66" stroke-width="3"/><rect x="10" y="36" width="80" height="40" rx="6" fill="#3E8E4A"/>${[18, 38, 58].map(x => `<rect x="${x}" y="44" width="14" height="14" rx="2" fill="#DCEFF5"/>`).join('')}<rect x="76" y="44" width="8" height="26" fill="#2E6A3A"/><circle cx="26" cy="80" r="6" fill="#3A3B3C"/><circle cx="74" cy="80" r="6" fill="#3A3B3C"/><path d="M2 60 H10 M90 60 H98" stroke-width="3"/>`;
  const MAGPIE = `<path d="M0 74 C30 70 70 72 100 66" stroke="#8C5A32" stroke-width="5" fill="none"/>${at(8, 8, 0.8, BIRD('#3A3B3C', '#FFFFFF', '<path d="M30 56 C40 70 60 74 70 70" stroke="#FFFFFF" stroke-width="5" fill="none"/>'))}<path d="M76 46 L96 30" stroke="#3A3B3C" stroke-width="5"/>`;
  const SOPHORA = `${ground(94)}<path d="M50 94 V48" stroke="#8C5A32" stroke-width="6"/><circle cx="50" cy="36" r="26" fill="#7DB25A"/>${Array.from({ length: 14 }, (_, i) => `<circle cx="${30 + (i * 17) % 40}" cy="${18 + (i * 11) % 36}" r="2.6" fill="#F2D24E" stroke="none"/>`).join('')}`;
  const BLOOM = `${ground(94)}<path d="M50 94 V50" stroke="#4E8A3A" stroke-width="4"/>${LEAF(50, 74, -30, '#6FAE4F')}${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<ellipse cx="50" cy="22" rx="8" ry="16" transform="rotate(${a} 50 38)" fill="#E58FA0"/>`).join('')}<circle cx="50" cy="38" r="8" fill="#F2C14E"/>${[[18, 20], [82, 24], [20, 60], [84, 62]].map(([x, y]) => `<path d="M${x - 5} ${y} h10 M${x} ${y - 5} v10" stroke="#F2C14E" stroke-width="2"/>`).join('')}`;
  const PAPERFLOWER = `${ground(96)}<rect x="10" y="62" width="80" height="6" rx="2" fill="#C68B59"/>${at(-10, 6, 0.8, ADULT('co'))}${at(54, 30, 0.4, BLOOM.replace(ground(94), ''))}${at(70, 36, 0.36, BLOOM.replace(ground(94), '').replace(/#E58FA0/g, '#F2C14E'))}`;
  const DRILL = `<path d="M18 40 H62 V62 H18 Z" fill="#F2C14E"/><path d="M62 46 H76 V56 H62 Z" fill="#9AA2AA"/><path d="M76 51 H96" stroke="#9AA2AA" stroke-width="4"/><path d="M80 47 l4 8 M86 47 l4 8" stroke="#7A6E66" stroke-width="1.4"/><path d="M26 62 L22 92 H40 L44 62 Z" fill="#3A3B3C"/><rect x="34" y="66" width="6" height="10" rx="2" fill="#D9473A"/>`;
  const CURLY = `${ground(96)}<path d="M30 96 C30 76 38 66 50 66 C62 66 70 76 70 96 Z" fill="#6FAE4F"/><circle cx="50" cy="48" r="17" fill="${SKIN}"/>${[[34, 36], [40, 28], [50, 26], [60, 28], [66, 36], [32, 46], [68, 46]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="${HAIR}"/><path d="M${x - 3} ${y} a3 3 0 1 1 3 3" stroke="#6E6A68" stroke-width="1.2" fill="none"/>`).join('')}${eyes(44, 56, 50, 2.4)}<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>`;
  const CARTOON = `<rect x="8" y="16" width="84" height="60" rx="6" fill="#3A3B3C"/><rect x="14" y="22" width="72" height="48" fill="#DCEFF5" stroke="none"/>${at(26, 26, 0.4, RABBIT)}<path d="M40 76 L34 90 M60 76 L66 90" stroke-width="4"/><path d="M28 90 H72" stroke-width="4"/>`;
  const TINYBOY = `${ground(96)}${at(20, 30, 0.6, KID_FULL('#5B8FC9', true, '<path d="M38 60 L66 72" stroke="#8C5A32" stroke-width="2"/><rect x="58" y="66" width="16" height="12" rx="2" fill="#C68B59"/>'))}<path d="M8 90 h8 M84 90 h8" stroke="#C8C3BC" stroke-width="3"/>`;
  const MATHBOOK = `<rect x="18" y="12" width="64" height="78" rx="4" fill="#E86A4F"/><rect x="18" y="12" width="10" height="78" fill="#C24E36"/><rect x="34" y="24" width="40" height="40" rx="3" fill="#FFFCF6"/><path d="M42 36 h10 M47 31 v10 M58 36 h10 M42 54 h10 M58 51 h10 M58 57 h10" stroke="#3A3B3C" stroke-width="2.4"/>`;
  const MELIA = `${ground(94)}<path d="M50 94 V44" stroke="#8C5A32" stroke-width="6"/><circle cx="50" cy="34" r="26" fill="#9DCB6A"/>${Array.from({ length: 16 }, (_, i) => `<circle cx="${28 + (i * 19) % 46}" cy="${16 + (i * 13) % 36}" r="3" fill="#C8A8DC" stroke="none"/>`).join('')}`;
  const GOODKID = `${ground(96)}${at(-12, 8, 0.86, ADULT('me'))}${at(44, 22, 0.74, KID('#F2C14E'))}${STAR(86, 18, 7)}<path d="M60 84 L70 76" stroke="${SKIN}" stroke-width="0"/>`;
  const PONDER = `${ground(96)}${at(-8, 8, 0.9, KID('#6FAE4F'))}<path d="M66 30 C62 18 80 12 86 20 C96 18 98 32 90 36 C92 44 78 46 74 40 C64 44 58 34 66 30 Z" fill="#FFFCF6"/>${[70, 78, 86].map(x => `<circle cx="${x}" cy="29" r="2.2" fill="#A39588" stroke="none"/>`).join('')}<circle cx="62" cy="46" r="3" fill="#FFFCF6"/><path d="M58 70 C58 64 62 62 64 66" stroke="${SKIN}" stroke-width="0"/>`;
  const ZIGZAG = `<path d="M0 0 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/><path d="M10 96 C30 80 10 66 34 56 C60 46 30 32 56 22 C76 14 70 8 90 4" stroke="#C9A06A" stroke-width="10" fill="none"/>`;
  const ROPE = `<path d="M14 86 C30 60 10 40 30 20" stroke="#C68B59" stroke-width="10" fill="none"/>${Array.from({ length: 9 }, (_, i) => { const y = 82 - i * 7.5; return `<path d="M${18 + Math.sin(i) * 6} ${y} l10 -6" stroke="#8C5A32" stroke-width="2"/>`; }).join('')}<path d="M46 86 C62 60 42 40 62 20" stroke="#D9B27A" stroke-width="10" fill="none"/><path d="M76 86 C92 60 72 40 92 20" stroke="#C68B59" stroke-width="10" fill="none"/>`;
  const ROWCUPS = `${ground(86)}${[0, 1, 2, 3, 4].map(i => `<path d="M${8 + i * 18} 50 H${24 + i * 18} L${22 + i * 18} 84 H${10 + i * 18} Z" fill="#5B8FC9"/>`).join('')}${[0, 1, 2, 3, 4].map(i => `<path d="M${8 + i * 18} 30 H${24 + i * 18} L${22 + i * 18} 48 H${10 + i * 18} Z" fill="#7FB2D9"/>`).join('')}`;
  const TICKET2 = `${ground(96)}${at(-10, 8, 0.86, ADULT('bo').replace('#5B8FC9', '#3F6FA6'))}<path d="M12 30 C12 18 60 16 62 28 Z" fill="#3F6FA6"/><rect x="58" y="54" width="30" height="18" rx="2" fill="#F2C14E" transform="rotate(-10 73 63)"/><path d="M66 56 V72" stroke="#D9A23A" stroke-width="2" stroke-dasharray="2 2" transform="rotate(-10 73 63)"/>`;
  const SWEATY = `${ground(96)}${at(0, 4, 1, KID('#E86A4F'))}<path d="M30 40 C26 48 26 52 30 54 C34 52 34 48 30 40 Z" fill="#7FB2D9"/><path d="M72 36 C68 44 68 48 72 50 C76 48 76 44 72 36 Z" fill="#7FB2D9"/>${at(64, 0, 0.32, SUN)}`;
  const THORN = `<path d="M6 70 C30 60 60 56 96 40" stroke="#6E8F3A" stroke-width="6" fill="none"/>${[[22, 64, -1], [40, 58, 1], [58, 54, -1], [76, 48, 1]].map(([x, y, d]) => `<path d="M${x - 4} ${y} L${x} ${y + d * 18} L${x + 4} ${y - 2} Z" fill="#8C9A5A"/>`).join('')}${FLOWER(88, 30, 7, '#E58FA0')}`;
  const QUICKFEET = `${ground(96)}${at(-6, 4, 0.92, KID_FULL('#F2C14E', true))}<path d="M6 56 h12 M2 66 h12 M8 76 h12" stroke="#A39588" stroke-width="2.4"/>`;
  const BEND = `<path d="M0 0 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/><path d="M8 100 V50 C8 26 26 18 50 18 H100" stroke="#C8C3BC" stroke-width="24" fill="none"/><path d="M8 100 V50 C8 26 26 18 50 18 H100" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="6 6" fill="none"/>`;
  const XOAI = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -26 C22 -26 30 0 22 18 C14 32 -10 32 -16 16 C-22 0 -18 -26 0 -26 Z" fill="#F2C14E"/><path d="M0 -26 C-2 -32 4 -36 8 -36" stroke="#6E8F3A" stroke-width="3" fill="none"/>${LEAF(4, -32, -20, '#6FAE4F')}</g>`;
  const MANGOS = `${ground(92)}${XOAI(36, 60, 1)}${XOAI(66, 64, 0.9)}`;
  const TUBEROSE = `${ground(94)}${[[36, 0], [56, 4], [70, 10]].map(([x, d]) => `<path d="M${x} 94 V${24 + d}" stroke="#4E8A3A" stroke-width="3"/>${[0, 1, 2, 3, 4].map(i => `<path d="M${x} ${30 + d + i * 10} l-8 -6 M${x} ${30 + d + i * 10} l8 -6" stroke="#FFFFFF" stroke-width="5"/><path d="M${x} ${30 + d + i * 10} l-8 -6 M${x} ${30 + d + i * 10} l8 -6" stroke="#C8C3BC" stroke-width="1"/>`).join('')}`).join('')}<path d="M20 94 C24 70 30 60 36 54" stroke="#6FAE4F" stroke-width="4" fill="none"/>`;
  const STEAMER = `${WATER(66)}<path d="M4 62 H96 L84 82 H16 Z" fill="#3F6FA6"/><rect x="18" y="44" width="56" height="18" rx="2" fill="#FFFFFF"/>${[24, 36, 48, 60].map(x => `<circle cx="${x}" cy="53" r="3" fill="#7FB2D9"/>`).join('')}<rect x="50" y="26" width="12" height="18" fill="#D9473A"/><path d="M56 22 c-4 -6 4 -10 0 -16" stroke="#C8C3BC" stroke-width="3" fill="none"/>`;
  const SWEETPOTATO = `${ground(88)}${[[34, 66, -20], [62, 68, 15]].map(([x, y, a]) => `<ellipse cx="${x}" cy="${y}" rx="22" ry="12" transform="rotate(${a} ${x} ${y})" fill="#B4553C"/><path d="M${x - 8} ${y - 2} q3 2 6 0 M${x + 2} ${y + 4} q3 2 6 0" stroke="#8C3A2A" stroke-width="1.6"/>`).join('')}<path d="M44 52 C44 40 50 30 56 26" stroke="#6FAE4F" stroke-width="3" fill="none"/>${LEAF(56, 26, -40, '#6FAE4F')}`;
  const GRANDMA = `${ground(96)}${at(-6, 8, 0.86, ADULT('ba'))}${at(44, 30, 0.66, KID('#E58FA0'))}<path d="M18 80 C30 92 60 92 72 80" stroke="#6F5A8E" stroke-width="8" fill="none"/>`;
  const PHONE2 = `<rect x="30" y="8" width="40" height="84" rx="8" fill="#3A3B3C"/><rect x="34" y="18" width="32" height="60" fill="#7FB2D9" stroke="none"/><circle cx="50" cy="85" r="3" fill="#C8C3BC" stroke="none"/><path d="M74 30 q8 8 0 16 M80 24 q14 14 0 28" stroke="#A39588" stroke-width="2.4" fill="none"/>`;
  const CYCAD = `${ground(94)}<path d="M44 94 L46 60 H54 L56 94 Z" fill="#8C6A42"/>${[-70, -45, -20, 0, 20, 45, 70].map(a => `<path d="M50 60 C50 40 50 30 50 14" transform="rotate(${a} 50 60)" stroke="#3E8E4A" stroke-width="4" fill="none"/>${[22, 30, 38, 46].map(y => `<path d="M50 ${y} l-6 -4 M50 ${y} l6 -4" transform="rotate(${a} 50 60)" stroke="#3E8E4A" stroke-width="2.4"/>`).join('')}`).join('')}`;
  const RENT = `${ground(94)}${at(-12, 8, 0.86, ADULT('bo'))}${at(46, 40, 0.56, BIKE)}<rect x="62" y="20" width="26" height="16" rx="2" fill="#F2C14E"/>${at(66, 22, 0.12, KEY)}`;
  const LUSH = `${ground(94)}<path d="M50 94 V58" stroke="#8C5A32" stroke-width="8"/>${[[50, 32, 26], [28, 44, 18], [72, 44, 18], [38, 22, 16], [62, 22, 16]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#4E8A3A"/>`).join('')}${[[40, 30], [58, 40], [30, 46], [70, 30]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#E86A4F" stroke="none"/>`).join('')}`;
  const BAMBOOHEDGE = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 80 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>${[8, 20, 32, 44, 56, 68, 80, 92].map((x, i) => `<path d="M${x} 82 C${x + (i % 2 ? 6 : -6)} 50 ${x} 30 ${x + (i % 2 ? 10 : -10)} 8" stroke="#6E9E3E" stroke-width="4" fill="none"/>${[20, 36, 52].map(y => `<path d="M${x + (i % 2 ? 4 : -4)} ${y} l${i % 2 ? 10 : -10} -4" stroke="#7DB25A" stroke-width="3"/>`).join('')}`).join('')}`;
  const BADGE = `<path d="M40 8 L50 30 L60 8" stroke="#5B8FC9" stroke-width="8" fill="none"/>${STAR(50, 58, 28, '#F2C14E')}<circle cx="50" cy="58" r="10" fill="#E9B04E"/>`;
  const SHIRTBTN = `${SHIRT('#9FC7D8')}${[40, 52, 64].map(y => `<circle cx="50" cy="${y}" r="3.4" fill="#FFFFFF" stroke-width="1.6"/>`).join('')}`;
  const SPRING2 = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${at(50, 4, 0.3, SUN)}${at(-10, 10, 0.86, MAIBRANCH)}<path d="M0 86 H100 V100 H0 Z" fill="#9BC46A" stroke="none"/>${BUTTERFLY(78, 60, 0.4)}`;
  const MARTIAL = `${ground(96)}${KID_FULL('#FFFFFF', false, '<path d="M38 70 H62" stroke="#3A3B3C" stroke-width="4"/><path d="M38 56 L22 50 M62 56 L76 40" stroke="#F6D2B8" stroke-width="7"/>')}`;
  const PATROL = `${ground(96)}${at(0, 4, 0.92, KID_FULL('#3E6B4A', true).replace(/#4D74A8/g, '#2E4A3A'))}<path d="M36 22 C36 14 64 14 64 22 Z" fill="#3E6B4A"/><path d="M30 22 H70" stroke="#2E4A3A" stroke-width="3"/><path d="M70 64 L84 58" stroke="#3A3B3C" stroke-width="4"/><path d="M84 58 L98 50 L98 70 Z" fill="#F7E07A" opacity=".7" stroke="none"/>`;
  const MEDAL = `<path d="M34 6 L50 40 L66 6" stroke="#D9473A" stroke-width="10" fill="none"/><circle cx="50" cy="62" r="24" fill="#F2C14E"/><circle cx="50" cy="62" r="16" fill="#E9B04E"/>${STAR(50, 62, 9, '#FFFCF6')}`;
  const PACKING = `${ground(96)}${at(-8, 8, 0.86, KID('#5B8FC9'))}${at(50, 34, 0.5, BAG)}${at(58, 6, 0.3, NOTEBOOK)}`;
  const ARTIST = `${ground(96)}${at(-10, 6, 0.86, KID_FULL('#E58FA0'))}<path d="M56 94 L68 30 L80 94 M68 30 L68 96" stroke="#8C5A32" stroke-width="3"/><rect x="52" y="30" width="36" height="34" fill="#FFFFFF"/>${at(54, 30, 0.34, SUNNY)}`;
  const TRAFFIC = `<rect x="34" y="6" width="32" height="70" rx="8" fill="#3A3B3C"/><circle cx="50" cy="20" r="8" fill="#D9473A"/><circle cx="50" cy="41" r="8" fill="#F2C14E"/><circle cx="50" cy="62" r="8" fill="#6FAE4F"/><path d="M50 76 V96" stroke="#3A3B3C" stroke-width="6"/>`;
  const START = `${ground(96)}<path d="M4 92 H96" stroke="#FFFFFF" stroke-width="0"/>${[['#E86A4F', -8], ['#5B8FC9', 22], ['#F2C14E', 52]].map(([c, x]) => at(x, 10, 0.8, KID_FULL(c, true))).join('')}<path d="M0 94 H100" stroke="#3A3B3C" stroke-width="3" stroke-dasharray="6 6"/>`;
  const BOAT2 = `${WATER(62)}<path d="M0 0 H100 V62 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M8 58 C30 76 70 76 92 58 Z" fill="#8C5A32"/><path d="M8 58 H92" stroke="#5E3A22" stroke-width="3"/><path d="M30 58 C34 44 66 44 70 58" fill="#D9B45A"/>${at(36, 16, 0.4, ADULT('bo'))}<path d="M78 40 L60 80" stroke="#8C5A32" stroke-width="3"/>`;
  const SNOWMAN = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/><path d="M0 84 H100 V100 H0 Z" fill="#FFFFFF" stroke="none"/><circle cx="50" cy="66" r="22" fill="#FFFFFF"/><circle cx="50" cy="34" r="15" fill="#FFFFFF"/>${eyes(45, 55, 32, 2)}<path d="M50 36 L60 38 L50 40 Z" fill="#F2903A"/><path d="M36 46 H64" stroke="#D9473A" stroke-width="5"/><circle cx="50" cy="60" r="2" fill="#3A3B3C" stroke="none"/><circle cx="50" cy="70" r="2" fill="#3A3B3C" stroke="none"/><path d="M28 60 L14 50 M72 60 L86 50" stroke="#8C5A32" stroke-width="3"/>`;
  const WHITEEYE = `<path d="M0 74 C30 70 70 72 100 66" stroke="#8C5A32" stroke-width="5" fill="none"/>${at(10, 8, 0.8, BIRD('#B9C46A', '#8C9A3E', '<circle cx="20" cy="37" r="5" fill="none" stroke="#FFFFFF" stroke-width="2.4"/>'))}`;
  const COMIC = `<rect x="14" y="10" width="72" height="82" rx="3" fill="#FFFFFF"/><path d="M14 50 H86 M50 10 V50 M40 50 V92" stroke="#3A3B3C" stroke-width="2.4"/>${at(14, 12, 0.36, RABBIT)}${at(52, 14, 0.3, SUN)}${at(14, 56, 0.24, CAT.replace(ground(92), ''))}${at(44, 52, 0.4, TREE)}`;
  const PRACTICE = `${ground(96)}${KID_FULL('#6FAE4F', false, '<path d="M38 56 L24 40 M62 56 L76 40" stroke="#F6D2B8" stroke-width="6"/>')}<path d="M8 96 h20 M72 96 h20" stroke="#C68B59" stroke-width="4"/>`;
  const SNOWFALL = `<rect x="2" y="2" width="96" height="96" rx="8" fill="#9FB4C8" stroke="none"/>${Array.from({ length: 18 }, (_, i) => { const x = 8 + (i * 29) % 86, y = 8 + (i * 17) % 70; return `<path d="M${x - 4} ${y} h8 M${x} ${y - 4} v8 M${x - 3} ${y - 3} l6 6 M${x + 3} ${y - 3} l-6 6" stroke="#FFFFFF" stroke-width="1.6"/>`; }).join('')}<path d="M2 84 C30 78 70 80 98 76 V98 H2 Z" fill="#FFFFFF" stroke="none"/>`;
  const SNOWGIRL = `${ground(96)}<path d="M26 96 C26 70 36 58 50 58 C64 58 74 70 74 96 Z" fill="#F2C14E"/><path d="M36 64 C40 60 60 60 64 64 L62 74 H38 Z" fill="#3F6FA6"/><circle cx="50" cy="40" r="16" fill="#FFF6EE"/><path d="M33 40 C30 18 70 18 67 40 C66 30 56 26 50 26 C44 26 34 30 33 40 Z" fill="#3A3B3C"/><path d="M36 26 C42 20 58 20 64 26" stroke="#D9473A" stroke-width="5" fill="none"/>${eyes(44, 56, 42, 2.2)}<path d="M46 49 q4 3 8 0" stroke="#C24E36" stroke-width="2.2"/><circle cx="78" cy="78" r="9" fill="#D9473A"/><path d="M78 69 q2 -6 6 -6" stroke="#6E8F3A" stroke-width="2"/>`;

  Object.assign(T, {
    /* Bài 59 · oa oe */
    'hoa hồng': SV(ROSES),
    'khỏe mạnh': SV(STRONG),
    'chìa khóa': SV(KEY),
    'tòa nhà': SV(TOWERBLOCK),
    'toa tàu': SV(WAGON),
    'chích chòe': SV(MAGPIE),
    'hoa hòe': SV(SOPHORA),
    'khoe sắc': SV(BLOOM),
    'Cô giáo dạy các bạn làm hoa giấy.': SV(PAPERFLOWER),
    'Mỗi đóa hoa đều khoe sắc.': SV(`${ground(94)}${at(-8, 10, 0.6, BLOOM.replace(ground(94), ''))}${at(30, 4, 0.66, BLOOM.replace(ground(94), '').replace(/#E58FA0/g, '#F2C14E'))}${at(62, 12, 0.6, BLOOM.replace(ground(94), '').replace(/#E58FA0/g, '#E86A4F'))}`),
    'Cô khen cả lớp khéo tay.': SV(`${ground(96)}${at(-12, 8, 0.86, ADULT('co'))}${at(44, 46, 0.5, KID('#5B8FC9'))}${at(66, 46, 0.5, KID('#E58FA0'))}${STAR(70, 22, 7)}`),
    /* Bài 60 · oan oăn oat oăt */
    'máy khoan': SV(DRILL),
    'tóc xoăn': SV(CURLY),
    'hoạt hình': SV(CARTOON),
    'loắt choắt': SV(TINYBOY),
    'sách toán': SV(MATHBOOK),
    'hoa xoan': SV(MELIA),
    'bé ngoan': SV(GOODKID),
    'băn khoăn': SV(PONDER),
    'ngoằn ngoèo': SV(ZIGZAG),
    'dây xoắn': SV(ROPE),
    'hàng loạt': SV(ROWCUPS),
    'soát vé': SV(TICKET2),
    'toát mồ hôi': SV(SWEATY),
    'nhọn hoắt': SV(THORN),
    'thoăn thoắt': SV(QUICKFEET),
    'khúc ngoặt': SV(BEND),
    'Chú bé loắt choắt, cái xắc xinh xinh.': SV(TINYBOY),
    'Cái chân thoăn thoắt, cái đầu nghênh nghênh.': SV(QUICKFEET),
    'Bé Toàn rất ngoan, lại học giỏi toán.': SV(`${ground(96)}<rect x="36" y="64" width="60" height="6" rx="2" fill="#C68B59"/>${at(-10, 8, 0.86, KID('#6FAE4F'))}${at(54, 28, 0.4, MATHBOOK)}${STAR(88, 16, 6)}`),
    /* Bài 61 · oai uê uy */
    'quả xoài': SV(MANGOS),
    'hoa huệ': SV(TUBEROSE),
    'tàu thủy': SV(STEAMER),
    'củ khoai': SV(SWEETPOTATO),
    'bà ngoại': SV(GRANDMA),
    'điện thoại': SV(PHONE2),
    'cây vạn tuế': SV(CYCAD),
    'thuê xe': SV(RENT),
    'xum xuê': SV(LUSH),
    'lũy tre': SV(BAMBOOHEDGE),
    'huy hiệu': SV(BADGE),
    'khuy áo': SV(SHIRTBTN),
    'Mẹ cho bé về quê ngoại.': SV(`${RICEFIELD}${at(56, 10, 0.4, HOUSE())}${at(4, 40, 0.4, ADULT('me'))}${at(30, 52, 0.3, KID('#E58FA0'))}`),
    'Ở quê có hoa huệ, hoa quế.': SV(`${ground(94)}${at(-6, 0, 0.8, TUBEROSE.replace(ground(94), ''))}${at(50, 20, 0.56, LUSH.replace(ground(94), '').replace(/#E86A4F/g, '#F2E6C8'))}`),
    'Bé nhớ lũy tre và cây vạn tuế.': SV(`${BAMBOOHEDGE}${at(20, 34, 0.6, CYCAD.replace(ground(94), ''))}`),
    /* Bài 62 · uân uât */
    'mùa xuân': SV(SPRING2),
    'võ thuật': SV(MARTIAL),
    'tuần tra': SV(PATROL),
    'huân chương': SV(MEDAL),
    'chuẩn bị': SV(PACKING),
    'nghệ thuật': SV(ARTIST),
    'luật lệ': SV(TRAFFIC),
    'xuất phát': SV(START),
    'Nghỉ hè, bố mẹ cho Quân đi du lịch.': SV(`${BEACH}${at(10, 40, 0.44, ADULT('bo'))}${at(40, 40, 0.44, ADULT('me'))}${at(66, 52, 0.34, KID('#5B8FC9'))}`),
    'Tết đến, xuân về.': SV(`${TET}`),
    'Cây mai, cây quất đón xuân.': SV(`${ground(94)}${at(-6, 0, 0.6, MAIBRANCH)}${at(48, 30, 0.56, LUSH.replace(ground(94), '').replace(/#E86A4F/g, '#F2903A'))}`),
    /* Bài 63 · uyên uyêt */
    'con thuyền': SV(BOAT2),
    'người tuyết': SV(SNOWMAN),
    'chim khuyên': SV(WHITEEYE),
    'truyện tranh': SV(COMIC),
    'luyện tập': SV(PRACTICE),
    'trăng khuyết': SV(CRESCENT),
    'tuyết rơi': SV(SNOWFALL),
    'Bạch Tuyết': SV(SNOWGIRL),
    'Trăng khuyết trông giống con thuyền trôi.': SV(`${CRESCENT}${at(30, 64, 0.4, `<path d="M8 58 C30 76 70 76 92 58 Z" fill="#8C5A32"/>`)}`),
    'Bà kể chuyện cổ tích cho Nga nghe.': SV(`${ground(96)}${at(-10, 8, 0.86, ADULT('ba'))}${at(44, 30, 0.66, KID('#E58FA0'))}${at(28, 54, 0.3, COMIC)}`),
    'Nga thích nghe chuyện Bạch Tuyết.': SV(`${ground(96)}${at(-10, 14, 0.8, KID('#E58FA0'))}${at(44, 10, 0.56, SNOWGIRL.replace(ground(96), ''))}<path d="M48 14 C44 4 62 0 66 8 C76 4 84 14 76 20" stroke="#C8C3BC" stroke-width="2" fill="#FFFCF6"/>`)
  });
  /* ---------- Bài 64–70 (uây oang uyt, oăng oac oach, uya uyp uynh uych uyu, oong yêm oay, eng oanh, yêt yêng oen oao, oet uênh ooc) ---------- */
  const SPOONSTIR = (x, y, a = 30) => `<g transform="rotate(${a} ${x} ${y})"><path d="M${x} ${y} V${y - 44}" stroke="#C8CCD0" stroke-width="5"/><ellipse cx="${x}" cy="${y + 4}" rx="6" ry="8" fill="#C8CCD0"/></g>`;
  const SWIRL = (x, y, r) => `<path d="M${x - r} ${y} C${x - r} ${y - r * 0.5} ${x + r} ${y - r * 0.5} ${x + r} ${y} C${x + r} ${y + r * 0.4} ${x - r * 0.4} ${y + r * 0.4} ${x - r * 0.3} ${y}" stroke="#A39588" stroke-width="2" fill="none"/>`;
  const STIRBOWL = `${ground(94)}${BOWL(`<ellipse cx="50" cy="50" rx="40" ry="8" fill="#F6EEDC"/>`)}${SWIRL(50, 50, 18)}${SPOONSTIR(62, 50, 30)}<circle cx="24" cy="30" r="6" fill="#FFFFFF"/><circle cx="16" cy="40" r="4" fill="#FFFFFF"/>`;
  const STIRGLASS = `${ground(94)}<path d="M30 30 H70 L66 92 H34 Z" fill="#DCEFF5"/><path d="M32 46 H68 L66 92 H34 Z" fill="#A9D3E4" stroke="none"/><path d="M30 30 H70 L66 92 H34 Z" fill="none"/>${SWIRL(50, 58, 12)}${SPOONSTIR(58, 70, 20)}`;
  const LADLEPOT = `${ground(94)}${POT()}<ellipse cx="50" cy="46" rx="36" ry="7" fill="#F6EEDC"/>${SWIRL(50, 47, 16)}<path d="M58 46 L80 12" stroke="#8C5A32" stroke-width="5"/><ellipse cx="56" cy="48" rx="8" ry="5" fill="#8C5A32"/><path d="M30 34 c-4 -6 4 -10 0 -16 M44 30 c-4 -6 4 -10 0 -16" stroke="#C8C3BC" stroke-width="2.4" fill="none"/>`;
  const MINERAL = `${ground(94)}${BOTTLE.replace(/#BFDDE8|#DCEFF5/g, '#CFE8F2')}${[[46, 70], [54, 60], [50, 80], [58, 76], [44, 52]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#FFFFFF" stroke="#7FB2D9" stroke-width="1"/>`).join('')}`;
  const BUSV = `${ground(92)}${at(0, 8, 1, BUS)}`;
  const BUSSTOP = `${ground(94)}<path d="M8 94 V30 M40 94 V30" stroke="#7A6E66" stroke-width="4"/><path d="M2 30 H46 L42 22 H6 Z" fill="#5B8FC9"/><rect x="10" y="72" width="28" height="6" fill="#C68B59"/>${at(44, 34, 0.56, BUS)}<rect x="-2" y="40" width="0" height="0"/>`;
  const WAGDOG = `${ground(92)}${at(-4, 4, 1, DOG('#C68B59'))}<path d="M88 22 q6 4 4 12 M92 14 q10 8 6 22" stroke="#A39588" stroke-width="2.4" fill="none"/>`;
  const CROWN = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-16 8 L-18 -10 L-8 0 L0 -14 L8 0 L18 -10 L16 8 Z" fill="#F2C14E"/><circle cx="0" cy="-2" r="2.4" fill="#D9473A" stroke="none"/></g>`;
  const QUEEN = `${ground(96)}${at(8, 4, 1, ADULT('me').replace(/#E58FA0|#E86A4F|#D9573F/g, '#8E5BA8'))}${CROWN(50, 14, 1)}<path d="M22 96 C22 80 30 72 36 70 M78 96 C78 80 70 72 64 70" stroke="#D9473A" stroke-width="5" fill="none"/>`;
  const CLOAK = `${ground(96)}<path d="M36 52 C24 64 20 84 24 96 H76 C80 84 76 64 64 52 Z" fill="#D9473A"/>${KID_FULL('#5B8FC9')}<path d="M40 52 C46 58 54 58 60 52" stroke="#F2C14E" stroke-width="3" fill="none"/>`;
  const CABIN = `<path d="M0 0 H100 V100 H0 Z" fill="#E9E1D3" stroke="none"/>${[10, 40, 70].map(x => `<rect x="${x}" y="14" width="22" height="20" rx="3" fill="#DCEFF5"/>`).join('')}${[8, 52].map(x => `<rect x="${x}" y="54" width="40" height="22" rx="4" fill="#3E8E4A"/><rect x="${x}" y="40" width="10" height="36" rx="3" fill="#2E6A3A"/>`).join('')}<path d="M0 90 H100" stroke="#A39588" stroke-width="3"/>`;
  const WHISTLEKID = `${ground(96)}${KID('#F2C14E').replace('<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>', '<circle cx="50" cy="58" r="3" fill="#B4553C"/>')}<path d="M68 40 v-14 l8 -3 v14 M82 46 v-12" stroke="#5B8FC9" stroke-width="2.4" fill="none"/><circle cx="66" cy="40" r="3" fill="#5B8FC9" stroke="none"/><circle cx="80" cy="47" r="3" fill="#5B8FC9" stroke="none"/>`;
  const WHISTLE2 = `${WHISTLE}<path d="M6 30 l8 6 M4 44 h10 M10 18 l6 10" stroke="#A39588" stroke-width="2.4"/>`;
  const CHAIRROW = `<path d="M0 0 H100 V100 H0 Z" fill="#E9E1D3" stroke="none"/>${[8, 38, 68].map(x => `<rect x="${x}" y="12" width="24" height="18" rx="3" fill="#DCEFF5"/>`).join('')}<rect x="10" y="54" width="44" height="22" rx="4" fill="#5B8FC9"/><rect x="10" y="38" width="10" height="38" rx="3" fill="#3F6FA6"/>${at(22, 20, 0.6, KID('#E58FA0'))}<path d="M0 90 H100" stroke="#A39588" stroke-width="3"/>`;

  const JACKET = `<path d="M30 14 L18 20 L8 62 L18 64 L24 40 L26 92 H74 L76 40 L82 64 L92 62 L82 20 L70 14 C64 22 36 22 30 14 Z" fill="#3F6FA6"/><path d="M50 22 V92" stroke="#C8CCD0" stroke-width="2.4"/><path d="M30 14 L40 32 L50 22 L60 32 L70 14" fill="#2E4F7A"/><rect x="30" y="62" width="12" height="8" rx="1" fill="#2E4F7A"/><rect x="58" y="62" width="12" height="8" rx="1" fill="#2E4F7A"/>`;
  const HARVEST = `${ground(96)}${at(30, 0, 0.7, ORANGETREE.replace(ground(94), '').replace(/#F2903A|#F2A03A|#E8743B/g, '#C8443A'))}${at(-12, 14, 0.84, ADULT('me'))}${at(46, 64, 0.4, BASKET([[30, 40], [44, 36], [58, 40], [38, 30], [52, 30]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#C8443A"/>`).join('')))}`;
  const LONGSNAKE = `${ground(94)}<path d="M8 80 C20 60 34 90 46 70 C58 50 70 84 82 62 C88 50 90 40 84 32" stroke="#6FAE4F" stroke-width="10" fill="none"/><path d="M8 80 C20 60 34 90 46 70 C58 50 70 84 82 62 C88 50 90 40 84 32" stroke="#4E8A3A" stroke-width="2" stroke-dasharray="3 6" fill="none"/><ellipse cx="84" cy="28" rx="8" ry="6" fill="#6FAE4F"/><circle cx="86" cy="26" r="1.6" fill="#3A3B3C" stroke="none"/><path d="M92 30 l6 2 l-4 2" stroke="#D9473A" stroke-width="1.6" fill="none"/>`;
  const CHATTER = `${ground(96)}${at(-10, 10, 0.86, KID('#E86A4F').replace('<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>', '<ellipse cx="50" cy="58" rx="4" ry="4" fill="#B4553C"/>'))}<path d="M56 12 H96 V46 H70 L62 56 L64 46 H56 Z" fill="#FFFCF6"/>${[20, 28, 36].map((y, i) => `<path d="M62 ${y} q4 -4 8 0 t8 0 t8 0 t${i ? 4 : 8} 0" stroke="#A39588" stroke-width="2" fill="none"/>`).join('')}`;
  const TANGLE = `${ground(94)}<path d="M10 80 C30 20 50 90 60 40 C68 10 90 30 70 60 C50 90 20 50 40 30 C60 10 80 70 90 80" stroke="#8C5A32" stroke-width="4" fill="none"/><path d="M20 30 C40 60 60 20 84 50" stroke="#6E8F3A" stroke-width="3" fill="none"/>${LEAF(60, 40, -30, '#6FAE4F')}${LEAF(30, 64, 40, '#6FAE4F')}`;
  const TORN = `<path d="M18 12 H82 V88 H18 Z" fill="#FFFCF6"/>${[26, 36, 46].map(y => `<path d="M26 ${y} H74" stroke="#BFDDE8" stroke-width="2"/>`).join('')}<path d="M50 12 L44 30 L56 42 L46 58 L58 72 L50 88" stroke="#3A3B3C" stroke-width="2.4" fill="none"/><path d="M50 12 L44 30 L56 42 L46 58 L58 72 L50 88 H82 V12 Z" fill="#F6EEDC" transform="translate(6 2) rotate(4 66 50)"/>`;
  const CRACKED = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 44 H100 V100 H0 Z" fill="#C9A06A" stroke="none"/><path d="M40 44 L46 58 L38 70 L50 84 L44 100 H58 L62 84 L52 70 L60 58 L54 44 Z" fill="#5E3A22"/><path d="M10 60 l10 4 M76 70 l14 -4 M20 86 l12 -6" stroke="#8C6A42" stroke-width="2"/>${at(70, 2, 0.26, SUN)}`;
  const ARMOVER = `${ground(96)}${at(-6, 4, 0.9, KID_FULL('#E86A4F'))}${at(34, 4, 0.9, KID_FULL('#5B8FC9'))}<path d="M46 54 C56 46 66 48 76 52" stroke="${SKIN}" stroke-width="6" fill="none"/>`;
  const PLAN = `${CALENDAR}${[[30, 50], [46, 50], [62, 62]].map(([x, y]) => `<path d="M${x - 4} ${y} l4 4 l7 -8" stroke="#3E8E4A" stroke-width="3" fill="none"/>`).join('')}`;
  const RATTLE = `${ground(94)}<rect x="16" y="40" width="58" height="30" rx="2" fill="#C68B59"/><path d="M16 50 H74 M16 60 H74" stroke="#8C5A32" stroke-width="2"/><path d="M74 50 L96 40" stroke="#8C5A32" stroke-width="4"/><circle cx="30" cy="80" r="12" fill="#FFFCF6" stroke-width="3"/><circle cx="62" cy="80" r="12" fill="#FFFCF6" stroke-width="3"/><path d="M30 68 V92 M18 80 H42 M62 68 V92 M50 80 H74" stroke-width="1.6"/><path d="M6 34 l6 4 M4 46 h8 M8 24 l6 6" stroke="#A39588" stroke-width="2.4"/>`;
  const HARVESTFIELD = `${GOLDENFIELD}${at(56, 40, 0.5, SICKLE)}`;
  const GIFTCOAT = `${ground(96)}${at(-14, 8, 0.86, ADULT('bo'))}${at(48, 30, 0.66, KID('#E58FA0'))}${at(30, 46, 0.36, JACKET)}`;
  const LYCHEETREE = `${ground(94)}<path d="M50 94 V58" stroke="#8C5A32" stroke-width="7"/><circle cx="50" cy="36" r="30" fill="#5E9A42"/>${[[34, 28], [50, 20], [66, 30], [40, 44], [60, 46], [50, 34], [30, 40], [70, 42]].map(([x, y]) => LYCHEE(x, y, 5)).join('')}`;
  const LYCHEEGRAN = `${ground(96)}${at(30, 0, 0.72, LYCHEETREE.replace(ground(94), ''))}${at(-12, 14, 0.84, ADULT('ba'))}`;
  const LOADEDBRANCH = `<path d="M0 30 C20 40 30 20 50 40 C70 60 80 30 100 50" stroke="#8C5A32" stroke-width="5" fill="none"/><path d="M30 28 C40 60 20 70 34 90 M70 48 C60 70 80 76 72 92" stroke="#8C5A32" stroke-width="3" fill="none"/>${[[24, 44], [32, 56], [40, 50], [30, 74], [64, 64], [74, 70], [70, 82], [58, 54], [84, 58]].map(([x, y]) => LYCHEE(x, y, 6)).join('')}${LEAF(50, 40, -40, '#6FAE4F')}${LEAF(86, 50, 20, '#6FAE4F')}`;

  const NIGHTLATE = `${NIGHTHOUSE}${at(64, 6, 0.24, CRESCENT.replace(/<rect[^>]*>/, ''))}`;
  const TUBELIGHT = `<path d="M0 0 H100 V100 H0 Z" fill="#F4F0EA" stroke="none"/><rect x="10" y="40" width="80" height="12" rx="6" fill="#FFFFFF"/><rect x="6" y="36" width="10" height="20" rx="2" fill="#A39588"/><rect x="84" y="36" width="10" height="20" rx="2" fill="#A39588"/>${[20, 35, 50, 65, 80].map(x => `<path d="M${x} 60 l${(x - 50) / 6} 16" stroke="#F2C14E" stroke-width="2.4"/>`).join('')}`;
  const PARENTS = `${ground(96)}${at(-16, 6, 0.8, ADULT('bo'))}${at(22, 6, 0.8, ADULT('me'))}${at(58, 40, 0.56, KID('#5B8FC9'))}`;
  const NUDGE = `${ground(96)}${at(-4, 4, 0.9, KID_FULL('#E86A4F'))}${at(30, 4, 0.9, KID_FULL('#6FAE4F').replace('<path d="M38 56 L32 72 M62 56 L68 72" stroke="#F6D2B8" stroke-width="6"/>', '<path d="M38 56 L30 60 M62 56 L68 72" stroke="#F6D2B8" stroke-width="6"/>'))}<path d="M50 40 l-6 -6 M52 32 l-2 -8 M58 36 l2 -8" stroke="#A39588" stroke-width="2"/>`;
  const ELBOW = `<path d="M14 90 L44 50 L86 34" stroke="${SKIN}" stroke-width="18" fill="none" stroke-linejoin="round"/><path d="M14 90 L44 50 L86 34" stroke="#3A3B3C" stroke-width="1.6" fill="none" stroke-linejoin="round" opacity=".0"/><path d="M8 96 L22 82" stroke="#5B8FC9" stroke-width="22"/><circle cx="90" cy="32" r="9" fill="${SKIN}"/><circle cx="44" cy="52" r="15" fill="none" stroke="#D9473A" stroke-width="3" stroke-dasharray="4 3"/>`;
  const LATEDESK = `${NIGHT}<rect x="12" y="66" width="76" height="6" fill="#C68B59"/><path d="M20 72 V96 M80 72 V96" stroke="#8C5A32" stroke-width="4"/>${at(4, 18, 0.7, KID('#5B8FC9'))}${at(56, 22, 0.44, LAMP)}<path d="M60 44 L48 66 H84 L72 44 Z" fill="#F7E07A" opacity=".45" stroke="none"/>`;
  const LATECLOCK = `${NIGHT}${at(14, 14, 0.7, CLOCK)}<path d="M49 51 L44 33 M49 51 L42 46" stroke="#3A3B3C" stroke-width="3"/><path d="M78 20 C70 20 66 30 70 36 C74 42 82 42 86 38 C78 38 74 30 78 20 Z" fill="#F7E07A" stroke="none"/>`;
  const SLEEPYTOWN = `${NIGHT}${[[8, 46], [38, 52], [66, 44]].map(([x, y]) => at(x, y, 0.3, HOUSE('#9FB4C8', '#5E6F8E'))).join('')}<path d="M72 18 C64 18 60 28 64 34 C68 40 76 40 80 36 C72 36 68 28 72 18 Z" fill="#F7E07A" stroke="none"/>${[[20, 16], [40, 26], [54, 12]].map(([x, y]) => STAR(x, y, 3, '#F7E07A')).join('')}`;
  const TUBE = (c = '#FFFFFF', cap = '#5B8FC9', mark = '') => `<path d="M20 30 H70 L82 40 L82 60 L70 70 H20 L14 66 V34 Z" fill="${c}"/><path d="M14 34 V66" stroke-width="3"/><rect x="82" y="42" width="12" height="16" rx="2" fill="${cap}"/>${mark}`;
  const TOOTHPASTE = `${at(0, -8, 0.9, TUBE('#FFFFFF', '#5B8FC9', '<path d="M30 44 H60 M30 56 H60" stroke="#7FB2D9" stroke-width="5"/>'))}<rect x="10" y="80" width="62" height="6" rx="3" fill="#7FB2D9"/><rect x="58" y="70" width="18" height="10" rx="2" fill="#FFFFFF"/><path d="M62 70 c2 -6 8 -6 10 0" stroke="#7FB2D9" stroke-width="3" fill="#DCEFF5"/>`;
  const OINTMENT = `${at(0, 6, 0.9, TUBE('#F6F2EA', '#D9473A', '<rect x="36" y="40" width="16" height="20" fill="#FFFFFF" stroke="none"/><path d="M44 42 V58 M36 50 H52" stroke="#D9473A" stroke-width="5"/>'))}`;
  const PAINTTUBE = `${at(-6, -6, 0.86, TUBE('#C8CCD0', '#3A3B3C', '<rect x="26" y="40" width="40" height="20" fill="#E86A4F" stroke="none"/>'))}<path d="M20 70 C10 76 12 90 26 88 C40 86 36 74 24 74" fill="#E86A4F"/>`;
  const BROTHERS = `${ground(96)}${at(-6, 0, 0.94, KID_FULL('#5B8FC9'))}${at(40, 18, 0.76, KID_FULL('#F2C14E'))}<path d="M58 60 C64 56 70 58 74 62" stroke="${SKIN}" stroke-width="6" fill="none"/>`;
  const LEADER = `${ground(96)}${at(-12, 4, 0.9, ADULT('bo').replace(/#5B8FC9/g, '#6E8F3A'))}<path d="M24 62 L34 76 L44 62" fill="#D9473A"/>${at(48, 46, 0.5, KID('#6E8F3A'))}${at(70, 46, 0.5, KID('#6E8F3A'))}`;
  const STOMP = `${ELEPHANT}${[[14, 88], [22, 94], [70, 94], [80, 88]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#E2D6C2" stroke="none"/>`).join('')}<path d="M4 70 l6 4 M2 80 h8" stroke="#A39588" stroke-width="2.4"/>`;
  const FALLKID = `${ground(92)}<path d="M18 86 C30 72 52 70 66 80 L64 92 H20 Z" fill="#E86A4F"/><circle cx="76" cy="76" r="14" fill="${SKIN}"/><path d="M64 70 C64 56 90 58 90 72 C84 66 72 64 64 70 Z" fill="${HAIR}"/><path d="M70 78 l4 -2 M80 78 l4 2" stroke-width="2"/><path d="M73 84 q3 -2 6 0" stroke-width="2"/><path d="M20 84 L8 74 M30 84 L22 66" stroke="#4D74A8" stroke-width="6"/>${STAR(60, 50, 5)}${STAR(80, 44, 4)}${STAR(92, 56, 3)}`;
  const DROPBAG = `${ground(92)}${at(26, 32, 0.6, BAG)}<path d="M20 92 l-8 -6 M80 92 l8 -6 M30 90 l-6 -10 M70 90 l6 -10" stroke="#A39588" stroke-width="2.4"/><path d="M40 18 v10 M56 14 v12" stroke="#A39588" stroke-width="2" stroke-dasharray="3 3"/>`;
  const SWITCHBACK = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 100 L40 20 L60 40 L80 10 L100 30 V100 Z" fill="#8FB86A" stroke="none"/><path d="M20 98 C60 92 70 84 34 76 C10 70 30 60 60 58 C84 56 80 46 54 42 C40 40 46 34 62 30" stroke="#E8DCC2" stroke-width="7" fill="none"/>`;
  const KNEE = `<path d="M30 10 L46 52 L34 92" stroke="${SKIN}" stroke-width="18" fill="none" stroke-linejoin="round"/><path d="M22 6 L34 30" stroke="#5B8FC9" stroke-width="24"/><path d="M26 92 H52" stroke="#3A3B3C" stroke-width="8"/><circle cx="46" cy="52" r="15" fill="none" stroke="#D9473A" stroke-width="3" stroke-dasharray="4 3"/>`;
  const FLEX = `${ground(96)}${KID_FULL('#F2C14E', false, '<path d="M62 56 L76 58 L76 40" stroke="#F6D2B8" stroke-width="7" fill="none"/><circle cx="76" cy="38" r="5" fill="#F6D2B8" stroke="none"/><circle cx="76" cy="58" r="9" fill="none" stroke="#D9473A" stroke-width="2.4" stroke-dasharray="3 3"/>')}`;
  const HURTELBOW = `${ground(96)}${at(-6, 4, 0.92, KID('#5B8FC9'))}<path d="M64 80 L80 70 L84 56" stroke="${SKIN}" stroke-width="8" fill="none"/><rect x="74" y="64" width="12" height="8" rx="2" fill="#FFFCF6" transform="rotate(-30 80 68)"/><path d="M84 40 C80 46 80 50 84 52 C88 50 88 46 84 40 Z" fill="#7FB2D9"/>`;
  const CLEANLIGHT = `${ground(96)}${at(-14, 14, 0.84, ADULT('bo'))}<rect x="36" y="14" width="58" height="9" rx="4" fill="#FFFFFF"/><rect x="32" y="11" width="7" height="15" rx="2" fill="#A39588"/><rect x="90" y="11" width="7" height="15" rx="2" fill="#A39588"/><path d="M50 60 L58 30" stroke="${SKIN}" stroke-width="7"/><rect x="52" y="24" width="14" height="10" rx="2" fill="#F2C14E"/>`;
  const MOMLATE = `${NIGHT}<rect x="38" y="66" width="56" height="6" fill="#C68B59"/><path d="M44 72 V96 M88 72 V96" stroke="#8C5A32" stroke-width="4"/>${at(-8, 22, 0.8, ADULT('me'))}${at(68, 30, 0.38, LAMP)}<rect x="46" y="56" width="20" height="10" fill="#FFFFFF"/>`;

  const SAUCEPAN = `${ground(90)}<path d="M18 46 H70 V78 C70 84 66 88 60 88 H28 C22 88 18 84 18 78 Z" fill="#C8CCD0"/><path d="M14 46 H74" stroke-width="4"/><path d="M70 54 H96" stroke="#3A3B3C" stroke-width="7"/><path d="M26 56 V80" stroke="#FFFFFF" stroke-width="3" opacity=".7"/>`;
  const BIB = (c = '#F2C14E') => `<path d="M32 14 C32 30 68 30 68 14" stroke="${c}" stroke-width="5" fill="none"/><path d="M26 22 C34 34 66 34 74 22 C86 40 84 80 50 88 C16 80 14 40 26 22 Z" fill="${c}"/><path d="M38 36 C44 42 56 42 62 36" fill="#FFFFFF" opacity=".6"/>${FLOWER(50, 62, 7, '#FFFFFF')}`;
  const TORNADO = `<path d="M0 0 H100 V100 H0 Z" fill="#C9CED6" stroke="none"/><path d="M0 92 H100" stroke="#8C9A5A" stroke-width="8"/>${[[20, 80, 18], [26, 70, 28], [34, 58, 40], [40, 44, 56], [44, 28, 72]].map(([x, y, w], i) => `<path d="M${x + 6 - i * 2} ${y} C${x} ${y - 8} ${x + w} ${y - 8} ${x + w} ${y}" stroke="#6E7682" stroke-width="5" fill="none"/>`).join('')}<path d="M30 88 C28 70 36 50 46 20 H84 C72 40 52 70 34 92 Z" fill="#8C939E" opacity=".55" stroke="none"/>`;
  const DECK = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/>${WATER(56)}<path d="M0 70 L100 60 V100 H0 Z" fill="#C68B59"/>${[74, 82, 90].map(y => `<path d="M0 ${y + 2} L100 ${y - 8}" stroke="#8C5A32" stroke-width="1.6"/>`).join('')}<path d="M0 50 L100 40 M0 60 L100 50" stroke="#FFFFFF" stroke-width="3"/>${[10, 30, 50, 70, 90].map((x, i) => `<path d="M${x} ${69 - i * 2} V${49 - i * 2}" stroke="#FFFFFF" stroke-width="3"/>`).join('')}`;
  const WATERCRESS = `${ground(92)}<path d="M50 92 C46 70 40 60 30 50 M50 92 C52 70 58 56 70 48 M50 92 V44" stroke="#4E8A3A" stroke-width="3" fill="none"/>${[[30, 46], [24, 54], [36, 40], [70, 44], [76, 52], [64, 38], [50, 38], [44, 30], [56, 30], [38, 58], [62, 58]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="#6FAE4F"/>`).join('')}<path d="M36 92 C40 84 60 84 64 92" stroke="#C68B59" stroke-width="5" fill="none"/>`;
  const POTS = `${ground(92)}${at(-6, 14, 0.7, POT())}${at(40, 30, 0.62, SAUCEPAN.replace(ground(90), ''))}`;
  const HUGMOM = `${ground(96)}${at(-6, 4, 0.92, ADULT('me'))}${at(34, 30, 0.66, KID('#F2C14E'))}<path d="M22 80 C34 94 64 94 74 82" stroke="#E86A4F" stroke-width="8" fill="none"/><path d="M84 18 c-4 -6 -12 -2 -8 4 l8 8 l8 -8 c4 -6 -4 -10 -8 -4 Z" fill="#E86A4F"/>`;
  const BABYBIB = `${ground(96)}<path d="M28 96 C28 76 38 66 50 66 C62 66 72 76 72 96 Z" fill="#F6E3BC"/><circle cx="50" cy="46" r="20" fill="${SKIN}"/>${eyes(43, 57, 46, 2.2)}<path d="M46 54 q4 3 8 0" stroke-width="2"/>${cheeks(38, 62, 52)}<path d="M50 26 c-4 -6 4 -8 2 -2" stroke="${HAIR}" stroke-width="2" fill="none"/>${at(30, 60, 0.4, BIB('#E58FA0'))}`;
  const FIDDLE = `${ground(96)}${at(-8, 6, 0.9, KID('#5B8FC9'))}<rect x="58" y="70" width="34" height="22" rx="3" fill="#F2C14E"/><circle cx="66" cy="94" r="4" fill="#3A3B3C"/><circle cx="84" cy="94" r="4" fill="#3A3B3C"/><path d="M66 50 C66 40 80 38 80 46 C80 52 72 52 72 58 M72 64 v1" stroke="#D9473A" stroke-width="3" fill="none"/>`;
  const SPINTOP = `${ground(92)}<path d="M30 40 C30 30 70 30 70 40 L52 86 H48 Z" fill="#E86A4F"/><path d="M30 40 C30 50 70 50 70 40" fill="#F2C14E"/><path d="M50 30 V18" stroke="#8C5A32" stroke-width="5"/><path d="M14 56 C14 30 86 30 86 56" stroke="#A39588" stroke-width="2.4" fill="none" stroke-dasharray="5 5"/><path d="M82 50 l4 6 l6 -4" stroke="#A39588" stroke-width="2.4" fill="none"/>`;
  const SCRIBBLE = `${ground(96)}${at(-8, 10, 0.8, KID('#E58FA0'))}${at(46, 48, 0.5, WRITE)}<path d="M62 46 L84 30" stroke="#F2C14E" stroke-width="4"/><path d="M80 18 l6 -4 M90 26 l6 -2 M86 36 h8" stroke="#A39588" stroke-width="2"/>`;
  const PINKID = `${ground(96)}${at(-10, 8, 0.86, KID('#6FAE4F'))}${at(46, 0, 0.6, PINWHEEL)}`;
  const COOKCRESS = `${ground(96)}${at(-14, 8, 0.86, ADULT('me'))}${at(44, 40, 0.56, POT(`<ellipse cx="50" cy="46" rx="36" ry="7" fill="#9DCB6A"/>`))}${[[64, 64], [72, 62], [80, 64]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#4E8A3A" stroke="none"/>`).join('')}`;

  const SHOVEL = `<path d="M50 6 V60" stroke="#8C5A32" stroke-width="6"/><path d="M38 6 H62" stroke="#8C5A32" stroke-width="6"/><path d="M34 58 H66 V78 C66 90 58 96 50 98 C42 96 34 90 34 78 Z" fill="#9AA2AA"/>`;
  const CIRCLED = `<rect x="12" y="12" width="76" height="76" rx="4" fill="#FFFFFF"/>${[[30, 34], [56, 34], [30, 62]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#C8CCD0" stroke="none"/>`).join('')}<circle cx="62" cy="62" r="8" fill="#F2C14E" stroke="none"/><ellipse cx="62" cy="62" rx="16" ry="14" fill="none" stroke="#D9473A" stroke-width="3"/><path d="M80 82 L92 70" stroke="#3A3B3C" stroke-width="4"/>`;
  const RINGBELL = `${at(10, 10, 0.8, BELL)}<path d="M14 30 q-8 10 0 20 M8 24 q-12 16 0 32 M86 30 q8 10 0 20 M92 24 q12 16 0 32" stroke="#A39588" stroke-width="2.4" fill="none"/>`;
  const KENG = `<path d="M10 14 H90" stroke="#8C5A32" stroke-width="6"/><path d="M40 14 L36 30 M60 14 L64 30" stroke="#7A6E66" stroke-width="2"/><rect x="26" y="30" width="48" height="16" rx="3" fill="#7A828A"/><path d="M56 88 L72 52" stroke="#8C5A32" stroke-width="5"/><circle cx="73" cy="50" r="5" fill="#5E3A22"/><path d="M20 56 l-8 6 M80 56 l8 6" stroke="#A39588" stroke-width="2.4"/>`;
  const CROWBAR = `<path d="M20 90 L74 20 C78 14 86 14 88 20 C90 26 86 28 82 26" stroke="#5E6670" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M16 94 L24 84" stroke="#D9473A" stroke-width="9"/>`;
  const ROBIN = `<path d="M0 74 C30 70 70 72 100 66" stroke="#8C5A32" stroke-width="5" fill="none"/>${at(10, 8, 0.8, BIRD('#8C8478', '#6E6A68', '<path d="M18 48 C20 62 34 70 46 66 C40 58 30 50 18 48 Z" fill="#E8743B" stroke="none"/>'))}`;
  const SINGROBIN = `${ROBIN}<path d="M72 26 v-12 l8 -3 v12 M86 32 v-10" stroke="#5B8FC9" stroke-width="2.4" fill="none"/><circle cx="70" cy="26" r="3" fill="#5B8FC9" stroke="none"/><circle cx="84" cy="32" r="3" fill="#5B8FC9" stroke="none"/>`;
  const CATROUND = `${at(8, 4, 0.8, CAT)}<ellipse cx="50" cy="82" rx="46" ry="12" fill="none" stroke="#A39588" stroke-width="2.4" stroke-dasharray="5 5"/><path d="M90 88 l6 -6 l-8 -2" stroke="#A39588" stroke-width="2.4" fill="none"/>`;
  const LOOKBACK = `${ground(96)}${KID_FULL('#E86A4F', true).replace(`${eyes(45, 55, 35, 2.2)}`, `${eyes(39, 47, 35, 2.2)}`)}<path d="M66 40 l10 -4 M66 30 l10 -8" stroke="#A39588" stroke-width="2"/>`;
  const BIKEBELL = `${ground(94)}${at(4, 14, 0.9, BIKE)}<path d="M70 26 q6 6 0 12 M76 20 q12 12 0 24" stroke="#A39588" stroke-width="2.4" fill="none"/><circle cx="64" cy="34" r="5" fill="#F2C14E"/>`;
  const MOMCALL = `${ground(96)}${at(-14, 8, 0.84, ADULT('me', 'sing'))}${at(40, 4, 0.9, KID_FULL('#5B8FC9', true).replace(`${eyes(45, 55, 35, 2.2)}`, `${eyes(39, 47, 35, 2.2)}`))}<path d="M40 30 q6 -6 12 0 M38 22 q10 -10 20 0" stroke="#A39588" stroke-width="2" fill="none"/>`;

  const THROAT = `${ground(96)}${KID('#5B8FC9')}<path d="M50 64 C52 66 52 70 50 72" stroke="#D9473A" stroke-width="3" fill="none"/><path d="M76 96 L70 74 L58 68" stroke="${SKIN}" stroke-width="7" fill="none"/>`;
  const MYNA = (extra = '') => `<path d="M0 74 C30 70 70 72 100 66" stroke="#8C5A32" stroke-width="5" fill="none"/>${at(10, 8, 0.8, BIRD('#2E2E34', '#45454E', '<path d="M24 40 C28 44 30 48 26 52" stroke="#F2C14E" stroke-width="4" fill="none"/>'))}${extra}`;
  const MYNANOTES = MYNA(`<path d="M72 26 v-12 l8 -3 v12 M86 32 v-10" stroke="#5B8FC9" stroke-width="2.4" fill="none"/><circle cx="70" cy="26" r="3" fill="#5B8FC9" stroke="none"/><circle cx="84" cy="32" r="3" fill="#5B8FC9" stroke="none"/>`);
  const MYNATALK = MYNA(`<path d="M58 6 H96 V32 H72 L64 40 L66 32 H58 Z" fill="#FFFCF6"/><path d="M64 14 H90 M64 22 H84" stroke="#A39588" stroke-width="2.4"/>`);
  const MYNASOUND = MYNA(`<path d="M66 30 q6 6 0 12 M74 24 q12 12 0 24 M82 18 q18 18 0 36" stroke="#A39588" stroke-width="2.4" fill="none"/>`);
  const RUST = `<path d="M10 94 V20 M90 94 V20 M10 30 H90 M10 84 H90" stroke="#6E6A68" stroke-width="5"/>${[26, 42, 58, 74].map(x => `<path d="M${x} 30 V84" stroke="#6E6A68" stroke-width="4"/>`).join('')}${[[26, 50], [58, 40], [74, 70], [10, 60], [42, 76], [90, 44]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="6" ry="9" fill="#B4553C" opacity=".8" stroke="none"/>`).join('')}`;
  const MEOW = (n = 1) => `${CAT.replace('<path d="M76 74', '<path d="M76 74')}<path d="M10 30 q-6 6 0 12 M4 24 q-12 12 0 24" stroke="#A39588" stroke-width="2.4" fill="none"/>${n > 1 ? '<path d="M18 14 q-6 6 0 12" stroke="#A39588" stroke-width="2.4" fill="none"/>' : ''}`;
  const NOTICE = `${ground(96)}<path d="M30 96 V60 M70 96 V60" stroke="#8C5A32" stroke-width="5"/><rect x="14" y="14" width="72" height="50" rx="3" fill="#C68B59"/><rect x="20" y="20" width="26" height="36" fill="#FFFFFF"/><rect x="54" y="20" width="26" height="30" fill="#FFFCF6"/>${[26, 32, 38, 44].map(y => `<path d="M24 ${y} H42" stroke="#A39588" stroke-width="1.6"/><path d="M58 ${y} H76" stroke="#A39588" stroke-width="1.6"/>`).join('')}<circle cx="33" cy="20" r="2" fill="#D9473A"/><circle cx="67" cy="20" r="2" fill="#D9473A"/>`;
  const PRICETAGS = `${ground(92)}<rect x="8" y="50" width="84" height="6" fill="#C68B59"/>${at(6, 12, 0.36, PEAR())}${at(38, 14, 0.36, BOTTLE)}${at(66, 16, 0.34, BOWL())}${[[18, 62], [50, 62], [80, 62]].map(([x, y]) => `<path d="M${x - 10} ${y} H${x + 6} L${x + 10} ${y + 6} L${x + 6} ${y + 12} H${x - 10} Z" fill="#F2C14E"/><circle cx="${x - 6}" cy="${y + 6}" r="1.6" fill="#3A3B3C" stroke="none"/><path d="M${x - 2} ${y + 6} h8" stroke="#3A3B3C" stroke-width="1.6"/>`).join('')}<path d="M8 92 H92" stroke-width="0"/>`;
  const AUDIENCE = `${ground(96)}<rect x="56" y="40" width="40" height="56" rx="4" fill="#D9473A"/><rect x="62" y="64" width="28" height="10" fill="#F2C14E"/>${at(46, 14, 0.62, ADULT('bo').replace(/#5B8FC9/g, '#F2C14E'))}${CROWN(72, 18, 0.7)}${at(0, 30, 0.66, KID_FULL('#6FAE4F', false, '<path d="M38 56 L48 64 M62 56 L52 64" stroke="#F6D2B8" stroke-width="6"/>'))}`;
  const GRIN = (shirt = '#F2C14E') => `${ground(96)}${KID(shirt).replace('<path d="M45 57 q5 4 10 0" stroke-width="2.4"/>', '<path d="M42 55 C44 63 56 63 58 55 Z" fill="#B4553C"/><path d="M43 56 H57" stroke="#FFFFFF" stroke-width="2"/>')}`;
  const STAINED = `${SHIRT('#FFFFFF')}${[[40, 50, 6], [58, 64, 8], [46, 76, 5], [62, 44, 4]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.8}" fill="#B49A6A" opacity=".75" stroke="none"/>`).join('')}`;
  const KITTEN = `${ground(92)}${at(14, 24, 0.7, CAT.replace(ground(92), ''))}<path d="M14 40 q-6 6 0 12" stroke="#A39588" stroke-width="2.4" fill="none"/>`;
  const TWOCATS = `${ground(92)}${at(-8, 22, 0.72, CAT.replace(ground(92), ''))}${at(40, 30, 0.6, CAT.replace(ground(92), '').replace(/#8C8478/g, '#E8A050'))}<path d="M6 36 q-6 6 0 12 M48 42 q-6 6 0 12" stroke="#A39588" stroke-width="2.4" fill="none"/>`;

  const CLOWN = `${ground(96)}<path d="M26 96 C26 70 36 60 50 60 C64 60 74 70 74 96 Z" fill="#F2C14E"/>${[[38, 72, '#D9473A'], [58, 70, '#5B8FC9'], [46, 86, '#6FAE4F'], [64, 88, '#E58FA0']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}" stroke="none"/>`).join('')}<path d="M38 62 L50 70 L62 62 L50 56 Z" fill="#E58FA0"/><circle cx="50" cy="40" r="17" fill="#FFF6EE"/>${[[32, 34], [30, 44], [68, 34], [70, 44]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#E8743B"/>`).join('')}<path d="M38 26 L50 2 L62 26 Z" fill="#5B8FC9"/><circle cx="50" cy="2" r="4" fill="#F2C14E"/>${eyes(44, 56, 36, 2.2)}<circle cx="50" cy="43" r="5" fill="#D9473A"/><path d="M42 49 q8 6 16 0" stroke="#D9473A" stroke-width="2.4"/>`;
  const SHACK = `${ground(94)}<path d="M14 94 V48 L52 26 L88 50 V94 Z" fill="#B49A6A"/><path d="M8 52 L50 22 L94 54" stroke="#6E5A3A" stroke-width="6" fill="none"/>${[24, 36, 64, 78].map((x, i) => `<path d="M${x} ${50 - i} V94" stroke="#8C6A42" stroke-width="2"/>`).join('')}<rect x="44" y="64" width="16" height="30" fill="#5E3A22"/><path d="M68 60 l12 4 l-2 10 l-12 -4 Z" fill="#E3F0F4"/><path d="M30 34 l8 6 M66 34 l10 4" stroke="#6E5A3A" stroke-width="3"/>`;
  const LANGUR = `<path d="M0 30 C30 34 60 26 100 32" stroke="#8C5A32" stroke-width="6" fill="none"/><path d="M60 70 C76 80 80 94 70 98" stroke="#2E2E34" stroke-width="4" fill="none"/><ellipse cx="50" cy="62" rx="16" ry="20" fill="#2E2E34"/><path d="M40 70 L34 92 M60 70 L66 92" stroke="#F6F2EA" stroke-width="8"/><path d="M38 52 L26 32 M62 52 L72 32" stroke="#2E2E34" stroke-width="7"/><circle cx="50" cy="40" r="13" fill="#2E2E34"/><ellipse cx="50" cy="44" rx="9" ry="8" fill="#F6F2EA"/>${eyes(46, 54, 40, 1.8)}<path d="M47 48 q3 2 6 0" stroke-width="1.6"/>`;
  const REDNOSE = `<circle cx="50" cy="50" r="40" fill="#FFF6EE"/>${eyes(36, 64, 40, 3.4)}<circle cx="50" cy="54" r="12" fill="#D9473A"/><circle cx="46" cy="50" r="3" fill="#FFFFFF" stroke="none"/><path d="M32 70 q18 12 36 0" stroke="#D9473A" stroke-width="3"/>`;
  const HOLEBOARD = `${ground(94)}<rect x="10" y="40" width="80" height="40" rx="2" fill="#D9B45A"/><path d="M14 52 C40 50 60 54 86 50 M14 68 C40 66 60 70 86 66" stroke="#B48A35" stroke-width="1.6"/><circle cx="50" cy="60" r="10" fill="#5E3A22"/><path d="M62 30 L72 14" stroke="#9AA2AA" stroke-width="5"/><rect x="70" y="4" width="10" height="14" rx="2" fill="#F2C14E" transform="rotate(30 75 11)"/>${[40, 56, 64].map(x => `<circle cx="${x}" cy="${88 - (x % 7)}" r="1.6" fill="#B48A35" stroke="none"/>`).join('')}`;
  const BOAST = `${UPNOSE}<path d="M62 74 L70 66" stroke="${SKIN}" stroke-width="6"/>${STAR(86, 30, 7)}`;
  const SWAGGER = `${ground(96)}${KID_FULL('#3F6FA6', true, '<path d="M38 56 L28 64 L38 72 M62 56 L72 64 L62 72" stroke="#F6D2B8" stroke-width="6" fill="none"/>').replace('<path d="M38 56 L28 70 M62 56 L72 66" stroke="#F6D2B8" stroke-width="6"/>', '')}`;
  const SHORTS = `<path d="M20 20 H80 L88 82 H58 L50 44 L42 82 H12 Z" fill="#5B8FC9"/><path d="M20 28 H80" stroke="#3F6FA6" stroke-width="3"/><path d="M50 20 V44" stroke="#3F6FA6" stroke-width="2"/>`;
  const TRAILER = `${ground(90)}<rect x="44" y="34" width="54" height="40" rx="2" fill="#E9E1D3"/><path d="M44 74 H98" stroke-width="3"/><circle cx="64" cy="82" r="7" fill="#3A3B3C"/><circle cx="84" cy="82" r="7" fill="#3A3B3C"/><path d="M36 70 H44" stroke-width="4"/><rect x="2" y="44" width="36" height="30" rx="4" fill="#D9473A"/><rect x="18" y="48" width="14" height="10" rx="2" fill="#DCEFF5"/><circle cx="14" cy="82" r="7" fill="#3A3B3C"/>`;
  const TRAILER2 = TRAILER.replace('#E9E1D3', '#9FC7D8').replace('#D9473A', '#F2C14E');
  const CLOWNMOM = `${ground(96)}${at(-12, 10, 0.86, ADULT('me'))}${at(44, 22, 0.76, CLOWN.replace(ground(96), ''))}`;
  const LANGURFOREST = `${FOREST}${at(20, 20, 0.66, LANGUR)}`;

  Object.assign(T, {
    /* Bài 64 · uây oang uyt */
    'khuấy bột': SV(STIRBOWL),
    'nước khoáng': SV(MINERAL),
    'xe buýt': SV(BUSV),
    'khuấy nước': SV(STIRGLASS),
    'khuấy cháo': SV(LADLEPOT),
    'ngoe nguẩy': SV(WAGDOG),
    'hoàng hậu': SV(QUEEN),
    'áo choàng': SV(CLOAK),
    'khoang tàu': SV(CABIN),
    'huýt sáo': SV(WHISTLEKID),
    'tuýt còi': SV(WHISTLE2),
    'bến xe buýt': SV(BUSSTOP),
    'Hằng ngày, bé Mai đi học bằng xe buýt.': SV(`${BUSV}${at(14, 34, 0.24, KID('#E58FA0'))}`),
    'Bé ngồi ngay ngắn trong khoang xe.': SV(CHAIRROW),
    'Bố uống nước khoáng rồi giúp mẹ khuấy nồi cháo.': SV(`${ground(96)}${at(-14, 8, 0.86, ADULT('bo'))}${at(30, 28, 0.36, MINERAL.replace(ground(94), ''))}${at(50, 40, 0.56, LADLEPOT.replace(ground(94), ''))}`),
    /* Bài 65 · oăng oac oach */
    'con hoẵng': SV(DEERHEAD),
    'áo khoác': SV(JACKET),
    'thu hoạch': SV(HARVEST),
    'dài ngoằng': SV(LONGSNAKE),
    'liến thoắng': SV(CHATTER),
    'loằng ngoằng': SV(TANGLE),
    'rách toạc': SV(TORN),
    'nứt toác': SV(CRACKED),
    'khoác vai': SV(ARMOVER),
    'kế hoạch': SV(PLAN),
    'loạch xoạch': SV(RATTLE),
    'mùa thu hoạch': SV(HARVESTFIELD),
    'Bố tặng Hà chiếc áo khoác mới.': SV(GIFTCOAT),
    'Vườn vải của bà tới mùa thu hoạch.': SV(LYCHEEGRAN),
    'Những cành cây loằng ngoằng, trĩu quả.': SV(LOADEDBRANCH),
    /* Bài 66 · uya uyp uynh uych uyu */
    'đêm khuya': SV(NIGHTLATE),
    'đèn tuýp': SV(TUBELIGHT),
    'phụ huynh': SV(PARENTS),
    'huých vai': SV(NUDGE),
    'khuỷu tay': SV(ELBOW),
    'thức khuya': SV(LATEDESK),
    'khuya rồi': SV(LATECLOCK),
    'đêm đã khuya': SV(SLEEPYTOWN),
    'tuýp kem': SV(TOOTHPASTE),
    'tuýp thuốc': SV(OINTMENT),
    'tuýp màu': SV(PAINTTUBE),
    'huynh đệ': SV(BROTHERS),
    'huynh trưởng': SV(LEADER),
    'huỳnh huỵch': SV(STOMP),
    'ngã uỵch': SV(FALLKID),
    'rơi uỵch': SV(DROPBAG),
    'huých nhẹ': SV(NUDGE.replace('#6FAE4F', '#E58FA0')),
    'khúc khuỷu': SV(SWITCHBACK),
    'khuỷu chân': SV(KNEE),
    'gập khuỷu tay': SV(FLEX),
    'Bé Huy bị ngã đau khuỷu tay.': SV(HURTELBOW),
    'Bố lau chùi chiếc đèn tuýp.': SV(CLEANLIGHT),
    'Đêm đã khuya, mẹ vẫn làm việc.': SV(MOMLATE),
    /* Bài 67 · oong yêm oay */
    'cái xoong': SV(SAUCEPAN),
    'cái yếm': SV(BIB()),
    'lốc xoáy': SV(TORNADO),
    'boong tàu': SV(DECK),
    'cải xoong': SV(WATERCRESS),
    'xoong nồi': SV(POTS),
    'âu yếm': SV(HUGMOM),
    'yếm đỏ': SV(BIB('#D9473A')),
    'yếm dãi': SV(BABYBIB),
    'loay hoay': SV(FIDDLE),
    'xoay tròn': SV(SPINTOP),
    'hí hoáy': SV(SCRIBBLE),
    'Bé thích xoay chong chóng.': SV(PINKID),
    'Bà âu yếm ôm bé vào lòng.': SV(`${GRANDMA}<path d="M84 18 c-4 -6 -12 -2 -8 4 l8 8 l8 -8 c4 -6 -4 -10 -8 -4 Z" fill="#E86A4F"/>`),
    'Mẹ nấu canh cải xoong.': SV(COOKCRESS),
    /* Bài 68 · eng oanh */
    'cái xẻng': SV(SHOVEL),
    'khoanh tròn': SV(CIRCLED),
    'leng keng': SV(RINGBELL),
    'cái kẻng': SV(KENG),
    'xà beng': SV(CROWBAR),
    'chim oanh': SV(ROBIN),
    'loanh quanh': SV(CATROUND),
    'ngoảnh lại': SV(LOOKBACK),
    'Chim oanh hót rất hay.': SV(SINGROBIN),
    'Chuông xe kêu leng keng.': SV(BIKEBELL),
    'Nghe mẹ gọi, bé ngoảnh lại.': SV(MOMCALL),
    /* Bài 69 · yêt yêng oen oao */
    'yết hầu': SV(THROAT),
    'chim yểng': SV(MYNA()),
    'hoen gỉ': SV(RUST),
    'mèo ngoao': SV(MEOW(1)),
    'yết thị': SV(NOTICE),
    'niêm yết': SV(PRICETAGS),
    'yết kiến': SV(AUDIENCE),
    'yểng hót': SV(MYNANOTES),
    'yểng nói': SV(MYNATALK),
    'tiếng yểng': SV(MYNASOUND),
    'nhoẻn cười': SV(GRIN('#F2C14E')),
    'nhoẻn miệng': SV(GRIN('#E58FA0')),
    'hoen ố': SV(STAINED),
    'ngoao ngoao': SV(MEOW(2)),
    'kêu ngoao': SV(MEOW(1).replace(/#8C8478/g, '#E8A050')),
    'mèo con ngoao': SV(KITTEN),
    'Mèo kêu ngoao ngoao.': SV(TWOCATS),
    'Chim yểng biết nói.': SV(MYNATALK),
    'Bé nhoẻn miệng cười.': SV(GRIN('#6FAE4F')),
    /* Bài 70 · oet uênh ooc */
    'lòe loẹt': SV(CLOWN),
    'tuềnh toàng': SV(SHACK),
    'con voọc': SV(LANGUR),
    'đỏ choét': SV(REDNOSE),
    'toe toét': SV(GRIN('#5B8FC9')),
    'khoét lỗ': SV(HOLEBOARD),
    'huênh hoang': SV(BOAST),
    'khuệnh khoạng': SV(SWAGGER),
    'nhà tuềnh toàng': SV(SHACK.replace('#B49A6A', '#A8906A')),
    'quần soóc': SV(SHORTS),
    'rơ moóc': SV(TRAILER),
    'xe moóc': SV(TRAILER2),
    'Chú hề mặc áo lòe loẹt.': SV(CLOWNMOM),
    'Mũi chú hề đỏ choét.': SV(REDNOSE),
    'Con voọc sống trong rừng.': SV(LANGURFOREST)
  });
  /* --- Bài 71–80 · tập đọc --- */
  const D_GRANNYKID = `${ground(96)}${at(-6, 6, 0.92, ADULT('ba'))}${at(46, 30, 0.7, KID_FULL('#F2C14E', true))}<path d="M60 66 C64 62 70 64 74 70" stroke="${SKIN}" stroke-width="5"/>`;
  const D_DADWORK = `${ground(96)}${at(4, 0, 1, ADULT('bo'))}<rect x="62" y="68" width="30" height="22" rx="3" fill="#8C5A32"/><path d="M70 68 C70 60 84 60 84 68" stroke="#5E3A22" stroke-width="3" fill="none"/><path d="M62 76 H92" stroke="#5E3A22" stroke-width="2"/><path d="M56 70 L66 74" stroke="${SKIN}" stroke-width="6"/>`;
  const D_GIRLREAD = `${ground(96)}${KID_FULL('#E58FA0', false, '<path d="M35 30 C30 40 30 52 36 56 M65 30 C70 40 70 52 64 56" stroke="#3A3B3C" stroke-width="4"/>').replace('<path d="M38 56 L32 72 M62 56 L68 72" stroke="#F6D2B8" stroke-width="6"/>', '<path d="M38 56 L40 66 M62 56 L60 66" stroke="#F6D2B8" stroke-width="6"/>')}<path d="M30 58 L50 62 L70 58 V76 L50 80 L30 76 Z" fill="#FFFCF6"/><path d="M50 62 V80" stroke="#A39588" stroke-width="1.6"/><path d="M35 64 H46 M35 69 H46 M54 64 H65 M54 69 H65" stroke="#A39588" stroke-width="1.4"/>`;
  const D_KIDBALL = `${ground(96)}${at(10, 16, 0.84, KID_FULL('#6FAE4F'))}<circle cx="80" cy="84" r="11" fill="#E86A4F"/><path d="M69 84 H91 M80 73 C74 80 74 88 80 95" stroke="#FFFCF6" stroke-width="2.4"/>`;
  // Con cáo (nhìn sang trái)
  const D_FOX = `<path d="M74 60 C88 62 96 52 94 38 C90 50 84 54 74 54 Z" fill="#E8743B"/><path d="M94 38 C94 45 91 49 86 52 C90 46 92 42 94 38 Z" fill="#FFFCF6"/>` +
    `<path d="M38 70 V90 M46 72 V90 M62 72 V90 M70 70 V90" stroke="#5A3A22" stroke-width="5"/><ellipse cx="54" cy="62" rx="22" ry="12" fill="#E8743B"/>` +
    `<path d="M22 37 L25 25 L32 35 Z M32 35 L39 26 L40 38 Z" fill="#E8743B"/><path d="M40 42 C40 32 24 30 20 40 L8 50 C12 54 20 57 28 57 C36 57 40 50 40 42 Z" fill="#E8743B"/>` +
    `<path d="M8 50 C12 54 20 57 28 57 C22 53 16 51 8 50 Z" fill="#FFFCF6"/><circle cx="9" cy="50" r="2.2" fill="#3A3B3C" stroke="none"/><circle cx="27" cy="42" r="2.3" fill="#3A3B3C" stroke="none"/>`;
  const D_VINEYARD = `<path d="M0 0 H100 V100 H0 Z" fill="#EAF3E0" stroke="none"/>${ground(94)}<path d="M8 94 V22 M50 94 V22 M92 94 V22 M4 22 H96" stroke="#8C5A32" stroke-width="4"/>${[10, 30, 50, 70].map((x, i) => LEAF(x, 18, i * 40 + 10, '#6FAE4F')).join('')}${[[20, 26], [62, 28], [78, 24]].map(([x, y]) => at(x - 10, y, 0.36, GRAPES())).join('')}`;
  const D_FOXJUMP = `<path d="M0 0 H100 V100 H0 Z" fill="#EAF3E0" stroke="none"/><path d="M4 10 H96" stroke="#8C5A32" stroke-width="4"/>${at(52, 6, 0.4, GRAPES())}${LEAF(20, 10, 30, '#6FAE4F')}${ground(96)}<g transform="translate(12 10) rotate(20 50 60) scale(.78)">${D_FOX}</g><path d="M30 92 q6 -4 12 0 M46 94 q6 -4 12 0" stroke="#A39588" stroke-width="2"/>`;
  const D_FOXGO = `<path d="M0 0 H100 V100 H0 Z" fill="#EAF3E0" stroke="none"/><path d="M4 10 H70" stroke="#8C5A32" stroke-width="4"/>${at(8, 6, 0.34, GRAPES())}${ground(96)}<g transform="translate(100 16) scale(-.84 .84)">${D_FOX.replace('<circle cx="27" cy="42" r="2.3" fill="#3A3B3C" stroke="none"/>', '<path d="M24 41 q3 2 6 0" stroke-width="2.2"/>')}</g><path d="M4 62 h10 M2 72 h14 M6 82 h8" stroke="#A39588" stroke-width="2.4"/>`;
  // Con quạ, cái lọ, viên sỏi
  const D_CROWBIG = `${ground(94)}${at(0, 8, 1, CROW)}`;
  const D_PEBBLES = `${ground(90)}${[[24, 76, 12, 8, '#A39588'], [50, 80, 14, 9, '#C8C3BC'], [76, 76, 11, 8, '#8C8478'], [36, 62, 10, 7, '#BFB6AA'], [62, 62, 11, 7, '#A39588'], [50, 46, 9, 6, '#C8C3BC']].map(([x, y, rx, ry, c]) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}"/><path d="M${x - rx / 2} ${y - ry / 3} q${rx / 3} -2 ${rx / 2} 0" stroke="#FFFFFF" stroke-width="1.6"/>`).join('')}`;
  const D_JARWATER = (lv) => JAR('#F4F8FA', `<path d="M${lv > 60 ? 23 : 24} ${lv} H${lv > 60 ? 77 : 76} C78 ${lv + 6} 78 70 78 66 C78 84 70 90 50 90 C30 90 22 84 22 66 C22 70 22 ${lv + 6} 23 ${lv} Z" fill="#7FB2D9" stroke="none"/><path d="M22 ${lv} H78" stroke="#4E7EA8" stroke-width="2"/>`);
  const D_WATERLEVEL = `${D_JARWATER(70)}<path d="M88 76 V40 M82 48 L88 38 L94 48" stroke="#4E8A3A" stroke-width="3.4"/><path d="M84 70 H92" stroke="#4E7EA8" stroke-width="2.4"/>${[[38, 82], [52, 84], [62, 80]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="5" ry="3.4" fill="#A39588"/>`).join('')}`;
  const D_CROWDRINK = `${ground(94)}${at(44, 30, 0.62, D_JARWATER(34))}<g transform="translate(2 8) scale(.78) rotate(26 60 40)">${CROW}</g>${at(4, 78, 0.5, `<ellipse cx="10" cy="10" rx="9" ry="6" fill="#A39588"/><ellipse cx="28" cy="12" rx="8" ry="5" fill="#C8C3BC"/>`)}`;
  // Hải quân, biển đảo, hải đăng
  const D_SAILOR = `${ground(96)}${ADULT('bo').replace('#5B8FC9', '#FFFFFF')}<path d="M30 60 L42 74 L54 60" fill="#3E5E8C"/><path d="M42 64 V96" stroke="#3E5E8C" stroke-width="1.6"/><path d="M24 22 C24 12 60 12 60 22 Z" fill="#FFFFFF"/><rect x="22" y="20" width="40" height="6" rx="2" fill="#2E4A72"/><circle cx="42" cy="17" r="2.6" fill="#F2C14E" stroke="none"/>`;
  const D_ISLAND = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/><path d="M0 62 H100 V100 H0 Z" fill="#5B8FC9" stroke="none"/><path d="M18 64 C26 44 74 44 82 64 Z" fill="#E9C98A"/><path d="M50 50 C50 36 46 26 40 20" stroke="#8C5A32" stroke-width="4" fill="none"/>${LEAF(40, 20, 200, '#6FAE4F')}${LEAF(40, 20, -30, '#6FAE4F')}${LEAF(40, 20, 100, '#7DB25A')}<path d="M8 76 q8 -4 16 0 M40 82 q8 -4 16 0 M72 74 q8 -4 16 0" stroke="#FFFFFF" stroke-width="2"/>${at(70, 6, 0.2, SUN)}`;
  const D_LIGHTHOUSE = `<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/><path d="M0 80 H100 V100 H0 Z" fill="#5B8FC9" stroke="none"/><path d="M28 84 C34 74 66 74 72 84 Z" fill="#A39588"/><path d="M40 78 L44 30 H56 L60 78 Z" fill="#FFFFFF"/><path d="M41.6 62 H58.4 L57.4 50 H42.6 Z M43.4 40 H56.6" fill="#D9473A"/><rect x="42" y="20" width="16" height="10" fill="#F2C14E"/><path d="M40 20 L50 12 L60 20 Z" fill="#D9473A"/><path d="M58 24 L90 16 V32 Z M42 24 L10 16 V32 Z" fill="#F7E3A0" stroke="none" opacity=".8"/>`;
  // Lớn lên, xếp sách, giúp em, đến trường
  const D_GROWUP = `${ground(96)}<rect x="66" y="8" width="16" height="88" fill="#F6E3BC"/>${[16, 28, 40, 52, 64, 76, 88].map(y => `<path d="M66 ${y} h${y % 24 === 16 ? 10 : 6}" stroke-width="2"/>`).join('')}${at(4, 2, 1, KID_FULL('#5B8FC9'))}<path d="M50 14 H72" stroke="#D9473A" stroke-width="3"/><path d="M90 50 V20 M86 26 L90 18 L94 26" stroke="#4E8A3A" stroke-width="3"/>`;
  const D_STACKBOOKS = `${ground(96)}${at(-14, 4, 0.92, KID_FULL('#F2C14E'))}<rect x="54" y="62" width="38" height="34" fill="#C68B59"/><rect x="58" y="78" width="30" height="8" rx="2" fill="#5B8FC9"/><rect x="60" y="70" width="28" height="8" rx="2" fill="#E86A4F"/><rect x="56" y="86" width="32" height="8" rx="2" fill="#6FAE4F"/><rect x="58" y="44" width="28" height="8" rx="2" fill="#E58FA0"/><path d="M44 56 L60 50" stroke="${SKIN}" stroke-width="6"/>`;
  const D_HELPSIB = `${ground(96)}${at(-12, 2, 0.98, KID_FULL('#E86A4F'))}${at(46, 34, 0.62, KID_FULL('#F2C14E'))}<path d="M70 94 h12 C84 94 86 90 82 88 H72 Z" fill="#D9473A"/><path d="M36 60 L66 88" stroke="${SKIN}" stroke-width="6"/>`;
  const D_TOSCHOOL = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${at(48, 14, 0.5, SCHOOL.replace('<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>', ''))}${ground(96)}${at(-8, 6, 0.92, KID_FULL('#E86A4F', true, `<path d="M36 52 H30 V72 H38" fill="#5B8FC9"/>`))}`;
  // Mướp: hạt, dây leo, hoa
  const D_SEEDS = `${ground(92)}<path d="M6 92 C30 82 70 82 94 92" fill="#B48A5A"/>${[[30, 50, 20], [50, 42, -10], [70, 52, 30], [40, 66, -30], [62, 68, 10]].map(([x, y, a]) => `<ellipse cx="${x}" cy="${y}" rx="8" ry="4.4" transform="rotate(${a} ${x} ${y})" fill="#3A3B3C"/><path d="M${x - 4} ${y - 1} q4 -2 8 0" stroke="#7A7470" stroke-width="1.2" transform="rotate(${a} ${x} ${y})"/>`).join('')}`;
  const D_VINE = `${ground(96)}<path d="M50 96 V8" stroke="#B48A5A" stroke-width="5"/><path d="M50 94 C30 80 70 66 50 54 C34 44 66 32 50 18" stroke="#6FAE4F" stroke-width="4" fill="none"/>${[[60, 70, -20], [38, 50, 200], [62, 36, -30]].map(([x, y, a]) => LEAF(x, y, a, '#7DB25A')).join('')}<path d="M54 60 c8 -2 10 -10 4 -12 c-4 0 -4 6 0 6" stroke="#6FAE4F" stroke-width="2" fill="none"/><path d="M46 28 c-8 -2 -10 -10 -4 -12 c4 0 4 6 0 6" stroke="#6FAE4F" stroke-width="2" fill="none"/>`;
  const D_LUFFAFLOWER = `<path d="M0 0 H100 V100 H0 Z" fill="#EAF3E0" stroke="none"/><path d="M50 98 C46 80 54 70 50 60" stroke="#6FAE4F" stroke-width="4" fill="none"/>${LEAF(50, 82, 200, '#6FAE4F')}${LEAF(52, 74, -20, '#7DB25A')}${[0, 72, 144, 216, 288].map(a => `<path d="M50 40 C40 30 40 14 50 12 C60 14 60 30 50 40 Z" transform="rotate(${a} 50 40)" fill="#F7D046"/>`).join('')}<circle cx="50" cy="40" r="6" fill="#E8A23A"/>`;
  // Hoa giấy, lá khô
  const D_BOUG = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">${[0, 120, 240].map(a => `<path d="M0 0 C-9 -6 -9 -16 0 -18 C9 -16 9 -6 0 0 Z" transform="rotate(${a})" fill="#D94A8C"/>`).join('')}<circle r="2.4" fill="#F7E3A0"/></g>`;
  const D_PAPERFLOWER = `<path d="M0 0 H100 V100 H0 Z" fill="#F7EEF2" stroke="none"/><path d="M50 98 C48 76 30 62 20 40 M50 80 C60 60 76 50 84 30" stroke="#6B4A2E" stroke-width="4" fill="none"/>${[[20, 40], [34, 26], [52, 34], [70, 22], [84, 32], [62, 50], [30, 56], [76, 48], [48, 18]].map(([x, y], i) => D_BOUG(x, y, i % 2 ? 0.8 : 1)).join('')}${LEAF(44, 66, 160, '#6FAE4F')}${LEAF(60, 70, -20, '#6FAE4F')}`;
  const D_DRYLEAVES = `${ground(92)}${[[14, 82, -10], [40, 78, 20], [62, 84, -30], [30, 64, 40], [56, 62, -5]].map(([x, y, a], i) => LEAF(x, y, a, ['#C9973F', '#B47846', '#D9B45A'][i % 3])).join('')}`;
  // Cô giáo, nét chữ, gấp giấy, vẽ tranh
  const D_TEACHER = `${ground(96)}${at(8, 0, 1, ADULT('co'))}<rect x="64" y="58" width="28" height="36" rx="3" fill="#5B8FC9"/><path d="M70 66 H86 M70 74 H86 M70 82 H80" stroke="#FFFCF6" stroke-width="2.4"/><path d="M60 72 L68 74" stroke="${SKIN}" stroke-width="6"/>`;
  const D_HANDWRITE = `<rect x="6" y="14" width="88" height="72" rx="4" fill="#FFFFFF"/>${[30, 46, 62, 78].map(y => `<path d="M6 ${y} H94" stroke="#BFD8EC" stroke-width="1.4"/>`).join('')}<path d="M14 46 c4 -14 10 -14 10 0 c0 6 4 6 6 0 c2 -8 8 -8 8 0 v4 c4 -10 10 -10 10 0 c2 -14 8 -14 10 -2 c2 6 6 6 8 0" stroke="#2A4A8C" stroke-width="2.6" fill="none"/><path d="M14 62 c4 -10 10 -10 10 0 c2 6 6 6 8 0" stroke="#2A4A8C" stroke-width="2.6" fill="none" stroke-dasharray="1 4"/>${at(50, 36, 0.6, PENCIL)}`;
  const D_ORIGAMI = `${ground(92)}<path d="M50 30 L30 54 L50 60 Z" fill="#E86A4F"/><path d="M50 30 L70 54 L50 60 Z" fill="#D9573F"/><path d="M30 54 L22 38 L42 44 Z" fill="#F28F6A"/><path d="M70 54 L78 38 L58 44 Z" fill="#F28F6A"/><path d="M50 60 V92" stroke="#6FAE4F" stroke-width="4"/>${LEAF(50, 80, -30, '#6FAE4F')}<path d="M14 92 L30 76 L40 92 Z" fill="#F7D046"/><path d="M14 92 L30 76" stroke="#C9A040" stroke-width="1.4"/>`;
  const D_EASEL = `${ground(96)}<path d="M30 96 L44 20 M70 96 L56 20 M50 20 V96" stroke="#8C5A32" stroke-width="4"/><rect x="22" y="22" width="56" height="44" fill="#FFFFFF"/>${at(26, 26, 0.36, SUN.replace('<path d="M0 0 H100 V100 H0 Z" fill="#DCEFF5" stroke="none"/>', ''))}<path d="M24 64 C36 48 46 56 54 48 C62 42 70 50 76 46 V64 Z" fill="#7DB25A"/><path d="M18 70 H82" stroke="#8C5A32" stroke-width="4"/><circle cx="86" cy="80" r="5" fill="#E86A4F"/><circle cx="78" cy="88" r="5" fill="#5B8FC9"/><circle cx="90" cy="90" r="5" fill="#F2C14E"/>`;
  // Trường lớp
  const D_SCHOOLGATE = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${at(20, 4, 0.6, SCHOOL.replace('<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>', ''))}${ground(96)}<rect x="4" y="34" width="12" height="62" fill="#C8C3BC"/><rect x="84" y="34" width="12" height="62" fill="#C8C3BC"/><path d="M10 30 C30 18 70 18 90 30" stroke="#3E6B4A" stroke-width="6" fill="none"/><path d="M16 70 H84" stroke="#8C5A32" stroke-width="3"/>${[24, 34, 44, 56, 66, 76].map(x => `<path d="M${x} 70 V96" stroke="#8C5A32" stroke-width="2"/>`).join('')}`;
  const D_SCHOOLYARD = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/><path d="M0 60 H100 V100 H0 Z" fill="#E6D8BC" stroke="none"/>${at(-14, -6, 0.62, TREE)}${at(60, -6, 0.62, TREE)}${[['#E86A4F', 10, 44], ['#5B8FC9', 38, 50], ['#F2C14E', 64, 44]].map(([c, x, y]) => at(x, y, 0.5, KID_FULL(c, true))).join('')}`;
  const D_DRUM = `${ground(94)}<path d="M18 84 L26 94 M82 84 L74 94" stroke="#8C5A32" stroke-width="4"/><path d="M14 36 V76 C14 88 86 88 86 76 V36 Z" fill="#C8443A"/><ellipse cx="50" cy="36" rx="36" ry="12" fill="#F6E3BC"/><path d="M14 46 C30 54 70 54 86 46 M14 68 C30 76 70 76 86 68" stroke="#8C4A2E" stroke-width="2.6" fill="none"/>${[24, 38, 50, 62, 76].map(x => `<circle cx="${x}" cy="${x === 50 ? 53 : 51}" r="1.8" fill="#F2C14E" stroke="none"/>`).join('')}<path d="M62 6 L52 30" stroke="#B47846" stroke-width="4"/><circle cx="51" cy="31" r="4" fill="#8C5A32"/>`;
  const D_FRIENDS = `${ground(96)}${at(-14, 4, 0.92, KID_FULL('#E86A4F'))}${at(26, 4, 0.92, KID_FULL('#6FAE4F', false, '<path d="M35 30 C30 40 30 50 36 54 M65 30 C70 40 70 50 64 54" stroke="#3A3B3C" stroke-width="4"/>'))}<path d="M44 60 C48 64 52 64 56 60" stroke="${SKIN}" stroke-width="6"/>`;
  // Quê nhà
  const D_SWEEPYARD = `<path d="M0 0 H100 V100 H0 Z" fill="#F4ECDD" stroke="none"/><path d="M0 80 H100 V100 H0 Z" fill="#D9C7A4" stroke="none"/>${at(-8, 4, 0.86, ADULT('ba'))}<g transform="translate(30 20) scale(.66) rotate(-12 50 50)">${BROOM}</g>${[[78, 92], [88, 88], [70, 96]].map(([x, y], i) => LEAF(x, y, i * 50, '#C9973F').replace('scale', 'scale')).join('')}`;
  const D_ARECA = `<path d="M0 0 H100 V100 H0 Z" fill="#E3F0F4" stroke="none"/>${ground(96)}${[18, 50, 82].map(x => `<path d="M${x} 96 V26" stroke="#9C8A6A" stroke-width="5"/>${[0, 50, 130, 180, 240, 300].map(a => `<path d="M${x} 26 C${x + 8} 18 ${x + 18} 18 ${x + 22} 24" transform="rotate(${a} ${x} 26)" stroke="#5E9A3A" stroke-width="3.4" fill="none"/>`).join('')}<circle cx="${x - 3}" cy="32" r="3" fill="#F2B134"/><circle cx="${x + 3}" cy="33" r="3" fill="#E8743B"/>`).join('')}`;
  const D_MEALTRAY = `${ground(94)}<ellipse cx="50" cy="66" rx="44" ry="18" fill="#C68B59"/><ellipse cx="50" cy="62" rx="40" ry="14" fill="#E0B07A"/>${at(8, 34, 0.34, RICEBOWL)}${at(56, 34, 0.34, RICEBOWL)}<ellipse cx="50" cy="60" rx="12" ry="6" fill="#FFFFFF"/><path d="M42 58 C46 54 54 54 58 58" stroke="#6FAE4F" stroke-width="3"/><ellipse cx="34" cy="70" rx="7" ry="4" fill="#FFFFFF"/><ellipse cx="66" cy="70" rx="7" ry="4" fill="#FFFFFF"/>`;
  Object.assign(T, {
    /* Bài 71 · Gia đình của em */
    'bà đón cháu': SV(D_GRANNYKID),
    'bố đi làm': SV(D_DADWORK),
    'chị đọc sách': SV(D_GIRLREAD),
    'em chơi ngoan': SV(D_KIDBALL),
    /* Bài 72 · Con cáo và chùm nho */
    'con cáo': SV(`${ground(92)}${D_FOX}`),
    'vườn nho': SV(D_VINEYARD),
    'cáo nhảy': SV(D_FOXJUMP),
    'cáo bỏ đi': SV(D_FOXGO),
    /* Bài 73 · Con quạ khôn ngoan */
    'con quạ': SV(D_CROWBIG),
    'viên sỏi': SV(D_PEBBLES),
    'mực nước': SV(D_WATERLEVEL),
    'quạ uống nước': SV(D_CROWDRINK),
    /* Bài 74 · Quà của bố */
    'hải quân': SV(D_SAILOR),
    'biển đảo': SV(D_ISLAND),
    'hải đăng': SV(D_LIGHTHOUSE),
    /* Bài 75 · Em lớn lên rồi */
    'lớn lên': SV(D_GROWUP),
    'xếp sách': SV(D_STACKBOOKS),
    'giúp em': SV(D_HELPSIB),
    'đến trường': SV(D_TOSCHOOL),
    /* Bài 76 · Giàn mướp */
    'hạt mướp': SV(D_SEEDS),
    'dây leo': SV(D_VINE),
    'hoa mướp': SV(D_LUFFAFLOWER),
    /* Bài 77 · Hoa giấy */
    'hoa giấy': SV(D_PAPERFLOWER),
    'lá khô': SV(D_DRYLEAVES),
    /* Bài 78 · Bàn tay cô giáo */
    'cô giáo': SV(D_TEACHER),
    'nét chữ': SV(D_HANDWRITE),
    'gấp giấy': SV(D_ORIGAMI),
    'vẽ tranh': SV(D_EASEL),
    /* Bài 79 · Em về ngôi trường em */
    'cổng trường': SV(D_SCHOOLGATE),
    'sân trường': SV(D_SCHOOLYARD),
    'cái trống': SV(D_DRUM),
    'bạn bè': SV(D_FRIENDS),
    /* Bài 80 · Về quê – Ngôi nhà của bà */
    'quét sân': SV(D_SWEEPYARD),
    'hàng cau': SV(D_ARECA),
    'mâm cơm': SV(D_MEALTRAY)
  });
  return T;
})();
