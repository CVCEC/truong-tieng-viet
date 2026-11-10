// Đóng gói toàn bộ chương trình thành thư mục site/ để đưa lên baihoc.cvcec.org
//   node tools/build.mjs          → dựng mọi bài
//   node tools/build.mjs 2 5      → chỉ dựng Bài 2 và Bài 5
// Không cần cài thêm gói nào (chỉ dùng Node 18+).
//
// Mỗi bài ra một file site/bai-N/index.html duy nhất (HTML + CSS + JavaScript), ghép từ:
//   chung/khung.html + chung/giao-dien.css + chung/chu-viet.js + chung/dong-co.js   (phần chung)
//   bai-NN/bai.json  + bai-NN/bai.css      + bai-NN/bai.js                          (phần riêng)
// Bài nào ghi "mau": "bo-am" trong bai.json thì ghép thêm bộ 7 trò chơi chung chung/mau/bo-am.* và thư viện tranh chung/tranh.js.
// Ảnh và file ghi âm dùng chung nằm ở site/chung/; file ghi âm riêng của bài ở site/bai-N/audio/.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, cpSync, rmSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const qrcode = createRequire(import.meta.url)('./vendor/qrcode.cjs');
const SITE_URL = 'https://baihoc.cvcec.org/';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'site');
const read = p => readFileSync(join(ROOT, p), 'utf8');
const listMp3 = dir => existsSync(dir) ? readdirSync(dir).filter(f => f.endsWith('.mp3')).sort() : [];
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Bài ôn tập: thư mục on-tap-NN, bai.json có "on": số thứ tự ôn tập và "so" = số bài cuối được ôn + 0.5 (để đứng ngay sau bài đó trong mục lục)
//   node tools/build.mjs on-tap-7  → chỉ dựng Ôn tập số 7
const only = process.argv.slice(2);
const slugOf = m => m.on ? 'on-tap-' + m.on : 'bai-' + m.so;
const nhanOf = m => m.on ? 'Ôn tập ' + m.on : 'Bài ' + m.so;
const lessons = readdirSync(ROOT)
  .filter(d => /^(bai|on-tap)-\d{2,3}$/.test(d) && existsSync(join(ROOT, d, 'bai.json')))
  .map(d => ({ dir: d, meta: JSON.parse(read(join(d, 'bai.json'))) }))
  .sort((a, b) => a.meta.so - b.meta.so);

// Phần chung
const KHUNG = read('chung/khung.html');
const CSS_CHUNG = read('chung/giao-dien.css');
const JS_CHUNG = read('chung/chu-viet.js').replace(/^'use strict';\n/, '') + '\n' + read('chung/dong-co.js');
const sharedAudio = listMp3(join(ROOT, 'chung/audio'));
const MAU = {
  'bo-am': { js: read('chung/tranh.js') + '\n' + read('chung/net-chu.js') + '\n' + read('chung/tro-on.js') + '\n' + read('chung/mau/bo-am.js'), css: read('chung/mau/bo-am.css') + '\n' + read('chung/mau/tro-on.css'), body: '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><path id="measurePath" d="M0 0"/></svg>' },
  // Bài tập đọc (71–80) và văn hóa truyền thống (81–145): bộ 10 trò chơi đọc hiểu, dùng lại khung giao diện của bo-am.css
  'bo-doc': { js: read('chung/tranh.js') + '\n' + read('chung/net-chu.js') + '\n' + read('chung/tro-on.js') + '\n' + read('chung/mau/bo-doc.js'), css: read('chung/mau/bo-am.css') + '\n' + read('chung/mau/bo-doc.css') + '\n' + read('chung/mau/tro-on.css'), body: '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><path id="measurePath" d="M0 0"/></svg>' }
};
// Phiếu bài tập dựng tự động theo mẫu của bài
const PHIEU_MAU = { 'bo-am': 'phieu-am', 'bo-doc': 'phieu-doc' };

