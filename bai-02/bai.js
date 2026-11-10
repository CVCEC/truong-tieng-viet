/* Bài 2 — phần riêng của bài: dữ liệu, lời thoại, tranh, trò chơi.
   Phần chung (giao diện, giọng Trâu Con, kéo thả, chuẩn chữ) nằm trong chung/. */
/* =====================================================================
   DỮ LIỆU BÀI HỌC — có thể sửa trực tiếp
   ===================================================================== */
// Thẻ chữ – tranh (theo slide), chia 4 nhóm như slide
const CARD_WORD = { ch:'chó', gh:'ghế', gi:'gió', kh:'khế', ng:'ngô', ngh:'nghệ', nh:'nhà', ph:'phở', qu:'quả', th:'thỏ', tr:'trống' };
const CARD_GROUPS = [['ch', 'gh', 'gi'], ['kh', 'ng', 'ngh'], ['nh', 'ph', 'qu'], ['th', 'tr']];
// Từ miền Nam: Trâu Con nhắc thêm khi đọc thẻ
const SOUTH_NOTE = { 'ngô': { clip: 'nam-bap', text: 'miền Nam: bắp' }, 'quả': { clip: 'nam-trai', text: 'miền Nam: trái' } };
// Tranh của từng tiếng
const WORD_PIC = { 'chó':'dog', 'ghế':'chair', 'gió':'wind', 'giỏ':'basket', 'khế':'starfruit', 'ngô':'corn', 'nghệ':'turmeric', 'nhà':'house', 'phở':'pho', 'quả':'fruits', 'thỏ':'rabbit', 'trống':'drum', 'tre':'bamboo', 'gà':'hen', 'gỗ':'wood', 'ghẹ':'crab', 'ngủ':'sleep', 'nghé':'calf', 'chữ':'letters' };
// Cụm từ (đã thay các cụm có vần chưa học) và tranh; PHRASE_TRAP là tranh "gần giống" để các bạn phải đọc kỹ chữ thứ hai
const PHRASE_PIC = { 'chó nhỏ':'dogSmall', 'ghế gỗ':'chair', 'giỏ quả':'fruitBasket', 'nhà bà':'grandmaHouse', 'phở bò':'pho', 'trống đỏ':'drum', 'thỏ bé':'rabbitSmall', 'ngô to':'corn', 'quả khế':'starfruit' };
const PHRASE_TRAP = { 'chó nhỏ':'dogBig', 'thỏ bé':'rabbitBig', 'giỏ quả':'basket' };
// Trò 1: thơ "Lên Sáu"
const POEM = ['Sách quốc ngữ,', 'Chữ nước ta.', 'Con cái nhà,', 'Đều phải học.', 'Miệng thì đọc,', 'Tai thì nghe.', 'Chớ ngủ nhè,', 'Chớ láu táu.', 'Con lên sáu,', 'Đang vỡ lòng,', 'Học cho thông,', 'Thầy khỏi mắng.'];
const POEM_GOOD = [{ line: 4, good: 'readAloud', bad: 'hushMouth' }, { line: 5, good: 'listen', bad: 'coverEars' }, { line: 6, good: 'awake', bad: 'sleep' }, { line: 7, good: 'neat', bad: 'messy' }];
// Trò 2: nguyên âm và các chữ dễ nhầm đi kèm
const VOWEL_SETS = { 'a':['a','ă','â'], 'ă':['a','ă','â'], 'â':['a','ă','â'], 'e':['e','ê','i'], 'ê':['e','ê','i'], 'o':['o','ô','ơ'], 'ô':['o','ô','ơ'], 'ơ':['o','ô','ơ'], 'u':['u','ư','o'], 'ư':['u','ư','ơ'] };
// Trò 3: ghép chữ thành phụ âm ghép
const BUILD_ROUNDS = [['ch', 'kh', 'nh', 'ph', 'th', 'gh'], ['tr', 'qu', 'gi', 'ng', 'ngh']];
const BUILD_WORD = { ch:'chó', kh:'khế', nh:'nhà', ph:'phở', th:'thỏ', gh:'ghế', tr:'tre', qu:'quả', gi:'giỏ', ng:'ngô', ngh:'nghệ' };
const EXTRA_LETTERS = ['b', 'c', 'd', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 't', 'u', 'i'];
// Trò 4: các cặp đọc giống nhau, không đặt làm lựa chọn sai của nhau
const SOUND_ALIKE = { ch:['tr'], tr:['ch'], ng:['ngh'], ngh:['ng'], gh:['g'], gi:['d'] };
const HOUSE_WORDS = ['chó', 'nhà', 'phở', 'chữ', 'ngô', 'nghệ']; // đủ 6 thanh
const DK_NAME = { g: 's:g-don', gh: 'd:gh', ng: 's:ng-don', ngh: 'd:ngh' };
const DK_ITEMS = [{ w: 'gà' }, { w: 'gỗ' }, { w: 'ghế' }, { w: 'ghẹ' }, { w: 'ngô' }, { w: 'ngủ' }, { w: 'nghệ' }, { w: 'nghé' }];
// Trò 5
const MATCH_BOARDS = [['ch', 'nh', 'kh', 'tr', 'ph'], ['gh', 'gi', 'ng', 'ngh', 'qu', 'th']];
const READ_WORDS = ['chó', 'ghế', 'gió', 'giỏ', 'khế', 'ngô', 'nghệ', 'nhà', 'phở', 'quả', 'thỏ', 'trống', 'tre'];
// Trò 6
const SAY_THIS = [['dog', 'Đây là con chó.'], ['chair', 'Đây là cái ghế.'], ['basket', 'Đây là cái giỏ.'], ['starfruit', 'Đây là quả khế.'], ['corn', 'Đây là bắp ngô.'], ['house', 'Đây là ngôi nhà.'], ['pho', 'Đây là bát phở.'], ['rabbit', 'Đây là con thỏ.'], ['drum', 'Đây là cái trống.'], ['turmeric', 'Đây là củ nghệ.']];
const PAINT_ITEMS = [{ pic: 'rabbit', color: 'trang', say: 'Con thỏ màu trắng.' }, { pic: 'drum', color: 'do', say: 'Cái trống màu đỏ.' }, { pic: 'corn', color: 'vang', say: 'Bắp ngô màu vàng.' }, { pic: 'orange', color: 'cam', say: 'Quả cam màu cam.' }, { pic: 'bamboo', color: 'xanh', say: 'Cây tre màu xanh.' }];
const COLOR_NAME = { do: 'đỏ', vang: 'vàng', trang: 'trắng', cam: 'cam', xanh: 'xanh' };

/* Lời thoại của Trâu Con: luôn xưng "mình", gọi "các bạn" */
/* Lời thoại riêng của bài (lời thoại chung nằm trong chung/dong-co.js) */
Object.assign(PHRASES, {
  'welcome': 'Chào các bạn! Mình là Trâu Con. Hôm nay mình cùng các bạn học Bài 2: phụ âm ghép nhé!',
  'nam-bap': 'Miền Nam gọi là bắp.',
  'nam-trai': 'Miền Nam gọi là trái.',
  'g1-intro': 'Các bạn ơi, mình cùng ôn bài thơ Lên Sáu nhé! Mình đọc một câu, các bạn đọc câu tiếp theo. Đọc xong, các bạn bấm nút Đọc xong nhé.',
  'g1-title': 'Lên Sáu. Thơ Tản Đà.',
  'g1-you': 'Đến lượt các bạn đọc!',
  'g1-good': 'Bạn nào làm đúng lời thơ? Các bạn nghe câu thơ, rồi chạm vào bức tranh đúng nhé!',
  'g2-intro': 'Các bạn nghe mình đọc, rồi chạm vào nguyên âm đúng nhé!',
  'g3-cards': 'Phụ âm ghép được ghép từ hai hoặc ba chữ cái. Các bạn chạm vào từng thẻ để nghe mình đọc nhé!',
  'g3-group': 'Các bạn nghe hết nhóm này rồi. Mình sang nhóm tiếp theo nhé!',
  'g3-build': 'Các bạn kéo chữ cái vào ô trống, theo thứ tự từ trái sang phải nhé!',
  'g3-make': 'Các bạn ghép phụ âm',
  'g3-in': 'trong tiếng',
  'g3-place': 'Chữ này đứng ở ô khác cơ. Thử lại nhé!',
  'g3-notin': 'Phụ âm ghép này không có chữ',
  'g3-ngh': 'Ngờ kép có ba chữ cái: nờ, gờ và hờ.',
  'g4-listen': 'Các bạn nghe tiếng, rồi chạm vào phụ âm ghép đứng đầu tiếng nhé!',
  'house-intro': 'Phụ âm ghép có hai, ba chữ cái, nhưng chỉ ở chung một phòng: phòng âm đầu. Các bạn đưa từng chữ vào đúng phòng nhé!',
  'house-word': 'Mình cùng xây nhà cho tiếng',
  'house-tone': 'Tiếng này mang thanh gì? Các bạn đặt dấu thanh lên mái nhà nhé!',
  'house-main-v': 'Phòng âm chính dành cho nguyên âm các bạn ạ.',
  'house-onset': 'Chữ này thuộc phụ âm ghép, ở phòng âm đầu các bạn ạ.',
  'house-no-coda': 'Tiếng này không có âm cuối đâu các bạn ạ.',
  'house-other': 'Chữ này ở phòng khác cơ. Thử lại nhé!',
  'house-ngang': 'Thanh ngang thì không có dấu các bạn nhé.',
  'dk-intro': 'Gờ đơn hay gờ kép? Ngờ đơn hay ngờ kép? Các bạn nhìn chữ đứng sau nhé!',
  'dk-rule': 'Trước e, ê, i, mình viết gờ kép, ngờ kép. Trước các chữ khác, mình viết gờ đơn, ngờ đơn.',
  'g-don': 'gờ đơn',
  'ng-don': 'ngờ đơn',
  'nghe-trau': 'Nghé là con trâu nhỏ, giống mình đấy!',
  'g5-match': 'Các bạn nối phụ âm ghép với tranh đúng nhé!',
  'g5-read': 'Các bạn tự đọc chữ, rồi chạm vào tranh đúng nhé!',
  'g5-phrase': 'Các bạn đọc cụm từ, rồi chạm vào tranh đúng nhé!',
  'g6-say': 'Đây là gì? Các bạn nói to, rồi bấm nút để nghe mình nói nhé!',
  'g6-again': 'Các bạn nói theo mình nhé!',
  'g6-paint': 'Các bạn nghe mình nói, rồi tô đúng màu cho bức tranh nhé!',
  'g7-intro': 'Phụ âm ghép đang trốn trong bài thơ! Các bạn chạm vào các tiếng có phụ âm ghép đứng đầu nhé!',
  'g7-end': 'Chữ này đứng ở cuối tiếng. Mình tìm phụ âm ghép đứng đầu tiếng nhé!',
  'g7-none': 'Tiếng này không có phụ âm ghép đứng đầu. Thử lại nhé!'
});

