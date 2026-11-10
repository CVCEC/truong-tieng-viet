/* =====================================================================
   TIỆN ÍCH CHUNG
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
function h(tag, props, ...kids) {
  const el = document.createElement(tag);
  if (props) for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k === 'text') el.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat()) { if (c == null || c === false) continue; el.append(c.nodeType ? c : document.createTextNode(String(c))); }
  return el;
}
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const later = (fn, ms) => { const t = setTimeout(fn, ms); Runner.timers.push(t); return t; };
const wait = ms => new Promise(r => later(r, ms));
function bounce(el, cls, ms = 1100) { if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(() => el.classList.remove(cls), ms); }
const dotsRow = (n, i) => h('div', { class: 'dots', 'aria-hidden': 'true' }, Array.from({ length: n }, (_, k) => h('span', { class: 'dot' + (k < i ? ' done' : k === i ? ' cur' : '') })));
const Store = {
  get(k, d) { try { const v = localStorage.getItem('ttvce-b' + LESSON.so + '-' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('ttvce-b' + LESSON.so + '-' + k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } }
};


/* =====================================================================
   DỮ LIỆU CHUNG CHO MỌI BÀI — cách đọc chữ cái, phụ âm ghép, thanh, lời thoại chung của Trâu Con
   Mỗi bài khai báo thêm dữ liệu riêng trong bai-NN/bai.js (đối tượng LESSON, PHRASES riêng, GAMES).
   ===================================================================== */
// Đọc theo âm (không đọc tên chữ): bờ, cờ, dờ…
const LETTER_SOUND = { a:'a', ă:'á', â:'ớ', b:'bờ', c:'cờ', d:'dờ', đ:'đờ', e:'e', ê:'ê', g:'gờ', h:'hờ', i:'i', k:'ca', l:'lờ', m:'mờ', n:'nờ', o:'o', ô:'ô', ơ:'ơ', p:'pờ', q:'quy', r:'rờ', s:'sờ', t:'tờ', u:'u', ư:'ư', v:'vờ', x:'xờ', y:'i dài' };
// Tên đọc của 11 phụ âm ghép
const DIGRAPH_SOUND = { ch:'chờ', gh:'gờ kép', gi:'di', kh:'khờ', ng:'ngờ', ngh:'ngờ kép', nh:'nhờ', ph:'phờ', qu:'quờ', th:'thờ', tr:'trờ' };
const TONES = ['ngang', 'sac', 'huyen', 'hoi', 'nga', 'nang'];
const TONE_NAME = { ngang: 'ngang', sac: 'sắc', huyen: 'huyền', hoi: 'hỏi', nga: 'ngã', nang: 'nặng' };

/* Lời thoại chung: Trâu Con luôn xưng "mình", gọi "các bạn". File ghi âm của các câu này dùng chung cho cả 70 bài (chung/audio/). */
const COMMON_PHRASES = {
  'check': 'Xin chào các bạn! Các bạn có nghe thấy mình nói không?',
  'menu': 'Các bạn chọn một trò chơi để bắt đầu nhé!',
  'ok1': 'Đúng rồi!', 'ok2': 'Giỏi quá!', 'ok3': 'Các bạn làm tốt lắm!', 'ok4': 'Tuyệt vời!', 'ok5': 'Chính xác!',
  'retry1': 'Thử lại nhé!', 'retry2': 'Chưa đúng đâu, các bạn thử lại nhé!', 'retry3': 'Không sao đâu, mình cùng thử lại nhé!',
  'finish': 'Hoan hô! Các bạn giỏi quá!',
  'listen': 'Các bạn nghe nhé:',
  'all': 'Các bạn tìm được hết rồi!'
};
const PHRASES = { ...COMMON_PHRASES }; // mỗi bài thêm lời thoại riêng bằng Object.assign(PHRASES, {...})
const PRAISE = ['s:ok1', 's:ok2', 's:ok3', 's:ok4', 's:ok5'];
const RETRY = ['s:retry1', 's:retry2', 's:retry3'];

/* Kho câu nói: mỗi đoạn có một mã, để thay bằng file ghi âm giọng Trâu Con (xem AM-THANH.md của từng bài).
   Mã: l: chữ cái · d: phụ âm ghép · w: tiếng/từ · p: câu thơ · t: thanh · k: câu · m: màu · n: nét · s: lời thoại */
