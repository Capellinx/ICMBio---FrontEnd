import { AxiosError } from "axios"
import { api } from "./api"

export enum PersonType {
   PESQUISADOR = "PESQUISADOR",
   CONDUTOR = "CONDUTOR",
   VOLUNTARIO = "VOLUNTARIO",
   ATA = "ATA",
}

export type CreateCollaboratorDTO = {
   name: string
   email: string
   person_type: PersonType
   phone: string
   cpf: string
   password: string
}

export const AuthService = {
   async createCollaborator({ name, email, person_type, phone, cpf, password }: CreateCollaboratorDTO) {
      try {
         const { data } = await api.post("/collaborator", {
            name,
            email,
            person_type,
            phone,
            cpf,
            password,
         })

         return data
      } catch (error) {
         if(error instanceof AxiosError) {
            return error.response?.data
         }
         return error
      }
   }
}
