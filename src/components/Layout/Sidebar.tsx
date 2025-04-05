
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
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: BarChart2, label: "Analytics", href: "/analytics" },
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
  { icon: Layers, label: "Projects", href: "/projects" },
  { icon: Settings, label: "Settings", href: "/settings" },
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
        "flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div className={cn("flex items-center", collapsed ? "justify-center w-full" : "")}>
          {!collapsed && (
            <span className="text-xl font-bold text-gray-800">Acme Inc</span>
          )}
          {collapsed && (
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-100 text-indigo-600 font-bold text-xl">
              A
            </span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none",
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
            const hasChildren = item.children && item.children.length > 0;
            const isDropdownOpen = openDropdowns[item.label] || false;
            
            return (
              <li key={item.label} className="relative">
                {hasChildren ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={cn(
                        "w-full flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors",
                        isActive && "bg-indigo-50 text-indigo-600 font-medium"
                      )}
                    >
                      <Icon size={20} className={cn(isActive ? "text-indigo-600" : "text-gray-500")} />
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
                    
                    {!collapsed && isDropdownOpen && item.children && (
                      <ul className="pl-10 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.href}
                              className={cn(
                                "block py-2 px-3 text-sm rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors",
                                location.pathname === child.href && "bg-indigo-50 text-indigo-600 font-medium"
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {collapsed && hasChildren && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button
                            className="absolute inset-0 w-full h-full cursor-pointer"
                            aria-label={`${item.label} submenu`}
                          />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white shadow-md rounded-md py-1 min-w-[160px] border border-gray-200">
                          <DropdownMenuItem className="px-3 py-2 text-sm font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-600">
                            {item.label}
                          </DropdownMenuItem>
                          <div className="h-px bg-gray-200 my-1" />
                          {item.children.map((child) => (
                            <DropdownMenuItem key={child.label} asChild>
                              <Link
                                to={child.href}
                                className="px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full"
                              >
                                {child.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors",
                      isActive && "bg-indigo-50 text-indigo-600 font-medium"
                    )}
                  >
                    <Icon size={20} className={cn(isActive ? "text-indigo-600" : "text-gray-500")} />
                    {!collapsed && (
                      <span className="ml-3 text-sm">{item.label}</span>
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className={cn(
          "flex items-center",
          collapsed ? "justify-center" : "px-2"
        )}>
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-600 font-medium">JS</span>
            </div>
          </div>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">John Smith</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
