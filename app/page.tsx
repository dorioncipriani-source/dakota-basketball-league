import Image from "next/image";
const teams = [
  {
    name: "Minot Outlaws",
    city: "Minot",
    slogan: "The Magic City's Most Wanted.",
    logo: "/images/outlaws.PNG",
    accent: "from-red-950 to-black",
    border: "border-red-800",
  },
  {
    name: "Bismarck Capitalists",
    city: "Bismarck",
    slogan: "Own the Standard.",
    logo: "/images/capitalists.PNG",
    accent: "from-yellow-900 to-black",
    border: "border-yellow-600",
  },
  {
    name: "Fargo Reapers",
    city: "Fargo",
    slogan: "The Valley Reaps All.",
    logo: "/images/reapers.PNG",
    accent: "from-purple-950 to-black",
    border: "border-purple-700",
  },
  {
    name: "Grand Forks Huskies",
    city: "Grand Forks",
    slogan: "Forged in Frost.",
    logo: "/images/huskies.PNG",
    accent: "from-green-950 to-black",
    border: "border-green-700",
  },
  {
    name: "Williston Roughnecks",
    city: "Williston",
    slogan: "Fueled by Grit.",
    logo: "/images/roughnecks.PNG",
    accent: "from-orange-950 to-black",
    border: "border-orange-700",
  },
];

