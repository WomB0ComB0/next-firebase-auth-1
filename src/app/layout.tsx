import { PropsWithChildren } from "react";
import ClientWrapper from "@/components/wrapper/ClientWrapper";
import UserProvider from "@/contexts/UserContext";
import { Toaster } from "sonner";
import { constructMetadata } from '@/lib/utils';
import { MaxWidthWrapper } from "@/components/wrapper/index";

export const metadata = constructMetadata();

export default function RootLayout ({
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <MaxWidthWrapper>
          <UserProvider>
            <ClientWrapper>
              <Toaster />
              {children}  
            </ClientWrapper>
          </UserProvider>
        </MaxWidthWrapper>
      </body>
    </html>
  )
}