const tiers = [
  {
    name: "MVP Founding Partner",
    price: "$50,000+",
    items: [
      "Official Partner designation",
      "Exclusive industry/category protection",
      "Logo on league website homepage",
      "Logo on league-wide marketing materials",
      "Premium social media recognition",
      "Showcase Event presenting rights",
      "Championship Event sponsorship rights",
      "Premium venue signage",
      "VIP hospitality package",
      "Speaking opportunities",
      "First-right renewal opportunities",
    ],
  },
  {
    name: "Championship Partner",
    price: "$25,000–$49,999",
    items: [
      "Major logo placement",
      "Website sponsorship page",
      "Social media recognition",
      "Event signage",
      "Showcase Event branding",
      "VIP tickets and hospitality",
      "Community event participation",
    ],
  },
  {
    name: "All-Star Partner",
    price: "$10,000–$24,999",
    items: [
      "Website recognition",
      "Social media features",
      "Event signage",
      "Sponsor spotlight posts",
      "VIP event access",
    ],
  },
  {
    name: "Community Partner",
    price: "$5,000–$9,999",
    items: [
      "Website listing",
      "Social recognition",
      "Event signage",
      "Networking invitations",
    ],
  },
  {
    name: "Founding Supporter",
    price: "$1,000–$4,999",
    items: [
      "Founding Sponsor designation",
      "Website recognition",
      "Social media acknowledgment",
    ],
  },
];

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-red-800">
          Sponsorship
        </p>

        <h1 className="text-5xl font-black text-yellow-500 md:text-7xl">
          Sponsor DBL
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-300">
          Partner with a new regional sports platform built for North Dakota
          communities, athletes, fans, and businesses.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-yellow-500/50"
            >
              <p className="text-sm font-black uppercase tracking-widest text-red-800">
                {tier.price}
              </p>

              <h2 className="mt-3 text-2xl font-black text-white">
                {tier.name}
              </h2>

              <ul className="mt-6 space-y-3 text-zinc-400">
                {tier.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mt-20 rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-zinc-950 to-black p-10 md:p-14">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-800">
            Why Partner With DBL?
          </p>

          <h2 className="text-4xl font-black text-yellow-500">
            Built for Local Business Visibility
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "Regional Exposure",
                "Reach fans and communities across multiple North Dakota markets.",
              ],
              [
                "Local Alignment",
                "Connect your business with team identity, hometown pride, and community energy.",
              ],
              [
                "Growth Opportunity",
                "Get involved early as DBL builds toward launch and long-term expansion.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black p-6"
              >
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <a
          href="https://forms.gle/FwYjN3STJHo2hUSa7"
          target="_blank"
          className="mt-12 inline-block rounded-lg bg-yellow-500 px-9 py-4 font-black text-black hover:bg-yellow-400"
        >
          Submit Sponsor Inquiry
        </a>
      </div>
    </main>
  );
}