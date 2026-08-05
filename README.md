<!-- ============ MONOKROM SVG HEADER BANNER ============ -->
<div align="center">
  <svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1200px;">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0" />
        <stop offset="50%" style="stop-color:#ffffff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222" stroke-width="0.5"/>
      </pattern>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <clipPath id="clip">
        <rect width="1200" height="300" rx="20"/>
      </clipPath>
    </defs>
    
    <g clip-path="url(#clip)">
      <rect width="1200" height="300" fill="url(#bgGrad)"/>
      <rect width="1200" height="300" fill="url(#grid)"/>
      
      <line x1="0" y1="150" x2="1200" y2="150" stroke="url(#lineGrad)" stroke-width="1" opacity="0.3">
        <animate attributeName="y1" values="50;250;50" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="50;250;50" dur="4s" repeatCount="indefinite"/>
      </line>
      <line x1="0" y1="150" x2="1200" y2="150" stroke="url(#lineGrad)" stroke-width="0.5" opacity="0.2">
        <animate attributeName="y1" values="250;50;250" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="250;50;250" dur="3s" repeatCount="indefinite"/>
      </line>
      
      <circle cx="100" cy="50" r="2" fill="#fff" opacity="0.5">
        <animate attributeName="cy" values="50;250;50" dur="6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="300" cy="100" r="1.5" fill="#fff" opacity="0.4">
        <animate attributeName="cy" values="100;200;100" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="500" cy="80" r="2.5" fill="#fff" opacity="0.6">
        <animate attributeName="cy" values="80;220;80" dur="7s" repeatCount="indefinite"/>
      </circle>
      <circle cx="800" cy="120" r="2" fill="#fff" opacity="0.5">
        <animate attributeName="cy" values="120;180;120" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="1000" cy="60" r="1.5" fill="#fff" opacity="0.4">
        <animate attributeName="cy" values="60;240;60" dur="5.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="1100" cy="200" r="2" fill="#fff" opacity="0.5">
        <animate attributeName="cy" values="200;100;200" dur="6.5s" repeatCount="indefinite"/>
      </circle>
      
      <text x="50" y="280" font-family="monospace" font-size="14" fill="#666" opacity="0.5">const</text>
      <text x="200" y="30" font-family="monospace" font-size="12" fill="#444" opacity="0.4">{...}</text>
      <text x="1050" y="280" font-family="monospace" font-size="14" fill="#666" opacity="0.5">&lt;/&gt;</text>
      <text x="900" y="30" font-family="monospace" font-size="12" fill="#444" opacity="0.4">()</text>
      
      <text x="600" y="120" font-family="'Courier New', monospace" font-size="64" font-weight="bold" fill="#ffffff" text-anchor="middle" filter="url(#glow)">
        @lunanoir21
      </text>
      
      <text x="600" y="170" font-family="'Courier New', monospace" font-size="24" fill="#aaaaaa" text-anchor="middle">
        &gt; basic vibe coder_
        <animate attributeName="fill" values="#aaaaaa;#ffffff;#aaaaaa" dur="2s" repeatCount="indefinite"/>
      </text>
      
      <rect x="820" y="155" width="12" height="24" fill="#fff">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </rect>
      
      <path d="M 20 20 L 60 20 M 20 20 L 20 60" stroke="#fff" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M 1180 20 L 1140 20 M 1180 20 L 1180 60" stroke="#fff" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M 20 280 L 60 280 M 20 280 L 20 240" stroke="#fff" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M 1180 280 L 1140 280 M 1180 280 L 1180 240" stroke="#fff" stroke-width="2" fill="none" opacity="0.8"/>
      
      <rect x="300" y="220" width="600" height="40" rx="20" fill="#111" stroke="#333" stroke-width="1"/>
      <circle cx="340" cy="240" r="6" fill="#fff"/>
      <text x="360" y="245" font-family="monospace" font-size="14" fill="#ccc">166 contributions</text>
      <line x1="530" y1="225" x2="530" y2="255" stroke="#333" stroke-width="1"/>
      <circle cx="560" cy="240" r="6" fill="#fff"/>
      <text x="580" y="245" font-family="monospace" font-size="14" fill="#ccc">5 followers</text>
      <line x1="710" y1="225" x2="710" y2="255" stroke="#333" stroke-width="1"/>
      <circle cx="740" cy="240" r="6" fill="#fff"/>
      <text x="760" y="245" font-family="monospace" font-size="14" fill="#ccc">3 following</text>
    </g>
  </svg>
