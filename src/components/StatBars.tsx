type Row = {
  label: string;
  value: string;
  fill: string;
};

const ROWS: readonly Row[] = [
  { label: "EXP", value: "1 yr",        fill: "#E0B14A" }, // gold-500
  { label: "MP",  value: "20 projects", fill: "#C56A8A" }, // gem-500
  { label: "HP",  value: "MAX/MAX",     fill: "#B8294F" }, // maroon-500
];

export default function StatBars() {
  return (
    <section
      className="absolute top-4 right-5 z-[8] anim-float-1"
      aria-label="Stats"
      style={{
        width: 260,
        background: "#FFF6EE",
        border: "4px solid #7A1530",
        borderRadius: 14,
        padding: 12,
        boxShadow: "0 0 0 2px #FFFAF3",
      }}
    >
      <ul className="flex flex-col gap-[6px]">
        {ROWS.map((row) => (
          <li key={row.label} className="flex flex-col gap-[3px]">
            <div className="flex items-baseline justify-between">
              <span
                className="font-jp"
                style={{
                  fontSize: 14,
                  lineHeight: 1,
                  letterSpacing: "0.06em",
                  color: "#2A0810",
                  fontWeight: 700,
                }}
              >
                {row.label}
              </span>
              <span
                className="font-num"
                style={{
                  fontSize: 14,
                  lineHeight: 1,
                  color: "#5A0F1F",
                  fontWeight: 700,
                }}
              >
                {row.value}
              </span>
            </div>
            <div
              role="presentation"
              style={{
                height: 8,
                border: "1.5px solid #FFFAF3",
                borderRadius: 4,
                background: "#FBE7DA",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: row.fill,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
