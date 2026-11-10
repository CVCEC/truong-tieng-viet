/* =====================================================================
   BỘ 11 TRÒ CHƠI CHUNG CHO BÀI DẠY ÂM VÀ VẦN (Bài 3–70)
   Mỗi bài chỉ khai báo dữ liệu AM trong bai-NN/bai.js; mọi trò chơi dưới đây đọc từ AM.
   Thứ tự theo slide: thơ → ôn bài cũ → âm mới → bảng ghép thanh → đọc từ → (4 trò ôn từ: hái quả, nối từ, lật thẻ, đoán tranh) → đọc câu → tô chữ.

   AM = {
     am:   ['b', 'c'],                         hai âm của bài
     kho:  2, tho: [...],                       số khổ và các câu thơ "Lên Sáu"
     onCu: { chu: [...], tu: [...] },           chữ và từ của bài trước (tu có thể bỏ trống)
     khoa: [{ am, van, tieng, tu }],            tiếng khóa: âm + vần (+ thanh) = tiếng → từ khóa
     bang: { b: ['a', 'ê', …] },                các vần trong bảng ghép thanh của từng âm
     tu:   { b: [...], c: [...] },              từ luyện đọc của từng âm (mỗi từ có tranh trong TRANH)
     cau:  [...],                               câu ứng dụng (mỗi câu có tranh trong TRANH)
     luat: { ten, chon, muc: [{ w, dung }] },   (không bắt buộc) vòng luật chính tả, vd. c hay k
     loai: 'van'                                (bài dạy vần, Bài 22 trở đi) am = các vần; khoa: [{ am: vần, dau: âm đầu, tieng, tu }];
                                                bang: { ia: ['b', 'ch', …] } là các âm đầu ghép với vần; tu: { ia: [...] }
     net:  { b: [đường nét…] }                  nét chữ để tô, đơn vị ô li, y = 0 là đường kẻ dưới
   }
   ===================================================================== */
Object.assign(PHRASES, {
  // Trâu Con nói ngắn: một câu lúc bắt đầu trò chơi, sau đó chỉ đọc chữ / từ cần tìm
  'am-tho-intro': 'Mình đọc một câu, các bạn đọc câu tiếp theo nhé!',
  'am-tho-title': 'Lên Sáu. Thơ Tản Đà.',
  'am-tho-you': 'Đến lượt các bạn!',
  'am-tho-order': 'Các bạn xếp câu thơ cho đúng nhé!',
  'am-on-chu': 'Nghe rồi chạm vào chữ đúng nhé!',
  'am-on-tu': 'Nghe rồi chạm vào từ đúng nhé!',
  'am-moi-intro': 'Các bạn kéo chữ vào ô để ghép tiếng nhé!',
  'am-moi-tone': 'Thêm dấu thanh nhé!',
  'am-bang-intro': 'Nghe rồi chạm vào tiếng đúng nhé!',
  'am-dau-intro': 'Nghe rồi đặt dấu thanh nhé!',
  'am-dau-nang': 'Dấu nặng đặt dưới chữ nhé.',
  'am-tu-intro': 'Các bạn đọc từ, rồi chạm vào tranh đúng nhé!',
  'am-hai-intro': 'Các bạn hái quả có âm',
  'am-hai-intro-van': 'Các bạn hái quả có',
  'am-noi-intro': 'Các bạn nối từ với tranh nhé!',
  'am-lat-intro': 'Các bạn lật thẻ, tìm từ và tranh giống nhau nhé!',
  'am-doan-intro': 'Tranh gì đây? Các bạn mở ô, rồi chọn từ đúng nhé!',
  'am-cau-intro': 'Các bạn đọc câu, rồi chạm vào tranh đúng nhé!',
  'am-xep-intro': 'Các bạn xếp các tiếng thành câu nhé!',
  'am-luat-intro': 'Chọn chữ đúng để điền nhé!',
  'am-to-intro': 'Các bạn tô theo nét chấm đỏ nhé!',
  'am-to-start': 'Bắt đầu từ chấm xanh nhé!',
  'am-to-off': 'Tô sát nét chấm đỏ nhé!',
  'am-to-next': 'Nét tiếp theo nhé!'
});

/* Khen ngắn: thỉnh thoảng (1 lần trong 3 lần đúng) mới nói "Giỏi quá!", còn lại chỉ đọc chữ / từ vừa làm đúng */
let amWins = 0;
const yay = (...ids) => (++amWins % 3 === 0 ? [pick(PRAISE), ...ids] : ids);

const AmLib = (() => {
  const isVan = () => AM.loai === 'van';                                     // bài dạy vần (từ Bài 22); AM khai báo sau, nên đọc lúc gọi
  // mã đọc: âm đơn (bờ, cờ), âm ghép (chờ, nhờ) hoặc vần (ia, an…)
  const nameOf = a => (DIGRAPHS.includes(a) ? 'd:' : Array.from(a).length === 1 ? 'l:' : 'v:') + a;
  // Ghép đơn vị của bài với một phần trong bảng ghép: âm + vần, hoặc âm đầu + vần
  // Vần kết thúc bằng c, t, p, ch chỉ đi với thanh sắc và thanh nặng
  const thanh = a => (isVan() && /(c|t|p|ch)$/.test(a) ? ['sac', 'nang'] : TONES);
  const ghep = (a, x, t = 'ngang') => VN.addTone(isVan() ? x + a : a + x, t);
  // Phần của tiếng mà bài đang dạy: âm đầu, hoặc vần (bỏ dấu thanh)
  const phan = t => { if (!isVan()) return VN.onsetOf(t); const z = VN.analyze(t); return VN.stripTone(z.nucleus + z.coda); };
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const lettersOf = s => VN.chars(VN.stripTone(s).toLowerCase());
  const allWords = () => Object.values(AM.tu).flat();
  const pic = key => TRANH[key] || '';
  // Mỗi khổ thơ có mã riêng (tho-2-1.mp3…) để các bài cùng khổ dùng chung file ghi âm
  const pid = i => 'p:' + AM.kho + '-' + (i + 1);
  // Nét chữ: bài có thể khai báo riêng trong AM.net, không thì lấy mẫu chuẩn NET_CHU (chung/net-chu.js); vần, tiếng được ghép từ các chữ
  const netOf = a => (AM.net && AM.net[a] && AM.net[a].length) ? AM.net[a] : netChu(a);
  // Kho từ có tranh của bài (từ khóa + từ luyện đọc), dùng cho 4 trò ôn từ
  const vocab = () => [...new Set([...AM.khoa.map(k => k.tu), ...allWords()])].filter(w => TRANH[w]);
  const sylls = w => w.split(' ').map(t => VN.letters(t).toLowerCase()).filter(Boolean);
  // Tiếng / từ có âm a ở đầu một tiếng (h trong "nh", "kh" không tính)
  const hasAm = (w, a) => sylls(w).some(t => phan(t) === a);
  return { get VAN() { return isVan(); }, get loai() { return isVan() ? 'vần' : 'âm'; }, thanh, nameOf, ghep, phan, cap, lettersOf, allWords, pic, pid, netOf, vocab, sylls, hasAm };
})();

/* Đăng ký mọi câu Trâu Con nói trong bộ trò chơi vào kho câu nói (để lập AM-THANH.md) */
function amRegisterClips() {
  const W = new Set([...AM.khoa.flatMap(k => [k.tieng, k.tu]), ...AmLib.allWords(), ...(AM.onCu.tu || [])]);
  Object.entries(AM.bang).forEach(([a, vs]) => vs.forEach(v => AmLib.thanh(a).forEach(t => W.add(AmLib.ghep(a, v, t)))));
  [...AM.am, ...AM.onCu.chu].forEach(a => { if (AmLib.nameOf(a).startsWith('v:')) CLIPS['v:' + a] = 'vần ' + a; });
  if (AM.luat) AM.luat.muc.forEach(m => W.add(m.w));
  AM.cau.forEach(c => c.split(' ').forEach(t => W.add(VN.letters(t).toLowerCase())));
  [...W].forEach(w => AmLib.sylls(w).forEach(t => W.add(t)));
  W.forEach(w => { CLIPS['w:' + w] = w; });
  AM.tho.forEach((line, i) => { CLIPS[AmLib.pid(i)] = line; });
  AM.cau.forEach(c => { CLIPS['k:' + c] = c; });
}

function amToneCard(t) {
  const c = h('button', { class: 'tcard', type: 'button', 'aria-label': 'Thanh ' + TONE_NAME[t], html: TONE_ICON[t] }, h('span', null, TONE_NAME[t]));
  c._tone = t; return c;
}

