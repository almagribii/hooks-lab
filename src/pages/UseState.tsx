import { ArrowRight, Database, RefreshCw, Zap, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const UseState = () => {
  const navigate = useNavigate();

  const concepts = [
    {
      title: "Komponen Memori",
      icon: <Database className="text-cyan-500" />,
      desc: "Variabel biasa akan hilang saat render ulang. useState 'mengingat' nilai tersebut.",
      color: "border-cyan-200 bg-cyan-50",
    },
    {
      title: "Trigger Render",
      icon: <Zap className="text-amber-500" />,
      desc: "Setiap kali fungsi pemberi nilai dipanggil, React otomatis menggambar ulang UI.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      title: "Reactive Data",
      icon: <RefreshCw className="text-blue-500" />,
      desc: "Data dan tampilan selalu sinkron tanpa perlu manipulasi DOM manual.",
      color: "border-blue-200 bg-blue-50",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-sans animate-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 sm:mb-10 md:mb-12 text-white shadow-2xl">
        <div className="absolute -bottom-10 -left-10 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-cyan-500 rounded-full blur-[80px] sm:blur-[100px] opacity-30"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="px-3 sm:px-4 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 inline-block text-cyan-300">
            The Fundamental Hook
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">
            useState <span className="text-cyan-400">Hook</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8">
            Pikirkan{" "}
            <code className="bg-slate-800 text-cyan-400 px-2 py-1 rounded text-xs sm:text-sm">
              useState
            </code>{" "}
            sebagai keadaan (state) internal komponen Anda. Ini memungkinkan
            komponen untuk "mengingat" informasi dan memperbarui tampilannya
            secara instan saat informasi itu berubah.
          </p>
          <button
            onClick={() => navigate("/usestate/counter")}
            className="bg-cyan-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-cyan-600 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-95"
          >
            Eksplorasi State <ArrowRight size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Concept Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        {concepts.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 ${item.color} shadow-sm transition-all hover:-translate-y-1`}
          >
            <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-white w-fit rounded-xl sm:rounded-2xl shadow-sm">
              {item.icon}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Anatomy of useState */}
      <div className="bg-white border-3 border-slate-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden relative">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 flex items-center gap-2 sm:gap-3">
              <Layers
                className="text-cyan-600 sm:w-6 sm:h-6"
                size={20}
               
              />{" "}
              Anatomi useState
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Ketika Anda memanggil useState, Anda mendapatkan dua hal dalam
              sebuah array:
              <span className="font-bold text-slate-800">
                {" "}
                Nilai saat ini
              </span>{" "}
              dan
              <span className="font-bold text-slate-800">
                {" "}
                Fungsi untuk mengubahnya
              </span>
              .
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 text-sm sm:text-base font-bold">
                  1
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium pt-1 italic">
                  "const [data, setData] = useState(initialValue)"
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl relative">
              {/* Decorative dots */}
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
                <code className="text-blue-400">const</code>{" "}
                <code className="text-white">[count, setCount]</code>{" "}
                <code className="text-blue-400">=</code>{" "}
                <code className="text-yellow-400">useState</code>
                <code className="text-white">(0);</code>
                <br />
                <br />
                <code className="text-gray-500">// Penjelasan:</code>
                <br />
                <code className="text-cyan-300">count</code>{" "}
                <code className="text-gray-400">→ variabel penampung</code>
                <br />
                <code className="text-cyan-300">setCount</code>{" "}
                <code className="text-gray-400">→ fungsi pengubah</code>
                <br />
                <code className="text-cyan-300">0</code>{" "}
                <code className="text-gray-400">→ nilai awal</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Mental Model Image Tag */}

      {/* Comparison Section */}
      <div className="mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 md:p-10 bg-linear-to-br from-cyan-600 to-blue-700 rounded-2xl sm:rounded-3xl text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            Mengapa tidak pakai variabel biasa?
          </h2>
          <p className="text-cyan-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 italic">
            "Variabel biasa (let/const) akan ter-reset menjadi nilai awalnya
            setiap kali komponen render ulang. useState menjaga data tetap ada
            selama komponen belum ditutup."
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20">
              <span className="block text-lg sm:text-xl md:text-2xl mb-1 text-cyan-300 font-bold">
                Variabel
              </span>
              <span className="text-xs sm:text-sm italic text-red-100">
                Lupa setelah render
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20">
              <span className="block text-lg sm:text-xl md:text-2xl mb-1 text-cyan-300 font-bold">
                useState
              </span>
              <span className="text-xs sm:text-sm italic text-emerald-100">
                Ingat selamanya
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
