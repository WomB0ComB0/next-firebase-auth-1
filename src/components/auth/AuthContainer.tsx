import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Article, Div } from '../template/index'
import { Logo } from '../logo'
import { cn } from '@/lib/utils'
import { CustomCard as Card } from '../custom/Card'
import { FormSubmit } from '../form/form-submit'

const AuthContainer = ({ cardContent, title, buttonText }: { cardContent: React.ReactNode, title: AuthTitle, buttonText: string}) => {
  return (
    <Card
      className={''}
      logo={true}
      title={title}
      cardContent={cardContent}
      footerContent={
        <>
          <FormSubmit>
            {buttonText}
          </FormSubmit>
        </>
      }
    />
  )
}

export default AuthContainer
