export default function HeroHeader() {
  return (
    <section
      className="absolute top-4 left-5 z-[8] anim-float"
      aria-label="Hero header"
      style={{
        filter:
          "drop-shadow(-5px 8px 0 #5A0F1F) drop-shadow(-6px 14px 16px rgba(60, 8, 20, 0.45))",
      }}
    >
      <div
        className="relative flex items-center gap-3"
        style={{
          background: "var(--color-cream-50)",
          border: "4px solid var(--color-maroon-800)",
          padding: "12px 16px",
          width: 320,
          boxShadow: "0 0 0 2px var(--color-ivory)",
          clipPath:
            "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
        }}
      >
        <div
          data-placeholder="hero-sprite"
          role="img"
          aria-label="Hero avatar placeholder"
          className="flex-shrink-0"
          style={{
            width: 64,
            height: 64,
            background: "var(--color-ivory)",
            border: "2px dashed var(--color-maroon-700)",
          }}
        />

        <div
          className="flex flex-col gap-1 min-w-0"
          style={{ maxWidth: 200 }}
        >
          <h1
            className="font-jp font-black leading-tight"
            style={{
              fontSize: 16,
              color: "var(--color-ink-900)",
              letterSpacing: "0.01em",
            }}
          >
            Vasco Yudha Nodyatama Sera
          </h1>
          <p
            className="font-jp font-bold uppercase"
            style={{
              fontSize: 12,
              color: "var(--color-maroon-700)",
              letterSpacing: "0.18em",
              lineHeight: 1,
            }}
          >
            AI ANTUSIAS
          </p>
        </div>

        <span
          className="font-num font-black absolute"
          style={{
            top: -10,
            right: 8,
            background: "var(--color-ink-900)",
            color: "var(--color-gold-400)",
            border: "2px solid var(--color-gold-500)",
            padding: "3px 10px 2px",
            fontSize: 13,
            letterSpacing: "0.06em",
            lineHeight: 1,
            textShadow: "0 1px 0 rgba(0,0,0,0.5)",
            boxShadow: "0 2px 0 rgba(0,0,0,0.35)",
            clipPath:
              "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)",
          }}
        >
          LV.24
        </span>
      </div>
    </section>
  );
}