</div>

<br/>

<!-- ============ ABOUT ME TERMINAL ============ -->
<div align="center">
  <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px;">
    <defs>
      <linearGradient id="termGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#1a1a1a"/>
        <stop offset="100%" style="stop-color:#0a0a0a"/>
      </linearGradient>
    </defs>
    
    <rect x="0" y="0" width="800" height="400" rx="15" fill="url(#termGrad)" stroke="#333" stroke-width="2"/>
    
    <rect x="0" y="0" width="800" height="40" rx="15" fill="#222"/>
    <rect x="0" y="20" width="800" height="20" fill="#222"/>
    
    <circle cx="30" cy="20" r="7" fill="#666"/>
    <circle cx="55" cy="20" r="7" fill="#444"/>
    <circle cx="80" cy="20" r="7" fill="#333"/>
    <text x="400" y="25" font-family="monospace" font-size="13" fill="#888" text-anchor="middle">~/lunanoir21/about.sh</text>
    
    <text x="20" y="80" font-family="'Courier New', monospace" font-size="14" fill="#888">
      <tspan fill="#666">lunanoir@dev</tspan><tspan fill="#fff">:</tspan><tspan fill="#aaa">~</tspan><tspan fill="#fff">$ whoami</tspan>
    </text>
    <text x="20" y="110" font-family="'Courier New', monospace" font-size="14" fill="#ccc">
      +--------------------------------------------------+
    </text>
    <text x="20" y="130" font-family="'Courier New', monospace" font-size="14" fill="#ccc">
      |  <tspan fill="#fff" font-weight="bold">LUNANOIR21</tspan>                                |
    </text>
    <text x="20" y="150" font-family="'Courier New', monospace" font-size="14" fill="#ccc">
      |  <tspan fill="#aaa">basic vibe coder</tspan>                          |
    </text>
    <text x="20" y="170" font-family="'Courier New', monospace" font-size="14" fill="#ccc">
      +--------------------------------------------------+
    </text>
    
    <text x="20" y="210" font-family="'Courier New', monospace" font-size="14" fill="#888">
      <tspan fill="#666">lunanoir@dev</tspan><tspan fill="#fff">:</tspan><tspan fill="#aaa">~</tspan><tspan fill="#fff">$ cat profile.json</tspan>
    </text>
    <text x="20" y="235" font-family="'Courier New', monospace" font-size="13" fill="#ccc">
      {
    </text>
    <text x="40" y="255" font-family="'Courier New', monospace" font-size="13" fill="#ccc">
      "role": "Vibe Coder",
    </text>
    <text x="40" y="275" font-family="'Courier New', monospace" font-size="13" fill="#ccc">
      "stack": ["TypeScript", "Rust", "Next.js", "QML"],
    </text>
    <text x="40" y="295" font-family="'Courier New', monospace" font-size="13" fill="#ccc">
      "passions": ["local-first", "open-source", "dev-tools"],
    </text>
    <text x="40" y="315" font-family="'Courier New', monospace" font-size="13" fill="#ccc">
      "currently": "Building personal life OS",
    </text>
    <text x="40" y="335" font-family="'Courier New', monospace" font-size="13" fill="#ccc">
      "fun_fact": "I code to the vibe"
    </text>
    <text x="20" y="355" font-family="'Courier New', monospace" font-size="13" fill="#ccc">
      }
    </text>
    
    <text x="20" y="380" font-family="'Courier New', monospace" font-size="14" fill="#888">
      <tspan fill="#666">lunanoir@dev</tspan><tspan fill="#fff">:</tspan><tspan fill="#aaa">~</tspan><tspan fill="#fff">$ </tspan>
    </text>
    <rect x="160" y="367" width="8" height="18" fill="#fff">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
    </rect>
  </svg>
