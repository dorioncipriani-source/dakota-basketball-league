import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-red-800">
          About DBL
        </p>

        <h1 className="text-5xl font-black text-yellow-500 md:text-7xl">
          About The Dakota Basketball League
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-300">
          Dakota Basketball League is a developing competitive men&apos;s
          basketball league centered around North Dakota markets, regional
          pride, community engagement, and high-level basketball opportunity.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <h2 className="text-2xl font-black text-yellow-500">
              Competition
            </h2>

            <p className="mt-4 text-zinc-400">
              Building a strong competitive platform for talented basketball
              players across Dakota markets.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <h2 className="text-2xl font-black text-yellow-500">
              Community
            </h2>

            <p className="mt-4 text-zinc-400">
              Creating local sports identity, fan connection, and community
              engagement throughout North Dakota.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <h2 className="text-2xl font-black text-yellow-500">
              Opportunity
            </h2>

            <p className="mt-4 text-zinc-400">
              Providing new exposure, branding, sponsorship, and basketball
              development opportunities.
            </p>
          </div>
        </div>

        <section className="mt-24 rounded-3xl border border-yellow-500/30 bg-zinc-950 p-8 md:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center">
              <Image
                src="/images/headshot-dbl-logo.png"
                alt="Dorion Cipriani - Founder and Commissioner"
                width={600}
                height={800}
                className="rounded-3xl border border-yellow-500/30 object-cover shadow-xl"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-800">
                Meet The Founder
              </p>

              <h2 className="text-4xl font-black text-yellow-500">
                Dorion Cipriani
              </h2>

              <p className="mt-6 text-lg leading-9 text-zinc-300">
                Dorion Cipriani founded Dakota Basketball League to create a
                premier basketball opportunity for athletes across North Dakota
                while building a league communities can rally behind.
              </p>

              <p className="mt-6 text-lg leading-9 text-zinc-300">
                As Commissioner, Dorion oversees league operations,
                partnerships, player recruitment, and the long-term vision of
                growing basketball across the Dakotas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}