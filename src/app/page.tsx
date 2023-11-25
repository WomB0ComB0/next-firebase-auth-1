"use client"
import { auth } from '@/firebase/config'
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth'

// Note: use redux  to store all the data and use it all across the application
export default function Home() {
  // With popup
  const onLogin = async () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user
        console.log('user', user)
      }).catch((error) => {
        console.log('error', error)
      });
  }
  // const onLogin = async () =>  {
  //   const provider = new GoogleAuthProvider()

  //   try {
  //     const res = await signInWithRedirect(auth, provider)
  //     console.log('res', res)
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // }
  const onLogout = () => {
    signOut(auth);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex justify-center items-center gap-4'>
        <button className='p-2 px-4 rounded-md bg-red-400' onClick={onLogout}>Log out</button>
        <button className='p-2 px-4 rounded-md bg-indigo-400' onClick={onLogin}>Log in</button>
      </div>
    </main>
  )
}
