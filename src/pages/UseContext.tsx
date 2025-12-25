import { ArrowRight, Share2, Layers, Zap, Radio } from "lucide-react";

export const UseContext = () => {
  const features = [
    {
      title: "Global State",
      icon: <Share2 className="text-purple-500" />,
      desc: "Berbagi data ke banyak komponen tanpa perlu memindahkan props ke bawah.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      title: "Anti Prop-Drilling",
      icon: <Layers className="text-fuchsia-500" />,
      desc: "Menghindari pengiriman props melalui komponen tengah yang tidak membutuhkannya.",
      color: "border-fuchsia-200 bg-fuchsia-50",
    },
    {
      title: "Centralized Logic",
      icon: <Radio className="text-indigo-500" />,
      desc: "Satu sumber kebenaran (Source of Truth) untuk data seperti Tema, User Auth, atau Bahasa.",
      color: "border-indigo-200 bg-indigo-50",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 font-sans animate-in slide-in-from-right-4 duration-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-purple-900 to-indigo-950 rounded-[3rem] p-12 mb-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-fuchsia-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="px-4 py-1 bg-purple-500/30 border border-purple-400/50 rounded-full text-sm font-medium mb-6 inline-block text-purple-200">
            The Bridge Hook
          </span>
          <h1 className="text-6xl font-black mb-6 tracking-tight">
            useContext <span className="text-fuchsia-400">Hook</span>
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed mb-8">
            Bosan mengirim data (props) lewat banyak level komponen?{" "}
            <code className="bg-purple-800 text-fuchsia-300 px-2 py-1 rounded text-lg font-mono italic">
              useContext
            </code>{" "}
            memungkinkan Anda melakukan "broadcast" data dari atas langsung ke
            komponen manapun di bawahnya.
          </p>
          <button className="bg-white text-purple-900 px-8 py-3 rounded-2xl font-bold hover:bg-purple-50 transition-all flex items-center gap-2 shadow-xl active:scale-95">
            Lihat Demo Transmisi <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Concept Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-3xl border-2 ${item.color} shadow-sm hover:shadow-lg transition-all group`}
          >
            <div className="mb-4 p-3 bg-white w-fit rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Visual Mental Model */}
      <div className="bg-white border-3 border-slate-100 rounded-[2.5rem] p-10 shadow-xl overflow-hidden">
        <h2 className="text-2xl font-bold mb-10 text-gray-900 flex items-center gap-3 italic">
          <Zap className="text-purple-600" /> Alur Data: Dulu vs Sekarang
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Prop Drilling (The Bad Way) */}
          <div className="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <h4 className="font-bold text-slate-400 mb-6 text-center uppercase tracking-widest text-xs">
              Prop Drilling (Manual)
            </h4>
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 py-2 bg-slate-400 rounded-lg text-white text-xs text-center font-bold">
                Parent (Data)
              </div>
              <div className="w-1 h-4 bg-slate-300"></div>
              <div className="w-24 py-2 bg-slate-300 rounded-lg text-white text-xs text-center">
                Child A
              </div>
              <div className="w-1 h-4 bg-slate-200"></div>
              <div className="w-24 py-2 bg-purple-500 rounded-lg text-white text-xs text-center font-bold shadow-lg">
                Target Child
              </div>
            </div>
            <p className="mt-6 text-xs text-center text-slate-500 italic">
              Data harus "mampir" di Child A meskipun tidak dibutuhkan.
            </p>
          </div>

          {/* Context API (The Good Way) */}
          <div className="p-6 bg-purple-50 rounded-3xl border-2 border-purple-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200/50 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <h4 className="font-bold text-purple-900 mb-6 text-center uppercase tracking-widest text-xs">
              Context API (Broadcast)
            </h4>
            <div className="flex flex-col items-center relative">
              <div className="w-24 py-2 bg-purple-600 rounded-lg text-white text-xs text-center font-bold shadow-lg z-10">
                Provider
              </div>

              {/* Transmisi Wave */}
              <div className="h-20 w-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin-slow opacity-30"></div>
                <div className="absolute text-purple-600 font-bold text-[10px] animate-pulse">
                  TRANSMITTING...
                </div>
              </div>

              <div className="w-24 py-2 bg-purple-500 rounded-lg text-white text-xs text-center font-bold shadow-xl z-10">
                Target Child
              </div>
            </div>
            <p className="mt-6 text-xs text-center text-purple-700 font-medium">
              Data langsung "teleport" ke target tanpa perantara.
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Note */}
      <div className="mt-12 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">3 Langkah Context</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex gap-3 items-center">
                <span className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold">
                  1
                </span>
                <span>
                  <b>Create:</b> Buat context dengan{" "}
                  <code className="bg-slate-800 px-1 rounded text-purple-400">
                    createContext()
                  </code>
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold">
                  2
                </span>
                <span>
                  <b>Provide:</b> Bungkus parent dengan{" "}
                  <code className="bg-slate-800 px-1 rounded text-purple-400">
                    Provider
                  </code>
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold">
                  3
                </span>
                <span>
                  <b>Consume:</b> Ambil data dengan{" "}
                  <code className="bg-slate-800 px-1 rounded text-purple-400">
                    useContext()
                  </code>
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 font-mono text-xs shadow-inner">
            <code className="text-pink-400">const</code>{" "}
            <code className="text-blue-400">ThemeContext</code> ={" "}
            <code className="text-yellow-400">createContext</code>(); <br />
            <br />
            <code className="text-gray-500">// Di Komponen Target</code>
            <br />
            <code className="text-pink-400">const</code>{" "}
            <code className="text-white">theme</code> ={" "}
            <code className="text-yellow-400">useContext</code>(
            <code className="text-blue-400">ThemeContext</code>);
          </div>
        </div>
      </div>
    </div>
  );
};
