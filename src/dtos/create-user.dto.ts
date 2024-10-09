import { z } from "zod";

const passwordSchema = z.string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Le mot de passe doit contenir au moins un caractère spécial")
    .regex(/\d/, "Le mot de passe doit contenir au moins un chiffre")
    .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule");


export const CreateUserDto = z.object({
    email: z.string().email("Veuillez entrer un email valide"),
    password: passwordSchema,
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
})

export type CreateUserDtoType = z.infer<typeof CreateUserDto>;