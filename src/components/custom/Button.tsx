"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const CustomButton = ({
  children,
  disabled,
  className,
  variant,
  onClick,
  type
}: CustomButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      type="submit"
      variant={variant}
      size="sm"
      className={cn(className)}
      typeof={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
