import Image from "next/image";

const teams = [
  {
    name: "Minot Outlaws",
    slogan: "The Magic City's Most Wanted.",
    logo: "/images/outlaws.PNG",
    accent: "border-red-800",
  },
  {
    name: "Bismarck Capitalists",
    slogan: "Own the Standard.",
    logo: "/images/capitalists.PNG",
    accent: "border-yellow-600",
  },
  {
    name: "Fargo Reapers",
    slogan: "The Valley Reaps All.",
    logo: "/images/reapers.PNG",
    accent: "border-purple-700",
  },
  {
    name: "Grand Forks Huskies",
    slogan: "Forged in Frost.",
    logo: "/images/huskies.PNG",
    accent: "border-green-700",
  },
  {
    name: "Williston Roughnecks",
    slogan: "Fueled by Grit.",
    logo: "/images/roughnecks.PNG",
    accent: "border-orange-700",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-black px-8 py-5">
        <div className="flex items-center gap-3">
          <Image
            src="/images/dbl-logo.png"
            alt="DBL Logo"
            width={60}
            height={60}
          />
          <span className="font-bold text-yellow-500 text-xl">
            DBL
          </span>
        </div>

        <div className="hidden md:flex gap-6 text-zinc-300">
          <a href="#">Home</a>
          <a href="#teams">Teams</a>
          <a href="#sponsorship">Sponsorship</a>
          <a href="#players">Player Interest</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <div className="mb-8">
          <Image
            src="/images/dbl-logo.png"
            alt="Dakota Basketball League"
            width={300}
            height={300}
            priority
          />
        </div>

        <p className="uppercase tracking-[0.4em] text-red-700 font-bold mb-3">
          EST. 2026
        </p>

        <h1 className="text-6xl md:text-7xl font-black text-yellow-500 mb-6">
          Dakota Basketball League
        </h1>

        <h2 className="text-3xl font-bold mb-5">
          Built Different. Built Dakota.
        </h2>

        <p className="max-w-2xl text-zinc-400 text-lg mb-10">
          5 Markets. 1 League. Competitive basketball across North Dakota.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400">
            Become A Sponsor
          </button>

          <button className="bg-red-800 px-8 py-4 rounded-lg font-bold hover:bg-red-700">
            Player Interest Form
          </button>
        </div>

      </section>

      <section id="teams" className="px-8 py-24">

        <h2 className="text-center text-5xl font-black text-yellow-500 mb-14">
          Featured Teams
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

          {teams.map((team) => (
            <div
              key={team.name}
              className={`rounded-2xl border ${team.accent} bg-zinc-950 p-8`}
            >

              <div className="bg-black rounded-xl p-6 flex justify-center mb-6">
                <Image
                  src={team.logo}
                  alt={team.name}
                  width={200}
                  height={200}
                />
              </div>

              <h3 className="text-2xl font-black">
                {team.name}
              </h3>

              <p className="mt-3 text-zinc-400">
                {team.slogan}
              </p>

            </div>
          ))}

        </div>

      </section>

      <section
        id="sponsorship"
        className="bg-zinc-950 py-24 text-center px-8"
      >

        <h2 className="text-5xl font-black text-yellow-500 mb-6">
          Build With DBL
        </h2>

        <p className="max-w-2xl mx-auto text-zinc-400 mb-8">
          League partnerships, founding sponsorships,
          and team sponsorship opportunities available.
        </p>

        <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold">
          View Sponsorship Packages
        </button>

      </section>

      <footer
        id="contact"
        className="border-t border-zinc-800 text-center py-10 text-zinc-500"
      >
        <p className="font-bold text-yellow-500">
          Dakota Basketball League
        </p>

        <p className="mt-3">
          Built Different. Built Dakota.
        </p>
      </footer>

    </main>
  );
}