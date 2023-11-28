'use client'

import { useEffect } from 'react'
import { CenterLayout } from '@/components/wrapper'
import { Article } from '@/components/template'
import { CustomButton } from '@/components/custom/Button'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <CenterLayout Element={`main`}>
        <Article className={`w-2/6 flex flex-col justify-between items-center`} >
          <h2>Something went wrong!</h2>
          <CustomButton
            onClick={
              () => reset()
            }
          >
            Try again
          </CustomButton>
        </Article>
      </CenterLayout>
    </>
  )
}