const CLIPS = {};
ALPHABET.forEach(l => { CLIPS['l:' + l] = LETTER_SOUND[l]; });
DIGRAPHS.forEach(d => { CLIPS['d:' + d] = DIGRAPH_SOUND[d]; });
TONES.forEach(t => { CLIPS['t:' + t] = 'thanh ' + TONE_NAME[t]; });
function clipFile(id) {
  const i = id.indexOf(':'); const k = id.slice(0, i), v = id.slice(i + 1);
  const prefix = { l: 'chu', d: 'ghep', w: 'tu', p: 'tho', t: 'thanh', k: 'cau', m: 'mau', n: 'net', s: 'loi' }[k] || 'x';
  const body = k === 'p' ? v.padStart(2, '0') : (k === 'l' || k === 'w' || k === 'k') ? VN.telex(v) : v;
  return prefix + '-' + body + '.mp3';
}

const SPEAKER = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 12h5l7-6v20l-7-6H5z" fill="#3A3B3C"/><path d="M21 11.5c1.6 1.2 2.5 2.7 2.5 4.5s-.9 3.3-2.5 4.5M24.5 8c2.6 2 4 4.9 4 8s-1.4 6-4 8" fill="none" stroke="#3A3B3C" stroke-width="2.6" stroke-linecap="round"/></svg>';

/* =====================================================================
   GIỌNG TRÂU CON — ưu tiên file ghi âm trong audio/, sau đó giọng đọc tiếng Việt của máy (ưu tiên giọng nam);
   máy không có giọng tiếng Việt thì im lặng và hiện lời nhắc, không đọc bằng giọng tiếng Anh.
   ===================================================================== */
