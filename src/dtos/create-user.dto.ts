import { z } from "zod";


export const CreateUserDto = z.object({
    email: z.string().email("Veuillez entrer un email valide"),
    password: z.string(),
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
});

export type CreateUserDtoType = z.infer<typeof CreateUserDto>;