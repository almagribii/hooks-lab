import { FlaskConical } from "lucide-react"

export const Footer = () => {
    return (
        
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <FlaskConical className="text-white" />
            </div>
            <span className="text-2xl font-black italic tracking-tighter text-slate-900">
              Hooks<span className="text-indigo-600">Lab</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-400 mb-12 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Lab Support
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Changelog
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-slate-400 text-sm font-medium">
            © 2025 Created for the next generation of React Engineers.
          </p>
        </div>
      </footer>
    )
}