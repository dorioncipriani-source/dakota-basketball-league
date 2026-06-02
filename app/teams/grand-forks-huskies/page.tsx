import Image from "next/image";

export default function GrandForksHuskiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-black to-black opacity-80" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-red-700">
                DBL Franchise
              </p>

              <h1 className="text-5xl font-black text-yellow-500 md:text-7xl">
                Grand Forks Huskies
              </h1>

              <p className="mt-6 text-2xl font-bold text-white">
                Forged in Frost.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
                Built from northern toughness, the Grand Forks Huskies represent
                cold-weather grit, loyalty, and relentless defensive energy.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="https://forms.gle/FwYjN3STJHo2hUSa7" target="_blank" className="rounded-lg bg-yellow-500 px-8 py-4 font-black text-black hover:bg-yellow-400">
                  Sponsor The Huskies
                </a>

                <a href="https://forms.gle/n5BCKUD77MxgBpqH7" target="_blank" className="rounded-lg bg-red-900 px-8 py-4 font-black text-white hover:bg-red-800">
                  Player Interest
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <Image src="/images/huskies.PNG" alt="Grand Forks Huskies Logo" width={500} height={500} className="max-h-[500px] w-auto object-contain drop-shadow-[0_0_40px_rgba(22,163,74,0.4)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-green-800 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-yellow-500">Market Identity</h2>
              <p className="mt-5 leading-8 text-zinc-400">
                Grand Forks brings cold-weather toughness, loyalty, and a fanbase
                identity built around resilience.
              </p>
            </div>

            <div className="rounded-3xl border border-green-800 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-yellow-500">Brand Colors</h2>
              <p className="mt-5 leading-8 text-zinc-400">
                Green. Black. White. Clean, cold, and forged in frost.
              </p>
            </div>

            <div className="rounded-3xl border border-green-800 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-yellow-500">Future Features</h2>
              <p className="mt-5 leading-8 text-zinc-400">
                Roster announcements, uniform concepts, team sponsors, schedule releases, and franchise news coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-700">
            Franchise Partnership Opportunities
          </p>

          <h2 className="text-4xl font-black text-yellow-500 md:text-6xl">
            Sponsor The Huskies
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-300">
            Connect your business with Grand Forks’ DBL franchise through team
            partnerships, branding opportunities, and community engagement.
          </p>

          <a href="https://forms.gle/FwYjN3STJHo2hUSa7" target="_blank" className="mt-10 inline-block rounded-lg bg-yellow-500 px-9 py-4 font-black text-black hover:bg-yellow-400">
            Submit Team Sponsorship Inquiry
          </a>
        </div>
      </section>
    </main>
  );
}