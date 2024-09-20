import Image from "next/image"
import Link from "next/link"

import logo from "@/public/svg/logo.svg"
import { ForgotForm } from "@/components/forms/forgot-form"

export default function ForgotPassword() {

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
                  <h1 className="text-3xl font-bold text-left ">Esqueceu sua senha?</h1>
                  <span className="text-left">Não se preocupe! Insira seu e-mail e enviaremos instruções para redefinir sua senha.</span>
               </div>
               <ForgotForm />
               <div className="mt-4 text-center text-sm">
                  Já possui uma conta?{" "}
                  <Link href="/login" className="underline">
                     Faca login
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