</div>

<br/>

<!-- ============ TECH STACK - MONOKROM SVG IKONLAR ============ -->
<div align="center">
  <svg viewBox="0 0 1000 180" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px;">
    <defs>
      <filter id="cardShadow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.5"/>
      </filter>
    </defs>
    
    <text x="500" y="40" font-family="'Courier New', monospace" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">
      <tspan fill="#666">&gt;</tspan> TECH_STACK
    </text>
    <line x1="350" y1="55" x2="650" y2="55" stroke="#333" stroke-width="1"/>
    
    <!-- TypeScript -->
    <g transform="translate(50, 80)" filter="url(#cardShadow)">
      <rect width="150" height="80" rx="10" fill="#111" stroke="#444" stroke-width="1.5"/>
      <text x="75" y="35" font-family="'Courier New', monospace" font-size="28" font-weight="bold" fill="#fff" text-anchor="middle">TS</text>
      <text x="75" y="65" font-family="monospace" font-size="12" fill="#aaa" text-anchor="middle">TypeScript</text>
    </g>
    
    <!-- Rust -->
    <g transform="translate(225, 80)" filter="url(#cardShadow)">
      <rect width="150" height="80" rx="10" fill="#111" stroke="#444" stroke-width="1.5"/>
      <text x="75" y="35" font-family="'Courier New', monospace" font-size="22" font-weight="bold" fill="#fff" text-anchor="middle">RUST</text>
      <text x="75" y="65" font-family="monospace" font-size="12" fill="#aaa" text-anchor="middle">Systems</text>
    </g>
    
    <!-- Next.js -->
    <g transform="translate(400, 80)" filter="url(#cardShadow)">
      <rect width="150" height="80" rx="10" fill="#111" stroke="#444" stroke-width="1.5"/>
      <text x="75" y="35" font-family="'Courier New', monospace" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">N.js</text>
      <text x="75" y="65" font-family="monospace" font-size="12" fill="#aaa" text-anchor="middle">Next.js 14</text>
    </g>
    
    <!-- Node.js -->
    <g transform="translate(575, 80)" filter="url(#cardShadow)">
      <rect width="150" height="80" rx="10" fill="#111" stroke="#444" stroke-width="1.5"/>
      <text x="75" y="35" font-family="'Courier New', monospace" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">node</text>
      <text x="75" y="65" font-family="monospace" font-size="12" fill="#aaa" text-anchor="middle">Node.js / Ink</text>
    </g>
    
    <!-- QML -->
    <g transform="translate(750, 80)" filter="url(#cardShadow)">
      <rect width="150" height="80" rx="10" fill="#111" stroke="#444" stroke-width="1.5"/>
      <text x="75" y="35" font-family="'Courier New', monospace" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">QML</text>
      <text x="75" y="65" font-family="monospace" font-size="12" fill="#aaa" text-anchor="middle">QuickShell</text>
    </g>
  </svg>
</div>

<br/>

