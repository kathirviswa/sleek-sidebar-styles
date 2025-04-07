
import React from "react";
import { UserRound, Settings, HelpCircle, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const NavbarUserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="hidden md:flex items-center hover:bg-gray-100 rounded-md p-1 transition-colors">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-indigo-100 text-indigo-600 font-medium text-sm">JS</AvatarFallback>
          </Avatar>
          <div className="ml-2 mr-1">
            <p className="text-sm font-medium text-gray-800">John Smith</p>
          </div>
        </div>
        
        {/* Mobile avatar only */}
        <div className="md:hidden flex">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-indigo-100 text-indigo-600 font-medium text-sm">JS</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5">
          <div className="font-medium">John Smith</div>
          <div className="text-xs text-muted-foreground">john.smith@example.com</div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserRound className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircle className="mr-2 h-4 w-4" />
          <span>Help</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500 focus:bg-red-50 focus:text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarUserMenu;
