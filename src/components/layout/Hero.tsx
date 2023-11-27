import React from 'react'
import { Header, Picture, Section, Article } from '../template/index'
import Image from 'next/image'
const Hero = () => {
  return (
    <Header
      className={`
        h-[70dvh] w-full flex flex-col justify-center items-center
      `}
    >
      <Section className="flex items-center justify-center h-screen text-white flex-row">
        <Picture
          className={`
          relative transition-all select-none animate-pulse h-52 w-52
          `}
        >
          <Image
            className="absolute mt-2 transition-all select-none animate-pulse h-52 w-52"
            src="/assets/images/logo.png"
            alt="Loading..."
          />
        </Picture>
        <Article className="mt-10">
          <h1 className="text-4xl font-bold text-center">
            Welcome to <span className="text-blue-500">Next.js</span> +{' '}
            <span className="text-blue-500">TypeScript</span> +{' '}
            <span className="text-orange-500">Firebase</span> +{' '} 
          </h1>
        </Article>
      </Section>
    </Header>
  )
}

export default Hero
