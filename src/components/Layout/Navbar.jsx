
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import NavbarSearch from "./NavbarSearch";
import NavbarNotifications from "./NavbarNotifications";
import NavbarUserMenu from "./NavbarUserMenu";

const Navbar = ({ onToggleMobileSidebar, isMobileSidebarOpen, className }) => {
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

      <NavbarSearch isMobile={isMobile} searchOpen={searchOpen} />

      <div className="flex items-center space-x-3">
        {isMobile && (
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <Search size={20} />
          </button>
        )}
        
        <NavbarNotifications />
        
        <div className="h-8 w-[1px] bg-gray-200 mx-2 hidden md:block"></div>
        
        <NavbarUserMenu />
      </div>
    </header>
  );
};

export default Navbar;
