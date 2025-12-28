import { ArrowRight, Zap, Target, ShieldCheck, Cpu } from "lucide-react";
import { useRef } from "react";
import { CollaborationInvite } from "../components/CollaborationInvite";

export const UseCallback = () => {
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const points = [
    {
      title: "Stabilize Functions",
      icon: <ShieldCheck className="text-emerald-500" />,
      desc: "Menjaga referensi fungsi agar tetap sama di antara render, mencegah anak komponen re-render sia-sia.",
      color: "border-emerald-200 bg-emerald-50",
    },
    {
      title: "Optimasi Performa",
      icon: <Cpu className="text-teal-500" />,
      desc: "Sangat berguna saat fungsi dikirim sebagai props ke komponen yang menggunakan React.memo.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      title: "Dependency Aware",
      icon: <Target className="text-cyan-500" />,
      desc: "Fungsi hanya akan dibuat ulang jika variabel di dalam array dependensi berubah.",
      color: "border-cyan-200 bg-cyan-50",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-sans animate-in zoom-in-95 duration-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-emerald-900 to-teal-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 sm:mb-10 md:mb-12 text-white shadow-2xl">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-400 rounded-full blur-[120px] opacity-20"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="px-4 py-1 bg-emerald-500/30 border border-emerald-400/50 rounded-full text-sm font-medium mb-6 inline-block text-emerald-200">
            Performance Hook
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">
            useCallback <span className="text-teal-400">Hook</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-100 leading-relaxed mb-6 sm:mb-8">
            Apakah Anda tahu bahwa fungsi di dalam React dibuat ulang setiap
            kali render?{" "}
            <code className="bg-emerald-800 text-teal-300 px-2 py-1 rounded">
              useCallback
            </code>{" "}
            bertindak seperti "brankas" yang menyimpan fungsi Anda agar tidak
            berubah identitasnya kecuali benar-benar diperlukan.
          </p>
          <button
            onClick={() =>
              detailsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="bg-emerald-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-bold hover:bg-emerald-600 transition-all flex items-center gap-2 shadow-xl shadow-emerald-900/50 active:scale-95 text-sm sm:text-base"
          >
            Pelajari Efisiensi <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Concept Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        {points.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 ${item.color} shadow-sm hover:shadow-md transition-all`}
          >
            <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-white w-fit rounded-xl sm:rounded-2xl shadow-sm italic">
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

      {/* Mental Model Section */}
      <div
        ref={detailsRef}
        className="bg-white border-3 border-slate-100 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
          <Zap className="text-emerald-600 w-5 h-5 sm:w-6 sm:h-6" /> Kenapa
          Butuh useCallback?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-rose-50 border border-rose-100">
              <h4 className="font-bold text-rose-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
                ❌ Masalah: Identitas Baru
              </h4>
              <p className="text-xs sm:text-sm text-rose-700">
                Di JavaScript,{" "}
                <code className="font-bold">
                  {"() => {}"} === {"() => {}"}
                </code>{" "}
                adalah <b>false</b>. React menganggap fungsi tersebut "baru" di
                setiap render, memicu anak komponen (Child) ikut render ulang
                meski datanya tidak berubah.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-100">
              <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
                ✅ Solusi: Identitas Tetap
              </h4>
              <p className="text-xs sm:text-sm text-emerald-700">
                useCallback mengembalikan referensi fungsi yang{" "}
                <b>sama persis</b> di antara render. Anak komponen akan melihat
                fungsi yang sama dan tetap tenang (tidak render ulang).
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl font-mono text-[10px] sm:text-xs leading-relaxed relative">
              <div className="absolute top-4 right-6 text-emerald-500 font-bold opacity-50 uppercase tracking-widest text-[10px]">
                Syntax
              </div>
              <code className="text-pink-400">const</code>{" "}
              <code className="text-blue-400">memoizedCallback</code>{" "}
              <code className="text-white">=</code>{" "}
              <code className="text-emerald-400">useCallback</code>
              <code className="text-white">
                (() ={">"} {"{"}
              </code>{" "}
              <br />
              &nbsp;&nbsp;
              <code className="text-gray-400">doSomething(a, b);</code> <br />
              <code className="text-white">{"}"}, [a, b]);</code>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-gray-500 italic">
                  // Fungsi ini tidak akan pernah berubah
                </p>
                <p className="text-gray-500 italic">
                  // selama 'a' dan 'b' nilainya tetap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 md:p-8 bg-slate-50 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-2 border-slate-200 border-dashed text-center">
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-xs sm:text-sm md:text-base">
          💡 <span className="font-bold text-slate-900">Ingat:</span> Jangan
          gunakan useCallback untuk <i>semua</i> fungsi. Gunakan hanya jika
          fungsi tersebut dikirim ke komponen anak yang di-optimasi dengan{" "}
          <code className="font-bold text-emerald-600">React.memo</code> atau
          digunakan sebagai dependensi di{" "}
          <code className="font-bold text-emerald-600">useEffect</code>.
        </p>
        <CollaborationInvite
          hookName="useCallback"
          repoUrl="https://github.com/almagribi/Exercise"
          issueUrl="https://github.com/almagribi/Exercise/issues/new"
        />
      </div>
    </div>
  );
};
