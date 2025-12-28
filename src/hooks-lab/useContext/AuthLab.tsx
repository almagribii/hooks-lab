import { createContext, useState, useContext } from "react";

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthLab = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({
        name: "John Doe",
        email: "john@hooks-lab.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      });
      setIsLoading(false);
    }, 1500);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, isLoading, login, logout }}
    >
      <div className="w-full min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8 font-sans">
        <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-slate-900">
            Hook Lab: AuthContext
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            Authentication: Mengelola status login user secara global
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border-3 bg-white border-rose-400">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-rose-500 shadow-lg"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-900">
                App View
              </h2>
            </div>

            <div className="rounded-2xl p-8 mb-6 min-h-350px flex flex-col items-center justify-center border-2 bg-rose-50 border-rose-100 transition-all">
              <MainContainer />
            </div>

            <div className="rounded-xl p-3 sm:p-4 md:p-5 border-2 bg-rose-100 border-rose-300 text-rose-800">
              <p className="text-xs sm:text-sm font-semibold mb-1">
                💡 Info Status:
              </p>
              <p className="text-xs sm:text-sm leading-relaxed">
                Status login disimpan di <b>Top-Level Context</b>. Komponen
                apapun bisa mengecek apakah user sudah login atau belum.
              </p>
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border-3 bg-slate-900 border-cyan-400">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-500"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300">
                Auth Logic Trace
              </h2>
            </div>

            <div className="bg-slate-950 rounded-2xl p-6 mb-6 shadow-inner font-mono text-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2">
                  <span>Status:</span>
                  <span
                    className={`${
                      user ? "text-emerald-400" : "text-rose-400"
                    } font-bold uppercase`}
                  >
                    {user ? "Authenticated" : "Guest"}
                  </span>
                </div>
                <div className="text-slate-300 space-y-3">
                  <p className="text-xs text-cyan-400">
                    {"// Auth State Data"}
                  </p>
                  <div className="bg-slate-900 p-3 rounded border border-slate-800">
                    <pre className="text-[11px] leading-tight text-cyan-200">
                      {JSON.stringify({ user, isLoading }, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-3 sm:p-4 md:p-5 border-2 bg-slate-800 border-slate-700 text-slate-300">
              <p className="text-xs sm:text-sm font-semibold mb-2 italic">
                Fitur Context Ini:
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-[10px] sm:text-xs">
                    <b>Async Simulation:</b> Loading saat "fetching" user.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-[10px] sm:text-xs">
                    <b>Conditional Rendering:</b> Tampilan berubah sesuai state.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 max-w-6xl mx-auto rounded-2xl sm:rounded-3xl p-1 shadow-2xl bg-linear-to-r from-rose-500 to-cyan-500">
          <div className="rounded-[22px] p-4 sm:p-6 md:p-8 lg:p-12 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-slate-900">
                Bagaimana AuthContext Membantu?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-rose-600 mb-2 font-mono italic">
                    Problem: Prop Drilling
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Tanpa Context, kamu harus mengirim data <b>user</b> ke
                    Navbar, Sidebar, Profile, hingga Tombol Like di setiap
                    halaman secara manual.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-cyan-600 mb-2 font-mono italic">
                    Solution: Global State
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dengan AuthContext, cukup panggil <b>useAuth()</b> di
                    komponen manapun. Jika user logout, semua komponen yang
                    menampilkan info user akan hilang otomatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthContext.Provider>
  );
};

function MainContainer() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
        <p className="text-rose-600 font-bold animate-pulse">
          Authenticating...
        </p>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-24 h-24 rounded-full border-4 border-white shadow-xl mb-4"
        />
        <h3 className="text-2xl font-bold text-slate-900">{user.name}</h3>
        <p className="text-slate-500 mb-6">{user.email}</p>
        <button
          onClick={logout}
          className="py-2 px-4 sm:py-3 sm:px-6 md:px-8 bg-rose-600 text-white rounded-xl font-bold text-sm sm:text-base hover:bg-rose-700 transition-all shadow-lg active:scale-95"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-4xl text-slate-400">👤</span>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">Welcome, Guest</h3>
      <p className="text-slate-500 mb-6">
        Silakan login untuk mengakses fitur lab.
      </p>
      <button
        onClick={login}
        className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-10 bg-slate-900 text-white rounded-2xl font-bold text-sm sm:text-base hover:bg-slate-800 transition-all shadow-xl active:scale-95"
      >
        Login Simulation
      </button>
    </div>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