/* Chọn tranh đúng cho một chữ/câu: Trâu Con chỉ đọc sau khi các bạn đã chọn (hoặc sai hai lần) */
function amPicChoice({ items, cls, clipOf, guideId, doneText, nOpts = 3 }) {
  let i = 0;
  const show = () => {
    const it = items[i]; let wrong = 0, locked = false;
    const others = shuffle(items.filter(x => x !== it && AmLib.pic(x) && AmLib.pic(x) !== AmLib.pic(it))).slice(0, nOpts - 1);
    const opts = shuffle([it, ...others]);
    const card = h('button', { class: 'wordcard ' + (cls || ''), type: 'button', 'aria-label': 'Chữ cần đọc' }, it);
    card.addEventListener('click', () => { if (locked || wrong >= 2) Speech.say([clipOf(it)]); else bounce(card, 'shake', 500); });
    const btns = opts.map((p, n) => h('button', { class: 'choice', type: 'button', 'aria-label': 'Tranh ' + (n + 1), html: AmLib.pic(p), onclick: e => {
      if (locked) return; const el = e.currentTarget;
      if (p === it) {
        locked = true; el.classList.add('right'); UI.ok(el, yay(clipOf(it)));
        later(() => { i++; if (i < items.length) show(); else UI.finish(items.length, doneText(items.length)); }, 2300);
      } else {
        wrong++; UI.no(el, wrong >= 2 ? [clipOf(it)] : []);
        if (wrong >= 2) UI.hint(btns[opts.indexOf(it)]);
      }
    } }));
    UI.stage.replaceChildren(card, h('div', { class: 'choices' + (opts.length === 2 ? ' two' : '') }, btns), dotsRow(items.length, i));
    UI.progress((i + 1) + ' / ' + items.length);
    UI.guide([guideId], { silent: i > 0 });
  };
  show();
}

/* ---------- 1. Thơ "Lên Sáu" ---------- */
GAMES.g1 = {
  num: 1, title: 'Thơ “Lên Sáu”', icon: 'tho', desc: '', levels: ['Đọc tiếp sức', 'Xếp câu thơ'], chain: true,
  start(level) { [this.relay, this.order][level].call(this); },
  relay() {
    const my = Runner.seq, N = AM.tho.length; let idx = 0;
    const lines = AM.tho.map((t, i) => h('button', { class: 'pline', type: 'button', onclick: () => { App.unlockAudio(); Speech.say([AmLib.pid(i)]); } }, h('span', { class: 'who' }), h('span', { class: 'ltxt' }, t)));
    const btnDone = h('button', { class: 'btn', type: 'button', disabled: true }, 'Các bạn đọc xong ›');
    const btnAll = h('button', { class: 'btn ghost small', type: 'button', onclick: () => Speech.say(['s:am-tho-title', ...AM.tho.map((_, i) => AmLib.pid(i))]) }, 'Nghe cả khổ');
    const mark = () => lines.forEach((b, i) => {
      b.classList.toggle('done', i < idx);
      b.classList.toggle('turn-trau', i === idx && idx % 2 === 0);
      b.classList.toggle('turn-you', i === idx && idx % 2 === 1);
      b.querySelector('.who').textContent = i === idx ? (idx % 2 === 0 ? 'Trâu Con đọc' : 'Các bạn đọc') : '';
    });
    const end = () => { idx = N; mark(); later(() => UI.finish(N, 'Các bạn đã đọc tiếp sức cả khổ thơ.'), 500); };
    const trauTurn = async () => {
      if (my !== Runner.seq) return;
      mark(); btnDone.disabled = true; UI.mascot('nod'); UI.progress(idx + ' / ' + N);
      $('#guideText').textContent = 'Mình đọc câu ' + (idx + 1) + ' nhé!';
      await Speech.say([AmLib.pid(idx)]);
      if (my !== Runner.seq) return;
      await wait(400);
      idx++; UI.progress(idx + ' / ' + N);
      if (idx >= N) return end();
      youTurn();
    };
    const youTurn = () => {
      mark(); btnDone.disabled = false;
      UI.guide(['s:am-tho-you']);
      try { lines[idx].scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
    };
    btnDone.addEventListener('click', () => {
      if (btnDone.disabled) return;
      btnDone.disabled = true; Sfx.ok(); UI.mascot('nod'); bounce(lines[idx], 'pop-ok');
      idx++; UI.progress(idx + ' / ' + N);
      if (idx >= N) return end();
      later(trauTurn, 600);
    });
    const half = Math.ceil(N / 2);
    UI.stage.append(h('div', { class: 'poem' },
      h('button', { class: 'poem-head', type: 'button', onclick: () => Speech.say(['s:am-tho-title']) }, h('strong', null, 'LÊN SÁU'), h('span', null, 'Thơ: Tản Đà · Khổ ' + AM.kho)),
      h('div', { class: 'poem-cols' }, h('div', null, lines.slice(0, half)), h('div', null, lines.slice(half))),
      h('div', { class: 'relay-bar' }, btnDone, btnAll)));
    mark(); UI.progress('0 / ' + N);
    UI.guide(['s:am-tho-intro']).then(() => { if (my === Runner.seq) later(trauTurn, 300); });
  },
  order() {
    const N = AM.tho.length, half = Math.ceil(N / 2); let part = 0, done = 0;
    const show = () => {
      const idxs = part === 0 ? [...Array(half).keys()] : [...Array(N - half).keys()].map(k => k + half);
      let order = shuffle(idxs.slice());
      if (order.every((v, k) => v === idxs[k])) order = order.reverse();
      const picker = Picker(); let placed = 0;
      const slots = idxs.map(ix => { const s = h('div', { class: 'slot-line', 'aria-label': 'Chỗ câu ' + (ix - idxs[0] + 1) }); s._ix = ix; return s; });
      const tryPlace = (chip, slot) => {
        if (slot._filled || chip._ix !== slot._ix) { UI.no(chip, []); return false; }
        slot._filled = true; slot.classList.add('filled'); slot.append(AM.tho[chip._ix]); chip.remove(); picker.clear(); placed++; done++;
        UI.ok(slot, null); Speech.say([AmLib.pid(chip._ix)]);
        UI.progress(done + ' / ' + N);
        if (placed === idxs.length) later(() => {
          if (part === 0) { part = 1; later(show, 900); }
          else UI.finish(N, 'Các bạn đã xếp đúng cả khổ thơ.');
        }, 900);
        return true;
      };
      slots.forEach(s => asZone(s, picker, tryPlace));
      const chips = order.map(ix => {
        const c = h('button', { class: 'lchip', type: 'button' }, AM.tho[ix]); c._ix = ix;
        draggable(c, { zones: () => slots, onPick: () => Speech.say([AmLib.pid(ix)]), onTap: el => picker.toggle(el), onDrop: (el, z) => tryPlace(el, z) });
        return c;
      });
      UI.stage.replaceChildren(h('div', { class: 'order' }, h('div', { class: 'slots' }, slots), h('div', { class: 'pool' }, chips)));
      UI.progress(done + ' / ' + N);
      UI.guide(['s:am-tho-order'], { silent: part > 0 });
    };
    show();
  }
};

/* ---------- 2. Ôn bài cũ ---------- */
GAMES.g2 = {
  num: 2, title: 'Ôn bài cũ', icon: 'on', desc: '', levels: [], chain: true,
  start(level) { [this.letters, this.words][level].call(this); },
  letters() {
    const pool = AM.onCu.chu; const Q = shuffle(pool.slice()).slice(0, Math.min(6, pool.length)); let i = 0;
    const show = () => {
      const a = Q[i]; let wrong = 0, locked = false;
      const opts = shuffle([a, ...shuffle(pool.filter(x => x !== a)).slice(0, 2)]);
      const btns = opts.map(l => {
        const shown = Math.random() < 0.5 ? AmLib.cap(l) : l;
        return h('button', { class: 'lbtn', type: 'button', 'aria-label': 'Chữ ' + l, onclick: e => {
          if (locked) return; const el = e.currentTarget;
          if (l === a) {
            locked = true; el.classList.add('right'); UI.ok(el, yay(AmLib.nameOf(a)));
            later(() => { i++; if (i < Q.length) show(); else UI.finish(Q.length, 'Các bạn đã nhận ra đúng ' + Q.length + ' chữ của bài trước.'); }, 1600);
          } else { wrong++; UI.no(el, [AmLib.nameOf(a)]); if (wrong >= 2) UI.hint(btns[opts.indexOf(a)]); }
        } }, shown);
      });
      UI.stage.replaceChildren(
        h('button', { class: 'ear-btn', type: 'button', html: SPEAKER, onclick: () => Speech.say([AmLib.nameOf(a)]) }, 'Nghe lại'),
        h('div', { class: 'lchoices' }, btns), dotsRow(Q.length, i));
      UI.progress((i + 1) + ' / ' + Q.length);
      UI.guide(i === 0 ? ['s:am-on-chu', AmLib.nameOf(a)] : [AmLib.nameOf(a)], { show: ['s:am-on-chu'] });
    };
    show();
  },
  words() {
    const pool = AM.onCu.tu; const Q = shuffle(pool.slice()).slice(0, Math.min(6, pool.length)); let i = 0;
    const show = () => {
      const w = Q[i]; let wrong = 0, locked = false;
      const opts = shuffle([w, ...shuffle(pool.filter(x => x !== w)).slice(0, 2)]);
      const btns = opts.map(x => h('button', { class: 'lbtn', type: 'button', onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (x === w) {
          locked = true; el.classList.add('right'); UI.ok(el, yay('w:' + w));
          later(() => { i++; if (i < Q.length) show(); else UI.finish(Q.length, 'Các bạn đã đọc đúng ' + Q.length + ' từ của bài trước.'); }, 1700);
        } else { wrong++; UI.no(el, ['w:' + w]); if (wrong >= 2) UI.hint(btns[opts.indexOf(w)]); }
      } }, x));
      UI.stage.replaceChildren(
        h('button', { class: 'ear-btn', type: 'button', html: SPEAKER, onclick: () => Speech.say(['w:' + w]) }, 'Nghe lại'),
        h('div', { class: 'lchoices words' }, btns), dotsRow(Q.length, i));
      UI.progress((i + 1) + ' / ' + Q.length);
      UI.guide(i === 0 ? ['s:am-on-tu', 'w:' + w] : ['w:' + w], { show: ['s:am-on-tu'] });
    };
    show();
  }
};

