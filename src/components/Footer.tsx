import { FlaskConical, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-200">
              <FlaskConical className="text-white" size={16} />
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-900">
              HOOKS LAB
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Belajar pola React hooks tanpa ribet.
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <a
              href="https://github.com"
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-700 hover:text-indigo-600"
            >
              <Github size={14} />
              Github
            </a>
            <span className="text-slate-400">•</span>
            <span className="font-semibold text-slate-600">© 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
