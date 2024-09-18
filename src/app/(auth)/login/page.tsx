import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import logo from "@/public/logo.svg"

export const description =
   "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export default function Login() {
   return (
      <div className="w-full lg:grid  lg:grid-cols-2 h-screen">
         <div className="bg-[#F3FFF2] flex items-center justify-center">
            <Image
               src={logo}
               alt="Image"
               width={500}
               height={500}
            />
         </div>
         <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
               <div className="grid gap-2 text-center">
                  <p className="text-balance text-muted-foreground text-left">
                     Seja Bem vindo!
                  </p>
                  <h1 className="text-3xl font-bold text-left ">Faça login na sua conta</h1>
               </div>
               <div className="grid gap-4">
                  <div className="grid gap-2">
                     <Label htmlFor="email">Email</Label>
                     <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                     />
                  </div>
                  <div className="grid gap-2">
                     <Label htmlFor="password">Password</Label>
                     <Input id="password" type="password" required />
                     <div className="flex items-center">
                        <Link
                           href="/forgot-password"
                           className="ml-auto inline-block text-sm underline"
                        >
                           Esqueceu sua senha?
                        </Link>
                     </div>
                  </div>
                  <Button type="submit" className="w-full bg-[#1E9E6A] p-4 hover:bg-[#207553]">
                     Entrar
                  </Button>
                  <Button variant="outline" className="w-full">
                     Login institucional
                  </Button>
               </div>
               <div className="mt-4 text-center text-sm">
                  Ainda não possui uma conta?{" "}
                  <Link href="#" className="underline">
                     Registre-se
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
