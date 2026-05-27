import { MissionCard } from "./MissionCard";
import { LessonCard } from "./LessonCard";
import { BottomNav } from "./BottomNav";
import HeroHeader from "./HeroHeader";
import StatBars from "./StatBars";
import FloorIndicator from "./FloorIndicator";
import AchievementPopup from "./AchievementPopup";
import MinimapWidget from "./MinimapWidget";
import { SpeechBubble } from "./SpeechBubble";

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
        <HeroHeader />
        <FloorIndicator />
        <StatBars />
        <AchievementPopup />
        <MissionCard />
        <MinimapWidget />
        <SpeechBubble />
        <LessonCard />
        <BottomNav />
      </main>
    </div>
  );
}
