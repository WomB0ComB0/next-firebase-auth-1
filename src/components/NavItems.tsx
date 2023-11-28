"use client"
import {
  Home,
  Layout,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const routes = [
  {
    label: "Home",
    icon: <Home className="h-4 w-4 mr-2" />,
    href: `/`,
  },
  {
    label: "Dashboard",
    icon: <Layout className="h-4 w-4 mr-2" />,
    href: `/dashboard`,
  },
  {
    label: "Settings",
    icon: <Settings className="h-4 w-4 mr-2" />,
    href: `/settings`,
  },
];

export const NavItems = () => {
  const router = useRouter();
  const onClick = (href: string) => {
    router.push(href);
  };
  const pathname = usePathname();
  return (
    <>

      {routes.map((route) => (
        <Button
          key={route.href}
          size="sm"
          onClick={() => onClick(route.href)}
          className={cn(
            "w-full font-normal justify-start pl-10 mb-1",
            pathname === route.href && "bg-sky-500/10 text-sky-700"
          )}
          variant="ghost"
        >
          {route.icon}
          {route.label}
        </Button>
      ))}
    </>
  );
}