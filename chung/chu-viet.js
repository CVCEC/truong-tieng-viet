'use strict';
/* =====================================================================
   CHUẨN CHỮ TIẾNG VIỆT — NFC/NFD, tách thanh, bỏ thanh, đặt dấu, phân tích tiếng
   Chỉ 5 dấu thanh bị gỡ: sắc U+0301, huyền U+0300, hỏi U+0309, ngã U+0303, nặng U+0323.
   Dấu mũ (U+0302), dấu trăng (U+0306), dấu móc (U+031B) và chữ đ được giữ nguyên.
   Phụ âm ghép theo quy ước lớp 1: ch, gh, gi, kh, ng, ngh, nh, ph, qu, th, tr là một âm đầu.
   ===================================================================== */
const ALPHABET = ['a','ă','â','b','c','d','đ','e','ê','g','h','i','k','l','m','n','o','ô','ơ','p','q','r','s','t','u','ư','v','x','y'];
const DIGRAPHS = ['ch','gh','gi','kh','ng','ngh','nh','ph','qu','th','tr'];
const VN = (() => {
  const TONE_OF_MARK = { '́': 'sac', '̀': 'huyen', '̉': 'hoi', '̃': 'nga', '̣': 'nang' };
  const MARK = { ngang: '', sac: '́', huyen: '̀', hoi: '̉', nga: '̃', nang: '̣' };
  const TONE_RE = /[̣̀́̃̉]/g;
  const VOWELS = new Set(['a','ă','â','e','ê','i','o','ô','ơ','u','ư','y']);
  const ONSETS = ['ngh', 'ch', 'gh', 'kh', 'ng', 'nh', 'ph', 'qu', 'th', 'tr', 'gi']; // dài trước, ngắn sau
  const CODAS = ['ch', 'ng', 'nh', 'c', 'm', 'n', 'p', 't'];
  const nfc = s => String(s).normalize('NFC');
  const chars = s => Array.from(nfc(s));
  const stripTone = s => String(s).normalize('NFD').replace(TONE_RE, '').normalize('NFC');
  const toneOf = s => { for (const ch of String(s).normalize('NFD')) if (TONE_OF_MARK[ch]) return TONE_OF_MARK[ch]; return 'ngang'; };
  const base = ch => stripTone(ch).toLowerCase();
  const isVowel = ch => VOWELS.has(base(ch));
  const isConsonant = ch => !isVowel(ch) && ALPHABET.includes(base(ch));
  const letters = s => nfc(s).replace(/[^\p{L}]/gu, ''); // bỏ dấu câu quanh một tiếng
  function mainVowelIndex(word) {
    const cs = chars(stripTone(word).toLowerCase());
    let start = 0;
    if (cs[0] === 'q' && cs[1] === 'u') start = 2;
    else if (cs[0] === 'g' && cs[1] === 'i' && cs.length > 2 && VOWELS.has(cs[2])) start = 2;
    const vi = [];
    for (let i = start; i < cs.length; i++) if (VOWELS.has(cs[i])) vi.push(i);
    if (!vi.length) return start === 2 ? 1 : -1;
    if (vi.length === 1) return vi[0];
    const special = vi.filter(i => 'ăâêôơư'.includes(cs[i]));
    if (special.length) return special[special.length - 1];
    return vi[vi.length - 1] === cs.length - 1 ? vi[vi.length - 2] : vi[vi.length - 1];
  }
  function addTone(word, tone) {
    const plain = stripTone(word);
    if (!MARK[tone]) return plain;
    const cs = chars(plain); const i = mainVowelIndex(plain);
    if (i < 0) return plain;
    cs[i] = nfc(cs[i] + MARK[tone]);
    return cs.join('');
  }
  /* Âm đầu: phụ âm ghép (ngh, ch, gh, gi, kh, ng, nh, ph, qu, th, tr) hoặc một phụ âm đơn; không có thì để trống */
  function onsetOf(word) {
    const s = stripTone(letters(word)).toLowerCase();
    for (const o of ONSETS) if (s.startsWith(o) && (o !== 'gi' || s.length >= 2)) return o;
    const c = Array.from(s)[0];
    return c && !VOWELS.has(c) ? c : '';
  }
  function analyze(syllable) {
    const s = stripTone(letters(syllable)).toLowerCase();
    const onset = onsetOf(s);
    let rest = Array.from(s).slice(Array.from(onset).length).join('');
    if (onset === 'gi' && (!rest || !VOWELS.has(Array.from(rest)[0]))) rest = 'i' + rest; // gì, gìn: chữ i vừa thuộc gi vừa là âm chính
    let coda = '';
    for (const c of CODAS) if (rest.length > c.length && rest.endsWith(c)) { coda = c; break; }
    return { onset, nucleus: rest.slice(0, rest.length - coda.length), coda, tone: toneOf(syllable) };
  }
  const hasDigraphOnset = w => DIGRAPHS.includes(onsetOf(w));
  const hasDigraphCoda = w => ['ch', 'ng', 'nh'].includes(analyze(w).coda);
  function telex(s) {
    const T = { '́': 's', '̀': 'f', '̉': 'r', '̃': 'x', '̣': 'j' };
    return String(s).toLowerCase().split(/\s+/).map(w => {
      let tone = '', out = '';
      for (const ch of w.normalize('NFD')) { if (T[ch]) tone = T[ch]; else out += ch; }
      out = out.normalize('NFC').replace(/đ/g, 'dd').replace(/ă/g, 'aw').replace(/â/g, 'aa').replace(/ê/g, 'ee').replace(/ô/g, 'oo').replace(/ơ/g, 'ow').replace(/ư/g, 'uw');
      return (out + tone).replace(/[^a-z0-9]/g, '');
    }).filter(Boolean).join('-');
  }
  const same = (a, b) => nfc(a) === nfc(b);
  return { nfc, chars, letters, stripTone, toneOf, base, isVowel, isConsonant, mainVowelIndex, addTone, onsetOf, analyze, hasDigraphOnset, hasDigraphCoda, telex, same, MARK, VOWELS };
})();
/* Cho phép chạy kiểm thử bằng Node (tests/chu-viet.test.mjs) */
if (typeof module !== 'undefined' && module.exports) module.exports = { VN, ALPHABET, DIGRAPHS };
