import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  BarChart2,
  Users,
  Settings,
  Layers,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavItem = {
  icon: React.ElementType;
  label: string;
  href: string;
  children: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { 
    icon: Home, 
    label: "Dashboard", 
    href: "/",
    children: [
      { label: "Overview", href: "/" },
      { label: "Statistics", href: "/dashboard/statistics" },
      { label: "Reports", href: "/dashboard/reports" }
    ]
  },
  { 
    icon: BarChart2, 
    label: "Analytics", 
    href: "/analytics",
    children: [
      { label: "Performance", href: "/analytics" },
      { label: "Trends", href: "/analytics/trends" },
      { label: "Forecasts", href: "/analytics/forecasts" }
    ]
  },
  { 
    icon: Users, 
    label: "Customers", 
    href: "/customers",
    children: [
      { label: "New Customers", href: "/customers/new" },
      { label: "Regular Customers", href: "/customers/regular" },
      { label: "VIP Customers", href: "/customers/vip" }
    ]
  },
  { 
    icon: Layers, 
    label: "Projects", 
    href: "/projects",
    children: [
      { label: "Active Projects", href: "/projects" },
      { label: "Archived Projects", href: "/projects/archived" },
      { label: "Project Templates", href: "/projects/templates" }
    ]
  },
  { 
    icon: Settings, 
    label: "Settings", 
    href: "/settings",
    children: [
      { label: "General", href: "/settings" },
      { label: "Account", href: "/settings/account" },
      { label: "Notifications", href: "/settings/notifications" }
    ]
  },
];

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    const currentNavItem = navItems.find(item => 
      item.href === currentPath || 
      (item.href !== "/" && currentPath.startsWith(item.href)) ||
      (item.children && item.children.some(child => child.href === currentPath))
    );
    
    if (currentNavItem) {
      setActiveItem(currentNavItem.label);
    } else if (currentPath === "/") {
      setActiveItem("Dashboard");
    }
  }, [location]);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-sidebar bg-green-600 text- white border-r border-sidebar-border transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
        <div className={cn("flex items-center", collapsed ? "justify-center w-full" : "")}>
          {!collapsed && (
            <span className="text-xl font-bold text-sidebar-foreground text-white">GMS WORLDWIDE</span>
          )}
          {collapsed && (
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sidebar-primary/20 text-sidebar-primary font-bold text-xl">
              A
            </span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent focus:outline-none",
            collapsed ? "mx-auto" : ""
          )}
        >
          {collapsed ? <ChevronRight size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="flex-1 pt-4 pb-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            const isDropdownOpen = openDropdowns[item.label] || false;
            
            return (
              <li key={item.label} className="relative">
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={cn(
                      "w-full flex items-center px-4 py-3 text-sidebar-foreground rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                      isActive && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    )}
                  >
                    <Icon size={20} className={cn(isActive ? "text-sidebar-primary" : "text-sidebar-foreground/70")} />
                    {!collapsed && (
                      <>
                        <span className="ml-3 text-sm flex-1">{item.label}</span>
                        <ChevronDown 
                          size={16} 
                          className={cn(
                            "transition-transform duration-200",
                            isDropdownOpen ? "rotate-180" : ""
                          )} 
                        />
                      </>
                    )}
                  </button>
                  
                  {!collapsed && isDropdownOpen && (
                    <ul className="pl-10 mt-1 space-y-1">
                      {item.children.map((child) => (
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
                  
                  {collapsed && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          className="absolute inset-0 w-full h-full cursor-pointer"
                          aria-label={`${item.label} submenu`}
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white shadow-md rounded-md py-1 min-w-[160px] border border-gray-200">
                        <DropdownMenuItem className="px-3 py-2 text-sm font-medium text-gray-800 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                          {item.label}
                        </DropdownMenuItem>
                        <div className="h-px bg-gray-200 my-1" />
                        {item.children.map((child) => (
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
              </li>
            );
          })}
        </ul>
      </nav>

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
    </aside>
  );
};

export default Sidebar;
