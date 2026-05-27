import ComingSoon from "../../components/ComingSoon";
import { BottomNav } from "../../components/BottomNav";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, #2a0a14 0%, #0d0306 100%)",
      }}
    >
      <main
        className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
        style={{
          fontSize: 14,
          isolation: "isolate",
          backgroundImage: "url('/assets/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Contact — coming soon"
      >
        <ComingSoon section="Contact" />
        <ul
          className="absolute left-1/2 z-[7] flex flex-col gap-2 text-center"
          style={{
            bottom: 180,
            transform: "translateX(-50%)",
            color: "#FFFAF3",
            fontSize: 15,
            fontWeight: 600,
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.6)",
          }}
        >
          <li>
            <a
              href="https://github.com/vaskoyudha"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#FFFAF3",
                textDecoration: "underline",
                textDecorationThickness: 2,
                textUnderlineOffset: 4,
              }}
            >
              GitHub: vaskoyudha
            </a>
          </li>
          <li>
            <span>LinkedIn: TBD</span>
          </li>
          <li>
            <span>X: TBD</span>
          </li>
          <li>
            <span>Email: TBD</span>
          </li>
        </ul>
        <BottomNav />
      </main>
    </div>
  );
}
