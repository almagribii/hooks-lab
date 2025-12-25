import { ArrowRight, Code, Zap, RefreshCw, Trash2 } from "lucide-react"; // Opsional: jika menggunakan lucide-react

export const UseEffect = () => {
  const steps = [
    {
      title: "Setup",
      icon: <Zap className="text-yellow-500" />,
      desc: "Menjalankan kode di dalam hook setelah render selesai.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      title: "Dependencies",
      icon: <RefreshCw className="text-blue-500" />,
      desc: "Menentukan kapan effect harus dijalankan ulang (re-run).",
      color: "border-blue-200 bg-blue-50",
    },
    {
      title: "Cleanup",
      icon: <Trash2 className="text-red-500" />,
      desc: "Membersihkan resource sebelum komponen unmount.",
      color: "border-red-200 bg-red-50",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 font-sans animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-indigo-900 rounded-[3rem] p-12 mb-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-700 rounded-full blur-3xl opacity-50"></div>
        <div className="relative z-10 max-w-2xl">
          <span className="px-4 py-1 bg-indigo-500/30 border border-indigo-400 rounded-full text-sm font-medium mb-6 inline-block">
            Core Hooks Series
          </span>
          <h1 className="text-6xl font-black mb-6 tracking-tight">
            useEffect <span className="text-indigo-400">Hook</span>
          </h1>
          <p className="text-xl text-indigo-100 leading-relaxed mb-8">
            Gunakan{" "}
            <code className="bg-indigo-800 px-2 py-1 rounded">useEffect</code>{" "}
            untuk menangani "Side Effects" seperti sinkronisasi data, langganan
            event, atau manipulasi DOM manual yang tidak bisa ditangani dalam
            proses render utama.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-2xl font-bold hover:bg-indigo-50 transition-colors flex items-center gap-2">
              Mulai Belajar <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Concept Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-3xl border-2 ${step.color} shadow-sm hover:shadow-md transition-all`}
          >
            <div className="mb-4 p-3 bg-white w-fit rounded-2xl shadow-sm italic">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Visual Mental Model */}
      <div className="bg-white border-3 border-slate-100 rounded-[2.5rem] p-10 shadow-xl">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
          <Code className="text-indigo-600" /> Mental Model: Lifecycle
        </h2>

        <div className="space-y-8 relative">
          {/* Connector Line */}
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-slate-100 hidden md:block"></div>

          <div className="flex gap-6 relative">
            <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold z-10 shrink-0 shadow-lg shadow-indigo-200">
              1
            </div>
            <div>
              <h4 className="font-bold text-lg text-indigo-900">
                Render Phase
              </h4>
              <p className="text-gray-500 italic text-sm">
                React menggambar UI berdasarkan state/props saat ini.
              </p>
            </div>
          </div>

          <div className="flex gap-6 relative">
            <div className="w-12 h-12 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold z-10 shrink-0 shadow-lg shadow-violet-200">
              2
            </div>
            <div>
              <h4 className="font-bold text-lg text-violet-900">
                Commit Phase (DOM Updated)
              </h4>
              <p className="text-gray-500 italic text-sm">
                React memperbarui browser DOM agar sesuai dengan hasil render.
              </p>
            </div>
          </div>

          <div className="flex gap-6 relative">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold z-10 shrink-0 shadow-lg shadow-emerald-200">
              3
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-100 w-full">
              <h4 className="font-bold text-lg text-emerald-900">
                useEffect Runs! 🚀
              </h4>
              <p className="text-emerald-800 text-sm mt-1 mb-4">
                Setelah layar diperbarui, disinilah "side effect" Anda
                dijalankan agar tidak mengganggu kecepatan render UI.
              </p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-indigo-300">
                useEffect(() ={">"} {"{"} <br />
                &nbsp;&nbsp;
                <span className="text-emerald-400">
                  // Magic happens here!
                </span>{" "}
                <br />
                {"}"}, [dependency]);
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tip */}
      <div className="mt-12 text-center p-8 bg-indigo-50 border border-dashed border-indigo-300 rounded-3xl">
        <p className="text-indigo-900 font-medium">
          💡 <span className="font-bold">Pro Tip:</span> Pikirkan useEffect
          sebagai jembatan antara dunia React yang murni (Pure UI) dengan dunia
          luar yang tidak terduga (API, Timer, Event Listener).
        </p>
      </div>
    </div>
  );
};