const sponsorTiers = [
  {
    name: "Founding Sponsor",
    price: "$1,000–$5,000",
    text: "Early-stage brand support for the launch and establishment of DBL.",
  },
  {
    name: "Team Sponsor",
    price: "$5,000–$10,000",
    text: "Align directly with a specific DBL franchise and local fanbase.",
  },
  {
    name: "League Partner",
    price: "$10,000–$25,000",
    text: "Broader exposure across the full DBL ecosystem and league platform.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/85 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/dbl-logo.png"
              alt="Dakota Basketball League logo"
              width={58}
              height={58}
              className="h-12 w-auto object-contain"
              priority
            />
            <div>
              <p className="text-lg font-black leading-none text-yellow-500">
                DBL
              </p>
              <p className="hidden text-xs uppercase tracking-[0.25em] text-zinc-400 sm:block">
                Dakota Basketball League
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wide text-zinc-300 md:flex">
            <a href="#teams" className="hover:text-yellow-500">
              Teams
            </a>
            <a href="#sponsorship" className="hover:text-yellow-500">
              Sponsors
            </a>
            <a href="#players" className="hover:text-yellow-500">
              Players
            </a>
            <a href="#news" className="hover:text-yellow-500">
              News
            </a>
            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>
          </div>

          <a
            href="#sponsorship"
            className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
          >
            Sponsor DBL
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(234,179,8,0.22),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(127,29,29,0.28),transparent_32%),linear-gradient(to_bottom,#050505,#000000)]" />

        <div className="absolute inset-x-0 top-16 flex justify-center opacity-10">
          <div className="grid grid-cols-5 gap-6">
            {teams.map((team) => (
              <Image
                key={team.name}
                src={team.logo}
                alt={team.name}
                width={150}
                height={150}
                className="h-28 w-28 object-contain"
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-red-800">
              Built Different. Built Dakota.
            </p>

            <h1 className="mb-6 max-w-4xl text-5xl font-black leading-none tracking-tight text-white md:text-7xl">
              Dakota Basketball
              <span className="block text-yellow-500">League</span>
            </h1>

            <p className="mb-8 max-w-2xl text-xl font-medium text-zinc-300">
              5 Markets. 1 League. A new competitive basketball platform built
              for North Dakota athletes, fans, sponsors, and communities.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="#sponsorship"
                className="rounded-lg bg-yellow-500 px-8 py-4 font-black text-black hover:bg-yellow-400"
              >
                Become A Sponsor
              </a>

              <a
                href="#players"
                className="rounded-lg bg-red-900 px-8 py-4 font-black text-white hover:bg-red-800"
              >
                Player Interest Form
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-4">
              <div className="border-l-4 border-yellow-500 bg-white/5 p-4">
                <p className="text-3xl font-black text-white">5</p>
                <p className="text-xs uppercase tracking-widest text-zinc-400">
                  Markets
                </p>
              </div>

              <div className="border-l-4 border-red-800 bg-white/5 p-4">
                <p className="text-3xl font-black text-white">18+</p>
                <p className="text-xs uppercase tracking-widest text-zinc-400">
                  Player Pool
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 bg-white/5 p-4">
                <p className="text-3xl font-black text-white">2026</p>
                <p className="text-xs uppercase tracking-widest text-zinc-400">
                  Launch
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-yellow-500/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-yellow-500/30 bg-zinc-950/80 p-8 shadow-2xl">
              <Image
                src="/images/dbl-logo.png"
                alt="Dakota Basketball League logo"
                width={420}
                height={420}
                className="h-auto w-full max-w-sm object-contain"
                priority
              />

              <div className="mt-6 rounded-2xl border border-white/10 bg-black p-5 text-center">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-red-800">
                  Official League Platform
                </p>
                <p className="mt-2 text-2xl font-black text-yellow-500">
                  Built Dakota
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="teams" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-800">
                Five Markets. One League.
              </p>
              <h2 className="text-4xl font-black text-yellow-500 md:text-6xl">
                Featured Teams
              </h2>
            </div>

            <p className="max-w-xl text-zinc-400">
              Each DBL franchise represents a distinct Dakota market identity,
              built around local pride, competitive basketball, and community
              energy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => (
              <article
                key={team.name}
                className={`group overflow-hidden rounded-3xl border ${team.border} bg-gradient-to-br ${team.accent} p-1 transition duration-300 hover:-translate-y-2`}
              >
                <div className="h-full rounded-[1.35rem] bg-black/80 p-7">
                  <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-white/5 p-5">
                    <Image
                      src={team.logo}
                      alt={`${team.name} logo`}
                      width={240}
                      height={240}
                      className="max-h-44 w-auto object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <p className="mb-2 text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                    {team.city}
                  </p>

                  <h3 className="text-2xl font-black text-white">
                    {team.name}
                  </h3>

                  <p className="mt-3 text-zinc-300">{team.slogan}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sponsorship"
        className="border-y border-white/10 bg-zinc-950 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-800">
              Sponsorship Opportunities
            </p>

            <h2 className="text-4xl font-black text-yellow-500 md:text-6xl">
              Build With DBL
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Connect your brand to a new regional sports property through
              league partnerships, team sponsorships, and founding sponsor
              opportunities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-3xl border border-white/10 bg-black p-7"
              >
                <p className="text-sm font-black uppercase tracking-widest text-red-800">
                  {tier.price}
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">
                  {tier.name}
                </h3>
                <p className="mt-4 text-zinc-400">{tier.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-yellow-500 px-8 py-4 font-black text-black hover:bg-yellow-400"
            >
              Start Sponsor Conversation
            </a>
          </div>
        </div>
      </section>

      <section id="players" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-red-950/40 to-black p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-700">
              Player Interest
            </p>

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Think You Can Compete?
            </h2>
          </div>

          <div>
            <p className="mb-6 text-lg text-zinc-300">
              DBL is built for competitive men’s basketball players who are 18+,
              out of high school, and ready to represent their market.
            </p>

            <a
              href="#contact"
              className="inline-block rounded-lg bg-red-900 px-8 py-4 font-black text-white hover:bg-red-800"
            >
              Complete Interest Form
            </a>
          </div>
        </div>
      </section>

      <section id="news" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-black text-yellow-500 md:text-5xl">
            Latest From DBL
          </h2>

          <div className="grid gap-7 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-black p-7">
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-red-800">
                League Update
              </p>
              <h3 className="text-2xl font-black">
                DBL prepares for inaugural launch.
              </h3>
              <p className="mt-4 text-zinc-400">
                The league is building its foundation across five North Dakota
                markets.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-black p-7">
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-red-800">
                Sponsorship
              </p>
              <h3 className="text-2xl font-black">
                Founding sponsor opportunities now available.
              </h3>
              <p className="mt-4 text-zinc-400">
                Businesses can align with DBL at the league or team level.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-black p-7">
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-red-800">
                Player Interest
              </p>
              <h3 className="text-2xl font-black">
                Player interest survey opening soon.
              </h3>
              <p className="mt-4 text-zinc-400">
                Competitive players across the region will have a pathway to
                join the DBL launch.
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/10 bg-black px-6 py-12 text-center"
      >
        <Image
          src="/images/dbl-logo.png"
          alt="Dakota Basketball League logo"
          width={110}
          height={110}
          className="mx-auto mb-5 h-24 w-auto object-contain"
        />

        <p className="text-xl font-black text-yellow-500">
          Dakota Basketball League
        </p>

        <p className="mt-2 text-zinc-400">Built Different. Built Dakota.</p>

        <p className="mt-6 text-sm text-zinc-500">
          Sponsor inquiries • Player interest • Community partnerships
        </p>
      </footer>
    </main>
  );
}