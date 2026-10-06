/* Light / dark / automatic color mode. Pure black and white lives in CSS, so there is no flash.
   Automatic follows the system and updates live when the system switches. */
(() => {
  'use strict';
  const KEY = 'luna-theme-v4';
  const root = document.documentElement;
  const mq = matchMedia('(prefers-color-scheme: light)');
  const state = { mode: 'auto' };
  try { Object.assign(state, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) {}
  if (!['auto', 'light', 'dark'].includes(state.mode)) state.mode = 'auto';
  const scheme = () => (state.mode === 'auto' ? (mq.matches ? 'light' : 'dark') : state.mode);
  const apply = () => {
    if (state.mode === 'auto') delete root.dataset.mode; else root.dataset.mode = state.mode;
    root.dataset.scheme = scheme();
    document.querySelectorAll('.mode button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === state.mode)));
    requestAnimationFrame(() => {
      const ink = getComputedStyle(root).getPropertyValue('--ink').trim();
      const m = document.querySelector('meta[name="theme-color"]'); if (m && ink) m.content = ink;
      dispatchEvent(new Event('themechange'));
    });
  };
  window.lunaTheme = {
    state, scheme,
    setMode(m) { state.mode = m; try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} apply(); }
  };
  document.querySelectorAll('.mode button').forEach((b) => b.addEventListener('click', () => window.lunaTheme.setMode(b.dataset.mode)));
  mq.addEventListener('change', () => { if (state.mode === 'auto') apply(); });
  apply();
})();
