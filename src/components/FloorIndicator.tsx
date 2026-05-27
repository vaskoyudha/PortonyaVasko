export default function FloorIndicator() {
  return (
    <div
      className="absolute top-4 left-1/2 z-[8] anim-float"
      style={{ transform: "translateX(-50%)" }}
      role="status"
      aria-label="Current floor"
    >
      <div
        className="bg-maroon-800 text-ivory font-jp uppercase tracking-wider"
        style={{
          padding: "6px 24px",
          borderRadius: 9999,
          fontSize: 12,
          lineHeight: 1,
          clipPath:
            "polygon(8px 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0 50%)",
        }}
      >
        FLOOR 1 — ENTRANCE
      </div>
    </div>
  );
}
