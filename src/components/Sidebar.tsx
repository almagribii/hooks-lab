import React, { useState, useEffect } from "react";
import {
  Home,
  Zap,
  RefreshCw,
  Users,
  GitMerge,
  Cpu,
  Repeat,
  Anchor,
  X,
  Layers,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useEffect(() => {
    const parents = ["/usestate", "/useeffect", "/usecontext"];
    const match = parents.find((parent) =>
      location.pathname.startsWith(parent)
    );
    setActiveGroup(match ?? null);
  }, [location.pathname]);

  return (
    <>
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 bg-slate-900 text-white transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative 
          // sidebar desktop
          ${isOpen ? "lg:w-64" : "lg:w-0"}
        `}
      >
        <div className="w-64">
          <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Layers
                className="text-blue-400 sm:w-6 sm:h-6"
                size={20}
              />
              <span className="text-lg sm:text-xl font-bold tracking-wider italic">
                HOOKS LAB
              </span>
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-1 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mt-4 sm:mt-6 px-3 sm:px-4 space-y-1 sm:space-y-2">
            <NavItem
              icon={Home}
              label="Dashboard"
              route="/"
              activeGroup={activeGroup}
              setActiveGroup={setActiveGroup}
            />
            <NavItem
              icon={Zap}
              label="Use State"
              route="/usestate"
              childrenItems={[
                { label: "Counter", route: "/usestate/counter" },
                { label: "Forms", route: "/usestate/forms" },
                { label: "Toggles", route: "/usestate/toggles" },
              ]}
              activeGroup={activeGroup}
              setActiveGroup={setActiveGroup}
            />
            <NavItem
              icon={RefreshCw}
              label="Use Effect"
              route="/useeffect"
              childrenItems={[
                { label: "Timer", route: "/useeffect/timer" },
                { label: "Fetching Data", route: "/useeffect/fetchingdata" },
                { label: "Event Listener", route: "/useeffect/eventlistener" },
                {
                  label: "Synchronization",
                  route: "/useeffect/synchronization",
                },
              ]}
              activeGroup={activeGroup}
              setActiveGroup={setActiveGroup}
            />
            <NavItem
              icon={Users}
              label="Use Context"
              route="/usecontext"
              childrenItems={[
                {
                  label: "Dark Light Mode",
                  route: "/usecontext/darklightmode",
                },
                { label: "Auth Context", route: "/usecontext/authcontext" },
                { label: "Language Mode", route: "/usecontext/languagemode" },
              ]}
              activeGroup={activeGroup}
              setActiveGroup={setActiveGroup}
            />
            <NavItem
              icon={GitMerge}
              label="Use Reducer"
              route="/usereducer"
              activeGroup={activeGroup}
              setActiveGroup={setActiveGroup}
            />
            <NavItem
              icon={Cpu}
              label="Use Memo"
              route="/usememo"
              activeGroup={activeGroup}
              setActiveGroup={setActiveGroup}
            />
            <NavItem
              icon={Repeat}
              label="Use Callback"
              route="/usecallback"
              activeGroup={activeGroup}
              setActiveGroup={setActiveGroup}
            />
            <NavItem
              icon={Anchor}
              label="Use Ref"
              route="/useref"
              activeGroup={activeGroup}
              setActiveGroup={setActiveGroup}
            />
          </nav>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

type SubItem = { label: string; route: string };

interface NavItemProps {
  icon: LucideIcon;
  route: string;
  label: string;
  childrenItems?: SubItem[];
  activeGroup: string | null;
  setActiveGroup: React.Dispatch<React.SetStateAction<string | null>>;
}

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  route = "#",
  label,
  childrenItems,
  activeGroup,
  setActiveGroup,
}) => {
  const location = useLocation();
  const hasChildren = !!(childrenItems && childrenItems.length);
  const isActiveGroup = activeGroup === route;
  const open = hasChildren ? isActiveGroup : false;

  useEffect(() => {
    if (hasChildren && location.pathname.startsWith(route)) {
      setActiveGroup(route);
    }
  }, [hasChildren, location.pathname, route, setActiveGroup]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <NavLink
          to={route}
          className={({ isActive }) => `
    flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-200 group w-full text-sm sm:text-base
    ${
      isActive
        ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }
  `}
        >
          {({ isActive }) => (
            <div className="flex items-center w-full">
              <div className="flex items-center gap-2">
                <Icon size={18} className="sm:w-5 sm:h-5" />
                <span className="font-medium whitespace-nowrap">{label}</span>
              </div>
              {hasChildren ? (
                <div className="ml-auto">
                  <ChevronRight
                    size={14}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveGroup((prev) => (prev === route ? null : route));
                    }}
                    className={`cursor-pointer transition-transform transform ${
                      open || isActive
                        ? "rotate-90 opacity-100"
                        : "opacity-0 group-hover:opacity-100 rotate-0"
                    }`}
                  />
                </div>
              ) : null}
            </div>
          )}
        </NavLink>
      </div>

      {hasChildren && (
        <div
          className={`mt-1 sm:mt-2 pl-2 space-y-1 ${open ? "block" : "hidden"}`}
        >
          {childrenItems.map((sub) => (
            <NavLink
              key={sub.route}
              to={sub.route}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-xs sm:text-sm transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {sub.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
