import Image from "next/image"
import Link from "next/link"

import logo from "@/public/svg/logo.svg"
import { LoginForm } from './../../../components/forms/login-form/index';

export default function Login() {

   return (
      <div className="w-full lg:grid  lg:grid-cols-2 h-screen">
         <div className="bg-[#F3FFF2] hidden  lg:flex lg:items-center lg:justify-center">
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
               <LoginForm />
               <div className="mt-4 text-center text-sm">
                  Ainda não possui uma conta?{" "}
                  <Link href="/register" className="underline">
                     Registre-se
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
