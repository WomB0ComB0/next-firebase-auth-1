import { cn } from "@/lib/utils";
export const CenterLayout = ({ children, className, Element }: {
  children: React.ReactNode, Element: React.ElementType, className?: string
}) => {
  return (
    <Element className={cn(`h-full flex items-center justify-center`, className)}>
      {children}
    </Element>
  );
};