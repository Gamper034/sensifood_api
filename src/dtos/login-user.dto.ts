import { z } from "zod";


export const LoginuserDto = z.object({
    email: z.string().email("Veuillez entrer un email valide").nonempty("L'email est requis"),
    password: z.string().min(1, "Le mot de passe est requis"),
})

export type LoginUserDtoType = z.infer<typeof LoginuserDto>;