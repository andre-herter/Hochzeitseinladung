import { useEffect, useState } from "react";
import heroImg from "../assets/img/hero.jpg";

export default function Hero({ lang }) {
  const [step, setStep] = useState(0);

  const translations = {
    DE: {
      title: "EINLADUNG ZUR HOCHZEIT",
      date: "01. AUGUST 2026",
      time: "Samstag · 16:00 Uhr",
      scroll: "SCROLLEN",
    },
    EN: {
      title: "WEDDING INVITATION",
      date: "AUGUST 01, 2026",
      time: "Saturday · 4:00 PM",
      scroll: "SCROLL",
    },
    RU: {
      title: "ПРИГЛАШЕНИЕ НА СВАДЬБУ",
      date: "01 АВГУСТА 2026",
      time: "Суббота · 16:00",
      scroll: "ЛИСТАЙТЕ",
    },
  };

  const currentLang = lang?.toUpperCase() || "DE";
  const t = translations[currentLang] || translations.DE;

  useEffect(() => {
    const delays = [200, 600, 1000, 1400, 1800, 2200, 2600];
    delays.forEach((delay, i) => {
      setTimeout(() => setStep(i + 1), delay);
    });
  }, []);

  const base = "transition-all duration-1000 ease-out opacity-0 translate-y-6";
  const show = "opacity-100 translate-y-0";

  const scrollToSection = () => {
    document.getElementById("save-the-date")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Angelika und Philipp"
          className="w-full h-full object-cover object-[center_10%] md:scale-100 scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(transparent 30%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-between px-4 py-12 md:py-16">
        <div className="flex-1" />

        <div className="flex flex-col items-center text-center">
          <p
            className={`${base} ${step >= 1 ? show : ""} font-cinzel text-xs md:text-sm tracking-[0.4em] text-gray-400 mb-6 md:mb-8`}
          >
            {t.title}
          </p>

          <div className="mb-6">
            <h1
              className={`${base} ${step >= 2 ? show : ""} font-cinzel text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-[0.15em] mb-2`}
            >
              ANGELIKA
            </h1>

            <div
              className={`${base} ${step >= 3 ? show : ""} flex items-center justify-center gap-4 my-4`}
            >
              <span className="w-12 md:w-20 h-px bg-linear-to-r from-transparent to-red-900" />
              <span className="font-playfair italic text-2xl md:text-4xl text-red-800">
                &
              </span>
              <span className="w-12 md:w-20 h-px bg-linear-to-l from-transparent to-red-900" />
            </div>

            <h1
              className={`${base} ${step >= 4 ? show : ""} font-cinzel text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-[0.15em]`}
            >
              PHILIPP
            </h1>
          </div>

          <div
            className={`${base} ${step >= 5 ? show : ""} h-0.5 bg-linear-to-r from-red-900 to-transparent mb-8 w-15`}
          />

          <div className={`${base} ${step >= 6 ? show : ""}`}>
            <p className="font-cinzel text-lg md:text-xl tracking-[0.3em] text-gray-300">
              {t.date}
            </p>
            <p className="font-playfair text-sm md:text-base text-gray-500 mt-2 tracking-wider">
              {t.time}
            </p>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-center">
          <button
            className={`${base} ${step >= 7 ? show : ""} flex flex-col items-center gap-2 text-gray-500 hover:text-red-800 transition-colors cursor-pointer pb-4`}
            onClick={scrollToSection}
          >
            <span className="mt-8 font-cinzel text-xs tracking-[0.3em]">
              {t.scroll}
            </span>

            <div className="translate-y-1 animate-bounce">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
}
