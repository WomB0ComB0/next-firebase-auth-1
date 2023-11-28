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
import { TSignUpSchema, signUpSchema } from "@/lib/auth"
import AuthContainer from "@/components/auth/AuthContainer"
import { NextPage } from "next"
import { FormSubmit as FormButton } from "@/components/form/form-submit"
import { signUpWithEmailPassword } from "@/utils"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

const SignUp: NextPage = () => {
  const [capVal, setCapVal] = useState<string | null>(null);
  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <>
      <AuthContainer
        title={`Sign Up`}
        buttonText="SignUp"
        cardContent={
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(signUpWithEmailPassword)} className="space-y-8">
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
                <FormField
                  control={form.control}
                  name={`confirmPassword`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Re-enter your password" type={`password`} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ReCAPTCHA
                  className={`w-full flex items-center justify-center`}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={(val: string | null) => {setCapVal(val)}}
                />
                <FormButton
                  className={`w-full`}
                  disabled={form.formState.isSubmitting && !capVal}
                >
                  Sign Up
                </FormButton>
              </form>
            </Form>
          </>
        } />
    </>
  )
}
export default SignUp