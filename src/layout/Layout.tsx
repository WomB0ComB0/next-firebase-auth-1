import React, { PropsWithChildren } from 'react'
import { Main } from '@/components/template/index'
import { Footer } from '@/components/layout/index'
import { Navbar } from '@/components/nav/navbar'
const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Navbar />
      
      <Main className={`
        flex flex-col items-center justify-center
        w-full h-fit my-auto
      `}>
        {children}
      </Main>
      <Footer />
    </>
  )
}

export default Layout
