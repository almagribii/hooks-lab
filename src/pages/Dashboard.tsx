import {
  Layers,
  Zap,
  Share2,
  Settings,
  Cpu,
  Fingerprint,
  ArrowRight,
  
  Terminal,
  CpuIcon,
  Search,
  ChevronRight,
  Monitor,
} from "lucide-react";

export const Dashboard = () => {
  const myHooks = [
    {
      title: "useState",
      cat: "State",
      icon: <Layers />,
      color: "bg-cyan-500",
      shadow: "shadow-cyan-200/50",
    },
    {
      title: "useEffect",
      cat: "Lifecycle",
      icon: <Zap />,
      color: "bg-indigo-500",
      shadow: "shadow-indigo-200/50",
    },
    {
      title: "useContext",
      cat: "Auth/Theme",
      icon: <Share2 />,
      color: "bg-purple-500",
      shadow: "shadow-purple-200/50",
    },
    {
      title: "useReducer",
      cat: "Complex",
      icon: <Settings />,
      color: "bg-slate-800",
      shadow: "shadow-slate-200/50",
    },
    {
      title: "useMemo",
      cat: "Performance",
      icon: <CpuIcon />,
      color: "bg-emerald-500",
      shadow: "shadow-emerald-200/50",
    },
    {
      title: "useRef",
      cat: "DOM/Persist",
      icon: <Fingerprint />,
      color: "bg-amber-500",
      shadow: "shadow-amber-200/50",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
      <section className="relative px-6 pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                Personal Dev Environment
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              My{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                Hooks
              </span>
              <br />
              Laboratory<span className="text-indigo-600">.</span>
            </h1>

            <p className="max-w-lg text-slate-500 text-lg md:text-xl leading-relaxed mb-10 font-medium">
              Tempat saya mendokumentasikan eksplorasi, membedah logika, dan
              menguji performa React Hooks dalam satu lingkungan riset pribadi.
            </p>

            <div className="flex items-center gap-4">
              <button className="h-16 px-10 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 active:scale-95">
                Mulai Eksplorasi <ArrowRight size={20} />
              </button>
              <div className="h-16 w-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all cursor-pointer">
                <Search size={24} />
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-xl">
            <div className="relative bg-slate-900 rounded-[3rem] p-4 transform rotate-2">
              <div className="bg-slate-800 rounded-[2.2rem] p-6 text-indigo-300 font-mono text-xs overflow-hidden leading-relaxed">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                </div>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">Laboratory</span> = () =&gt;{" "}
                  {"{"}
                </p>
                <p className="pl-4 italic text-slate-500">
                  // Eksperimen sedang berjalan...
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">const</span> [knowledge,
                  grow] = <span className="text-yellow-400">useState</span>(0);
                </p>
                <p className="pl-4">
                  <span className="text-yellow-400">useEffect</span>(() =&gt;{" "}
                  {"{"}
                </p>
                <p className="pl-8 text-emerald-400">
                  document.title = "Mastering Hooks";
                </p>
                <p className="pl-4">{"}"}, [knowledge]);</p>
                <p>{"}"}</p>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 animate-bounce duration-3000ms">
              <Terminal size={32} className="text-indigo-600" />
            </div>
            <div className="absolute -top-6 -right-6 bg-indigo-600 p-6 rounded-2rem shadow-2xl text-white">
              <Cpu size={32} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-indigo-600 font-black text-sm uppercase tracking-widest mb-2">
              <Monitor size={16} />
              <span>The Collection</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight">
              Eksplorasi Per Case
            </h2>
          </div>
          <div className="h-px flex-1 bg-slate-100 mx-8 hidden md:block"></div>
          <p className="text-slate-400 font-bold text-sm italic">
            Project: Version 2.0
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myHooks.map((hook, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[3rem] p-10 border border-slate-100 hover:border-indigo-100 transition-all duration-500 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${hook.color} opacity-[0.03] rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700`}
              ></div>

              <div
                className={`w-14 h-14 rounded-2xl ${hook.color} text-white flex items-center justify-center mb-8 shadow-2xl ${hook.shadow} group-hover:-rotate-12 transition-transform duration-500`}
              >
                {hook.icon}
              </div>

              <div className="mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {hook.cat}
                </span>
                <h3 className="text-3xl font-black text-slate-900 mt-1">
                  {hook.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                  Lihat Studi Kasus
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};
