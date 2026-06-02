const updates = [
  ["League Update", "DBL prepares for inaugural launch.", "The Dakota Basketball League is building toward its 2026 launch cycle."],
  ["Sponsorship", "Founding sponsor opportunities now available.", "Businesses can align with DBL through league, team, and founding sponsor opportunities."],
  ["Player Interest", "Player interest survey is now open.", "Competitive players can submit interest for future DBL evaluation."],
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-red-800">
          DBL News
        </p>

        <h1 className="text-5xl font-black text-yellow-500 md:text-7xl">
          League Updates
        </h1>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {updates.map(([category, title, text]) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-red-800">
                {category}
              </p>
              <h2 className="text-2xl font-black text-white">{title}</h2>
              <p className="mt-4 text-zinc-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
