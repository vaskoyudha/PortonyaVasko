export function CurrencyPill() {
  return (
    <div
      className="flex items-center gap-3 px-[18px] py-2 rounded-full mt-1 bg-ivory"
    >
      <span className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <defs>
            <radialGradient id="coinG" cx="0.4" cy="0.35" r="0.8">
              <stop offset="0%" stopColor="#FFF1A8" />
              <stop offset="60%" stopColor="#E0B14A" />
              <stop offset="100%" stopColor="#A87520" />
            </radialGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#coinG)" stroke="#7A4F08" strokeWidth="1" />
          <circle cx="12" cy="12" r="6.5" fill="none" stroke="#7A4F08" strokeWidth="0.8" opacity="0.6" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontFamily="Bebas Neue, sans-serif"
            fontSize="10"
            fill="#5A3008"
          >
            P
          </text>
        </svg>
        <span className="font-num text-[20px] text-ink-900 font-bold tracking-[0.04em]">50</span>
      </span>
      <span className="w-px h-[18px] bg-cream-100" />
      <span className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <defs>
            <linearGradient id="gemG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F8AABF" />
              <stop offset="100%" stopColor="#C56A8A" />
            </linearGradient>
          </defs>
          <path
            d="M12 2 L21 9 L12 22 L3 9 Z"
            fill="url(#gemG)"
            stroke="#7A1530"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M3 9 L21 9 M12 2 L8 9 L12 22 M12 2 L16 9 L12 22"
            fill="none"
            stroke="#7A1530"
            strokeWidth="0.8"
            opacity="0.7"
          />
        </svg>
        <span className="font-num text-[20px] text-ink-900 font-bold tracking-[0.04em]">50</span>
      </span>
    </div>
  );
}
