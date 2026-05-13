import React from "react";
import guestsImg from "../assets/img/guests.jpg";

function Dresscode({ lang }) {
  const translations = {
    DE: {
      title: "DRESSCODE",
      dresscodeNote: "(freiwillig, aber es würde uns sehr freuen)",
      description:
        "Wir träumen davon, dass unser Tag wie eine Szene aus unserem Lieblingsfilm aussieht. Helft uns dabei, eine harmonische Atmosphäre zu schaffen.",

      forHim: "FÜR IHN",
      forHer: "FÜR SIE",

      men: "M",
      woman: "F",
      menText: "Dunkler Anzug.",
      womenText:
        "Abendoutfit in Midi- oder Maxilänge in dunklen Tönen. Schwarz ist besonders willkommen.",

      note: "Dies ist nur eine freundliche Empfehlung und keine strenge Vorgabe — bitte wählt ein Outfit, in dem ihr euch wohl und schön fühlt.",

      redTitle: "ROT — DIE FARBE DER FREUDE",
      redSubtitle: "Red Theme for Joy",
      redDescription:
        "Idee: Fügt ein wenig Rot hinzu, um unsere Liebe mit uns zu teilen!",

      red1: "Roter Lippenstift oder rote Maniküre",
      red2: "Ein rotes Band oder Accessoire",
      red3: "Jedes kleine rote Detail, das euch Freude bereitet",
    },

    EN: {
      title: "DRESS CODE",
      dresscodeNote: "(optional, but we would love it)",
      description:
        "We dream of our day looking like a scene from our favorite movie. Help us create a harmonious atmosphere.",

      forHim: "FOR HIM",
      forHer: "FOR HER",
      men: "M",
      woman: "F",
      menText: "Dark suit.",
      womenText:
        "Evening outfit in midi or maxi length in dark tones. Black is especially welcome.",

      note: "This is only a friendly recommendation, not strict rules — please choose an outfit in which you feel comfortable and beautiful.",

      redTitle: "RED — THE COLOR OF JOY",
      redSubtitle: "Red Theme for Joy",
      redDescription: "Idea: Add a little red to share our love with us!",

      red1: "Red lipstick or manicure",
      red2: "A red ribbon or accessory",
      red3: "Any little red detail that brings you joy",
    },

    RU: {
      title: "ДРЕСС-КОД",
      dresscodeNote: "(по желанию, но нам будет очень приятно)",
      description:
        "Мы мечтаем о нашем дне как о кадре из любимого фильма. Помогите нам создать гармоничную атмосферу.",

      forHim: "ДЛЯ НЕГО",
      forHer: "ДЛЯ НЕЁ",

      men: "M",
      woman: "Ж",
      menText: "Тёмный костюм.",
      womenText:
        "Вечерний образ в тёмных оттенках, длина миди или макси. Чёрный особенно приветствуется.",

      note: "Это лишь дружеская рекомендация, а не строгие правила — пожалуйста, выбирайте наряд, в котором вам комфортно и красиво.",

      redTitle: "КРАСНЫЙ — ЦВЕТ РАДОСТИ",
      redSubtitle: "Red Theme for Joy",
      redDescription:
        "Идея: добавьте немного красного, чтобы разделить нашу любовь вместе с нами!",

      red1: "Красная помада или маникюр",
      red2: "Красная лента или аксессуар",
      red3: "Любая маленькая красная деталь, которая приносит вам радость",
    },
  };

  const currentLang = lang?.toUpperCase() || "DE";
  const t = translations[currentLang] || translations.DE;

  return (
    <section
      id="dress-code"
      className="relative min-h-screen py-24 px-4 bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={guestsImg}
          alt="Dress Code"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/85" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(transparent 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0a0a] to-transparent z-10" />

      <div className="relative z-20 max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <p className="font-cinzel text-xs tracking-[0.4em] text-gray-400 mb-4">
            DRESS CODE
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-linear-to-r from-transparent to-gray-600" />

            <h2 className="font-cinzel text-3xl md:text-4xl tracking-[0.2em] text-white">
              {t.title}
            </h2>

            <span className="w-16 h-px bg-linear-to-l from-transparent to-gray-600" />
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="font-playfair text-gray-400 italic">
            {t.dresscodeNote}
          </p>
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="font-playfair text-xl md:text-2xl text-white leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-red-900/30 rounded">
                <span className="font-cinzel text-red-400 text-lg">
                  {t.men}
                </span>
              </div>

              <p className="font-cinzel text-lg tracking-[0.2em] text-white">
                {t.forHim}
              </p>
            </div>

            <p className="font-playfair text-gray-300">{t.menText}</p>
          </div>

          <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-red-900/30 rounded">
                <span className="font-cinzel text-red-400 text-lg">
                  {t.woman}
                </span>
              </div>

              <p className="font-cinzel text-lg tracking-[0.2em] text-white">
                {t.forHer}
              </p>
            </div>

            <p className="font-playfair text-gray-300">{t.womenText}</p>
          </div>
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="font-playfair italic text-gray-400">"{t.note}"</p>
        </div>

        <div className="p-8 border border-red-900/30 bg-red-900/10 backdrop-blur-sm mb-16 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-red-500">❤</span>

            <p className="font-cinzel text-lg tracking-[0.2em] text-red-400">
              {t.redTitle}
            </p>
          </div>

          <p className="font-cinzel text-xs tracking-[0.15em] text-gray-500 mb-2 uppercase">
            {t.redSubtitle}
          </p>

          <p className="font-playfair text-gray-300 mb-6">{t.redDescription}</p>

          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-300 text-sm">
              <span className="text-red-500">❤</span>
              {t.red1}
            </li>

            <li className="flex gap-3 text-gray-300 text-sm">
              <span className="text-red-500">❤</span>
              {t.red2}
            </li>

            <li className="flex gap-3 text-gray-300 text-sm">
              <span className="text-red-500">❤</span>
              {t.red3}
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center gap-4">
            <span className="w-24 h-px bg-linear-to-r from-transparent to-gray-600" />

            <span className="text-red-500">❤</span>

            <span className="w-24 h-px bg-linear-to-l from-transparent to-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dresscode;
