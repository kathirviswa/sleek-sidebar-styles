
import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const NavbarSearch = ({ isMobile, searchOpen }) => {
  return (
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
  );
};

export default NavbarSearch;
