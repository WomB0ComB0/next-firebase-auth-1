import {  PropsWithChildren } from 'react'
import { CenterLayout } from "@/components/wrapper/index";

export default function AuthLayout({ children }: PropsWithChildren
) {
  return (
    <CenterLayout Element={`div`} className={`h-full flex items-center justify-center`}>
      {children}
    </CenterLayout>
  );
};