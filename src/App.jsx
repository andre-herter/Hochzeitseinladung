import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState } from "react";
import SaveTheDate from "./components/SaveTheDate";

function App() {
  const [lang, setLang] = useState("DE");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <SaveTheDate lang={lang} />
    </>
  );
}

export default App;
