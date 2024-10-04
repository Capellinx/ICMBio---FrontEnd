import { PersonType } from "@/services/auth"
import { z } from "zod"

export const registerSchema = z.object({
   name: z
      .string({ required_error: "Nome obrigatório" })
      .min(1, { message: "Nome obrigatório" }),
   email: z
      .string({ required_error: "Email obrigatório" })
      .min(1, { message: "Email obrigatório" })
      .email({ message: "Email inválido" }),
   person_type: z.nativeEnum(PersonType, { required_error: "Tipo de colaborator obrigatório" }),
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
      }, "CPF deve conter apenas números")
      .optional(),
   matricula: z.coerce
      .string({ required_error: "Matricula obrigatória" })
      .min(1, { message: "Matricula obrigatória" })
      .optional()

})