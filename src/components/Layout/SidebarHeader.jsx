
import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, Menu } from "lucide-react";

const SidebarHeader = ({ collapsed, toggleCollapsed }) => {
  return (
    <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
      <div className={cn("flex items-center", collapsed ? "justify-center w-full" : "")}>
        {!collapsed && (
          <span className="text-xl font-bold text-sidebar-foreground">Acme Inc</span>
        )}
        {collapsed && (
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sidebar-primary/20 text-sidebar-primary font-bold text-xl">
            A
          </span>
        )}
      </div>
      <button
        onClick={toggleCollapsed}
        className={cn(
          "p-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent focus:outline-none",
          collapsed ? "mx-auto" : ""
        )}
      >
        {collapsed ? <ChevronRight size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
};

export default SidebarHeader;