/* ---------- 3. Làm quen âm mới: âm + vần (+ thanh) = tiếng → từ khóa ---------- */
GAMES.g3 = {
  num: 3, title: 'Làm quen âm mới', icon: 'ghep', desc: '', levels: [], chain: true,
  start(level) {
    const a = AM.am[level]; const items = AM.khoa.filter(k => k.am === a); let i = 0, total = 0;
    const show = () => {
      const k = items[i]; const plain = VN.stripTone(k.tieng); const tone = VN.toneOf(k.tieng);
      const need = AmLib.VAN ? [k.dau, k.am].filter(Boolean) : [k.am, ...AmLib.lettersOf(k.van)];
      const picker = Picker(); const wrongs = new Map(); let filled = 0;
      const slots = need.map((ch, n) => { const s = h('div', { class: 'cslot' + (Array.from(ch).length > 2 ? ' wide' : ''), 'aria-label': 'Ô chữ thứ ' + (n + 1) }); s._ch = ch; return s; });
      const res = h('span', { class: 'cres wait' }, '?');
      const word = h('span', { class: 'cword wait' }, k.tu);
      const eq = []; slots.forEach((s, n) => { if (n) eq.push(h('span', null, '+')); eq.push(s); });
      eq.push(h('span', null, '='), res);
      const tray = h('div', { class: 'tray' });
      const tones = h('div', { class: 'tones', hidden: true });
      const finish = () => {
        res.textContent = k.tieng; res.classList.remove('wait'); word.classList.remove('wait');
        UI.ok([res, word], ['w:' + k.tieng, 'w:' + k.tu]); total++;
        later(() => { i++; if (i < items.length) show(); else UI.finish(items.length * 2, 'Các bạn đã ghép đúng các tiếng có ' + AmLib.loai + ' ' + a + '.'); }, 3600);
      };
      const askTone = () => {
        res.textContent = plain; res.classList.remove('wait');
        tones.hidden = false; tray.hidden = true;
        let wrongT = 0;
        const place = (card, zone) => {
          if (zone !== res) return false;
          if (card._tone === tone) { picker.clear(); tones.hidden = true; finish(); return true; }
          wrongT++; UI.no(card, ['w:' + VN.addTone(plain, card._tone)]);
          if (wrongT >= 2) UI.hint(tones.querySelector('[aria-label="Thanh ' + TONE_NAME[tone] + '"]'));
          return false;
        };
        asZone(res, picker, place);
        AmLib.thanh(k.am).filter(t => t !== 'ngang').forEach(t => {
          const c = amToneCard(t);
          draggable(c, { zones: () => [res], onPick: () => Speech.say(['t:' + t]), onTap: el => picker.toggle(el), onDrop: place });
          tones.append(c);
        });
        UI.guide(['s:am-moi-tone']);
      };
      const place = (tile, slot) => {
        if (slot._done) return false;
        const at = slots.find(s => !s._done);
        if (tile._ch === slot._ch && slot === at) {
          slot._done = true; slot.textContent = tile._ch; slot.classList.add('filled'); tile.remove(); picker.clear(); filled++;
          Sfx.ok(); bounce(slot, 'pop-ok'); Speech.say([AmLib.nameOf(tile._ch)]);
          if (filled === need.length) { [...tray.children].forEach(t => t.remove()); if (tone === 'ngang') finish(); else later(askTone, 900); }
          return true;
        }
        const n = (wrongs.get(tile) || 0) + 1; wrongs.set(tile, n);
        UI.no(tile, []);
        if (n >= 2) { const s = slots.find(x => !x._done && x._ch === tile._ch); if (s) UI.hint(s); }
        return false;
      };
      const extra = (AmLib.VAN ? [...shuffle(AM.am.filter(c => !need.includes(c))).slice(0, 1), ...shuffle(['b', 'c', 'd', 'l', 'm', 'n', 'h', 't'].filter(c => !need.includes(c))).slice(0, 1)]
        : shuffle(['a', 'o', 'ô', 'e', 'i', 'u', ...AM.am].filter(c => !need.includes(c))).slice(0, 2));
      if (AmLib.VAN && extra.length < 2) extra.push(pick(['ê', 'ơ', 'ư'].filter(c => !need.includes(c))));
      let letters = shuffle([...need, ...extra]);
      if (letters.slice(0, need.length).join('') === need.join('')) letters = letters.reverse();
      letters.forEach(ch => {
        const t = h('button', { class: 'tile' + (Array.from(ch).length > 1 && !DIGRAPHS.includes(ch) ? ' wide' : ''), type: 'button', 'aria-label': (AmLib.VAN && ch === k.am ? 'Vần ' : 'Chữ ') + ch }, ch); t._ch = ch;
        draggable(t, { zones: () => slots.filter(s => !s._done), onPick: () => Speech.say([AmLib.nameOf(ch)]), onTap: el => picker.toggle(el), onDrop: place });
        tray.append(t);
      });
      slots.forEach(s => asZone(s, picker, place));
      UI.stage.replaceChildren(h('div', { class: 'compose' },
        h('button', { class: 'cpic', type: 'button', 'aria-label': 'Nghe từ ' + k.tu, html: AmLib.pic(k.tu), onclick: () => Speech.say(['w:' + k.tu]) }),
        word, h('div', { class: 'eq' }, eq), tray, tones, dotsRow(items.length, i)));
      UI.progress((i + 1) + ' / ' + items.length);
      UI.guide(i === 0 ? ['s:am-moi-intro', 'w:' + k.tieng] : ['w:' + k.tieng], { show: i === 0 ? ['s:am-moi-intro'] : ['Ghép tiếng ' + k.tieng] });
    };
    show();
  }
};

