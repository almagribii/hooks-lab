import { ArrowRight, Brain, Calculator, Zap, Clock } from "lucide-react";
import { useRef } from "react";
import { CollaborationInvite } from "../components/CollaborationInvite";

export const UseMemo = () => {
  const detailRef = useRef<HTMLDivElement | null>(null);

  const highlights = [
    {
      title: "Expensive Calculation",
      icon: <Calculator className="text-orange-500" />,
      desc: "Menghindari kalkulasi berat yang sama berulang kali di setiap render.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      title: "Memory-Wise",
      icon: <Brain className="text-amber-500" />,
      desc: "Hanya menghitung ulang saat nilai dependensi benar-benar berubah.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      title: "Referential Integrity",
      icon: <Zap className="text-yellow-600" />,
      desc: "Menjaga agar referensi object/array tetap sama untuk optimasi render komponen anak.",
      color: "border-yellow-200 bg-yellow-50",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-sans animate-in slide-in-from-top-10 duration-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-orange-600 to-amber-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 sm:mb-10 md:mb-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-white/10 rounded-full blur-3xl opacity-30"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="px-4 py-1 bg-white/20 border border-white/30 rounded-full text-sm font-medium mb-6 inline-block">
            Optimization Hook
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">
            useMemo <span className="text-orange-200">Hook</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-50 leading-relaxed mb-6 sm:mb-8">
            Punya proses sortir data ribuan baris atau rumus matematika rumit?
            Jangan biarkan React menghitungnya terus-menerus!{" "}
            <code className="bg-orange-800/50 px-2 py-1 rounded">useMemo</code>{" "}
            menyimpan hasilnya dan hanya menghitung ulang saat diperlukan.
          </p>
          <button
            onClick={() =>
              detailRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="bg-white text-orange-700 px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-bold hover:bg-orange-50 transition-all flex items-center gap-2 shadow-xl active:scale-95 text-sm sm:text-base"
          >
            Lihat Cara Kerjanya <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 ${item.color} shadow-sm hover:translate-y--5px transition-transform`}
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

      {/* Mental Model: The Cache System */}
      <div
        ref={detailRef}
        className="bg-white border-3 border-slate-100 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden relative"
      >
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
          <div className="flex-1 space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2 sm:gap-3">
              <Clock className="text-orange-600 w-5 h-5 sm:w-6 sm:h-6" />{" "}
              Analogi: Sistem Cache
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Bayangkan Anda diminta menghitung{" "}
              <span className="font-mono bg-slate-100 px-2 rounded">
                999 x 888
              </span>
              . Anda butuh waktu untuk menjawabnya. <br />
              <br />
              Tanpa <span className="font-bold text-orange-600">useMemo</span>,
              setiap kali seseorang menyapa Anda (render ulang), Anda akan
              menghitung ulang dari nol meskipun pertanyaannya sama.
            </p>
            <div className="p-4 sm:p-6 bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-800">
              <code className="text-orange-400 font-mono text-sm block mb-2">
                // useMemo in action
              </code>
              <code className="text-white text-xs leading-loose">
                const result = useMemo(() ={">"} {"{"} <br />
                &nbsp;&nbsp;return heavyCalculation(data); <br />
                {"}"}, [data]);
              </code>
            </div>
          </div>

          {/* Comparative Flow */}
          <div className="flex-1 bg-amber-50 p-6 sm:p-8 rounded-2xl sm:rounded-2rem border-2 border-amber-100 relative">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold italic text-sm sm:text-base">
                  ?
                </div>
                <div className="flex-1 p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs shadow-sm border border-red-100">
                  Render 1: Hitung 999 x 888 ={" "}
                  <span className="font-bold">887.112</span>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold italic text-sm sm:text-base">
                  ?
                </div>
                <div className="flex-1 p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs shadow-sm border border-red-100 italic text-gray-400">
                  Render 2: Menghitung ulang... (Sia-sia)
                </div>
              </div>
              <div className="my-4 border-t border-amber-200 border-dashed"></div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold italic text-sm sm:text-base">
                  ✓
                </div>
                <div className="flex-1 p-2 sm:p-3 bg-emerald-600 text-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs shadow-md font-bold italic tracking-wide">
                  MEMO: Ambil dari Memori (0.00ms)
                </div>
              </div>
            </div>
            <p className="mt-8 text-[11px] text-amber-800 text-center font-medium uppercase tracking-tighter">
              ⚡ Meningkatkan FPS aplikasi Anda
            </p>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 md:p-8 bg-amber-100 border-2 border-amber-300 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-center gap-4 sm:gap-6">
        <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-sm shrink-0">
          <Zap className="text-amber-600 w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div>
          <h4 className="font-bold text-amber-900 mb-1 text-base sm:text-lg italic tracking-tight">
            Kapan Tidak Perlu useMemo?
          </h4>
          <p className="text-amber-800 text-sm opacity-90 leading-relaxed">
            Jika perhitungannya ringan (seperti menjumlahkan dua angka), biaya
            untuk menyimpan "memo" bisa lebih mahal daripada perhitungannya
            sendiri. Gunakan hanya untuk proses yang benar-benar memakan
            resource.
          </p>
        </div>
      </div>

      <CollaborationInvite
        hookName="useMemo"
        repoUrl="https://github.com/almagribi/Exercise"
        issueUrl="https://github.com/almagribi/Exercise/issues/new"
      />
    </div>
  );
};
