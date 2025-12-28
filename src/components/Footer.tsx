import { FlaskConical, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-200">
              <FlaskConical
                className="text-white sm:w-4 sm:h-4"
                size={14}
        
              />
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900">
              HOOKS LAB
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Belajar pola React hooks tanpa ribet.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-500">
            <a
              href="https://github.com"
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
            >
              <Github size={12} className="sm:w-4 sm:h-4" />
              Github
            </a>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="font-semibold text-slate-600">© 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
