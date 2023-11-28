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

import { CustomButton } from "@/components/custom/Button"

const Login: NextPage = () => {
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
                <CustomButton disabled={form.formState.isSubmitting} onClick={onLogin}>Login with Google</CustomButton>
              </form>
            </Form>
          </>
      } />
    </>
  )
}
export default Login