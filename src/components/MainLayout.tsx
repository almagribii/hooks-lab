import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans text-gray-900">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 min-w-0">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="w-full">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
