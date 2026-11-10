/* =====================================================================
   CÁC TRÒ CHƠI THÊM (dùng chung cho mẫu bo-am và bo-doc)
   g12 Đọc nhanh – không nhầm (theo slide)   g13 Nghe – viết (theo slide)
   g14 Ôn chữ cái                             g15 Ôn từ vựng (từ có tranh của các bài đã học trước)
   Mẫu bài gọi OnThem.setup({ tu, vao }) trong hàm setup của mẫu:
     tu:  danh sách từ của bài (để đọc nhanh, nghe – viết)
     vao: các trò muốn bật, vd. ['g12', 'g13', 'g14', 'g15']
   g16 Đố vui (theo slide; chỉ bài nào có DOC.doVui = [{ do: 'câu đố / dòng 2', tu: 'đáp án' }])
   TU_CU = [[từ, khóa tranh], …] do tools/build.mjs điền: từ có tranh của các bài trước bài này.
   ===================================================================== */
Object.assign(PHRASES, {
  'nhanh-intro': 'Nghe mình đọc, các bạn chạm thật nhanh vào từ đúng nhé!',
  'nghe-intro': 'Nghe mình đọc, rồi ghép các mảnh chữ thành từ nhé!',
  'chu-nghe': 'Nghe rồi chạm vào chữ đúng nhé!',
  'chu-hoa': 'Chữ in hoa này là chữ thường nào?',
  'chu-thieu': 'Chữ nào còn thiếu?',
  'tv-tranh': 'Tranh gì đây? Các bạn chọn từ đúng nhé!',
  'tv-nghe': 'Nghe rồi chạm vào tranh đúng nhé!',
  'dv-intro': 'Đố các bạn đây là gì?'
});

const OnThem = (() => {
  let TU = [], DV = [];
  const tuCu = () => (typeof TU_CU !== 'undefined' ? TU_CU : []).filter(([w, k]) => TRANH[k]);
  // Tiếng → các mảnh: âm đầu + phần còn lại (vần có dấu thanh); tiếng không tách được thì giữ nguyên
  const manh = t => {
    const on = VN.onsetOf(t), cs = VN.chars(t);
    const n = Array.from(on).length;
    if (!on || n >= cs.length || !VN.letters(cs.slice(n).join(''))) return [t];
    if (!VN.stripTone(cs.slice(n).join('')).replace(/[^\p{L}]/gu, '')) return [t];
    return [cs.slice(0, n).join(''), cs.slice(n).join('')];
  };
  const tieng = w => w.split(' ').map(x => VN.letters(x).toLowerCase()).filter(Boolean);
  const setup = ({ tu, vao, doVui }) => {
    TU = [...new Set(tu.map(w => w.toLowerCase()))];
    DV = doVui || [];
    DV.forEach((d, i) => { CLIPS['dv:' + i] = d.do.split(' / ').join('. '); CLIPS['w:' + d.tu] = d.tu; });
    GAMES.g16.desc = 'Nghe câu đố, chọn đáp án: ' + DV.map(d => d.tu).join(', ');
    tuCu().forEach(([w]) => { CLIPS['w:' + w] = w; });
    TU.forEach(w => { CLIPS['w:' + w] = w; });
    GAMES.g12.desc = 'Nghe Trâu Con đọc, chạm thật nhanh vào từ đúng';
    GAMES.g13.desc = 'Nghe từ, ghép âm đầu và vần thành từ';
    GAMES.g14.desc = 'Nghe chọn chữ, ghép chữ hoa với chữ thường, tìm chữ còn thiếu';
    const cu = tuCu();
    GAMES.g15.desc = cu.length >= 6 ? 'Ôn lại từ của các bài trước: nhìn tranh chọn từ, nghe từ chọn tranh' : 'Nhìn tranh chọn từ, nghe từ chọn tranh';
    return vao.filter(id => id !== 'g16' || DV.length >= 3).filter(id => id !== 'g13' || TU.some(w => tieng(w).some(t => manh(t).length > 1)));
  };
  return { setup, manh, tieng, get TU() { return TU; }, get DV() { return DV; }, tuCu };
})();

