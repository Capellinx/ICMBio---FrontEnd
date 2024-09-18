import { z } from "zod"

export const registerSchema = z.object({
   name: z
      .string({ required_error: "Nome obrigatório" })
      .min(1, { message: "Nome obrigatório" }),
   email: z
      .string({ required_error: "Email obrigatório" })
      .min(1, { message: "Email obrigatório" })
      .email({ message: "Email inválido" }),
   phone: z.coerce
      .string({ required_error: "Telefone obrigatório" })
      .min(1, { message: "Telefone obrigatório" }),
   cpf: z.coerce
      .string({ required_error: "CPF obrigatório" })
      .min(1, { message: "CPF obrigatório" })
      .max(14, { message: "CPF inválido" }),
   password: z
      .string({ required_error: "Senha obrigatória" })
      .min(1, { message: "Senha obrigatória" }),
   confirmPassword: z
      .string({ required_error: "Confirmar Senha obrigatória" })
      .min(1, { message: "Confirmar Senha obrigatória" })
}).refine(({ password, confirmPassword }) => {
   return password === confirmPassword
},
   {
      message: "Senhas diferentes",
      path: ["confirmPassword"]
   }
)