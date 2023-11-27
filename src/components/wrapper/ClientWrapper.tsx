"use client"

import { auth } from '../../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { PropsWithChildren, FC, useEffect, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'


const ClientWrapper: FC<PropsWithChildren> = ({children}) => {
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        console.log('user is signed in', uid)
        setUser({
          id:  uid,
          name: user.displayName!,
          email: user.email!,
          avatar: user.photoURL!,
        })
      } else {
        console.log('user is not signed in')
      }
    });
  }, [setUser])
  return (
    <div>
      {children}
    </div>
  )
}

export default ClientWrapper