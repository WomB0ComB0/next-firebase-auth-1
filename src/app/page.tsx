"use client"
import { Hero } from "@/components/layout/index";
import React from 'react'
import { Article, Section, Picture, Menu } from "@/components/template/index";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/wrapper";
import { CustomCard } from "@/components/custom/Card";
import { CustomButton } from "@/components/custom/Button";

export default function Landing() {
  const { user, onLogin, onLogout } = useContext(UserContext)
  return (
    <MaxWidthWrapper>
      <Hero />
      <Section
        className={`
          h-screen w-full flex flex-col justify-center items-center
        `}
      >
        <CustomCard
          logo={true}
          customLogo={
            <>
              <Picture>
                <Image
                  src={user.avatar}
                  alt={`Avatar of ${user.name}`}
                  width={200}
                  height={200}
                  className='rounded-full object-cover'
                />
              </Picture>
            </>
          }
          cardContent={
            <>
              <Article className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl'>Name: {user?.name}</h1>
                <p className='text-2xl'>Email: {user?.email}</p>
              </Article>
            </>
          }
          footerContent={
            <>
              <Menu className={`w-full flex flex-row items-center justify-around gap-4`}>
                <li>
                  <CustomButton
                    className={`
      bg-orange-500 hover:bg-orange-400
    `}
                    onClick={user ? onLogout : onLogin}
                  >
                    {user ? 'Logout' : 'Login'}
                  </CustomButton>

                </li>
                <li>
                  {user && (
                    <CustomButton
                      className={`
      bg-blue-500 hover:bg-blue-400
    `}
                      onClick={onLogin}
                    >
                      Login
                    </CustomButton>
                  )}
                </li>
              </Menu>
            </>
          }
        />
      </Section>
    </MaxWidthWrapper>
  )
}