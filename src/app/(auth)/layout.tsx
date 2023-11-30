import {  PropsWithChildren } from 'react'
import { CenterLayout } from "@/components/wrapper/index";
import dynamic from "next/dynamic"
export const DynamicTemplate = dynamic(() => import("@/components/effects/template"));

export default function AuthLayout({ children }: PropsWithChildren
) {
  return (
    <DynamicTemplate>
      <CenterLayout Element={`section`} className={`h-fit flex items-center justify-center w-[100dvw]`}>
        {children}
      </CenterLayout>
    </DynamicTemplate>
  );
};