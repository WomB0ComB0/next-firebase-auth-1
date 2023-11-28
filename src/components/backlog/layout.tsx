import { CenterLayout } from "@/components/wrapper/index";
export const AuthLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <CenterLayout Element={`div`} className={`h-full flex items-center justify-center`}>
      {children}
    </CenterLayout>
  );
};