
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarFooterProps {
  collapsed: boolean;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ collapsed }) => {
  return (
    <div className="p-4 border-t border-sidebar-border">
      <div className={cn(
        "flex items-center",
        collapsed ? "justify-center" : "px-2"
      )}>
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-sidebar-primary/20 flex items-center justify-center">
            <span className="text-sidebar-primary font-medium">JS</span>
          </div>
        </div>
        {!collapsed && (
          <div className="ml-3">
            <p className="text-sm font-medium text-sidebar-foreground">John Smith</p>
            <p className="text-xs text-sidebar-foreground/70">Admin</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarFooter;
