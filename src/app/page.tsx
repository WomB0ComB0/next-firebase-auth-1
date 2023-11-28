"use client"
import { Hero } from "@/components/layout/index";
import React from 'react'
import { Article, Section, Picture } from "@/components/template/index";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/wrapper";
export default function Landing () {
  const { user } = useContext(UserContext)
  return (
    <MaxWidthWrapper>
      <Hero />
      <Section
        className={`
          h-screen w-full flex flex-col justify-center items-center
        `}
      >
        <Picture>
          <Image
            src={user.avatar}
            alt={`Avatar of ${user.name}`}
            width={200}
            height={200}
            className='rounded-full'
          />
        </Picture>
        <Article className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl'>Name: {user?.name}</h1>
          <p className='text-2xl'>Email: {user?.email}</p>
        </Article>
      </Section>
    </MaxWidthWrapper>
  )
}