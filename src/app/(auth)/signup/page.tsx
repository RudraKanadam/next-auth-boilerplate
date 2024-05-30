// app/signup/page.tsx
"use client";
import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import { Label } from "@/components/auth/label";
import { Input } from "@/components/auth/input";
import FormContainer from "@/components/auth/formContainer";
import SocialButtons from "@/components/auth/socialButtons";
import SubmitButton from "@/components/auth/submitButton";
import LabelInputContainer from "@/components/auth/labelInputContainer";
import PasswordInput from "@/components/auth/passwordInput";
import { signupSchema } from "@/validatorSchema"; // Ensure this path is correct
import { z } from "zod";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = signupSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.format();
      setErrors({
        name: fieldErrors.name?._errors[0] || '',
        email: fieldErrors.email?._errors[0] || '',
        password: fieldErrors.password?._errors[0] || '',
      });
      return;
    }

    // Clear errors
    setErrors({ name: '', email: '', password: '' });

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
    <FormContainer title="Join Boilerplate" subtitle="May the force be with you 🖖">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Tyler" type="text" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </LabelInputContainer>
        </div>
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
        <SubmitButton type="submit">Sign up &rarr;</SubmitButton>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <SocialButtons />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="mt-4 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </div>
      </form>
    </FormContainer>
  );
}
