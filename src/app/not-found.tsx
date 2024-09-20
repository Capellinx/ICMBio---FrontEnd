'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Custom404() {
   return (
      <div className="min-h-screen bg-[#f0faf0] flex flex-col md:flex-row items-center justify-center p-5 md:p-10">
         <div className="w-full md:w-1/2 max-w-md">
            <svg
               viewBox="0 0 200 200"
               className="w-full h-auto"
               xmlns="http://www.w3.org/2000/svg"
            >
               <circle cx="100" cy="100" r="80" fill="#4ade80" />
               <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="80"
                  fill="#ffffff"
                  fontWeight="bold"
               >
                  404
               </text>
            </svg>
         </div>
         <div className="w-full md:w-1/2 max-w-md mt-10 md:mt-0 md:ml-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Página não encontrada</h1>
            <p className="text-lg text-gray-600 mb-8">
               Desculpe, a página que você está procurando não existe ou foi movida.
            </p>
            <Link href="/login" passHref>
               <Button className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-white font-bold py-2 px-4 rounded">
                  Voltar para a página inicial
               </Button>
            </Link>
         </div>
      </div>
   )
}