const POEM_WORDS = POEM.flatMap(l => l.split(' ').map(t => VN.letters(t).toLowerCase()));
new Set([...Object.keys(WORD_PIC), ...READ_WORDS, ...Object.keys(PHRASE_PIC), ...HOUSE_WORDS, ...DK_ITEMS.map(x => x.w), ...POEM_WORDS]).forEach(w => { CLIPS['w:' + w] = w; });
POEM.forEach((line, i) => { CLIPS['p:' + (i + 1)] = line; });
[...SAY_THIS.map(x => x[1]), ...PAINT_ITEMS.map(x => x.say)].forEach(s => { CLIPS['k:' + s] = s; });
Object.entries(COLOR_NAME).forEach(([k, v]) => { CLIPS['m:' + k] = 'màu ' + v; });


/* =====================================================================
   HÌNH VẼ — tranh minh họa nét than chì, màu thương hiệu (viewBox 100 × 100)
   ===================================================================== */
const BOOK_IN = `<path d="M8 30 V84 C24 80 40 80 50 88 C60 80 76 80 92 84 V30" stroke="#C68B59" stroke-width="3"/><path d="M50 30 C40 22 24 22 12 26 V78 C24 74 40 74 50 82 Z" fill="#FFFCF6"/><path d="M50 30 C60 22 76 22 88 26 V78 C76 74 60 74 50 82 Z" fill="#FFFCF6"/><path d="M20 38 H40 M20 47 H40 M20 56 H36 M60 38 H80 M60 47 H80 M60 56 H76" stroke="#A39588" stroke-width="2"/><path d="M22 66 h5 M58 66 h5" stroke="#D9573F" stroke-width="4"/>`;

/* Tranh có thể tô màu (trò Luyện nói): truyền màu tô vào */
const UNCOLORED = '#E4DDD2';
const PAINT = {
  rabbit: f => SV(`<path d="M38 36 C28 12 36 4 41 8 C46 13 47 26 45 36 Z" fill="${f}"/><path d="M40 31 C35 17 38 11 40.5 13 C43 17 43 25 42.5 31 Z" fill="#F7BFCB" stroke="none"/><path d="M51 36 C53 12 63 6 66 11 C68 18 61 29 56 38 Z" fill="${f}"/><path d="M54 33 C56 18 61 13 63 15 C64 20 59 28 56 34 Z" fill="#F7BFCB" stroke="none"/><circle cx="85" cy="66" r="6.5" fill="${f}"/><ellipse cx="58" cy="70" rx="28" ry="19" fill="${f}"/><path d="M70 82 q8 6 14 2" stroke-width="2.5"/><ellipse cx="42" cy="87" rx="8" ry="4" fill="${f}"/><circle cx="44" cy="50" r="17" fill="${f}"/><circle cx="38" cy="47" r="3" fill="#3A3B3C" stroke="none"/><circle cx="37" cy="46" r="1" fill="#FFFFFF" stroke="none"/><circle cx="28.5" cy="53" r="2.6" fill="#F29AB0" stroke="none"/><ellipse cx="36" cy="57" rx="4" ry="2.2" fill="#F7BFCB" stroke="none"/><path d="M29 56 q2 3 5 1" stroke-width="2"/><path d="M26 54 l-9 -3 M26 57 l-9 2" stroke-width="1.6"/>`),
  drum: f => SV(`<path d="M24 93 L32 72 M76 93 L68 72 M28 85 H72" stroke="#8C3A2E" stroke-width="5"/><path d="M30 24 H72 C82 36 82 64 72 76 H30 Z" fill="${f}"/><path d="M48 24 C53 40 53 60 48 76 M62 24 C67 40 67 60 62 76" stroke="#F2C14E" stroke-width="2.5"/><path d="M32 24 H72 M32 76 H72" stroke-width="3"/><ellipse cx="30" cy="50" rx="13" ry="26" fill="#F2D49B"/><circle cx="30" cy="50" r="6" fill="#F2C14E" stroke="#B9873E" stroke-width="1.6"/><path d="M30 37 V41 M30 59 V63 M21 50 H24 M36 50 H39 M24 42 l2 2.5 M34 42 l-2 2.5 M24 58 l2 -2.5 M34 58 l-2 -2.5" stroke="#B9873E" stroke-width="1.6"/><g fill="#3A3B3C" stroke="none"><circle cx="30" cy="26" r="1.5"/><circle cx="38" cy="31" r="1.5"/><circle cx="42" cy="42" r="1.5"/><circle cx="42" cy="58" r="1.5"/><circle cx="38" cy="69" r="1.5"/><circle cx="30" cy="74" r="1.5"/></g>`),
  corn: f => SV(`<path d="M50 92 C30 82 24 52 34 24 C40 48 44 66 50 92 Z" fill="#8DBF74"/><path d="M50 92 C70 82 76 52 66 24 C60 48 56 66 50 92 Z" fill="#8DBF74"/><path d="M50 8 C61 8 64 28 62 50 C60 68 56 79 50 84 C44 79 40 68 38 50 C36 28 39 8 50 8 Z" fill="${f}"/><path d="M40 22 H60 M38.5 33 H61.5 M38.5 44 H61.5 M39 55 H61 M40.5 66 H59.5 M43 76 H57" stroke="#C99A2E" stroke-width="2"/><path d="M50 10 V82 M44.5 12 C42 36 42 62 46 80 M55.5 12 C58 36 58 62 54 80" stroke="#C99A2E" stroke-width="2"/><path d="M50 92 C42 84 34 70 32 54 C42 64 46 76 50 92 Z" fill="#6FAE4F"/><path d="M50 8 q-4 -5 -9 -4 M50 8 q2 -6 8 -6" stroke="#B9873E" stroke-width="2"/>`),
  orange: f => SV(`<path d="M50 26 q2 -10 8 -14" stroke="#8C5A32" stroke-width="3.5"/><path d="M54 22 C60 10 76 8 84 14 C76 26 62 28 54 22 Z" fill="#7DB25A"/><path d="M56 21 L80 14" stroke="#4F8A3B" stroke-width="2"/><circle cx="50" cy="58" r="33" fill="${f}"/><path d="M28 46 q6 -14 20 -18" stroke="#FFFFFF" stroke-width="4" opacity=".55"/><g fill="#3A3B3C" opacity=".22" stroke="none"><circle cx="40" cy="62" r="1.4"/><circle cx="58" cy="50" r="1.4"/><circle cx="62" cy="70" r="1.4"/><circle cx="46" cy="76" r="1.4"/><circle cx="70" cy="58" r="1.4"/></g><path d="M50 27 l-2 -2 M50 27 l2 -2" stroke-width="2"/>`),
  bamboo: f => SV(`<path d="M8 92 H92" stroke-width="3"/><rect x="24" y="10" width="10" height="82" rx="3" fill="${f}"/><rect x="47" y="20" width="10" height="72" rx="3" fill="${f}"/><rect x="69" y="30" width="10" height="62" rx="3" fill="${f}"/><path d="M24 32 H34 M24 56 H34 M24 78 H34 M47 42 H57 M47 66 H57 M69 52 H79 M69 74 H79" stroke-width="2.6"/><path d="M34 32 C44 22 54 20 64 22 C56 30 44 34 34 32 Z" fill="${f}"/><path d="M24 56 C14 48 8 40 6 32 C16 34 22 44 24 56 Z" fill="${f}"/><path d="M57 42 C66 34 76 32 86 34 C78 42 66 44 57 42 Z" fill="${f}"/><path d="M47 66 C38 60 32 52 30 44 C40 48 46 56 47 66 Z" fill="${f}"/><path d="M79 52 C86 46 92 46 96 48 C90 54 84 56 79 52 Z" fill="${f}"/><path d="M34 32 L58 23 M24 56 L9 35 M57 42 L82 35 M47 66 L33 47" stroke-width="1.6" opacity=".7"/>`)
};
const COLORS = {
  do: { name: 'đỏ', hex: '#D9473A' }, vang: { name: 'vàng', hex: '#F2C14E' }, trang: { name: 'trắng', hex: '#FFFFFF' },
  cam: { name: 'cam', hex: '#F2903A' }, xanh: { name: 'xanh', hex: '#6FAE4F' }
};

