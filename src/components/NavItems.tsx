"use client"
import {
  Home,
  Layout,
  Settings,
  LogIn,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

export const AuthButtons = [
  {
    label: "Login",
    icon: <LogIn className="h-4 w-4 mr-2" />,
  },
  {
    label: "Logout",
    icon: <LogOut className="h-4 w-4 mr-2" />,
  },
]

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

export const AuthItems = () => {
  const { onLogin, onLogout } = useContext(UserContext);
  const router = useRouter();
  
  const onClick = (label: string) => {
    if (label === 'Logout') {
      onLogout();
    } else {
      onLogin();
      router.push('/');
    }
  };

  return (
    <>
      {AuthButtons.map((button) => (
        <Button
          key={button.label}
          size="sm"
          onClick={() => onClick(button.label)}
          className="w-full font-normal justify-start pl-10 mb-1"
          variant="ghost"
        >
          {button.icon}
          {button.label}
        </Button>
      ))}
    </>
  );
};

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