/* ---------- 4. Bảng ghép thanh + Đội dấu ---------- */
GAMES.g4 = {
  num: 4, title: 'Bảng ghép thanh', icon: 'bang', desc: '', levels: [], chain: true,
  start(level) { if (level < AM.am.length) this.board(AM.am[level]); else this.tone(); },
  board(a) {
    const vs = AM.bang[a];
    const cells = new Map();
    const TT = AmLib.thanh(a); const cols = { style: 'grid-template-columns:repeat(' + TT.length + ',minmax(0,1fr))' };
    const rows = vs.map(v => h('div', { class: 'tbl-row', ...cols }, TT.map(t => {
      const w = AmLib.ghep(a, v, t);
      const n = Array.from(w).length; const c = h('button', { class: 'tcell' + (n >= 5 ? ' l5' : n >= 4 ? ' l4' : ''), type: 'button' }, w); c._w = w; cells.set(w, c); return c;
    })));
    const head = h('div', { class: 'tbl-row', ...cols }, TT.map(t => h('span', { class: 'tbl-head', 'aria-label': 'Thanh ' + TONE_NAME[t], html: TONE_ICON[t] })));
    // 6 câu hỏi, mỗi thanh một lần, vần xoay vòng
    // 6 câu hỏi: mỗi thanh một lần, vần xoay vòng; vần có c, t, p, ch thì lấy 6 ô khác nhau
    const Q = TT.length === 6 ? shuffle(TONES.slice()).map((t, n) => AmLib.ghep(a, vs[n % vs.length], t))
      : shuffle(vs.flatMap(v => TT.map(t => AmLib.ghep(a, v, t)))).slice(0, 6);
    let i = 0, wrong = 0, locked = false;
    const ask = first => { wrong = 0; locked = false; UI.progress((i + 1) + ' / ' + Q.length); UI.guide(first ? ['s:am-bang-intro', 'w:' + Q[i]] : ['w:' + Q[i]], { show: ['s:am-bang-intro'] }); };
    cells.forEach(c => c.addEventListener('click', () => {
      if (locked) return;
      if (c._w === Q[i]) {
        locked = true; c.classList.add('right'); UI.ok(c, yay('w:' + c._w));
        later(() => { i++; if (i < Q.length) ask(false); else UI.finish(Q.length, (TT.length === 6 ? 'Các bạn đã đọc đúng 6 thanh với ' : 'Các bạn đã đọc đúng ' + Q.length + ' tiếng có ') + AmLib.loai + ' ' + a + '.'); }, 1700);
      } else { wrong++; UI.no(c, ['w:' + c._w]); if (wrong >= 2) UI.hint(cells.get(Q[i])); }
    }));
    UI.stage.replaceChildren(h('button', { class: 'ear-btn', type: 'button', html: SPEAKER, onclick: () => Speech.say(['w:' + Q[i]]) }, 'Nghe lại'),
      h('div', { class: 'tbl' }, head, rows));
    ask(true);
  },
  tone() {
    const pool = AM.am.flatMap(a => AM.bang[a].map(v => ({ a, s: AmLib.ghep(a, v) })));
    const set = shuffle(TONES.filter(t => t !== 'ngang')).map(t => { const ok = pool.filter(p => AmLib.thanh(p.a).includes(t)); return ok.length ? VN.addTone(pick(ok).s, t) : null; }).filter(Boolean); let i = 0;
    const show = () => {
      const target = set[i]; const tone = VN.toneOf(target); const plain = VN.stripTone(target);
      const vi = VN.mainVowelIndex(plain); const cs = VN.chars(plain);
      const vowel = cs[vi];
      const vow = h('span', { class: 'vow', 'aria-label': 'Chỗ đặt dấu trên chữ ' + vowel }, vowel);
      const syl = h('div', { class: 'syl' }, h('span', { class: 'c' }, cs.slice(0, vi).join('')), vow, cs.length > vi + 1 ? h('span', { class: 'c' }, cs.slice(vi + 1).join('')) : null);
      const picker = Picker(); let locked = false;
      const place = (card, zone) => {
        if (locked || zone !== vow) return false;
        const made = VN.addTone(plain, card._tone); vow.textContent = VN.chars(made)[vi];
        if (card._tone === tone) {
          locked = true; vow.classList.add('right'); picker.clear();
          UI.ok(vow, ['w:' + target, ...(tone === 'nang' ? ['s:am-dau-nang'] : [])]);
          later(() => { i++; if (i < set.length) show(); else UI.finish(set.length, 'Các bạn đã đặt đúng dấu cho ' + set.length + ' tiếng.'); }, tone === 'nang' ? 3400 : 2200);
          return true;
        }
        locked = true; vow.classList.add('wrongtry');
        UI.no(card, ['w:' + made]);
        later(() => { vow.textContent = vowel; vow.classList.remove('wrongtry'); locked = false; }, 1800);
        return false;
      };
      syl.addEventListener('click', () => { if (!picker.get()) Speech.say(['w:' + target]); });
      asZone(vow, picker, place);
      const cards = TONES.map(t => { const c = amToneCard(t); draggable(c, { zones: () => [vow], onPick: () => Speech.say(['t:' + t]), onTap: el => picker.toggle(el), onDrop: place }); return c; });
      UI.stage.replaceChildren(h('div', { class: 'tone-game' }, syl, h('div', { class: 'tones' }, cards), dotsRow(set.length, i)));
      UI.progress((i + 1) + ' / ' + set.length);
      UI.guide(i === 0 ? ['s:am-dau-intro', 'w:' + target] : ['w:' + target], { show: ['s:am-dau-intro'] });
    };
    show();
  }
};

/* ---------- 5. Đọc từ (+ vòng luật chính tả nếu bài có) ---------- */
GAMES.g5 = {
  num: 5, title: 'Đọc từ', icon: 'doctu', desc: '', levels: [], chain: true,
  start(level) {
    if (level < AM.am.length) {
      const a = AM.am[level];
      return amPicChoice({ items: shuffle(AM.tu[a].slice()), clipOf: w => 'w:' + w, guideId: 's:am-tu-intro', doneText: n => 'Các bạn đã tự đọc đúng ' + n + ' từ có ' + AmLib.loai + ' ' + a + '.' });
    }
    this.rule();
  },
  rule() {
    const L = AM.luat; const items = shuffle(L.muc.slice()); let i = 0;
    const show = () => {
      const m = items[i]; let wrong = 0, locked = false;
      const rest = VN.chars(m.w).slice(Array.from(m.dung).length).join('');
      const gap = h('span', { class: 'gap' }, '?');
      const btns = L.chon.map(c => h('button', { class: 'lbtn', type: 'button', 'aria-label': 'Chữ ' + c, onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (c === m.dung) {
          locked = true; el.classList.add('right'); gap.textContent = c; UI.ok(el, ['w:' + m.w, ...(L.nhac && i === 0 ? ['s:' + L.nhac] : [])]);
          later(() => { i++; if (i < items.length) show(); else UI.finish(items.length, 'Các bạn đã điền đúng ' + items.length + ' chữ.'); }, L.nhac && i === 0 ? 4200 : 1900);
        } else { wrong++; UI.no(el, L.nhac ? ['s:' + L.nhac] : []); if (wrong >= 2) UI.hint(btns[L.chon.indexOf(m.dung)]); }
      } }, c));
      UI.stage.replaceChildren(
        h('button', { class: 'sentpic', type: 'button', 'aria-label': 'Nghe từ', html: AmLib.pic(m.w), onclick: () => Speech.say(['w:' + m.w]) }),
        h('div', { class: 'blank-word' }, gap, h('span', null, rest)),
        h('div', { class: 'lchoices' }, btns), dotsRow(items.length, i));
      UI.progress((i + 1) + ' / ' + items.length);
      UI.guide(i === 0 ? ['s:am-luat-intro', 'w:' + m.w] : ['w:' + m.w], { show: ['s:am-luat-intro'] });
    };
    show();
  }
};

/* ---------- 6. Hái quả có âm mới ---------- */
GAMES.g6 = {
  num: 6, title: 'Hái quả', icon: 'hai', desc: '', levels: [], chain: true,
  start(level) {
    const a = AM.am[level];
    const syl = new Set([...AmLib.vocab(), ...(AM.onCu.tu || [])].flatMap(AmLib.sylls));
    AM.am.forEach(x => AM.bang[x].forEach(v => syl.add(AmLib.ghep(x, v, pick(AmLib.thanh(x))))));
    const yes = shuffle([...syl].filter(t => AmLib.phan(t) === a)).slice(0, 4);
    const no = shuffle([...syl].filter(t => AmLib.phan(t) !== a)).slice(0, 8 - yes.length);
    const SPOTS = [[22, 20], [50, 12], [78, 20], [14, 44], [38, 38], [62, 38], [86, 44], [50, 60]];
    const COLORS = ['#E8743B', '#D9573F', '#F2B134', '#E8743B', '#F2B134', '#D9573F', '#E8743B', '#F2B134'];
    let got = 0;
    const basket = h('div', { class: 'basket', 'aria-label': 'Giỏ quả' });
    const fruits = shuffle([...yes, ...no]).map((t, n) => {
      const f = h('button', { class: 'fruit', type: 'button', style: `left:${SPOTS[n][0]}%; top:${SPOTS[n][1]}%; --c:${COLORS[n]}` }, t);
      f.addEventListener('click', () => {
        if (f.classList.contains('right')) return;
        if (AmLib.phan(t) === a) {
          f.classList.add('right'); UI.ok(f, yay('w:' + t)); got++;
          later(() => { f.remove(); basket.append(h('span', { class: 'bfruit', style: '--c:' + COLORS[n] }, t)); }, 650);
          UI.progress(got + ' / ' + yes.length);
          if (got === yes.length) later(() => UI.finish(yes.length, 'Các bạn đã hái đủ ' + yes.length + ' quả có ' + AmLib.loai + ' ' + a + '.'), 1500);
        } else UI.no(f, ['w:' + t]);
      });
      return f;
    });
    UI.stage.replaceChildren(h('div', { class: 'orchard' },
      h('div', { class: 'tree', html: SV(`<path d="M44 100 C46 80 46 66 42 56 M56 100 C54 80 54 66 58 56" stroke="#8C5A32" stroke-width="5" fill="#C68B59"/><path d="M42 100 H58 V60 H42 Z" fill="#C68B59" stroke="none"/><path d="M50 4 C24 4 6 18 8 36 C2 48 12 62 28 62 C36 70 64 70 72 62 C88 62 98 48 92 36 C94 18 76 4 50 4 Z" fill="#8FC07A" stroke="#4E8A3A"/>`, '0 0 100 100').replace('<svg ', '<svg preserveAspectRatio="none" ') }), fruits),
      h('div', { class: 'basket-row' }, h('span', { class: 'big-am' }, a), basket));
    UI.progress('0 / ' + yes.length);
    UI.guide([AmLib.VAN ? 's:am-hai-intro-van' : 's:am-hai-intro', AmLib.nameOf(a)]);
  }
};

