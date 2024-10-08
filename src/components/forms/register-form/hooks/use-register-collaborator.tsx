'use client'

import { api } from "@/services/api"
import { PersonType } from "@/services/auth"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

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

   const { mutate: handleRegisterCollaborator } = useMutation({
      mutationKey: ['register-collaborator'],
      mutationFn: (payload: CreateCollaboratorDTO) => reigsterCollaborator(payload),
      onSuccess: () => {
         toast.success('Conta criada com sucesso!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         })

         // route.replace('/login')
      },
      onError: () => {
         toast.error('Falha ao criar a conta!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         })
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

   return { handleRegisterCollaborator }
}