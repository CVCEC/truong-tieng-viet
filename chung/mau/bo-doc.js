/* =====================================================================
   BỘ 10 TRÒ CHƠI CHUNG CHO BÀI TẬP ĐỌC (Bài 71–80) VÀ BÀI VĂN HÓA TRUYỀN THỐNG (Bài 81–145)
   Mỗi bài chỉ khai báo dữ liệu DOC trong bai-NN/bai.js; mọi trò chơi dưới đây đọc từ DOC.
   Thứ tự theo slide: thơ Lên Tám → khởi động (nhìn tranh đọc từ) → từ mới → từ khó → đọc từng đoạn, trả lời câu hỏi
   → đọc hiểu cả bài → trình tự sự việc → luyện câu → điền từ → tô chữ.

   DOC = {
     y:     'Bài học rút ra',                              câu ý nghĩa của bài (hiện ở trang chính và phiếu)
     tho?:  { ten, tg, kho, lines: [...] }                 bài thơ mở đầu (mặc định: Lên Tám của Tản Đà, dùng cho mọi bài 71–145)
     khoi:  [{ tu, tranh?, cau?, do? }],                   5 từ khởi động, mỗi từ có tranh TRANH[tranh || tu]; không có tranh thì dùng câu đố "do"
     tuMoi: [['từ', 'nghĩa'], …],                          8 từ mới và lời giải nghĩa
     tuKho: [...],                                         6 từ khó đọc
     doan:  [{ text, hoi: [{ q, dung, sai: [x, y] }] }],    3 đoạn văn, mỗi đoạn 2 câu hỏi (đáp án lấy từ chính đoạn đó)
     hieu:  [{ q, dung, sai: [x, y] }],                    3 câu hỏi đọc hiểu cả bài
     thuTu: [...],                                         các sự việc theo đúng thứ tự
     cau:   { mau, nhan?: [...], ds: ['Ai|là|gì.'] },      mẫu câu; mỗi câu chia thành các phần bằng dấu |
     dien:  [{ cau: '… ___ …', dung, sai: [x, y] }],       câu trong bài có chỗ trống
     to:    [...],                                         từ để tô trên ô li (chữ thường)
     noi:   [...], viet: [...]                             câu hỏi luyện nói, khung luyện viết (cho phiếu bài tập)
   }
   ===================================================================== */
Object.assign(PHRASES, {
  'doc-tho-intro': 'Mình đọc một câu, các bạn đọc câu tiếp theo nhé!',
  'doc-tho-title': 'Lên Tám. Thơ Tản Đà.',
  'doc-tho-you': 'Đến lượt các bạn!',
  'doc-tho-order': 'Các bạn xếp câu thơ cho đúng nhé!',
  'doc-khoi-intro': 'Tranh gì đây? Các bạn chọn từ đúng nhé!',
  'doc-khoi-do': 'Đố các bạn đây là gì?',
  'doc-moi-intro': 'Các bạn nối từ với lời giải nghĩa nhé!',
  'doc-kho-intro': 'Nghe rồi chạm vào từ đúng nhé!',
  'doc-doan-intro': 'Các bạn đọc đoạn văn, rồi trả lời câu hỏi nhé!',
  'doc-hieu-intro': 'Các bạn chọn ý đúng nhé!',
  'doc-thutu-intro': 'Các bạn xếp các việc theo thứ tự nhé!',
  'doc-cau-intro': 'Các bạn xếp các phần thành câu nhé!',
  'doc-dien-intro': 'Các bạn chọn từ để điền vào chỗ trống nhé!',
  'doc-to-intro': 'Các bạn tô theo nét chấm đỏ nhé!',
  'doc-to-start': 'Bắt đầu từ chấm xanh nhé!',
  'doc-to-off': 'Tô sát nét chấm đỏ nhé!',
  'doc-to-next': 'Nét tiếp theo nhé!',
  'on-nghe': 'Nghe mình đọc rồi chọn cho đúng nhé!',
  'on-ga': 'Các bạn đưa mỗi từ về đúng ga nhé!'
});

/* Thơ “Lên Tám” của Tản Đà (theo slide Bài 71), đọc mở đầu mọi bài 71–145 và ôn tập */
const THO_TAM = ['Cuộc đời buổi đầu chen,', 'Người hơn giúp người hèn,', 'Đặt nhau lên Đài miếu,', 'Ơn người, ta chớ quên.',
  'Ta ơn người dắt ta,', 'Ta thương nòi giống nhà,', 'Đoàn kết cùng tiến bước,', 'Văn minh đường không xa.'];

/* Bài thơ đang dùng: docSetup() thay bằng DOC.tho nếu bài có khai báo */
let THO = { ten: 'LÊN TÁM', tg: 'Thơ: Tản Đà', id: 'tam', lines: THO_TAM };
let docWins = 0;
const docYay = (...ids) => (++docWins % 3 === 0 ? [pick(PRAISE), ...ids] : ids);

