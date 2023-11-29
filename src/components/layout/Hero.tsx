import React from 'react'
import { Header, Picture, Section, Article, Menu } from '../template/index'
import { CustomButton as Button } from '../custom/Button'
import { Logo } from '../logo'
import { TypeScript } from '../typescipt'
import { Next } from '../next'
import { useRouter } from 'next/navigation'
import { Hint } from '../custom/Hint'

const Hero = () => {
  const components = [Logo, TypeScript, Next]
  const router = useRouter()
  return (
    <Header
      className={`
        h-[80dvh] w-full flex flex-col justify-center items-center bg-background
      `}
    >
      <Section className="flex items-center justify-center h-screen text-white flex-col mx-auto">
        <Picture
          className={`
          relative transition-all select-none animate-pulse hover:animate-none flex items-center justify-center h-56 w-full
          `}
        >
          <Logo width={150} height={150}/>
          <TypeScript width={150} height={150} ContainerClassName={`pl-16`}/>
          <Next ContainerClassName={``}/>
        </Picture>
        <Article className="mt-10 flex flex-col items-center ">
          <h1 className="text-4xl font-bold text-center text-primary">
            Welcome to <span className=" text-slate-950 dark:text-slate-500 underline">Next.js</span> +{' '}
            <span className="text-blue-500 underline">TypeScript</span> +{' '}
            <span className="text-orange-500 underline">Firebase</span>
          </h1>
        </Article>
          <Menu
            className={`
              flex flex-row mt-10 justify-around
              text-center w-full
            `}
          >
            <li>
              <Button
                className={`
                font-bold
                  text-2xl
                  bg-blue-400
                  text-secondary hover:bg-primary hover:text-blue-400
                  h-14 w-40 rounded-md
                `}
                onClick={() => {
                  router.push('/login')
                }}
              >
                Login
              </Button>
            </li>
            <li>
              <Button
                className={` 
                font-bold
                text-2xl
                bg-orange-400
                text-secondary hover:bg-primary hover:text-orange-400
                h-14 w-40 rounded-md`}
                onClick={() => {
                  router.push('/signup')
                }}
                >
                Sign up
              </Button>
            </li>
          </Menu>
      </Section>
    </Header>
  )
}

export default Hero