const DOG = `<path d="M71 80 q14 -4 12 -18" stroke-width="4.5"/><ellipse cx="50" cy="73" rx="22" ry="18" fill="#E9B872"/><path d="M40 70 V87 M60 70 V87" stroke-width="3"/><ellipse cx="40" cy="88" rx="7" ry="3.6" fill="#E9B872"/><ellipse cx="60" cy="88" rx="7" ry="3.6" fill="#E9B872"/><path d="M44 62 q6 8 12 0" fill="#FFF3DF" stroke-width="2.4"/><circle cx="50" cy="40" r="20" fill="#E9B872"/><path d="M32 27 C20 28 20 50 29 55 C34 47 36 38 37 31 Z" fill="#C68B59"/><path d="M68 27 C80 28 80 50 71 55 C66 47 64 38 63 31 Z" fill="#C68B59"/><ellipse cx="50" cy="49" rx="11" ry="8.5" fill="#FFF3DF"/><path d="M47.5 55 q2.5 7 5 0" fill="#E86B6B" stroke-width="2"/><path d="M50 47 v4 M45 52 q2.5 2.5 5 0 q2.5 2.5 5 0" stroke-width="2.2"/><ellipse cx="50" cy="45" rx="4.2" ry="3" fill="#3A3B3C"/><circle cx="42" cy="37" r="3" fill="#3A3B3C" stroke="none"/><circle cx="58" cy="37" r="3" fill="#3A3B3C" stroke="none"/><circle cx="41" cy="36" r="1" fill="#FFFFFF" stroke="none"/><circle cx="57" cy="36" r="1" fill="#FFFFFF" stroke="none"/>`;
const CHAIR = `<rect x="28" y="10" width="8" height="50" rx="2.5" fill="#C68B59"/><rect x="64" y="10" width="8" height="50" rx="2.5" fill="#C68B59"/><rect x="26" y="12" width="48" height="9" rx="3" fill="#D9A06B"/><path d="M43 21 V54 M50 21 V54 M57 21 V54" stroke="#8C5A32" stroke-width="3"/><path d="M20 55 H80 L76 64 H24 Z" fill="#D9A06B"/><rect x="25" y="64" width="8" height="27" rx="2.5" fill="#C68B59"/><rect x="67" y="64" width="8" height="27" rx="2.5" fill="#C68B59"/><path d="M33 80 H67" stroke-width="3"/>`;
const BASKET = `<path d="M26 46 C26 8 74 8 74 46" stroke="#B9873E" stroke-width="5"/><path d="M16 47 H84 L76 89 H24 Z" fill="#DDAA55"/><path d="M19 62 H81 M22 75 H78" stroke="#B9873E" stroke-width="2.5"/><path d="M34 51 L37 89 M50 51 V89 M66 51 L63 89" stroke="#B9873E" stroke-width="2.5"/><rect x="12" y="41" width="76" height="10" rx="5" fill="#C68B59"/>`;
const FRUIT_IN = `<circle cx="38" cy="38" r="14" fill="#F2903A"/><path d="M38 24 q5 -7 12 -5 q-5 7 -12 5 Z" fill="#7DB25A"/><path d="M56 44 C50 30 58 18 68 20 C74 26 72 38 62 44 Z" fill="#9BC46A"/><path d="M22 44 C30 52 54 52 70 40 L73 45 C56 58 30 58 20 48 Z" fill="#F2D24E"/>`;
const HOUSE = `<path d="M10 86 H90"/><rect x="22" y="48" width="56" height="38" rx="2" fill="#F6E7CF"/><path d="M14 51 L50 21 L86 51 Z" fill="#D9653B"/><path d="M27 41 H73 M36 33 H64" stroke="#A94A28" stroke-width="2"/><rect x="44" y="61" width="14" height="25" rx="2" fill="#6E9E5A"/><rect x="27" y="57" width="11" height="11" fill="#BFDDE8"/><rect x="64" y="57" width="11" height="11" fill="#BFDDE8"/>`;

