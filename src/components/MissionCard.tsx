export function MissionCard() {
  return (
    <section
      className="absolute top-[210px] left-9 w-[290px] z-[5] anim-float-1"
      aria-label="Mission"
      style={{ filter: "drop-shadow(-5px 8px 0 #7A1020) drop-shadow(-6px 14px 16px rgba(122, 16, 32, 0.45))" }}
    >
      <span
        className="absolute z-[15] inline-flex items-center justify-center font-jp-rounded text-white whitespace-nowrap"
        style={{
          bottom: "calc(100% - 1px)",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "8px 26px 7px",
          lineHeight: 1,
          background: "#8B1525",
          border: "3px solid #FFFAF3",
          borderBottom: "none",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 900,
            letterSpacing: "0.08em",
            lineHeight: 1,
            textShadow: "0 1px 1px rgba(0, 0, 0, 0.4)",
          }}
        >
          MISSION
        </span>
      </span>

      <div
        className="relative"
        style={{
          background: "#FFFAF3",
          border: "5px solid #8B1525",
          borderRadius: 22,
          boxShadow: "0 0 0 2px #FFFAF3",
          padding: "18px 18px 16px 16px",
        }}
      >
        <div className="flex items-start gap-3">
          <svg
            viewBox="0 0 28 30"
            width="28"
            height="30"
            className="flex-shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <path
              d="M5 3 H17 L24 9 V26 a1.5 1.5 0 0 1 -1.5 1.5 H5 a1.5 1.5 0 0 1 -1.5 -1.5 V4.5 a1.5 1.5 0 0 1 1.5 -1.5 Z"
              fill="#FFFAF3"
              stroke="#8B1525"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path
              d="M16 3 V10 H24"
              fill="none"
              stroke="#8B1525"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <line x1="8" y1="16" x2="20" y2="16" stroke="#8B1525" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="20" x2="20" y2="20" stroke="#8B1525" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="24" x2="15" y2="24" stroke="#8B1525" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p
            className="font-jp-rounded font-extrabold leading-[1.5] flex-1"
            style={{ fontSize: 13, color: "#8B1525", letterSpacing: "0.01em" }}
          >
            Take lessons and raise
            <br />
            your level to 20
          </p>
        </div>
      </div>
    </section>
  );
}
