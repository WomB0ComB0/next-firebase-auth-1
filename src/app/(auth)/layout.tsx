import {  PropsWithChildren } from 'react'
import { CenterLayout } from "@/components/wrapper/index";

export default function AuthLayout({ children }: PropsWithChildren
) {
  return (
    <CenterLayout Element={`div`} className={`h-[90dvh] flex items-center justify-center w-[100dvw]`}>
      {children}
    </CenterLayout>
  );
};