const ICONS = {
  dog: SV(DOG),
  dogSmall: SV(`<path d="M8 90 H92" stroke-width="2.5" stroke="#DCCFBC"/><g transform="translate(21 39) scale(.55)">${DOG}</g>`),
  dogBig: SV(`<path d="M2 96 H98" stroke-width="2.5" stroke="#DCCFBC"/><g transform="translate(-6 -4) scale(1.1)">${DOG}</g>`),
  chair: SV(CHAIR),
  wind: SV(`<path d="M8 90 H54"/><path d="M30 90 C33 74 31 62 26 52" stroke="#8C5A32" stroke-width="7"/><path d="M12 46 C8 30 28 16 44 24 C58 16 76 28 72 44 C74 58 52 64 40 56 C26 64 12 58 12 46 Z" fill="#8DBF74"/><path d="M26 40 q8 -6 16 0 M44 46 q8 -6 16 0" stroke="#5E9A49" stroke-width="2.2"/><path d="M56 66 H84 q9 0 7 -8 q-2 -6 -8 -3" stroke="#7FB2D9" stroke-width="3.6"/><path d="M62 78 H93" stroke="#7FB2D9" stroke-width="3.6"/><path d="M76 52 H95" stroke="#7FB2D9" stroke-width="3"/><path d="M80 30 q7 -7 12 0 q-7 7 -12 0 Z" fill="#8DBF74" stroke-width="2"/><path d="M70 88 q6 -6 11 0 q-6 6 -11 0 Z" fill="#F2C14E" stroke-width="2"/><path d="M86 42 q5 -5 9 0 q-5 5 -9 0 Z" fill="#8DBF74" stroke-width="2"/>`),
  basket: SV(BASKET),
  fruitBasket: SV(`<path d="M26 46 C26 8 74 8 74 46" stroke="#B9873E" stroke-width="5"/>${FRUIT_IN}<path d="M16 47 H84 L76 89 H24 Z" fill="#DDAA55"/><path d="M19 62 H81 M22 75 H78" stroke="#B9873E" stroke-width="2.5"/><path d="M34 51 L37 89 M50 51 V89 M66 51 L63 89" stroke="#B9873E" stroke-width="2.5"/><rect x="12" y="41" width="76" height="10" rx="5" fill="#C68B59"/>`),
  starfruit: SV(`<path d="M62 27 q3 -8 8 -11" stroke="#6E8F3A" stroke-width="2.5"/><path d="M69 16 C74 6 88 4 94 9 C88 19 76 21 69 16 Z" fill="#7DB25A"/><path d="M8 58 C12 38 32 24 52 21 C61 20 66 24 64 31 C60 46 44 62 24 68 C15 70 8 66 8 58 Z" fill="#E8D255"/><path d="M12 61 C24 47 40 34 60 25 M18 67 C32 55 47 42 63 31" stroke="#B9A22E" stroke-width="2"/><path d="M68 48 L73.9 61.9 L88.9 63.2 L77.5 73.1 L80.9 87.8 L68 80 L55.1 87.8 L58.5 73.1 L47.1 63.2 L62.1 61.9 Z" fill="#F6E58A"/><path d="M68 70 L73.9 61.9 M68 70 L77.5 73.1 M68 70 L68 80 M68 70 L58.5 73.1 M68 70 L62.1 61.9" stroke="#C9B43E" stroke-width="1.6"/><g fill="#8C7A2A" stroke="none"><ellipse cx="68" cy="60" rx="1.3" ry="2.4"/><ellipse cx="78" cy="68" rx="2.4" ry="1.3"/><ellipse cx="58" cy="68" rx="2.4" ry="1.3"/></g>`),
  corn: PAINT.corn('#F2C14E'),
  turmeric: SV(`<path d="M62 40 C62 24 74 12 88 10 C88 28 76 38 62 40 Z" fill="#7DB25A"/><path d="M62 40 L82 16" stroke="#4F8A3B" stroke-width="2"/><path d="M12 60 C12 50 28 47 38 51 C44 39 57 37 61 45 C70 42 81 49 77 57 C86 61 84 72 73 72 C65 76 52 74 46 70 C35 74 16 72 12 60 Z" fill="#C9955B"/><path d="M26 53 q3 6 0 13 M38 51 q3 8 0 17 M55 44 q3 8 0 16 M68 51 q3 7 0 15" stroke="#8C5A32" stroke-width="2"/><circle cx="30" cy="84" r="11" fill="#E8862B"/><circle cx="30" cy="84" r="6.5" fill="#F7A93B" stroke="none"/><circle cx="56" cy="87" r="8.5" fill="#E8862B"/><circle cx="56" cy="87" r="4.5" fill="#F7A93B" stroke="none"/>`),
  house: SV(HOUSE),
  grandmaHouse: SV(`<g transform="translate(-4 4) scale(.82)">${HOUSE}</g><path d="M76 88 C76 72 80 64 86 64 C92 64 96 72 96 88 Z" fill="#9C6FA8"/><path d="M80 72 L86 78 L92 72" stroke="#FFFCF6" stroke-width="1.8"/><circle cx="86" cy="54" r="9" fill="${SKIN}"/><path d="M77 52 C77 42 95 42 95 52 C91 47 81 47 77 52 Z" fill="#C8C3BC"/><circle cx="86" cy="43" r="4.5" fill="#C8C3BC"/><circle cx="83" cy="55" r="1.4" fill="#3A3B3C" stroke="none"/><circle cx="89" cy="55" r="1.4" fill="#3A3B3C" stroke="none"/><path d="M83.5 59 q2.5 2 5 0" stroke-width="1.6"/><path d="M80 88 v4 M92 88 v4" stroke-width="2.5"/>`),
  pho: SV(`<path d="M36 22 q-4 -7 2 -13 M50 20 q-4 -7 2 -13" stroke="#A39588" stroke-width="2.5"/><path d="M58 8 L84 50 M66 6 L90 46" stroke="#C68B59" stroke-width="3.6"/><rect x="37" y="83" width="26" height="7" rx="2" fill="#FFFCF6"/><path d="M10 46 C10 72 28 86 50 86 C72 86 90 72 90 46 Z" fill="#FFFCF6"/><path d="M15 60 C30 66 70 66 85 60" stroke="#4D74A8" stroke-width="3"/><path d="M24 71 q4 3 8 0 q4 3 8 0 q4 3 8 0 q4 3 8 0 q4 3 8 0 q4 3 8 0" stroke="#4D74A8" stroke-width="1.8"/><ellipse cx="50" cy="46" rx="40" ry="10" fill="#F2D49B"/><path d="M18 46 q6 -4 12 0 q6 4 12 0 q6 -4 12 0 q6 4 12 0 q6 -4 12 0" stroke="#FFFCF6" stroke-width="2.6"/><path d="M28 43 q8 -6 15 0 q-7 4 -15 0 Z" fill="#B5655A" stroke-width="1.8"/><path d="M52 41 q8 -6 15 0 q-7 4 -15 0 Z" fill="#B5655A" stroke-width="1.8"/><circle cx="46" cy="48.5" r="2.4" fill="#6FAE4F" stroke="none"/><circle cx="70" cy="47.5" r="2.4" fill="#6FAE4F" stroke="none"/><circle cx="36" cy="49" r="2" fill="#6FAE4F" stroke="none"/><circle cx="60" cy="48" r="3.2" stroke="#FFFCF6" stroke-width="1.6"/>`),
  fruits: SV(`<ellipse cx="50" cy="80" rx="42" ry="11" fill="#FFFCF6"/><ellipse cx="50" cy="78" rx="31" ry="6" stroke="#DCCFBC" stroke-width="2"/><path d="M66 72 C52 72 52 50 60 41 C64 35 71 35 75 41 C83 50 81 72 66 72 Z" fill="#9BC46A"/><path d="M68 36 q1 -6 5 -8" stroke="#8C5A32" stroke-width="2.5"/><circle cx="38" cy="54" r="16" fill="#F2903A"/><path d="M38 38 q6 -8 14 -6 q-6 8 -14 6 Z" fill="#7DB25A"/><path d="M14 64 C24 76 52 78 72 64 L74 69 C54 84 24 82 12 68 Z" fill="#F2D24E"/><path d="M12 68 l-3 -3 M74 69 l3 -1" stroke-width="2.5"/>`),
  orange: PAINT.orange('#F2903A'),
  rabbit: PAINT.rabbit('#FFFFFF'),
  rabbitSmall: SV(`<path d="M8 90 H92" stroke-width="2.5" stroke="#DCCFBC"/><g transform="translate(20 40) scale(.55)">${PAINT.rabbit('#FFFFFF').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>`),
  rabbitBig: SV(`<path d="M2 96 H98" stroke-width="2.5" stroke="#DCCFBC"/><g transform="translate(-8 -6) scale(1.12)">${PAINT.rabbit('#FFFFFF').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>`),
  drum: PAINT.drum('#D9473A'),
  bamboo: PAINT.bamboo('#6FAE4F'),
  hen: SV(`<path d="M44 80 V90 M39 92 L44 90 L49 92 M60 80 V90 M55 92 L60 90 L65 92" stroke="#D9982B"/><path d="M72 52 q14 -24 20 2 q0 12 -14 12 Z" fill="#C9763A"/><ellipse cx="52" cy="60" rx="28" ry="22" fill="#EDBE7A"/><circle cx="31" cy="37" r="13" fill="#EDBE7A"/><path d="M24 26 q2 -9 7 -3 q3 -8 8 0 q3 4 -2 7 Z" fill="#D94A3A"/><path d="M18 37 L9 40 L18 43 Z" fill="#F2C14E"/><circle cx="28" cy="35" r="2.3" fill="#3A3B3C" stroke="none"/><path d="M20 45 q1 6 6 2" fill="#D94A3A"/><path d="M42 57 q11 11 24 0" stroke-width="2.5"/>`),
  wood: SV(`<path d="M8 90 H92" stroke="#DCCFBC" stroke-width="2.5"/><path d="M16 62 H70 V88 H16 Z" fill="#C68B59"/><ellipse cx="16" cy="75" rx="8" ry="13" fill="#B47846"/><ellipse cx="70" cy="75" rx="9" ry="13" fill="#E8C192"/><ellipse cx="70" cy="75" rx="5" ry="7.5" stroke="#8C5A32" stroke-width="1.8"/><circle cx="70" cy="75" r="1.6" fill="#8C5A32" stroke="none"/><path d="M26 70 H50 M32 80 H58" stroke="#8C5A32" stroke-width="2"/><path d="M30 36 H84 V62 H30 Z" fill="#D9A06B"/><ellipse cx="30" cy="49" rx="8" ry="13" fill="#C68B59"/><ellipse cx="84" cy="49" rx="9" ry="13" fill="#F0D2A8"/><ellipse cx="84" cy="49" rx="5" ry="7.5" stroke="#8C5A32" stroke-width="1.8"/><circle cx="84" cy="49" r="1.6" fill="#8C5A32" stroke="none"/><path d="M42 44 H66 M46 54 H74" stroke="#8C5A32" stroke-width="2"/>`),
  crab: SV(`<path d="M30 64 L14 72 M32 70 L18 84 M36 74 L28 90 M70 64 L86 72 M68 70 L82 84 M64 74 L72 90" stroke-width="3.5"/><path d="M32 54 C24 46 18 38 20 28 M68 54 C76 46 82 38 80 28" stroke-width="4"/><path d="M20 28 C12 26 10 16 16 12 C18 18 22 21 27 21 C26 26 24 29 20 28 Z" fill="#5B8FC9"/><path d="M80 28 C88 26 90 16 84 12 C82 18 78 21 73 21 C74 26 76 29 80 28 Z" fill="#5B8FC9"/><path d="M24 58 L10 50 L26 64 Z M76 58 L90 50 L74 64 Z" fill="#5B8FC9"/><ellipse cx="50" cy="62" rx="27" ry="16" fill="#5B8FC9"/><path d="M44 47 V40 M56 47 V40"/><circle cx="44" cy="38" r="3" fill="#3A3B3C" stroke="none"/><circle cx="56" cy="38" r="3" fill="#3A3B3C" stroke="none"/><g fill="#FFFCF6" stroke="none" opacity=".85"><circle cx="40" cy="60" r="2.2"/><circle cx="50" cy="56" r="2.2"/><circle cx="60" cy="60" r="2.2"/><circle cx="45" cy="67" r="1.8"/><circle cx="55" cy="67" r="1.8"/></g><path d="M44 72 q6 4 12 0" stroke-width="2"/>`),
  calf: SV(`<path d="M6 92 H94" stroke="#DCCFBC" stroke-width="2.5"/><path d="M83 58 q9 6 5 20" stroke-width="2.5"/><path d="M87 77 l3 4 l-4 0 Z" fill="#3A3B3C"/><rect x="34" y="66" width="7" height="24" rx="3" fill="#6B6F73"/><rect x="72" y="66" width="7" height="24" rx="3" fill="#6B6F73"/><ellipse cx="58" cy="60" rx="28" ry="16" fill="#7B8085"/><rect x="44" y="68" width="7" height="22" rx="3" fill="#7B8085"/><rect x="62" y="68" width="7" height="22" rx="3" fill="#7B8085"/><path d="M22 39 q-4 -6 -9 -5 M33 39 q3 -6 8 -6" stroke-width="4"/><ellipse cx="40" cy="44" rx="7" ry="3.5" transform="rotate(20 40 44)" fill="#7B8085"/><ellipse cx="27" cy="50" rx="15" ry="13" fill="#7B8085"/><ellipse cx="19" cy="58" rx="9" ry="7" fill="#B3B6B9"/><circle cx="16" cy="57" r="1.4" fill="#3A3B3C" stroke="none"/><circle cx="22" cy="57" r="1.4" fill="#3A3B3C" stroke="none"/><circle cx="27" cy="46" r="3" fill="#3A3B3C" stroke="none"/><circle cx="26" cy="45" r="1" fill="#FFFFFF" stroke="none"/>`),
  letters: SV(`<rect x="10" y="18" width="80" height="64" rx="10" fill="#FFFCF6"/><path d="M10 34 H90" stroke="#DCCFBC" stroke-width="2"/><circle cx="20" cy="26" r="2.5" fill="#D9573F" stroke="none"/><circle cx="29" cy="26" r="2.5" fill="#DDAA55" stroke="none"/><circle cx="38" cy="26" r="2.5" fill="#6FAE4F" stroke="none"/>${TXT(50, 70, 32, 'a ă â')}`),
  sleep: SV(`${FACE()}<path d="M30 56 q4 4 8 0 M50 56 q4 4 8 0" stroke-width="2.6"/><path d="M40 67 q4 2 8 0" stroke-width="2.6"/><path d="M70 30 h10 l-10 12 h10 M82 12 h8 l-8 9 h8" stroke="#4D74A8" stroke-width="3"/>`),
  /* Trò 1 — làm đúng lời thơ */
  readAloud: SV(`${FACE()}${EYES_OPEN}<ellipse cx="44" cy="67" rx="7.5" ry="6" fill="#B4553C"/>${CHEEKS}<path d="M76 44 q6 9 0 18 M84 37 q11 16 0 32" stroke="#3E7A3A" stroke-width="3.5"/>`),
  hushMouth: SV(`${FACE()}<path d="M30 54 q4 -3 8 0 M50 54 q4 -3 8 0" stroke-width="2.6"/>${CHEEKS}<path d="M26 76 C26 64 32 60 44 60 C56 60 62 64 62 76 C56 82 32 82 26 76 Z" fill="${HAND}"/><path d="M34 63 V72 M41 61 V72 M48 61 V72 M55 63 V72" stroke-width="2"/>`),
  listen: SV(`${FACE()}${EYES_OPEN}<path d="M38 66 q6 5 12 0" stroke-width="2.6"/>${CHEEKS}<path d="M66 40 C80 38 84 50 80 60 C78 66 72 68 66 66 Z" fill="${HAND}"/><path d="M70 46 q4 6 0 12" stroke-width="2"/><path d="M88 44 q-5 9 0 18 M95 37 q-9 16 0 32" stroke="#3E7A3A" stroke-width="3.5"/>`),
  coverEars: SV(`${FACE()}<path d="M30 51 l6 3 l-6 3 M58 51 l-6 3 l6 3" stroke-width="2.6"/><path d="M38 69 q6 -4 12 0" stroke-width="2.6"/><path d="M8 50 C8 40 16 38 22 42 L24 66 C18 70 8 66 8 50 Z" fill="${HAND}"/><path d="M80 50 C80 40 72 38 66 42 L64 66 C70 70 80 66 80 50 Z" fill="${HAND}"/><path d="M12 48 h7 M12 55 h8 M76 48 h-7 M76 55 h-8" stroke-width="2"/>`),
  awake: SV(`<g transform="translate(11 -10) scale(.8)">${FACE()}<circle cx="34" cy="54" r="3.2" fill="#3A3B3C" stroke="none"/><circle cx="54" cy="54" r="3.2" fill="#3A3B3C" stroke="none"/><circle cx="33" cy="53" r="1.1" fill="#FFFFFF" stroke="none"/><circle cx="53" cy="53" r="1.1" fill="#FFFFFF" stroke="none"/><path d="M37 64 q7 6 14 0" stroke-width="2.6"/>${CHEEKS}</g><g transform="translate(20 58) scale(.6)">${BOOK_IN}</g>`),
  neat: SV(`<rect x="14" y="14" width="64" height="76" rx="6" fill="#FFFFFF"/><path d="M22 34 H70 M22 52 H70 M22 70 H70" stroke="#BFDDE8" stroke-width="2"/>${TXT(46, 32, 17, 'a ă â', '#2A231F', 800)}${TXT(46, 50, 17, 'ch nh', '#2A231F', 800)}${TXT(46, 68, 17, 'gh kh', '#2A231F', 800)}<g transform="rotate(35 82 62)"><rect x="77" y="24" width="10" height="48" rx="2" fill="#F2C14E"/><path d="M77 72 L82 84 L87 72 Z" fill="#F6E3BC"/><path d="M80.5 80 L82 84 L83.5 80 Z" fill="#3A3B3C"/><rect x="77" y="20" width="10" height="7" rx="2" fill="#EEA48C"/></g>`),
  messy: SV(`<g transform="rotate(-9 46 52)"><rect x="14" y="14" width="64" height="76" rx="6" fill="#FFFFFF"/><path d="M22 30 C30 18 34 42 42 26 C48 16 52 40 60 24 C64 18 66 32 70 26 M22 50 C28 40 40 62 46 44 C52 32 58 60 70 46 M24 68 C34 58 36 76 46 64" stroke="#7A6E66" stroke-width="2.4"/></g><path d="M48 64 C40 60 38 72 46 74 C44 82 56 84 58 76 C66 80 72 70 64 66 C68 58 56 54 54 62 C52 56 46 58 48 64 Z" fill="#3F5F9E" stroke="#2F4A80"/><circle cx="70" cy="58" r="3" fill="#3F5F9E" stroke="none"/><circle cx="38" cy="80" r="2.4" fill="#3F5F9E" stroke="none"/><g transform="rotate(-60 82 30)"><rect x="77" y="4" width="10" height="44" rx="2" fill="#F2C14E"/><path d="M77 48 L82 58 L87 48 Z" fill="#F6E3BC"/></g>`),
  /* Biểu tượng thẻ trò chơi */
  book: SV(BOOK_IN),
  ear: SV(`<path d="M20 42 q-6 9 0 18 M11 35 q-11 16 0 32" stroke="#3E7A3A" stroke-width="3.5"/><path d="M48 86 C38 82 40 72 44 68 C48 62 42 56 38 50 C30 38 38 16 58 16 C78 16 88 32 84 52 C82 62 74 66 70 74 C66 84 56 90 48 86 Z" fill="#F6D2B8"/><path d="M58 32 C70 32 72 46 66 52 C62 56 60 60 58 66" stroke-width="2.6"/>`),
  vowelCard: SV(`<rect x="8" y="14" width="84" height="72" rx="14" fill="#F6E3BC"/>${TXT(50, 62, 29, 'a ă â')}`),
  digraphCard: SV(`<rect x="12" y="10" width="76" height="80" rx="16" fill="#FFFCF6"/><rect x="20" y="18" width="60" height="40" rx="10" fill="#3A3B3C"/>${TXT(50, 50, 32, 'ch', '#F2C14E')}${TXT(50, 80, 18, 'chó', '#3A3B3C', 800)}`),
  readCard: SV(`<rect x="6" y="20" width="52" height="60" rx="10" fill="#FFFCF6"/>${TXT(32, 58, 22, 'nhà')}<g transform="translate(50 26) scale(.48)">${HOUSE}</g>`),
  speak: SV(`${FACE()}${EYES_OPEN}<ellipse cx="44" cy="67" rx="7.5" ry="6" fill="#B4553C"/>${CHEEKS}<path d="M76 44 q6 9 0 18 M84 37 q11 16 0 32" stroke="#3E7A3A" stroke-width="3.5"/>`),
  hunt: SV(`<rect x="8" y="14" width="66" height="72" rx="8" fill="#FFFCF6"/><path d="M18 32 H62 M18 46 H52 M18 60 H58 M18 74 H44" stroke="#A39588" stroke-width="3"/><circle cx="60" cy="58" r="17" fill="#F6E3BC" fill-opacity=".85" stroke-width="4"/>${TXT(60, 65, 17, 'ch')}<path d="M72 70 L88 86" stroke-width="7"/>`)
};



