"use client"

import { auth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { PropsWithChildren, FC, useEffect } from 'react'


const ClientWrapper: FC<PropsWithChildren> = ({children}) => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        console.log('user is signed in', uid)
      } else {
        console.log('user is not signed in')
      }
    });
  }, [])
  
  return (
    <div>
      {children}
    </div>
  )
}

export default ClientWrapper