const Speech = (() => {
  const synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
  let voice = null, maleVoice = false, hasVi = false, voicesKnown = false, files = null, token = 0, unlocked = false, heard = false;
  const audio = new Audio(); audio.preload = 'auto';
  function pickVoice() {
    if (!synth) return;
    const vs = synth.getVoices(); if (!vs.length) return;
    voicesKnown = true;
    const vi = vs.filter(v => /^vi([-_]|$)/i.test(v.lang));
    hasVi = vi.length > 0;
    const male = vi.find(v => /namminh|nam minh/i.test(v.name)) || vi.find(v => /\ban\b|\bmale\b/i.test(v.name));
    voice = male || vi.find(v => /natural|neural|enhanced|premium|google/i.test(v.name)) || vi[0] || null;
    maleVoice = !!male;
    if (window.__voiceChanged) window.__voiceChanged();
  }
  if (synth) {
    pickVoice(); synth.onvoiceschanged = pickVoice;
    let tries = 0; const poll = setInterval(() => { if (voicesKnown || ++tries > 24) clearInterval(poll); else pickVoice(); }, 250);
  }
  fetch('audio/manifest.json', { cache: 'no-cache' }).then(r => r.ok ? r.json() : null)
    .then(j => {
      // manifest.json do tools/build.mjs tự tạo: files = file ghi âm riêng của bài (audio/), chung = file dùng chung cho mọi bài (chung/audio/)
      if (!j) return;
      const own = Array.isArray(j.files) ? j.files : [], shared = Array.isArray(j.chung) ? j.chung : [];
      if (!own.length && !shared.length) return;
      files = new Map(); shared.forEach(n => files.set(n, ASSET + 'audio/' + n)); own.forEach(n => files.set(n, 'audio/' + n));
      if (window.__voiceChanged) window.__voiceChanged();
    }).catch(() => {});
  // chữ, phụ âm ghép, tiếng, màu (và các mã bài khai báo trong LESSON.shortClips): đọc tách nhau bằng dấu phẩy
  const isShort = id => /^[ldwm]:/.test(id) || (LESSON.shortClips || []).includes(id);
  function textOf(ids) {
    let out = '', prevShort = false;
    for (const id of [].concat(ids)) {
      const t = (CLIPS[id] ?? id).trim(); if (!t) continue;
      const short = isShort(id);
      if (!out) { out = t; prevShort = short; continue; }
      if (short && prevShort && !/[.!?,:;]$/.test(out)) out += ', ' + t;
      else { const needStop = !/[.!?,:;]$/.test(out) && t[0] !== t[0].toLowerCase(); out += (needStop ? '. ' : ' ') + t; }
      prevShort = short;
    }
    return out;
  }
  function chunks(ids) {
    const out = []; let cur = [], len = 0;
    for (const id of ids) {
      const t = CLIPS[id] ?? id; cur.push(id); len += t.length;
      if (len > 90 && /[.!?]$/.test(t.trim())) { out.push(textOf(cur)); cur = []; len = 0; }
    }
    if (cur.length) out.push(textOf(cur));
    return out;
  }
  function stop() { token++; try { audio.pause(); } catch (e) {} if (synth && (synth.speaking || synth.pending)) synth.cancel(); }
  function unlock() { // gọi trong mỗi lần chạm cho tới khi trình duyệt cho phép phát tiếng (iPad)
    if (unlocked || !audio.paused) return;
    try { audio.src = SILENT_WAV; const p = audio.play(); if (p) p.then(() => { unlocked = true; }).catch(() => {}); } catch (e) {}
  }
  const fail = () => { if (!heard && window.__speechFail) window.__speechFail(); };
  function playFile(name, my) {
    return new Promise(res => {
      if (my !== token) return res();
      audio.onended = audio.onerror = () => res();
      audio.src = files.get(name);
      const p = audio.play(); if (p) p.catch(() => res());
    });
  }
  function speakText(text, my) {
    return new Promise(res => {
      if (!synth || my !== token || !text) return res();
      if (!voicesKnown) pickVoice();
      if (voicesKnown && !hasVi) { fail(); return res(); } // máy không có giọng tiếng Việt
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'vi-VN'; if (voice) { try { u.voice = voice; } catch (e) {} }
      u.rate = 0.82; u.pitch = maleVoice ? 1.35 : 1.08;
      let done = false, started = false; const fin = () => { if (!done) { done = true; res(); } };
      u.onstart = () => { started = true; if (!heard) { heard = true; if (window.__speechOk) window.__speechOk(); } };
      u.onend = fin; u.onerror = fin;
      try { synth.resume(); } catch (e) {}
      synth.speak(u);
      setTimeout(() => { if (!started && my === token) fail(); }, 2600);
      setTimeout(fin, 2600 + text.length * 150);
    });
  }
  async function say(ids) {
    ids = [].concat(ids || []).filter(Boolean);
    const wasBusy = synth && (synth.speaking || synth.pending);
    stop(); const my = token;
    if (!ids.length) return;
    const names = ids.map(clipFile);
    if (files && names.every(n => files.has(n))) {
      for (const n of names) { if (my !== token) return; await playFile(n, my); }
      return;
    }
    if (wasBusy) await new Promise(r => setTimeout(r, 60));
    for (const c of chunks(ids)) { if (my !== token) return; await speakText(c, my); }
  }
  return { say, stop, unlock, textOf, get hasVi() { return hasVi; }, get voicesKnown() { return voicesKnown; }, get hasRecordings() { return !!files; }, get supported() { return !!synth; }, get heard() { return heard; }, get voiceName() { return voice ? voice.name : ''; } };
})();
const SILENT_WAV = (() => {
  const b = new ArrayBuffer(46), v = new DataView(b); const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
  w(0, 'RIFF'); v.setUint32(4, 38, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, 8000, true); v.setUint32(28, 16000, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, 2, true); v.setInt16(44, 0, true);
  return URL.createObjectURL(new Blob([b], { type: 'audio/wav' }));
})();
const CHIME_WAV = (() => {
  const sr = 22050, n = Math.round(sr * 0.6), b = new ArrayBuffer(44 + n * 2), v = new DataView(b);
  const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
  w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, n * 2, true);
  for (let i = 0; i < n; i++) { const t = i / sr, f = t < 0.2 ? 880 : 1318.5, t0 = t < 0.2 ? t : t - 0.2; const env = Math.exp(-t0 * 7) * Math.min(1, t0 * 200); v.setInt16(44 + i * 2, Math.sin(2 * Math.PI * f * t) * env * 0.5 * 32767, true); }
  return URL.createObjectURL(new Blob([b], { type: 'audio/wav' }));
})();

