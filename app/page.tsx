import Image from "next/image";

const teams = [
{
name: "Minot Outlaws",
city: "Minot",
slogan: "The Magic City's Most Wanted.",
logo: "/images/outlaws.PNG",
border: "border-red-800",
glow: "shadow-red-950/40",
},
{
name: "Bismarck Capitalists",
city: "Bismarck",
slogan: "Own the Standard.",
logo: "/images/capitalists.PNG",
border: "border-yellow-600",
glow: "shadow-yellow-950/40",
},
{
name: "Fargo Reapers",
city: "Fargo",
slogan: "The Valley Reaps All.",
logo: "/images/reapers.PNG",
border: "border-purple-700",
glow: "shadow-purple-950/40",
},
{
name: "Grand Forks Huskies",
city: "Grand Forks",
slogan: "Forged in Frost.",
logo: "/images/huskies.PNG",
border: "border-green-700",
glow: "shadow-green-950/40",
},
{
name: "Williston Roughnecks",
city: "Williston",
slogan: "Fueled by Grit.",
logo: "/images/roughnecks.PNG",
border: "border-orange-700",
glow: "shadow-orange-950/40",
},
];

const sponsorTiers = [
["Founding Sponsor", "$1,000–$5,000"],
["Team Sponsor", "$5,000–$10,000"],
["League Partner", "$10,000–$25,000"],
];

