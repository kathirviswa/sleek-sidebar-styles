
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  BarChart2,
  Users,
  Settings,
  Layers,
} from "lucide-react";

import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarDropdown from "./SidebarDropdown";

const navItems = [
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

const Sidebar = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
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

  const toggleDropdown = (label) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64",
        className
      )}
    >
      <SidebarHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

      <nav className="flex-1 pt-4 pb-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = activeItem === item.label;
            const isOpen = openDropdowns[item.label] || false;
            
            return (
              <li key={item.label} className="relative">
                <SidebarDropdown
                  isActive={isActive}
                  isOpen={isOpen}
                  isCollapsed={collapsed}
                  toggleDropdown={() => toggleDropdown(item.label)}
                  label={item.label}
                  icon={item.icon}
                  children={item.children}
                />
              </li>
            );
          })}
        </ul>
      </nav>

      <SidebarFooter collapsed={collapsed} />
    </aside>
  );
};

export default Sidebar;
