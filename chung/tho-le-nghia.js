/* =====================================================================
   THƠ LỄ NGHĨA – trò số 1 của Bài 1–145 (trình độ cơ bản)
   “Tiên học lễ, hậu học văn”: mỗi bài học một đoạn thơ “Lên Sáu” (Bài 1–70) hoặc “Lên Tám” (Bài 71–145)
   của Tản Đà, Trâu Con giải thích ngắn, rồi bé chọn việc làm đúng.
   Phần nâng cao (giảng kỹ, viết văn) ở góc Bài học cuộc sống: cuocsong.cvcec.org.

   Dữ liệu: chung/tho-le-nghia.json. tools/build.mjs gắn vào mỗi bài một hằng THO_LN:
     { so, tho: 'lensau'|'lentam', baiCS, on, cau: [...], giai, en, hoi, dung, sai }
   (on = true: bài ôn lại đoạn đã học). Bài không có đoạn thơ thì THO_LN = null.
   Câu thơ đọc bằng giọng cô Hà: chung/audio/tho-ln-<so>-<câu>.mp3 (mã câu nói 'p:ln-<so>-<câu>').
   Sao lưu theo mã trò 'g1' như trò thơ cũ, nên sao đã có của bé không mất.
   ===================================================================== */
Object.assign(PHRASES, {
  'tln-doc': 'Mình đọc một câu, các bạn đọc câu tiếp theo nhé!',
  'tln-you': 'Đến lượt các bạn!',
  'tln-y': 'Các bạn nghe mình giải thích đoạn thơ nhé!',
  'tln-lam': 'Các bạn chọn việc làm đúng nhé!',
  'tln-sau': 'Muốn học sâu hơn, các bạn vào góc Bài học cuộc sống nhé!'
});