const DocLib = (() => {
  const pid = i => 'p:' + THO.id + '-' + (i + 1);
  // Tách đoạn văn thành câu (giữ dấu ngoặc kép đi liền dấu câu)
  const cauOf = t => (t.match(/[^.!?]+[.!?]+[”"]?/g) || [t]).map(s => s.trim()).filter(Boolean);
  const pic = w => TRANH[w] || '';
  const khoiPic = k => pic(k.tranh || k.tu);
  // Chia bài thơ thành các phần để xếp: ≤5 câu một phần, dài hơn thì chia đôi
  const phan = n => n <= 5 ? [n] : [Math.ceil(n / 2), Math.floor(n / 2)];
  const truyen = () => DOC.doan.map(d => d.text).join(' ');
  const cauGhep = c => c.split('|').map(s => s.trim()).join(' ');
  const dienDu = d => d.cau.replace('___', d.dung);
  const bo = s => s.replace(/[.,!?:;“”"]/g, '').trim();
  return { pid, cauOf, pic, khoiPic, phan, truyen, cauGhep, dienDu, bo };
})();

function docRegisterClips() {
  THO.lines.forEach((l, i) => { CLIPS[DocLib.pid(i)] = l; });
  const W = new Set([...DOC.khoi.map(k => k.tu), ...DOC.tuMoi.map(m => m[0]), ...DOC.tuKho, ...DOC.to,
    ...DOC.dien.flatMap(d => [d.dung, ...d.sai]), ...DOC.cau.ds.flatMap(c => c.split('|').map(s => DocLib.bo(s).toLowerCase()))]);
  W.forEach(w => { CLIPS['w:' + w] = w; });
  const K = [...DOC.khoi.filter(k => k.cau).map(k => k.cau), ...DOC.khoi.filter(k => k.do).map(k => k.do), ...DOC.tuMoi.map(m => m[1]), ...DOC.doan.flatMap(d => DocLib.cauOf(d.text)),
    ...[...DOC.doan.flatMap(d => d.hoi), ...DOC.hieu].flatMap(q => [q.q, q.dung, ...q.sai]), ...DOC.thuTu, ...DOC.cau.ds.map(DocLib.cauGhep), ...DOC.dien.map(DocLib.dienDu)];
  K.forEach(c => { CLIPS['k:' + c] = c; });
  DOC.khoi.filter(k => k.do).forEach(k => { CLIPS['k:' + k.do] = k.do.replace(/ \/ /g, ', '); });
}

/* Một câu hỏi trắc nghiệm: chọn đúng thì đọc đáp án; sai hai lần thì nháy sáng đáp án đúng */
function docHoi(box, q, onDone) {
  let wrong = 0, locked = false;
  const opts = shuffle([q.dung, ...q.sai]);
  const btns = opts.map((o, n) => h('button', { class: 'lbtn opt', type: 'button', onclick: e => {
    if (locked) return; const el = e.currentTarget;
    if (o === q.dung) { locked = true; el.classList.add('right'); UI.ok(el, docYay('k:' + o)); later(onDone, 2600); }
    else { wrong++; UI.no(el, []); if (wrong >= 2) UI.hint(btns[opts.indexOf(q.dung)]); }
  } }, h('b', null, 'ABC'[n]), h('span', null, o)));
  box.replaceChildren(h('button', { class: 'qtext', type: 'button', onclick: () => Speech.say(['k:' + q.q]) }, q.q), h('div', { class: 'lchoices opts' }, btns));
}

/* Đoạn văn: chạm vào câu nào thì Trâu Con đọc câu đó */
function docDoanEl(text, cls = '') {
  const ss = DocLib.cauOf(text);
  return h('div', { class: 'para ' + cls }, ss.map(s => h('button', { class: 'psent', type: 'button', onclick: e => { App.unlockAudio(); Speech.say(['k:' + s]); bounce(e.currentTarget, 'speaking', 1400); } }, s + ' ')));
}

/* ---------- 1. Bài thơ mở đầu (Lên Tám) ---------- */
GAMES.g1 = {
  num: 1, title: 'Thơ “Lên Tám”', icon: 'tho', desc: 'Đọc tiếp sức bài thơ Lên Tám của Tản Đà, rồi xếp câu thơ theo thứ tự', levels: ['Đọc tiếp sức', 'Xếp câu thơ'], chain: true,
  start(level) { [this.relay, this.order][level].call(this); },
  relay() {
    const my = Runner.seq, L = THO.lines, N = L.length; let idx = 0;
    const lines = L.map((t, i) => h('button', { class: 'pline', type: 'button', onclick: () => { App.unlockAudio(); Speech.say([DocLib.pid(i)]); } }, h('span', { class: 'who' }), h('span', { class: 'ltxt' }, t)));
    const btnDone = h('button', { class: 'btn', type: 'button', disabled: true }, 'Các bạn đọc xong ›');
    const btnAll = h('button', { class: 'btn ghost small', type: 'button', onclick: () => Speech.say(['s:doc-tho-title', ...L.map((_, i) => DocLib.pid(i))]) }, 'Nghe cả bài');
    const mark = () => lines.forEach((b, i) => {
      b.classList.toggle('done', i < idx);
      b.classList.toggle('turn-trau', i === idx && idx % 2 === 0);
      b.classList.toggle('turn-you', i === idx && idx % 2 === 1);
      b.querySelector('.who').textContent = i === idx ? (idx % 2 === 0 ? 'Trâu Con đọc' : 'Các bạn đọc') : '';
    });
    const end = () => { idx = N; mark(); later(() => UI.finish(N, 'Các bạn đã đọc tiếp sức cả bài thơ.'), 500); };
    const trauTurn = async () => {
      if (my !== Runner.seq) return;
      mark(); btnDone.disabled = true; UI.mascot('nod'); UI.progress(idx + ' / ' + N);
      $('#guideText').textContent = 'Mình đọc câu ' + (idx + 1) + ' nhé!';
      await Speech.say([DocLib.pid(idx)]);
      if (my !== Runner.seq) return;
      await wait(400);
      idx++; UI.progress(idx + ' / ' + N);
      if (idx >= N) return end();
      youTurn();
    };
    const youTurn = () => {
      mark(); btnDone.disabled = false; UI.guide(['s:doc-tho-you']);
      try { lines[idx].scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
    };
    btnDone.addEventListener('click', () => {
      if (btnDone.disabled) return;
      btnDone.disabled = true; Sfx.ok(); UI.mascot('nod'); bounce(lines[idx], 'pop-ok');
      idx++; UI.progress(idx + ' / ' + N);
      if (idx >= N) return end();
      later(trauTurn, 600);
    });
    UI.stage.append(h('div', { class: 'poem' },
      h('button', { class: 'poem-head', type: 'button', onclick: () => Speech.say(['s:doc-tho-title']) }, h('strong', null, THO.ten), h('span', null, THO.tg), THO.kho ? h('small', null, THO.kho) : null),
      h('div', { class: 'poem-cols' + (THO.lucBat ? ' lucbat' : '') }, h('div', null, lines.slice(0, Math.ceil(N / 2))), h('div', null, lines.slice(Math.ceil(N / 2)))),
      h('div', { class: 'relay-bar' }, btnDone, btnAll)));
    mark(); UI.progress('0 / ' + N);
    UI.guide(['s:doc-tho-intro']).then(() => { if (my === Runner.seq) later(trauTurn, 300); });
  },
  order() {
    let part = 0, done = 0; const L = THO.lines, N = L.length, P = DocLib.phan(N);
    const show = () => {
      const from = P.slice(0, part).reduce((a, b) => a + b, 0);
      const idxs = Array.from({ length: P[part] }, (_, k) => k + from);
      let order = shuffle(idxs.slice()); if (order.every((v, k) => v === idxs[k])) order = order.reverse();
      docXep(L, idxs, order, ix => DocLib.pid(ix), () => { if (part < P.length - 1) { part++; later(show, 900); } else UI.finish(N, 'Các bạn đã xếp đúng cả bài thơ.'); }, () => UI.progress(++done + ' / ' + N));
      UI.progress(done + ' / ' + N);
      UI.guide(['s:doc-tho-order'], { silent: part > 0 });
    };
    show();
  }
};

/* Xếp thứ tự (dùng cho thơ và trình tự sự việc): kéo hoặc chạm thẻ rồi chạm chỗ */
function docXep(texts, idxs, order, clipOf, onAll, onOne) {
  const picker = Picker(); let placed = 0;
  const slots = idxs.map(ix => { const s = h('div', { class: 'slot-line', 'aria-label': 'Chỗ thứ ' + (ix - idxs[0] + 1) }); s._ix = ix; return s; });
  const tryPlace = (chip, slot) => {
    if (slot._filled || chip._ix !== slot._ix) { UI.no(chip, []); return false; }
    slot._filled = true; slot.classList.add('filled'); slot.append(texts[chip._ix]); chip.remove(); picker.clear(); placed++;
    UI.ok(slot, null); Speech.say([clipOf(chip._ix)]); if (onOne) onOne();
    if (placed === idxs.length) later(onAll, 1200);
    return true;
  };
  slots.forEach(s => asZone(s, picker, tryPlace));
  const chips = order.map(ix => {
    const c = h('button', { class: 'lchip', type: 'button' }, texts[ix]); c._ix = ix;
    draggable(c, { zones: () => slots, onPick: () => Speech.say([clipOf(ix)]), onTap: el => picker.toggle(el), onDrop: (el, z) => tryPlace(el, z) });
    return c;
  });
  UI.stage.replaceChildren(h('div', { class: 'order' }, h('div', { class: 'slots' }, slots), h('div', { class: 'pool' }, chips)));
}

/* ---------- 2. Khởi động: nhìn tranh, chọn từ ---------- */
GAMES.g2 = {
  num: 2, title: 'Khởi động: nhìn tranh đọc từ', icon: 'khoi', desc: '', levels: [], chain: true,
  start() {
    const items = shuffle(DOC.khoi.slice()); let i = 0;
    const show = () => {
      const k = items[i]; let wrong = 0, locked = false;
      const opts = shuffle([k, ...shuffle(DOC.khoi.filter(x => x !== k)).slice(0, 2)]);
      const cap = h('p', { class: 'khoi-cau' }, '');
      const btns = opts.map(x => h('button', { class: 'lbtn', type: 'button', onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (x === k) {
          locked = true; el.classList.add('right'); if (k.cau) cap.textContent = k.cau;
          UI.ok(el, docYay('w:' + k.tu, ...(k.cau ? ['k:' + k.cau] : [])));
          later(() => { i++; if (i < items.length) show(); else UI.finish(items.length, 'Các bạn đã đọc đúng ' + items.length + ' từ.'); }, k.cau ? 3200 : 2000);
        } else { wrong++; UI.no(el, []); if (wrong >= 2) UI.hint(btns[opts.indexOf(k)]); }
      } }, x.tu));
      const pic = DocLib.khoiPic(k);
      const top = pic ? h('button', { class: 'sentpic', type: 'button', 'aria-label': 'Tranh', html: pic, onclick: () => { if (locked) Speech.say(['w:' + k.tu]); } })
        : h('button', { class: 'riddle', type: 'button', onclick: () => Speech.say(['k:' + k.do]) }, h('small', null, 'Đố vui'), ...k.do.split(' / ').map(l => h('span', null, l)));
      UI.stage.replaceChildren(top, cap, h('div', { class: 'lchoices words' }, btns), dotsRow(items.length, i));
      UI.progress((i + 1) + ' / ' + items.length);
      if (pic) UI.guide(['s:doc-khoi-intro'], { silent: i > 0 });
      else UI.guide(['s:doc-khoi-do', 'k:' + k.do], { show: ['s:doc-khoi-do'] });
    };
    show();
  }
};

/* ---------- 3. Từ mới: nối từ với lời giải nghĩa ---------- */
GAMES.g3 = {
  num: 3, title: 'Từ mới', icon: 'tumoi', desc: 'Đọc từ mới, nối với lời giải nghĩa', levels: ['Phần 1', 'Phần 2'], chain: true,
  start(level) {
    const ws = DOC.tuMoi.slice(level * 4, level * 4 + 4); let sel = null, matched = 0; const pairs = [];
    const board = h('div', { class: 'match mean' });
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'match-lines'); svg.setAttribute('aria-hidden', 'true');
    const mid = (el, side) => { const b = board.getBoundingClientRect(), e = el.getBoundingClientRect(); return { x: (side ? e.left : e.right) - b.left, y: e.top + e.height / 2 - b.top }; };
    const drawLines = () => {
      svg.replaceChildren();
      pairs.forEach(([wEl, pEl]) => { const p = mid(wEl, 0), q = mid(pEl, 1); const l = document.createElementNS('http://www.w3.org/2000/svg', 'line'); l.setAttribute('class', 'done'); l.setAttribute('x1', p.x); l.setAttribute('y1', p.y); l.setAttribute('x2', q.x); l.setAttribute('y2', q.y); svg.append(l); });
    };
    const choose = el => { if (el.classList.contains('right')) return; if (sel) sel.classList.remove('selected'); sel = el === sel ? null : el; if (sel) sel.classList.add('selected'); };
    const tryPair = (wEl, pEl) => {
      if (wEl.classList.contains('right') || pEl.classList.contains('right')) return;
      if (sel) sel.classList.remove('selected'); sel = null;
      if (wEl._w === pEl._w) {
        wEl.classList.add('right'); pEl.classList.add('right'); pairs.push([wEl, pEl]); drawLines(); matched++;
        UI.ok([wEl, pEl], docYay('w:' + wEl._w, 'k:' + pEl._m)); UI.progress(matched + ' / ' + ws.length);
        if (matched === ws.length) later(() => UI.finish(ws.length, 'Các bạn đã hiểu ' + ws.length + ' từ mới.'), 3000);
      } else { wEl.classList.add('wrongtry'); UI.no([wEl, pEl], []); later(() => wEl.classList.remove('wrongtry'), 700); }
    };
    const words = shuffle(ws.slice()).map(([w]) => {
      const el = h('button', { class: 'mword', type: 'button', onclick: () => { Speech.say(['w:' + w]); if (sel && sel.classList.contains('mpic')) tryPair(el, sel); else choose(el); } }, w); el._w = w; return el;
    });
    const means = shuffle(ws.slice()).map(([w, m]) => {
      const el = h('button', { class: 'mpic mtext', type: 'button', onclick: () => { if (sel && sel.classList.contains('mword')) tryPair(sel, el); else { Speech.say(['k:' + m]); choose(el); } } }, m); el._w = w; el._m = m; return el;
    });
    board.append(h('div', { class: 'mcol' }, words), h('div', { class: 'mcol pics' }, means), svg);
    UI.stage.replaceChildren(board);
    if ('ResizeObserver' in window) new ResizeObserver(drawLines).observe(board);
    UI.progress('0 / ' + ws.length);
    UI.guide(['s:doc-moi-intro'], { silent: level > 0 });
  }
};

/* ---------- 4. Luyện đọc từ khó: nghe rồi chạm ---------- */
GAMES.g4 = {
  num: 4, title: 'Luyện đọc từ khó', icon: 'tukho', desc: 'Nghe Trâu Con đọc, chạm vào từ khó đúng', levels: [], chain: true,
  start() {
    const items = shuffle(DOC.tuKho.slice()); let i = 0;
    const show = () => {
      const w = items[i]; let wrong = 0, locked = false;
      const opts = shuffle([w, ...shuffle(DOC.tuKho.filter(x => x !== w)).slice(0, 3)]);
      const btns = opts.map(x => h('button', { class: 'lbtn', type: 'button', onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (x === w) { locked = true; el.classList.add('right'); UI.ok(el, docYay('w:' + w)); later(() => { i++; if (i < items.length) show(); else UI.finish(items.length, 'Các bạn đã tìm đúng ' + items.length + ' từ khó.'); }, 1900); }
        else { wrong++; UI.no(el, ['w:' + w]); if (wrong >= 2) UI.hint(btns[opts.indexOf(w)]); }
      } }, x));
      UI.stage.replaceChildren(h('button', { class: 'btn ghost', type: 'button', onclick: () => Speech.say(['w:' + w]) }, 'Nghe lại'), h('div', { class: 'lchoices words four' }, btns), dotsRow(items.length, i));
      UI.progress((i + 1) + ' / ' + items.length);
      UI.guide(i === 0 ? ['s:doc-kho-intro', 'w:' + w] : ['w:' + w], { show: ['s:doc-kho-intro'] });
    };
    show();
  }
};

/* ---------- 5. Đọc từng đoạn, trả lời câu hỏi ---------- */
GAMES.g5 = {
  num: 5, title: 'Đọc từng đoạn', icon: 'doan', desc: 'Đọc từng đoạn (chạm vào câu để nghe), rồi trả lời câu hỏi', levels: ['Đoạn 1', 'Đoạn 2', 'Đoạn 3'], chain: true,
  start(level) {
    const d = DOC.doan[level]; const qs = d.hoi; let i = 0;
    const box = h('div', { class: 'qbox' });
    const all = h('button', { class: 'btn ghost small', type: 'button', onclick: () => Speech.say(DocLib.cauOf(d.text).map(s => 'k:' + s)) }, 'Nghe cả đoạn');
    UI.stage.replaceChildren(h('div', { class: 'reading' }, h('p', { class: 'para-head' }, 'Đoạn ' + (level + 1), all), docDoanEl(d.text)), box);
    const next = () => {
      if (i >= qs.length) return UI.finish(qs.length, 'Các bạn đã đọc xong đoạn ' + (level + 1) + '.');
      UI.progress((i + 1) + ' / ' + qs.length);
      docHoi(box, qs[i], () => { i++; next(); });
      UI.guide(i === 0 && level === 0 ? ['s:doc-doan-intro', 'k:' + qs[0].q] : ['k:' + qs[i].q]);
    };
    next();
  }
};

/* ---------- 6. Đọc hiểu cả bài ---------- */
GAMES.g6 = {
  num: 6, title: 'Đọc hiểu: chọn ý đúng', icon: 'hieu', desc: 'Đọc cả bài, chọn ý đúng A, B hoặc C', levels: [], chain: true,
  start() {
    const qs = DOC.hieu; let i = 0;
    const box = h('div', { class: 'qbox' });
    const story = h('details', { class: 'story' }, h('summary', null, 'Xem lại bài đọc'), ...DOC.doan.map(d => docDoanEl(d.text, 'small')));
    UI.stage.replaceChildren(story, box);
    const next = () => {
      if (i >= qs.length) return UI.finish(qs.length, 'Các bạn đã trả lời đúng ' + qs.length + ' câu hỏi.');
      UI.progress((i + 1) + ' / ' + qs.length);
      docHoi(box, qs[i], () => { i++; next(); });
      UI.guide(i === 0 ? ['s:doc-hieu-intro', 'k:' + qs[0].q] : ['k:' + qs[i].q]);
    };
    next();
  }
};

/* ---------- 7. Trình tự sự việc ---------- */
GAMES.g7 = {
  num: 7, title: 'Sắp xếp sự việc', icon: 'thutu', desc: 'Xếp các sự việc trong bài theo đúng thứ tự', levels: [], chain: true,
  start() {
    const T = DOC.thuTu, idxs = T.map((_, k) => k); let done = 0;
    let order = shuffle(idxs.slice()); if (order.every((v, k) => v === k)) order = order.reverse();
    docXep(T, idxs, order, ix => 'k:' + T[ix], () => UI.finish(T.length, 'Các bạn đã xếp đúng thứ tự.'), () => UI.progress(++done + ' / ' + T.length));
    UI.progress('0 / ' + T.length);
    UI.guide(['s:doc-thutu-intro']);
  }
};

/* ---------- 8. Luyện câu theo mẫu ---------- */
GAMES.g8 = {
  num: 8, title: 'Luyện câu', icon: 'cau', desc: '', levels: [], chain: true,
  start() {
    const items = shuffle(DOC.cau.ds.slice()); let i = 0;
    const show = () => {
      const c = items[i]; const parts = c.split('|').map(s => s.trim()); const picker = Picker(); let placed = 0; const wrongs = new Map();
      const nhan = DOC.cau.nhan && DOC.cau.nhan.length === parts.length ? DOC.cau.nhan : null;
      const slots = parts.map((w, n) => { const s = h('div', { class: 'sslot', 'aria-label': 'Ô thứ ' + (n + 1) }); s._w = w; return s; });
      const place = (tile, slot) => {
        if (slot._done) return false;
        if (tile._w === slot._w) {
          slot._done = true; slot.textContent = tile._w; slot.classList.add('filled'); tile.remove(); picker.clear(); placed++;
          Sfx.ok(); bounce(slot, 'pop-ok');
          if (placed === parts.length) { UI.ok(slots, ['k:' + DocLib.cauGhep(c)]); later(() => { i++; if (i < items.length) show(); else UI.finish(items.length * 2, 'Các bạn đã xếp đúng ' + items.length + ' câu.'); }, 3200); }
          return true;
        }
        const n = (wrongs.get(tile) || 0) + 1; wrongs.set(tile, n); UI.no(tile, []);
        if (n >= 2) { const s = slots.find(x => !x._done && x._w === tile._w); if (s) UI.hint(s); }
        return false;
      };
      const tray = h('div', { class: 'tray' });
      let order = shuffle(parts.map((_, n) => n)); if (order.every((v, k) => v === k)) order = order.reverse();
      order.forEach(n => {
        const w = parts[n]; const t = h('button', { class: 'tile wide', type: 'button' }, w); t._w = w;
        draggable(t, { zones: () => slots.filter(s => !s._done), onPick: () => Speech.say(['w:' + DocLib.bo(w).toLowerCase()]), onTap: el => picker.toggle(el), onDrop: place });
        tray.append(t);
      });
      slots.forEach(s => asZone(s, picker, place));
      UI.stage.replaceChildren(h('p', { class: 'mau-cau' }, 'Mẫu câu: ', h('b', null, DOC.cau.mau)),
        h('div', { class: 'sent-slots cau' }, slots.map((s, n) => h('div', { class: 'sslot-wrap' }, s, nhan ? h('small', null, nhan[n]) : null))), tray, dotsRow(items.length, i));
      UI.progress((i + 1) + ' / ' + items.length);
      UI.guide(['s:doc-cau-intro'], { silent: i > 0 });
    };
    show();
  }
};

/* ---------- 9. Điền từ vào chỗ trống ---------- */
GAMES.g9 = {
  num: 9, title: 'Điền từ', icon: 'dien', desc: 'Chọn từ đúng để điền vào câu trong bài', levels: [], chain: true,
  start() {
    const items = shuffle(DOC.dien.slice()); let i = 0;
    const show = () => {
      const d = items[i]; let wrong = 0, locked = false;
      const [a, b] = d.cau.split('___');
      const gap = h('span', { class: 'gap' }, '?');
      const opts = shuffle([d.dung, ...d.sai]);
      const btns = opts.map(x => h('button', { class: 'lbtn', type: 'button', onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (x === d.dung) { locked = true; el.classList.add('right'); gap.textContent = x; gap.classList.add('ok'); UI.ok(el, docYay('k:' + DocLib.dienDu(d))); later(() => { i++; if (i < items.length) show(); else UI.finish(items.length, 'Các bạn đã điền đúng ' + items.length + ' từ.'); }, 3400); }
        else { wrong++; UI.no(el, []); if (wrong >= 2) UI.hint(btns[opts.indexOf(d.dung)]); }
      } }, x));
      UI.stage.replaceChildren(h('p', { class: 'cloze' }, a, gap, b), h('div', { class: 'lchoices words' }, btns), dotsRow(items.length, i));
      UI.progress((i + 1) + ' / ' + items.length);
      UI.guide(['s:doc-dien-intro'], { silent: i > 0 });
    };
    show();
  }
};

/* ---------- 10. Tô chữ trên khung ô li (từ trong bài) ---------- */
GAMES.g10 = {
  num: 10, title: 'Tô chữ', icon: 'to', desc: '', levels: [], chain: false,
  start() {
    const mp = $('#measurePath');
    const sample = d => { mp.setAttribute('d', d); const L = mp.getTotalLength(); const n = Math.max(24, Math.round(L / 0.05)); const pts = []; for (let k = 0; k <= n; k++) { const p = mp.getPointAtLength(L * k / n); pts.push({ x: p.x, y: p.y }); } return pts; };
    const LET = DOC.to.map(a => {
      const strokes = netChu(a).map(sample); const all = strokes.flat();
      const xs = all.map(p => p.x), ys = all.map(p => p.y);
      return { a, strokes, b: { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(-5, ...ys), y1: Math.max(0, ...ys) } };
    });
    const doneSet = new Set(); let cur = 0;
    const chips = LET.map((s, k) => h('button', { class: 'schip', type: 'button', 'aria-label': 'Từ ' + s.a, onclick: () => { App.unlockAudio(); go(k); } }, s.a));
    const name = h('h3', { class: 'stroke-name' });
    const canvas = h('canvas', { id: 'traceCanvas', 'aria-label': 'Khung ô li để tô chữ' });
    const btnReset = h('button', { class: 'btn ghost small', type: 'button', onclick: () => go(cur) }, 'Tô lại');
    const btnVideo = h('button', { class: 'btn ghost small', type: 'button', onclick: () => { App.unlockAudio(); demo(); } }, 'Xem Trâu Con viết');
    const btnNext = h('button', { class: 'btn small', type: 'button', onclick: () => next() }, 'Từ tiếp theo ›');
    UI.stage.append(h('div', { class: 'trace' }, h('div', { class: 'stroke-row' }, chips), name, h('div', { class: 'trace-card wide' }, canvas), h('div', { class: 'trace-actions' }, btnVideo, btnReset, btnNext)));
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
    const demo = () => {
      const k = cur, total = LET[k].strokes.reduce((n, p) => n + p.length, 0), t0 = performance.now();
      st.demo = 0;
      const step = () => {
        if (cur !== k || !st || st.demo == null) return;
        st.demo = (performance.now() - t0) / 1000 * 70; draw();
        if (st.demo < total + 20) requestAnimationFrame(step); else { st.demo = null; draw(); }
      };
      requestAnimationFrame(step);
    };
    const resize = () => { const r = canvas.getBoundingClientRect(); if (!r.width) return; dpr = Math.min(window.devicePixelRatio || 1, 2.5); W = r.width; H = r.height; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); draw(); };
    const go = k => {
      cur = k; st = { stroke: 0, progress: 0, ink: [], drawing: false, done: false, off: false };
      chips.forEach((c, n) => { c.setAttribute('aria-current', String(n === k)); c.classList.toggle('done', doneSet.has(n)); });
      name.textContent = 'Từ “' + LET[k].a + '”'; btnNext.textContent = k === LET.length - 1 ? 'Hoàn thành ›' : 'Từ tiếp theo ›';
      UI.progress(doneSet.size + ' / ' + LET.length);
      UI.guide(k === 0 && !doneSet.size ? ['s:doc-to-intro', 'w:' + LET[k].a] : ['w:' + LET[k].a]);
      resize();
    };
    const next = () => { if (cur < LET.length - 1) go(cur + 1); else UI.finish(LET.length, 'Các bạn đã tô ' + doneSet.size + ' / ' + LET.length + ' từ.'); };
    const local = e => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const say = id => { const t = performance.now(); if (t - lastHint > 3500) { lastHint = t; Speech.say([id]); } };
    const advance = q => {
      const v = view(), p = pts(); let best = Infinity;
      for (let j = st.progress; j < Math.min(st.progress + 30, p.length); j++) { const r = P(p[j], v); const d = Math.hypot(r.x - q.x, r.y - q.y); if (d <= v.tol) st.progress = j + 1; best = Math.min(best, d); }
      if (best > v.tol * 2.4 && !st.off) { st.off = true; UI.no(null, ['s:doc-to-off']); UI.mistakes--; }
      if (st.progress >= p.length - 2) {
        if (st.stroke < LET[cur].strokes.length - 1) { st.stroke++; st.progress = 0; st.drawing = false; Sfx.ok(); say('s:doc-to-next'); }
        else win();
      }
    };
    const win = () => {
      st.done = true; st.drawing = false; doneSet.add(cur); chips[cur].classList.add('done');
      UI.progress(doneSet.size + ' / ' + LET.length); draw();
      UI.ok(chips[cur], docYay('w:' + LET[cur].a));
      const k = cur; later(() => { if (cur === k) next(); }, 2400);
    };
    canvas.addEventListener('pointerdown', e => {
      if (!st || st.done) return;
      e.preventDefault(); App.unlockAudio(); st.demo = null;
      const q = local(e), v = view(), p = pts();
      const target = P(p[Math.min(st.progress, p.length - 1)], v);
      if (Math.hypot(target.x - q.x, target.y - q.y) > v.tol * 1.8) { say(st.progress ? 's:doc-to-off' : 's:doc-to-start'); return; }
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


/* ---------- 1'. Bài ôn tập: đoàn tàu các âm / vần đã học (thay cho bài thơ khi DOC có "nhom") ----------
   DOC.nhom = [{ bai: 42, chu: ['ap', 'ăp', 'âp'], tu: ['tháp', 'nắp', 'tập'] }, …]  mỗi bài cũ là một “ga” */
const OnLib = {
  ten: x => (DIGRAPHS.includes(x) ? 'd:' : Array.from(x).length === 1 ? 'l:' : 'v:') + x,
  tatCa: () => DOC.nhom.flatMap(g => g.chu),
  gaTen: g => g.ten || (g.bai ? 'Bài ' + g.bai : ''),
  // Từ đưa về ga: chữ cái / chữ ghép thì đọc theo âm, còn lại đọc cả từ
  tuDoc: w => (ALPHABET.includes(w) || DIGRAPHS.includes(w)) ? OnLib.ten(w) : 'w:' + w,
  loai: () => DOC.loai || (DOC.nhom.some(g => g.chu.some(x => OnLib.ten(x) === 'v:' + x)) ? 'vần' : 'âm')
};
const GAME_ON = {
  num: 1, title: 'Đoàn tàu các vần', icon: 'tau', desc: '', levels: ['Nghe và chọn', 'Đưa từ về đúng ga'], chain: true,
  start(level) { [this.nghe, this.ga][level].call(this); },
  tau() {
    return h('div', { class: 'tau' }, h('span', { class: 'dau-tau', html: TAU_SVG }),
      DOC.nhom.map(g => h('div', { class: 'toa-nhom' }, OnLib.gaTen(g) ? h('small', null, OnLib.gaTen(g)) : null,
        h('div', null, g.chu.map(x => h('button', { class: 'toa', type: 'button', onclick: e => { App.unlockAudio(); Speech.say([OnLib.ten(x)]); bounce(e.currentTarget, 'speaking', 900); } }, x))))));
  },
  nghe() {
    const all = OnLib.tatCa(); const Q = shuffle(all.slice()).slice(0, Math.min(6, all.length)); let i = 0;
    const show = () => {
      const a = Q[i]; let wrong = 0, locked = false;
      const g = DOC.nhom.find(n => n.chu.includes(a));
      const gan = shuffle(g.chu.filter(x => x !== a)); const xa = shuffle(all.filter(x => x !== a && !gan.includes(x)));
      const opts = shuffle([a, ...[...gan, ...xa].slice(0, 2)]);
      const btns = opts.map(x => h('button', { class: 'lbtn', type: 'button', onclick: e => {
        if (locked) return; const el = e.currentTarget;
        if (x === a) {
          locked = true; el.classList.add('right'); UI.ok(el, docYay(OnLib.ten(a)));
          later(() => { i++; if (i < Q.length) show(); else UI.finish(Q.length, 'Các bạn đã nhận ra đúng ' + Q.length + ' ' + OnLib.loai() + '.'); }, 1600);
        } else { wrong++; UI.no(el, [OnLib.ten(a)]); if (wrong >= 2) UI.hint(btns[opts.indexOf(a)]); }
      } }, x));
      UI.stage.replaceChildren(this.tau(),
        h('button', { class: 'ear-btn', type: 'button', html: SPEAKER, onclick: () => Speech.say([OnLib.ten(a)]) }, 'Nghe lại'),
        h('div', { class: 'lchoices' }, btns), dotsRow(Q.length, i));
      UI.progress((i + 1) + ' / ' + Q.length);
      UI.guide(i === 0 ? ['s:on-nghe', OnLib.ten(a)] : [OnLib.ten(a)], { show: ['s:on-nghe'] });
    };
    show();
  },
  ga() {
    // Mỗi lượt tối đa 4 ga, mỗi ga 2 từ
    const nhom = shuffle(DOC.nhom.slice()); const luot = [];
    for (let k = 0; k < nhom.length; k += 4) luot.push(nhom.slice(k, k + 4));
    if (luot.length > 1 && luot[luot.length - 1].length === 1) luot[luot.length - 2].push(luot.pop()[0]);
    const moi = l => Math.max(2, Math.ceil(8 / l.length));
    const N = luot.reduce((s, l) => s + l.reduce((t, g) => t + Math.min(moi(l), g.tu.length), 0), 0); let r = 0, done = 0;
    const show = () => {
      const picker = Picker(); const gs = luot[r];
      const words = shuffle(gs.flatMap(g => shuffle(g.tu.slice()).slice(0, moi(gs)).map(w => ({ w, g }))));
      let left = words.length;
      const tryPlace = (chip, zone) => {
        if (chip._g !== zone._g) { UI.no(chip, [OnLib.tuDoc(chip._w)]); picker.clear(); return false; }
        zone.querySelector('.ga-tu').append(h('span', { class: 'gword' }, chip._w)); chip.remove(); picker.clear();
        UI.ok(zone, null); Speech.say([OnLib.tuDoc(chip._w)]); UI.progress(++done + ' / ' + N);
        if (--left === 0) later(() => { r++; if (r < luot.length) show(); else UI.finish(N, 'Các bạn đã đưa ' + N + ' ' + (DOC.nhom[0].tu.every(w => ALPHABET.includes(w) || DIGRAPHS.includes(w)) ? 'chữ' : 'từ') + ' về đúng ga.'); }, 1300);
        return true;
      };
      const zones = gs.map(g => { const z = h('div', { class: 'ga' }, OnLib.gaTen(g) ? h('strong', null, OnLib.gaTen(g)) : null, h('span', { class: 'ga-chu' }, g.chu.join(', ')), h('div', { class: 'ga-tu' })); z._g = g; return asZone(z, picker, tryPlace); });
      const chips = words.map(({ w, g }) => {
        const c = h('button', { class: 'lchip', type: 'button' }, w); c._w = w; c._g = g;
        draggable(c, { zones: () => zones, onPick: () => Speech.say([OnLib.tuDoc(w)]), onTap: el => picker.toggle(el), onDrop: (el, z) => tryPlace(el, z) });
        return c;
      });
      UI.stage.replaceChildren(h('div', { class: 'ga-wrap' }, h('div', { class: 'ga-row' }, zones), h('div', { class: 'pool' }, chips)));
      UI.progress(done + ' / ' + N);
      UI.guide(['s:on-ga'], { silent: r > 0 });
    };
    show();
  }
};
const TAU_SVG = SV(`<rect x="18" y="34" width="62" height="40" rx="8" fill="#D9573F"/><rect x="58" y="16" width="26" height="30" rx="5" fill="#DDAA55"/><rect x="64" y="22" width="14" height="12" rx="2" fill="#FFFCF6"/><rect x="24" y="22" width="10" height="14" fill="#3A3B3C"/><circle cx="32" cy="80" r="9" fill="#3A3B3C"/><circle cx="66" cy="80" r="9" fill="#3A3B3C"/><path d="M10 74 L18 64" stroke-width="4"/>`);

/* Biểu tượng thẻ trò chơi ở trang chính */
const ICONS = {
  tau: () => TAU_SVG,
  tho: SV(`<path d="M8 30 V84 C24 80 40 80 50 88 C60 80 76 80 92 84 V30" stroke="#C68B59" stroke-width="3"/><path d="M50 30 C40 22 24 22 12 26 V78 C24 74 40 74 50 82 Z" fill="#FFFCF6"/><path d="M50 30 C60 22 76 22 88 26 V78 C76 74 60 74 50 82 Z" fill="#FFFCF6"/><path d="M20 38 H40 M20 47 H40 M20 56 H36 M60 38 H80 M60 47 H80 M60 56 H76" stroke="#A39588" stroke-width="2"/><path d="M22 66 h5 M58 66 h5" stroke="#D9573F" stroke-width="4"/>`),
  khoi: () => { const k = DOC.khoi.find(x => DocLib.khoiPic(x)) || null; return k ? SV(`<g transform="translate(22 0) scale(.56)">${DocLib.khoiPic(k).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g><rect x="14" y="62" width="72" height="28" rx="8" fill="#FFFCF6"/>${TXT(50, 82, 16, k.tu)}`) : SV(`<rect x="10" y="12" width="80" height="50" rx="10" fill="#FFFCF6"/>${TXT(50, 50, 34, '?', '#C68B59', 800)}<rect x="14" y="68" width="72" height="22" rx="8" fill="#F6E3BC"/>${TXT(50, 84, 13, DOC.khoi[0].tu)}`); },
  tumoi: () => SV(`<rect x="4" y="18" width="40" height="24" rx="6" fill="#FFFCF6"/>${TXT(24, 35, 11, DOC.tuMoi[0][0])}<rect x="56" y="58" width="40" height="28" rx="6" fill="#F6E3BC"/><path d="M62 68 H90 M62 76 H84" stroke="#A39588" stroke-width="2.5"/><path d="M44 30 C56 32 50 66 56 70" stroke="#3E8E4A" stroke-width="3" stroke-dasharray="4 4"/>`),
  tukho: () => SV(`<path d="M10 40 h8 l12 -10 v40 l-12 -10 h-8 Z" fill="#3A3B3C" stroke="none"/><path d="M36 40 c4 4 4 16 0 20" stroke-width="3"/><rect x="46" y="34" width="50" height="32" rx="8" fill="#FFFCF6"/>${TXT(71, 55, 11, DOC.tuKho[0])}`),
  doan: SV(`<rect x="14" y="10" width="72" height="80" rx="6" fill="#FFFCF6"/><path d="M24 26 H76 M24 36 H76 M24 46 H66" stroke="#A39588" stroke-width="3"/><path d="M24 60 H76 M24 70 H58" stroke="#DDAA55" stroke-width="5"/>`),
  hieu: SV(`<rect x="10" y="12" width="80" height="20" rx="6" fill="#FFFCF6"/><circle cx="22" cy="46" r="7" fill="#CFE6C0"/><circle cx="22" cy="64" r="7" fill="#FFFCF6"/><circle cx="22" cy="82" r="7" fill="#FFFCF6"/><path d="M36 46 H80 M36 64 H72 M36 82 H76" stroke="#A39588" stroke-width="3"/><path d="M18 46 l3 3 l6 -7" stroke="#3E8E4A" stroke-width="2.5"/>`),
  thutu: SV(`<rect x="8" y="12" width="84" height="20" rx="6" fill="#FFFCF6"/><rect x="8" y="40" width="84" height="20" rx="6" fill="#FFFCF6"/><rect x="8" y="68" width="84" height="20" rx="6" fill="#FFFCF6"/>${TXT(18, 28, 13, '1')}${TXT(18, 56, 13, '2')}${TXT(18, 84, 13, '3')}<path d="M30 22 H80 M30 50 H72 M30 78 H76" stroke="#A39588" stroke-width="3"/>`),
  cau: SV(`<rect x="4" y="36" width="28" height="26" rx="6" fill="#F6E3BC"/><rect x="36" y="36" width="20" height="26" rx="6" fill="#FFFCF6"/><rect x="60" y="36" width="36" height="26" rx="6" fill="#CFE6C0"/><path d="M10 49 H26 M42 49 H50 M66 49 H90" stroke="#3A3B3C" stroke-width="3"/>`),
  dien: SV(`<rect x="6" y="30" width="88" height="40" rx="8" fill="#FFFCF6"/><path d="M14 50 H34 M66 50 H86" stroke="#A39588" stroke-width="3"/><rect x="38" y="38" width="24" height="24" rx="4" fill="#F6E3BC" stroke-dasharray="4 3"/>${TXT(50, 57, 16, '?')}`),
  to: () => SV(`<rect x="8" y="14" width="70" height="74" rx="6" fill="#FFFFFF"/><path d="M8 34 H78 M8 52 H78 M8 70 H78 M26 14 V88 M44 14 V88 M62 14 V88" stroke="#BFDDE8" stroke-width="1.6"/>${TXT(42, 70, 30, DOC.to[0], '#D9573F', 800).replace('stroke="none"', 'stroke="none" opacity=".55"')}<g transform="rotate(35 80 60)"><rect x="75" y="22" width="10" height="48" rx="2" fill="#F2C14E"/><path d="M75 70 L80 82 L85 70 Z" fill="#F6D2B8"/><path d="M78.5 78 L80 82 L81.5 78 Z" fill="#3A3B3C"/></g>`)
};

/* Điền mô tả theo dữ liệu bài; gọi ở cuối bai.js */
function docSetup() {
  if (!PHRASES.welcome) PHRASES.welcome = 'Chào các bạn! Hôm nay mình đọc bài “' + LESSON.ten + '” nhé!';
  if (DOC.tho) {
    THO = Object.assign({ tg: '', id: 'tho', lucBat: true }, DOC.tho);
    PHRASES['doc-tho-title'] = DOC.tho.doc || (THO.ten.charAt(0) + THO.ten.slice(1).toLowerCase() + '.');
    GAMES.g1.title = DOC.tho.tieuDe || 'Thơ “' + THO.ten.charAt(0) + THO.ten.slice(1).toLowerCase() + '”';
    GAMES.g1.desc = 'Đọc tiếp sức ' + (DOC.tho.moTa || 'bài thơ') + ', rồi xếp câu thơ theo thứ tự';
  }
  GAMES.g2.title = DOC.khoi.every(k => DocLib.khoiPic(k)) ? 'Khởi động: nhìn tranh đọc từ' : 'Khởi động: đố vui';
  GAMES.g2.desc = (DOC.khoi.every(k => DocLib.khoiPic(k)) ? 'Nhìn tranh, chọn từ đúng: ' : 'Nhìn tranh hoặc nghe câu đố, chọn từ đúng: ') + DOC.khoi.map(k => k.tu).join(', ');
  GAMES.g3.levels = DOC.tuMoi.length > 4 ? ['Phần 1', 'Phần 2'] : [];
  GAMES.g8.desc = 'Xếp các phần thành câu theo mẫu “' + DOC.cau.mau + '”';
  GAMES.g10.desc = 'Tô các từ ' + DOC.to.join(', ') + ' theo nét chấm đỏ trên khung ô li';
  if (DOC.nhom) {
    GAMES.g1 = GAME_ON; const loai = OnLib.loai();
    GAME_ON.title = 'Đoàn tàu các ' + loai;
    GAME_ON.desc = 'Ôn ' + OnLib.tatCa().join(', ') + ': nghe và chọn ' + loai + ', rồi đưa từ về đúng ga';
    OnLib.tatCa().forEach(x => { if (OnLib.ten(x).startsWith('v:')) CLIPS['v:' + x] = 'vần ' + x; });
    DOC.nhom.forEach(g => g.tu.forEach(w => { CLIPS['w:' + w] = w; }));
  }
  docRegisterClips();
  // Trò ôn từ vựng (từ có tranh của các bài trước): chung/tro-on.js
  Object.assign(ICONS, ICONS_THEM);
  const them = OnThem.setup({ tu: (DOC.khoi || []).map(k => k.tu), vao: ['g16', 'g15'], doVui: DOC.doVui });
  GAME_ORDER.push('g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', ...them);
  GAME_ORDER.forEach((id, k) => { GAMES[id].num = k + 1; });
}
