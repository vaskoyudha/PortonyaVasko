export function IconStack() {
  return (
    <div className="flex flex-col gap-2.5 items-center">
      <IconTile label="メニュー">
        <span className="grid gap-1">
          <span className="block w-[22px] h-[3px] rounded-full bg-rose-500" />
          <span className="block w-[22px] h-[3px] rounded-full bg-rose-500" />
          <span className="block w-[22px] h-[3px] rounded-full bg-rose-500" />
        </span>
      </IconTile>
      <IconTile label="プレゼント">
        <svg viewBox="0 0 28 28" width="24" height="24" aria-hidden="true">
          <rect x="4" y="11" width="20" height="14" rx="2" fill="#B8294F" />
          <rect x="3" y="9" width="22" height="5" rx="1.5" fill="#E94B7B" />
          <line x1="14" y1="9" x2="14" y2="25" stroke="#FFFFFF" strokeWidth="2" />
          <path
            d="M9 9 C6 5 11 2 14 6 C17 2 22 5 19 9"
            fill="none"
            stroke="#B8294F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="10" cy="6" r="1.4" fill="#B8294F" />
          <circle cx="18" cy="6" r="1.4" fill="#B8294F" />
        </svg>
      </IconTile>
      <IconTile label="お知らせ">
        <svg viewBox="0 0 28 28" width="24" height="24" aria-hidden="true">
          <rect x="3" y="7" width="22" height="15" rx="2" fill="none" stroke="#B8294F" strokeWidth="2" />
          <path d="M3 8 L14 17 L25 8" fill="none" stroke="#B8294F" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </IconTile>
    </div>
  );
}

function IconTile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        className="w-[52px] h-[52px] bg-ivory rounded-[14px] grid place-items-center transition-transform hover:-translate-y-0.5"
        aria-label={label}
      >
        {children}
      </button>
      <span
        className="font-jp-rounded text-[9px] font-extrabold text-ink-900 tracking-[0.04em] bg-ivory px-1.5 py-0.5 rounded-lg whitespace-nowrap"
      >
        {label}
      </span>
    </div>
  );
}
