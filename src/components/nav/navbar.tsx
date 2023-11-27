import { Plus } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { CustomPopover } from "@/components/custom/Popover";
import { Nav, Div } from "../template/index";
import { MobileSidebar } from "./mobile-sidebar";
import { UserAvatar } from "../auth/User";

export const Navbar = () => {
  return (
    <Nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <Div className="flex items-center gap-x-4">
        <Div className="hidden md:flex">
          <Logo />
        </Div>
      </Div>
      <Div className="ml-auto flex items-center gap-x-2">
        <UserAvatar />
      </Div>
    </Nav>
  );
};
