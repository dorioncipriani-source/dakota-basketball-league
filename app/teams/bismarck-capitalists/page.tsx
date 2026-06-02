import Image from "next/image";

export default function BismarckCapitalistsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900 via-black to-black opacity-80" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-red-700">
                DBL Franchise
              </p>

              <h1 className="text-5xl font-black text-yellow-500 md:text-7xl">
                Bismarck Capitalists
              </h1>

              <p className="mt-6 text-2xl font-bold text-white">
                Own the Standard.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
                Representing the state capital, the Bismarck Capitalists bring
                leadership, discipline, and championship ambition to DBL.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="https://forms.gle/FwYjN3STJHo2hUSa7" target="_blank" className="rounded-lg bg-yellow-500 px-8 py-4 font-black text-black hover:bg-yellow-400">
                  Sponsor The Capitalists
                </a>

                <a href="https://forms.gle/n5BCKUD77MxgBpqH7" target="_blank" className="rounded-lg bg-red-900 px-8 py-4 font-black text-white hover:bg-red-800">
                  Player Interest
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <Image src="/images/capitalists.PNG" alt="Bismarck Capitalists Logo" width={500} height={500} className="max-h-[500px] w-auto object-contain drop-shadow-[0_0_40px_rgba(234,179,8,0.35)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-yellow-700 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-yellow-500">Market Identity</h2>
              <p className="mt-5 leading-8 text-zinc-400">
                Built around Bismarck’s capital-city identity, the Capitalists
                represent structure, pride, and competitive leadership.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-700 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-yellow-500">Brand Colors</h2>
              <p className="mt-5 leading-8 text-zinc-400">
                Gold. Black. White. Premium, sharp, and built around standard-setting identity.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-700 bg-zinc-950 p-8">
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
            Sponsor The Capitalists
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-300">
            Connect your business with Bismarck’s DBL franchise through team
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