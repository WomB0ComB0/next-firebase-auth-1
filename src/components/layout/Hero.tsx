import React from 'react'
import { Header, Picture, Section, Article, Menu } from '../template/index'
import Image from 'next/image'
import { CustomButton as Button } from '../custom/Button'
const Hero = () => {
  return (
    <Header
      className={`
        h-[80dvh] w-full flex flex-col justify-center items-center bg-background border-b-2
      `}
    >
      <Section className="flex items-center justify-center h-screen text-white flex-col mx-auto">
        <Picture
          className={`
          relative transition-all select-none animate-pulse h-80 w-80 mx-auto flex items-center justify-center
          `}
        >
          <Image
            className="absolute mt-2 transition-all select-none animate-pulse h-52 w-52 rounded-full"
            src="/assets/images/logo.png"
            alt="Loading..."
            width={200}
            height={200}
          />
        </Picture>
        <Article className="mt-10 flex flex-col items-center ">
          <h1 className="text-4xl font-bold text-center text-primary">
            Welcome to <span className=" text-slate-950 underline">Next.js</span> +{' '}
            <span className="text-blue-500 underline">TypeScript</span> +{' '}
            <span className="text-orange-500 underline">Firebase</span>
          </h1>
          <Menu
            className={`
               flex flex-row mt-10 justify-between w-1/2
               text-center
            `}
          >
            <li>
              <Button
                className={`
                font-bold
                  text-2xl
                  bg-blue-400
                  text-secondary hover:bg-primary hover:text-blue-400
                  h-16 w-40 rounded-md
                `}
                onClick={() => {
                  window.location.href = '/login'
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
                  h-16 w-40 rounded-md`}
                onClick={() => {
                  window.location.href = '/signup'
                }}
              >
                Sign up
              </Button>
            </li>
          </Menu>
        </Article>
      </Section>
    </Header>
  )
}

export default Hero
