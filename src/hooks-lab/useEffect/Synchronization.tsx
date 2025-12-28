import { useEffect, useState } from "react";
import { RefreshCw, Zap, Type, Layout, CheckCircle2 } from "lucide-react";

export const Synchronization = () => {
  const [title, setTitle] = useState("Hooks Lab");
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    setIsSyncing(true);

    // Sinkronisasi State React ke Sistem Luar (Browser Document)
    const timeout = setTimeout(() => {
      document.title = title || "Hooks Lab";
      setIsSyncing(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [title]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-sans">
      <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col items-center text-center">
        <div className="px-4 py-1.5 bg-violet-100 text-violet-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-violet-200">
          Sync Mechanism
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tighter leading-none">
          useEffect{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-fuchsia-600 italic">
            Sync
          </span>
        </h1>
        <p className="text-slate-500 font-medium max-w-lg">
          Menjaga data internal React tetap selaras dengan sistem eksternal
          secara otomatis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
        {/* LEFT: INPUT SOURCE */}
        <div className="lg:col-span-2 bg-white border-2 border-slate-100 rounded-2xl sm:rounded-[3rem] p-4 sm:p-6 md:p-10 shadow-xl shadow-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-violet-600 rounded-2xl flex items-center justify-center text-white">
                <Type className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight">
                Data Source
              </h3>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                Update Browser Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ketik judul baru..."
                className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent focus:border-violet-400 focus:bg-white rounded-2xl outline-none transition-all font-bold text-slate-700"
              />
            </div>
          </div>

          <div className="mt-10 p-3 sm:p-4 md:p-5 bg-violet-50 rounded-2xl border border-violet-100 flex items-center gap-4">
            <RefreshCw
              className={`text-violet-600 w-4 h-4 sm:w-5 sm:h-5 ${
                isSyncing ? "animate-spin" : ""
              }`}
            />
            <p className="text-xs font-bold text-violet-800 italic">
              {isSyncing
                ? "Syncing with Browser DOM..."
                : "In Sync with Document"}
            </p>
          </div>
        </div>

        {/* Midle Content */}
        <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-1 h-20 bg-linear-to-b from-violet-200 to-fuchsia-200 rounded-full animate-pulse"></div>
            <Zap className="text-fuchsia-500 fill-fuchsia-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <div className="w-1 h-20 bg-linear-to-b from-fuchsia-200 to-violet-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Right Content for simulator*/}
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl sm:rounded-[3rem] p-4 sm:p-6 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Layout className="text-white w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest italic">
                Browser Tab Simulator
              </span>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded bg-slate-600 shrink-0"></div>
                <div className="h-6 flex-1 bg-slate-700 rounded-lg flex items-center px-3">
                  <span className="text-[10px] font-mono text-violet-300 truncate tracking-tight uppercase font-bold">
                    {title || "Untitled Lab"}
                  </span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-700/50 rounded"></div>
                <div className="h-2 w-2/3 bg-slate-700/50 rounded"></div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-slate-400">
              <CheckCircle2 className="text-emerald-500 w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-[11px] font-medium leading-relaxed italic">
                "Setiap perubahan state 'title' akan disinkronkan ke{" "}
                <code className="text-violet-400">document.title</code> lewat
                Side Effect."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CODE EXPLAINER */}
      <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 text-left">
        <div className="flex-1">
          <h4 className="font-black text-slate-800 text-base sm:text-lg mb-2 italic">
            How it works?
          </h4>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Dependency array{" "}
            <code className="bg-slate-200 px-1.5 py-0.5 rounded font-bold text-slate-700">
              [title]
            </code>{" "}
            memberitahu React: "Hanya jalankan sinkronisasi jika variabel{" "}
            <b>title</b> berubah." Ini mencegah render yang tidak perlu.
          </p>
        </div>
        <div className="flex-1 bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-inner border border-slate-100 font-mono text-[10px] sm:text-[11px] text-slate-600">
          useEffect(() ={">"} {"{"} <br />
          &nbsp;&nbsp;document.title = title; <br />
          {"}"}, <span className="text-fuchsia-600 font-bold">[title]</span>);
        </div>
      </div>
    </div>
  );
};
