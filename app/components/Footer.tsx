import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black px-6 py-12 text-center">
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

      <p className="mt-2 text-zinc-400">
        Built Different. Built Dakota.
      </p>

      <div className="mt-8 space-y-3 text-sm text-zinc-400">
        <p>
          General Contact:
          <span className="ml-2 text-yellow-500">
            DCipriani@dakotabasketballleague.org
          </span>
        </p>

        <p>
          Player Relations:
          <span className="ml-2 text-yellow-500">
            players@dakotabasketballleague.org
          </span>
        </p>

        <p>
          Sponsorships:
          <span className="ml-2 text-yellow-500">
            sponsors@dakotabasketballleague.org
          </span>
        </p>

        <div className="pt-4 flex flex-col gap-2">
  <a
    href="https://www.facebook.com/share/17Va8Vi7sr/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="font-black text-yellow-500 hover:text-yellow-400"
  >
    Follow DBL on Facebook
  </a>

  <a
    href="https://www.instagram.com/officialdakbl?igsh=MWxrYWpud25oYTlndg%3D%3D&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="font-black text-yellow-500 hover:text-yellow-400"
  >
    Follow DBL on Instagram
  </a>
</div>