/* ---------- 7. Nối từ với tranh ---------- */
GAMES.g7 = {
  num: 7, title: 'Nối từ với tranh', icon: 'noi', desc: '', levels: [], chain: true,
  start() {
    const all = shuffle(AmLib.vocab()); const sets = [];
    for (let k = 0; k + 3 <= all.length && sets.length < 2; k += 4) sets.push(all.slice(k, k + 4));
    let r = 0, done = 0; const total = sets.flat().length;
    const show = () => {
      const ws = sets[r]; const pics = shuffle(ws.slice()); let sel = null, matched = 0; const pairs = [];
      const board = h('div', { class: 'match' });
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'match-lines'); svg.setAttribute('aria-hidden', 'true');
      const rubber = document.createElementNS('http://www.w3.org/2000/svg', 'line'); rubber.setAttribute('class', 'rubber'); svg.append(rubber);
      const mid = (el, side) => { const b = board.getBoundingClientRect(), e = el.getBoundingClientRect(); return { x: (side ? e.left : e.right) - b.left, y: e.top + e.height / 2 - b.top }; };
      const drawLines = () => {
        [...svg.querySelectorAll('line.done')].forEach(l => l.remove());
        pairs.forEach(([wEl, pEl]) => { const p = mid(wEl, 0), q = mid(pEl, 1); const l = document.createElementNS('http://www.w3.org/2000/svg', 'line'); l.setAttribute('class', 'done'); l.setAttribute('x1', p.x); l.setAttribute('y1', p.y); l.setAttribute('x2', q.x); l.setAttribute('y2', q.y); svg.append(l); });
      };
      const choose = el => { if (el.classList.contains('right')) return; if (sel) sel.classList.remove('selected'); sel = el === sel ? null : el; if (sel) sel.classList.add('selected'); };
      const tryPair = (wEl, pEl) => {
        if (wEl.classList.contains('right') || pEl.classList.contains('right')) return false;
        if (sel) sel.classList.remove('selected'); sel = null;
        if (wEl._w === pEl._w) {
          wEl.classList.add('right'); pEl.classList.add('right'); pairs.push([wEl, pEl]); drawLines(); matched++; done++;
          UI.ok([wEl, pEl], yay('w:' + wEl._w)); UI.progress(done + ' / ' + total);
          if (matched === ws.length) later(() => { r++; if (r < sets.length) show(); else UI.finish(total, 'Các bạn đã nối đúng ' + total + ' từ với tranh.'); }, 1700);
          return true;
        }
        wEl.classList.add('wrongtry'); UI.no([wEl, pEl], []); later(() => wEl.classList.remove('wrongtry'), 700);
        return false;
      };
      const words = shuffle(ws.slice()).map(w => {
        const el = h('button', { class: 'mword', type: 'button' }, w); el._w = w;
        el.addEventListener('click', () => { if (el._drag && performance.now() - el._drag < 400) return; if (sel && sel.classList.contains('mpic')) tryPair(el, sel); else choose(el); });
        // kéo một đường từ chữ sang tranh
        el.addEventListener('pointerdown', e => {
          if (el.classList.contains('right')) return; App.unlockAudio();
          const p0 = mid(el, 0); let moved = false;
          try { el.setPointerCapture(e.pointerId); } catch (_) {}
          const move = ev => { const b = board.getBoundingClientRect(); const x = ev.clientX - b.left, y = ev.clientY - b.top; if (!moved && Math.hypot(ev.clientX - e.clientX, ev.clientY - e.clientY) < 10) return; moved = true; rubber.setAttribute('x1', p0.x); rubber.setAttribute('y1', p0.y); rubber.setAttribute('x2', x); rubber.setAttribute('y2', y); rubber.style.display = 'block'; };
          const up = ev => {
            el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up); rubber.style.display = 'none';
            if (!moved) return; el._drag = performance.now();
            const z = zoneAt(picEls, ev.clientX, ev.clientY); if (z) tryPair(el, z);
          };
          el.addEventListener('pointermove', move); el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
        });
        return el;
      });
      const picEls = pics.map((w, n) => {
        const el = h('button', { class: 'mpic', type: 'button', 'aria-label': 'Tranh ' + (n + 1), html: AmLib.pic(w) }); el._w = w;
        el.addEventListener('click', () => { if (sel && sel.classList.contains('mword')) tryPair(sel, el); else choose(el); });
        return el;
      });
      board.append(h('div', { class: 'mcol' }, words), h('div', { class: 'mcol pics' }, picEls), svg);
      UI.stage.replaceChildren(board, dotsRow(sets.length, r));
      if ('ResizeObserver' in window) new ResizeObserver(drawLines).observe(board);
      UI.progress(done + ' / ' + total);
      UI.guide(['s:am-noi-intro'], { silent: r > 0 });
    };
    show();
  }
};

/* ---------- 8. Lật thẻ tìm cặp (một thẻ chữ, một thẻ tranh) ---------- */
GAMES.g8 = {
  num: 8, title: 'Lật thẻ tìm cặp', icon: 'lat', desc: '', levels: ['3 cặp', '4 cặp'], chain: true,
  start(level) {
    const ws = shuffle(AmLib.vocab()).slice(0, level ? 4 : 3);
    let open = [], busy = false, found = 0, misses = 0;
    const cards = shuffle(ws.flatMap((w, k) => [['w', w, k], ['p', w, k]])).map(([kind, w, k]) => {
      const front = kind === 'w' ? h('span', { class: 'mc-word' }, w) : h('span', { class: 'mc-pic', html: AmLib.pic(w) });
      const c = h('button', { class: 'mcard', type: 'button', 'data-k': k, 'aria-label': 'Thẻ úp' },
        h('span', { class: 'mc-in' }, h('span', { class: 'mc-back', html: '<b>?</b>' }), h('span', { class: 'mc-front' }, front)));
      c._w = w; c._kind = kind;
      c.addEventListener('click', () => {
        if (busy || c.classList.contains('up')) return;
        c.classList.add('up'); c.setAttribute('aria-label', kind === 'w' ? 'Chữ ' + w : 'Tranh'); open.push(c);
        if (open.length < 2) return;
        const [x, y] = open; open = [];
        if (x._w === y._w && x._kind !== y._kind) {
          found++; later(() => { x.classList.add('right'); y.classList.add('right'); UI.ok([x, y], yay('w:' + w)); }, 350);
          UI.progress(found + ' / ' + ws.length);
          if (found === ws.length) later(() => { UI.mistakes = Math.max(0, misses - ws.length) / 2; UI.finish(ws.length, 'Các bạn đã tìm đủ ' + ws.length + ' cặp thẻ.'); }, 1900);
        } else {
          misses++; busy = true;
          later(() => { [x, y].forEach(e => { e.classList.remove('up'); e.setAttribute('aria-label', 'Thẻ úp'); }); busy = false; }, 1100);
        }
      });
      return c;
    });
    UI.stage.replaceChildren(h('div', { class: 'memory n' + cards.length }, cards));
    UI.progress('0 / ' + ws.length);
    UI.guide(['s:am-lat-intro'], { silent: level > 0 });
  }
};