/* Thẻ chọn một trong nhiều: Trâu Con đọc mục cần tìm; đúng thì sáng xanh và sang lượt sau */
function onLuot({ n, ve, xong }) {
  let i = 0;
  const show = () => {
    let wrong = 0, locked = false;
    const { truoc = [], lua, dung, noi = [], hoi, kieu = 'lbtn', lop = '' } = ve(i);
    const btns = lua.map(x => {
      const b = kieu === 'choice'
        ? h('button', { class: 'choice', type: 'button', 'aria-label': 'Tranh', html: x.html })
        : h('button', { class: 'lbtn ' + lop, type: 'button' }, x.text);
      b.addEventListener('click', () => {
        if (locked) return;
        if (x.key === dung) {
          locked = true; b.classList.add('right'); UI.ok(b, noi.length ? noi : null);
          later(() => { i++; if (i < n) show(); else xong(n); }, 1500);
        } else {
          wrong++; UI.no(b, noi.length && wrong >= 2 ? noi : []);
          if (wrong >= 2) UI.hint(btns[lua.findIndex(y => y.key === dung)]);
        }
      });
      return b;
    });
    UI.stage.replaceChildren(...truoc, h('div', { class: kieu === 'choice' ? 'choices' : 'lchoices ' + lop }, btns), dotsRow(n, i));
    UI.progress((i + 1) + ' / ' + n);
    if (hoi) UI.guide(hoi.ids, hoi.o || {});
  };
  show();
}

/* ---------- 12. Đọc nhanh – không nhầm ---------- */
GAMES.g12 = {
  num: 12, title: 'Đọc nhanh – không nhầm', icon: 'nhanh', desc: '', levels: [], chain: true,
  start() {
    const pool = OnThem.TU.slice(); const N = Math.min(8, pool.length);
    const order = shuffle(pool.slice()).slice(0, N);
    onLuot({
      n: N,
      ve: i => {
        const w = order[i];
        const lua = shuffle([w, ...shuffle(pool.filter(x => x !== w)).slice(0, 5)]).map(x => ({ key: x, text: x }));
        const bar = h('div', { class: 'tia', 'aria-hidden': 'true' }, h('span'));
        const nghe = h('button', { class: 'btn ghost small nghe-lai', type: 'button', onclick: () => Speech.say(['w:' + w]) }, 'Nghe lại');
        return { truoc: [h('div', { class: 'nhanh-dau' }, bar, nghe)], lua, dung: w, lop: 'words nhanh',
          hoi: { ids: i === 0 ? ['s:nhanh-intro', 'w:' + w] : ['w:' + w], o: { show: ['s:nhanh-intro'] } } };
      },
      xong: n => UI.finish(n, 'Các bạn đã đọc nhanh, đúng ' + n + ' từ.')
    });
  }
};

/* ---------- 13. Nghe – viết: ghép âm đầu và vần thành từ ---------- */
GAMES.g13 = {
  num: 13, title: 'Nghe – viết', icon: 'nghe', desc: '', levels: [], chain: true,
  start() {
    const T = OnThem.tieng;
    const ok = OnThem.TU.filter(w => T(w).length <= 3 && T(w).some(t => OnThem.manh(t).length > 1));
    const items = shuffle(ok.slice()).slice(0, 5);
    const allManh = [...new Set(OnThem.TU.flatMap(w => T(w).flatMap(OnThem.manh)))];
    let i = 0;
    const show = () => {
      const w = items[i]; const parts = T(w).map(OnThem.manh); const need = parts.flat();
      let k = 0, wrong = 0;
      const slots = parts.map(p => h('span', { class: 'nv-tieng' }, p.map(() => h('span', { class: 'nv-o' }))));
      const flat = slots.flatMap(s => [...s.children]);
      const extra = shuffle(allManh.filter(m => !need.includes(m))).slice(0, Math.max(2, 6 - need.length));
      const tiles = shuffle([...new Set(need), ...extra]).map(m => {
        const b = h('button', { class: 'lbtn manh', type: 'button' }, m);
        b.addEventListener('click', () => {
          if (k >= need.length || b.classList.contains('right')) return;
          if (m === need[k]) {
            flat[k].textContent = m; flat[k].classList.add('filled'); k++;
            if (!need.slice(k).includes(m)) b.classList.add('right');
            Sfx.ok(); bounce(flat[k - 1], 'pop-ok');
            if (k === need.length) {
              UI.ok(slots, ['w:' + w]);
              later(() => { i++; if (i < items.length) show(); else UI.finish(items.length, 'Các bạn đã nghe và ghép đúng ' + items.length + ' từ.'); }, 1900);
            }
          } else { wrong++; UI.no(b, wrong >= 2 ? ['w:' + w] : []); if (wrong >= 2) UI.hint(tiles.find(t => t.textContent === need[k])); }
        });
        return b;
      });
      UI.stage.replaceChildren(
        h('button', { class: 'nv-loa', type: 'button', 'aria-label': 'Nghe từ', html: SPEAKER, onclick: () => Speech.say(['w:' + w]) }),
        h('div', { class: 'nv-tu' }, slots),
        h('div', { class: 'lchoices words' }, tiles), dotsRow(items.length, i));
      UI.progress((i + 1) + ' / ' + items.length);
      UI.guide(i === 0 ? ['s:nghe-intro', 'w:' + w] : ['w:' + w], { show: ['s:nghe-intro'] });
    };
    show();
  }
};

