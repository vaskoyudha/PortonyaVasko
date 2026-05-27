import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yui Load:Dream — Lesson:01",
  description: "Idol training home screen",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=M+PLUS+Rounded+1c:wght@500;700;800;900&family=Noto+Sans+JP:wght@500;700;800;900&family=Zen+Maru+Gothic:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
