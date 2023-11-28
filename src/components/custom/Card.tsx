import { FC } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Logo } from "../logo"
import { cn } from '@/lib/utils'

export const CustomCard: FC<CustomCardProps> = ({ cardContent, title, description, footerContent, logo, customLogo, className }) => {
  return (
    <Card className={cn('flex flex-col items-center justify-center h-fit', className)}>
      <CardHeader className={`text-center`}>
        {customLogo ? (
          customLogo
        ) : (
          logo ? <Logo ImageClassName={`w-40 h-40`} ContainerClassName={``} /> : null
        )}
        {title ? (<CardTitle>{title}</CardTitle>) : (null)}
        {description ? (
          <CardDescription>
            {description}
          </CardDescription>) : (null)}
      </CardHeader>
      {cardContent ? (
        <CardContent className={`w-full`}>
          {cardContent}
        </CardContent>) : (null)}
      {footerContent ? (
        <CardFooter>
          {footerContent}
        </CardFooter>) : (null)}
    </Card>
  );
}
