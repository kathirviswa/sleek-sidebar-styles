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
} from "lucide-react";

type NavItem = {
  icon: React.ElementType;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: BarChart2, label: "Analytics", href: "/analytics" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: Layers, label: "Projects", href: "/projects" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    const currentNavItem = navItems.find(item => 
      item.href === currentPath || 
      (item.href !== "/" && currentPath.startsWith(item.href))
    );
    
    if (currentNavItem) {
      setActiveItem(currentNavItem.label);
    } else if (currentPath === "/") {
      setActiveItem("Dashboard");
    }
  }, [location]);

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
            
            return (
              <li key={item.label}>
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
