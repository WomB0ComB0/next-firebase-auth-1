"use client"
import { toast } from 'sonner';
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { TSignInSchema, TSignUpSchema } from '@/lib/auth';

export const useSignUpWithEmailPassword = async (data: TSignUpSchema) => {
  try {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    toast.success("Signed up successfully! 🎉");
  } catch (error: any) {
    console.error(error);
    toast.error(`Sign-up error: ${error.message || new Error}`);
  }
};

export const useSignInWithEmailPassword = async (data: TSignInSchema) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log(data);
    toast.success("Logged in successfully! 🎉");
  } catch (error: any) {
    console.error(error);
    toast.error(`Sign-in error: ${error.message || new Error}`);
  }
};
