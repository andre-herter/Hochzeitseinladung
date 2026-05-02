export default function Navbar({ lang, setLang }) {
  return (
    <div className="fixed top-4 right-4 z-50 opacity-[0.85]">
      <div className="flex gap-1 p-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
        <button
          onClick={() => setLang("RU")}
          className={`font-cinzel text-xs tracking-wider px-3 py-1.5 rounded-full transition-all duration-300
        ${lang === "RU" ? "bg-red-900/80 text-white" : "text-gray-400 hover:text-white"}`}
        >
          RU
        </button>

        <button
          onClick={() => setLang("DE")}
          className={`font-cinzel text-xs tracking-wider px-3 py-1.5 rounded-full transition-all duration-300
        ${lang === "DE" ? "bg-red-900/80 text-white" : "text-gray-400 hover:text-white"}`}
        >
          DE
        </button>

        <button
          onClick={() => setLang("EN")}
          className={`font-cinzel text-xs tracking-wider px-3 py-1.5 rounded-full transition-all duration-300
        ${lang === "EN" ? "bg-red-900/80 text-white" : "text-gray-400 hover:text-white"}`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
