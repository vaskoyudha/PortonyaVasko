export default function MinimapWidget() {
  return (
    <div className="absolute bottom-[96px] left-9 z-[8] anim-float-2 flex flex-col items-center">
      <svg
        viewBox="0 0 96 96"
        width="96"
        height="96"
        aria-label="Compass"
        role="img"
      >
        {/* Outer frame */}
        <circle
          cx="48"
          cy="48"
          r="42"
          fill="#FFF6EE"
          stroke="#7A1530"
          strokeWidth="3"
        />
        {/* Inner bezel ring for depth */}
        <circle
          cx="48"
          cy="48"
          r="34"
          fill="none"
          stroke="#7A1530"
          strokeWidth="1"
          opacity="0.35"
        />

        {/* Cardinal tick marks (~8px long) */}
        {/* N */}
        <line x1="48" y1="8" x2="48" y2="16" stroke="#5A0F1F" strokeWidth="2.5" strokeLinecap="round" />
        {/* E */}
        <line x1="88" y1="48" x2="80" y2="48" stroke="#5A0F1F" strokeWidth="2.5" strokeLinecap="round" />
        {/* S */}
        <line x1="48" y1="88" x2="48" y2="80" stroke="#5A0F1F" strokeWidth="2.5" strokeLinecap="round" />
        {/* W */}
        <line x1="8" y1="48" x2="16" y2="48" stroke="#5A0F1F" strokeWidth="2.5" strokeLinecap="round" />

        {/* Cardinal letter: N */}
        <text
          x="48"
          y="26"
          textAnchor="middle"
          fontFamily="'Pixelify Sans', system-ui, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill="#5A0F1F"
        >
          N
        </text>

        {/* Needle pointing NE — rotated -45deg around center */}
        <g transform="rotate(-45 48 48)">
          {/* North half (filled maroon) */}
          <path d="M48 14 L54 48 L48 44 L42 48 Z" fill="#7A1530" stroke="#5A0F1F" strokeWidth="1" strokeLinejoin="round" />
          {/* South half (lighter) */}
          <path d="M48 82 L54 48 L48 52 L42 48 Z" fill="#FBE7DA" stroke="#5A0F1F" strokeWidth="1" strokeLinejoin="round" />
        </g>

        {/* Center pivot */}
        <circle cx="48" cy="48" r="2.5" fill="#5A0F1F" />
      </svg>

      <span className="font-jp text-[10px] text-ink-700 tracking-wider mt-1">
        COMPASS
      </span>
    </div>
  );
}