/* ---------- 14. Ôn chữ cái ---------- */
GAMES.g14 = {
  num: 14, title: 'Ôn chữ cái', icon: 'chu', desc: '', levels: ['Nghe chọn chữ', 'Chữ hoa – chữ thường', 'Chữ còn thiếu'], chain: true,
  start(level) {
    const A = ALPHABET, up = c => c.toUpperCase();
    // Các chữ dễ nhầm đứng cạnh nhau để phải nghe, nhìn kỹ
    const GAN = [['a', 'ă', 'â'], ['o', 'ô', 'ơ'], ['u', 'ư'], ['e', 'ê'], ['d', 'đ'], ['b', 'd', 'p', 'q'], ['m', 'n'], ['i', 'y'], ['s', 'x'], ['c', 'k', 'q'], ['l', 'h']];
    const ban = c => { const g = GAN.find(x => x.includes(c)); return g ? g.filter(x => x !== c) : []; };
    const luaChon = (c, n) => shuffle([c, ...shuffle(ban(c)).slice(0, 2), ...shuffle(A.filter(x => x !== c && !ban(c).includes(x)))].slice(0, n));
    const order = shuffle(A.slice()).slice(0, 6);
    if (level === 0) return onLuot({
      n: order.length,
      ve: i => ({ lua: luaChon(order[i], 4).map(x => ({ key: x, text: x })), dung: order[i], noi: ['l:' + order[i]],
        hoi: { ids: i === 0 ? ['s:chu-nghe', 'l:' + order[i]] : ['l:' + order[i]], o: { show: ['s:chu-nghe'] } } }),
      xong: n => UI.finish(n, 'Các bạn đã nghe và chọn đúng ' + n + ' chữ.')
    });
    if (level === 1) return onLuot({
      n: order.length,
      ve: i => ({ truoc: [h('button', { class: 'wordcard', type: 'button', onclick: () => Speech.say(['l:' + order[i]]) }, up(order[i]))],
        lua: luaChon(order[i], 4).map(x => ({ key: x, text: x })), dung: order[i], noi: ['l:' + order[i]],
        hoi: { ids: ['s:chu-hoa'], o: { silent: i > 0 } } }),
      xong: n => UI.finish(n, 'Các bạn đã ghép đúng ' + n + ' cặp chữ hoa, chữ thường.')
    });
    const starts = shuffle(A.slice(0, A.length - 3).map((_, k) => k)).slice(0, 5);
    onLuot({
      n: starts.length,
      ve: i => {
        const s = starts[i], seq = A.slice(s, s + 4), miss = 1 + Math.floor(Math.random() * 3), c = seq[miss];
        const row = h('div', { class: 'chu-day' }, seq.map((x, k) => h('span', { class: k === miss ? 'gap' : '' }, k === miss ? '?' : x)));
        return { truoc: [row], lua: luaChon(c, 3).map(x => ({ key: x, text: x })), dung: c, noi: ['l:' + c], hoi: { ids: ['s:chu-thieu'], o: { silent: i > 0 } } };
      },
      xong: n => UI.finish(n, 'Các bạn đã tìm đúng ' + n + ' chữ còn thiếu trong bảng chữ cái.')
    });
  }
};

