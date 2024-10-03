import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { KeyRound, Lock, Leaf } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function ResetPassword() {
   return (
      <div className="min-h-screen flex flex-col relative overflow-hidden">
         <main className="flex-grow flex items-center justify-center relative z-10">
            <div className="w-full max-w-4xl flex shadow-lg rounded-lg overflow-hidden bg-white">
               <div className="hidden md:flex md:w-1/2 bg-gradient-to-tr from-[#1E9E6A] to-[#207553] p-12 text-white flex-col justify-between">
                  <div>
                     <h2 className="text-3xl font-bold mb-6">Olá, amigo(a) da natureza!</h2>
                     <p className="text-lg">
                        Vamos te ajudar a voltar para o nosso ecossistema digital.
                     </p>
                  </div>
                  <div className="mt-auto">
                     <Leaf className="w-16 h-16 text-white opacity-50" />
                  </div>
               </div>
               <Card className="w-full md:w-1/2 p-8">
                  <div className="text-center mb-8">
                     <div className="bg-green-100 rounded-full p-3 inline-block">
                        <Lock className="w-8 h-8 text-green-600" />
                     </div>
                     <h1 className="text-2xl font-bold text-gray-800 mt-4">Redefinir a senha</h1>
                     <p className="text-gray-600 mt-2">
                        Redefina a senha para ter acesso à plataforma EcoSys novamente.
                     </p>
                  </div>
                  <form className="space-y-6">
                     <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-gray-700">Nova Senha</Label>
                        <Input
                           id="newPassword"
                           type="password"
                           placeholder="Insira sua nova senha"
                           required
                           className="w-full"
                        />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-gray-700">Confirmar Senha</Label>
                        <Input
                           id="confirmPassword"
                           type="password"
                           placeholder="Confirme sua nova senha"
                           required
                           className="w-full"
                        />
                     </div>
                     <Button className="w-full flex items-center justify-center gap-3 bg-[#1E9E6A] p-4 hover:bg-[#207553] transition-colors">
                        <KeyRound className="w-4 h-4" />
                        <span>Redefinir senha</span>
                     </Button>
                  </form>
                  <div className="mt-6 text-center text-sm text-gray-600">
                     Lembrou sua senha?{" "}
                     <Link href="/login" className="text-green-600 hover:underline">
                        Faça login
                     </Link>
                  </div>
               </Card>
            </div>
         </main>
         <footer className="relative z-10 py-4 px-6 text-center text-sm bg-primary/90 text-white bg-opacity-85">
            <nav className="space-x-4">
               <Link href="/" className="hover:underline">Home</Link>
               <Link href="/suporte" className="hover:underline">Suporte</Link>
               <Link href="/privacidade" className="hover:underline">Privacidade</Link>
               <Link href="/termos" className="hover:underline">Termos</Link>
            </nav>
            <p className="mt-2">© 2024 EcoSys - Eco System. Cuidando do seu mundo digital e do nosso planeta.</p>
         </footer>
      </div>
   )
}