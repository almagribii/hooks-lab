import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import { Menu, Search, Settings } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

type SearchItem = {
  label: string;
  path: string;
  group: string;
  keywords?: string[];
};

type SimpleNavItem = {
  id: string;
  label: string;
  path: string;
  meta?: string;
};

const SEARCH_ITEMS: SearchItem[] = [
  { label: "Dashboard", path: "/", group: "Overview" },
  { label: "Use State", path: "/usestate", group: "Use State" },
  { label: "Counter", path: "/usestate/counter", group: "Use State" },
  { label: "Forms", path: "/usestate/forms", group: "Use State" },
  { label: "Toggles", path: "/usestate/toggles", group: "Use State" },
  { label: "Use Effect", path: "/useeffect", group: "Use Effect" },
  {
    label: "Timer",
    path: "/useeffect/timer",
    group: "Use Effect",
    keywords: ["interval", "countdown"],
  },
  {
    label: "Fetching Data",
    path: "/useeffect/fetchingdata",
    group: "Use Effect",
    keywords: ["api", "request"],
  },
  {
    label: "Event Listener",
    path: "/useeffect/eventlistener",
    group: "Use Effect",
    keywords: ["window", "dom"],
  },
  {
    label: "Synchronization",
    path: "/useeffect/synchronization",
    group: "Use Effect",
    keywords: ["sync", "debounce"],
  },
  { label: "Use Context", path: "/usecontext", group: "Use Context" },
  {
    label: "Dark Light Mode",
    path: "/usecontext/darklightmode",
    group: "Use Context",
  },
  {
    label: "Auth Context",
    path: "/usecontext/authcontext",
    group: "Use Context",
  },
  {
    label: "Language Mode",
    path: "/usecontext/languagemode",
    group: "Use Context",
  },
  { label: "Use Reducer", path: "/usereducer", group: "Other Hooks" },
  { label: "Use Memo", path: "/usememo", group: "Other Hooks" },
  { label: "Use Callback", path: "/usecallback", group: "Other Hooks" },
  { label: "Use Ref", path: "/useref", group: "Other Hooks" },
];

const QUICK_ACTIONS: SimpleNavItem[] = [
  {
    id: "action-1",
    label: "Tema Gelap/Terang",
    path: "/usecontext/darklightmode",
    meta: "Context demo",
  },
  {
    id: "action-2",
    label: "Atur Bahasa",
    path: "/usecontext/languagemode",
    meta: "Context demo",
  },
  {
    id: "action-3",
    label: "Auth Playground",
    path: "/usecontext/authcontext",
    meta: "Context demo",
  },
  {
    id: "action-4",
    label: "Optimasi Callback",
    path: "/usecallback",
    meta: "Performance",
  },
];

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement | null>(null);

  const filteredItems = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return [];

    return SEARCH_ITEMS.filter((item) => {
      const haystack = [
        item.label,
        item.group,
        item.path,
        ...(item.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(value);
    }).slice(0, 8);
  }, [query]);

  const handleSelect = useCallback(
    (path: string) => {
      navigate(path);
      setQuery("");
      setOpen(false);
    },
    [navigate]
  );

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && filteredItems[0]) {
      e.preventDefault();
      handleSelect(filteredItems[0].path);
    }

    if (e.key === "Escape") {
      setQuery("");
      setOpen(false);
      setSettingsOpen(false);
    }
  };

  const handleNavigate = useCallback(
    (path: string) => {
      navigate(path);
      setQuery("");
      setOpen(false);
      setSettingsOpen(false);
    },
    [navigate]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        settingsOpen &&
        settingsRef.current &&
        !settingsRef.current.contains(target)
      ) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [settingsOpen]);

  useEffect(() => {
    setSettingsOpen(false);
    setOpen(false);
    setQuery("");
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4 md:px-6 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 active:scale-95 transition-all"
          aria-label="Toggle Navigation"
        >
          <Menu size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="ml-2 hidden sm:block">
          <h2 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
            Dashboard
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <div className="relative flex items-center mr-2 sm:mr-3 w-32 sm:w-56 md:w-72 lg:w-80">
          <Search
            className="absolute left-3 text-gray-400 sm:w-5 sm:h-5"
            size={16}

          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 120)}
            onKeyDown={handleKeyDown}
            placeholder="Cari..."
            className="pl-10 pr-3 py-1 sm:py-1.5 bg-gray-100 border-none rounded-full text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 w-full transition-all"
          />

          {open && query.trim() && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
              {filteredItems.length ? (
                <ul className="max-h-56 sm:max-h-64 overflow-y-auto divide-y divide-gray-100">
                  {filteredItems.map((item) => (
                    <li key={item.path}>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleSelect(item.path)}
                        className="w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-50 flex flex-col"
                      >
                        <span className="text-xs sm:text-sm font-medium text-gray-800">
                          {item.label}
                        </span>
                        <span className="text-xs text-gray-500">
                          {item.group}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-500">
                  Tidak ada hasil
                </div>
              )}
            </div>
          )}
        </div>

        <div className="h-6 sm:h-8 w-px bg-gray-200 mx-1 sm:mx-2"></div>

        <div className="relative" ref={settingsRef}>
          <button
            onClick={() => {
              setSettingsOpen((prev) => !prev);
            }}
            className="flex items-center gap-1 sm:gap-2 p-1 pr-2 sm:pr-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Buka quick actions"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              <Settings size={14} className="sm:w-4 sm:h-4" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-700 hidden lg:block">
              Quick Actions
            </span>
          </button>

          {settingsOpen && (
            <div className="absolute right-0 mt-2 w-56 sm:w-64 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10">
              <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-100">
                <p className="text-xs sm:text-sm font-semibold text-gray-800">
                  Navigasi cepat
                </p>
                <p className="text-xs text-gray-500">
                  Mode, bahasa, auth, optimasi
                </p>
              </div>
              <ul className="divide-y divide-gray-100">
                {QUICK_ACTIONS.map((action) => (
                  <li key={action.id}>
                    <button
                      className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 focus:bg-gray-50 transition-colors"
                      onClick={() => handleNavigate(action.path)}
                    >
                      <div className="text-xs sm:text-sm font-medium text-gray-800">
                        {action.label}
                      </div>
                      {action.meta ? (
                        <div className="text-xs text-gray-500">
                          {action.meta}
                        </div>
                      ) : null}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
