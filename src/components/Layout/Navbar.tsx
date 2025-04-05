
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Bell, Search, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  onToggleMobileSidebar: () => void;
  isMobileSidebarOpen: boolean;
  className?: string;
}

const Navbar = ({ onToggleMobileSidebar, isMobileSidebarOpen, className }: NavbarProps) => {
  const isMobile = useIsMobile();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      className={cn(
        "h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-10",
        className
      )}
    >
      {isMobile && (
        <button
          onClick={onToggleMobileSidebar}
          className="p-2 text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none"
        >
          {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      <div className={cn(
        "flex-1 relative",
        isMobile ? (searchOpen ? "block" : "hidden") : "block max-w-md ml-4"
      )}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 pl-10 pr-4 text-sm bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {isMobile && (
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <Search size={20} />
          </button>
        )}
        
        <button className="relative p-2 text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-gray-200 mx-2 hidden md:block"></div>
        
        <div className="hidden md:flex items-center">
          <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-indigo-600 font-medium text-sm">JS</span>
          </div>
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-800">John Smith</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
