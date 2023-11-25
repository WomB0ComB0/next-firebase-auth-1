import './globals.css'
import type { AppProps } from 'next/app'
import ClientWrapper from '../components/ClientWrapper'
import UserProvider from '../contexts/UserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
        <ClientWrapper>
          <Component {...pageProps} />
        </ClientWrapper>
      </UserProvider>
  )
}
