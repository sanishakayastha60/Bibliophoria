import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Name must have at least 1 character").trim(),
  email: z.string().email("Invalid email address").toLowerCase().trim(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
