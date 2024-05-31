"use server";
import { z } from "zod";
import { signupSchema } from "@/validatorSchema";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const signup = async (values: z.infer<typeof signupSchema>) => {
  const validatedFields = signupSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password } = values;

  try {
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: "Email already in use" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Generate a session token or JWT here
    // TODO SEND VERIFICATION EMAIL

    return { success: "Signup success! Please Sign-In" };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred during signup" };
  }
  console.log(name, email, password);
};
