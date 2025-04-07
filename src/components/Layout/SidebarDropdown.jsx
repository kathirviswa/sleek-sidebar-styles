
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SidebarDropdown = ({
  isActive,
  isOpen,
  isCollapsed,
  toggleDropdown,
  label,
  icon: Icon,
  children,
}) => {
  const isCurrentlyOpen = isOpen;
  
  return (
    <div>
      <button
        onClick={toggleDropdown}
        className={cn(
          "w-full flex items-center px-4 py-3 text-sidebar-foreground rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
          isActive && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
        )}
      >
        <Icon size={20} className={cn(isActive ? "text-sidebar-primary" : "text-sidebar-foreground/70")} />
        {!isCollapsed && (
          <>
            <span className="ml-3 text-sm flex-1">{label}</span>
            <ChevronDown 
              size={16} 
              className={cn(
                "transition-transform duration-200",
                isCurrentlyOpen ? "rotate-180" : ""
              )} 
            />
          </>
        )}
      </button>
      
      {!isCollapsed && isCurrentlyOpen && (
        <ul className="pl-10 mt-1 space-y-1">
          {children.map((child) => (
            <li key={child.label}>
              <Link
                to={child.href}
                className={cn(
                  "block py-2 px-3 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                  location.pathname === child.href && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      
      {isCollapsed && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="absolute inset-0 w-full h-full cursor-pointer"
              aria-label={`${label} submenu`}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white shadow-md rounded-md py-1 min-w-[160px] border border-gray-200">
            <DropdownMenuItem className="px-3 py-2 text-sm font-medium text-gray-800 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              {label}
            </DropdownMenuItem>
            <div className="h-px bg-gray-200 my-1" />
            {children.map((child) => (
              <DropdownMenuItem key={child.label} asChild>
                <Link
                  to={child.href}
                  className="px-3 py-2 text-sm text-gray-700 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full"
                >
                  {child.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default SidebarDropdown;
