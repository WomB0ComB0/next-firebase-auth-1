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
import { useSignUpWithEmailPassword } from "@/utils"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Link from "next/link"
import { CustomButton } from "@/components/custom/Button"

const SignUp: NextPage = () => {
  const [capVal, setCapVal] = useState<string | null>(null);
  const defaultValues: TSignUpSchema = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema), defaultValues,
  });
  const useSignUpHook = useSignUpWithEmailPassword;
  
  // const { user, setUser } = useContext(UserContext);
    //   setUser({
    //   id: user.id,
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    //   // Dropzone, firestore, uoloadthing, cloudinary, whatever
    //   avatar: '/assets/images/NoImage.jpg',
    // });
  return (
    <>
      <AuthContainer
        title={`Sign Up`}
        buttonText="SignUp"
        cardContent={
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(useSignUpHook)} className="space-y-8">
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
                  onChange={(val: string | null) => { setCapVal(val) }}
                />
                <CustomButton
                  className={`w-full`}
                  onClick={() => {useSignUpHook}}
                  disabled={form.formState.isSubmitting && !capVal}
                >
                  Sign Up
                </CustomButton>
                <p
                  className={`
                    text-sm text-center text-primary
                  `}
                >
                  Already have an account?{" "}
                  <Link href="/login"
                    className="text-blue-500 hover:text-blue-400 underline"
                  >
                    <>
                      Login
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
export default SignUp