/* Âm hiệu ngắn (không cần file): "ting" khi đúng, âm trầm khi chưa đúng, nhạc hoàn thành */
const Sfx = (() => {
  let ctx = null;
  function unlock() { try { ctx = ctx || new (window.AudioContext || window.webkitAudioContext)(); if (ctx.state === 'suspended') ctx.resume(); } catch (e) { ctx = null; } }
  function note(f, t, d, type = 'sine', g = 0.16) {
    if (!ctx) return;
    const o = ctx.createOscillator(), a = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    a.gain.setValueAtTime(0.0001, t); a.gain.exponentialRampToValueAtTime(g, t + 0.02); a.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(a).connect(ctx.destination); o.start(t); o.stop(t + d + 0.05);
  }
  const now = () => ctx ? ctx.currentTime + 0.01 : 0;
  return {
    unlock,
    ok() { const t = now(); note(880, t, 0.16); note(1318.5, t + 0.09, 0.3); },
    no() { const t = now(); note(247, t, 0.2, 'triangle', 0.13); note(196, t + 0.13, 0.28, 'triangle', 0.11); },
    win() { const t = now(); [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => note(f, t + i * 0.12, 0.35, 'sine', 0.14)); },
    whistle() { const t = now(); note(587, t, 0.35, 'square', 0.05); note(698, t, 0.35, 'square', 0.04); note(587, t + 0.45, 0.55, 'square', 0.05); note(698, t + 0.45, 0.55, 'square', 0.04); }
  };
})();

const TRAU_SRC = ASSET + 'img/trau-con.png';
function trauImg(cls = '') {
  return `<img class="trau ${cls}" src="${TRAU_SRC}" alt="Trâu Con đội nón lá" width="541" height="640" draggable="false">`;
}
const trauSVG = trauImg; // tên cũ dùng trong Bài 1

/* =====================================================================
   HÌNH VẼ DÙNG CHUNG — khung SVG nét than chì, chữ trong tranh, khuôn mặt, dấu thanh
   Tranh riêng của từng bài nằm trong ICONS của bai-NN/bai.js
   ===================================================================== */
const SV = (inner, vb = '0 0 100 100') => `<svg viewBox="${vb}" fill="none" stroke="#3A3B3C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
const TXT = (x, y, size, s, fill = '#2A231F', weight = 900) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Nunito,'Segoe UI',Arial,sans-serif" font-weight="${weight}" font-size="${size}" fill="${fill}" stroke="none">${s}</text>`;
const SKIN = '#F6D2B8', HAND = '#F2C2A2', HAIR = '#3A3B3C';
const FACE = (skin = SKIN) => `<circle cx="44" cy="54" r="26" fill="${skin}"/><path d="M18 50 C16 24 70 20 70 50 C60 38 40 34 26 42 C22 44 20 47 18 50 Z" fill="${HAIR}"/>`;
const CHEEKS = `<ellipse cx="30" cy="62" rx="4.5" ry="2.6" fill="#F2A7A0" stroke="none"/><ellipse cx="58" cy="62" rx="4.5" ry="2.6" fill="#F2A7A0" stroke="none"/>`;
const EYES_OPEN = `<circle cx="34" cy="54" r="2.8" fill="#3A3B3C" stroke="none"/><circle cx="54" cy="54" r="2.8" fill="#3A3B3C" stroke="none"/>`;
const TONE_ICON = {
  ngang: SV(`<circle cx="20" cy="20" r="11" stroke-dasharray="3 4" stroke-width="2.5"/>`, '0 0 40 40'),
  sac: SV(`<path d="M13 31 L27 9" stroke-width="7"/>`, '0 0 40 40'),
  huyen: SV(`<path d="M13 9 L27 31" stroke-width="7"/>`, '0 0 40 40'),
  hoi: SV(`<path d="M12 15 C12 5 29 5 29 14 C29 21 20 21 20 30" stroke-width="6"/>`, '0 0 40 40'),
  nga: SV(`<path d="M6 24 C10 12 17 12 20 19 C23 26 30 26 34 14" stroke-width="6"/>`, '0 0 40 40'),
  nang: SV(`<circle cx="20" cy="21" r="7" fill="#3A3B3C" stroke="none"/>`, '0 0 40 40')
};

/* =====================================================================
   KÉO – THẢ BẰNG POINTER EVENTS (ngón tay, chuột, bút) + chạm chọn rồi chạm chỗ đặt + bàn phím
   ===================================================================== */
