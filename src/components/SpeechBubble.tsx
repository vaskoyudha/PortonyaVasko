export function SpeechBubble() {
  return (
    <div
      className="absolute top-[110px] right-[200px] w-[360px] h-[150px] z-[6] font-jp-rounded font-extrabold text-ink-900 leading-[1.55] text-[16px] text-center pointer-events-none anim-pop"
      role="note"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 360 150"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="bubbleShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#7A1530" floodOpacity="0.32" />
          </filter>
          <filter id="cloudMerge" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="cloud"
            />
            <feComposite in="SourceGraphic" in2="cloud" operator="atop" />
          </filter>
        </defs>
        <g fill="#B8294F" style={{ filter: "url(#bubbleShadow) url(#cloudMerge)" }}>
          <circle cx="55" cy="80" r="45" />
          <circle cx="110" cy="55" r="47" />
          <circle cx="170" cy="48" r="49" />
          <circle cx="230" cy="55" r="47" />
          <circle cx="290" cy="70" r="45" />
          <circle cx="315" cy="95" r="39" />
          <circle cx="85" cy="105" r="41" />
          <circle cx="185" cy="112" r="43" />
          <circle cx="245" cy="105" r="41" />
        </g>
        <g fill="#FFFAF3" style={{ filter: "url(#cloudMerge)" }}>
          <circle cx="55" cy="80" r="42" />
          <circle cx="110" cy="55" r="44" />
          <circle cx="170" cy="48" r="46" />
          <circle cx="230" cy="55" r="44" />
          <circle cx="290" cy="70" r="42" />
          <circle cx="315" cy="95" r="36" />
          <circle cx="85" cy="105" r="38" />
          <circle cx="185" cy="112" r="40" />
          <circle cx="245" cy="105" r="38" />
        </g>
        <g fill="#FFFAF3" stroke="#B8294F" strokeWidth="3" strokeLinejoin="round">
          <path d="M 78 116 L 60 148 L 100 124 Z" />
        </g>
      </svg>
      <div className="absolute inset-[26px_28px_36px_28px] grid place-content-center text-center">
        <p className="m-0 relative z-[1]">私は、目立たない。</p>
        <p className="m-0 relative z-[1]">でも、誰より必要とされてる。</p>
      </div>
      <span
        className="absolute rounded-full bg-ivory z-[1]"
        style={{ width: 14, height: 14, left: 38, bottom: -10, border: "3px solid #B8294F" }}
        aria-hidden="true"
      />
      <span
        className="absolute rounded-full bg-ivory z-[1]"
        style={{ width: 10, height: 10, left: 22, bottom: -26, border: "3px solid #B8294F" }}
        aria-hidden="true"
      />
      <span
        className="absolute rounded-full bg-ivory z-[1]"
        style={{ width: 6, height: 6, left: 10, bottom: -38, border: "3px solid #B8294F" }}
        aria-hidden="true"
      />
    </div>
  );
}
