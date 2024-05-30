"use client";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import { Label } from "@/components/auth/label";
import { Input } from "@/components/auth/input";
import FormContainer from "@/components/auth/formContainer";
import SocialButtons from "@/components/auth/socialButtons";
import SubmitButton from "@/components/auth/submitButton";
import LabelInputContainer from "@/components/auth/labelInputContainer";
import PasswordInput from "@/components/auth/passwordInput";
import { loginSchema } from "@/validatorSchema"; // Ensure this path is correct

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.format();
      setErrors({
        email: fieldErrors.email?._errors[0] || '',
        password: fieldErrors.password?._errors[0] || '',
      });
      return;
    }

    // Clear errors if validation passes
    setErrors({ email: '', password: '' });

    // Proceed with form submission logic
    console.log("Form submitted successfully", formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <FormContainer title="Welcome Back!" subtitle="May the force be with you 🖖">
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <PasswordInput id="password" placeholder="••••••••" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
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
          <span className="text-gray-600">Don't have an account? </span>
          <Link href="/signup" className="text-blue-500 hover:text-blue-700">
            Sign Up
          </Link>
        </div>
      </form>
    </FormContainer>
  );
}