function zoneAt(zones, x, y) {
  for (const z of zones) {
    if (!z || !z.isConnected) continue;
    const r = z.getBoundingClientRect(), pad = 14;
    if (x >= r.left - pad && x <= r.right + pad && y >= r.top - pad && y <= r.bottom + pad) return z;
  }
  return null;
}
function draggable(el, o) {
  let st = null;
  el.addEventListener('pointerdown', e => {
    if (el.classList.contains('locked') || (e.pointerType === 'mouse' && e.button !== 0)) return;
    App.unlockAudio();
    st = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false, over: null };
    try { el.setPointerCapture(e.pointerId); } catch (_) {}
    if (o.onPick) o.onPick(el);
  });
  el.addEventListener('pointermove', e => {
    if (!st || e.pointerId !== st.id) return;
    const dx = e.clientX - st.x, dy = e.clientY - st.y;
    if (!st.moved && Math.hypot(dx, dy) > 9) { st.moved = true; el.classList.add('dragging'); }
    if (!st.moved) return;
    el.style.transform = `translate(${dx}px, ${dy}px) scale(1.06)`;
    const z = zoneAt(o.zones(), e.clientX, e.clientY);
    if (z !== st.over) { if (st.over) st.over.classList.remove('over'); st.over = z; if (z) z.classList.add('over'); }
  });
  const end = (e, cancel) => {
    if (!st || e.pointerId !== st.id) return;
    const s = st; st = null; el._lastPointer = performance.now();
    if (s.over) s.over.classList.remove('over');
    if (!s.moved) { if (!cancel && o.onTap) o.onTap(el); return; }
    el.classList.remove('dragging');
    const z = cancel ? null : zoneAt(o.zones(), e.clientX, e.clientY);
    const ok = z ? o.onDrop(el, z) : false;
    if (!ok && el.isConnected) {
      el.style.transition = 'transform .22s ease'; el.style.transform = '';
      setTimeout(() => { el.style.transition = ''; }, 240);
    } else el.style.transform = '';
  };
  el.addEventListener('pointerup', e => end(e, false));
  el.addEventListener('pointercancel', e => end(e, true));
  el.addEventListener('click', () => { // bàn phím (Enter/Space)
    if (el._lastPointer && performance.now() - el._lastPointer < 700) return;
    if (o.onPick) o.onPick(el); if (o.onTap) o.onTap(el);
  });
}
function Picker() {
  let sel = null;
  return {
    get: () => (sel && sel.isConnected ? sel : null),
    toggle(el) { if (sel === el) { el.classList.remove('selected'); sel = null; } else { if (sel) sel.classList.remove('selected'); sel = el; el.classList.add('selected'); } },
    clear() { if (sel) sel.classList.remove('selected'); sel = null; }
  };
}
function asZone(el, picker, tryDrop) {
  el.classList.add('zone');
  el.addEventListener('click', e => { if (e.target.closest('.tile,.tcard,.lchip')) return; const s = picker.get(); if (s) tryDrop(s, el); });
  if (el.tagName !== 'BUTTON') {
    el.tabIndex = 0; el.setAttribute('role', 'button');
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } });
  }
  return el;
}

/* =====================================================================
   BỘ ĐIỀU KHIỂN TRÒ CHƠI
   ===================================================================== */
