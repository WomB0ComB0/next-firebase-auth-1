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

import { onLogin, signInWithEmailPassword } from "@/utils"

import ReCAPTCHA from 'react-google-recaptcha'
import { CustomButton } from "@/components/custom/Button"
import { useState } from "react"

const Login: NextPage = () => {
const [capVal, setCapVal] = useState<string | null>(null);
  const form = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  return (
    <>
      <AuthContainer
        title={`Sign In`}
        buttonText="SignIn"
        cardContent={
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(signInWithEmailPassword)} className="space-y-8">
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
                  onClick={onLogin}
                  className={`w-full`}
                >
                  Login with Google
                </CustomButton>
              </form>
            </Form>
          </>
      } />
    </>
  )
}
export default Login