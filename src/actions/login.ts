"use server"
import { z } from 'zod';
import { loginSchema } from '@/validatorSchema';

export const login = async (values: z.infer<typeof loginSchema>) =>{
    const validatedFields = loginSchema.safeParse(values)

    if(!validatedFields.success){
        return {error :"Invalid Fields"}
    }
    return {success:"Login Success"}
    console.log(values)
}