/* ---------- 9. Đoán tranh bí mật ---------- */
GAMES.g9 = {
  num: 9, title: 'Đoán tranh bí mật', icon: 'doan', desc: '', levels: [], chain: true,
  start() {
    const V = AmLib.vocab(); const items = shuffle(V.slice()).slice(0, 5); let i = 0;
    const show = () => {
      const w = items[i]; let locked = false, wrong = 0;
      const covers = Array.from({ length: 9 }, (_, n) => h('button', { class: 'cover', type: 'button', 'aria-label': 'Mở ô ' + (n + 1), onclick: e => { e.currentTarget.classList.add('gone'); Sfx.ok(); } }));
      const openOne = () => { const c = shuffle(covers.filter(x => !x.classList.contains('gone')))[0]; if (c) c.classList.add('gone'); };
      const opts = shuffle([w, ...shuffle(V.filter(x => x !== w)).slice(0, 2)]);
      const btns = opts.map(x => h('button', { class: 'lbtn', type: 'button', onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (x === w) {
          locked = true; el.classList.add('right'); covers.forEach(c => c.classList.add('gone')); UI.ok(el, yay('w:' + w));
          later(() => { i++; if (i < items.length) show(); else UI.finish(items.length, 'Các bạn đã đoán đúng ' + items.length + ' tranh.'); }, 2000);
        } else { wrong++; UI.no(el, []); openOne(); openOne(); if (wrong >= 2) UI.hint(btns[opts.indexOf(w)]); }
      } }, x));
      UI.stage.replaceChildren(
        h('div', { class: 'secret' }, h('div', { class: 'secret-pic', html: AmLib.pic(w) }), h('div', { class: 'covers' }, covers)),
        h('div', { class: 'lchoices words' }, btns), dotsRow(items.length, i));
      openOne(); openOne();
      UI.progress((i + 1) + ' / ' + items.length);
      UI.guide(['s:am-doan-intro'], { silent: i > 0 });
    };
    show();
  }
};

/* ---------- 10. Đọc câu ---------- */
GAMES.g10 = {
  num: 10, title: 'Đọc câu', icon: 'doccau', desc: '', levels: ['Đọc câu, chọn tranh', 'Xếp câu'], chain: true,
  start(level) {
    if (level === 0) return amPicChoice({ items: shuffle(AM.cau.slice()), cls: 'phrase sentence', clipOf: c => 'k:' + c, guideId: 's:am-cau-intro', doneText: n => 'Các bạn đã đọc đúng ' + n + ' câu.', nOpts: Math.min(3, AM.cau.length) });
    this.build();
  },
  build() {
    const items = shuffle(AM.cau.slice()); let i = 0;
    const show = () => {
      const c = items[i]; const words = c.split(' '); const picker = Picker(); let placed = 0; const wrongs = new Map();
      const slots = words.map((w, n) => { const s = h('div', { class: 'sslot', 'aria-label': 'Ô thứ ' + (n + 1) }); s._w = w; s._n = n; return s; });
      const place = (tile, slot) => {
        if (slot._done) return false;
        if (tile._w === slot._w) {
          slot._done = true; slot.textContent = tile._w; slot.classList.add('filled'); tile.remove(); picker.clear(); placed++;
          Sfx.ok(); bounce(slot, 'pop-ok'); Speech.say(['w:' + VN.letters(tile._w).toLowerCase()]);
          if (placed === words.length) { UI.ok(slots, ['k:' + c]); later(() => { i++; if (i < items.length) show(); else UI.finish(items.length * 2, 'Các bạn đã xếp đúng ' + items.length + ' câu.'); }, 3000); }
          return true;
        }
        const n = (wrongs.get(tile) || 0) + 1; wrongs.set(tile, n);
        UI.no(tile, []);
        if (n >= 2) { const s = slots.find(x => !x._done && x._w === tile._w); if (s) UI.hint(s); }
        return false;
      };
      const tray = h('div', { class: 'tray' });
      let order = shuffle(words.map((w, n) => n)); if (order.every((v, k) => v === k)) order = order.reverse();
      order.forEach(n => {
        const w = words[n]; const t = h('button', { class: 'tile wide', type: 'button' }, w); t._w = w;
        draggable(t, { zones: () => slots.filter(s => !s._done), onPick: () => Speech.say(['w:' + VN.letters(w).toLowerCase()]), onTap: el => picker.toggle(el), onDrop: place });
        tray.append(t);
      });
      slots.forEach(s => asZone(s, picker, place));
      UI.stage.replaceChildren(
        h('button', { class: 'sentpic', type: 'button', 'aria-label': 'Nghe câu', html: AmLib.pic(c), onclick: () => Speech.say(['k:' + c]) }),
        h('div', { class: 'sent-slots' }, slots), tray, dotsRow(items.length, i));
      UI.progress((i + 1) + ' / ' + items.length);
      UI.guide(['s:am-xep-intro'], { silent: i > 0 });
    };
    show();
  }
};

