import { z } from "zod"

export const registerSchema = z.object({
   name: z
      .string({ required_error: "Nome obrigatório" })
      .min(1, { message: "Nome obrigatório" }),
   email: z
      .string({ required_error: "Email obrigatório" })
      .min(1, { message: "Email obrigatório" })
      .email({ message: "Email inválido" }),
   type_person: z.enum(["Pesquisador(a)", "Condutor(a)", "Voluntario(a)"], { required_error: "Tipo obrigatório" }),
   phone: z.coerce
      .string({ required_error: "Telefone obrigatório" })
      .min(1, { message: "Telefone obrigatório" }),
   cpf: z.coerce
      .string({ required_error: "CPF obrigatório" })
      .min(1, { message: "CPF obrigatório" })
      .max(14, { message: "CPF inválido" })
      .refine((value) => {
         const replaceDoc = value.replace(/\D/g, "")
         return !!Number(replaceDoc)
      }, "CPF deve conter apenas números"),
   password: z
      .string({ required_error: "Senha obrigatória" })
      .min(1, { message: "Senha obrigatória" })
      .regex(/[0-9]+/, "É necessário pelo menos um numero")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/[^A-Za-z0-9]/, "É necessário pelo menos um caracter especial"),
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