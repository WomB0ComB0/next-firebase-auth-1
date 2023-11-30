import React from 'react'

import { Logo } from '../logo'
import { CustomCard as Card } from '../custom/Card'
import dynamic from "next/dynamic"
export const DynamicTemplate = dynamic(() => import("@/components/effects/template"));

const AuthContainer = ({ cardContent, title, buttonText }: { cardContent: React.ReactNode, title: AuthTitle, buttonText: string}) => {
  return (
    <>
    <Card
      className={'w-fit flex flex-col justify-between items-center bg-slate-400/10 select-none'}
      logo={true}
      customLogo={
        <Logo ImageClassName={``} ContainerClassName={``} height={80} width={80}/>
      }
      title={title}
      cardContent={cardContent}
    />
    </>
  )
}

export default AuthContainer
