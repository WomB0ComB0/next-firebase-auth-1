"use client"

import { auth } from '../../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { PropsWithChildren, FC, useEffect, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { toast } from 'sonner'

const ClientWrapper: FC<PropsWithChildren> = ({children}) => {
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setUser({
          id: uid,
          name: user.displayName ? user.displayName :  '',
          email: user.email!,
          avatar: user.photoURL ? user.photoURL : '',
        });
        toast.success(`Signed in as ${user.email}`)
      } else {
        toast.error('You\'re not signed in')
      }
    });
  }, [setUser])
  return (
    <div className={`h-full flex justify-center items-center flex-col`}>
      {children}
    </div>
  )
}

export default ClientWrapper