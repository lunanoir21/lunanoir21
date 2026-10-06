(() => {
  'use strict';
  const USER = 'lunanoir21';
  const PAGE = (r) => `https://${USER}.github.io/${r}/`;
  const REPO = (r) => `https://github.com/${USER}/${r}`;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const root = document.documentElement;
  const lang = () => root.dataset.lang;
  const both = (en, tr) => `<span class="en">${esc(en)}</span><span class="tr">${esc(tr)}</span>`;

  /* ---------- copy ---------- */
  const T = {
    en: { ph: 'Search projects…', sStars: 'Most starred', sUpd: 'Recently updated', sName: 'Name A–Z', of: (n, t) => `${n} of ${t} projects`, all: (t) => `${t} projects`,
      none: 'No project matches that. Try a different word or clear the filters.', upd: 'updated', started: 'Started', updated: 'Updated', stars: 'Stars', forks: 'Forks', issues: 'Open issues', license: 'License', language: 'Language', size: 'Size',
      page: 'Project page', gh: 'GitHub', iss: 'Issues', omr: 'Omarchy plugin', details: 'Details', close: 'Close', live: (t) => `Live · checked ${t}`, snap: (t) => `Snapshot · ${t}`, loading: 'Loading…',
      pre: 'pre-release', cpPh: 'Search projects, sections, actions…', cpGo: 'Go to', cpProj: 'Project', cpAct: 'Action', copied: 'Email copied', copied2: 'Command copied', copyFail: 'Could not copy', prev: 'Previous', next: 'Next', none2: 'Nothing found',
      desktop: 'desktop', tools: 'tool', apps: 'app', yes: 'yes' },
    tr: { ph: 'Proje ara…', sStars: 'En çok yıldız', sUpd: 'Son güncellenen', sName: 'Ad A–Z', of: (n, t) => `${t} projeden ${n}`, all: (t) => `${t} proje`,
      none: 'Buna uyan proje yok. Başka bir kelime dene ya da filtreleri temizle.', upd: 'güncellendi', started: 'Başlangıç', updated: 'Güncelleme', stars: 'Yıldız', forks: 'Fork', issues: 'Açık issue', license: 'Lisans', language: 'Dil', size: 'Boyut',
      page: 'Proje sayfası', gh: 'GitHub', iss: 'Issues', omr: 'Omarchy eklentisi', details: 'Ayrıntılar', close: 'Kapat', live: (t) => `Canlı · ${t} kontrol edildi`, snap: (t) => `Anlık görüntü · ${t}`, loading: 'Yükleniyor…',
      pre: 'ön sürüm', cpPh: 'Proje, bölüm, eylem ara…', cpGo: 'Git', cpProj: 'Proje', cpAct: 'Eylem', copied: 'E-posta kopyalandı', copied2: 'Komut kopyalandı', copyFail: 'Kopyalanamadı', prev: 'Önceki', next: 'Sonraki', none2: 'Bir şey bulunamadı',
      desktop: 'masaüstü', tools: 'araç', apps: 'uygulama', yes: 'evet' }
  };
  const t = () => T[lang()];

  /* ---------- projects (curated copy; numbers come from data/repos.json and the live API) ---------- */
  const PROJECTS = [
    { repo: 'quickshell-dynamic-island', name: 'Dynamic Island', g: 'desktop', page: true, omr: 'dynamic-island-omarchy', tech: 'QML',
      en: 'A monochrome Dynamic Island for Hyprland: media with a cava spectrum, timers and alarms, a pixel-art clock, live mic and camera privacy indicators.',
      tr: 'Hyprland için tek renkli Dynamic Island: cava spektrumlu medya, zamanlayıcı ve alarmlar, piksel saat, canlı mikrofon ve kamera göstergeleri.',
      hl: [['MPRIS media with cover art, seeking and transport, plus a real cava spectrum analyser.', 'MPRIS medya: kapak, ileri-geri sarma ve kontroller; gerçek cava spektrum analizörü.'],
        ['Notifications, calls and live mic/camera indicators take the island over and hand it back.', 'Bildirimler, aramalar ve canlı mikrofon/kamera göstergeleri adayı devralır, işi bitince geri verir.'],
        ['Timer, stopwatch, focus and alarm on one stage, with a 5×7 pixel clock in English or Turkish.', 'Zamanlayıcı, kronometre, odak ve alarm tek sahnede; İngilizce ya da Türkçe 5×7 piksel saat.'],
        ['Seven themes and a settings window that previews them live.', 'Yedi tema ve temaları canlı önizleyen bir ayar penceresi.'],
        ['A security and robustness pass before the Omarchy marketplace submission.', 'Omarchy marketplace başvurusu öncesinde güvenlik ve sağlamlık taraması.']] },
    { repo: 'quickshell-quay', name: 'Quay', g: 'desktop', page: true, omr: 'quay-omarchy', tech: 'QML',
      en: 'A vertical, home-screen-style app launcher: pinned apps, folders and live window previews in one rail.',
      tr: 'Dikey, ana ekran tarzı uygulama başlatıcı: sabit uygulamalar, klasörler ve canlı pencere önizlemeleri tek rayda.',
      hl: [['One wheel notch moves one row, docked to whichever screen edge you choose.', 'Tekerleğin her tıkı bir satır ilerletir; istediğin ekran kenarına yerleşir.'],
        ['Pinned apps, folders by drag and drop, and running apps in the order you choose.', 'Sabit uygulamalar, sürükle-bırak klasörler ve açık uygulamalar, seçtiğin sırada.'],
        ['Live window previews on hover; middle click opens a new window.', 'Üzerine gelince canlı pencere önizlemeleri; orta tık yeni pencere açar.'],
        ['Drop a file on a tile to open it with that app; stays out of the way in fullscreen.', 'Bir dosyayı uygulamanın üstüne bırakınca o uygulamayla açılır; tam ekranda yoldan çekilir.'],
        ['1.2.1 (2026-09-16) brings security and stability fixes.', '1.2.1 (2026-09-16) güvenlik ve kararlılık düzeltmeleri getirdi.']] },
    { repo: 'flare-notch', name: 'Flare Notch', g: 'desktop', page: true, omr: 'flare-omarchy', tech: 'QML',
      en: 'Your AI coding limits on the screen edge: Claude Code, Codex, Cursor, OpenCode, Antigravity and Kiro.',
      tr: 'Yapay zekâ kodlama limitlerin ekranın kenarında: Claude Code, Codex, Cursor, OpenCode, Antigravity ve Kiro.',
      hl: [['Shows how much allowance is left for six AI coding tools, welded to the screen edge.', 'Altı yapay zekâ kodlama aracı için kalan kullanım hakkını ekran kenarında gösterir.'],
        ['Three looks (classic, aura, compact) and three edge modes (bridge, floating, flush).', 'Üç görünüm (classic, aura, compact) ve üç kenar modu (bridge, floating, flush).'],
        ['Can hide until the pointer reaches the edge, or appear with a shortcut.', 'İmleç kenara gelene kadar saklanabilir ya da kısayolla açılabilir.'],
        ['Lists open Claude Code sessions and jumps to the right terminal on Hyprland.', 'Açık Claude Code oturumlarını listeler; Hyprland’de doğru terminale atlar.'],
        ['A reading that could not refresh is dimmed, never invented.', 'Yenilenemeyen bir değer soluklaştırılır, asla uydurulmaz.']] },
    { repo: 'tally-screentime', name: 'Tally', g: 'desktop', page: true, omr: 'tally-omarchy', tech: 'QML',
      en: 'Screen time for Hyprland: a pill on your bar, a card beneath it, and PNG, PDF and interactive HTML reports.',
      tr: 'Hyprland için ekran süresi: barda bir hap, altında bir kart ve PNG, PDF, etkileşimli HTML raporları.',
      hl: [['Counts only the focused window, per app and per day, against a daily goal. Idle minutes are taken back.', 'Yalnızca odaktaki pencereyi, uygulama ve gün bazında, günlük hedefe karşı sayar. Boşta geçen dakikalar geri alınır.'],
        ['Day, week and 16-week heatmap views; per-app limits that notify, warn or dim the screen.', 'Gün, hafta ve 16 haftalık ısı haritası; uygulama başına bildiren, uyaran ya da ekranı karartan limitler.'],
        ['Focus sessions with a countdown ring in the pill.', 'Hapta geri sayım halkası olan odak oturumları.'],
        ['Reports as PNG, PDF, JSON or one self-contained interactive HTML file.', 'Rapor olarak PNG, PDF, JSON ya da tek dosyalık etkileşimli HTML.'],
        ['Sixteen themes, Turkish and English, backup and restore.', 'On altı tema, Türkçe ve İngilizce, yedekleme ve geri yükleme.']] },
    { repo: 'desktop-widget-control', name: 'Widget Control', g: 'desktop', page: true, omr: 'desktop-widget-control-omarchy', tech: 'QML',
      en: 'Live widgets for your Wayland desktop with a full editor: clocks, system monitors, music player, weather.',
      tr: 'Wayland masaüstün için canlı widget\'lar ve tam bir düzenleyici: saatler, sistem izleyiciler, müzik çalar, hava durumu.',
      hl: [['17 modules: six clocks, five system monitors, media player, calendar, weather, pomodoro, checklist and AI usage limits.', '17 modül: altı saat, beş sistem izleyici, medya çalar, takvim, hava durumu, pomodoro, yapılacaklar ve yapay zekâ limitleri.'],
        ['A real editor: drag, resize, snap to a grid, and an inspector generated from each module’s options.', 'Gerçek bir düzenleyici: sürükle, boyutlandır, ızgaraya oturt; her modülün seçeneklerinden üretilen denetçi.'],
        ['Nine themes, Turkish and English. The layout is one JSON file that is picked up live.', 'Dokuz tema, Türkçe ve İngilizce. Yerleşim, canlı okunan tek bir JSON dosyası.'],
        ['Cheap to run: data sources only start while a widget needs them.', 'Ucuz çalışır: veri kaynakları yalnızca bir widget’ın ihtiyacı olduğunda başlar.'],
        ['One-line installer, plus an Omarchy plugin.', 'Tek satırlık kurulum ve ayrıca bir Omarchy eklentisi.']] },
    { repo: 'aurguard-project', name: 'AURGuard', g: 'tools', page: true, tech: 'Rust',
      en: 'Security guard for AUR packages: analyzes PKGBUILD and .install scripts before you install. Multilingual, no telemetry.',
      tr: 'AUR paketleri için güvenlik bekçisi: kurmadan önce PKGBUILD ve .install betiklerini inceler. Çok dilli, telemetri yok.',
      hl: [['Fetches package metadata and the raw PKGBUILD and analyzes them before makepkg touches anything.', 'Paket meta verisini ve ham PKGBUILD’i çeker; makepkg bir şeye dokunmadan önce inceler.'],
        ['Flags piped-to-shell installers, obfuscated payloads, plain-HTTP sources and suspiciously new maintainers.', 'Kabuğa boru ile verilen kurulumları, gizlenmiş yükleri, düz HTTP kaynaklarını ve şüpheli derecede yeni bakımcıları işaretler.'],
        ['No API keys, accounts or telemetry: only the public AUR RPC and offline static analysis.', 'API anahtarı, hesap ya da telemetri yok: yalnızca herkese açık AUR RPC ve çevrimdışı statik analiz.'],
        ['Interface in English, Türkçe, Français, Español and Azərbaycan.', 'Arayüz İngilizce, Türkçe, Fransızca, İspanyolca ve Azerice.'],
        ['It raises the floor, not the ceiling: it does not replace reading the script yourself.', 'Tabanı yükseltir, tavanı değil: betiği kendin okumanın yerini tutmaz.']] },
    { repo: 'dep-lens', name: 'dep-lens', g: 'tools', page: true, tech: 'Rust · Node',
      en: 'Scan dependencies across 9 ecosystems, classify licenses, score commercial-use risk, browse results in a fast TUI.',
      tr: '9 ekosistemde bağımlılıkları tara, lisansları sınıflandır, ticari kullanım riskini puanla, hızlı bir TUI\'de gez.',
      hl: [['Nine ecosystems: npm, Cargo, Go, Python, Ruby, PHP, Java, Dart/Flutter and C/C++.', 'Dokuz ekosistem: npm, Cargo, Go, Python, Ruby, PHP, Java, Dart/Flutter ve C/C++.'],
        ['Classifies every license as permissive, weak copyleft, strong copyleft or unknown, and scores commercial-use risk.', 'Her lisansı izin verici, zayıf copyleft, güçlü copyleft ya da bilinmeyen olarak sınıflar ve ticari kullanım riskini puanlar.'],
        ['Falls back to reading the LICENSE text; Python and Java work even without a lockfile.', 'Gerekirse LICENSE metnini okur; Python ve Java kilit dosyası olmadan da çalışır.'],
        ['Rust core, Node.js Ink terminal UI, prebuilt binaries for Linux, macOS and Windows.', 'Rust çekirdek, Node.js Ink terminal arayüzü; Linux, macOS ve Windows için hazır ikili dosyalar.']] },
    { repo: 'petty', name: 'petty', g: 'tools', tech: 'Rust',
      en: 'pet + tty: a hand-drawn pixel-art pet that lives in your terminal.',
      tr: 'pet + tty: terminalinde yaşayan, elle çizilmiş piksel sanat evcil hayvan.',
      hl: [['A small animated creature that wanders, sits, sleeps and reacts to events.', 'Gezen, oturan, uyuyan ve olaylara tepki veren küçük, animasyonlu bir yaratık.'],
        ['In kitty it draws over your shell’s text with no rows or scrollback used; also runs as a pane or inline.', 'kitty’de kabuğun metninin üstüne çizer, satır ya da kaydırma geçmişi harcamaz; panel ya da satır içi de çalışır.'],
        ['Every pet is one JSON file, so a new species never needs Rust changes.', 'Her evcil hayvan tek bir JSON dosyası; yeni tür için Rust’a dokunmak gerekmez.'],
        ['Install with cargo install.', 'cargo install ile kurulur.']] },
    { repo: 'orca-project', name: 'Orca', g: 'tools', tech: 'Rust', pre: true,
      en: 'A security-focused Linux file manager: dual-pane, age-encrypted vaults, sandboxed Lua plugins.',
      tr: 'Güvenlik odaklı Linux dosya yöneticisi: çift panel, age ile şifreli kasalar, korumalı Lua eklentileri.',
      hl: [['Wayland-first, dual-pane and inspired by Dolphin.', 'Wayland öncelikli, çift panelli ve Dolphin’den esinli.'],
        ['age-encrypted vaults with Argon2id key derivation.', 'Argon2id anahtar türetmeli, age ile şifreli kasalar.'],
        ['ripgrep-backed content search.', 'ripgrep destekli içerik araması.'],
        ['A sandboxed Lua plugin API with a hard boundary around vault internals.', 'Kasa iç yapısının etrafında sert bir sınırı olan, korumalı Lua eklenti API’si.']] },
    { repo: 'inktype', name: 'Inktype', g: 'apps', page: true, tech: 'TypeScript',
      en: 'Free, open-source typing practice through real books: Project Gutenberg, Turkish Vikikaynak, themes, stats.',
      tr: 'Gerçek kitaplarla ücretsiz, açık kaynak yazma pratiği: Project Gutenberg, Türkçe Vikikaynak, temalar, istatistikler.',
      hl: [['Type through any of 70,000+ public-domain books, thousands of Turkish works, or text you paste in.', '70.000’den fazla kamu malı kitabın, binlerce Türkçe eserin ya da yapıştırdığın metnin üzerinden yaz.'],
        ['Two mistake modes, focus mode, a reading mode and live WPM and accuracy.', 'İki hata modu, odak modu, okuma modu ve canlı WPM ile doğruluk.'],
        ['On-screen keyboard for US and Turkish Q layouts.', 'ABD ve Türkçe Q düzenleri için ekran klavyesi.'],
        ['No subscriptions, ads or tracking.', 'Abonelik, reklam ya da izleme yok.']] },
    { repo: 'Life-os-project', name: 'Life OS', g: 'apps', page: true, tech: 'Next.js · TypeScript',
      en: 'A local-first personal life OS: habits, finance, notes, workouts, recipes and more.',
      tr: 'Yerel öncelikli kişisel yaşam işletim sistemi: alışkanlıklar, finans, notlar, antrenmanlar, tarifler ve daha fazlası.',
      hl: [['Habits, finance, notes, workouts, recipes and more in one place.', 'Alışkanlıklar, finans, notlar, antrenmanlar, tarifler ve daha fazlası tek yerde.'],
        ['Local-first: your data stays on your device.', 'Yerel öncelikli: verin cihazında kalır.'],
        ['Built with Next.js 14 and TypeScript, open source.', 'Next.js 14 ve TypeScript ile yapıldı, açık kaynak.']] },
    { repo: 'connectible-project', name: 'Connectible', g: 'apps', page: true, tech: 'Dart · Rust', pre: true,
      en: 'A KDE Connect alternative over gRPC and TLS 1.3: clipboard, files, notifications, shared mouse and keyboard. LAN only, no cloud.',
      tr: 'gRPC ve TLS 1.3 üzerinde KDE Connect alternatifi: pano, dosyalar, bildirimler, ortak fare ve klavye. Yalnızca yerel ağ, bulut yok.',
      hl: [['Pair a phone and a desktop on the same network.', 'Telefonu ve masaüstünü aynı ağda eşle.'],
        ['Sync the clipboard, send files, mirror notifications, and drive one machine’s mouse and keyboard from the other.', 'Panoyu eşitle, dosya gönder, bildirimleri yansıt; bir makinenin fare ve klavyesini diğerinden kullan.'],
        ['End-to-end encrypted, LAN only, no cloud.', 'Uçtan uca şifreli, yalnızca yerel ağ, bulut yok.']] }
  ];
  const BY = Object.fromEntries(PROJECTS.map((p) => [p.repo, p]));

  /* screenshots come straight from each project's own repo, so they stay current when the repo changes */
  const RAW = (repo, path) => `https://raw.githubusercontent.com/${USER}/${repo}/main/${path}`;
  const IMG = {
    'quickshell-dynamic-island': 'docs/cover.png', 'quickshell-quay': 'docs/screenshots/preview.png', 'flare-notch': 'docs/screenshots/sessions.png',
    'tally-screentime': 'docs/screenshots/hero.png', 'desktop-widget-control': 'docs/screenshots/black/editor.webp', 'aurguard-project': 'assets/install.gif',
    'dep-lens': 'docs/assets/tui-screenshot.png', 'inktype': 'docs/screenshots/typing.png', 'Life-os-project': 'docs/screenshots/dashboard.jpg'
  };
  /* install commands, copied from each README */
  const OM = (r) => `omarchy plugin add https://github.com/${USER}/${r}.git --enable`;
  const INSTALL = {
    'quickshell-dynamic-island': [['Omarchy', OM('dynamic-island-omarchy')], ['Manual', `git clone https://github.com/${USER}/quickshell-dynamic-island.git`]],
    'quickshell-quay': [['Omarchy', OM('quay-omarchy')], ['Manual', `git clone https://github.com/${USER}/quickshell-quay.git`]],
    'flare-notch': [['Omarchy', OM('flare-omarchy')], ['Manual', `git clone https://github.com/${USER}/flare-notch && cd flare-notch && ./install.sh`]],
    'tally-screentime': [['Omarchy', OM('tally-omarchy')]],
    'desktop-widget-control': [['One line', `curl -fsSL https://raw.githubusercontent.com/${USER}/desktop-widget-control/main/install.sh | sh`], ['Omarchy', OM('desktop-widget-control-omarchy')]],
    'aurguard-project': [['Cargo', 'cargo install aurguard'], ['npm', 'npm install -g aurguard']],
    'dep-lens': [['npm', 'npm install -g @lunanoir/dep-lens']],
    'petty': [['Cargo', `git clone https://github.com/${USER}/petty && cd petty && cargo install --path .`]]
  };
  const OMR = {}; PROJECTS.forEach((p) => { if (p.omr) OMR[p.omr] = p.name + ' · Omarchy'; });
  const labelOf = (n) => (BY[n] ? BY[n].name : OMR[n] || n);

  /* ---------- data: fresh snapshot (refreshed by GitHub Actions) + live API, re-checked while the page is open ---------- */
  const D = { repos: {}, rels: [], generatedAt: null, liveAt: 0, snapshotAt: null };
  const ingest = (rows) => {
    const m = {};
    rows.forEach((r) => { m[r.name] = r; });
    D.repos = m;
  };
  const fromApi = (r) => ({ name: r.name, description: r.description || '', stars: r.stargazers_count, forks: r.forks_count, issues: r.open_issues_count, language: r.language || '', topics: r.topics || [], license: (r.license && r.license.spdx_id) || '', homepage: r.homepage || '', created: r.created_at, pushed: r.pushed_at, size: r.size });
  const loadSnapshot = async () => {
    const res = await fetch(`data/repos.json?h=${Math.floor(Date.now() / 36e5)}`, { cache: 'no-cache' });
    if (!res.ok) throw new Error('snapshot');
    const j = await res.json();
    D.snapshotAt = j.generatedAt;
    if (!D.liveAt) ingest(j.repos);
    try {
      const rr = await fetch(`data/releases.json?h=${Math.floor(Date.now() / 36e5)}`, { cache: 'no-cache' });
      if (rr.ok) D.rels = (await rr.json()).releases || [];
    } catch (e) { /* releases are optional */ }
  };
  const loadLive = async () => {
    let until = 0; try { until = +sessionStorage.getItem('rl-until') || 0; } catch (e) {}
    if (Date.now() < until) return false;
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&type=owner`, { headers: { Accept: 'application/vnd.github+json' } });
    if (res.status === 403 || res.status === 429) { try { sessionStorage.setItem('rl-until', String(Date.now() + 30 * 6e4)); } catch (e) {} return false; }
    if (!res.ok) return false;
    const rows = (await res.json()).filter((r) => !r.fork && !r.private && !r.archived).map(fromApi);
    if (!rows.length) return false;
    ingest(rows); D.liveAt = Date.now();
    return true;
  };

  /* ---------- formatting ---------- */
  const rel = (iso) => {
    const s = (new Date(iso).getTime() - Date.now()) / 1000, f = new Intl.RelativeTimeFormat(lang() === 'tr' ? 'tr' : 'en', { numeric: 'auto' });
    const a = Math.abs(s);
    if (a < 60) return f.format(Math.round(s), 'second');
    if (a < 3600) return f.format(Math.round(s / 60), 'minute');
    if (a < 86400) return f.format(Math.round(s / 3600), 'hour');
    if (a < 2592000) return f.format(Math.round(s / 86400), 'day');
    if (a < 31536000) return f.format(Math.round(s / 2592000), 'month');
    return f.format(Math.round(s / 31536000), 'year');
  };
  const fdate = (iso) => new Date(iso).toLocaleDateString(lang() === 'tr' ? 'tr-TR' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const fsize = (kb) => (kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`);
  const R = (name) => D.repos[name] || { name, stars: 0, forks: 0, issues: 0, language: '', topics: [], license: '', created: '', pushed: '', size: 0, description: '' };
  const linkFor = (name) => (BY[name] && BY[name].page ? PAGE(name) : REPO(name));
  const star = (n = 13) => `<svg class="ico" width="${n}" height="${n}" aria-hidden="true"><use href="#ico-star"/></svg>`;
  const out = '<svg class="ico" width="12" height="12" aria-hidden="true"><use href="#ico-out"/></svg>';
  const GENERIC = new Set(['linux', 'hyprland', 'quickshell', 'dotfiles', 'wayland', 'qml', 'rust', 'typescript', 'open-source', 'hacktoberfest', 'vibe-coding', 'ai']);

  /* ---------- language ---------- */
  const setLang = (l) => {
    root.dataset.lang = l; root.lang = l;
    $$('[data-set-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setLang === l)));
    try { localStorage.setItem('lang', l); } catch (e) {}
    renderAll();
  };
  $$('[data-set-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.setLang)));

  /* ---------- project grid ---------- */
  const view = { q: '', sort: 'stars', g: 'all' };
  const grid = $('#grid');
  let firstPaint = true;
  const list = () => {
    const q = view.q.trim().toLowerCase();
    let a = PROJECTS.filter((p) => (view.g === 'all' || p.g === view.g) && (!q || [p.name, p.repo, p.en, p.tr, p.tech, ...(R(p.repo).topics || [])].join(' ').toLowerCase().includes(q)));
    const by = { stars: (x, y) => R(y.repo).stars - R(x.repo).stars || x.name.localeCompare(y.name), upd: (x, y) => new Date(R(y.repo).pushed || 0) - new Date(R(x.repo).pushed || 0), name: (x, y) => x.name.localeCompare(y.name) }[view.sort];
    return a.sort(by);
  };
  const card = (p, i) => {
    const r = R(p.repo), tags = (r.topics || []).filter((x) => !GENERIC.has(x)).slice(0, 3);
    const tg = p.g === 'desktop' ? both('desktop', 'masaüstü') : p.g === 'tools' ? both('tool', 'araç') : both('app', 'uygulama');
    return `<article class="card rv${firstPaint ? '' : ' in'}" style="${firstPaint ? `--d:${(i % 3) * 90}ms` : ''}" data-g="${p.g}" data-repo="${p.repo}">
${IMG[p.repo] ? `<a class="shot" href="${linkFor(p.repo)}" rel="noopener" tabindex="-1" aria-hidden="true"><img src="${RAW(p.repo, IMG[p.repo])}" alt="" loading="lazy" decoding="async" onerror="this.closest('.shot').remove()"></a>` : ''}
<div class="card-top"><h3 class="card-name"><a href="${linkFor(p.repo)}" rel="noopener">${esc(p.name)}</a></h3><span class="tag">${tg}</span></div>
<p>${both(p.en, p.tr)}${p.pre ? ` <span class="pre">${both('pre-release', 'ön sürüm')}</span>` : ''}</p>
${tags.length ? `<div class="card-sub">${tags.map((x) => `<span class="topic">${esc(x)}</span>`).join('')}</div>` : ''}
${p.omr ? `<div class="card-omr">${both('Also as an', 'Ayrıca')} <a href="${REPO(p.omr)}" rel="noopener">Omarchy plugin</a></div>` : ''}
<div class="card-foot"><span class="meta"><span class="stars">${star()}<span>${r.stars}</span></span><span>${esc(p.tech)}</span>${r.pushed ? `<span>${esc(rel(r.pushed))}</span>` : ''}</span>
<span class="acts"><button type="button" class="more" data-open="${p.repo}">${both('Details', 'Ayrıntılar')} <svg class="ico" width="12" height="12" aria-hidden="true"><use href="#ico-arrow"/></svg></button>${p.page ? `<a href="${PAGE(p.repo)}" rel="noopener">${both('Page', 'Sayfa')} ${out}</a>` : ''}<a href="${REPO(p.repo)}" rel="noopener">GitHub ${out}</a></span></div>
</article>`;
  };
  const renderGrid = () => {
    const a = list();
    grid.innerHTML = a.length ? a.map(card).join('') : `<div class="empty">${esc(t().none)}</div>`;
    const total = PROJECTS.length;
    $('#count').textContent = a.length === total ? t().all(total) : t().of(a.length, total);
    $$('.card', grid).forEach((c) => { if (firstPaint) io && io.observe(c); });
    if (firstPaint) { firstPaint = false; setTimeout(() => $$('.card', grid).forEach((c) => c.style.removeProperty('--d')), 1600); }
  };
  const sortEl = $('#sort'), qEl = $('#q');
  const renderTools = () => {
    qEl.placeholder = t().ph;
    sortEl.innerHTML = [['stars', t().sStars], ['upd', t().sUpd], ['name', t().sName]].map(([v, l]) => `<option value="${v}"${view.sort === v ? ' selected' : ''}>${esc(l)}</option>`).join('');
  };
  qEl.addEventListener('input', () => { view.q = qEl.value; renderGrid(); });
  sortEl.addEventListener('change', () => { view.sort = sortEl.value; renderGrid(); });
  $$('.chip').forEach((c) => c.addEventListener('click', () => { $$('.chip').forEach((x) => x.setAttribute('aria-pressed', String(x === c))); view.g = c.dataset.filter; renderGrid(); }));

  /* ---------- activity ---------- */
  const renderActivity = () => {
    const label = labelOf;
    const rows = Object.values(D.repos).filter((r) => r.pushed && !['lunanoir21', 'lunanoir21.github.io'].includes(r.name)).sort((a, b) => new Date(b.pushed) - new Date(a.pushed)).slice(0, 6);
    $('#act').innerHTML = rows.map((r) => `<li><a href="${linkFor(r.name)}" rel="noopener">${esc(label(r.name))}</a><span class="d">${esc(r.description)}</span><span class="t">${esc(rel(r.pushed))}</span><span class="s">${star(12)}${r.stars}</span></li>`).join('');
  };

  const renderReleases = () => {
    const seen = new Set(), rows = D.rels.filter((r) => !seen.has(r.repo) && seen.add(r.repo)).slice(0, 6);
    $('#rel').innerHTML = rows.length ? rows.map((r) => `<li><a href="${esc(r.url)}" rel="noopener">${esc(labelOf(r.repo))}</a><span class="d">${esc(r.summary || r.name)}</span><span class="t">${esc(rel(r.published))}</span><span class="s">${esc(r.tag)}</span></li>`).join('') : `<li><span class="d">${esc(t().loading)}</span></li>`;
  };

  /* ---------- today's moon: the real phase, computed from the date ---------- */
  const SYN = 29.530588853, REF = Date.UTC(2000, 0, 6, 18, 14);
  const PHASES = [[1.85, 'New moon', 'Yeni ay'], [5.54, 'Waxing crescent', 'Büyüyen hilal'], [9.22, 'First quarter', 'İlk dördün'], [12.91, 'Waxing gibbous', 'Büyüyen şişkin ay'], [16.61, 'Full moon', 'Dolunay'], [20.3, 'Waning gibbous', 'Küçülen şişkin ay'], [23.99, 'Last quarter', 'Son dördün'], [27.68, 'Waning crescent', 'Küçülen hilal'], [99, 'New moon', 'Yeni ay']];
  const phasePath = (f) => { const x = 10 * (1 - 2 * f); return `M0,-10A10,10 0 0 1 0,10A${Math.abs(x).toFixed(2)},10 0 0 ${x > 0 ? 0 : 1} 0,-10Z`; };
  const renderToday = () => {
    const age = (((Date.now() - REF) / 864e5) % SYN + SYN) % SYN, lit = (1 - Math.cos((2 * Math.PI * age) / SYN)) / 2, waning = age > SYN / 2;
    const ph = PHASES.find((p) => age < p[0]), toFull = Math.round((SYN / 2 - age + SYN) % SYN);
    const tr = lang() === 'tr', name = tr ? ph[2] : ph[1];
    const tail = toFull <= 0 ? (tr ? 'bu gece dolunay' : 'full tonight') : tr ? `dolunaya ${toFull} gün` : `full moon in ${toFull} day${toFull === 1 ? '' : 's'}`;
    $('#today').innerHTML = `<svg viewBox="-12 -12 24 24" aria-hidden="true"><circle r="10"/><path d="${phasePath(lit)}"${waning ? ' transform="scale(-1,1)"' : ''}/></svg><span>${esc(tr ? 'Bugünün ayı' : "Tonight's moon")}: ${esc(name)} · ${esc(tail)}</span>`;
  };

  /* ---------- measured ---------- */
  const mix = (p) => `color-mix(in srgb, var(--moon) ${p}%, var(--ink))`;
  const renderMeasured = () => {
    const all = Object.values(D.repos), total = all.reduce((n, r) => n + r.stars, 0);
    $$('[data-total-stars]').forEach((el) => { el.dataset.final = total; el.textContent = total; });
    $$('[data-total-repos]').forEach((el) => { el.dataset.final = all.length; el.textContent = all.length; });
    const last = all.map((r) => r.pushed).sort().pop();
    $$('[data-last-push]').forEach((el) => { el.textContent = last ? fdate(last) : '—'; });

    const top = all.filter((r) => r.stars >= 2).sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name)), max = top[0] ? top[0].stars : 1;
    $('#bars').innerHTML = top.map((r) => `<li><span class="nm">${esc(r.name)}</span><span class="tr-track"><span class="fill" style="--w:${((r.stars / max) * 100).toFixed(1)}%"></span></span><span class="v">${r.stars}</span></li>`).join('');

    const c = {}; all.forEach((r) => { const k = r.language || 'Other'; c[k] = (c[k] || 0) + 1; });
    const named = Object.entries(c).filter(([k]) => k !== 'Other').sort((a, b) => b[1] - a[1]), head = named.slice(0, 4), rest = named.slice(4).reduce((n, [, v]) => n + v, 0) + (c.Other || 0);
    const rows = head.concat(rest ? [['Other', rest]] : []), shades = [100, 70, 48, 32, 18];
    $('#langbar').innerHTML = rows.map(([k, v], i) => `<span style="flex:${v};background:${mix(shades[i])}" title="${esc(k)} ${v}"></span>`).join('');
    $('#langbar').setAttribute('aria-label', rows.map(([k, v]) => `${k} ${v}`).join(', '));
    $('#langkey').innerHTML = rows.map(([k, v], i) => `<li><i style="background:${mix(shades[i])}"></i>${k === 'Other' ? both('Other', 'Diğer') : esc(k)}<b>${v}</b></li>`).join('');

    const now = new Date(), firstISO = all.map((r) => r.created).filter(Boolean).sort()[0], first = firstISO ? new Date(firstISO) : now;
    const span = Math.min(12, Math.max(3, (now.getFullYear() - first.getFullYear()) * 12 + now.getMonth() - first.getMonth() + 1));
    const months = Array.from({ length: span }, (_, i) => { const d = new Date(now.getFullYear(), now.getMonth() - (span - 1) + i, 1); return { y: d.getFullYear(), m: d.getMonth(), n: 0 }; });
    all.forEach((r) => { const d = new Date(r.created); const hit = months.find((x) => x.y === d.getFullYear() && x.m === d.getMonth()); if (hit) hit.n++; });
    const mm = Math.max(1, ...months.map((x) => x.n)), f = new Intl.DateTimeFormat(lang() === 'tr' ? 'tr-TR' : 'en-GB', { month: 'short' });
    $('#cols').innerHTML = months.map((x) => `<li class="${x.n ? '' : 'zero'}"><span class="v">${x.n || ''}</span><i class="bar" style="--h:${x.n ? Math.max(6, Math.round((x.n / mm) * 90)) : 2}px"></i><span>${esc(f.format(new Date(x.y, x.m, 1)))}</span></li>`).join('');
  };

  /* ---------- freshness ---------- */
  const renderFresh = () => {
    const live = D.liveAt > 0, ts = live ? new Date(D.liveAt).toISOString() : D.snapshotAt;
    const txt = ts ? (live ? t().live(rel(ts)) : t().snap(rel(ts))) : t().loading;
    $$('[data-fresh]').forEach((el) => { el.classList.toggle('live', live); el.innerHTML = `<i></i><span>${esc(txt)}</span>`; });
  };

  /* ---------- project details ---------- */
  const dlg = $('#pd');
  let current = null;
  const openProject = (repo, push = true) => {
    const p = BY[repo]; if (!p) return;
    current = repo; const r = R(repo), L = t();
    const tg = p.g === 'desktop' ? both('desktop', 'masaüstü') : p.g === 'tools' ? both('tool', 'araç') : both('app', 'uygulama');
    const order = list(), i = order.findIndex((x) => x.repo === repo), prev = order[(i - 1 + order.length) % order.length], next = order[(i + 1) % order.length];
    const fact = (v, l) => `<div><b>${v}</b><span>${esc(l)}</span></div>`;
    dlg.innerHTML = `<div class="pd-in">
<div class="pd-head"><div><span class="tag">${tg}${p.pre ? ` · ${both('pre-release', 'ön sürüm')}` : ''}</span><h2 class="pd-name" id="pdName">${esc(p.name)}</h2></div><button type="button" class="pd-x" data-close aria-label="${esc(L.close)}">×</button></div>
<div class="pd-body">
${IMG[repo] ? `<a class="pd-shot" href="${linkFor(repo)}" rel="noopener"><img src="${RAW(repo, IMG[repo])}" alt="${esc(p.name)} screenshot" decoding="async" onerror="this.closest('.pd-shot').remove()"></a>` : ''}
<p class="pd-lede">${both(p.en, p.tr)}</p>
<ul class="pd-list">${p.hl.map(([e, tr]) => `<li>${both(e, tr)}</li>`).join('')}</ul>
${INSTALL[repo] ? `<p class="pd-h">${both('Install', 'Kurulum')}</p><div class="inst">${INSTALL[repo].map(([l, c]) => `<div class="cmd"><span class="cl">${esc(l)}</span><code>${esc(c)}</code><button type="button" data-copy="${esc(c)}">${both('Copy', 'Kopyala')}</button></div>`).join('')}</div>` : ''}
${(() => { const lr = D.rels.find((x) => x.repo === repo); return lr ? `<p class="rel-note"><b>${esc(lr.tag)}</b> · ${esc(rel(lr.published))}. ${esc(lr.summary)} <a href="${esc(lr.url)}" rel="noopener">${both('Release notes', 'Sürüm notları')} →</a></p>` : ''; })()}
<div class="facts">${fact(r.stars, L.stars)}${fact(r.forks, L.forks)}${fact(r.issues, L.issues)}${fact(esc(r.license || '—'), L.license)}${fact(esc(r.language || p.tech), L.language)}${fact(r.created ? esc(fdate(r.created)) : '—', L.started)}${fact(r.pushed ? esc(rel(r.pushed)) : '—', L.updated)}${fact(r.size ? esc(fsize(r.size)) : '—', L.size)}</div>
<div class="pd-links">${p.page ? `<a class="btn btn-solid btn-sm" href="${PAGE(repo)}" rel="noopener">${both('Project page', 'Proje sayfası')}</a>` : ''}<a class="btn ${p.page ? 'btn-line' : 'btn-solid'} btn-sm" href="${REPO(repo)}" rel="noopener">GitHub</a><a class="btn btn-line btn-sm" href="${REPO(repo)}/issues" rel="noopener">Issues</a>${p.omr ? `<a class="btn btn-line btn-sm" href="${REPO(p.omr)}" rel="noopener">Omarchy plugin</a>` : ''}</div>
</div>
<div class="pd-foot"><button type="button" data-open="${prev.repo}">← ${esc(prev.name)}</button><button type="button" data-open="${next.repo}">${esc(next.name)} →</button></div>
</div>`;
    if (!dlg.open) dlg.showModal();
    dlg.querySelector('.pd-body').scrollTop = 0;
    if (push) { try { history.replaceState(null, '', '#p=' + repo); } catch (e) {} }
  };
  dlg.addEventListener('click', async (e) => {
    const cb = e.target.closest('[data-copy]');
    if (cb) { try { await navigator.clipboard.writeText(cb.dataset.copy); toast(t().copied2); } catch (err) { toast(t().copyFail); } return; }
    if (e.target === dlg || e.target.closest('[data-close]')) { dlg.close(); return; }
    const o = e.target.closest('[data-open]'); if (o) openProject(o.dataset.open);
  });
  dlg.addEventListener('close', () => { current = null; try { if (location.hash.startsWith('#p=')) history.replaceState(null, '', location.pathname + location.search); } catch (e) {} });
  grid.addEventListener('click', (e) => { const o = e.target.closest('[data-open]'); if (o) openProject(o.dataset.open); });

  /* ---------- command palette ---------- */
  const cp = $('#cp'), cpQ = $('#cpQ'), cpList = $('#cpList');
  let items = [], shown = [], sel = 0;
  const toast = (msg) => { const el = $('#toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('on'), 1800); };
  const copyMail = async () => { try { await navigator.clipboard.writeText('lunanoir_1@protonmail.com'); toast(t().copied); } catch (e) { toast(t().copyFail); } };
  const go = (id) => () => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
  const buildItems = () => {
    const L = lang() === 'tr';
    const nav = [['projects', 'Projeler', 'Projects'], ['activity', 'Etkinlik', 'Activity'], ['measured', 'Ölçülen', 'Measured'], ['how', 'Nasıl yapıyorum', 'How I build'], ['faq', 'SSS', 'FAQ'], ['contact', 'İletişim', 'Contact']];
    items = nav.map(([id, tr, en]) => ({ label: L ? tr : en, hint: t().cpGo, run: go(id), kw: id }))
      .concat(PROJECTS.map((p) => ({ label: p.name, hint: t().cpProj, run: () => openProject(p.repo), kw: p.repo + ' ' + p.tech })))
      .concat([
        { label: L ? 'Sistem temasını kullan' : 'Match system theme', hint: t().cpAct, run: () => window.lunaTheme.setMode('auto'), kw: 'auto theme otomatik' },
        { label: L ? 'Aydınlık tema' : 'Light theme', hint: t().cpAct, run: () => window.lunaTheme.setMode('light'), kw: 'light aydınlık beyaz' },
        { label: L ? 'Koyu tema' : 'Dark theme', hint: t().cpAct, run: () => window.lunaTheme.setMode('dark'), kw: 'dark koyu siyah' },
        { label: L ? 'English' : 'Türkçe', hint: t().cpAct, run: () => setLang(L ? 'en' : 'tr'), kw: 'language dil' },
        { label: L ? 'E-postayı kopyala' : 'Copy email', hint: t().cpAct, run: copyMail, kw: 'mail contact' },
        { label: 'GitHub', hint: t().cpAct, run: () => window.open('https://github.com/' + USER, '_blank', 'noopener'), kw: 'profile' }
      ]);
  };
  const paintCp = () => {
    const q = cpQ.value.trim().toLowerCase();
    shown = items.filter((it) => !q || (it.label + ' ' + it.kw + ' ' + it.hint).toLowerCase().includes(q));
    sel = Math.min(sel, Math.max(0, shown.length - 1));
    cpList.innerHTML = shown.length ? shown.map((it, i) => `<li role="option" id="cp${i}" data-i="${i}" aria-selected="${i === sel}"><span>${esc(it.label)}</span><small>${esc(it.hint)}</small></li>`).join('') : `<li aria-selected="false">${esc(t().none2)}</li>`;
    cpQ.setAttribute('aria-activedescendant', shown.length ? 'cp' + sel : '');
    const s = cpList.querySelector('[aria-selected="true"]'); if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' });
  };
  const openCp = () => { buildItems(); cpQ.value = ''; cpQ.placeholder = t().cpPh; sel = 0; paintCp(); if (!cp.open) cp.showModal(); cpQ.focus(); };
  const runCp = (i) => { const it = shown[i]; if (!it) return; cp.close(); setTimeout(it.run, 30); };
  cpQ.addEventListener('input', () => { sel = 0; paintCp(); });
  cpQ.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % Math.max(1, shown.length); paintCp(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + Math.max(1, shown.length)) % Math.max(1, shown.length); paintCp(); }
    else if (e.key === 'Enter') { e.preventDefault(); runCp(sel); }
  });
  cpList.addEventListener('click', (e) => { const li = e.target.closest('[data-i]'); if (li) runCp(+li.dataset.i); });
  cp.addEventListener('click', (e) => { if (e.target === cp) cp.close(); });
  $('#cpOpen').addEventListener('click', openCp);
  if (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) { const k = $('#cpOpen kbd'); if (k) k.textContent = '⌘ K'; }
  addEventListener('keydown', (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); cp.open ? cp.close() : openCp(); }
    else if (e.key === '/' && !typing && !cp.open && !dlg.open) { e.preventDefault(); qEl.focus(); qEl.select(); }
  });
  $('#copyMail').addEventListener('click', copyMail);

  /* ---------- reveal ---------- */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.08 }) : null;
  const observe = (el) => { if (io) io.observe(el); else el.classList.add('in'); };

  const top = $('.top');
  const onScroll = () => top.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });

  /* ---------- boot ---------- */
  const renderAll = () => { renderTools(); renderGrid(); renderReleases(); renderActivity(); renderToday(); renderMeasured(); renderFresh(); if (dlg.open && current) openProject(current, false); };
  let saved = null; try { saved = localStorage.getItem('lang'); } catch (e) {}
  const boot = saved || (/^tr/i.test(navigator.language) ? 'tr' : 'en');
  root.dataset.lang = boot; root.lang = boot;
  $$('[data-set-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setLang === boot)));
  $$('.sec .h2, .how article, .stats, .chart, .faq').forEach((el) => { el.classList.add('rv'); observe(el); });
  onScroll();

  const refresh = async (force) => {
    if (!force && D.liveAt && Date.now() - D.liveAt < 120000) return;
    let ok = false;
    try { ok = await loadLive(); } catch (e) { ok = false; }
    if (ok) { renderAll(); }
    else renderFresh();
  };
  (async () => {
    renderTools();
    try { await loadSnapshot(); } catch (e) { /* offline preview */ }
    renderAll();
    const m = location.hash.match(/^#p=(.+)$/); if (m && BY[decodeURIComponent(m[1])]) openProject(decodeURIComponent(m[1]), false);
    await refresh(true);
  })();
  setInterval(() => refresh(true), 5 * 60 * 1000);
  setInterval(renderFresh, 30000);
  setInterval(renderToday, 3600000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(false); });
  addEventListener('themechange', () => { renderMeasured(); });
})();
