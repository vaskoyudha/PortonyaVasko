import { CurrencyPill } from "./CurrencyPill";
import { IconStack } from "./IconStack";

export function TopRight() {
  return (
    <div
      className="absolute top-4 left-1/2 z-[6]"
      style={{ transform: "translateX(-50%)" }}
    >
      <aside
        className="flex flex-row items-start gap-3.5 anim-float-3"
        aria-label="通貨とメニュー"
      >
        <CurrencyPill />
        <IconStack />
      </aside>
    </div>
  );
}
