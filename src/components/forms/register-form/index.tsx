'use client'

import { Input } from "@/components/ui/input";
import { registerSchema } from "@/schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { EyeOff, Eye } from 'lucide-react';
import { useState } from "react";
import { cpfMask } from "@/functions/cpf-mask";
import { phoneMask } from "@/functions/phone-mask";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { AuthService } from "@/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export function RegisterForm() {
   const [isShowPassword, setIsShowPassword] = useState(false)

   const router = useRouter()

   const form = useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema),
      mode: 'onBlur',
      defaultValues: {
         cpf: '',
         phone: '',
      }
   });

   async function submit({ name, email, person_type, phone, cpf, password }: z.infer<typeof registerSchema>) {
      const data = await AuthService.createCollaborator({
         name,
         email,
         person_type,
         phone,
         cpf,
         password
      })


      if (data?.error) {
         form.setError('email', { message: 'Email ja existe' })
         return
      }

      toast.success("Cadastrado com sucesso!", {
         autoClose: 2500,
      });

      router.replace('/login')
   }

   function handleExternalSubmit() {
      form.handleSubmit(submit)();
   };

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(submit)}>
            <section className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full mb-4">

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
                  name="cpf"
                  render={({ field: { onChange, ...props } }) => (
                     <FormItem>
                        <FormLabel>CPF</FormLabel>
                        <FormControl>
                           <Input
                              onChange={(e) => {
                                 const { value } = e.target
                                 e.target.value = cpfMask(value)

                                 onChange(e)
                              }}
                              placeholder="000.000.000-00"
                              {...props}
                           />
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
                  name="password"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                           <div className="relative">
                              <Input type={isShowPassword ? 'text' : 'password'} {...field} className="pr-10" />
                              {isShowPassword
                                 ? <Eye
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-4 "
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                 />
                                 : <EyeOff

                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-4 "
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                 />
                              }
                           </div>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Confirmar Senha</FormLabel>
                        <FormControl>
                           <div className="relative">
                              <Input type={isShowPassword ? 'text' : 'password'} {...field} className="pr-10" />
                              {isShowPassword
                                 ? <Eye
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-4 "
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                 />
                                 : <EyeOff

                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-4 "
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                 />
                              }
                           </div>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </section>

            <FormField
               control={form.control}
               name="person_type"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Tipo de usuário</FormLabel>
                     <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                           <SelectTrigger className="">
                              <SelectValue placeholder="Selecione o tipo" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value="PESQUISADOR">Pesquisador(a)</SelectItem>
                              <SelectItem value="CONDUTOR">Condutor(a)</SelectItem>
                              <SelectItem value="VOLUNTARIO">Voluntario(a)</SelectItem>
                              <SelectItem value="ATA">Agente temporário ambiental</SelectItem>
                           </SelectContent>
                        </Select>
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
         </form>
         <Button
            type="submit"
            className="w-full bg-[#1E9E6A] p-4 hover:bg-[#207553] mt-4"
            onClick={() => handleExternalSubmit()}
         >
            Cadastrar
         </Button>
      </Form>
   )
}
