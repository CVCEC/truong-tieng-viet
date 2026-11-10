/* =====================================================================
   PHIẾU BÀI TẬP VỀ NHÀ dùng chung cho bài dạy âm và vần (Bài 3–70)
   Khổ Letter, 2 trang, dựng từ dữ liệu AM của bài (bai-NN/bai.js). Ghép bởi tools/build.mjs → site/bai-N/phieu-bai-tap.html
   ===================================================================== */
const PH = (() => {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const pic = w => TRANH[w] || '';
  const sylls = w => w.split(' ').map(t => VN.letters(t).toLowerCase()).filter(Boolean);
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const A = AM.am, list = A.join(', ');
  const VAN = AM.loai === 'van', loai = VAN ? 'vần' : 'âm';
  const ghep = (a, x, t = 'ngang') => VN.addTone(VAN ? x + a : a + x, t);
  const phan = t => { if (!VAN) return VN.onsetOf(t); const z = VN.analyze(t); return VN.stripTone(z.nucleus + z.coda); };
  const vocab = [...new Set([...AM.khoa.map(k => k.tu), ...Object.values(AM.tu).flat()])].filter(w => TRANH[w]);
  const head = (n, vi, en) => `<h2><span class="n">${n}</span>${vi}<small>${en}</small></h2>`;

  // 1. Đọc to
  const doc = `<section>${head(1, 'Đọc to', 'Read aloud')}
    <div class="read${A.length > 3 ? ' bon' : ''}">${A.map(a => `<div class="am-big">${a}<small>${a.charAt(0).toUpperCase() + a.slice(1)}</small></div>`).join('')}
      <div class="keys">${AM.khoa.map(k => `<div class="key"><div class="kp">${pic(k.tu)}</div><b>${esc(k.tieng)}</b><span>${esc(k.tu)}</span></div>`).join('')}</div></div>
    <p class="wordline">${Object.values(AM.tu).flat().map(w => `<span>${esc(w)}</span>`).join('')}</p></section>`;

  // 2. Nối từ với tranh
  const ws = shuffle(vocab.filter(w => !AM.khoa.some(k => k.tu === w))).slice(0, 4);
  while (ws.length < 4 && vocab.length > ws.length) { const w = vocab.find(x => !ws.includes(x)); ws.push(w); }
  const ps = shuffle(ws.slice());
  const noi = `<section>${head(2, 'Nối từ với tranh', 'Match each word to its picture')}
    <div class="match">${ws.map((w, i) => `<div class="mw">${esc(w)}<i></i></div><div></div><div class="mp"><i></i>${pic(ps[i])}</div>`).join('')}</div></section>`;

  // 3. Điền chữ: vòng luật chính tả nếu có, không thì điền âm của bài
  let fill;
  if (AM.luat) {
    const L = AM.luat; const items = shuffle(L.muc.slice()).slice(0, 4);
    fill = `<section>${head(3, esc(L.ten.replace(/\?$/, '')) + '?', 'Fill in the missing letter')}
      <p class="choose">${L.chon.map(c => `<b>${c}</b>`).join(' hay ')}</p>
      <div class="fills">${items.map(m => `<div class="fi"><div class="fp">${pic(m.w)}</div><div class="fw"><u></u>${esc(Array.from(m.w).slice(Array.from(m.dung).length).join(''))}</div></div>`).join('')}</div></section>`;
  } else {
    const items = shuffle(vocab.slice()).filter(w => sylls(w).some(t => A.includes(phan(t)))).slice(0, 4);
    const CH = A.length > 1 ? A : [A[0], AM.onCu.chu[0]];
    fill = `<section>${head(3, 'Điền ' + CH.join(' hay ') + '?', VAN ? 'Fill in the missing rhyme' : 'Fill in the missing letter')}
      <div class="fills">${items.map(w => {
        const ts = w.split(' '); const k = ts.findIndex(t => A.includes(phan(t)));
        const t = ts[k], on = Array.from(VN.onsetOf(t)).length;
        ts[k] = VAN ? esc(Array.from(t).slice(0, on).join('')) + '<u class="dau-' + VN.toneOf(t) + '"></u>' : '<u></u>' + esc(Array.from(t).slice(on).join(''));
        return `<div class="fi"><div class="fp">${pic(w)}</div><div class="fw">${ts.join(' ')}</div></div>`;
      }).join('')}</div></section>`;
  }

  // 4. Tìm tiếng có âm mới (tô màu)
  const syl = new Set([...vocab, ...(AM.onCu.tu || [])].flatMap(sylls));
  A.forEach(a => AM.bang[a].forEach(v => { const T = VAN && /(c|t|p|ch)$/.test(a) ? ['sac', 'nang'] : TONES; syl.add(ghep(a, v, T[Math.floor(Math.random() * T.length)])); }));
  const yes = A.flatMap(a => shuffle([...syl].filter(t => phan(t) === a)).slice(0, A.length > 2 ? 2 : 3));
  const no = shuffle([...syl].filter(t => !A.includes(phan(t)))).slice(0, 4);
  const COL = [['đỏ', 'red'], ['xanh', 'blue'], ['vàng', 'yellow'], ['tím', 'purple'], ['cam', 'orange']];
  const tim = `<section>${head(5, (A.length > 3 ? 'Khoanh tròn: ' : 'Khoanh tròn tiếng có ') + A.map((a, i) => `<b>${a}</b> (màu ${COL[i % 5][0]})`).join(', '), 'Circle syllables with ' + A.map((a, i) => `${a} in ${COL[i % 5][1]}`).join(', '))}
    <p class="sylls">${shuffle([...yes, ...no]).map(t => `<span>${esc(t)}</span>`).join('')}</p></section>`;

  // 5. Đọc câu
  const cau = `<section>${head(6, 'Đọc câu', 'Read the sentences')}
    <div class="sents">${AM.cau.map(c => `<div class="sent"><div class="sp">${pic(c)}</div><p>${esc(c)}</p><span class="tick"></span></div>`).join('')}</div></section>`;

  // 6. Tập viết trên ô li: chữ mẫu đầu dòng, các bạn viết tiếp
  const RW = 90; // bề ngang dòng, tính bằng ô li
  const netG = (st, dx, kieu) => st.map(d => `<path d="${d}" transform="translate(${dx.toFixed(2)} 0)" class="${kieu}"/>`).join('');
  const row = (s, n) => {
    const st = netChu(s), xs = st.flatMap(d => netDiem(d).map(p => p[0])), w = Math.max(...xs) - Math.min(...xs), x0 = Math.min(...xs);
    let x = 1 - x0, g = netG(st, x, 'm') + st.map(d => { const p = netDiem(d)[0]; return `<circle cx="${(p[0] + x).toFixed(2)}" cy="${p[1]}" r=".22" class="d"/>`; }).join('');
    for (let k = 0; k < n && x + 2 * (w + 2.4) < RW * 0.72; k++) { x += w + 2.4; g += netG(st, x, 'c'); }
    const ke = Array.from({ length: 9 }, (_, k) => k - 5).map(y => `<path d="M0 ${y}H${RW}" class="${y === 0 || y === -4 ? 'kd' : 'k'}"/>`).join('') +
      Array.from({ length: RW / 4 + 1 }, (_, k) => `<path d="M${k * 4} -5V3" class="k"/>`).join('');
    return `<svg class="oli" viewBox="0 -5.3 ${RW} 8.6" aria-label="${esc(s)}"><style>.k{stroke:#BFD8EC;stroke-width:.05}.kd{stroke:#5E9AC6;stroke-width:.09}.m,.c{fill:none;stroke-linecap:round;stroke-linejoin:round}.m{stroke:#2A231F;stroke-width:.17}.c{stroke:#8A8079;stroke-width:.13;stroke-dasharray:.02 .26}.d{fill:#D9573F}</style>${ke}${g}</svg>`;
  };
  const viet = `<section>${head(7, 'Tập viết', 'Handwriting practice')}
    ${A.map(a => row(a, 3)).join('')}${A.length > 3 ? '' : row(AM.khoa[0].tieng, 2) + row(AM.khoa[AM.khoa.length - 1].tieng, 2)}</section>`;

  // 7. Tìm thêm tiếng
  const them = `<section>${head(4, 'Em tìm thêm 3 tiếng có ' + list, 'Find 3 more syllables with ' + list)}
    <div class="lines${A.length > 3 ? ' hai' : ''}">${A.map(a => `<div><b>${a}</b>: <i></i><i></i><i></i></div>`).join('')}</div></section>`;

  const face = k => `<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="none" stroke="#3A3B3C" stroke-width="2.4"/><circle cx="14" cy="16" r="2" fill="#3A3B3C"/><circle cx="26" cy="16" r="2" fill="#3A3B3C"/><path d="${['M12 29 Q20 22 28 29', 'M12 26 H28', 'M12 24 Q20 32 28 24'][k]}" fill="none" stroke="#3A3B3C" stroke-width="2.4" stroke-linecap="round"/></svg>`;
  const tu = `<section class="self">${head('★', 'Em tự đánh giá', 'Self-assessment')}
    <table>${[['Em đọc được các từ trong bài.', 'I can read the words.'], ['Em viết được chữ ' + list + '.', 'I can write ' + list + '.'], ['Em thích bài học hôm nay.', 'I enjoyed today’s lesson.']]
      .map(([v, e]) => `<tr><td>${v}<small>${e}</small></td><td>${face(0)}</td><td>${face(1)}</td><td>${face(2)}</td></tr>`).join('')}</table></section>`;

  const parent = `<section class="parent"><div>
      <h2>Góc phụ huynh <small>Parents’ corner</small></h2>
      <p><b>Hôm nay con học:</b> ${loai} ${list}; từ ${AM.khoa.map(k => esc(k.tu)).join(', ')}.<br><i>Today your child learned the ${VAN ? 'rhymes' : 'sounds'} ${list} and the words above.</i></p>
      <p><b>Cách giúp con:</b> mỗi ngày cùng con đọc to Bài 1 và Bài 6 khoảng 5 phút, khen con khi con tự đọc. Quét mã QR để con chơi lại các trò chơi của bài.<br><i>How to help: read exercises 1 and 6 aloud together for about 5 minutes a day. Scan the QR code to replay the lesson games.</i></p>
      <p class="sign">Chữ ký phụ huynh / Parent’s signature: <i></i></p>
    </div><figure>${QR_SVG}<figcaption>Chơi lại ${(LESSON.nhan || "bài " + LESSON.so).toLowerCase()}</figcaption></figure></section>`;

  const top = `<header><img src="../chung/img/trau-con.png" alt=""><div><p>Trường Tiếng Việt Của Em · Phiếu bài tập về nhà</p><h1>${LESSON.nhan || "Bài " + LESSON.so}: ${esc(LESSON.ten)}</h1></div>
    <div class="who">Họ và tên: <i></i><br>Ngày: <i></i></div></header>`;
  const foot = n => `<footer><span>Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026</span><span>Trang ${n} / 2</span></footer>`;
  document.getElementById('phieu').innerHTML =
    `<div class="page">${top}${doc}${noi}${fill}${them}${foot(1)}</div>` +
    `<div class="page">${tim}${cau}${viet}${tu}${parent}${foot(2)}</div>`;

  // Co nhỏ đều các phần nếu trang bị tràn xuống chân trang (bài có 3–4 vần)
  const vua = () => document.querySelectorAll('.page').forEach(pg => {
    const secs = [...pg.querySelectorAll(':scope > section, :scope > header')];
    const tran = () => pg.getBoundingClientRect().bottom - secs[secs.length - 1].getBoundingClientRect().bottom < 42;
    let k = 1; secs.forEach(x => { x.style.zoom = ''; });
    while (tran() && k > 0.7) { k -= 0.02; secs.forEach(x => { x.style.zoom = k; }); }
  });
  vua(); if (document.fonts) document.fonts.ready.then(vua);
})();
