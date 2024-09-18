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
import InputMask from "react-input-mask"
import { EyeOff, Eye } from 'lucide-react';
import { useState } from "react";

export function RegisterForm() {
   const [isShowPassword, setIsShowPassword] = useState(false)

   const form = useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema),
      mode: 'onBlur',
   });

   function handleSubmit(data: z.infer<typeof registerSchema>) {
      console.log(data);
   }

   function handleExternalSubmit() {
      form.handleSubmit(handleSubmit)();
   };

   return (
      <Form {...form}>
         <form className="grid gap-4 grid-cols-2 w-full" onSubmit={form.handleSubmit(handleSubmit)}>
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
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>CPF</FormLabel>
                     <FormControl>
                        <InputMask
                           mask="999.999.999-99"
                           value={field.value}
                           onChange={field.onChange}
                           onBlur={field.onBlur}
                        >
                           {() => <Input placeholder="000.000.000-00" {...field} />}
                        </InputMask>
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name="phone"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Telefone</FormLabel>
                     <FormControl>
                        <InputMask
                           mask={'(99) 99999-9999'}
                           value={field.value}
                           onChange={field.onChange}
                           onBlur={field.onBlur}
                        >
                           {() => <Input placeholder="(99) 99999-9999" {...field} />}
                        </InputMask>
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