/* ---------- 11. Tô chữ trên khung ô li ---------- */
GAMES.g11 = {
  num: 11, title: 'Tô chữ', icon: 'to', desc: '', levels: [], chain: false,
  start() {
    const mp = $('#measurePath');
    const sample = d => { mp.setAttribute('d', d); const L = mp.getTotalLength(); const n = Math.max(24, Math.round(L / 0.05)); const pts = []; for (let k = 0; k <= n; k++) { const p = mp.getPointAtLength(L * k / n); pts.push({ x: p.x, y: p.y }); } return pts; };
    const LET = AM.am.map(a => {
      const strokes = AmLib.netOf(a).map(sample); const all = strokes.flat();
      const xs = all.map(p => p.x), ys = all.map(p => p.y);
      return { a, strokes, b: { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(-5, ...ys), y1: Math.max(0, ...ys) } };
    });
    const doneSet = new Set(); let cur = 0;
    const chips = LET.map((s, k) => h('button', { class: 'schip', type: 'button', 'aria-label': 'Chữ ' + s.a, onclick: () => { App.unlockAudio(); go(k); } }, s.a));
    const name = h('h3', { class: 'stroke-name' });
    const canvas = h('canvas', { id: 'traceCanvas', 'aria-label': 'Khung ô li để tô chữ' });
    const btnReset = h('button', { class: 'btn ghost small', type: 'button', onclick: () => go(cur) }, 'Tô lại');
    // Video cô viết mẫu (trang Tập viết); không tải được thì ẩn nút
    const video = h('video', { class: 'mau-video', playsinline: true, muted: true, preload: 'none', hidden: true });
    video.muted = true;
    // Chữ có video cô viết thì mở video; vần, chữ ghép chưa có video thì Trâu Con vẽ mẫu từng nét ngay trên khung
    const btnVideo = h('button', { class: 'btn ghost small', type: 'button', onclick: () => {
      App.unlockAudio();
      const a = LET[cur].a;
      if (VIDEO_CO.has(a) && !video.dataset.loi) {
        const id = VIDEO_CHU[a] || a;
        if (!video.src.endsWith('/' + id + '.mp4')) { video.src = VIDEO_GOC + id + '.mp4'; video.poster = VIDEO_GOC + id + '.jpg'; }
        video.hidden = false; video.currentTime = 0; const p = video.play(); if (p) p.catch(() => {});
      } else demo();
    } }, 'Xem cô viết');
    video.addEventListener('error', () => { video.hidden = true; video.dataset.loi = '1'; demo(); });
    video.addEventListener('ended', () => { later(() => { video.hidden = true; }, 1200); });
    const btnNext = h('button', { class: 'btn small', type: 'button', onclick: () => next() }, 'Chữ tiếp theo ›');
    UI.stage.append(h('div', { class: 'trace' }, h('div', { class: 'stroke-row' }, chips), name, video, h('div', { class: 'trace-card' }, canvas), h('div', { class: 'trace-actions' }, btnVideo, btnReset, btnNext)));
    const ctx = canvas.getContext('2d');
    let st = null, W = 0, H = 0, dpr = 1, lastHint = 0;
    const view = () => {
      const s = LET[cur]; const bw = s.b.x1 - s.b.x0, bh = s.b.y1 - s.b.y0;
      const ly = Math.min(W / (bw + 2), H / (bh + 1.4));
      return { ly, ox: W / 2 - ((s.b.x0 + s.b.x1) / 2) * ly, oy: H / 2 - ((s.b.y0 + s.b.y1) / 2) * ly, tol: Math.max(0.42 * ly, 20) };
    };
    const P = (p, v) => ({ x: v.ox + p.x * v.ly, y: v.oy + p.y * v.ly });
    const pts = () => LET[cur].strokes[st.stroke];
    const draw = () => {
      if (!st) return;
      const v = view(), s = LET[cur];
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, W, H);
      const k0 = Math.floor(-v.ox / v.ly) - 1, k1 = Math.ceil((W - v.ox) / v.ly) + 1, j0 = Math.floor(-v.oy / v.ly) - 1, j1 = Math.ceil((H - v.oy) / v.ly) + 1;
      for (let k = k0; k <= k1; k++) { const x = v.ox + k * v.ly; ctx.strokeStyle = 'rgba(70,140,200,.30)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let j = j0; j <= j1; j++) { const y = v.oy + j * v.ly; ctx.strokeStyle = j === 0 ? 'rgba(40,100,170,.75)' : 'rgba(70,140,200,.35)'; ctx.lineWidth = j === 0 ? 2.2 : 1; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      const path = (p, upto) => { ctx.beginPath(); p.slice(0, upto).forEach((q0, n) => { const q = P(q0, v); n ? ctx.lineTo(q.x, q.y) : ctx.moveTo(q.x, q.y); }); };
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      s.strokes.forEach((p, n) => {
        if (n < st.stroke || st.done) { ctx.strokeStyle = '#3E8E4A'; ctx.lineWidth = v.ly * 0.24; path(p, p.length); ctx.stroke(); return; }
        ctx.setLineDash([v.ly * 0.05, v.ly * 0.22]); ctx.strokeStyle = n === st.stroke ? '#E2675A' : 'rgba(226,103,90,.35)'; ctx.lineWidth = v.ly * 0.17; path(p, p.length); ctx.stroke(); ctx.setLineDash([]);
      });
      if (st.demo != null) {
        let left = st.demo; ctx.strokeStyle = '#3A3B3C'; ctx.lineWidth = v.ly * 0.2;
        for (const p of s.strokes) { const n = Math.min(p.length, Math.floor(left)); if (n > 1) { path(p, n); ctx.stroke(); } left -= p.length; if (left <= 0) { const q = P(p[Math.max(0, n - 1)], v); ctx.fillStyle = '#DDAA55'; ctx.beginPath(); ctx.arc(q.x, q.y, Math.max(7, v.ly * 0.13), 0, Math.PI * 2); ctx.fill(); break; } }
        return;
      }
      if (!st.done && st.progress > 1) { ctx.strokeStyle = 'rgba(62,142,74,.9)'; ctx.lineWidth = v.ly * 0.24; path(pts(), st.progress); ctx.stroke(); }
      ctx.strokeStyle = 'rgba(58,59,60,.45)'; ctx.lineWidth = Math.max(3, v.ly * 0.07);
      st.ink.forEach(line => { ctx.beginPath(); line.forEach((p, n) => n ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.stroke(); });
      if (st.done) return;
      const p = pts();
      ctx.fillStyle = '#B4553C';
      [0.35, 0.72].forEach(f => {
        const n = Math.floor(p.length * f), a = P(p[n], v), b = P(p[Math.min(n + 4, p.length - 1)], v);
        const ang = Math.atan2(b.y - a.y, b.x - a.x), r = v.ly * 0.2;
        ctx.save(); ctx.translate(a.x, a.y); ctx.rotate(ang); ctx.beginPath(); ctx.moveTo(r, 0); ctx.lineTo(-r * 0.7, -r * 0.75); ctx.lineTo(-r * 0.7, r * 0.75); ctx.closePath(); ctx.fill(); ctx.restore();
      });
      const a = P(p[0], v);
      ctx.fillStyle = '#3E8E4A'; ctx.beginPath(); ctx.arc(a.x, a.y, Math.max(11, v.ly * 0.17), 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 3; ctx.stroke();
    };
    // Vẽ mẫu: chạy hết các nét theo đúng thứ tự, gần 3 ô li mỗi giây
    const demo = () => {
      const k = cur, total = LET[k].strokes.reduce((n, p) => n + p.length, 0), t0 = performance.now();
      st.demo = 0;
      const step = () => {
        if (cur !== k || !st || st.demo == null) return;
        st.demo = (performance.now() - t0) / 1000 * 55; draw();
        if (st.demo < total + 20) requestAnimationFrame(step); else { st.demo = null; draw(); }
      };
      requestAnimationFrame(step);
    };
    const resize = () => { const r = canvas.getBoundingClientRect(); if (!r.width) return; dpr = Math.min(window.devicePixelRatio || 1, 2.5); W = r.width; H = r.height; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); draw(); };
    const go = k => {
      cur = k; st = { stroke: 0, progress: 0, ink: [], drawing: false, done: false, off: false };
      video.hidden = true; try { video.pause(); } catch (e) {}
      chips.forEach((c, n) => { c.setAttribute('aria-current', String(n === k)); c.classList.toggle('done', doneSet.has(n)); });
      name.textContent = 'Chữ ' + LET[k].a; btnNext.textContent = k === LET.length - 1 ? 'Hoàn thành ›' : 'Chữ tiếp theo ›';
      UI.progress(doneSet.size + ' / ' + LET.length);
      UI.guide(k === 0 && !doneSet.size ? ['s:am-to-intro', AmLib.nameOf(LET[k].a)] : [AmLib.nameOf(LET[k].a)]);
      resize();
    };
    const next = () => { if (cur < LET.length - 1) go(cur + 1); else UI.finish(LET.length, 'Các bạn đã tô ' + doneSet.size + ' / ' + LET.length + ' chữ.'); };
    const local = e => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const say = id => { const t = performance.now(); if (t - lastHint > 3500) { lastHint = t; Speech.say([id]); } };
    const advance = q => {
      const v = view(), p = pts(); let best = Infinity;
      for (let j = st.progress; j < Math.min(st.progress + 30, p.length); j++) { const r = P(p[j], v); const d = Math.hypot(r.x - q.x, r.y - q.y); if (d <= v.tol) st.progress = j + 1; best = Math.min(best, d); }
      if (best > v.tol * 2.4 && !st.off) { st.off = true; UI.no(null, ['s:am-to-off']); UI.mistakes--; }
      if (st.progress >= p.length - 2) {
        if (st.stroke < LET[cur].strokes.length - 1) { st.stroke++; st.progress = 0; st.drawing = false; Sfx.ok(); say('s:am-to-next'); }
        else win();
      }
    };
    const win = () => {
      st.done = true; st.drawing = false; doneSet.add(cur); chips[cur].classList.add('done');
      UI.progress(doneSet.size + ' / ' + LET.length); draw();
      UI.ok(chips[cur], yay(AmLib.nameOf(LET[cur].a)));
      const k = cur; later(() => { if (cur === k) next(); }, 2400);
    };
    canvas.addEventListener('pointerdown', e => {
      if (!st || st.done) return;
      e.preventDefault(); App.unlockAudio(); st.demo = null;
      const q = local(e), v = view(), p = pts();
      const target = P(p[Math.min(st.progress, p.length - 1)], v);
      if (Math.hypot(target.x - q.x, target.y - q.y) > v.tol * 1.8) { say(st.progress ? 's:am-to-off' : 's:am-to-start'); return; }
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
      st.drawing = true; st.off = false; st.ink.push([q]); advance(q); draw();
    });
    canvas.addEventListener('pointermove', e => { if (!st || !st.drawing) return; const q = local(e); st.ink[st.ink.length - 1].push(q); advance(q); draw(); });
    const up = () => { if (st) st.drawing = false; };
    canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas); else window.addEventListener('resize', resize);
    go(0);
  }
};

