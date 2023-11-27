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

export const CustomCard: FC<CustomCardProps> = ({ cardContent, title, description, footerContent, logo, className }) => {
  return (
    <Card className={cn('', className)}>
      <CardHeader className={`text-center`}>
        {logo ? (<Logo />) : (null)}
        {title ? (<CardTitle>{title}</CardTitle>) : (null)}
        {description ? (
          <CardDescription>
            {description}
          </CardDescription>) : (null)}
      </CardHeader>
      {cardContent ? (
        <CardContent>
          {cardContent}
        </CardContent>) : (null)}
      {footerContent ? (
        <CardFooter>
          {footerContent}
        </CardFooter>) : (null)}
    </Card>
  );
}
