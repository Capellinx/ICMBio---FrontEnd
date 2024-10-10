'use client'

import { registerSchema } from "@/schemas/register"
import { api } from "@/services/api"
import { PersonType } from "@/services/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

export type CreateCollaboratorDTO = {
   name: string
   email: string
   person_type: PersonType
   phone: string
   cpf?: string
   matricula?: string
}

export function useRegisterCollaborator() {
   const route = useRouter()

   const form = useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema),
      mode: 'onBlur',
   });

   const { mutate: handleRegisterCollaborator } = useMutation({
      mutationKey: ['register-collaborator'],
      mutationFn: (payload: CreateCollaboratorDTO) => reigsterCollaborator(payload),
      onMutate: () => {
         toast.loading("Cadastrando colaborador...", {
            toastId: "register-collaborator", 
         });
      },
      onSuccess: () => {
         toast.update("register-collaborator", {
            render: 'Colaborador cadastrado com sucesso!',
            type: "success",
            isLoading: false, 
            autoClose: 2000,
         });
         route.replace('/login');
      },
      onError: () => {
         toast.update("register-collaborator", {
            render: 'Erro ao cadastrar colaborador!',
            type: "error",
            isLoading: false,
            autoClose: 2000,
         });
         form.setError("email", { message: "E-mail já cadastrado" });
      }
   })
   
   async function reigsterCollaborator({ name, email, person_type, phone, cpf, matricula }: CreateCollaboratorDTO) {
      console.log(matricula);
      const { data } = await api.post("/collaborator", {
         name,
         email,
         person_type,
         phone,
         cpf,
         matricula
      })

      return data
   }

   return { handleRegisterCollaborator, form }
}