/* Biểu tượng thẻ trò chơi ở trang chính (hàm: vẽ lúc hiện trang, đã có dữ liệu AM) */
const ICONS = {
  tho: SV(`<path d="M8 30 V84 C24 80 40 80 50 88 C60 80 76 80 92 84 V30" stroke="#C68B59" stroke-width="3"/><path d="M50 30 C40 22 24 22 12 26 V78 C24 74 40 74 50 82 Z" fill="#FFFCF6"/><path d="M50 30 C60 22 76 22 88 26 V78 C76 74 60 74 50 82 Z" fill="#FFFCF6"/><path d="M20 38 H40 M20 47 H40 M20 56 H36 M60 38 H80 M60 47 H80 M60 56 H76" stroke="#A39588" stroke-width="2"/><path d="M22 66 h5 M58 66 h5" stroke="#D9573F" stroke-width="4"/>`),
  on: () => SV(`<path d="M50 14 A36 36 0 1 1 18 34" stroke="#6FAE4F" stroke-width="6"/><path d="M8 22 L18 36 L32 28" stroke="#6FAE4F" stroke-width="6"/>${TXT(52, 62, 26, (AM.onCu.chu || []).slice(0, 2).join(' '))}`),
  ghep: () => SV(`<rect x="4" y="30" width="30" height="34" rx="7" fill="#F6E3BC"/>${TXT(19, 56, 24, AmLib.VAN ? AM.bang[AM.am[0]][0] : AM.am[0])}${TXT(42, 56, 22, '+', '#7A6E66')}<rect x="50" y="30" width="30" height="34" rx="7" fill="#FFFCF6"/>${TXT(65, 56, 24, AmLib.VAN ? AM.am[0] : AM.bang[AM.am[0]][0])}<path d="M84 47 h10" stroke-width="3"/><path d="M30 76 H70" stroke="#DDAA55" stroke-width="4"/>`),
  bang: () => SV(`<rect x="8" y="16" width="84" height="68" rx="8" fill="#FFFCF6"/><path d="M8 38 H92 M8 61 H92 M36 16 V84 M64 16 V84" stroke="#DCCFBC" stroke-width="2"/>${TXT(22, 34, 15, AmLib.ghep(AM.am[0], AM.bang[AM.am[0]][0]))}${TXT(50, 34, 15, AmLib.ghep(AM.am[0], AM.bang[AM.am[0]][0], 'sac'))}${TXT(78, 34, 15, AmLib.ghep(AM.am[0], AM.bang[AM.am[0]][0], 'huyen'))}${TXT(22, 57, 15, AmLib.ghep(AM.am[0], AM.bang[AM.am[0]][0], 'hoi'))}${TXT(50, 57, 15, AmLib.ghep(AM.am[0], AM.bang[AM.am[0]][0], 'nga'))}${TXT(78, 57, 15, AmLib.ghep(AM.am[0], AM.bang[AM.am[0]][0], 'nang'))}<rect x="38" y="63" width="24" height="19" rx="4" fill="#CFE6C0" stroke="none"/>`),
  doctu: () => { const w = AmLib.allWords()[0]; return SV(`<rect x="4" y="58" width="56" height="30" rx="8" fill="#FFFCF6"/>${TXT(32, 80, 17, w)}<g transform="translate(46 4) scale(.5)">${AmLib.pic(w).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>`); },
  doccau: () => SV(`<g transform="translate(40 2) scale(.56)">${AmLib.pic(AM.cau[0]).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g><rect x="4" y="60" width="92" height="30" rx="8" fill="#FFFCF6"/><path d="M14 70 H50 M56 70 H86 M14 80 H40 M46 80 H70" stroke="#A39588" stroke-width="3"/>`),
  hai: () => SV(`<path d="M50 6 C26 6 10 20 12 38 C6 50 16 62 30 62 C38 70 62 70 70 62 C84 62 94 50 88 38 C90 20 74 6 50 6 Z" fill="#8FC07A" stroke="#4E8A3A"/><path d="M45 66 H55 V80 H45 Z" fill="#C68B59" stroke="none"/><circle cx="32" cy="30" r="9" fill="#E8743B"/><circle cx="64" cy="26" r="9" fill="#F2B134"/><circle cx="50" cy="48" r="9" fill="#D9573F"/><path d="M22 80 H78 L72 96 H28 Z" fill="#DDAA55"/>${TXT(50, 92, 13, AM.am[0], '#3A3B3C')}`),
  noi: () => { const w = AmLib.vocab(); return SV(`<rect x="4" y="16" width="40" height="22" rx="6" fill="#FFFCF6"/>${TXT(24, 32, 12, w[0])}<rect x="4" y="60" width="40" height="22" rx="6" fill="#FFFCF6"/>${TXT(24, 76, 12, w[1] || '')}<path d="M44 27 L62 70 M44 71 L62 30" stroke="#3E8E4A" stroke-width="3" stroke-dasharray="4 4"/><g transform="translate(62 12) scale(.34)">${AmLib.pic(w[1] || w[0]).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g><g transform="translate(62 54) scale(.34)">${AmLib.pic(w[0]).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>`); },
  lat: () => SV(`<rect x="6" y="14" width="38" height="50" rx="7" fill="#DDAA55"/>${TXT(25, 47, 26, '?', '#FFFCF6')}<g transform="rotate(8 70 50)"><rect x="52" y="22" width="38" height="50" rx="7" fill="#FFFCF6"/>${TXT(71, 54, 16, AmLib.vocab()[0].split(' ')[0])}</g><path d="M30 84 C40 92 60 92 70 84" stroke="#C68B59" stroke-width="3"/><path d="M64 80 L70 84 L64 90" stroke="#C68B59" stroke-width="3"/>`),
  doan: () => SV(`<rect x="10" y="10" width="80" height="80" rx="10" fill="#FFFCF6"/><g transform="translate(12 12) scale(.76)">${AmLib.pic(AmLib.vocab()[0]).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g><rect x="10" y="10" width="40" height="40" rx="8" fill="#DDAA55"/><rect x="50" y="50" width="40" height="40" rx="8" fill="#DDAA55"/>${TXT(30, 39, 24, '?', '#FFFCF6')}${TXT(70, 79, 24, '?', '#FFFCF6')}`),
  to: () => SV(`<rect x="8" y="14" width="70" height="74" rx="6" fill="#FFFFFF"/><path d="M8 34 H78 M8 52 H78 M8 70 H78 M26 14 V88 M44 14 V88 M62 14 V88" stroke="#BFDDE8" stroke-width="1.6"/>${TXT(42, 70, 46, AM.am[0], '#D9573F', 800).replace('stroke="none"', 'stroke="none" opacity=".55"')}<g transform="rotate(35 80 60)"><rect x="75" y="22" width="10" height="48" rx="2" fill="#F2C14E"/><path d="M75 70 L80 82 L85 70 Z" fill="#F6D2B8"/><path d="M78.5 78 L80 82 L81.5 78 Z" fill="#3A3B3C"/></g>`)
};

/* Điền tên vòng, mô tả và biểu tượng theo dữ liệu của bài; gọi ở cuối bai.js */
function amSetup() {
  const A = AM.am, list = A.join(', ');
  GAMES.g1.desc = 'Đọc tiếp sức khổ ' + AM.kho + ' bài thơ của Tản Đà, rồi xếp câu thơ theo thứ tự';
  GAMES.g2.levels = AM.onCu.tu && AM.onCu.tu.length ? ['Nghe chữ, chạm chữ', 'Nghe từ, chạm từ'] : [];
  GAMES.g2.desc = 'Nghe Trâu Con đọc, chạm đúng chữ của bài trước: ' + AM.onCu.chu.join(', ');
  const L = AmLib.cap(AmLib.loai);
  if (AmLib.VAN) GAMES.g3.title = 'Làm quen vần mới';
  GAMES.g3.levels = A.map(a => L + ' ' + a);
  GAMES.g3.desc = (AmLib.VAN ? 'Ghép âm đầu với vần thành tiếng: ' : 'Ghép âm với vần thành tiếng: ') + AM.khoa.map(k => k.tieng).join(', ');
  GAMES.g4.levels = [...A.map(a => 'Bảng ' + a), 'Đặt dấu thanh'];
  GAMES.g4.desc = 'Nghe Trâu Con đọc, tìm tiếng trong bảng 6 thanh, rồi đặt dấu thanh';
  GAMES.g5.levels = [...A.map(a => 'Từ có ' + a), ...(AM.luat ? [AM.luat.ten] : [])];
  GAMES.g5.desc = 'Tự đọc từ có ' + list + ', rồi chọn tranh đúng' + (AM.luat ? '; ' + AM.luat.ten : '');
  GAMES.g6.levels = A.map(a => L + ' ' + a);
  GAMES.g6.desc = 'Hái những quả có ' + AmLib.loai + ' ' + list + ' bỏ vào giỏ';
  GAMES.g7.desc = 'Đọc từ rồi nối với tranh đúng';
  GAMES.g8.desc = 'Lật thẻ, tìm từ và tranh đi cùng nhau';
  GAMES.g9.desc = 'Mở dần các ô, đoán tranh bí mật là từ nào';
  GAMES.g10.desc = 'Tự đọc câu, chọn tranh, rồi xếp các tiếng thành câu';
  GAMES.g11.desc = 'Tô chữ ' + list + ' theo nét chấm đỏ trên khung ô li';
  amRegisterClips();
  // Trò Tô chữ chỉ hiện khi bài đã có nét chữ chuẩn cho mọi âm
  // Bật lại Tô chữ (8/11/2026) khi đã có bộ nét chữ trích từ video hướng dẫn nét viết; đổi TO_CHU_BAT thành false để tạm ẩn
  const TO_CHU_BAT = true;
  const coNet = TO_CHU_BAT && A.every(a => AmLib.netOf(a).length);
  // Trò thêm theo slide (Đọc nhanh, Nghe – viết) và trò ôn (chữ cái, từ vựng): chung/tro-on.js
  Object.assign(ICONS, ICONS_THEM);
  const them = OnThem.setup({ tu: [...AM.khoa.map(k => k.tu), ...AmLib.allWords()], vao: ['g12', 'g13', 'g14', 'g15'] });
  GAME_ORDER.push('g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', ...them.filter(x => x === 'g12' || x === 'g13'), ...(coNet ? ['g11'] : []), ...them.filter(x => x === 'g14' || x === 'g15'));
  GAME_ORDER.forEach((id, k) => { GAMES[id].num = k + 1; });
}