<!-- ============ PINNED PROJECTS - MONOKROM KARTLAR ============ -->
<div align="center">
  <svg viewBox="0 0 1000 350" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px;">
    <text x="500" y="40" font-family="'Courier New', monospace" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">
      <tspan fill="#666">&gt;</tspan> PINNED_PROJECTS
    </text>
    <line x1="350" y1="55" x2="650" y2="55" stroke="#333" stroke-width="1"/>
    
    <!-- Project 1: Life-os-project -->
    <g transform="translate(30, 80)">
      <rect width="450" height="240" rx="15" fill="#0d0d0d" stroke="#333" stroke-width="2"/>
      <rect width="450" height="60" rx="15" fill="#1a1a1a"/>
      <rect y="40" width="450" height="20" fill="#1a1a1a"/>
      
      <circle cx="35" cy="30" r="15" fill="#fff" opacity="0.2"/>
      <text x="35" y="35" font-family="monospace" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">01</text>
      <text x="70" y="25" font-family="'Courier New', monospace" font-size="18" font-weight="bold" fill="#fff">Life-OS-Project</text>
      <text x="70" y="45" font-family="monospace" font-size="12" fill="#888">TypeScript // Next.js 14</text>
      
      <text x="25" y="95" font-family="monospace" font-size="13" fill="#ccc">
        <tspan x="25" dy="0">An open-source, local-first personal life OS.</tspan>
        <tspan x="25" dy="22">Built with modern web technologies to track:</tspan>
      </text>
      
      <g transform="translate(25, 135)">
        <rect x="0" y="0" width="90" height="28" rx="6" fill="#222" stroke="#555" stroke-width="1"/>
        <text x="45" y="19" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">habits</text>
        
        <rect x="100" y="0" width="90" height="28" rx="6" fill="#222" stroke="#555" stroke-width="1"/>
        <text x="145" y="19" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">finance</text>
        
        <rect x="200" y="0" width="90" height="28" rx="6" fill="#222" stroke="#555" stroke-width="1"/>
        <text x="245" y="19" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">notes</text>
        
        <rect x="300" y="0" width="90" height="28" rx="6" fill="#222" stroke="#555" stroke-width="1"/>
        <text x="345" y="19" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">workouts</text>
        
        <rect x="100" y="35" width="90" height="28" rx="6" fill="#222" stroke="#555" stroke-width="1"/>
        <text x="145" y="54" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">recipes</text>
        
        <rect x="200" y="35" width="90" height="28" rx="6" fill="#222" stroke="#555" stroke-width="1"/>
        <text x="245" y="54" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">+ more</text>
      </g>
      
      <rect x="25" y="200" width="400" height="1" fill="#333"/>
      <text x="25" y="225" font-family="monospace" font-size="11" fill="#888">[local-first]</text>
      <text x="400" y="225" font-family="monospace" font-size="11" fill="#fff" text-anchor="end">view &gt;&gt;</text>
    </g>
    
    <!-- Project 2: dep-lens -->
    <g transform="translate(520, 80)">
      <rect width="450" height="240" rx="15" fill="#0d0d0d" stroke="#333" stroke-width="2"/>
      <rect width="450" height="60" rx="15" fill="#1a1a1a"/>
      <rect y="40" width="450" height="20" fill="#1a1a1a"/>
      
      <circle cx="35" cy="30" r="15" fill="#fff" opacity="0.2"/>
      <text x="35" y="35" font-family="monospace" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">02</text>
      <text x="70" y="25" font-family="'Courier New', monospace" font-size="18" font-weight="bold" fill="#fff">dep-lens</text>
      <text x="70" y="45" font-family="monospace" font-size="12" fill="#888">Rust core + Node.js/Ink</text>
      
      <text x="25" y="95" font-family="monospace" font-size="13" fill="#ccc">
        <tspan x="25" dy="0">Scan dependencies across 9 ecosystems.</tspan>
        <tspan x="25" dy="22">Classify licenses and score commercial-use risk.</tspan>
        <tspan x="25" dy="22">Browse results in a fast ASCII TUI.</tspan>
      </text>
      
      <g transform="translate(25, 165)">
        <rect x="0" y="0" width="95" height="28" rx="6" fill="#222" stroke="#555" stroke-width="1"/>
        <text x="47" y="19" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">scanner</text>
        
        <rect x="105" y="0" width="110" height="28" rx="6" fill="#222" stroke="#555" stroke-width="1"/>
        <text x="160" y="19" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">license class</text>
        
        <rect x="225" y="0" width="110" height="28" rx="6" fill="#222" stroke="#555" stroke-width="1"/>
        <text x="280" y="19" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">risk score</text>
        
        <rect x="345" y="0" width="85" height="28" rx="6" fill="#222" stroke="#555" stroke-width="1"/>
        <text x="387" y="19" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">ASCII TUI</text>
      </g>
      
      <rect x="25" y="200" width="400" height="1" fill="#333"/>
      <text x="25" y="225" font-family="monospace" font-size="11" fill="#888">[rust-powered]</text>
      <text x="400" y="225" font-family="monospace" font-size="11" fill="#fff" text-anchor="end">view &gt;&gt;</text>
    </g>
  </svg>
</div>

<br/>

