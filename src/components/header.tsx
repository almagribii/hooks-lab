import React from "react";
import { Menu, Bell, Search } from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
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
            Overview
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative hidden md:flex items-center mr-4">
          <Search className="absolute left-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search documents..."
            className="pl-10 pr-4 py-1.5 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 w-48 lg:w-64 transition-all"
          />
        </div>

        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-px bg-gray-200 mx-2"></div>

        <button className="flex items-center gap-2 p-1 pr-3 hover:bg-gray-100 rounded-full transition-colors">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
            JD
          </div>
          <span className="text-sm font-medium text-gray-700 hidden lg:block">
            John Doe
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
