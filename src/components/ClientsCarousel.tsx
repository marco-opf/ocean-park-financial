'use client';

const clients = [
  { name: "Silicon Valley Bank",              src: "/logos/svb.png",        filter: "none",                    maxH: 72,  maxW: 320, opacity: 0.85 },
  { name: "Science Inc.",                     src: "/logos/scienceinc.png", filter: "none",                    maxH: 72,  maxW: 320, opacity: 0.90 },
  { name: "Pray",                             src: "/logos/pray.png",       filter: "brightness(0) invert(1)", maxH: 72,  maxW: 320, opacity: 0.75 },
  { name: "Biite",                            src: "/logos/biite.png",      filter: "brightness(0) invert(1)", maxH: 108, maxW: 480, opacity: 0.70 },
  { name: "Skybound",                         src: "/logos/skybound.png",   filter: "none",                    maxH: 108, maxW: 480, opacity: 0.85 },
  { name: "Suu",                              src: "/logos/suu.png",        filter: "none",                    maxH: 44,  maxW: 200, opacity: 0.85 },
  { name: "BeatPitch",                        src: "/logos/beatpitch.png",  filter: "brightness(0) invert(1)", maxH: 72,  maxW: 320, opacity: 0.70 },
  { name: "Lunch Bunch",                      src: "/logos/lunchbunch.png", filter: "none",                    maxH: 72,  maxW: 320, opacity: 0.85 },
  { name: "Lunch Bunch Community Foundation", src: "/logos/lbcf.png",       filter: "none",                    maxH: 72,  maxW: 320, opacity: 0.85 },
  { name: "Final Boss Sour",                  src: "/logos/finalboss.png",  filter: "none",                    maxH: 72,  maxW: 320, opacity: 0.85 },
  { name: "Cognitik",                         src: "/logos/cognitik.svg",   filter: "none",                    maxH: 72,  maxW: 320, opacity: 0.85 },
  { name: "Adlogica",                         src: "/logos/adlogica.png",   filter: "brightness(0) invert(1)", maxH: 108, maxW: 480, opacity: 0.70 },
  { name: "QuickBooks",                       src: "/logos/intuit.png",     filter: "none",                    maxH: 72,  maxW: 320, opacity: 0.85 },
  { name: "AWS",                              src: "/logos/aws.svg",        filter: "none",                    maxH: 56,  maxW: 120, opacity: 0.85 },
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
            className="flex-none flex items-center justify-center px-14"
            style={{ height: 96 }}
            title={client.name}
          >
            <img
              src={client.src}
              alt={client.name}
              style={{
                maxHeight: client.maxH,
                maxWidth: client.maxW,
                objectFit: "contain",
                filter: client.filter,
                opacity: client.opacity,
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
