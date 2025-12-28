import { useState, useEffect } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive) {
      interval = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
        console.log("Timer running: interval active...");
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      console.log("Cleanup: Timer cleared! (Memory safe)");
    };
  }, [isActive]);

  const resetTimer = () => {
    setSeconds(0);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-sans">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8 flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Hook Lab: useEffect Cleanup
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Case study: Interval Timer & Memory Management
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
        {/* LEFT COLUMN: THE TIMER UI */}
        <div className="bg-linear-to-br from-rose-50 via-rose-100 to-rose-50 border-3 border-rose-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${
                isActive ? "bg-rose-500 animate-ping" : "bg-gray-400"
              }`}
            ></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-900">
              Live Timer
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-10 mb-6 shadow-lg border-2 border-rose-200">
            <p className="text-sm text-gray-500 font-semibold mb-2 text-center uppercase tracking-widest">
              Elapsed Time
            </p>
            <div className="text-6xl sm:text-7xl md:text-8xl font-black text-rose-600 mb-4 text-center tabular-nums">
              {seconds}s
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIsActive(!isActive)}
                className={`flex-1 py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base rounded-xl font-bold text-white transition-all active:scale-95 ${
                  isActive
                    ? "bg-rose-500 hover:bg-rose-600"
                    : "bg-emerald-500 hover:bg-emerald-600"
                }`}
              >
                {isActive ? "⏸ Pause Timer" : "▶ Resume Timer"}
              </button>
              <button
                onClick={resetTimer}
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-bold transition-all active:scale-95"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="bg-rose-100 rounded-xl p-3 sm:p-4 md:p-5 border-2 border-rose-300">
            <p className="text-xs sm:text-sm text-rose-900 font-semibold mb-1">
              💡 Status UI:
            </p>
            <p className="text-xs sm:text-sm text-rose-800 leading-relaxed">
              State <code className="font-bold">seconds</code> bertambah setiap
              1 detik melalui <code className="font-bold">setInterval</code> di
              dalam effect.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: CLEANUP LOGIC */}
        <div className="bg-linear-to-br from-amber-50 via-amber-100 to-amber-50 border-3 border-amber-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900">
              Cleanup Trace
            </h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 md:p-6 mb-6 shadow-lg border-2 border-amber-200 min-h-300px font-mono text-xs sm:text-sm">
            <div className="space-y-3">
              <div className="text-blue-400 border-b border-slate-700 pb-2 mb-2">
                // Lifecycle Visualization
              </div>
              <div className="text-emerald-400 flex gap-2">
                <span className="text-gray-500">1.</span>
                <span>Component Mounted</span>
              </div>
              <div className="text-emerald-400 flex gap-2">
                <span className="text-gray-500">2.</span>
                <span>Interval Started (ID: 102)</span>
              </div>

              {!isActive && (
                <div className="text-rose-400 flex gap-2 animate-pulse font-bold">
                  <span className="text-gray-500">3.</span>
                  <span>
                    RETURN {"{"} clearInterval() {"}"} EXECUTED!
                  </span>
                </div>
              )}

              <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-[10px] px-2 text-white font-bold">
                  IMPORTANT
                </div>
                <code className="text-amber-300">
                  return () ={">"} {"{"} <br />
                  &nbsp;&nbsp;clearInterval(interval); <br />
                  {"}"}
                </code>
              </div>
            </div>
          </div>

          <div className="bg-amber-100 rounded-xl p-3 sm:p-4 md:p-5 border-2 border-amber-300 space-y-3">
            <p className="text-xs sm:text-sm text-amber-900 font-semibold">
              ⚠️ Kenapa Cleanup Penting?
            </p>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              Jika komponen ini dihapus (unmount) tanpa cleanup, timer tetap
              berjalan di memori. Ini disebut <b>Memory Leak</b>.
            </p>
          </div>
        </div>
      </div>

      {/* Logic Summary */}
      <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
          <div>
            <div className="text-amber-400 text-xl sm:text-2xl md:text-3xl mb-2 font-bold">
              1
            </div>
            <p className="text-xs sm:text-sm text-gray-300 italic">
              "Effect Setup"
            </p>
            <p className="text-xs sm:text-sm font-medium mt-1">
              Memasang interval saat komponen muncul.
            </p>
          </div>
          <div>
            <div className="text-amber-400 text-xl sm:text-2xl md:text-3xl mb-2 font-bold">
              2
            </div>
            <p className="text-xs sm:text-sm text-gray-300 italic">
              "Execution"
            </p>
            <p className="text-xs sm:text-sm font-medium mt-1">
              Timer berjalan secara independent di background.
            </p>
          </div>
          <div>
            <div className="text-amber-400 text-xl sm:text-2xl md:text-3xl mb-2 font-bold">
              3
            </div>
            <p className="text-xs sm:text-sm text-gray-300 italic">"Cleanup"</p>
            <p className="text-xs sm:text-sm font-medium mt-1">
              Menghapus interval saat komponen ditutup/update.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
