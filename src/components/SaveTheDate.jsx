export default function SaveTheDate({ lang }) {
  const translations = {
    DE: {
      title: "MERKEN SIE SICH DEN TERMIN",
      month: "AUGUST",
      kalender: "ZUM KALENDER HINZUFÜGEN",
      googleKalender: "GOOGLE KALENDER",
      appleKalender: "APPLE KALENDER",
      weekDay: "Samstag",
      day: "TAG",
      time: "ZEIT",
      place: "ORT",
    },
    EN: {
      title: "SAVE THE DATE",
      month: "AUGUST",
      kalender: "ADD TO CALENDAR",
      googleKalender: "GOOGLE CALENDAR",
      appleKalender: "APPLE CALENDAR",
      weekDay: "Saturday",
      day: "DAY",
      time: "TIME",
      place: "VANUE",
    },
    RU: {
      title: "СОХРАНИТЕ ДАТУ",
      month: "АВГУСТА",
      kalender: "ДОБАВИТЬ В КАЛЕНДАРЬ",
      googleKalender: "GOOGLE КАЛЕНДАРЬ",
      appleKalender: "APPLE КАЛЕНДАРЬ",
      weekDay: "Суббота",
      day: "ДЕНЬ",
      time: "ВРЕМЯ",
      place: "МЕСТО",
    },
  };

  const currentLang = lang?.toUpperCase() || "DE";
  const t = translations[currentLang] || translations.DE;

  return (
    <section
      id="save-the-date"
      className="relative min-h-screen flex items-center justify-center py-24 px-4 bg-[#0a0a0a]"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <p className="font-cinzel text-xs tracking-[0.4em] text-gray-500 mb-4">
            SAVE THE DATE
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-linear-to-r from-transparent to-gray-700"></span>
            <h2 className="font-cinzel text-3xl md:text-4xl tracking-[0.2em] text-white">
              {t.title}
            </h2>
            <span className="w-16 h-px bg-linear-to-l from-transparent to-gray-700"></span>
          </div>
        </div>

        <div className="mb-16">
          <div className="relative inline-block">
            {/* <span
              className="absolute -top-16 left-1/2 -translate-x-1/2 font-cinzel text-[150px] md:text-[200px] font-bold text-white whitespace-nowrap pointer-events-none select-none"
              style={{ opacity: 0.03 }}
            >
              01
            </span> */}

            <div className="relative z-10">
              <p className="font-cinzel text-6xl md:text-8xl lg:text-9xl text-white tracking-widest mb-2">
                01
              </p>
              <p className="font-cinzel text-2xl md:text-3xl tracking-[0.3em] text-red-800 mb-4">
                {t.date}
              </p>
              <p className="font-playfair text-xl md:text-2xl text-gray-400">
                2026
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="font-cinzel text-xs tracking-[0.2em] text-gray-500 mb-4">
            {t.kalender}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendar.google.com/calendar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 border border-gray-700 bg-[#111] text-white hover:border-red-900 hover:bg-red-900/10 transition-all duration-300"
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
                className="w-5 h-5 text-red-800"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>

              <span className="font-cinzel text-xs tracking-[0.2em]">
                {t.googleKalender}
              </span>
            </a>

            <button className="flex items-center justify-center gap-3 px-6 py-4 border border-gray-700 bg-[#111] text-white hover:border-red-900 hover:bg-red-900/10 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6 text-red-800"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="font-cinzel text-xs tracking-[0.2em]">
                {t.appleKalender}
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center p-6 border border-gray-800 bg-[#111] relative group hover:border-red-900/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-linear-to-b from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-cinzel text-sm tracking-[0.2em] text-gray-500 mb-2">
              {t.day}
            </p>
            <p className="font-playfair text-lg text-white">{t.weekDay}</p>
          </div>

          <div className="flex flex-col items-center p-6 border border-gray-800 bg-[#111] relative group hover:border-red-900/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-linear-to-b from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-cinzel text-sm tracking-[0.2em] text-gray-500 mb-2">
              {t.time}
            </p>
            <p className="font-playfair text-lg text-white">16:00</p>
          </div>

          <div className="flex flex-col items-center p-6 border border-gray-800 bg-[#111] relative group hover:border-red-900/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-linear-to-b from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-cinzel text-sm tracking-[0.2em] text-gray-500 mb-2">
              {t.place}
            </p>
            <p className="font-playfair text-lg text-white">
              Schloss Ehreshoven
            </p>
            <p className="font-playfair text-sm text-gray-500">Engelskirchen</p>
          </div>
        </div>
      </div>
    </section>
  );
}
