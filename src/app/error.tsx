'use client'

import { useEffect } from 'react'
import { CenterLayout } from '@/components/wrapper'
import { Article } from '@/components/template'
import { CustomButton } from '@/components/custom/Button'
import { CustomCard } from '@/components/custom/Card'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () =>  void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <CenterLayout Element={`main`} className={`h-screen`}>
        <CustomCard
          className={`
            bg-slate-400/10
          `}
          cardContent={
            <>
              <Article className={`w-full flex flex-col justify-between items-center`} >
                <h2>Something went wrong!</h2>
              </Article>

            </>
          }
          footerContent={
            <>
              <CustomButton
                onClick={
                  () => reset()
                }
                variant={`destructive`}
              >
                Try again
              </CustomButton>

            </>
          }
        />
      </CenterLayout>
    </>
  )
}