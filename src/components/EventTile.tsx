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
