/* =====================================================================
   PHIẾU BÀI TẬP VỀ NHÀ dùng chung cho bài tập đọc (Bài 71–80)
   Khổ Letter, 2 trang, dựng từ dữ liệu DOC của bài (bai-NN/bai.js). Ghép bởi tools/build.mjs → site/bai-N/phieu-bai-tap.html
   ===================================================================== */
const PH = (() => {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const head = (n, vi, en) => `<h2><span class="n">${n}</span>${vi}<small>${en}</small></h2>`;

  // 1. Bài đọc
  const doc = `<section class="story">${head(1, 'Đọc bài', 'Read the text aloud')}<h3>${esc(LESSON.ten)}</h3>
    ${DOC.doan.map(d => `<p>${esc(d.text)}</p>`).join('')}
    <p class="doc2"><span>Em đọc lần 1</span><span>Em đọc lần 2</span><span>Em đọc cho người thân nghe</span></p></section>`;

  // 2. Chọn ý đúng
  const hoi = `<section>${head(2, 'Khoanh vào chữ cái trước ý đúng', 'Circle the correct answer')}
    <div class="qs">${DOC.hieu.map((q, k) => `<div class="q"><b>${k + 1}. ${esc(q.q)}</b><ol>${shuffle([q.dung, ...q.sai]).map((o, n) => `<li><i>${'ABC'[n]}</i>${esc(o)}</li>`).join('')}</ol></div>`).join('')}</div></section>`;

  // 3. Nối từ với nghĩa
  const ws = shuffle(DOC.tuMoi.slice()).slice(0, 4), ms = shuffle(ws.slice());
  const noi = `<section>${head(3, 'Nối từ với lời giải nghĩa', 'Match each word to its meaning')}
    <div class="mean">${ws.map((w, i) => `<div class="w">${esc(w[0])}<i></i></div><div></div><div class="m"><i></i>${esc(ms[i][1])}</div>`).join('')}</div></section>`;

  // 4. Đánh số thứ tự
  const seq = `<section>${head(4, 'Đánh số 1, 2, 3… theo thứ tự trong bài', 'Number the events in order')}
    <div class="seq">${shuffle(DOC.thuTu.slice()).map(t => `<div><u></u>${esc(t)}</div>`).join('')}</div></section>`;

  // 5. Điền từ
  const ds = shuffle(DOC.dien.slice()).slice(0, 3);
  const dien = `<section>${head(5, 'Chọn từ trong khung để điền vào chỗ chấm', 'Fill in the blanks')}
    <p class="bank">${shuffle(ds.map(d => d.dung)).map(w => `<b>${esc(w)}</b>`).join('')}</p>
    ${ds.map(d => `<p class="cl">${esc(d.cau).replace('___', '<u></u>')}</p>`).join('')}</section>`;

  // 6. Tập viết trên ô li
  const RW = 90;
  const netG = (st, dx, kieu) => st.map(d => `<path d="${d}" transform="translate(${dx.toFixed(2)} 0)" class="${kieu}"/>`).join('');
  const row = (s, n) => {
    const st = netChu(s), xs = st.flatMap(d => netDiem(d).map(p => p[0])), w = Math.max(...xs) - Math.min(...xs), x0 = Math.min(...xs);
    let x = 1 - x0, g = netG(st, x, 'm') + st.map(d => { const p = netDiem(d)[0]; return `<circle cx="${(p[0] + x).toFixed(2)}" cy="${p[1]}" r=".22" class="d"/>`; }).join('');
    for (let k = 0; k < n && x + 2 * (w + 2.4) < RW * 0.8; k++) { x += w + 2.4; g += netG(st, x, 'c'); }
    const ke = Array.from({ length: 9 }, (_, k) => k - 5).map(y => `<path d="M0 ${y}H${RW}" class="${y === 0 || y === -4 ? 'kd' : 'k'}"/>`).join('') +
      Array.from({ length: RW / 4 + 1 }, (_, k) => `<path d="M${k * 4} -5V3" class="k"/>`).join('');
    return `<svg class="oli" viewBox="0 -5.3 ${RW} 8.6" aria-label="${esc(s)}"><style>.k{stroke:#BFD8EC;stroke-width:.05}.kd{stroke:#5E9AC6;stroke-width:.09}.m,.c{fill:none;stroke-linecap:round;stroke-linejoin:round}.m{stroke:#2A231F;stroke-width:.17}.c{stroke:#8A8079;stroke-width:.13;stroke-dasharray:.02 .26}.d{fill:#D9573F}</style>${ke}${g}</svg>`;
  };
  const viet = `<section>${head(6, 'Tập viết', 'Handwriting practice')}${DOC.to.slice(0, 2).map(a => row(a, 3)).join('')}</section>`;

  // 7. Viết đoạn văn
  const doan = `<section class="frame">${head(7, 'Viết 4–5 câu', 'Write 4–5 sentences: capital letter at the start, full stop at the end')}
    ${DOC.viet.map(v => `<div>${esc(v)} <i></i></div>`).join('')}<div class="more"><i></i></div></section>`;

  const parent = `<section class="parent"><div>
      <h2>Góc phụ huynh <small>Parents’ corner</small></h2>
      <p><b>Hôm nay con đọc bài:</b> “${esc(LESSON.ten)}”. ${esc(DOC.y)}<br><i>Today your child read the story above and talked about its meaning.</i></p>
      <p><b>Cách giúp con:</b> mỗi ngày nghe con đọc to bài đọc khoảng 5 phút, hỏi con: “${esc(DOC.noi[0])}”. Quét mã QR để con chơi lại các trò chơi của bài.<br><i>How to help: listen to your child read the text aloud for 5 minutes a day and ask the question above. Scan the QR code to replay the lesson games.</i></p>
      <p class="sign">Chữ ký phụ huynh / Parent’s signature: <i></i></p>
    </div><figure>${QR_SVG}<figcaption>Chơi lại ${(LESSON.nhan || "bài " + LESSON.so).toLowerCase()}</figcaption></figure></section>`;

  const top = `<header><img src="../chung/img/trau-con.png" alt=""><div><p>Trường Tiếng Việt Của Em · Phiếu bài tập về nhà</p><h1>${LESSON.nhan || "Bài " + LESSON.so}: ${esc(LESSON.ten)}</h1></div>
    <div class="who">Họ và tên: <i></i><br>Ngày: <i></i></div></header>`;
  const foot = n => `<footer><span>Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026</span><span>Trang ${n} / 2</span></footer>`;
  document.getElementById('phieu').innerHTML =
    `<div class="page">${top}${doc}${hoi}${noi}${foot(1)}</div>` +
    `<div class="page">${seq}${dien}${viet}${doan}${parent}${foot(2)}</div>`;

  const vua = () => document.querySelectorAll('.page').forEach(pg => {
    const secs = [...pg.querySelectorAll(':scope > section, :scope > header')];
    const tran = () => pg.getBoundingClientRect().bottom - secs[secs.length - 1].getBoundingClientRect().bottom < 42;
    let k = 1; secs.forEach(x => { x.style.zoom = ''; });
    while (tran() && k > 0.7) { k -= 0.02; secs.forEach(x => { x.style.zoom = k; }); }
  });
  vua(); if (document.fonts) document.fonts.ready.then(vua);
})();