const UI = {
  mistakes: 0, guideIds: [],
  get stage() { return $('#stage'); },
  // ids: các đoạn Trâu Con nói; o.show: đoạn hiện trên bong bóng (khi không muốn lộ đáp án); o.silent: chỉ hiện chữ
  guide(ids, o = {}) {
    if (o === true) o = { silent: true };
    this.guideIds = [].concat(ids);
    if (App.welcomeNext) { App.welcomeNext = false; this.guideIds = ['s:welcome', ...this.guideIds]; o = { ...o, silent: false }; }
    $('#guideText').textContent = Speech.textOf(o.show ? [].concat(o.show) : this.guideIds);
    return o.silent ? Promise.resolve() : Speech.say(this.guideIds);
  },
  progress(t) { $('#gProg').textContent = t; $('#gProg').hidden = !t; },
  mascot(cls) { const s = $('#guideTrau .trau'); if (!s) return; s.classList.remove('nod', 'tilt'); void s.getBoundingClientRect(); s.classList.add(cls); setTimeout(() => s.classList.remove(cls), 1000); },
  ok(els, sayIds) { Sfx.ok(); [].concat(els || []).forEach(e => bounce(e, 'pop-ok')); this.mascot('nod'); if (sayIds !== null) Speech.say(sayIds || [pick(PRAISE)]); },
  no(els, sayIds) { this.mistakes++; Sfx.no(); [].concat(els || []).forEach(e => bounce(e, 'shake')); this.mascot('tilt'); Speech.say(sayIds || [pick(RETRY)]); },
  hint(el) { bounce(el, 'hint-pulse', 3100); },
  finish(total, text) {
    const ratio = this.mistakes / Math.max(1, total);
    const stars = ratio <= 0.15 ? 3 : ratio <= 0.5 ? 2 : 1;
    const best = Store.get('stars', {});
    if ((best[Runner.id] || 0) < stars) { best[Runner.id] = stars; Store.set('stars', best); }
    const g = GAMES[Runner.id];
    $('#finStars').innerHTML = '★'.repeat(stars) + '<span class="off">' + '★'.repeat(3 - stars) + '</span>';
    $('#finStars').setAttribute('aria-label', stars + ' trên 3 sao');
    $('#finText').textContent = text || '';
    const hasNextLevel = g.chain && Runner.level < g.levels.length - 1;
    const nextGame = GAME_ORDER[GAME_ORDER.indexOf(Runner.id) + 1];
    const nb = $('#finNext');
    if (hasNextLevel) { nb.textContent = 'Vòng tiếp theo ›'; nb.onclick = () => { App.closeFinish(); Runner.open(Runner.id, Runner.level + 1); }; }
    else if (nextGame) { nb.textContent = 'Trò chơi tiếp theo ›'; nb.onclick = () => { App.closeFinish(); App.go(nextGame); }; }
    else { nb.textContent = 'Về trang chính'; nb.onclick = () => { App.closeFinish(); App.go(''); }; }
    $('#finAgain').onclick = () => { App.closeFinish(); Runner.open(Runner.id, Runner.level); };
    $('#finHome').onclick = () => { App.closeFinish(); App.go(''); };
    $('#finish').hidden = false; nb.focus({ preventScroll: true });
    Sfx.win(); Speech.say(['s:finish']);
  }
};
const Runner = {
  id: null, level: 0, timers: [], seq: 0,
  clear() { this.seq++; this.timers.forEach(clearTimeout); this.timers = []; Speech.stop(); },
  open(id, level = 0) {
    const g = GAMES[id]; if (!g) return;
    this.clear(); this.id = id; this.level = Math.min(Math.max(0, level), Math.max(0, g.levels.length - 1));
    UI.mistakes = 0;
    $('#home').hidden = true; $('#game').hidden = false; $('#finish').hidden = true;
    $('#gEyebrow').textContent = 'Trò chơi ' + g.num + ' / ' + GAME_ORDER.length + (g.levels.length > 1 ? ' · Vòng ' + (this.level + 1) + ' / ' + g.levels.length : '');
    $('#gTitle').textContent = g.title;
    document.title = g.title + ' · Trường Tiếng Việt Của Em · Bài ' + LESSON.so;
    const lv = $('#gLevels'); lv.replaceChildren(); lv.hidden = g.levels.length < 2;
    g.levels.forEach((name, i) => lv.append(h('button', { class: 'chip', type: 'button', 'aria-pressed': String(i === this.level), onclick: () => { App.unlockAudio(); this.open(id, i); } }, (i + 1) + '. ' + name)));
    UI.progress('');
    UI.stage.replaceChildren();
    try { history.replaceState(null, '', '#' + id + (this.level ? '-' + (this.level + 1) : '')); } catch (e) {}
    g.start(this.level);
    window.scrollTo({ top: 0 });
  }
};

/* =====================================================================
   7 TRÒ CHƠI (theo trình tự bài học)
   ===================================================================== */
const GAMES = {};
const GAME_ORDER = []; // mỗi bài điền: GAME_ORDER.push('g1', 'g2', …)

/* =====================================================================
   ỨNG DỤNG: trang chính, điều hướng (#g1, #g1-2 …), mở khóa âm thanh
   ===================================================================== */
