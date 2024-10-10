import { z } from "zod";


export const SetLogDto = z.object({
   ean: z.string(),
})

export type SetLogDtoType = z.infer<typeof SetLogDto>;