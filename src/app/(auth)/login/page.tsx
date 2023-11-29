"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import AuthContainer from "@/components/auth/AuthContainer"
import { NextPage } from "next"
import { TSignInSchema, signInSchema } from "@/lib/auth"

import { useSignInWithEmailPassword } from "@/utils"

import ReCAPTCHA from 'react-google-recaptcha'
import { CustomButton } from "@/components/custom/Button"
import { useContext, useState } from "react"
import { UserContext } from "@/contexts/UserContext"
import Link from "next/link"
import { useRouter } from  'next/navigation'

const Login: NextPage = () => {
  const { onLogin } = useContext(UserContext);
const [capVal, setCapVal] = useState<string | null>(null);
  const form = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter()
  return (
    <>
      <AuthContainer
        title={`Sign In`}
        buttonText="SignIn"
        cardContent={
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(useSignInWithEmailPassword)} className="space-y-8">
                <FormField
                  control={form.control}
                  name={`email`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter your email" type={`email`} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`password`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter your password" type={`password`} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ReCAPTCHA
                  className={`w-full flex items-center justify-center rounded-md h-fit`}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={(val: string | null) => {setCapVal(val)}}
                />
                <CustomButton
                  disabled={form.formState.isSubmitting && !capVal}
                  onClick={() => {
                    useSignInWithEmailPassword
                    router.push('/')
                  }}
                  className={`w-full`}
                >
                  Login
                </CustomButton>                
                <CustomButton
                  disabled={form.formState.isSubmitting && !capVal}
                  onClick={onLogin}
                  className={`w-full`}
                >
                  Login with Google
                </CustomButton>
                <p
                  className={`
                    text-sm text-center text-primary
                  `}
                >
                  Don&apos;t have an account?{" "}
                  <Link href="/signup"
                    className="text-blue-500 hover:text-blue-400 underline"
                  >
                    <>
                      Sign Up
                    </>
                  </Link>
                </p>
              </form>
            </Form>
          </>
      } />
    </>
  )
}
export default Login