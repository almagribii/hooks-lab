import { createContext, useState, useContext } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const DarkLightMode = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`w-full min-h-screen transition-colors duration-500 ${
          isDark ? "bg-slate-950" : "bg-gray-50"
        } p-4 sm:p-6 md:p-8 font-sans`}
      >
        <div className="mb-6 sm:mb-8 flex flex-col items-center text-center">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Hook Lab: useContext
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            State Management: Berbagi data antar komponen tanpa Prop Drilling
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          <div
            className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border-3 transition-all duration-500 ${
              isDark
                ? "bg-slate-900 border-indigo-500/50"
                : "bg-white border-indigo-400"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${
                  isDark
                    ? "bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]"
                    : "bg-indigo-500"
                }`}
              ></div>
              <h2
                className={`text-3xl font-bold ${
                  isDark ? "text-indigo-300" : "text-indigo-900"
                }`}
              >
                Theme Preview
              </h2>
            </div>

            <div
              className={`rounded-2xl p-8 mb-6 min-h-300px flex flex-col items-center justify-center transition-all duration-500 border-2 ${
                isDark
                  ? "bg-slate-800 border-slate-700 text-white"
                  : "bg-indigo-50 border-indigo-100 text-indigo-900"
              }`}
            >
              <KontenUtama />
            </div>

            <div
              className={`rounded-xl p-3 sm:p-4 md:p-5 border-2 ${
                isDark
                  ? "bg-slate-800/50 border-slate-700 text-slate-300"
                  : "bg-indigo-100 border-indigo-300 text-indigo-800"
              }`}
            >
              <p className="text-xs sm:text-sm font-semibold mb-1">
                💡 Cara Kerja Context:
              </p>
              <p className="text-xs sm:text-sm leading-relaxed">
                ThemeContext.Provider membungkus seluruh aplikasi. Komponen di
                level terdalam bisa mengambil data langsung menggunakan
                useContext.
              </p>
            </div>
          </div>

          <div
            className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border-3 transition-all duration-500 ${
              isDark
                ? "bg-slate-900 border-emerald-500/50"
                : "bg-white border-emerald-400"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${
                  isDark
                    ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    : "bg-emerald-500"
                }`}
              ></div>
              <h2
                className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                  isDark ? "text-emerald-300" : "text-emerald-900"
                }`}
              >
                Component Tree
              </h2>
            </div>

            <div className="bg-slate-950 rounded-2xl p-6 mb-6 shadow-inner font-mono text-sm overflow-hidden relative">
              <div className="absolute left-12 top-20 bottom-24 w-0.5 bg-emerald-500/30"></div>

              <div className="space-y-6 relative">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                    1
                  </div>
                  <div className="text-emerald-400 font-bold">
                    {"<ThemeProvider />"}
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded italic">
                    Holding State
                  </span>
                </div>

                <div className="flex items-center gap-3 ml-8">
                  <div className="w-8 h-8 rounded bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400 font-bold italic">
                    P
                  </div>
                  <div className="text-slate-300">{"<KontenUtama />"}</div>
                  <span className="text-[10px] text-orange-400 italic">
                    No Props Passed!
                  </span>
                </div>

                <div className="flex items-center gap-3 ml-16">
                  <div className="w-8 h-8 rounded bg-pink-500/20 border border-pink-500 flex items-center justify-center text-pink-400 font-bold">
                    C
                  </div>
                  <div className="text-pink-400 font-bold animate-pulse">
                    {"<TombolAjaib />"}
                  </div>
                  <span className="text-[10px] bg-pink-500/10 text-pink-300 px-2 py-0.5 rounded italic">
                    useContext()
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`rounded-xl p-3 sm:p-4 md:p-5 border-2 ${
                isDark
                  ? "bg-slate-800/50 border-slate-700 text-slate-300"
                  : "bg-emerald-100 border-emerald-300 text-emerald-800"
              }`}
            >
              <p className="text-xs sm:text-sm font-semibold mb-1">
                🔍 Observasi:
              </p>
              <p className="text-xs sm:text-sm leading-relaxed italic">
                Perhatikan bahwa KontenUtama bersifat pasif. Ia tidak menerima
                atau mengirim data, namun anaknya bisa langsung menghirup data
                dari Context.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-6 sm:mt-8 md:mt-12 max-w-6xl mx-auto rounded-2xl sm:rounded-3xl p-1 shadow-2xl transition-all duration-500 ${
            isDark
              ? "bg-indigo-500/50"
              : "bg-linear-to-r from-indigo-500 to-emerald-500"
          }`}
        >
          <div
            className={`rounded-[22px] p-4 sm:p-6 md:p-8 lg:p-12 ${
              isDark ? "bg-slate-900" : "bg-white"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Kenapa Memakai Context API?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-wider text-sm">
                    <span>❌ Masalah: Prop Drilling</span>
                  </div>
                  <p
                    className={`${
                      isDark ? "text-slate-400" : "text-gray-600"
                    } leading-relaxed text-sm`}
                  >
                    Tanpa Context, kamu harus mengoper data dari Parent ke Child
                    secara manual meskipun komponen tengah tidak membutuhkannya.
                  </p>
                  <div
                    className={`p-4 rounded-xl font-mono text-xs ${
                      isDark
                        ? "bg-slate-800 text-slate-400"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {`<Parent theme={t}>\n  <Child theme={t}>\n    <GrandChild theme={t} />\n  </Child>\n</Parent>`}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider text-sm">
                    <span>✅ Solusi: Context API</span>
                  </div>
                  <p
                    className={`${
                      isDark ? "text-slate-400" : "text-gray-600"
                    } leading-relaxed text-sm`}
                  >
                    Context bertindak sebagai saluran data langsung
                    (Teleportasi). Komponen manapun bisa mengakses data tanpa
                    perantara.
                  </p>
                  <div
                    className={`p-4 rounded-xl font-mono text-xs ${
                      isDark
                        ? "bg-slate-800 text-emerald-400"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {`<Provider value={t}>\n  <Child>\n    <GrandChild /> // Direct access\n  </Child>\n</Provider>`}
                  </div>
                </div>
              </div>

              <hr
                className={`my-10 ${
                  isDark ? "border-slate-800" : "border-gray-100"
                }`}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div
                    className={`text-2xl mb-2 ${
                      isDark ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    🌍
                  </div>
                  <h4
                    className={`font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Global State
                  </h4>
                  <p className="text-xs text-gray-500">
                    User Auth, Tema, atau Bahasa.
                  </p>
                </div>
                <div className="p-4">
                  <div
                    className={`text-2xl mb-2 ${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    🏗️
                  </div>
                  <h4
                    className={`font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Clean Code
                  </h4>
                  <p className="text-xs text-gray-500">
                    Struktur komponen jauh lebih rapi.
                  </p>
                </div>
                <div className="p-4">
                  <div
                    className={`text-2xl mb-2 ${
                      isDark ? "text-pink-400" : "text-pink-600"
                    }`}
                  >
                    ⚡
                  </div>
                  <h4
                    className={`font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Performance
                  </h4>
                  <p className="text-xs text-gray-500">
                    Mencegah render yang tidak perlu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

function KontenUtama() {
  const { isDark } = useTheme();
  return (
    <div className="text-center flex flex-col items-center">
      <div
        className={`mb-6 p-4 rounded-lg border-2 border-dashed ${
          isDark ? "border-slate-600" : "border-indigo-200"
        }`}
      >
        <p className="text-lg italic opacity-75">
          "Saya adalah Parent Component. <br /> Saya tidak menerima props
          apapun."
        </p>
      </div>
      <TombolAjaib />
    </div>
  );
}

function TombolAjaib() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`group relative flex items-center gap-3 py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-2xl font-bold text-sm sm:text-base md:text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl ${
        isDark
          ? "bg-white text-slate-900 hover:bg-gray-100"
          : "bg-slate-900 text-white hover:bg-slate-800"
      }`}
    >
      <span>{isDark ? "Mode Terang ☀️" : "Mode Gelap 🌙"}</span>
    </button>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// === Simply Code ===
// import { createContext, useState, useContext, } from "react";

// interface ThemeContextType {
//   isDark: boolean;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const DarkLightMode = () => {
//   const [isDark, setIsDark] = useState<boolean>(false);

//   const toggleTheme = () => setIsDark((prev) => !prev);

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       <div
//         style={{
//           backgroundColor: isDark ? "#333" : "#fff",
//           color: isDark ? "#fff" : "#333",
//           height: "100vh",
//           padding: "20px",
//         }}
//       >
//         <h1>Aplikasi Mode {isDark ? "Gelap" : "Terang"}</h1>
//         <KontenUtama />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// function KontenUtama() {
//   return (
//     <div>
//       <p>Saya tidak punya props, tapi anak saya butuh data tema.</p>
//       <TombolAjaib />
//     </div>
//   );
// }

// function TombolAjaib() {
//   const context = useContext(ThemeContext);

//   if (!context) {
//     throw new Error("TombolAjaib harus berada di dalam ThemeProvider");
//   }

//   const { isDark, toggleTheme } = context;

//   return (
//     <button onClick={toggleTheme}>
//       Ubah ke Mode {isDark ? "Terang ☀️" : "Gelap 🌙"}
//     </button>
//   );
// }
