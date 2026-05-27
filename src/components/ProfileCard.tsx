export function ProfileCard() {
  return (
    <section
      className="absolute top-4 left-5 w-[308px] min-h-[190px] px-4 pt-3.5 pb-4 bg-ivory rounded-[18px] z-[5] flex flex-col gap-2.5 anim-float"
      style={{ boxShadow: "0 6px 16px rgba(60, 8, 20, 0.28)" }}
      aria-label="プロフィール"
    >
      <header className="flex items-center gap-2.5">
        <div
          className="w-14 h-14 rounded-[14px] overflow-hidden flex-shrink-0"
          style={{ boxShadow: "0 2px 4px rgba(184, 41, 79, 0.4)" }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 56 56" width="100%" height="100%" aria-hidden="true">
            <rect width="56" height="56" rx="14" fill="#F8AABF" />
            <path d="M14 22 L20 10 L24 22 Z" fill="#E94B7B" />
            <path d="M42 22 L36 10 L32 22 Z" fill="#E94B7B" />
            <ellipse cx="28" cy="32" rx="16" ry="14" fill="#FFFAF3" />
            <circle cx="22" cy="31" r="1.8" fill="#3D0A14" />
            <circle cx="34" cy="31" r="1.8" fill="#3D0A14" />
            <path d="M27 35 L29 35 L28 36.5 Z" fill="#B8294F" />
            <path d="M25 38 c1 1.4 5 1.4 6 0" stroke="#3D0A14" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M14 33 L20 34 M14 36 L20 36 M42 33 L36 34 M42 36 L36 36" stroke="#E94B7B" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <span className="font-jp-rounded font-extrabold text-[15px] text-ink-900 tracking-[0.02em] truncate">
            mennminnmiiiii
          </span>
          <button
            type="button"
            className="w-[22px] h-[22px] grid place-items-center rounded-md hover:bg-cream-100 transition-colors"
            aria-label="名前を編集"
          >
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M11.5 1.7 L14.3 4.5 L5 13.8 L1.5 14.5 L2.2 11 Z" fill="none" stroke="#9B6675" strokeWidth="1.3" strokeLinejoin="round" />
              <path d="M10 3.2 L12.8 6" stroke="#9B6675" strokeWidth="1.3" />
            </svg>
          </button>
        </div>
      </header>

      <StatRow label="スタミナ" value="12" fillPct={60} barText="6/10" tone="rose" />
      <StatRow label="プロデューサーランク" value="4" fillPct={30} barText="3/10" tone="gold" />
    </section>
  );
}

function StatRow({
  label,
  value,
  fillPct,
  barText,
  tone,
}: {
  label: string;
  value: string;
  fillPct: number;
  barText: string;
  tone: "rose" | "gold";
}) {
  const numColor = tone === "rose" ? "text-rose-500" : "text-gold-500";
  const fillBg =
    tone === "rose"
      ? "linear-gradient(90deg, #E94B7B, #F8AABF)"
      : "linear-gradient(90deg, #E0B14A, #F2C969)";
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex flex-col items-start flex-shrink-0 w-[86px]">
        <span className="text-[10px] text-ink-400 font-bold tracking-[0.02em] leading-[1.1]">
          {label}
        </span>
        <span
          className={`font-num text-[34px] leading-none font-black italic mt-0.5 tracking-[0.01em] ${numColor}`}
          style={{ transform: "skewX(-6deg)", textShadow: "0 2px 0 rgba(0,0,0,0.06)" }}
        >
          {value}
        </span>
      </div>
      <div
        className="relative flex-1 h-[18px] rounded-full overflow-hidden"
        style={{
          background: "#F4DFD2",
          boxShadow: "inset 0 1px 2px rgba(60, 8, 20, 0.18)",
        }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${fillPct}%`,
            background: fillBg,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
          }}
        />
        <span
          className="absolute inset-0 grid place-items-center font-jp-rounded font-extrabold text-[11px] text-white tracking-[0.02em]"
          style={{ textShadow: "0 1px 1px rgba(0,0,0,0.25)" }}
        >
          {barText}
        </span>
      </div>
    </div>
  );
}
