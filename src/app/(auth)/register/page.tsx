

import Image from "next/image"
import Link from "next/link"

import logo from "@/public/svg/logo.svg"
import { RegisterForm } from "@/components/forms/register-form"

export default function Register() {
   return (
      <main className="w-full lg:grid  lg:grid-cols-2 h-screen">
         <section className="bg-[#F3FFF2] hidden  lg:flex lg:items-center lg:justify-center">
            <Image
               src={logo}
               alt="Image"
               width={500}
               height={500}
            />
         </section>
         <section className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[650px] gap-6">
               <div className="grid gap-2 text-center">
                  <p className="text-balance text-muted-foreground text-left">
                     Seja Bem vindo!
                  </p>
                  <h1 className="text-3xl font-bold text-left ">Faça seu registro</h1>
               </div>
               <RegisterForm />

               <div className="mt-4 text-center text-sm">
                  Já possui uma conta?{" "}
                  <Link href="/login" className="underline">
                     Faca login
                  </Link>
               </div>
            </div>
         </section>
      </main>
   )
}
