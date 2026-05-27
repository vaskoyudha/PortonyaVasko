import { MissionCard } from "./MissionCard";
import { TopRight } from "./TopRight";
import { SpeechBubble } from "./SpeechBubble";
import { LessonCard } from "./LessonCard";
import { BottomNav } from "./BottomNav";

export function Stage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, #2a0a14 0%, #0d0306 100%)",
      }}
    >
      <main
        className="relative w-full min-h-screen overflow-hidden"
        style={{
          fontSize: 14,
          isolation: "isolate",
          backgroundImage: "url('/assets/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Idol training home screen"
      >
        <MissionCard />
        <TopRight />
        <SpeechBubble />
        <LessonCard />
        <BottomNav />
      </main>
    </div>
  );
}
