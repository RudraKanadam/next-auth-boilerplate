"use client";
import React from "react";
import Link from "next/link";
import { Label } from "@/components/auth/label";
import { Input } from "@/components/auth/input";
import FormContainer from "@/components/auth/formContainer";
import SocialButtons from "@/components/auth/socialButtons";
import SubmitButton from "@/components/auth/submitButton";
import LabelInputContainer from "@/components/auth/labelInputContainer";
import PasswordInput from "@/components/auth/passwordInput";

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <FormContainer title="Welcome Back!" subtitle="May the force be with you 🖖">
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <PasswordInput id="password" placeholder="••••••••" />
        </LabelInputContainer>
        <div className="mt-4 mb-2 text-right">
          <Link href="/forgot-password" className="text-blue-500 hover:text-blue-700">
            Forgot Password?
          </Link>
        </div>
        <SubmitButton type="submit">Login &rarr;</SubmitButton>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <SocialButtons />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="mt-4 text-center">
          <span className="text-gray-600">Don&apos;t have an account? </span>
          <Link href="/signup" className="text-blue-500 hover:text-blue-700">
            Sign Up
          </Link>
        </div>
      </form>
    </FormContainer>
  );
}
