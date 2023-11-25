import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

export type User = {
  name: string
  email: string
}

export interface UserContextInterface {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

const defaultState: UserContextInterface = {
  user: {
    name: '',
    email: '',
  },

  setUser: (_user: User) => {
  },
} as UserContextInterface

export const UserContext = createContext(defaultState)

type UserProviderProps = {
  children: ReactNode
}

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}