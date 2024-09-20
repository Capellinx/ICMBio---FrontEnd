import { z } from "zod";

export const loginSchema = z.object({
   email: z
      .string({ required_error: "O e-mail obrigatório" })
      .email("O e-mail inválido")
      .min(1, "O e-mail obrigatório"),
   password: z
      .string({ required_error: "A senha obrigatória" })
      .min(1, "A senha obrigatória"),
});

export type LoginCreate = z.infer<typeof loginSchema>;