<!-- ============ GITHUB STATS - MONOKROM ============ -->
<div align="center">
  <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px;">
    <text x="500" y="40" font-family="'Courier New', monospace" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">
      <tspan fill="#666">&gt;</tspan> GITHUB_STATS
    </text>
    <line x1="350" y1="55" x2="650" y2="55" stroke="#333" stroke-width="1"/>
    
    <g transform="translate(50, 80)">
      <rect width="270" height="100" rx="12" fill="#111" stroke="#444" stroke-width="1.5"/>
      <text x="20" y="35" font-family="monospace" font-size="13" fill="#888">Total Commits</text>
      <text x="20" y="75" font-family="'Courier New', monospace" font-size="36" font-weight="bold" fill="#fff">166+</text>
      <circle cx="235" cy="50" r="20" fill="none" stroke="#333" stroke-width="3"/>
      <path d="M 235 30 A 20 20 0 1 1 220 65" fill="none" stroke="#fff" stroke-width="3"/>
    </g>
    
    <g transform="translate(360, 80)">
      <rect width="270" height="100" rx="12" fill="#111" stroke="#444" stroke-width="1.5"/>
      <text x="20" y="35" font-family="monospace" font-size="13" fill="#888">Public Repos</text>
      <text x="20" y="75" font-family="'Courier New', monospace" font-size="36" font-weight="bold" fill="#fff">3+</text>
      <text x="200" y="60" font-family="monospace" font-size="10" fill="#666">active</text>
    </g>
    
    <g transform="translate(670, 80)">
      <rect width="270" height="100" rx="12" fill="#111" stroke="#444" stroke-width="1.5"/>
      <text x="20" y="35" font-family="monospace" font-size="13" fill="#888">Contribution</text>
      <text x="20" y="75" font-family="'Courier New', monospace" font-size="28" font-weight="bold" fill="#fff">ACTIVE</text>
      <text x="200" y="75" font-family="monospace" font-size="14" fill="#aaa">// rising</text>
    </g>
  </svg>
</div>

<br/>