// Những gì tranh.js và bai.js cần khi chạy trong phiếu bài tập (không có bộ máy trò chơi)
const PHIEU_STUB = `const SV = (inner, vb = '0 0 100 100') => '<svg viewBox="' + vb + '" fill="none" stroke="#3A3B3C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
const SKIN = '#F6D2B8', HAND = '#F2C2A2', HAIR = '#3A3B3C';
const TONES = ['ngang', 'sac', 'huyen', 'hoi', 'nga', 'nang'];
const PHRASES = {}; const amSetup = () => {}; const docSetup = () => {};`;
// Từ có tranh của từng bài (để trò "Ôn từ vựng" ôn lại từ của các bài trước)
const TU_BAI = (() => {
  const base = PHIEU_STUB + '\n' + read('chung/chu-viet.js').replace(/^'use strict';\n/, '') + '\n' + read('chung/tranh.js');
  const out = [];
  for (const { dir, meta } of lessons) {
    if (!meta.mau) continue;
    try {
      const ctx = {}; vm.createContext(ctx);
      vm.runInContext(base + '\n' + read(join(dir, 'bai.js')) + `\n;this.R = (() => { const T = TRANH, ds = [];
        if (typeof AM !== 'undefined') { AM.khoa.forEach(k => ds.push([k.tu, k.tu])); Object.values(AM.tu).flat().forEach(w => ds.push([w, w])); }
        if (typeof DOC !== 'undefined' && DOC.khoi) DOC.khoi.forEach(k => ds.push([k.tu, k.tranh || k.tu]));
        return ds.filter(([w, k]) => T[k] && !/[A-ZĐ]/.test(w.charAt(0))); })();`, ctx);
      out.push({ so: meta.so, ds: ctx.R });
    } catch (e) { console.log(`(bỏ qua từ vựng của ${dir}: ${e.message})`); }
  }
  return out;
})();
const tuCuOf = so => { const m = new Map(); TU_BAI.filter(x => x.so < so).forEach(x => x.ds.forEach(([w, k]) => { m.delete(w); m.set(w, k); })); return [...m]; };

if (!only.length) rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(join(ROOT, 'chung/img'), join(OUT, 'chung/img'), { recursive: true });
if (sharedAudio.length) cpSync(join(ROOT, 'chung/audio'), join(OUT, 'chung/audio'), { recursive: true });

for (const { dir, meta } of lessons) {
  const slug = slugOf(meta), nhan = nhanOf(meta);
  if (only.length && !only.includes(String(meta.so)) && !only.includes(slug)) continue;
  const out = join(OUT, slug);
  rmSync(out, { recursive: true, force: true });
  mkdirSync(join(out, 'audio'), { recursive: true });

  const lesson = { so: meta.so, nhan, slug, ten: meta.ten, shortClips: meta.shortClips || [] };
  const mau = meta.mau ? MAU[meta.mau] : { js: '', css: '', body: '' };
  if (!mau) throw new Error(`Bài ${meta.so}: không có mẫu "${meta.mau}"`);
  const js = "'use strict';\n" +
    `const LESSON = ${JSON.stringify(lesson)};\nconst ASSET = '../chung/';\nconst TU_CU = ${JSON.stringify(meta.mau ? tuCuOf(meta.so) : [])};\n` +
    JS_CHUNG + '\n' + mau.js + '\n' + read(join(dir, 'bai.js')) + '\nApp.init();';
  const css = CSS_CHUNG + '\n' + mau.css + '\n' + (existsSync(join(ROOT, dir, 'bai.css')) ? read(join(dir, 'bai.css')) : '');
  const coPhieu = !!PHIEU_MAU[meta.mau] || existsSync(join(ROOT, dir, 'phieu-bai-tap.html')) || existsSync(join(ROOT, dir, 'phieu-bai-tap.pdf'));
  const phieuHref = existsSync(join(ROOT, dir, 'phieu-bai-tap.pdf')) && !existsSync(join(ROOT, dir, 'phieu-bai-tap.html')) && !PHIEU_MAU[meta.mau] ? 'phieu-bai-tap.pdf' : 'phieu-bai-tap.html';
  const NUT_PHIEU = coPhieu ? `<a class="btn ghost small" id="btnPhieu" href="${phieuHref}" target="_blank" rel="noopener">Phiếu bài tập</a>` : '';
    // video bài giảng: bai-NN/video/* (không đưa vào git) được chép sang site/<slug>/
  // video đặt ở kho tệp của bản xem trước ("/_blob/…") thì chỉ chép ảnh bìa, không chép file .mp4
  if (existsSync(join(ROOT, dir, 'video'))) cpSync(join(ROOT, dir, 'video'), out, { recursive: true, filter: f => !(String(meta.video || '').startsWith('/') && f.endsWith('.mp4')) });
  const VIDEO = meta.video ? `<section class="bai-hoc" aria-labelledby="baiHocTitle"><h2 class="menu-title" id="baiHocTitle">Bài học hôm nay</h2>` +
    `<video class="bai-hoc-video" controls playsinline preload="metadata"${meta.poster ? ` poster="${esc(meta.poster)}"` : ''} src="${esc(meta.video)}"></video></section>` +
    `<script>document.addEventListener('click', e => { if (e.target.closest('#cards, #btnStart')) document.querySelectorAll('video.bai-hoc-video').forEach(v => v.pause()); });</script>` : '';
  const fill = { VIDEO, SO: meta.so, NHAN: nhan, TEN: esc(meta.ten), MO_TA: esc(meta.moTa || ''), ASSET: '../chung/', HERO_THEM: meta.heroThem || '', BODY_TRUOC: mau.body + (meta.bodyTruoc || ''), NUT_PHIEU, CSS: css, JS: js };
  // Thay CSS và JS sau cùng, để chữ {{…}} trong mã không bị thay nhầm
  let html = KHUNG;
  for (const k of ['NHAN', 'SO', 'TEN', 'MO_TA', 'ASSET', 'HERO_THEM', 'BODY_TRUOC', 'NUT_PHIEU', 'VIDEO']) html = html.split('{{' + k + '}}').join(String(fill[k]));
  html = html.replace('{{CSS}}', () => css).replace('{{JS}}', () => js);
  writeFileSync(join(out, 'index.html'), html);

  // File ghi âm riêng của bài + manifest tự tạo (không cần sửa tay)
  const own = listMp3(join(ROOT, dir, 'audio'));
  own.forEach(f => cpSync(join(ROOT, dir, 'audio', f), join(out, 'audio', f)));
  writeFileSync(join(out, 'audio/manifest.json'), JSON.stringify({ files: own, chung: sharedAudio }, null, 2) + '\n');
  // Phiếu bài tập về nhà dùng chung cho bài dạy âm (dựng từ dữ liệu AM); bài có file phiếu riêng thì dùng file riêng
  if (PHIEU_MAU[meta.mau] && !existsSync(join(ROOT, dir, 'phieu-bai-tap.html'))) {
    const pm = 'chung/mau/' + PHIEU_MAU[meta.mau];
    const qr = qrcode(0, 'M'); qr.addData(SITE_URL + slug + '/'); qr.make();
    const pjs = "'use strict';\n" + `const LESSON = ${JSON.stringify(lesson)};\n` +
      read('chung/chu-viet.js').replace(/^'use strict';\n/, '') + '\n' + read('chung/net-chu.js') + '\n' + PHIEU_STUB + '\n' +
      `const QR_SVG = ${JSON.stringify(qr.createSvgTag({ cellSize: 4, margin: 0, scalable: true }))};\n` +
      read('chung/tranh.js') + '\n' + read(join(dir, 'bai.js')) + '\n' + read(pm + '.js');
    let ph = read(pm + '.html').split('{{NHAN}}').join(nhan).split('{{SO}}').join(String(meta.so));
    writeFileSync(join(out, 'phieu-bai-tap.html'), ph.replace('{{JS}}', () => pjs));
  }
  for (const extra of ['phieu-bai-tap.html', 'phieu-bai-tap.pdf']) if (existsSync(join(ROOT, dir, extra))) cpSync(join(ROOT, dir, extra), join(out, extra));
  console.log(`${nhan}: site/${slug}/index.html (${(statSync(join(out, 'index.html')).size / 1024).toFixed(0)} KB, ${own.length} file ghi âm riêng)`);
}

