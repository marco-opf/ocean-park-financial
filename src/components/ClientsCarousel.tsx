'use client';

const clients = [
  { name: "Silicon Valley Bank",              src: "https://icon.horse/icon/svb.com" },
  { name: "Science Inc.",                     src: "https://icon.horse/icon/science-inc.com" },
  { name: "Pray",                             src: "https://icon.horse/icon/pray.com" },
  { name: "Biite",                            src: "https://icon.horse/icon/biite.club" },
  { name: "E-Studio",                         src: "https://icon.horse/icon/estudio.co" },
  { name: "Suu",                              src: "https://icon.horse/icon/enjoysuu.com" },
  { name: "BeatPitch",                        src: "https://icon.horse/icon/beatpitch.ai" },
  { name: "Lunch Bunch",                      src: "https://icon.horse/icon/lunchbunch.com" },
  { name: "Lunch Bunch Community Foundation", src: "https://icon.horse/icon/lunchbunchcf.org" },
  { name: "Final Boss Sour",                  src: "https://icon.horse/icon/finalbosssour.com" },
  { name: "Fora Partners",                    src: "https://icon.horse/icon/forapartners.com" },
  { name: "Cognitik",                         src: "https://icon.horse/icon/cognitik.com" },
  { name: "Adlogica",                         src: "https://icon.horse/icon/adlogica.io" },
  { name: "QuickBooks",                       src: "https://icon.horse/icon/quickbooks.intuit.com" },
  { name: "AWS",                              src: "https://icon.horse/icon/aws.amazon.com" },
  { name: "Bill",                             src: "https://icon.horse/icon/bill.com" },
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
                height: 40,
                width: 40,
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                opacity: 0.65,
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
