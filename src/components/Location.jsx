import locationImg from "../assets/img/location.jpg";

export default function Location({ lang }) {
  const translations = {
    DE: {
      title: "VERANSTALTUNGSORT",
      street: "Ehreshoven 23 ",
      city: "51766 Engelskirchen",
      bycar: "Mit dem Auto",
      bytaxi: "Mit dem Taxi",
      getDirections: "ROUTE PLANEN",
    },
    EN: {
      title: "VANUE",
      street: "Ehreshoven 23 ",
      city: "51766 Engelskirchen",
      bycar: "By car",
      bytaxi: "By taxi",
      getDirections: "GET DIRECTIONS",
    },
    RU: {
      title: "ЛОКАЦИЯ",
      street: "Эресхофен, 23 ",
      city: "51766 Энгельскирхен",
      bycar: "На автомобиле",
      bytaxi: "На такси",
      getDirections: "ПОСТРОИТЬ МАРШРУТ",
    },
  };

  const currentLang = lang?.toUpperCase() || "DE";
  const t = translations[currentLang] || translations.DE;

  return (
    <section
      id="location"
      className="relative min-h-screen py-24 px-4 bg-[#0a0a0a]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={locationImg}
          alt="Lago Event Park"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/85" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(transparent 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#0a0a0a] to-transparent z-1" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0a0a] to-transparent z-1" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs tracking-[0.4em] text-gray-400 mb-4">
            LOCATION
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-linear-to-r from-transparent to-gray-500" />

            <h2 className="font-cinzel text-3xl md:text-4xl tracking-[0.2em] text-white">
              {t.title}
            </h2>

            <span className="w-16 h-px bg-linear-to-l from-transparent to-gray-500" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="border-l-2 border-red-900 pl-6">
            <h3 className="font-cinzel text-2xl md:text-3xl text-white tracking-[0.15em] mb-2">
              Schloss Ehreshoven
            </h3>

            <p className="font-playfair text-lg text-gray-300">
              Regierungsbezirk Köln, Engelskirchen
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-red-900/50 bg-red-900/10 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-red-800"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            <div>
              <p className="font-cinzel text-sm tracking-[0.2em] text-gray-400 mb-1">
                ADRESSE
              </p>

              <p className="font-playfair text-white">{t.street}</p>

              <p className="font-playfair text-gray-300">{t.city}</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-cinzel text-sm tracking-[0.2em] text-gray-400">
              ANFAHRT
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* BY CAR */}
              <div className="flex items-start gap-4 p-4 border border-white/10 bg-black/40 backdrop-blur-sm rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-car w-5 h-5 text-red-800 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>

                <div>
                  <p className="text-white">{t.bycar}</p>

                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>

              {/* BY TAXI */}
              <div className="flex items-start gap-4 p-4 border border-white/10 bg-black/40 backdrop-blur-sm rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-car w-5 h-5 text-red-800 mt-0.5"
                >
                  <path d="M10 2h4" />
                  <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
                  <path d="M7 14h.01" />
                  <path d="M17 14h.01" />
                  <rect width="18" height="8" x="3" y="10" rx="2" />
                  <path d="M5 18v2" />
                  <path d="M19 18v2" />
                </svg>

                <div>
                  <p className="text-white">{t.bytaxi}</p>

                  <p className="text-sm text-gray-400">Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/6MJyWrbmTMejvTha9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 border border-white/10 bg-black/40 backdrop-blur-sm text-white hover:border-red-900 hover:bg-red-900/10 transition-all duration-300 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-navigation w-4 h-4"
              aria-hidden="true"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>

            <span className="font-cinzel text-xs tracking-[0.2em]">
              {t.getDirections}
            </span>
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <span className="w-24 h-px bg-linear-to-r from-transparent to-gray-500" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-red-800"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span className="w-24 h-px bg-linear-to-l from-transparent to-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
