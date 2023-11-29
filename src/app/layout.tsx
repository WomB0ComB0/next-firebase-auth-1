import { PropsWithChildren } from "react";
import ClientWrapper from "@/components/wrapper/ClientWrapper";
import UserProvider from "@/contexts/UserContext";
import { constructMetadata } from '@/lib/utils';
import Layout from "@/layout/Layout";
import './globals.css';
import Providers from "@/provider/Providers";
import dynamic from 'next/dynamic';
const DynamicTemplate = dynamic(() => import("@/components/effects/template"));
// , { ssr: false }

export const metadata = constructMetadata();

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-a11y-animated-images="system" data-a11y-link-underlines="false" data-turbo-loaded>
      <body>
        <>
          <Providers>
            <DynamicTemplate>
              <UserProvider>
                <ClientWrapper>
                  <Layout>
                    {children}
                  </Layout>
                </ClientWrapper>
              </UserProvider>
            </DynamicTemplate>
          </Providers>
        </>
      </body>
    </html>
  )
}