export default function Home() {
return ( <main className="min-h-screen overflow-hidden bg-black text-white"> <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/85 px-6 py-4 backdrop-blur-xl"> <div className="mx-auto flex max-w-7xl items-center justify-between"> <a href="#" className="flex items-center gap-3"> <Image
           src="/images/dbl-logo.png"
           alt="Dakota Basketball League logo"
           width={54}
           height={54}
           className="h-12 w-auto object-contain"
           priority
         /> <div> <p className="text-lg font-black leading-none text-yellow-500">
DBL </p> <p className="hidden text-xs uppercase tracking-[0.25em] text-zinc-400 sm:block">
Dakota Basketball League </p> </div> </a>

```
      <div className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wide text-zinc-300 md:flex">
        <a href="#teams" className="hover:text-yellow-500">Teams</a>
        <a href="#sponsorship" className="hover:text-yellow-500">Sponsors</a>
        <a href="#players" className="hover:text-yellow-500">Players</a>
        <a href="#news" className="hover:text-yellow-500">News</a>
        <a href="#contact" className="hover:text-yellow-500">Contact</a>
      </div>

      <a
        href="#sponsorship"
        className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
      >
        Sponsor DBL
      </a>
    </div>
  </nav>

  <section className="relative flex min-h-[92vh] items-center justify-center border-b border-white/10 px-6 py-24 text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(234,179,8,0.28),transparent_28%),radial-gradient(circle_at_20%_70%,rgba(127,29,29,0.28),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(234,179,8,0.12),transparent_28%),linear-gradient(to_bottom,#070707,#000000)]" />

    <div className="absolute inset-0 opacity-[0.08]">
      <div className="grid h-full grid-cols-5 items-center gap-10 px-8">
        {teams.map((team) => (
          <Image
            key={team.name}
            src={team.logo}
            alt={team.name}
            width={220}
            height={220}
            className="mx-auto h-32 w-auto object-contain md:h-44"
          />
        ))}
      </div>
    </div>

    <div className="relative z-10 mx-auto max-w-6xl">
      <Image
        src="/images/dbl-logo.png"
        alt="Dakota Basketball League logo"
        width={420}
        height={420}
        className="mx-auto mb-8 h-52 w-auto object-contain drop-shadow-[0_0_40px_rgba(234,179,8,0.25)] md:h-72"
        priority
      />

      <p className="mb-5 text-sm font-black uppercase tracking-[0.45em] text-red-700">
        Built Different. Built Dakota.
      </p>

      <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-black leading-none tracking-tight md:text-8xl">
        Dakota Basketball
        <span className="block text-yellow-500">League</span>
      </h1>

      <p className="mx-auto mb-10 max-w-3xl text-lg font-medium text-zinc-300 md:text-2xl">
        5 Markets. 1 League. A new competitive basketball platform built
        for North Dakota athletes, fans, sponsors, and communities.
      </p>

      <div className="mb-12 flex flex-wrap justify-center gap-4">
        <a
          href="#sponsorship"
          className="rounded-lg bg-yellow-500 px-9 py-4 font-black text-black hover:bg-yellow-400"
        >
          Become A Sponsor
        </a>

        <a
          href="#players"
          className="rounded-lg bg-red-900 px-9 py-4 font-black text-white hover:bg-red-800"
        >
          Player Interest Form
        </a>
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <p className="text-3xl font-black text-yellow-500">5</p>
          <p className="text-xs uppercase tracking-widest text-zinc-400">
            Markets
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <p className="text-3xl font-black text-yellow-500">18+</p>
          <p className="text-xs uppercase tracking-widest text-zinc-400">
            Players
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <p className="text-3xl font-black text-yellow-500">2026</p>
          <p className="text-xs uppercase tracking-widest text-zinc-400">
            Launch
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="border-b border-white/10 bg-zinc-950 px-6 py-8">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8">
      {teams.map((team) => (
        <div key={team.name} className="flex items-center gap-3 opacity-80">
          <Image
            src={team.logo}
            alt={team.name}
            width={46}
            height={46}
            className="h-10 w-auto object-contain"
          />
          <span className="text-sm font-black uppercase tracking-wider text-zinc-300">
            {team.city}
          </span>
        </div>
      ))}
    </div>
  </section>

  <section id="teams" className="px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-800">
          Five Markets. One League.
        </p>
        <h2 className="text-4xl font-black text-yellow-500 md:text-6xl">
          Featured Teams
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
          Each DBL franchise represents a distinct Dakota market identity
          built around local pride, competitive basketball, and community energy.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <article
            key={team.name}
            className={`group rounded-3xl border ${team.border} bg-zinc-950 p-7 shadow-2xl ${team.glow} transition duration-300 hover:-translate-y-2 hover:bg-zinc-900`}
          >
            <div className="mb-6 flex h-52 items-center justify-center rounded-2xl bg-black p-5">
              <Image
                src={team.logo}
                alt={`${team.name} logo`}
                width={250}
                height={250}
                className="max-h-48 w-auto object-contain transition duration-300 group-hover:scale-110"
              />
            </div>

            <p className="mb-2 text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
              {team.city}
            </p>

            <h3 className="text-2xl font-black text-white">{team.name}</h3>

            <p className="mt-3 text-zinc-300">{team.slogan}</p>
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
          league partnerships, team sponsorships, and founding sponsor opportunities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {sponsorTiers.map(([name, price]) => (
          <div
            key={name}
            className="rounded-3xl border border-white/10 bg-black p-8 transition hover:-translate-y-1 hover:border-yellow-500/50"
          >
            <p className="text-sm font-black uppercase tracking-widest text-red-800">
              {price}
            </p>
            <h3 className="mt-3 text-2xl font-black text-white">{name}</h3>
            <p className="mt-4 text-zinc-400">
              Sponsor the launch of DBL through premium visibility,
              community alignment, and regional sports branding.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#contact"
          className="inline-block rounded-lg bg-yellow-500 px-9 py-4 font-black text-black hover:bg-yellow-400"
        >
          Start Sponsor Conversation
        </a>
      </div>
    </div>
  </section>

  <section id="players" className="px-6 py-24">
    <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-red-950/50 to-black p-10 text-center md:p-16">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-700">
        Player Interest
      </p>

      <h2 className="text-4xl font-black text-white md:text-6xl">
        Think You Can Compete?
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300">
        DBL is built for competitive men’s basketball players who are 18+,
        out of high school, and ready to represent their market.
      </p>

      <a
        href="#contact"
        className="mt-8 inline-block rounded-lg bg-red-900 px-9 py-4 font-black text-white hover:bg-red-800"
      >
        Complete Interest Form
      </a>
    </div>
  </section>

  <section id="news" className="bg-zinc-950 px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-12 text-center text-4xl font-black text-yellow-500 md:text-5xl">
        Latest From DBL
      </h2>

      <div className="grid gap-7 md:grid-cols-3">
        {[
          "DBL prepares for inaugural launch.",
          "Founding sponsor opportunities now available.",
          "Player interest survey opening soon.",
        ].map((headline, index) => (
          <article
            key={headline}
            className="rounded-3xl border border-white/10 bg-black p-7 transition hover:border-yellow-500/40"
          >
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-red-800">
              {index === 0
                ? "League Update"
                : index === 1
                ? "Sponsorship"
                : "Player Interest"}
            </p>
            <h3 className="text-2xl font-black">{headline}</h3>
            <p className="mt-4 text-zinc-400">
              More details coming soon as DBL continues building toward
              launch.
            </p>
          </article>
        ))}
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