/* ---------- 15. Ôn từ vựng (từ có tranh của các bài trước; bài đầu tiên dùng từ của chính bài) ---------- */
GAMES.g15 = {
  num: 15, title: 'Ôn từ vựng', icon: 'tuvung', desc: '', levels: ['Nhìn tranh, chọn từ', 'Nghe từ, chọn tranh'], chain: true,
  start(level) {
    let kho = OnThem.tuCu();
    if (kho.length < 6) kho = [...kho, ...OnThem.TU.filter(w => TRANH[w]).map(w => [w, w])];
    const seen = new Set(); kho = kho.filter(([w, k]) => !seen.has(k) && seen.add(k));
    // Ưu tiên từ của các bài gần đây, thêm vài từ của bài xa hơn
    const gan = kho.slice(-24), items = shuffle(gan.slice()).slice(0, 6);
    const pic = k => TRANH[k];
    onLuot({
      n: items.length,
      ve: i => {
        const [w, k] = items[i];
        const khac = shuffle(kho.filter(x => x[1] !== k && x[0] !== w)).slice(0, 2);
        if (level === 0) return {
          truoc: [h('button', { class: 'sentpic', type: 'button', 'aria-label': 'Tranh', html: pic(k), onclick: () => Speech.say(['s:tv-tranh']) })],
          lua: shuffle([[w, k], ...khac]).map(([x]) => ({ key: x, text: x })), dung: w, lop: 'words', noi: ['w:' + w],
          hoi: { ids: ['s:tv-tranh'], o: { silent: i > 0 } } };
        return {
          truoc: [h('button', { class: 'wordcard phrase', type: 'button', onclick: () => Speech.say(['w:' + w]) }, w)],
          lua: shuffle([[w, k], ...khac]).map(([x, kk]) => ({ key: x, html: pic(kk) })), dung: w, kieu: 'choice', noi: ['w:' + w],
          hoi: { ids: i === 0 ? ['s:tv-nghe', 'w:' + w] : ['w:' + w], o: { show: ['s:tv-nghe'] } } };
      },
      xong: n => UI.finish(n, 'Các bạn đã ôn đúng ' + n + ' từ.')
    });
  }
};

/* ---------- 16. Đố vui (câu đố trong slide) ---------- */
GAMES.g16 = {
  num: 16, title: 'Đố vui', icon: 'dovui', desc: '', levels: [], chain: true,
  start() {
    const D = OnThem.DV, items = shuffle(D.map((d, i) => ({ ...d, i })));
    onLuot({
      n: items.length,
      ve: k => {
        const d = items[k];
        const the = h('button', { class: 'wordcard sentence dv-cau', type: 'button', onclick: () => Speech.say(['dv:' + d.i]) }, d.do.split(' / ').map(x => h('span', null, x)));
        const lua = shuffle([d.tu, ...shuffle(D.map(x => x.tu).filter(x => x !== d.tu)).slice(0, 2)]).map(x => ({ key: x, text: x }));
        return { truoc: [the], lua, dung: d.tu, lop: 'words', noi: ['w:' + d.tu], hoi: { ids: k === 0 ? ['s:dv-intro', 'dv:' + d.i] : ['dv:' + d.i], o: { show: ['s:dv-intro'] } } };
      },
      xong: n => UI.finish(n, 'Các bạn đã giải đúng ' + n + ' câu đố.')
    });
  }
};

const ICONS_THEM = {
  dovui: SV(`<circle cx="50" cy="50" r="40" fill="#F6E3BC"/>${TXT(50, 70, 56, '?', '#C68B59')}`),
  nhanh: SV(`<path d="M56 6 L22 56 H46 L38 94 L78 40 H54 Z" fill="#F2C14E"/>`),
  nghe: SV(`<path d="M10 40 h12 l16 -14 v48 l-16 -14 H10 Z" fill="#DDAA55"/><path d="M48 36 c5 4 5 24 0 28 M56 28 c10 8 10 36 0 44" stroke="#3A3B3C"/><rect x="62" y="56" width="32" height="32" rx="6" fill="#FFFCF6"/>${TXT(78, 80, 20, 'b')}`),
  chu: SV(`<rect x="6" y="14" width="40" height="40" rx="8" fill="#FFFCF6"/>${TXT(26, 46, 28, 'A')}<rect x="54" y="46" width="40" height="40" rx="8" fill="#F6E3BC"/>${TXT(74, 78, 28, 'a')}<path d="M40 64 C46 74 52 74 56 70" stroke="#C68B59"/>`),
  tuvung: SV(`<rect x="8" y="10" width="84" height="80" rx="10" fill="#FFFCF6"/><path d="M50 14 V86" stroke="#C68B59"/><circle cx="30" cy="40" r="12" fill="#E8743B"/><path d="M30 28 c2 -6 6 -8 10 -8" stroke="#4E8A3A"/>${TXT(70, 46, 16, 'cam')}<path d="M18 66 H42 M58 66 H82" stroke="#BFDDE8"/>`)
};
