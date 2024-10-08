'use client'

import { Input } from "@/components/ui/input";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useLoginForm } from "./hooks/use-login-form";
import Link from "next/link";
import { LoginCreate } from "@/schemas/login";


export function LoginForm() {
   const [isShowPassword, setIsShowPassword] = useState(false)

   const { login, form } = useLoginForm()

   function submit({ email, password }: LoginCreate) {
      login({
         email,
         password
      })
   }

   // async function submit({ email, password }: LoginCreate) {
   //    const result = await signIn("credentials", {
   //       email,
   //       password,
   //       redirect: false
   //    })

   //    if(result?.error){
   //       console.log(result?.error)
   //       return   
   //    }

   //    router.replace("/dashboard")
   // }

   return (
      <Form {...form}>
         <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(submit)}>
            <div className="grid gap-2">
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                           <Input placeholder="example@mail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
            <div className="grid gap-2">
               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                           <div className="relative">
                              <Input type={isShowPassword ? 'text' : 'password'} {...field} className="pr-10" />
                              {isShowPassword ? (
                                 <Eye
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-4"
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                 />
                              ) : (
                                 <EyeOff
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-4"
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                 />
                              )}
                           </div>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <div className="flex items-center">
                  <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                     Esqueceu sua senha?
                  </Link>
               </div>
            </div>
            <Button type="submit" className="w-full bg-[#1E9E6A] p-4 hover:bg-[#207553] mt-4">
               Entrar
            </Button>
         </form>
         <Button variant="outline" className="w-full">
            Login institucional
         </Button>
      </Form>
   );
}
