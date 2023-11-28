"use client"
import { useContext } from 'react';
import { toast } from 'sonner';
import { UserContext } from '@/contexts/UserContext';
import { auth } from '@/firebase/config';
import { GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { TSignInSchema, TSignUpSchema } from '@/lib/auth';


export const onLogin = async () => {
  try {
    "use server"
    await signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      toast.success("Logged in successfully! 🎊");

    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage);
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } catch (error) {

    toast.error("An unexpected error occurred during login");
    console.error(error);
  }
};

export const signUpWithEmailPassword = async (data: TSignUpSchema) => {
  try {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    toast.success("Signed up successfully! 🎉");
  } catch (error: any) {
    toast.error(`Sign-up error: ${error.message || new Error}`);
  }
};

export const signInWithEmailPassword = async (data: TSignInSchema) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    toast.success("Logged in successfully! 🎉");
  } catch (error: any) {
    toast.error(`Sign-in error: ${error.message || new Error}`);
  }
};

export const onLogout = async () => {
  try {
    "use server"
    await signOut(auth);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Logged out successfully! 🎊");

  } catch (error: any) {
    toast.error(`Logout error: ${error.message || new Error}`);
  }
};