/* ---------- 1. Thơ "Lên Sáu" ---------- */
GAMES.g1 = {
  num: 1, title: 'Thơ “Lên Sáu”', icon: 'book', desc: 'Đọc tiếp sức với Trâu Con, rồi chọn bạn làm đúng lời thơ',
  levels: ['Đọc tiếp sức', 'Làm đúng lời thơ'], chain: true,
  start(level) { [this.relay, this.good][level].call(this); },
  relay() {
    const my = Runner.seq; let idx = 0;
    const lines = POEM.map((t, i) => h('button', { class: 'pline', type: 'button', onclick: () => { App.unlockAudio(); Speech.say(['p:' + (i + 1)]); } }, h('span', { class: 'who' }), h('span', { class: 'ltxt' }, t)));
    const btnDone = h('button', { class: 'btn', type: 'button', disabled: true }, 'Các bạn đọc xong ›');
    const btnAll = h('button', { class: 'btn ghost small', type: 'button', onclick: () => Speech.say(['s:g1-title', ...POEM.map((_, i) => 'p:' + (i + 1))]) }, 'Nghe cả bài');
    const mark = () => lines.forEach((b, i) => {
      b.classList.toggle('done', i < idx);
      b.classList.toggle('turn-trau', i === idx && idx % 2 === 0);
      b.classList.toggle('turn-you', i === idx && idx % 2 === 1);
      b.querySelector('.who').textContent = i === idx ? (idx % 2 === 0 ? 'Trâu Con đọc' : 'Các bạn đọc') : '';
    });
    const end = () => { idx = 12; mark(); later(() => UI.finish(12, 'Các bạn đã đọc tiếp sức cả 12 câu thơ “Lên Sáu”.'), 500); };
    const trauTurn = async () => {
      if (my !== Runner.seq) return;
      mark(); btnDone.disabled = true; UI.mascot('nod'); UI.progress(idx + ' / 12');
      $('#guideText').textContent = 'Mình đọc câu ' + (idx + 1) + ' nhé!';
      await Speech.say(['p:' + (idx + 1)]);
      if (my !== Runner.seq) return;
      await wait(400);
      idx++; UI.progress(idx + ' / 12'); youTurn();
    };
    const youTurn = () => {
      if (idx >= 12) return end();
      mark(); btnDone.disabled = false;
      UI.guide(['s:g1-you']);
      try { lines[idx].scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
    };
    btnDone.addEventListener('click', () => {
      if (btnDone.disabled) return;
      btnDone.disabled = true; Sfx.ok(); UI.mascot('nod'); bounce(lines[idx], 'pop-ok');
      idx++; UI.progress(idx + ' / 12');
      if (idx >= 12) return end();
      later(trauTurn, 600);
    });
    UI.stage.append(h('div', { class: 'poem' },
      h('button', { class: 'poem-head', type: 'button', onclick: () => Speech.say(['s:g1-title']) }, h('strong', null, 'LÊN SÁU'), h('span', null, 'Thơ: Tản Đà')),
      h('div', { class: 'poem-cols' }, h('div', null, lines.slice(0, 6)), h('div', null, lines.slice(6))),
      h('div', { class: 'relay-bar' }, btnDone, btnAll)));
    mark(); UI.progress('0 / 12');
    UI.guide(['s:g1-intro']).then(() => { if (my === Runner.seq) later(trauTurn, 300); });
  },
  good() {
    const Q = shuffle(POEM_GOOD.slice()); let i = 0;
    const show = () => {
      const q = Q[i]; let wrong = 0, locked = false;
      const opts = shuffle([q.good, q.bad]);
      const btns = opts.map(p => h('button', { class: 'choice', type: 'button', 'aria-label': 'Tranh ' + (opts.indexOf(p) + 1), html: ICONS[p], onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (p === q.good) {
          locked = true; el.classList.add('right'); UI.ok(el, [pick(PRAISE), 'p:' + (q.line + 1)]);
          later(() => { i++; if (i < Q.length) show(); else UI.finish(Q.length, 'Các bạn đã chọn đúng 4 bạn làm theo lời thơ.'); }, 1900);
        } else { wrong++; UI.no(el, [pick(RETRY), 'p:' + (q.line + 1)]); if (wrong >= 2) UI.hint(btns[opts.indexOf(q.good)]); }
      } }));
      UI.stage.replaceChildren(
        h('button', { class: 'qline', type: 'button', onclick: () => Speech.say(['p:' + (q.line + 1)]) }, POEM[q.line].replace(/[,.]$/, '')),
        h('div', { class: 'choices two' }, btns), dotsRow(Q.length, i));
      UI.progress((i + 1) + ' / ' + Q.length);
      UI.guide(i === 0 ? ['s:g1-good', 'p:' + (q.line + 1)] : ['p:' + (q.line + 1)]);
    };
    show();
  }
};

