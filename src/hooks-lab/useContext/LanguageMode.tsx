import { createContext, useState, useContext } from "react";

type Language = "id" | "en";

interface Dictionary {
  title: string;
  subtitle: string;
  previewTitle: string;
  parentText: string;
  buttonText: string;
  obsTitle: string;
  obsText: string;
}

const translations: Record<Language, Dictionary> = {
  id: {
    title: "Hook Lab: useContext (Bahasa)",
    subtitle:
      "Multibahasa: Mengelola kamus kata tanpa oper props ke setiap teks",
    previewTitle: "Pratinjau Bahasa",
    parentText:
      "Saya komponen tengah, saya tidak tahu bahasa apa yang dipakai.",
    buttonText: "Ganti ke English",
    obsTitle: "Observasi:",
    obsText:
      "Seluruh aplikasi berubah bahasa secara instan karena satu state di Context.",
  },
  en: {
    title: "Hook Lab: useContext (Language)",
    subtitle:
      "Multi-language: Manage dictionaries without passing props to every text",
    previewTitle: "Language Preview",
    parentText:
      "I am a middle component, I don't know which language is active.",
    buttonText: "Switch to Indonesian",
    obsTitle: "Observation:",
    obsText:
      "The entire app changes language instantly via a single Context state.",
  },
};

interface LanguageContextType {
  lang: Language;
  t: Dictionary;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageMode = () => {
  const [lang, setLang] = useState<Language>("id");

  const toggleLang = () => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  };

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggleLang }}
    >
      <div className="w-full min-h-screen bg-slate-50 p-8 font-sans transition-colors duration-500">
        <div className="mb-12 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-2 text-slate-900">
            {translations[lang].title}
          </h1>
          <p className="text-lg text-slate-600">
            {translations[lang].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="rounded-3xl p-8 shadow-2xl border-3 bg-white border-blue-400">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-blue-500 shadow-lg"></div>
              <h2 className="text-3xl font-bold text-blue-900">
                {translations[lang].previewTitle}
              </h2>
            </div>

            <div className="rounded-2xl p-8 mb-6 min-h-75 flex flex-col items-center justify-center border-2 bg-blue-50 border-blue-100 text-blue-900">
              <MiddleComponent />
            </div>

            <div className="rounded-xl p-5 border-2 bg-blue-100 border-blue-300 text-blue-800">
              <p className="text-sm font-semibold mb-1">
                💡 {translations[lang].obsTitle}
              </p>
              <p className="text-sm leading-relaxed">
                {translations[lang].obsText}
              </p>
            </div>
          </div>

          <div className="rounded-3xl p-8 shadow-2xl border-3 bg-slate-900 border-amber-400">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-amber-500"></div>
              <h2 className="text-3xl font-bold text-amber-300">
                Translation Logic
              </h2>
            </div>

            <div className="bg-slate-950 rounded-2xl p-6 mb-6 shadow-inner font-mono text-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2">
                  <span>Active Key:</span>
                  <span className="text-amber-400 font-bold uppercase">
                    {lang}
                  </span>
                </div>
                <div className="text-slate-300 space-y-2">
                  <p className="text-xs text-blue-400">
                    {"// Current Dictionary Object"}
                  </p>
                  <pre className="text-[11px] leading-tight text-emerald-400">
                    {JSON.stringify(translations[lang], null, 2).substring(
                      0,
                      150
                    )}
                    ...
                  </pre>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-5 border-2 bg-slate-800 border-slate-700 text-slate-300">
              <p className="text-sm font-semibold mb-2 italic">Data Flow:</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs">
                    Context menyimpan <b>state</b> bahasa aktif.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs">
                    Context mengirim <b>objek terjemahan</b> yang sesuai.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto rounded-3xl p-1 shadow-2xl bg-linear-to-r from-blue-500 to-amber-500">
          <div className="rounded-[22px] p-8 md:p-12 bg-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center text-slate-900">
                Mengapa Ini Lebih Baik?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-bold mb-2">Single Source of Truth</h4>
                  <p className="text-sm text-slate-600">
                    Hanya ada satu tempat untuk mengganti bahasa di seluruh
                    aplikasi.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🧩</div>
                  <h4 className="font-bold mb-2">Scalability</h4>
                  <p className="text-sm text-slate-600">
                    Menambah bahasa baru (Jepang, Arab, dll) hanya perlu
                    menambah satu objek di dictionary.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="font-bold mb-2">Zero Props</h4>
                  <p className="text-sm text-slate-600">
                    Komponen seperti Navbar atau Footer tidak perlu menerima
                    prop 'lang' lagi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

function MiddleComponent() {
  const { t } = useLanguage();
  return (
    <div className="text-center flex flex-col items-center">
      <div className="mb-6 p-6 rounded-2xl border-2 border-dashed border-blue-200 bg-white/50">
        <p className="text-lg text-blue-800 italic">"{t.parentText}"</p>
      </div>
      <LanguageSwitcher />
    </div>
  );
}

function LanguageSwitcher() {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="group flex items-center justify-center gap-4 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl bg-slate-900 text-white hover:bg-slate-800"
    >
      <div className="flex gap-2">
        <span
          className={lang === "id" ? "opacity-100 scale-125" : "opacity-30"}
        >
          🇮🇩
        </span>
        <span
          className={lang === "en" ? "opacity-100 scale-125" : "opacity-30"}
        >
          🇺🇸
        </span>
      </div>
      <span>{t.buttonText}</span>
    </button>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