const TLN = (() => {
  const D = (typeof THO_LN !== 'undefined') ? THO_LN : null;
  const ten = () => D.tho === 'lentam' ? 'Lên Tám' : 'Lên Sáu';
  const pid = i => 'p:ln-' + D.so + '-' + (i + 1);
  const CUOC_SONG = 'https://vietclass.cvcec.org/#cuocsong';
  function clips() {
    D.cau.forEach((c, i) => { CLIPS[pid(i)] = c; });
    [D.giai, D.hoi, D.dung, D.sai].forEach(c => { CLIPS['k:' + c] = c; });
    PHRASES['tln-tieu-de'] = ten() + '. Thơ Tản Đà.';
    CLIPS['s:tln-tieu-de'] = PHRASES['tln-tieu-de'];
  }
  // Khung bài thơ: tên bài, tác giả, nhãn đoạn; mỗi câu là một nút chạm để nghe
  function khung(lines) {
    return h('div', { class: 'tln-tho' },
      h('button', { class: 'tln-dau', type: 'button', onclick: () => { App.unlockAudio(); Speech.say(['s:tln-tieu-de']); } },
        h('strong', null, ten().toUpperCase()), h('span', null, 'Thơ: Tản Đà'), h('small', null, (D.on ? 'Ôn lại · ' : '') + 'Đoạn ' + D.so)),
      h('div', { class: 'tln-cau' }, lines));
  }
  const cauBtn = (t, i) => h('button', { class: 'tln-dong', type: 'button', lang: 'vi', onclick: e => { App.unlockAudio(); Speech.say([pid(i)]); bounce(e.currentTarget, 'speaking', 1400); } },
    h('span', { class: 'who' }), h('span', { class: 'ltxt' }, t));
  const theSau = () => h('a', { class: 'tln-sau', href: CUOC_SONG, target: '_top' },
    h('span', { class: 'tln-sau-icon', 'aria-hidden': 'true' }, '📚'),
    h('span', null, h('b', null, 'Muốn học sâu hơn?'), h('span', null, ' Cô Hà giảng kỹ đoạn thơ này trong góc Bài học cuộc sống (nâng cao).')));

  /* Vòng 1: Trâu Con và các bạn đọc tiếp sức từng câu */
  function docTheo() {
    const my = Runner.seq, L = D.cau, N = L.length; let idx = 0;
    const lines = L.map(cauBtn);
    const btnDone = h('button', { class: 'btn', type: 'button', disabled: true }, 'Các bạn đọc xong ›');
    const btnAll = h('button', { class: 'btn ghost small', type: 'button', onclick: () => { App.unlockAudio(); Speech.say(L.map((_, i) => pid(i))); } }, 'Nghe cả đoạn');
    const mark = () => lines.forEach((b, i) => {
      b.classList.toggle('done', i < idx);
      b.classList.toggle('turn-trau', i === idx && idx % 2 === 0);
      b.classList.toggle('turn-you', i === idx && idx % 2 === 1);
      b.querySelector('.who').textContent = i === idx ? (idx % 2 === 0 ? 'Trâu Con đọc' : 'Các bạn đọc') : '';
    });
    const end = () => { idx = N; mark(); btnDone.disabled = true; later(() => UI.finish(N, 'Các bạn đã đọc tiếp sức đoạn thơ ' + ten() + '.'), 500); };
    const trauTurn = async () => {
      if (my !== Runner.seq) return;
      mark(); btnDone.disabled = true; UI.mascot('nod'); UI.progress(idx + ' / ' + N);
      $('#guideText').textContent = 'Mình đọc câu ' + (idx + 1) + ' nhé!';
      await Speech.say([pid(idx)]);
      if (my !== Runner.seq) return;
      await wait(400);
      idx++; UI.progress(idx + ' / ' + N);
      if (idx >= N) return end();
      mark(); btnDone.disabled = false; UI.guide(['s:tln-you']);
    };
    btnDone.addEventListener('click', () => {
      if (btnDone.disabled) return;
      btnDone.disabled = true; Sfx.ok(); UI.mascot('nod'); bounce(lines[idx], 'pop-ok');
      idx++; UI.progress(idx + ' / ' + N);
      if (idx >= N) return end();
      later(trauTurn, 600);
    });
    UI.stage.append(h('div', { class: 'tln' }, khung(lines), h('div', { class: 'tln-nut' }, btnDone, btnAll)));
    mark(); UI.progress('0 / ' + N);
    UI.guide(['s:tln-doc']).then(() => { if (my === Runner.seq) later(trauTurn, 300); });
  }

  /* Vòng 2: Thơ nói gì? Trâu Con giải thích ngắn; nút EN hiện câu tiếng Anh */
  function thoNoiGi() {
    const en = h('p', { class: 'tln-en', lang: 'en', hidden: true }, D.en);
    const btnEn = h('button', { class: 'btn ghost small', type: 'button', 'aria-expanded': 'false', onclick: e => { en.hidden = !en.hidden; e.currentTarget.setAttribute('aria-expanded', String(!en.hidden)); } }, 'EN · Explain in English');
    const btnNghe = h('button', { class: 'btn ghost small', type: 'button', onclick: () => { App.unlockAudio(); Speech.say(['k:' + D.giai]); } }, 'Nghe lại');
    const btnHieu = h('button', { class: 'btn', type: 'button', onclick: () => { Sfx.ok(); UI.finish(1, 'Các bạn đã hiểu ý đoạn thơ.'); } }, 'Mình hiểu rồi ›');
    UI.stage.append(h('div', { class: 'tln' },
      khung(D.cau.map(cauBtn)),
      h('div', { class: 'tln-y' }, h('p', { class: 'tln-nhan' }, 'Thơ nói gì?'), h('p', { class: 'tln-giai' }, D.giai), en, h('div', { class: 'tln-nut' }, btnHieu, btnNghe, btnEn)),
      theSau()));
    UI.progress('');
    UI.guide(['s:tln-y', 'k:' + D.giai], { show: ['s:tln-y'] });
  }

  /* Vòng 3: Em làm được – chọn việc làm đúng; sai hai lần thì nháy sáng đáp án */
  function emLamDuoc() {
    let wrong = 0, locked = false;
    const opts = shuffle([D.dung, D.sai]);
    const btns = opts.map((o, n) => h('button', { class: 'tln-chon', type: 'button', onclick: e => {
      if (locked) return; const el = e.currentTarget; App.unlockAudio();
      // phản hồi chung của trường: "Đúng rồi!" / "Thử lại nhé!"
      if (o === D.dung) { locked = true; el.classList.add('right'); UI.ok(el, ['s:ok1', 'k:' + o]); later(() => UI.finish(2, 'Các bạn đã chọn đúng việc làm ngoan.'), 2600); } // 2 lựa chọn: sai một lần vẫn được 2 sao
      else { wrong++; UI.no(el, ['s:retry1']); if (wrong >= 2) UI.hint(btns[opts.indexOf(D.dung)]); }
    } }, h('b', null, 'AB'[n]), h('span', null, o)));
    UI.stage.append(h('div', { class: 'tln' },
      h('button', { class: 'tln-hoi', type: 'button', onclick: () => { App.unlockAudio(); Speech.say(['k:' + D.hoi]); } }, D.hoi),
      h('div', { class: 'tln-chon-ds' }, btns),
      theSau()));
    UI.guide(['s:tln-lam', 'k:' + D.hoi], { show: ['s:tln-lam'] });
  }

  const ICON = '<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" fill="none" stroke="#3A3B3C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M8 30 V84 C24 80 40 80 50 88 C60 80 76 80 92 84 V30" stroke="#C68B59" stroke-width="3"/>' +
    '<path d="M50 30 C40 22 24 22 12 26 V78 C24 74 40 74 50 82 Z" fill="#FFFCF6"/><path d="M50 30 C60 22 76 22 88 26 V78 C76 74 60 74 50 82 Z" fill="#FFFCF6"/>' +
    '<path d="M20 38 H40 M20 47 H40 M20 56 H36" stroke="#A39588" stroke-width="2"/>' +
    '<path d="M70 62 C62 54 58 48 62 42 C65 38 70 40 70 44 C70 40 75 38 78 42 C82 48 78 54 70 62 Z" fill="#D9573F" stroke="#B5432E"/></svg>';

  // Tạo trò số 1 cho bài (gọi lúc dựng trò của bài); bài không có đoạn thơ thì trả null
  function game() {
    if (!D) return null;
    clips();
    if (typeof ICONS !== 'undefined') ICONS.tln = ICON;
    return {
      num: 1, title: (D.on ? 'Ôn thơ lễ nghĩa' : 'Thơ lễ nghĩa') + ': “' + ten() + '”', icon: 'tln',
      desc: 'Tiên học lễ, hậu học văn: đọc đoạn thơ ' + ten() + ' của Tản Đà, nghe Trâu Con giải thích, rồi chọn việc làm ngoan',
      levels: ['Nghe và đọc theo', 'Thơ nói gì?', 'Em làm được'], chain: true,
      start(level) { [docTheo, thoNoiGi, emLamDuoc][level](); }
    };
  }
  return { game, get co() { return !!D; } };
})();
