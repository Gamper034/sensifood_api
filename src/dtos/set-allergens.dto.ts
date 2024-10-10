import { z } from 'zod';

export const SetAllergensDto = z.object({
    allergens: z.array(z.number()),
});

// TypeScript type for the DTO
export type SetAllergensDtoType = z.infer<typeof SetAllergensDto>;