import Image from "next/image";

const teams = [
  {name:"Minot Outlaws", logo:"/images/outlaws.PNG"},
  {name:"Bismarck Capitalists", logo:"/images/capitalists.PNG"},
  {name:"Fargo Reapers", logo:"/images/reapers.PNG"},
  {name:"Grand Forks Huskies", logo:"/images/huskies.PNG"},
  {name:"Williston Roughnecks", logo:"/images/roughnecks.PNG"},
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {teams.map((team) => (

            <div
              key={team.name}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-8"
            >

              <div className="mb-6 flex h-56 items-center justify-center bg-black rounded-2xl">

                <Image
                  src={team.logo}
                  alt={team.name}
                  width={240}
                  height={240}
                  className="max-h-48 w-auto object-contain"
                />

              </div>

              <h2 className="text-2xl font-black text-white">
                {team.name}
              </h2>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}