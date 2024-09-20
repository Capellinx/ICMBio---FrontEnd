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
import { Mail } from "lucide-react";
export function ForgotForm() {

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
            <Button type="submit" className="w-full bg-[#1E9E6A] p-4 hover:bg-[#207553] mt-4">
               <Mail className="pr-2"/>
               Enviar 
            </Button>
         </form>
      </Form>
   );
}
