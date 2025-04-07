
import React from "react";
import { Bell } from "lucide-react";

const NavbarNotifications = () => {
  return (
    <button className="relative p-2 text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none">
      <Bell size={20} />
      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>
  );
};

export default NavbarNotifications;
