export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">

        <h1 className="text-2xl font-bold text-yellow-500">
          DBL
        </h1>

        <div className="flex gap-6 text-sm font-medium text-zinc-300">

          <a href="#">Home</a>
          <a href="#">Teams</a>
          <a href="#">Sponsorship</a>
          <a href="#">Player Interest</a>
          <a href="#">Contact</a>

        </div>

      </nav>

      {/* HERO */}

      <section className="flex min-h-screen flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl font-bold text-yellow-500 mb-6">
          Dakota Basketball League
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          Built Different. Built Dakota.
        </h2>

        <p className="max-w-2xl text-zinc-300 mb-10 text-lg">
          5 Markets. 1 League. The future of competitive basketball across North Dakota.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">

          <button className="rounded-lg bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400">
            Become A Sponsor
          </button>

          <button className="rounded-lg bg-red-900 px-8 py-4 font-bold hover:bg-red-800">
            Player Interest Form
          </button>

        </div>

      </section>

      {/* TEAM SHOWCASE */}

      <section className="px-8 pb-24">

        <h2 className="mb-12 text-center text-4xl font-bold text-yellow-500">
          Featured Teams
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold">Minot Outlaws</h3>
            <p className="mt-3 text-zinc-400">
              The Magic City's Most Wanted.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold">Bismarck Capitalists</h3>
            <p className="mt-3 text-zinc-400">
              Own the Standard.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold">Fargo Reapers</h3>
            <p className="mt-3 text-zinc-400">
              The Valley Reaps All.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold">Grand Forks Huskies</h3>
            <p className="mt-3 text-zinc-400">
              Forged in Frost.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold">Williston Roughnecks</h3>
            <p className="mt-3 text-zinc-400">
              Fueled by Grit.
            </p>
          </div>

        </div>

            </section>

      {/* SPONSORSHIP CTA */}

      <section className="bg-zinc-950 px-8 py-24 text-center">
        <h2 className="mb-6 text-4xl font-bold text-yellow-500">
          Build With DBL
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
          Partner with the Dakota Basketball League through league partnerships,
          team sponsorships, and founding sponsor opportunities.
        </p>

        <button className="rounded-lg bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400">
          View Sponsorship Opportunities
        </button>
      </section>

      {/* PLAYER CTA */}

      <section className="px-8 py-24 text-center">
        <h2 className="mb-6 text-4xl font-bold text-white">
          Player Interest
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
          Competitive men’s basketball for players 18+, out of high school,
          and ready to compete across North Dakota.
        </p>

        <button className="rounded-lg bg-red-900 px-8 py-4 font-bold text-white hover:bg-red-800">
          Complete Interest Form
        </button>
      </section>

      {/* NEWS PREVIEW */}

      <section className="bg-zinc-950 px-8 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold text-yellow-500">
          Latest From DBL
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-black p-6">
            <p className="mb-3 text-sm font-bold text-red-800">
              League Update
            </p>
            <h3 className="text-xl font-bold">
              DBL prepares for inaugural launch.
            </h3>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-black p-6">
            <p className="mb-3 text-sm font-bold text-red-800">
              Sponsorship
            </p>
            <h3 className="text-xl font-bold">
              Founding sponsor opportunities now available.
            </h3>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-black p-6">
            <p className="mb-3 text-sm font-bold text-red-800">
              Player Interest
            </p>
            <h3 className="text-xl font-bold">
              Player interest survey opening soon.
            </h3>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-zinc-800 px-8 py-10 text-center text-sm text-zinc-400">
        <p className="font-bold text-yellow-500">
          Dakota Basketball League
        </p>
        <p className="mt-2">
          Built Different. Built Dakota.
        </p>
      </footer>

    </main>
  );
}