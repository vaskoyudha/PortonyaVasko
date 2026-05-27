export function EventTile() {
  return (
    <section
      className="absolute top-[320px] left-[14px] w-[168px] h-[178px] rounded-[18px] overflow-hidden z-[5] anim-float-2"
      style={{
        background: "#F8AABF",
        boxShadow: "0 6px 16px rgba(60, 8, 20, 0.32)",
      }}
      aria-label="イベント"
    >
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 100 130"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="evbg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FBE7DA" />
              <stop offset="100%" stopColor="#F8AABF" />
            </linearGradient>
            <linearGradient id="skinG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFE4D2" />
              <stop offset="100%" stopColor="#FFD0AF" />
            </linearGradient>
            <linearGradient id="hairG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F2C969" />
              <stop offset="100%" stopColor="#E0B14A" />
            </linearGradient>
          </defs>
          <rect width="100" height="130" fill="url(#evbg)" />
          <g transform="translate(38 48)">
            <ellipse cx="35" cy="38" rx="25" ry="27" fill="url(#skinG)" />
            <path
              d="M10 38 Q8 6 35 4 Q62 6 60 38 Q60 50 56 54 Q52 38 46 40 Q40 28 35 30 Q30 28 24 40 Q18 38 14 54 Q10 50 10 38 Z"
              fill="url(#hairG)"
            />
            <ellipse cx="26" cy="44" rx="2.4" ry="3.6" fill="#3D0A14" />
            <ellipse cx="44" cy="44" rx="2.4" ry="3.6" fill="#3D0A14" />
            <circle cx="26.8" cy="42.6" r="0.9" fill="#FFFFFF" />
            <circle cx="44.8" cy="42.6" r="0.9" fill="#FFFFFF" />
            <ellipse cx="20" cy="50" rx="2.4" ry="1.4" fill="#E94B7B" opacity="0.6" />
            <ellipse cx="50" cy="50" rx="2.4" ry="1.4" fill="#E94B7B" opacity="0.6" />
            <path d="M32 54 q3 2.4 6 0" stroke="#7A1530" strokeWidth="1.1" fill="none" strokeLinecap="round" />
          </g>
          <path d="M40 94 L50 106 L60 94 L60 130 L40 130 Z" fill="#B8294F" />
        </svg>
      </div>
      <span
        className="absolute top-2.5 left-2.5 z-[2] inline-flex items-center px-3 py-[3px] rounded-full font-jp-rounded font-extrabold text-[11px] tracking-[0.06em] text-white leading-[1.4]"
        style={{
          background: "linear-gradient(180deg, #E94B7B, #B8294F)",
          boxShadow: "0 2px 4px rgba(184, 41, 79, 0.45)",
        }}
      >
        イベント
      </span>
      <div className="absolute top-2 right-2.5 flex gap-[3px] z-[2]" aria-hidden="true">
        <svg viewBox="0 0 14 14" width="10" height="10" aria-hidden="true" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}>
          <path d="M7 0 L8 6 L14 7 L8 8 L7 14 L6 8 L0 7 L6 6 Z" fill="#FFFFFF" />
        </svg>
        <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}>
          <path d="M7 0 L8 6 L14 7 L8 8 L7 14 L6 8 L0 7 L6 6 Z" fill="#FFFFFF" />
        </svg>
        <svg viewBox="0 0 14 14" width="8" height="8" aria-hidden="true" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}>
          <path d="M7 0 L8 6 L14 7 L8 8 L7 14 L6 8 L0 7 L6 6 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