// Trang mục lục của cả chương trình
const items = lessons.map(({ meta }) => `      <a class="gcard${meta.on ? ' on-tap' : ''}" href="${slugOf(meta)}/"><span class="gicon"><b>${meta.on ? 'Ô' + meta.on : meta.so}</b></span><span class="gnum">${nhanOf(meta)}</span><span class="gname">${esc(meta.ten)}</span><span class="gdesc">${esc(meta.moTa || '')}</span></a>`).join('\n');
writeFileSync(join(OUT, 'index.html'), `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Trường Tiếng Việt Của Em</title>
<meta name="description" content="Trò chơi tương tác cho từng bài học tiếng Việt, dành cho trẻ em kiều bào và mọi người học tiếng Việt.">
<link rel="icon" type="image/png" href="chung/img/trau-con.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@600;700;800;900&display=swap">
<style>
${CSS_CHUNG}
a.gcard{text-decoration:none; color:inherit}
.gcard .gicon b{font:800 30px/1 var(--font-display); color:var(--charcoal)}
.hero-trau img{width:100%; height:auto; display:block}
</style>
</head>
<body>
<div class="app">
  <header class="brandbar">
    <a class="logo" href="./" aria-label="Trường Tiếng Việt Của Em">
      <img class="logo-trau" src="chung/img/trau-con.png" alt="" width="541" height="640">
      <img class="logo-chu" src="chung/img/logo-chu.png" alt="Trường Tiếng Việt Của Em" width="466" height="180">
    </a>
  </header>
  <main>
    <section class="screen" aria-labelledby="homeTitle">
      <div class="hero">
        <div class="hero-trau"><img class="trau wave" src="chung/img/trau-con.png" alt="Trâu Con đội nón lá" width="541" height="640"></div>
        <div>
          <p class="eyebrow">Trường Tiếng Việt Của Em</p>
          <h1 id="homeTitle">Các bài học</h1>
          <div class="bubble"><span>Chào các bạn! Mình là Trâu Con. Các bạn chọn một bài để cùng mình học và chơi nhé!</span></div>
        </div>
      </div>
      <h2 class="menu-title">Chọn bài học</h2>
      <div class="cards">
${items}
      </div>
    </section>
  </main>
</div>
<p class="copyright">Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026</p>
</body>
</html>
`);
console.log(`Mục lục: site/index.html (${lessons.length} bài)`);
