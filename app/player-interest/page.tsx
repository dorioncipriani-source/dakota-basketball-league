export default function PlayerInterestPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-red-800">
          Player Interest
        </p>

        <h1 className="text-5xl font-black text-yellow-500 md:text-7xl">
          Think You Can Compete?
        </h1>

        <p className="mt-8 text-xl leading-9 text-zinc-300">
          DBL is built for competitive men’s basketball players who are 18+,
          out of high school, and ready to represent their market.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-950 p-8">
          <h2 className="text-3xl font-black text-white">
            Player Interest Requirements
          </h2>

          <ul className="mt-6 space-y-4 text-zinc-300">
            <li>• Must be 18+</li>
            <li>• Must be out of high school</li>
            <li>• Competitive playing background preferred</li>
            <li>• Must be willing to represent a DBL market</li>
          </ul>
        </div>

        <a
          href="https://forms.gle/n5BCKUD77MxgBpqH7"
          target="_blank"
          className="mt-12 inline-block rounded-lg bg-red-900 px-9 py-4 font-black text-white hover:bg-red-800"
        >
          Submit Player Interest
        </a>
      </div>
    </main>
  );
}