"use client";

import { useEffect, useState } from "react";

const ACHIEVEMENTS = [
  "20 Projects Milestone",
  "First AI Agent Deployed",
  "Daily Build Streak",
] as const;

export default function AchievementPopup() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => {
        if (prev >= ACHIEVEMENTS.length - 1) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="absolute top-[88px] left-1/2 z-[20]"
      style={{ transform: "translateX(-50%)" }}
    >
      <div
        key={index}
        className="anim-pop-toast flex items-center gap-2 rounded-lg px-4 py-2"
        style={{
          background: "#FFFAF3",
          border: "2px solid #5A0F1F",
          boxShadow:
            "0 0 0 2px var(--color-ivory), -3px 5px 0 #5A0F1F, -4px 8px 12px rgba(60, 8, 20, 0.4)",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="#E0B14A"
          stroke="#7A1530"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M7 4h10v3a5 5 0 01-5 5 5 5 0 01-5-5V4z" />
          <path d="M9 14h6v3H9z" />
          <path d="M8 19h8v2H8z" />
        </svg>
        <span
          className="font-jp text-xs uppercase"
          style={{ color: "#5A0F1F", letterSpacing: "0.12em" }}
        >
          Achievement
        </span>
        <span className="font-jp text-sm" style={{ color: "#1A0A0F" }}>
          {ACHIEVEMENTS[index]}
        </span>
      </div>
    </div>
  );
}