const App = {
  audioReady: false, welcomeNext: false,
  soundCheck() {
    this.unlockAudio();
    const panel = $('#checkPanel'); panel.hidden = false;
    const chime = new Audio(CHIME_WAV); const p = chime.play(); if (p) p.catch(() => {});
    Speech.say(['s:check']);
    const row = (cls, mark, text) => `<li><span class="k ${cls}">${mark}</span><span>${text}</span></li>`;
    const render = done => {
      const voiceLine = Speech.hasRecordings ? row('ok', '✓', 'Trò chơi đang dùng file ghi âm giọng Trâu Con.')
        : !Speech.supported ? row('bad', '✗', 'Trình duyệt này không có chức năng đọc tiếng.')
        : !Speech.voicesKnown ? (done ? row('bad', '✗', 'Không tìm thấy giọng đọc tiếng Việt trên máy.') : row('wait', '…', 'Đang tìm giọng đọc tiếng Việt trên máy…'))
        : Speech.hasVi ? row('ok', '✓', 'Máy có giọng đọc tiếng Việt: ' + (Speech.voiceName || 'tiếng Việt') + '.')
        : row('bad', '✗', 'Máy chưa có giọng đọc tiếng Việt.');
      const spoke = Speech.heard ? row('ok', '✓', 'Trâu Con đã nói. Nếu vẫn không nghe thấy, hãy tăng âm lượng và tắt chế độ Im lặng.')
        : done ? row('bad', '✗', 'Trâu Con chưa phát ra tiếng.') : row('wait', '…', 'Trâu Con đang thử nói…');
      panel.innerHTML = '<ul>' + row('wait', '♪', 'Vừa phát một tiếng “ting ting”. Nếu nghe thấy tiếng này mà không nghe Trâu Con nói, lỗi nằm ở giọng đọc của máy.') + voiceLine + spoke + '</ul>' +
        (done && !Speech.heard ? '<h3>Cách sửa trên iPad</h3><ol>' +
          '<li>Mở trò chơi bằng <b>Safari</b> (không mở bên trong ứng dụng khác).</li>' +
          '<li>Vuốt mở <b>Trung tâm điều khiển</b>, tắt chế độ <b>Im lặng</b> (biểu tượng chuông) và <b>Không làm phiền</b>, rồi tăng âm lượng.</li>' +
          '<li>Vào <b>Cài đặt › Trợ năng › Nội dung được đọc › Giọng nói</b>, chọn <b>Tiếng Việt</b> và tải một giọng (ví dụ Linh).</li>' +
          '<li>Tải lại trang rồi bấm <b>Kiểm tra âm thanh</b> lần nữa.</li></ol>' : '');
    };
    render(false); clearTimeout(this.checkTimer);
    this.checkTimer = setTimeout(() => render(true), 3200);
  },
  soundHelp(show) {
    const msg = 'Chưa nghe thấy tiếng? Hãy tắt chế độ Im lặng của máy, tăng âm lượng, rồi bấm loa lần nữa. Ở trang chính có nút “Kiểm tra âm thanh”.';
    const el = $('#soundHelp'); if (!el) return;
    if (show && (this.helpDismissed || !$('#home').hidden)) return;
    $('#soundHelpText').textContent = msg; el.hidden = !show;
    clearTimeout(this.helpTimer); if (show) this.helpTimer = setTimeout(() => { el.hidden = true; }, 12000);
  },
  unlockAudio() { Sfx.unlock(); Speech.unlock(); },
  updateVoiceNote(failed) {
    const n = $('#voiceNote'); if (!n) return;
    if (failed && !Speech.hasRecordings && !Speech.heard && !(Speech.voicesKnown && !Speech.hasVi) && Speech.supported) { n.textContent = 'Chưa nghe thấy Trâu Con nói? Hãy tăng âm lượng, tắt chế độ im lặng của máy, rồi bấm nút loa lần nữa.'; n.hidden = false; return; }
    if (Speech.hasRecordings) { n.hidden = true; return; }
    if (!Speech.supported) { n.textContent = 'Trình duyệt này chưa đọc được tiếng. Các bạn vẫn chơi được, chỉ là Trâu Con không nói. Hãy thử mở bằng Safari, Chrome hoặc Edge.'; n.hidden = false; return; }
    if (Speech.voicesKnown && !Speech.hasVi) { n.textContent = 'Máy này chưa có giọng đọc tiếng Việt nên Trâu Con chưa nói được. Các bạn vẫn chơi được bình thường. Thầy cô, bố mẹ có thể cài thêm giọng tiếng Việt trong phần cài đặt giọng nói của máy.'; n.hidden = false; return; }
    n.hidden = true;
  },
  renderHome() {
    const best = Store.get('stars', {});
    $('#cards').replaceChildren(...GAME_ORDER.map(id => {
      const g = GAMES[id]; const s = best[id] || 0;
      return h('button', { class: 'gcard', type: 'button', onclick: () => { this.unlockAudio(); this.go(id); } },
        h('span', { class: 'gicon', html: typeof ICONS[g.icon] === 'function' ? ICONS[g.icon]('vowel') : ICONS[g.icon] }),
        h('span', { class: 'gnum' }, 'Trò chơi ' + g.num + (g.levels.length > 1 ? ' · ' + g.levels.length + ' vòng' : '')),
        h('span', { class: 'gname' }, g.title),
        h('span', { class: 'gdesc' }, g.desc),
        h('span', { class: 'gstars', 'aria-label': s ? s + ' trên 3 sao' : 'Chưa chơi', html: s ? '★'.repeat(s) + '<span class="off">' + '★'.repeat(3 - s) + '</span>' : '' }));
    }));
  },
  go(id) {
    const url = id ? '#' + id : location.pathname + location.search;
    try { history.pushState(null, '', url); } catch (e) {}
    this.route();
  },
  route() {
    const m = location.hash.match(/^#(g\d{1,2})(?:-(\d{1,2}))?$/); // #g1 mở trò 1, #g1-2 mở vòng 2 (đếm từ 1)
    $('#finish').hidden = true;
    if (m && GAMES[m[1]]) { Runner.open(m[1], m[2] ? Math.max(0, +m[2] - 1) : 0); return; }
    Runner.clear(); Runner.id = null;
    $('#game').hidden = true; $('#home').hidden = false;
    document.title = 'Trường Tiếng Việt Của Em · Bài ' + LESSON.so;
    this.renderHome();
  },
  closeFinish() { $('#finish').hidden = true; },
  init() {
    Object.entries(PHRASES).forEach(([k, v]) => { CLIPS['s:' + k] = v; });
    $('#heroText').textContent = PHRASES.welcome;
    window.__voiceChanged = () => this.updateVoiceNote();
    $('#heroTrau').innerHTML = trauImg('wave');
    $('#guideTrau').innerHTML = trauImg('bob');
    $('#finTrau').innerHTML = trauImg('wave');
    $('#btnSay').innerHTML = SPEAKER; $('#btnSayHero').innerHTML = SPEAKER;
    $('#soundHelpClose').addEventListener('click', () => { this.helpDismissed = true; $('#soundHelp').hidden = true; });
    window.__speechFail = () => { this.soundHelp(true); this.updateVoiceNote(true); };
    window.__speechOk = () => { this.soundHelp(false); this.updateVoiceNote(); };
    $('#btnStart').addEventListener('click', () => { this.unlockAudio(); this.welcomeNext = true; this.go('g1'); });
    $('#btnCheck').addEventListener('click', () => this.soundCheck());
    $('#btnSayHero').addEventListener('click', e => { this.unlockAudio(); Speech.say(['s:welcome', 's:menu']); bounce(e.currentTarget, 'speaking', 1600); });
    $('#btnSay').addEventListener('click', e => { this.unlockAudio(); Speech.say(UI.guideIds); UI.mascot('nod'); bounce(e.currentTarget, 'speaking', 1600); });
    $('#heroTrau').addEventListener('click', () => { this.unlockAudio(); Speech.say(['s:welcome']); });
    $('#guideTrau').addEventListener('click', () => { this.unlockAudio(); Speech.say(UI.guideIds); UI.mascot('nod'); });
    $('#btnHome').addEventListener('click', () => this.go(''));
    $('#logoLink').addEventListener('click', e => { e.preventDefault(); this.go(''); });
    ['pointerdown', 'pointerup', 'click', 'keydown'].forEach(ev => document.addEventListener(ev, () => this.unlockAudio(), { capture: true, passive: true }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#finish').hidden) { this.closeFinish(); } });
    window.addEventListener('popstate', () => this.route());
    this.route();
    setTimeout(() => this.updateVoiceNote(), 1800);
  }
};