<!-- ============ CONTRIBUTION GRAPH - MONOKROM ============ -->
<div align="center">
  <svg viewBox="0 0 1000 250" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px;">
    <text x="500" y="30" font-family="'Courier New', monospace" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">
      <tspan fill="#666">&gt;</tspan> CODING_ACTIVITY
    </text>
    <line x1="350" y1="45" x2="650" y2="45" stroke="#333" stroke-width="1"/>
    
    <rect x="20" y="60" width="960" height="170" rx="10" fill="#0d0d0d" stroke="#333" stroke-width="1.5"/>
    
    <text x="50" y="85" font-family="monospace" font-size="11" fill="#666">Aug</text>
    <text x="150" y="85" font-family="monospace" font-size="11" fill="#666">Sep</text>
    <text x="250" y="85" font-family="monospace" font-size="11" fill="#666">Oct</text>
    <text x="350" y="85" font-family="monospace" font-size="11" fill="#666">Nov</text>
    <text x="450" y="85" font-family="monospace" font-size="11" fill="#666">Dec</text>
    <text x="550" y="85" font-family="monospace" font-size="11" fill="#666">Jan</text>
    <text x="650" y="85" font-family="monospace" font-size="11" fill="#666">Feb</text>
    <text x="750" y="85" font-family="monospace" font-size="11" fill="#666">Mar</text>
    <text x="850" y="85" font-family="monospace" font-size="11" fill="#666">Apr</text>
    
    <g id="contributions">
      <rect x="50" y="100" width="12" height="12" rx="2" fill="#fff" opacity="0.1"/>
      <rect x="65" y="100" width="12" height="12" rx="2" fill="#fff" opacity="0.05"/>
      <rect x="80" y="100" width="12" height="12" rx="2" fill="#fff" opacity="0.1"/>
      
      <rect x="550" y="100" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      <rect x="565" y="100" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="580" y="100" width="12" height="12" rx="2" fill="#fff" opacity="0.6"/>
      <rect x="595" y="100" width="12" height="12" rx="2" fill="#fff" opacity="0.9"/>
      <rect x="610" y="100" width="12" height="12" rx="2" fill="#fff" opacity="0.7"/>
      <rect x="625" y="100" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="640" y="100" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      
      <rect x="550" y="115" width="12" height="12" rx="2" fill="#fff" opacity="0.5"/>
      <rect x="565" y="115" width="12" height="12" rx="2" fill="#fff" opacity="0.9"/>
      <rect x="580" y="115" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="595" y="115" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      <rect x="610" y="115" width="12" height="12" rx="2" fill="#fff" opacity="0.6"/>
      <rect x="625" y="115" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="640" y="115" width="12" height="12" rx="2" fill="#fff" opacity="0.9"/>
      
      <rect x="550" y="130" width="12" height="12" rx="2" fill="#fff" opacity="0.7"/>
      <rect x="565" y="130" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      <rect x="580" y="130" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="595" y="130" width="12" height="12" rx="2" fill="#fff" opacity="0.9"/>
      <rect x="610" y="130" width="12" height="12" rx="2" fill="#fff" opacity="0.7"/>
      <rect x="625" y="130" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      
      <rect x="550" y="145" width="12" height="12" rx="2" fill="#fff" opacity="0.9"/>
      <rect x="565" y="145" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="580" y="145" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      <rect x="595" y="145" width="12" height="12" rx="2" fill="#fff" opacity="0.7"/>
      <rect x="610" y="145" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="625" y="145" width="12" height="12" rx="2" fill="#fff" opacity="0.9"/>
      <rect x="640" y="145" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      
      <rect x="550" y="160" width="12" height="12" rx="2" fill="#fff" opacity="0.6"/>
      <rect x="565" y="160" width="12" height="12" rx="2" fill="#fff" opacity="0.7"/>
      <rect x="580" y="160" width="12" height="12" rx="2" fill="#fff" opacity="0.9"/>
      <rect x="595" y="160" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="610" y="160" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      <rect x="625" y="160" width="12" height="12" rx="2" fill="#fff" opacity="0.7"/>
      
      <rect x="550" y="175" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      <rect x="565" y="175" width="12" height="12" rx="2" fill="#fff" opacity="0.9"/>
      <rect x="580" y="175" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="595" y="175" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      <rect x="610" y="175" width="12" height="12" rx="2" fill="#fff" opacity="0.7"/>
      
      <rect x="550" y="190" width="12" height="12" rx="2" fill="#fff" opacity="0.9"/>
      <rect x="565" y="190" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="580" y="190" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
      <rect x="595" y="190" width="12" height="12" rx="2" fill="#fff" opacity="0.9"/>
      <rect x="610" y="190" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
      <rect x="625" y="190" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
    </g>
    
    <text x="750" y="205" font-family="monospace" font-size="11" fill="#666">Less</text>
    <rect x="790" y="195" width="12" height="12" rx="2" fill="#fff" opacity="0.1"/>
    <rect x="805" y="195" width="12" height="12" rx="2" fill="#fff" opacity="0.3"/>
    <rect x="820" y="195" width="12" height="12" rx="2" fill="#fff" opacity="0.6"/>
    <rect x="835" y="195" width="12" height="12" rx="2" fill="#fff" opacity="0.8"/>
    <rect x="850" y="195" width="12" height="12" rx="2" fill="#fff" opacity="1"/>
    <text x="870" y="205" font-family="monospace" font-size="11" fill="#666">More</text>
  </svg>
</div>

<br/>

<!-- ============ CURRENTLY WORKING ON ============ -->
<div align="center">
  <svg viewBox="0 0 800 150" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px;">
    <rect width="800" height="150" rx="15" fill="#0a0a0a" stroke="#333" stroke-width="2"/>
    
    <circle cx="40" cy="40" r="8" fill="#fff">
      <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="40" cy="40" r="15" fill="none" stroke="#fff" stroke-width="1" opacity="0.3">
      <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
    </circle>
    
    <text x="70" y="35" font-family="'Courier New', monospace" font-size="14" fill="#888">Currently Building</text>
    <text x="70" y="55" font-family="'Courier New', monospace" font-size="18" font-weight="bold" fill="#fff">QuickShell Dynamic Island</text>
    
    <text x="40" y="95" font-family="monospace" font-size="13" fill="#aaa">QML // Linux Desktop Customization</text>
    
    <rect x="40" y="115" width="720" height="6" rx="3" fill="#222"/>
    <rect x="40" y="115" width="432" height="6" rx="3" fill="#fff" opacity="0.9">
      <animate attributeName="width" from="0" to="432" dur="2s" fill="freeze"/>
    </rect>
    <text x="760" y="110" font-family="monospace" font-size="12" fill="#888" text-anchor="end">60%</text>
  </svg>
