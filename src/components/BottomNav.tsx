"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  const matchedIndex = TABS.findIndex((t) => t.href === pathname);
  const active = matchedIndex === -1 ? 0 : matchedIndex;

  return (
    <div
      className="absolute left-1/2 bottom-6 z-10"
      style={{
        transform: "translateX(-50%)",
        width: "min(94%, 920px)",
      }}
    >
      <nav className="anim-nav relative" aria-label="主要メニュー">
        <div
          className="relative flex items-center"
          style={{
            background: "#FFFAF3",
            border: "3px solid #5A0F1F",
            borderRadius: 9999,
            height: 56,
            paddingLeft: 6,
            paddingRight: 6,
            boxShadow:
              "0 0 0 2px #FFFAF3, -8px 8px 0 0 #5A0F1F, -10px 14px 22px rgba(60, 8, 20, 0.45)",
          }}
        >
          <span
            aria-hidden="true"
            className="absolute"
            style={{
              top: -4,
              bottom: -4,
              left:
                active === 0
                  ? 0
                  : `calc(6px + ${active} * (100% - 12px) / ${TABS.length})`,
              right:
                active === TABS.length - 1
                  ? 0
                  : `calc(6px + ${TABS.length - 1 - active} * (100% - 12px) / ${TABS.length})`,
              transition: "left 0.2s ease, right 0.2s ease",
              background: "#5A0F1F",
              borderRadius: 9999,
              boxShadow:
                "inset 0 0 0 4px #5A0F1F, inset 0 0 0 7px #FFFAF3, inset 0 -3px 0 rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.18)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {TABS.map((tab, i) => {
            const isActive = i === active;
            const showDivider = i > 0 && i !== active && i - 1 !== active;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="relative flex-1 grid place-items-center h-full font-jp-rounded font-extrabold whitespace-nowrap cursor-pointer"
                style={{
                  color: isActive ? "#FFFAF3" : "#5A0F1F",
                  fontSize: isActive ? 16 : 15,
                  letterSpacing: isActive ? "0.08em" : "0.06em",
                  textShadow: isActive ? "0 1px 1px rgba(0, 0, 0, 0.4)" : undefined,
                  transition: "color 0.2s ease",
                  zIndex: 3,
                  background: "transparent",
                  border: "none",
                  textDecoration: "none",
                }}
              >
                {showDivider && (
                  <span
                    aria-hidden="true"
                    className="absolute"
                    style={{
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 2,
                      background: "rgba(90, 15, 31, 0.45)",
                    }}
                  />
                )}
                {tab.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