/* ---------- 2. Ôn nguyên âm đơn ---------- */
GAMES.g2 = {
  num: 2, title: 'Ôn nguyên âm đơn', icon: 'vowelCard', desc: 'Nghe Trâu Con đọc, chạm đúng nguyên âm: a ă â, e ê, o ô ơ, u ư',
  levels: [], chain: false,
  start() {
    const Q = shuffle(Object.keys(VOWEL_SETS)).slice(0, 8); let i = 0;
    const show = () => {
      const v = Q[i]; let wrong = 0, locked = false; const opts = shuffle(VOWEL_SETS[v].slice());
      const btns = opts.map(l => h('button', { class: 'lbtn', type: 'button', 'aria-label': 'Chữ ' + l, onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (l === v) {
          locked = true; el.classList.add('right'); UI.ok(el, [pick(PRAISE), 'l:' + v]);
          later(() => { i++; if (i < Q.length) show(); else UI.finish(Q.length, 'Các bạn đã nhận ra đúng 8 nguyên âm đơn.'); }, 1500);
        } else { wrong++; UI.no(el, [pick(RETRY), 's:listen', 'l:' + v]); if (wrong >= 2) UI.hint(btns[opts.indexOf(v)]); }
      } }, l));
      UI.stage.replaceChildren(
        h('button', { class: 'ear-btn', type: 'button', html: SPEAKER, onclick: () => Speech.say(['l:' + v]) }, 'Nghe lại'),
        h('div', { class: 'lchoices' }, btns), dotsRow(Q.length, i));
      UI.progress((i + 1) + ' / ' + Q.length);
      UI.guide(i === 0 ? ['s:g2-intro', 's:listen', 'l:' + v] : ['s:listen', 'l:' + v], { show: ['s:g2-intro'] });
    };
    show();
  }
};

/* ---------- 3. Làm quen phụ âm ghép ---------- */
GAMES.g3 = {
  num: 3, title: 'Làm quen phụ âm ghép', icon: 'digraphCard', desc: 'Nghe 11 phụ âm ghép qua thẻ chữ – tranh, rồi ghép chữ: c + h = ch',
  levels: ['Thẻ chữ – tranh', 'Ghép: ch kh nh ph th gh', 'Ghép: tr qu gi ng ngh'], chain: true,
  start(level) { if (level === 0) this.cards(); else this.compose(level - 1); },
  cards() {
    let gi = 0, total = 0;
    const show = () => {
      const grp = CARD_GROUPS[gi]; const heard = new Set();
      const cards = grp.map(d => {
        const w = CARD_WORD[d]; const south = SOUTH_NOTE[w];
        const c = h('button', { class: 'dgcard', type: 'button', 'aria-label': 'Phụ âm ghép ' + d + ', tiếng ' + w },
          h('span', { class: 'dgbox' }, d), h('span', { class: 'dgpic', html: ICONS[WORD_PIC[w]] }), h('span', { class: 'dgword' }, w),
          south ? h('span', { class: 'dgnote' }, south.text) : null);
        c.addEventListener('click', () => {
          App.unlockAudio(); bounce(c, 'pop-ok');
          Speech.say(['d:' + d, 'w:' + w, ...(south ? ['s:' + south.clip] : [])]);
          if (heard.has(d)) return;
          heard.add(d); total++; c.classList.add('heard'); UI.progress(total + ' / 11'); UI.mascot('nod');
          if (heard.size === grp.length) later(() => {
            gi++;
            if (gi < CARD_GROUPS.length) { Sfx.ok(); Speech.say(['s:g3-group']); later(show, 2600); }
            else UI.finish(11, 'Các bạn đã nghe đủ 11 phụ âm ghép.');
          }, south ? 3600 : 2200);
        });
        return c;
      });
      UI.stage.replaceChildren(h('div', { class: 'dgcards' }, cards), dotsRow(CARD_GROUPS.length, gi));
      UI.progress(total + ' / 11');
      UI.guide(['s:g3-cards'], { silent: gi > 0 });
    };
    show();
  },
  compose(round) {
    const set = BUILD_ROUNDS[round];
    const order = set.includes('ngh') ? [...shuffle(set.filter(d => d !== 'ngh')), 'ngh'] : shuffle(set.slice());
    let i = 0;
    const show = () => {
      const d = order[i], w = BUILD_WORD[d], need = Array.from(d); let filled = 0; const picker = Picker(); const wrongs = new Map();
      const slots = need.map((ch, k) => { const s = h('div', { class: 'cslot', 'aria-label': 'Ô chữ thứ ' + (k + 1) }); s._ch = ch; return s; });
      const res = h('span', { class: 'cres wait' }, '?');
      const word = h('span', { class: 'cword wait' }, w);
      const eqKids = []; slots.forEach((s, k) => { if (k) eqKids.push(h('span', null, '+')); eqKids.push(s); });
      eqKids.push(h('span', null, '='), res, h('span', null, '→'), word);
      const tray = h('div', { class: 'tray' });
      const place = (tile, slot) => {
        if (slot._done) return false;
        if (tile._ch === slot._ch) {
          slot._done = true; slot.textContent = tile._ch; slot.classList.add('filled'); tile.remove(); picker.clear(); filled++;
          Sfx.ok(); bounce(slot, 'pop-ok'); Speech.say(['l:' + tile._ch]);
          if (filled === need.length) {
            res.textContent = d; res.classList.remove('wait'); word.classList.remove('wait');
            [...tray.children].forEach(t => t.remove());
            UI.ok([res, word], [...need.map(c => 'l:' + c), 'd:' + d, 'w:' + w]);
            later(() => { i++; if (i < order.length) show(); else UI.finish(order.length * 2, 'Các bạn đã ghép đúng ' + order.length + ' phụ âm ghép.'); }, 3600);
          }
          return true;
        }
        const n = (wrongs.get(tile) || 0) + 1; wrongs.set(tile, n);
        UI.no(tile, need.includes(tile._ch) ? ['s:g3-place'] : ['s:g3-notin', 'l:' + tile._ch]);
        if (n >= 2) { const s = slots.find(x => !x._done && x._ch === tile._ch); if (s) UI.hint(s); }
        return false;
      };
      const extra = shuffle(EXTRA_LETTERS.filter(c => !need.includes(c))).slice(0, 2);
      let letters = shuffle([...need, ...extra]);
      if (letters.slice(0, need.length).join('') === d) letters = letters.reverse();
      letters.forEach(ch => {
        const t = h('button', { class: 'tile', type: 'button', 'aria-label': 'Chữ ' + ch }, ch); t._ch = ch;
        draggable(t, { zones: () => slots.filter(s => !s._done), onPick: () => Speech.say(['l:' + ch]), onTap: el => picker.toggle(el), onDrop: place });
        tray.append(t);
      });
      slots.forEach(s => asZone(s, picker, place));
      UI.stage.replaceChildren(h('div', { class: 'compose' },
        h('button', { class: 'cpic', type: 'button', 'aria-label': 'Nghe tiếng ' + w, html: ICONS[WORD_PIC[w]], onclick: () => Speech.say(['w:' + w]) }),
        h('div', { class: 'eq' }, eqKids), tray, dotsRow(order.length, i)));
      UI.progress((i + 1) + ' / ' + order.length);
      const ask = ['s:g3-make', 'd:' + d, 's:g3-in', 'w:' + w, ...(d === 'ngh' ? ['s:g3-ngh'] : [])];
      UI.guide(i === 0 ? ['s:g3-build', ...ask] : ask);
    };
    show();
  }
};

