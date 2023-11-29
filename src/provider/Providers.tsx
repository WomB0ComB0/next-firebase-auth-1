"use client"
import { PropsWithChildren, FC } from 'react'
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="Next-Firebase">
      <Toaster />
      {children}
    </ThemeProvider>
  </>
)

export default Providers;