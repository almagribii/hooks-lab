import {
  ArrowRight,
  Eye,
  MousePointer2,
  Box,
  ZapOff,
  Fingerprint,
} from "lucide-react";
import { useRef as useReactRef } from "react";
import { CollaborationInvite } from "../components/CollaborationInvite";

export const UseRef = () => {
  const detailRef = useReactRef<HTMLDivElement | null>(null);

  const useCases = [
    {
      title: "Direct DOM Access",
      icon: <MousePointer2 className="text-amber-500" />,
      desc: "Fokus pada input, memutar video, atau mengukur dimensi elemen secara manual.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      title: "Value Persistence",
      icon: <Box className="text-orange-500" />,
      desc: "Menyimpan nilai (seperti ID timer) yang tetap ada meskipun komponen re-render.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      title: "No Re-renders",
      icon: <ZapOff className="text-yellow-600" />,
      desc: "Mengubah isi ref tidak akan memicu React untuk menggambar ulang UI.",
      color: "border-yellow-200 bg-yellow-50",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-sans animate-in slide-in-from-right-10 duration-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-amber-600 to-orange-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 sm:mb-10 md:mb-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="px-4 py-1 bg-amber-500/30 border border-amber-300/50 rounded-full text-sm font-medium mb-6 inline-block text-amber-100">
            The Escape Hatch Hook
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight text-white">
            useRef{" "}
            <span className="text-amber-200 font-serif italic">Hook</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-50 leading-relaxed mb-6 sm:mb-8">
            Butuh menyentuh elemen HTML secara langsung atau menyimpan data
            tanpa ingin UI berkedip (re-render)?{" "}
            <code className="bg-amber-800/40 px-2 py-1 rounded text-yellow-200 font-mono">
              useRef
            </code>{" "}
            adalah jalan pintas rahasia Anda ke dunia luar DOM.
          </p>
          <button
            onClick={() =>
              detailRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="bg-white text-orange-700 px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-bold hover:bg-amber-50 transition-all flex items-center gap-2 shadow-xl active:scale-95 text-sm sm:text-base"
          >
            Sentuh DOM Sekarang <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Grid Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        {useCases.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 ${item.color} shadow-sm hover:shadow-md transition-all group`}
          >
            <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-white w-fit rounded-xl sm:rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-amber-900 mb-2">
              {item.title}
            </h3>
            <p className="text-amber-800/80 text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* The Mental Model: Invisible Box */}
      <div
        ref={detailRef}
        className="bg-white border-3 border-slate-100 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="flex-1 space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 sm:gap-3 italic">
              <Fingerprint className="text-orange-600 w-5 h-5 sm:w-6 sm:h-6" />{" "}
              Analogi: Kotak Ajaib
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Bayangkan{" "}
              <span className="font-bold text-orange-600">useState</span> adalah
              papan tulis publik. Setiap kali Anda menulis, semua orang harus
              menoleh melihatnya (re-render). <br />
              <br />
              Sedangkan <span className="font-bold text-amber-600">
                useRef
              </span>{" "}
              adalah kantong saku Anda. Anda bisa menaruh catatan di sana,
              mengubahnya sesuka hati, dan tidak ada seorang pun yang akan
              menyadarinya sampai Anda mengeluarkannya.
            </p>

            <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-slate-700">
                <Eye
                  size={18}
                  className="text-amber-500 w-4 h-4 sm:w-5 sm:h-5"
                />{" "}
                Penggunaan Paling Umum:
              </div>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1 sm:space-y-2 list-disc ml-4 sm:ml-5">
                <li>
                  Memberi fokus pada{" "}
                  <code className="bg-white px-1 border rounded italic">
                    input
                  </code>{" "}
                  otomatis.
                </li>
                <li>
                  Menyimpan nilai{" "}
                  <code className="bg-white px-1 border rounded italic">
                    prevProps
                  </code>
                  .
                </li>
                <li>Integrasi dengan library luar (D3.js, Google Maps).</li>
              </ul>
            </div>
          </div>

          <div className="flex-1 w-full bg-slate-900 rounded-2xl sm:rounded-2rem p-6 sm:p-8 shadow-2xl font-mono text-xs sm:text-sm border-4 border-slate-800">
            <div className="flex gap-2 mb-6 border-b border-slate-700 pb-4">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <code className="text-pink-400">const</code>{" "}
            <code className="text-blue-400">myRef</code>{" "}
            <code className="text-white">=</code>{" "}
            <code className="text-amber-400">useRef</code>
            <code className="text-white">(initialValue);</code>
            <br />
            <br />
            <code className="text-gray-500">
              // Akses nilainya lewat property .current
            </code>
            <br />
            <code className="text-white">console.</code>
            <code className="text-yellow-300">log</code>
            <code className="text-white">(myRef.</code>
            <code className="text-cyan-400 font-bold underline">current</code>
            <code className="text-white">);</code>
            <div className="mt-12 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <p className="text-amber-500 text-xs">
                ⚠️ Mengubah <span className="font-bold">myRef.current</span>{" "}
                TIDAK akan menyebabkan komponen render ulang!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Box */}
      <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-linear-to-r from-slate-800 to-slate-900 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl text-white">
          <h4 className="font-bold mb-2 text-rose-400 italic text-sm sm:text-base">
            useState
          </h4>
          <p className="text-xs sm:text-sm text-slate-400">
            Untuk data yang harus terlihat perubahannya di layar (UI Sync).
          </p>
        </div>
        <div className="bg-linear-to-r from-amber-500 to-orange-600 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl text-white">
          <h4 className="font-bold mb-2 text-yellow-200 italic text-sm sm:text-base">
            useRef
          </h4>
          <p className="text-xs sm:text-sm text-white/80">
            Untuk data atau elemen yang ingin Anda kendalikan "di balik layar".
          </p>
        </div>
      </div>

      <CollaborationInvite
        hookName="useRef"
        repoUrl="https://github.com/almagribi/Exercise"
        issueUrl="https://github.com/almagribi/Exercise/issues/new"
      />
    </div>
  );
};
