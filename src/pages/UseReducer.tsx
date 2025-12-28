import {
  ArrowRight,
  Settings,
  GitPullRequest,
  LayoutList,
  Terminal,
} from "lucide-react";
import { useRef } from "react";
import CollaborationInvite from "../components/CollaborationInvite";

export const UseReducer = () => {
  const flowRef = useRef<HTMLDivElement | null>(null);

  const steps = [
    {
      title: "Predictable State",
      icon: <Settings className="text-slate-600" />,
      desc: "Semua perubahan state dikumpulkan dalam satu fungsi pusat (Reducer) yang terukur.",
      color: "border-slate-200 bg-slate-50",
    },
    {
      title: "Action Based",
      icon: <GitPullRequest className="text-indigo-500" />,
      desc: "State tidak diubah secara acak, melainkan melalui 'Dispatch' sebuah aksi yang jelas.",
      color: "border-indigo-100 bg-indigo-50",
    },
    {
      title: "Organized Logic",
      icon: <LayoutList className="text-blue-500" />,
      desc: "Memisahkan logika 'bagaimana data berubah' dari komponen UI agar kode lebih bersih.",
      color: "border-blue-100 bg-blue-50",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-sans animate-in slide-in-from-left-6 duration-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 sm:mb-10 md:mb-12 text-white shadow-2xl">
        <div className="absolute top-0 left-0 -mt-20 -ml-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="px-4 py-1 bg-slate-700 border border-slate-600 rounded-full text-sm font-medium mb-6 inline-block text-slate-300">
            Advanced State Hook
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">
            useReducer <span className="text-indigo-400">Hook</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8">
            Kewalahan dengan terlalu banyak{" "}
            <code className="bg-slate-900 px-2 py-1 rounded text-indigo-300">
              useState
            </code>
            ? <br />
            Organisir state Anda dengan sistem **Action & Reducer**. Sangat
            cocok untuk menangani objek state besar atau logika yang memiliki
            banyak skenario.
          </p>
          <button
            onClick={() =>
              flowRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-xl shadow-indigo-900/40 active:scale-95 text-sm sm:text-base"
          >
            Masuk ke Panel Kontrol{" "}
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Grid Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 ${item.color} shadow-sm transition-all hover:shadow-md group`}
          >
            <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-white w-fit rounded-xl sm:rounded-2xl shadow-sm group-hover:rotate-12 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* The Reducer Flow Visual */}
      <div
        ref={flowRef}
        className="bg-white border-3 border-slate-100 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden relative"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 md:mb-10 text-slate-900 flex items-center gap-2 sm:gap-3">
          <Terminal className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6" /> Mental
          Model: The Flow
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative">
          {/* Dispatch */}
          <div className="flex-1 w-full p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border-2 border-slate-200 text-center relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full uppercase">
              Trigger
            </span>
            <h4 className="font-bold text-slate-800 mb-2 text-sm sm:text-base">
              Dispatch(Action)
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-500 italic">
              "Saya ingin menambah jumlah barang"
            </p>
          </div>

          <div className="hidden md:block animate-bounce-x">
            <ArrowRight className="text-slate-300 w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          {/* Reducer Function */}
          <div className="flex-1 w-full p-4 sm:p-6 bg-indigo-600 rounded-xl sm:rounded-2xl text-white text-center shadow-lg relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-[10px] font-bold rounded-full uppercase italic">
              The Brain
            </span>
            <h4 className="font-bold mb-2 text-sm sm:text-base">
              Reducer Function
            </h4>
            <p className="text-[10px] sm:text-xs text-indigo-100 italic">
              "Cek aksi: oh Tambah? Ok, State lama + 1"
            </p>
          </div>

          <div className="hidden md:block animate-bounce-x">
            <ArrowRight className="text-slate-300 w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          {/* New State */}
          <div className="flex-1 w-full p-4 sm:p-6 bg-emerald-50 rounded-xl sm:rounded-2xl border-2 border-emerald-200 text-center relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">
              Result
            </span>
            <h4 className="font-bold text-emerald-900 mb-2 text-sm sm:text-base">
              New State UI
            </h4>
            <p className="text-[10px] sm:text-xs text-emerald-600 italic">
              "Tampilan diperbarui otomatis"
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Text */}
      <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 md:p-8 bg-slate-900 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-slate-700">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 italic tracking-wide">
              useState vs useReducer
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Gunakan <span className="text-white font-bold">useState</span>{" "}
              untuk nilai tunggal atau objek sederhana (misal: input form,
              toggle). <br />
              <br />
              Gunakan{" "}
              <span className="text-indigo-400 font-bold">useReducer</span>{" "}
              untuk logika kompleks di mana state berikutnya bergantung pada
              state sebelumnya atau ketika banyak sub-nilai perlu diubah
              sekaligus.
            </p>
          </div>
          <div className="flex-1 bg-slate-800 p-6 rounded-2xl border border-slate-700 font-mono text-xs">
            <code className="text-pink-400">switch</code> (action.type) {"{"}{" "}
            <br />
            &nbsp;&nbsp;<code className="text-blue-400">case</code>{" "}
            <code className="text-emerald-400">'INCREMENT'</code>: <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<code className="text-white">
              return
            </code>{" "}
            {"{ count: state.count + 1 };"} <br />
            &nbsp;&nbsp;<code className="text-blue-400">default</code>: <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <code className="text-white">return state;</code> <br />
            {"}"}
          </div>
        </div>
      </div>
       <CollaborationInvite
              hookName="useRef"
              repoUrl="https://github.com/almagribii/hooks-lab"
              issueUrl="https://github.com/almagribii/hooks-lab/issues/new"
            />
    </div>
  );
};
