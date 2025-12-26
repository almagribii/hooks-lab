import React, { useCallback, useMemo, useState } from "react";
import { Menu, Bell, Search, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

type SearchItem = {
  label: string;
  path: string;
  group: string;
  keywords?: string[];
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

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

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
    }
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 active:scale-95 transition-all"
          aria-label="Toggle Navigation"
        >
          <Menu size={24} />
        </button>

        <div className="ml-4 hidden sm:block">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Dashboard
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative hidden md:flex items-center mr-4">
          <Search className="absolute left-3 text-gray-400" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 120)}
            onKeyDown={handleKeyDown}
            placeholder="Cari materi hooks..."
            className="pl-10 pr-4 py-1.5 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 w-48 lg:w-64 transition-all"
          />

          {open && query.trim() && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              {filteredItems.length ? (
                <ul className="max-h-64 overflow-y-auto divide-y divide-gray-100">
                  {filteredItems.map((item) => (
                    <li key={item.path}>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleSelect(item.path)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex flex-col"
                      >
                        <span className="text-sm font-medium text-gray-800">
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
                <div className="px-4 py-3 text-sm text-gray-500">
                  Tidak ada hasil
                </div>
              )}
            </div>
          )}
        </div>

        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-px bg-gray-200 mx-2"></div>

        <button className="flex items-center gap-2 p-1 pr-3 hover:bg-gray-100 rounded-full transition-colors">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
            <Settings size={16} />
          </div>
          <span className="text-sm font-medium text-gray-700 hidden lg:block">
            Setting
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
