import ComingSoon from "../../components/ComingSoon";
import { BottomNav } from "../../components/BottomNav";

export default function AboutPage() {
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
        aria-label="About — coming soon"
      >
        <ComingSoon section="About" />
        <BottomNav />
      </main>
    </div>
  );
}
