import Link from "next/link";
import Image from "next/image";
import { Div } from "./template/index";
import { cn } from "@/lib/utils";


export const TypeScript: React.FC<LogoProps> = ({ name, ContainerClassName, height = 10, width, ImageClassName }) => {
  return (
    <Link href="/">
      <Div className={cn('hover:opacity-75 transition items-center gap-x-2 hidden md:flex', ContainerClassName)}>
        <Image
          src="/assets/svgs/typescript.svg"
          alt="Logo"
          height={height || 30}
          width={width || 30}
          className={cn(' object-cover', ImageClassName)}
        />
        {name ? (
          <p className={cn(
            "text-lg text-neutral-700 pb-1",
            'font-semibold'
          )}>
            {name}
          </p>
        ) : null}
      </Div>
    </Link>
  );
};