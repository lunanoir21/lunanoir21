/* Effects: sky, feather dust, moon-phase scroll indicator, headline words, handwritten L, count-up,
   card spotlight, magnetic buttons. The moon itself is a fixed CSS animation (no pointer or scroll input).
   Everything respects reduced motion. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const root = document.documentElement;

  /* ---------- headline: word-by-word reveal ---------- */
  const display = $('#display');
  const original = display.innerHTML;
  const splitNode = (node, c) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.append(' '); return; }
          const o = document.createElement('span'); o.className = 'w';
          const i = document.createElement('span'); i.textContent = w; i.style.setProperty('--i', c.n++);
          o.append(i); frag.append(o);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') splitNode(n, c);
    });
  };
  const splitDisplay = () => { if (!calm) $$('.en, .tr', display).forEach((el) => splitNode(el, { n: 0 })); };
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  window.lunaFx = {
    setHeadline(text) {
      display.innerHTML = text ? `<span class="en">${esc(text)}</span><span class="tr">${esc(text)}</span>` : original;
      splitDisplay();
    }
  };
  splitDisplay();

  /* ---------- sky: twinkling stars + feather dust ---------- */
  const cv = $('#sky'), ctx = cv.getContext('2d');
  const feather = $('#feather');
  let W = 0, H = 0, stars = [], dust = [], last = null;
  let boneRGB = '255,255,255', moonRGB = '255,255,255', inkColor = '#000', starK = 1;
  const readColors = () => {
    const cs = getComputedStyle(root);
    boneRGB = cs.getPropertyValue('--bone-rgb').trim() || boneRGB;
    moonRGB = cs.getPropertyValue('--moon-rgb').trim() || moonRGB;
    inkColor = cs.getPropertyValue('--ink').trim() || inkColor;
    starK = parseFloat(cs.getPropertyValue('--stars'));
    if (isNaN(starK)) starK = 1;
    if (calm) paint(0);
  };
  addEventListener('themechange', readColors);
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.max(50, Math.min(140, Math.round(W * H / 15000)));
    stars = Array.from({ length: n }, (_, i) => ({ x: Math.random() * W, y: Math.random() * H, r: .4 + Math.random() * 1.0, a: .18 + Math.random() * .42, s: .5 + Math.random() * 1.6, p: Math.random() * 6.28, f: .04 + Math.random() * .2, m: i % 7 === 0 }));
    if (calm) paint(0);
  };
  /* ---------- the moon, drawn on the same canvas as the stars ---------- */
  const moonBox = $('#moonwrap'), heroEl = $('#hero');
  const CRES = new Path2D('M18.84 75.56A44 44 0 1 0 58.54 16.02A36 36 0 1 1 18.84 75.56Z');
  const CUTS = [[73.8, 63.9, 105.9, 79.9, 0.9], [77.5, 48, 108.5, 48, 1.05], [73.8, 32.1, 93.1, 22.5, 1.2]];
  const SHIMMER_EVERY = 8, SHIMMER_FOR = 4.4;
  /* angle, radius from the moon's centre, period (s), phase */
  const DOTS = [[-66, 45.5, 6.4, .05], [-28, 46.5, 7.9, .38], [12, 45, 5.8, .71], [46, 47, 7.2, .22], [84, 45.5, 6.6, .55], [120, 46.5, 8.1, .86], [148, 45, 5.9, .13]];
  const t0 = performance.now();
  let moonAlpha = 1;
  const readMoonAlpha = () => { moonAlpha = parseFloat(getComputedStyle(moonBox).opacity); if (isNaN(moonAlpha)) moonAlpha = 1; };
  addEventListener('resize', readMoonAlpha); readMoonAlpha();
  const ease = (k) => 1 - Math.pow(1 - Math.min(1, Math.max(0, k)), 3);
  const drawMoon = (now) => {
    const hero = heroEl.getBoundingClientRect();
    if (hero.bottom < 0 || hero.top > H) return;
    const r = moonBox.getBoundingClientRect(), s = r.width / 120;
    const el = calm ? 99 : (now - t0) / 1000;
    ctx.save();
    ctx.beginPath(); ctx.rect(hero.left, hero.top, hero.width, hero.height); ctx.clip();
    ctx.translate(r.left, r.top); ctx.scale(s, s);
    const I = .95 * moonAlpha * ease(el / 1.6);
    ctx.fillStyle = `rgba(${moonRGB},${(I * (calm ? 1 : .94)).toFixed(3)})`;
    ctx.fill(CRES);
    if (!calm && el > 2.2) {
      /* passive shimmer: a wide, soft band of light drifts across the crescent every few seconds */
      const tt = (el - 2.2) % SHIMMER_EVERY;
      if (tt < SHIMMER_FOR) {
        const k = tt / SHIMMER_FOR, e = k * k * k * (k * (k * 6 - 15) + 10), env = Math.pow(Math.sin(Math.PI * k), 1.6), cx = -62 + e * 250;
        ctx.save(); ctx.clip(CRES); ctx.transform(1, 0, -.34, 1, 0, 0);
        const g = ctx.createLinearGradient(cx - 38, 0, cx + 38, 0), A = I * env;
        [[0, 0], [.2, .1], [.4, .55], [.5, 1], [.6, .55], [.8, .1], [1, 0]].forEach(([p, m]) => g.addColorStop(p, `rgba(${moonRGB},${(A * m).toFixed(3)})`));
        ctx.fillStyle = g; ctx.fillRect(-140, -20, 400, 160); ctx.restore();
      }
      /* soft glowing dots drift in and out along the edge, each on its own slow rhythm */
      DOTS.forEach(([deg, rad, per, ph]) => {
        const w = Math.sin((el / per + ph) * 2 * Math.PI), v = w > 0 ? Math.pow(w, 2.4) : 0;
        if (v < .01) return;
        const a = deg * Math.PI / 180, x = 60 + rad * Math.cos(a), y = 60 + rad * Math.sin(a), r = 1.5 + 2.6 * v;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r * 2.6), al = .95 * moonAlpha * v;
        g.addColorStop(0, `rgba(${moonRGB},${al.toFixed(3)})`); g.addColorStop(.28, `rgba(${moonRGB},${(al * .55).toFixed(3)})`); g.addColorStop(1, `rgba(${moonRGB},0)`);
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r * 2.6, 0, 6.283); ctx.fill();
      });
    }
    ctx.strokeStyle = inkColor; ctx.lineCap = 'butt';
    CUTS.forEach(([x1, y1, x2, y2, d]) => {
      ctx.lineWidth = 3 * ease((el - d) / 1.5);
      if (ctx.lineWidth < .05) return;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    });
    ctx.restore();
  };

  const paint = (t) => {
    ctx.clearRect(0, 0, W, H);
    const sy = scrollY;
    for (const s of stars) {
      const y = (((s.y - sy * s.f) % H) + H) % H;
      const a = s.a * starK * (.62 + .38 * Math.sin(t * .001 * s.s + s.p));
      const rgb = s.m ? moonRGB : boneRGB;
      if (s.r > 1.05) {
        const h = ctx.createRadialGradient(s.x, y, 0, s.x, y, s.r * 4.2);
        h.addColorStop(0, `rgba(${rgb},${(a * .35).toFixed(3)})`); h.addColorStop(1, `rgba(${rgb},0)`);
        ctx.fillStyle = h; ctx.beginPath(); ctx.arc(s.x, y, s.r * 4.2, 0, 6.283); ctx.fill();
      }
      ctx.fillStyle = `rgba(${rgb},${(s.m ? a : a * .8).toFixed(3)})`;
      ctx.beginPath(); ctx.arc(s.x, y, s.r, 0, 6.283); ctx.fill();
    }
    drawMoon(t);
    for (const d of dust) {
      const k = d.t / d.max; if (k >= 1) continue;
      ctx.fillStyle = `rgba(${moonRGB},${(1 - k) * .55 * Math.max(starK, .6)})`;
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r * (1 - k * .5), 0, 6.283); ctx.fill();
    }
  };
  const spawnDust = (dt) => {
    const r = feather.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height * .25;
    if (last) {
      const sp = Math.hypot(cx - last.x, cy - last.y);
      if (sp > .6) for (let i = 0; i < Math.min(3, 1 + sp / 8); i++) dust.push({ x: cx + (Math.random() - .5) * 8, y: cy + (Math.random() - .5) * 8, vx: (Math.random() - .5) * .02, vy: .01 + Math.random() * .03, t: 0, max: 1000 + Math.random() * 900, r: .8 + Math.random() * 1.5 });
    }
    last = { x: cx, y: cy };
    dust = dust.filter((d) => d.t < d.max).slice(-180);
    dust.forEach((d) => { d.t += dt; d.x += d.vx * dt; d.y += d.vy * dt; });
  };

  /* ---------- moon-phase scroll indicator (header) + progress hairline ---------- */
  const phase = $('#phase');
  let lastPhase = -1;
  const phaseD = (f) => {
    const t = 10 * (1 - 2 * f), rx = Math.abs(t).toFixed(2);
    return `M0,-10A10,10 0 0 1 0,10A${rx},10 0 0 ${t > 0 ? 0 : 1} 0,-10Z`;
  };
  const scrollState = () => {
    const max = Math.max(1, root.scrollHeight - innerHeight), p = Math.min(1, scrollY / max);
    root.style.setProperty('--prog', p.toFixed(4));
    if (Math.abs(p - lastPhase) > .004) { phase.setAttribute('d', phaseD(p)); lastPhase = p; }
  };

  /* ---------- the falling feather: x sways, y follows the scroll ---------- */
  const drift = () => {
    const max = Math.max(1, root.scrollHeight - innerHeight), p = Math.min(1, scrollY / max);
    const x = innerWidth * (0.5 + 0.42 * Math.sin(p * 17 + 0.6)), y = 40 + p * (innerHeight - 150), rot = 28 * Math.cos(p * 17 + 0.6) - 12;
    feather.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${rot.toFixed(1)}deg)`;
  };

  let prev = performance.now();
  const frame = (now) => {
    const dt = Math.min(64, now - prev); prev = now;
    if (!document.hidden) { scrollState(); drift(); spawnDust(dt); paint(now); }
    requestAnimationFrame(frame);
  };
  resize(); readColors(); addEventListener('resize', resize);
  scrollState();
  if (calm) addEventListener('scroll', () => { scrollState(); paint(0); }, { passive: true });
  else requestAnimationFrame(frame);

  /* ---------- the handwritten L writes itself when it arrives ---------- */
  const sigIO = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); sigIO.unobserve(e.target); } }), { threshold: .35 });
  $$('.sig').forEach((s) => sigIO.observe(s));

  /* ---------- count-up ---------- */
  const countIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    const el = e.target, end = parseInt(el.dataset.final || el.textContent, 10);
    if (calm || !end) return;
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / 1400), v = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(end * v);
      if (k < 1) requestAnimationFrame(step); else el.textContent = parseInt(el.dataset.final || end, 10);
    };
    el.textContent = 0; requestAnimationFrame(step);
  }), { threshold: .6 });
  $$('[data-count]').forEach((el) => countIO.observe(el));

  /* ---------- card spotlight ---------- */
  const grid = $('#grid');
  if (fine) grid.addEventListener('pointermove', (e) => {
    const c = e.target.closest('.card'); if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`);
  });

  /* ---------- magnetic buttons ---------- */
  if (fine && !calm) {
    const btns = $$('.hero .btn');
    addEventListener('pointermove', (e) => btns.forEach((b) => {
      const r = b.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const near = Math.abs(dx) < r.width / 2 + 60 && Math.abs(dy) < r.height / 2 + 50;
      b.style.transform = near ? `translate(${(dx * .18).toFixed(1)}px,${(dy * .28).toFixed(1)}px)` : '';
    }), { passive: true });
  }
})();