/* ---------- 4. Nghe và nhận diện ---------- */
function toneCard(t) {
  const c = h('button', { class: 'tcard', type: 'button', 'aria-label': 'Thanh ' + TONE_NAME[t], html: TONE_ICON[t] }, h('span', null, TONE_NAME[t]));
  c._tone = t; return c;
}
GAMES.g4 = {
  num: 4, title: 'Nghe và nhận diện', icon: 'ear', desc: 'Nghe tiếng chọn phụ âm ghép, xây nhà cho tiếng, chọn gờ đơn hay gờ kép',
  levels: ['Nghe tiếng, chọn chữ', 'Xây nhà cho tiếng', 'Đơn hay kép?'], chain: true,
  start(level) { [this.listen, this.house, this.dk][level].call(this); },
  listen() {
    const Q = shuffle(DIGRAPHS.slice()); let i = 0;
    const show = () => {
      const d = Q[i], w = CARD_WORD[d]; let wrong = 0, locked = false;
      const others = shuffle(DIGRAPHS.filter(x => x !== d && !(SOUND_ALIKE[d] || []).includes(x))).slice(0, 2);
      const opts = shuffle([d, ...others]);
      const myst = h('button', { class: 'mystery', type: 'button', 'aria-label': 'Nghe lại tiếng', onclick: () => Speech.say(['w:' + w]) });
      myst.innerHTML = SPEAKER + '<span class="mq">Chạm để nghe</span>';
      const btns = opts.map(o => h('button', { class: 'lbtn', type: 'button', 'aria-label': 'Phụ âm ghép ' + o, onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (o === d) {
          locked = true; el.classList.add('right'); myst.classList.add('revealed');
          myst.innerHTML = ICONS[WORD_PIC[w]] + '<span class="mword">' + w + '</span>';
          UI.ok([el, myst], [pick(PRAISE), 'd:' + d, 'w:' + w]);
          later(() => { i++; if (i < Q.length) show(); else UI.finish(Q.length, 'Các bạn đã nghe và nhận ra đủ 11 phụ âm ghép.'); }, 2400);
        } else { wrong++; UI.no(el, [pick(RETRY), 's:listen', 'w:' + w]); if (wrong >= 2) UI.hint(btns[opts.indexOf(d)]); }
      } }, o));
      UI.stage.replaceChildren(myst, h('div', { class: 'lchoices' }, btns), dotsRow(Q.length, i));
      UI.progress((i + 1) + ' / ' + Q.length);
      UI.guide(i === 0 ? ['s:g4-listen', 's:listen', 'w:' + w] : ['s:listen', 'w:' + w], { show: ['s:g4-listen'] });
    };
    show();
  },
  house() {
    const words = shuffle(HOUSE_WORDS.slice()); let i = 0;
    const show = () => {
      const word = words[i]; const A = VN.analyze(word); const plain = VN.stripTone(word);
      const want = { onset: Array.from(A.onset), main: Array.from(A.nucleus), coda: Array.from(A.coda) };
      let phase = 'letters'; const picker = Picker();
      const mkRoom = (key, title, sub) => {
        const n = Math.max(1, want[key].length);
        const cells = Array.from({ length: n }, () => h('span', { class: 'mslot' }));
        const box = h('div', { class: 'mslots' }, cells);
        const r = h('div', { class: 'room ' + key, 'aria-label': title }, h('h4', null, title), h('span', { class: 'sub' }, sub), box);
        r._key = key; r._cells = cells; r._box = box; r._filled = cells.map(() => false); return r;
      };
      const rooms = [mkRoom('onset', 'Âm đầu', 'phụ âm, phụ âm ghép'), mkRoom('main', 'Âm chính', 'nguyên âm · bắt buộc'), mkRoom('coda', 'Âm cuối', 'có thể không có')];
      const roofSlot = h('div', { class: 'roof-slot', 'aria-label': 'Mái nhà: chỗ đặt dấu thanh' }, 'Thanh ?');
      const tray = h('div', { class: 'tray' });
      const tones = h('div', { class: 'tones', hidden: true });
      const big = h('span', { class: 'big' }, word);
      const placeLetter = (tile, room) => {
        if (phase !== 'letters') return false;
        const k = room._key, ch = tile._ch, arr = want[k];
        const j = arr.findIndex((c, n) => c === ch && !room._filled[n]);
        if (j >= 0) {
          room._filled[j] = true; room._cells[j].textContent = ch; tile.remove(); picker.clear();
          if (room._filled.every(Boolean)) room._box.classList.add('full');
          Sfx.ok(); bounce(room._box, 'pop-ok'); UI.mascot('nod'); Speech.say(['l:' + ch]);
          if (!tray.querySelector('.tile')) toTone();
          return true;
        }
        let msg = 's:house-other';
        if (k !== 'onset' && want.onset.includes(ch) && want.onset.length > 1) msg = 's:house-onset';
        else if (k === 'main' && !VN.isVowel(ch)) msg = 's:house-main-v';
        else if (k === 'coda' && !want.coda.length) msg = 's:house-no-coda';
        UI.no(tile, [msg]);
        return false;
      };
      const toTone = () => {
        phase = 'tone';
        rooms.forEach(r => { if (!want[r._key].length) { r._cells[0].textContent = '—'; r._box.classList.add('none'); r._box.setAttribute('aria-label', 'không có'); } });
        tones.hidden = false; tray.hidden = true;
        later(() => UI.guide(['s:house-tone']), 700);
      };
      const placeTone = (card, zone) => {
        if (phase !== 'tone' || zone !== roofSlot) return false;
        if (card._tone === A.tone) {
          phase = 'done'; roofSlot.classList.add('filled'); roofSlot.innerHTML = TONE_ICON[A.tone] + '<span>' + TONE_NAME[A.tone] + '</span>';
          tones.hidden = true; picker.clear();
          const extra = A.tone === 'ngang' ? ['s:house-ngang'] : [];
          UI.ok([roofSlot, big], [pick(PRAISE), 'w:' + word, 't:' + A.tone, ...extra]);
          later(() => { i++; if (i < words.length) show(); else UI.finish(words.length * 2, 'Các bạn đã xây nhà cho 6 tiếng có phụ âm ghép.'); }, extra.length ? 4200 : 3000);
          return true;
        }
        UI.no(card, [pick(RETRY), 's:listen', 'w:' + word]);
        return false;
      };
      let letters = shuffle(VN.chars(plain));
      if (letters.join('') === plain && letters.length > 1) letters = letters.reverse();
      letters.forEach(ch => {
        const t = h('button', { class: 'tile', type: 'button', 'aria-label': 'Chữ ' + ch }, ch); t._ch = ch;
        draggable(t, { zones: () => rooms, onPick: () => Speech.say(['l:' + ch]), onTap: el => picker.toggle(el), onDrop: placeLetter });
        tray.append(t);
      });
      TONES.forEach(tn => {
        const c = toneCard(tn);
        draggable(c, { zones: () => [roofSlot], onPick: () => Speech.say(['t:' + tn]), onTap: el => picker.toggle(el), onDrop: placeTone });
        tones.append(c);
      });
      rooms.forEach(r => asZone(r, picker, placeLetter));
      asZone(roofSlot, picker, placeTone);
      UI.stage.replaceChildren(h('div', { class: 'build' },
        h('button', { class: 'target', type: 'button', 'aria-label': 'Nghe tiếng ' + word, onclick: () => Speech.say(['w:' + word]) },
          h('span', { class: 'mini', html: ICONS[WORD_PIC[word]] }), big),
        h('div', { class: 'house' }, h('div', { class: 'roof' }, roofSlot), h('div', { class: 'rooms' }, rooms)),
        tray, tones,
        h('p', { class: 'note' }, h('b', null, 'Ghi nhớ:'), ' Phụ âm ghép có 2–3 chữ cái nhưng là một âm đầu.'),
        dotsRow(words.length, i)));
      UI.progress((i + 1) + ' / ' + words.length);
      UI.guide(i === 0 ? ['s:house-intro', 's:house-word', 'w:' + word] : ['s:house-word', 'w:' + word]);
    };
    show();
  },
  dk() {
    const Q = shuffle(DK_ITEMS.slice()); let i = 0;
    const show = () => {
      const w = Q[i].w, on = VN.onsetOf(w); let wrong = 0, locked = false;
      const rest = VN.chars(w).slice(Array.from(on).length);
      const kepNeeded = ['e', 'ê', 'i'].includes(VN.base(rest[0]));
      const opts = on.startsWith('n') ? ['ng', 'ngh'] : ['g', 'gh'];
      const blank = h('span', { class: 'dkblank' }, '?');
      const btns = opts.map(o => h('button', { class: 'lbtn', type: 'button', 'aria-label': o + (o.endsWith('h') ? ', kép' : ', đơn'), onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (o === on) {
          locked = true; el.classList.add('right'); blank.textContent = o; blank.classList.add('right');
          UI.ok([el, blank], [pick(PRAISE), DK_NAME[o], 'w:' + w, ...(w === 'nghé' ? ['s:nghe-trau'] : [])]);
          later(() => { i++; if (i < Q.length) show(); else UI.finish(Q.length, 'Các bạn đã chọn đúng gờ đơn, gờ kép, ngờ đơn, ngờ kép.'); }, w === 'nghé' ? 3600 : 2200);
        } else { wrong++; UI.no(el, ['s:dk-rule']); if (wrong >= 2) UI.hint(btns[opts.indexOf(on)]); }
      } }, o, h('small', null, o === 'g' ? 'gờ đơn' : o === 'gh' ? 'gờ kép' : o === 'ng' ? 'ngờ đơn' : 'ngờ kép')));
      UI.stage.replaceChildren(h('div', { class: 'dk' },
        h('button', { class: 'cpic', type: 'button', 'aria-label': 'Nghe tiếng', html: ICONS[WORD_PIC[w]], onclick: () => Speech.say(['w:' + w]) }),
        h('div', { class: 'dkword' }, blank, h('span', { class: kepNeeded ? 'dknext' : '' }, rest[0]), rest.slice(1).join('')),
        h('div', { class: 'lchoices' }, btns),
        h('p', { class: 'note' }, h('b', null, 'Ghi nhớ:'), ' Trước e, ê, i viết gh, ngh. Trước các chữ khác viết g, ng.'),
        dotsRow(Q.length, i)));
      UI.progress((i + 1) + ' / ' + Q.length);
      UI.guide(i === 0 ? ['s:dk-intro', 's:listen', 'w:' + w] : ['s:listen', 'w:' + w], { show: ['s:dk-intro'] });
    };
    show();
  }
};

