
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setIsMobileSidebarOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      {!isMobile && <Sidebar className="flex-shrink-0" />}

      {/* Mobile Sidebar - Overlay */}
      {isMobile && isMobileSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-20" 
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          <Sidebar className="absolute left-0 top-0 z-30" />
        </>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar 
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          isMobileSidebarOpen={isMobileSidebarOpen}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
