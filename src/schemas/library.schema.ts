import { z } from "zod";
import { Reread } from "@/generated/prisma/enums";
export const createLibrarySchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  review: z.string().optional(),
  reread: z.enum(Reread).optional(),
  genreName: z.string().optional(),
  typeName: z.string().optional(),
  imageUrl: z.string().url("Invalid Image URL").optional(),
});

export type createLibraryInput = z.infer<typeof createLibrarySchema>;
