import React from 'react'

import { Article, Div } from '../template/index'
import { Logo } from '../logo'
import { cn } from '@/lib/utils'
import { CustomCard as Card } from '../custom/Card'
import { FormSubmit } from '../form/form-submit'

const AuthContainer = ({ cardContent, title, buttonText }: { cardContent: React.ReactNode, title: AuthTitle, buttonText: string}) => {
  return (
    <Card
      className={'w-2/6 flex flex-col justify-between items-center'}
      logo={true}
      customLogo={
        <Logo ImageClassName={``} ContainerClassName={``} height={80} width={80}/>
      }
      title={title}
      cardContent={cardContent}
    />
  )
}

export default AuthContainer
