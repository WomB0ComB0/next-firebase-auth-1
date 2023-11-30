import React from 'react'
import { Footer as Foot } from '../template/index'
import { siteConfig } from '@/config/site'
const Footer = () => {
  const CurrentYear = new Date().getFullYear()
  const CopyRightYear = `2021-${CurrentYear}`
  const copyRight: string = `©Copyright ${CopyRightYear} ${siteConfig.author}`
  return (
    <Foot
      className={`
        fixed bottom-0 w-full
      `}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full max-w-screen-xl px-2.5 md:px-20">
          <div className="flex flex-col items-center justify-center w-full py-6">
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              {copyRight}
            </p>
          </div>
        </div>
      </div>
    </Foot>
  )
}

export default Footer