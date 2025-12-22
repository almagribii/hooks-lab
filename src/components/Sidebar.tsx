import React from "react";
import {
  Home,
  User,
  X,
  Layers,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
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
          <div className="flex items-center justify-between h-16 px-6 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Layers className="text-blue-400" size={24} />
              <span className="text-xl font-bold tracking-wider italic">
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

          <nav className="mt-6 px-4 space-y-2">
            <NavItem icon={Home} label="Dashboard" route="/" />
            <NavItem icon={User} label="Use State" route="/usestate" />
            <NavItem icon={User} label="Use Effect" route="/useeffect" />
            <NavItem icon={User} label="Use Context" route="/usecontext" />
            <NavItem icon={User} label="Use Reducer" route="/usereducer" />
            <NavItem icon={User} label="Use Memo" route="/usememo" />
            <NavItem icon={User} label="Use Callback" route="/usecallback" />
            <NavItem icon={User} label="Use Ref" route="/useref" />
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

interface NavItemProps {
  icon: LucideIcon;
  route: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  route = "#",
  label,
}) => (
  <NavLink
    to={route}
    className={({ isActive }) => `
    flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
    ${
      isActive
        ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }
  `}
  >
    {({ isActive }) => (
      <>
        <div className="flex items-center">
          <Icon size={20} />
          <span className="ml-3 font-medium whitespace-nowrap">{label}</span>
        </div>
        <ChevronRight
          size={14}
          className={`transition-transform ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </>
    )}
  </NavLink>
);

export default Sidebar;
