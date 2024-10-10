'use client'

import { Input } from "@/components/ui/input";
import { registerSchema } from "@/schemas/register";
import { Control } from "react-hook-form";
import { z } from "zod";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { phoneMask } from "@/functions/phone-mask";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { FormCondutor, FormValues } from "./fragments/form-condutor";
import { FormPesquisador, FormValuesPesquisador } from "./fragments/form-pesquisador";
import { useRegisterCollaborator } from "./hooks/use-register-collaborator";
import { FormAnalista, FormAta } from "./fragments";


export function RegisterForm() {
   const { handleRegisterCollaborator, form } = useRegisterCollaborator()

   const personType = form.watch('person_type')

   async function submit({ name, email, person_type, phone, cpf, matricula }: z.infer<typeof registerSchema>) {
      handleRegisterCollaborator({
         name,
         email,
         person_type,
         phone,
         cpf,
         matricula
      });
   }

   function handleExternalSubmit() {
      form.handleSubmit(submit)();
   };

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(submit)}>
            <section className="flex flex-col gap-4">

               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                           <Input placeholder="Digite seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input placeholder="example@mail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />


               <FormField
                  control={form.control}
                  name="phone"
                  render={({ field: { onChange, ...porps } }) => (
                     <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                           <Input
                              onChange={(e) => {
                                 const { value } = e.target
                                 e.target.value = phoneMask(value)
                                 onChange(e)
                              }}
                              placeholder="(00) 00000-0000"
                              {...porps}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="person_type"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Tipo de usuário</FormLabel>
                        <FormControl>
                           <Select value={field.value} onValueChange={field.onChange}>
                              <SelectTrigger className="">
                                 <SelectValue placeholder="Selecione o tipo" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectItem value="ANALISTA">Analista</SelectItem>
                                 <SelectItem value="ATA">Agente temporário ambiental (ATA)</SelectItem>
                                 <SelectItem value="CONDUTOR">Condutor(a)</SelectItem>
                                 <SelectItem value="PESQUISADOR">Pesquisador(a)</SelectItem>
                              </SelectContent>
                           </Select>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </section>

            {personType === "CONDUTOR" && (
               <FormCondutor
                  control={form.control as Control<FormValues>}
               />
            )}

            {personType === "PESQUISADOR" && (
               <FormPesquisador
                  control={form.control as Control<FormValuesPesquisador>}
               />
            )}

            {personType === "ANALISTA" && (
               <FormAnalista
                  control={form.control as Control<FormValues>}
               />
            )}

            {personType === "ATA" && (
               <FormAta
                  control={form.control as Control<FormValues>}
               />
            )}


         </form>
         <Button
            type="button"
            className="w-full bg-[#1E9E6A] p-4 hover:bg-[#207553] mt-4"
            onClick={() => handleExternalSubmit()}
         >
            Cadastrar
         </Button>
      </Form>
   )
}
