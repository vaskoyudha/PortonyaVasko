export function LessonCard() {
  return (
    <section
      className="absolute bottom-[106px] right-14 w-[268px] h-[220px] z-[5] anim-float-rot"
      style={{
        transform: "rotate(-6deg)",
        filter: "drop-shadow(0 12px 24px rgba(122, 21, 48, 0.55))",
      }}
      aria-label="Lesson"
    >
      <svg
        className="absolute z-[3]"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        style={{ top: 6, left: 16, filter: "drop-shadow(0 2px 3px rgba(122, 21, 48, 0.55))" }}
        aria-hidden="true"
      >
        <path
          d="M12 1 L13.5 9 L22 12 L13.5 14.5 L12 23 L10.5 14.5 L2 12 L10.5 9 Z"
          fill="#FFFFFF"
        />
      </svg>
      <div
        className="relative w-full h-full grid items-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #D63B6B 0%, #B8294F 60%, #7A1530 100%)",
          borderRadius: 18,
          gridTemplateRows: "1fr auto",
          padding: "14px 18px 24px",
          clipPath:
            "polygon(14px 0%, calc(100% - 14px) 0%, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0% calc(100% - 14px), 0% 14px)",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            inset: 8,
            border: "2px dashed rgba(255, 246, 238, 0.6)",
            borderRadius: 12,
            clipPath:
              "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 40% at 30% 20%, rgba(255, 246, 238, 0.35), transparent 60%)",
          }}
        />
        <div
          className="font-jp font-black text-center"
          style={{
            gridRow: 1,
            gridColumn: 1,
            alignSelf: "center",
            justifySelf: "center",
            fontSize: 64,
            lineHeight: 0.9,
            letterSpacing: "-2px",
            color: "transparent",
            WebkitTextStroke: "5px #F8AABF",
            textShadow:
              "3px 3px 0 #7A1530, 5px 5px 0 #5A0F1F, 0 8px 14px rgba(60, 8, 20, 0.55)",
          }}
          aria-hidden="true"
        >
          TRAINING
        </div>
        <span
          className="font-jp font-black text-center relative z-[2]"
          style={{
            gridRow: 1,
            gridColumn: 1,
            alignSelf: "center",
            justifySelf: "center",
            fontSize: 64,
            lineHeight: 0.9,
            letterSpacing: "-2px",
            color: "#FFFAF3",
            textShadow:
              "-1.5px -1.5px 0 #FBE7DA, 1.5px 1.5px 0 #7A1530, 3px 3px 0 #5A0F1F, 5px 5px 0 #3D0A14",
          }}
        >
          TRAINING
        </span>
        <div
          className="relative z-[3] flex items-center justify-center mx-auto"
          style={{
            gap: 8,
            background: "linear-gradient(180deg, #E94B7B, #B8294F)",
            padding: "6px 18px",
            borderRadius: 6,
            boxShadow: "0 3px 0 #7A1530, 0 6px 12px rgba(60, 8, 20, 0.45)",
            width: "fit-content",
            clipPath:
              "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)",
          }}
        >
          <span
            className="bg-ivory"
            style={{ width: 6, height: 6, transform: "rotate(45deg)" }}
            aria-hidden="true"
          />
          <span
            className="font-num font-bold"
            style={{
              fontSize: 18,
              letterSpacing: "0.08em",
              color: "#FFFAF3",
              textShadow: "0 1px 0 #7A1530",
            }}
          >
            Agentic Harnessing
          </span>
          <span
            className="bg-ivory"
            style={{ width: 6, height: 6, transform: "rotate(45deg)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
