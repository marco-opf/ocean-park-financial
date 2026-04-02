'use client';

const clients = [
  { name: "Silicon Valley Bank",              src: "https://logo.clearbit.com/svb.com" },
  { name: "Science Inc.",                     src: "https://logo.clearbit.com/science-inc.com" },
  { name: "Pray",                             src: "https://logo.clearbit.com/pray.com" },
  { name: "Biite",                            src: "https://logo.clearbit.com/biite.club" },
  { name: "E-Studio",                         src: "https://logo.clearbit.com/estudio.co" },
  { name: "Suu",                              src: "https://logo.clearbit.com/enjoysuu.com" },
  { name: "BeatPitch",                        src: "https://logo.clearbit.com/beatpitch.ai" },
  { name: "Lunch Bunch",                      src: "https://logo.clearbit.com/lunchbunch.com" },
  { name: "Lunch Bunch Community Foundation", src: "https://logo.clearbit.com/lunchbunchcf.org" },
  { name: "Final Boss Sour",                  src: "https://logo.clearbit.com/finalbosssour.com" },
  { name: "Fora Partners",                    src: "https://logo.clearbit.com/forapartners.com" },
  { name: "Cognitik",                         src: "https://logo.clearbit.com/cognitik.com" },
  { name: "Adlogica",                         src: "https://logo.clearbit.com/adlogica.io" },
  { name: "QuickBooks",                       src: "https://logo.clearbit.com/quickbooks.intuit.com" },
  { name: "AWS",                              src: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "Bill",                             src: "https://logo.clearbit.com/bill.com" },
];

export default function ClientsCarousel() {
  return (
    <div className="relative">
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
        style={{ background: "linear-gradient(to right, #0E0E0E, transparent)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
        style={{ background: "linear-gradient(to left, #0E0E0E, transparent)" }}
      />
      {/* Scrolling track — duplicated for seamless loop */}
      <div className="logo-track">
        {[...clients, ...clients].map((client, i) => (
          <div
            key={i}
            className="flex-none flex items-center justify-center px-10"
            style={{ height: 48 }}
            title={client.name}
          >
            <img
              src={client.src}
              alt={client.name}
              style={{
                maxHeight: 36,
                maxWidth: 140,
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                opacity: 0.55,
              }}
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.display = "none";
                const fallback = img.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "block";
              }}
            />
            <span
              style={{ display: "none" }}
              className="text-white/40 font-semibold text-sm tracking-wider uppercase whitespace-nowrap"
            >
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
