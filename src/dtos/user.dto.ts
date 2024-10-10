import { z } from 'zod';

// Schéma Zod pour Allergen
export const AllergenDto = z.object({
    id: z.number(),
    name: z.string(),
    id_categorie: z.number(),
    // Vous pouvez ajouter d'autres champs si nécessaire
});

// Schéma Zod pour User
export const UserDto = z.object({
    id: z.number(),
    email: z.string().email(),
    name: z.string(),
    age: z.number().nullable(),
    gender: z.string().nullable(),
    allergens: z.array(AllergenDto), // Inclure les allergènes avec leurs détails
});

// TypeScript types pour les DTOs
export type AllergenDtoType = z.infer<typeof AllergenDto>;
export type UserDtoType = z.infer<typeof UserDto>;