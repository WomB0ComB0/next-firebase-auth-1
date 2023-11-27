"use client";

import { X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { useContext, ElementRef, useRef } from "react";
import { UserContext } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { NavItems } from "@/components/constants";

export const CustomPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: PopoverProps) => {
  const { user } = useContext(UserContext);
  const closeRef = useRef<ElementRef<"button">>(null);
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          {user.name}
        </div>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <>
          <NavItems />
        </>
      </PopoverContent>
    </Popover>
  );
};
