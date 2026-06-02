import Image from "next/image";

const teams = [
  {
    name: "Minot Outlaws",
    city: "Minot",
    slogan: "The Magic City's Most Wanted.",
    logo: "/images/outlaws.PNG",
    href: "/teams/minot-outlaws",
  },
  {
    name: "Bismarck Capitalists",
    city: "Bismarck",
    slogan: "Own the Standard.",
    logo: "/images/capitalists.PNG",
    href: "/teams/bismarck-capitalists",
  },
  {
    name: "Fargo Reapers",
    city: "Fargo",
    slogan: "The Valley Reaps All.",
    logo: "/images/reapers.PNG",
    href: "/teams/fargo-reapers",
  },
  {
    name: "Grand Forks Huskies",
    city: "Grand Forks",
    slogan: "Forged in Frost.",
    logo: "/images/huskies.PNG",
    href: "/teams/grand-forks-huskies",
  },
  {
    name: "Williston Roughnecks",
    city: "Williston",
    slogan: "Fueled by Grit.",
    logo: "/images/roughnecks.PNG",
    href: "/teams/williston-roughnecks",
  },
];

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-red-800">
          DBL Teams
        </p>

        <h1 className="text-5xl font-black text-yellow-500 md:text-7xl">
          League Teams
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-300">
          Explore each Dakota Basketball League franchise, team identity,
          sponsor opportunities, and future roster updates.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <a
              key={team.name}
              href={team.href}
              className="group rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:-translate-y-2 hover:border-yellow-500/50"
            >
              <div className="mb-6 flex h-56 items-center justify-center rounded-2xl bg-black p-5">
                <Image
                  src={team.logo}
                  alt={team.name}
                  width={240}
                  height={240}
                  className="max-h-48 w-auto object-contain transition group-hover:scale-110"
                />
              </div>

              <p className="mb-2 text-sm font-black uppercase tracking-[0.25em] text-red-800">
                {team.city}
              </p>

              <h2 className="text-2xl font-black text-white">{team.name}</h2>

              <p className="mt-3 text-zinc-400">{team.slogan}</p>

              <p className="mt-6 text-sm font-black uppercase tracking-widest text-yellow-500">
                View Franchise →
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}