</div>

<br/>

<!-- ============ CONTACT / CONNECT ============ -->
<div align="center">
  <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px;">
    <text x="500" y="40" font-family="'Courier New', monospace" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">
      <tspan fill="#666">&gt;</tspan> CONNECT_WITH_ME
    </text>
    <line x1="350" y1="55" x2="650" y2="55" stroke="#333" stroke-width="1"/>
    
    <g transform="translate(200, 80)">
      <rect width="200" height="100" rx="12" fill="#111" stroke="#444" stroke-width="1.5"/>
      <circle cx="100" cy="35" r="18" fill="none" stroke="#fff" stroke-width="2"/>
      <text x="100" y="42" font-family="monospace" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">GH</text>
      <text x="100" y="75" font-family="'Courier New', monospace" font-size="14" fill="#fff" text-anchor="middle">GitHub</text>
      <text x="100" y="90" font-family="monospace" font-size="11" fill="#888" text-anchor="middle">@lunanoir21</text>
    </g>
    
    <g transform="translate(425, 80)">
      <rect width="200" height="100" rx="12" fill="#111" stroke="#444" stroke-width="1.5"/>
      <circle cx="100" cy="35" r="18" fill="none" stroke="#fff" stroke-width="2"/>
      <text x="100" y="42" font-family="monospace" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">X</text>
      <text x="100" y="75" font-family="'Courier New', monospace" font-size="14" fill="#fff" text-anchor="middle">Twitter/X</text>
      <text x="100" y="90" font-family="monospace" font-size="11" fill="#888" text-anchor="middle">follow for updates</text>
    </g>
    
    <g transform="translate(650, 80)">
      <rect width="200" height="100" rx="12" fill="#111" stroke="#444" stroke-width="1.5"/>
      <circle cx="100" cy="35" r="18" fill="none" stroke="#fff" stroke-width="2"/>
      <path d="M 88 32 L 100 40 L 112 32 M 88 32 L 88 44 L 112 44 L 112 32" stroke="#fff" stroke-width="1.5" fill="none"/>
      <text x="100" y="75" font-family="'Courier New', monospace" font-size="14" fill="#fff" text-anchor="middle">Email</text>
      <text x="100" y="90" font-family="monospace" font-size="11" fill="#888" text-anchor="middle">reach out anytime</text>
    </g>
  </svg>
</div>

<br/>

<!-- ============ FOOTER ============ -->
<div align="center">
  <svg viewBox="0 0 1000 80" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px;">
    <defs>
      <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#000;stop-opacity:0" />
        <stop offset="50%" style="stop-color:#fff;stop-opacity:0.3" />
        <stop offset="100%" style="stop-color:#000;stop-opacity:0" />
      </linearGradient>
    </defs>
    
    <rect x="0" y="35" width="1000" height="1" fill="url(#footerGrad)"/>
    
    <text x="500" y="60" font-family="'Courier New', monospace" font-size="13" fill="#666" text-anchor="middle">
      // built with pure SVG // monochrome design // coded by lunanoir21 //
    </text>
    
    <circle cx="100" cy="20" r="1" fill="#fff" opacity="0.3">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="300" cy="15" r="1.5" fill="#fff" opacity="0.4">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="700" cy="18" r="1" fill="#fff" opacity="0.3">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="900" cy="12" r="1.5" fill="#fff" opacity="0.4">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite"/>
    </circle>
  </svg>
</div>

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=lunanoir21&style=for-the-badge&color=black&labelColor=000000" alt="profile views"/>
</p>