/* ---------- 5. Đọc từ, đọc cụm từ ---------- */
function pictureChoice({ title, cls, items, picOf, distract, sayAfter, guideId, doneText }) {
  let i = 0;
  const show = () => {
    const it = items[i]; const right = picOf(it); let wrong = 0, locked = false;
    const opts = shuffle([right, ...distract(it, right)]);
    const card = h('button', { class: 'wordcard ' + (cls || ''), type: 'button', 'aria-label': title }, it);
    card.addEventListener('click', () => { if (locked || wrong >= 2) Speech.say(['w:' + it]); else { bounce(card, 'shake', 500); Speech.say([guideId]); } });
    const btns = opts.map((p, n) => h('button', { class: 'choice', type: 'button', 'aria-label': 'Tranh ' + (n + 1), html: ICONS[p], onclick: e => {
      if (locked) return; const el = e.currentTarget;
      if (p === right) {
        locked = true; el.classList.add('right'); UI.ok(el, [pick(PRAISE), ...sayAfter(it)]);
        later(() => { i++; if (i < items.length) show(); else UI.finish(items.length, doneText(items.length)); }, 2000);
      } else {
        wrong++; UI.no(el, wrong >= 2 ? [pick(RETRY), 'w:' + it] : [pick(RETRY)]);
        if (wrong >= 2) UI.hint(btns[opts.indexOf(right)]);
      }
    } }));
    UI.stage.replaceChildren(card, h('div', { class: 'choices' }, btns), dotsRow(items.length, i));
    UI.progress((i + 1) + ' / ' + items.length);
    UI.guide([guideId], { silent: i > 0 });
  };
  show();
}
GAMES.g5 = {
  num: 5, title: 'Đọc từ, đọc cụm từ', icon: 'readCard', desc: 'Nối phụ âm ghép với tranh, tự đọc từ và cụm từ rồi chọn tranh',
  levels: ['Nối chữ với tranh', 'Đọc từ', 'Đọc cụm từ'], chain: true,
  start(level) { [this.match, this.words, this.phrases][level].call(this); },
  match() {
    let b = 0, total = 0;
    const show = () => {
      const set = MATCH_BOARDS[b]; const picker = Picker(); let done = 0; const wrongs = new Map();
      const zones = shuffle(set.slice()).map(d => {
        const w = CARD_WORD[d]; const dock = h('div', { class: 'mdock', 'aria-hidden': 'true' });
        const z = h('div', { class: 'mzone', 'aria-label': 'Tranh ' + w }, h('span', { class: 'mpic', html: ICONS[WORD_PIC[w]] }), dock);
        z._d = d; z._w = w; z._dock = dock;
        z.addEventListener('click', () => { if (!picker.get() && !z._done) Speech.say(['w:' + w]); });
        return z;
      });
      const tray = h('div', { class: 'tray' });
      const place = (tile, zone) => {
        if (zone._done) return false;
        if (tile._d === zone._d) {
          zone._done = true; zone._dock.textContent = zone._d; zone.classList.add('done'); tile.remove(); picker.clear(); done++; total++;
          UI.ok(zone, ['d:' + zone._d, 'w:' + zone._w]); UI.progress(total + ' / 11');
          if (done === set.length) later(() => {
            b++;
            if (b < MATCH_BOARDS.length) show(); else UI.finish(11, 'Các bạn đã nối đúng 11 phụ âm ghép với tranh.');
          }, 2000);
          return true;
        }
        const n = (wrongs.get(tile) || 0) + 1; wrongs.set(tile, n);
        UI.no(tile, [pick(RETRY)]);
        if (n >= 2) UI.hint(zones.find(z => z._d === tile._d));
        return false;
      };
      shuffle(set.slice()).forEach(d => {
        const t = h('button', { class: 'tile wide', type: 'button', 'aria-label': 'Phụ âm ghép ' + d }, d); t._d = d;
        draggable(t, { zones: () => zones.filter(z => !z._done), onPick: () => Speech.say(['d:' + d]), onTap: el => picker.toggle(el), onDrop: place });
        tray.append(t);
      });
      zones.forEach(z => asZone(z, picker, place));
      UI.stage.replaceChildren(h('div', { class: 'mzones' }, zones), tray, dotsRow(MATCH_BOARDS.length, b));
      UI.progress(total + ' / 11');
      UI.guide(['s:g5-match'], { silent: b > 0 });
    };
    show();
  },
  words() {
    const pool = shuffle(READ_WORDS.filter(w => w !== 'gió' && w !== 'giỏ')).slice(0, 8);
    const items = shuffle([...pool, 'gió', 'giỏ']);
    pictureChoice({
      title: 'Từ cần đọc', items, guideId: 's:g5-read',
      picOf: w => WORD_PIC[w],
      distract: (w, right) => {
        const near = w === 'gió' ? ['basket'] : w === 'giỏ' ? ['wind'] : [];
        const rest = shuffle(READ_WORDS.map(x => WORD_PIC[x]).filter(p => p !== right && !near.includes(p)));
        return [...near, ...rest].slice(0, 2);
      },
      sayAfter: w => ['w:' + w],
      doneText: n => 'Các bạn đã tự đọc đúng ' + n + ' từ.'
    });
  },
  phrases() {
    const items = shuffle(Object.keys(PHRASE_PIC));
    pictureChoice({
      title: 'Cụm từ cần đọc', cls: 'phrase', items, guideId: 's:g5-phrase',
      picOf: p => PHRASE_PIC[p],
      distract: (p, right) => {
        const near = PHRASE_TRAP[p] ? [PHRASE_TRAP[p]] : [];
        const rest = shuffle(Object.values(PHRASE_PIC).filter(x => x !== right));
        return [...near, ...rest].slice(0, 2);
      },
      sayAfter: p => ['w:' + p],
      doneText: n => 'Các bạn đã đọc đúng ' + n + ' cụm từ.'
    });
  }
};

/* ---------- 6. Luyện nói ---------- */
GAMES.g6 = {
  num: 6, title: 'Luyện nói', icon: 'speak', desc: 'Nói “Đây là …” theo tranh, rồi tô màu theo câu “… màu …”',
  levels: ['Đây là …', '… có màu …'], chain: true,
  start(level) { [this.say, this.paint][level].call(this); },
  say() {
    const Q = shuffle(SAY_THIS.slice()).slice(0, 8); let i = 0;
    const show = () => {
      const [pic, sent] = Q[i];
      const sentence = h('p', { class: 'sentence wait' }, 'Đây là …');
      const btnNext = h('button', { class: 'btn ghost', type: 'button', disabled: true, onclick: () => { i++; if (i < Q.length) show(); else UI.finish(Q.length, 'Các bạn đã nói được ' + Q.length + ' câu “Đây là …”.'); } }, i === Q.length - 1 ? 'Hoàn thành ›' : 'Tranh tiếp theo ›');
      const reveal = () => { sentence.textContent = sent; sentence.classList.remove('wait'); btnNext.disabled = false; UI.mascot('nod'); Speech.say(['k:' + sent, 's:g6-again']); };
      const btnHear = h('button', { class: 'btn', type: 'button', html: SPEAKER + '<span>Nghe Trâu Con nói</span>', onclick: reveal });
      UI.stage.replaceChildren(h('div', { class: 'speak' },
        h('button', { class: 'pic', type: 'button', 'aria-label': 'Tranh', html: ICONS[pic], onclick: reveal }),
        sentence, h('div', { class: 'speak-bar' }, btnHear, btnNext), dotsRow(Q.length, i)));
      UI.progress((i + 1) + ' / ' + Q.length);
      UI.guide(['s:g6-say'], { silent: i > 0 });
    };
    show();
  },
  paint() {
    const Q = shuffle(PAINT_ITEMS.slice()); let i = 0;
    const show = () => {
      const it = Q[i]; let wrong = 0, locked = false;
      const pic = h('button', { class: 'pic', type: 'button', 'aria-label': 'Nghe lại câu', html: PAINT[it.pic](UNCOLORED), onclick: () => Speech.say(['k:' + it.say]) });
      const sentence = h('p', { class: 'sentence wait' }, '… màu …');
      const sws = Object.keys(COLOR_NAME).map(c => h('button', { class: 'swatch', type: 'button', style: '--c:' + COLORS[c].hex, 'aria-label': 'Màu ' + COLOR_NAME[c], onclick: e => {
        if (locked) return; const el = e.currentTarget;
        pic.innerHTML = PAINT[it.pic](COLORS[c].hex);
        if (c === it.color) {
          locked = true; sentence.textContent = it.say; sentence.classList.remove('wait');
          UI.ok([el, pic], [pick(PRAISE), 'k:' + it.say]);
          later(() => { i++; if (i < Q.length) show(); else UI.finish(Q.length, 'Các bạn đã tô đúng màu cho 5 bức tranh.'); }, 2600);
        } else {
          wrong++; UI.no(el, ['m:' + c, pick(RETRY), 'k:' + it.say]);
          later(() => { if (!locked) pic.innerHTML = PAINT[it.pic](UNCOLORED); }, 900);
          if (wrong >= 2) UI.hint(sws[Object.keys(COLOR_NAME).indexOf(it.color)]);
        }
      } }, h('i'), COLOR_NAME[c]));
      UI.stage.replaceChildren(h('div', { class: 'speak' }, pic, sentence, h('div', { class: 'swatches' }, sws), dotsRow(Q.length, i)));
      UI.progress((i + 1) + ' / ' + Q.length);
      UI.guide(i === 0 ? ['s:g6-paint', 'k:' + it.say] : ['k:' + it.say], { show: ['s:g6-paint'] });
    };
    show();
  }
};

/* ---------- 7. Săn phụ âm ghép trong thơ ---------- */
GAMES.g7 = {
  num: 7, title: 'Săn phụ âm ghép trong thơ', icon: 'hunt', desc: 'Tìm các tiếng có phụ âm ghép đứng đầu trong bài thơ “Lên Sáu”',
  levels: ['6 câu đầu', '6 câu sau'], chain: true,
  start(level) {
    const idxs = level === 0 ? [0, 1, 2, 3, 4, 5] : [6, 7, 8, 9, 10, 11];
    let found = 0, wrong = 0, need = 0, done = false; const targets = [];
    const count = h('p', { class: 'find-count' });
    const setCount = () => { count.textContent = done ? 'Tìm đủ rồi!' : 'Còn ' + (need - found) + ' tiếng có phụ âm ghép đang trốn'; };
    const lines = idxs.map(li => h('div', { class: 'hline' }, POEM[li].split(' ').map(tok => {
      const w = VN.letters(tok), lw = w.toLowerCase(), isT = VN.hasDigraphOnset(w);
      const b = h('button', { class: 'wbtn', type: 'button', 'aria-label': 'Tiếng ' + w }, tok);
      if (isT) { need++; targets.push(b); }
      b.addEventListener('click', () => {
        if (done || b._found) return;
        App.unlockAudio();
        if (isT) {
          b._found = true; found++; b.classList.add('found');
          const on = VN.onsetOf(w), cs = VN.chars(tok), n = Array.from(on).length;
          b.replaceChildren(h('span', { class: 'dg' }, cs.slice(0, n).join('')), cs.slice(n).join(''));
          Sfx.ok(); bounce(b, 'pop-ok'); UI.mascot('nod'); Speech.say(['d:' + on, 'w:' + lw]); UI.progress(found + ' / ' + need);
          if (found === need) { done = true; setCount(); later(() => UI.ok(null, ['s:all']), 900); later(() => UI.finish(need, 'Các bạn đã tìm đủ ' + need + ' tiếng có phụ âm ghép trong 6 câu thơ.'), 2600); }
          else setCount();
        } else {
          wrong++; UI.no(b, [VN.hasDigraphCoda(w) ? 's:g7-end' : 's:g7-none']);
          if (wrong % 2 === 0) { const t = targets.find(x => !x._found); if (t) UI.hint(t); }
        }
      });
      return b;
    })));
    setCount();
    UI.stage.append(h('div', { class: 'poem hunt' },
      h('button', { class: 'poem-head', type: 'button', onclick: () => Speech.say(idxs.map(k => 'p:' + (k + 1))) }, h('strong', null, 'LÊN SÁU'), h('span', null, 'Chạm vào đây để nghe ' + (level === 0 ? '6 câu đầu' : '6 câu sau'))),
      h('div', { style: 'margin-top:10px' }, lines), count));
    UI.progress('0 / ' + need);
    UI.guide(['s:g7-intro']);
  }
};
GAME_ORDER.push('g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7');
