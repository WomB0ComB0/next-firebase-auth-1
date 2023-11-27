"use client"
import { createContext, useState } from 'react'

const defaultState: UserContextInterface = {
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    avatar: ''
  },

  setUser: (_user: User) => {
  },
} as UserContextInterface

export const UserContext = createContext(defaultState)

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    password: '',
    avatar: ''
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}