import { useEffect, useState } from "react";
import { MousePointer2, ZapOff, ShieldCheck, Activity } from "lucide-react";

export const EventListener = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCoords({ x: event.clientX, y: event.clientY });
      console.log("Mouse moving...");
    };

    if (isActive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // CLEANUP: Menghapus listener saat komponen unmount atau inactive
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      console.log("Cleanup: Event listener removed!");
    };
  }, [isActive]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-sans">
      <div className="mb-6 sm:mb-8 flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">
          useEffect <span className="text-sky-500">Event Listener</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium">
          Case Study: Window Mouse Tracking & Cleanup Strategy
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 text-left">
        {/* Left Content */}
        <div className="bg-linear-to-br from-sky-50 via-white to-sky-50 border-3 border-sky-400 rounded-2xl sm:rounded-[3rem] p-4 sm:p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                isActive ? "bg-sky-500 animate-ping" : "bg-slate-300"
              }`}
            ></div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-800 tracking-tight">
              Interactive Stage
            </h2>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-12 mb-8 relative group overflow-hidden border-4 border-white shadow-inner min-h-300px flex flex-col items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px]"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex gap-8 mb-6">
                <div className="text-center">
                  <p className="text-sky-400 text-[10px] font-black uppercase tracking-widest mb-1">
                    X-Axis
                  </p>
                  <p className="text-5xl font-black text-white tabular-nums tracking-tighter">
                    {coords.x}
                  </p>
                </div>
                <div className="w-px h-16 bg-slate-700"></div>
                <div className="text-center">
                  <p className="text-sky-400 text-[10px] font-black uppercase tracking-widest mb-1">
                    Y-Axis
                  </p>
                  <p className="text-5xl font-black text-white tabular-nums tracking-tighter">
                    {coords.y}
                  </p>
                </div>
              </div>

              <div
                className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-75"
                style={{
                  transform: `translate(${coords.x / 50}px, ${
                    coords.y / 50
                  }px)`,
                }}
              >
                <MousePointer2
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`flex-1 py-2 px-4 sm:py-3 sm:px-6 md:py-4 text-xs sm:text-sm rounded-2xl font-black uppercase tracking-widest transition-all active:scale-95 ${
                isActive
                  ? "bg-rose-500 text-white shadow-lg shadow-rose-200 hover:bg-rose-600"
                  : "bg-sky-600 text-white shadow-lg shadow-sky-200 hover:bg-sky-700"
              }`}
            >
              {isActive ? "Detach Listener" : "Attach Listener"}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: TECHNICAL TRACE */}
        <div className="bg-slate-900 rounded-2xl sm:rounded-[3rem] p-4 sm:p-6 md:p-10 shadow-2xl text-left border-b-8 border-sky-500">
          <div className="flex items-center gap-3 mb-8 text-white">
            <Activity className="text-sky-400 w-5 h-5 sm:w-6 sm:h-6" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight italic">
              System Trace
            </h2>
          </div>

          <div className="space-y-6 font-mono text-[10px] sm:text-xs">
            <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
              <p className="text-sky-400 mb-2">// Hook Logic</p>
              <code className="text-slate-300 block leading-relaxed">
                <span className="text-purple-400">window.</span>
                addEventListener(
                <span className="text-amber-300">"mousemove"</span>, handle);
              </code>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-700 relative">
              <div className="absolute -top-3 left-4 px-2 bg-sky-500 text-white text-[10px] font-black rounded uppercase italic">
                Crucial Part
              </div>
              <p className="text-rose-400 mb-2 italic">
                // Mencegah Memory Leak
              </p>
              <code className="text-slate-300 block">
                <span className="text-purple-400">return</span> () ={">"} {"{"}{" "}
                <br />
                &nbsp;&nbsp;<span className="text-purple-400">window.</span>
                removeEventListener(...); <br />
                {"}"}
              </code>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-emerald-400 shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-slate-400 leading-relaxed">
                  <span className="text-white font-bold tracking-wide">
                    Safe Unmount:
                  </span>{" "}
                  Saat Anda berpindah halaman, listener ini akan otomatis mati.
                  Tanpa ini, browser akan terus melacak mouse Anda meski halaman
                  sudah berganti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-100 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-6 md:p-8 flex items-center gap-6 shadow-sm">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-sky-100 flex items-center justify-center shrink-0">
          <ZapOff className="text-sky-600 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </div>
        <div>
          <h4 className="font-black text-slate-800 uppercase tracking-widest text-[10px] sm:text-xs mb-1 underline decoration-sky-400 decoration-4">
            The Golden Rule
          </h4>
          <p className="text-slate-500 text-xs sm:text-sm italic">
            "Apa pun yang kamu pasang di dalam useEffect, pastikan kamu
            membereskannya saat selesai."
          </p>
        </div>
      </div>
    </div>
  );
};
