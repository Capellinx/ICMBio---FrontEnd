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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginCreate, loginSchema } from "@/schemas/login";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function LoginForm() {
   const [isShowPassword, setIsShowPassword] = useState(false);

   const form = useForm<LoginCreate>({
      resolver: zodResolver(loginSchema),
   });

   function submit(values: LoginCreate) {
      console.log(values);
   }

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
