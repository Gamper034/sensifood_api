import { z } from 'zod';

// Schéma Zod pour Allergen
export const AllergenDto = z.object({
    id: z.number(),
    name: z.string(),
    id_categorie: z.number(),
    // Vous pouvez ajouter d'autres champs si nécessaire
});

// Schéma Zod pour Alternative
export const AlternativeDto = z.object({
    allergens: z.array(AllergenDto), // Tableau d'allergènes
    category: z.string(), // Chaîne de caractères pour la catégorie
});

// TypeScript types pour les DTOs
export type AllergenDtoType = z.infer<typeof AllergenDto>;
export type AlternativeDtoType = z.infer<typeof AlternativeDto>;