import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/85 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/images/dbl-logo.png"
            alt="Dakota Basketball League logo"
            width={54}
            height={54}
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
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="/about" className="hover:text-yellow-500">About</a>
          <a href="/teams" className="hover:text-yellow-500">Teams</a>
          <a href="/news" className="hover:text-yellow-500">News</a>
          <a href="/sponsors" className="hover:text-yellow-500">Sponsors</a>
          <a href="/player-interest" className="hover:text-yellow-500">Players</a>
        </div>

        <a
          href="/sponsors"
          className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
        >
          Sponsor DBL
        </a>
      </div>
    </nav>
  );
}