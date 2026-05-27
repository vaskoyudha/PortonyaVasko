interface ComingSoonProps {
  section: string;
}

export default function ComingSoon({ section }: ComingSoonProps) {
  return (
    <main className="min-h-screen w-full bg-cream-100 flex items-center justify-center p-6">
      <div
        className="anim-pop bg-cream-50 border-4 border-maroon-700 rounded-2xl p-8 max-w-md w-full text-center"
        style={{
          boxShadow: "0 0 0 2px var(--color-ivory), -5px 8px 0 #7A1020, -6px 14px 16px rgba(122, 16, 32, 0.45)",
        }}
      >
        <h1 className="font-jp text-4xl text-maroon-800 mb-2 tracking-wider">
          COMING SOON
        </h1>
        <h2 className="font-jp text-2xl text-ink-900 mb-4">{section}</h2>
        <p className="font-jp text-base text-ink-700">
          This page is under construction.
        </p>
      </div>
    </main>
  );
}
