// Kiểm thử phần chuẩn chữ tiếng Việt (mục 5 của prompt chuẩn).  Chạy: node --test tests/chu-viet.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const { VN } = createRequire(import.meta.url)('../chung/chu-viet.js');
const nfd = s => s.normalize('NFD');

test('lưu và so sánh ở dạng NFC, vẫn nhận chữ NFD', () => {
  for (const w of ['tiếng', 'Việt', 'quả', 'mười', 'nghệ', 'đường']) {
    assert.equal(VN.nfc(nfd(w)), w.normalize('NFC'));
    assert.ok(VN.same(nfd(w), w));
  }
});

test('bỏ thanh chỉ gỡ 5 dấu thanh, giữ ă â ê ô ơ ư đ', () => {
  const cases = { 'ặ': 'ă', 'ổ': 'ô', 'ở': 'ơ', 'ầ': 'â', 'ể': 'ê', 'ữ': 'ư', 'đá': 'đa', 'Tiếng Việt': 'Tiêng Viêt', 'quả': 'qua', 'nghệ': 'nghê', 'ă': 'ă', 'đ': 'đ' };
  for (const [a, b] of Object.entries(cases)) {
    assert.equal(VN.stripTone(a), b, a);
    assert.equal(VN.stripTone(nfd(a)), b, a + ' (NFD)');
  }
});

test('tách thanh: 6 thanh, không dấu là thanh ngang, dấu mũ/trăng/móc không phải dấu thanh', () => {
  const cases = { la: 'ngang', lá: 'sac', là: 'huyen', lả: 'hoi', lã: 'nga', lạ: 'nang', â: 'ngang', ơ: 'ngang', ư: 'ngang', ă: 'ngang', đô: 'ngang', ấm: 'sac', ở: 'hoi', mười: 'huyen' };
  for (const [w, t] of Object.entries(cases)) { assert.equal(VN.toneOf(w), t, w); assert.equal(VN.toneOf(nfd(w)), t, w + ' (NFD)'); }
});

test('đặt dấu lên âm chính theo kiểu trong slide (hóa, quả, mười, tiếng)', () => {
  const cases = [['hoa', 'sac', 'hóa'], ['qua', 'hoi', 'quả'], ['mươi', 'huyen', 'mười'], ['tiêng', 'sac', 'tiếng'],
    ['la', 'nang', 'lạ'], ['ma', 'nga', 'mã'], ['gia', 'huyen', 'già'], ['nghê', 'nang', 'nghệ'], ['chơ', 'sac', 'chớ'], ['la', 'ngang', 'la']];
  for (const [w, t, want] of cases) assert.equal(VN.addTone(w, t), want.normalize('NFC'), `${w} + ${t}`);
  for (const t of ['sac', 'huyen', 'hoi', 'nga', 'nang']) assert.equal(VN.toneOf(VN.addTone('ba', t)), t);
});

test('phân tích tiếng theo quy ước lớp 1: phụ âm ghép là một âm đầu', () => {
  const cases = {
    'chó': ['ch', 'o', '', 'sac'], 'quả': ['qu', 'a', '', 'hoi'], 'giỏ': ['gi', 'o', '', 'hoi'], 'nghệ': ['ngh', 'ê', '', 'nang'],
    'nhà': ['nh', 'a', '', 'huyen'], 'trống': ['tr', 'ô', 'ng', 'sac'], 'sen': ['s', 'e', 'n', 'ngang'], 'ốc': ['', 'ô', 'c', 'sac'],
    'ô': ['', 'ô', '', 'ngang'], 'cặp': ['c', 'ă', 'p', 'nang'], 'gì': ['gi', 'i', '', 'huyen'], 'tôm': ['t', 'ô', 'm', 'ngang']
  };
  for (const [w, [onset, nucleus, coda, tone]] of Object.entries(cases)) {
    assert.deepEqual(VN.analyze(w), { onset, nucleus, coda, tone }, w);
    assert.deepEqual(VN.analyze(nfd(w)), { onset, nucleus, coda, tone }, w + ' (NFD)');
  }
});

test('tên file ghi âm kiểu Telex', () => {
  assert.equal(VN.telex('chó nhỏ'), 'chos-nhor');
  assert.equal(VN.telex('đu đủ'), 'ddu-ddur');
  assert.equal(VN.telex('ă'), 'aw');
  assert.equal(VN.telex('Tiếng Việt'), 'tieengs-vieetj');
});
