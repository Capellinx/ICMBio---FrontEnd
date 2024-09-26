import { api } from "@/services/api";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
   providers: [
      CredentialsProvider({
         name: "Credentials",
         credentials: {
            email: { label: "email", type: "email" },
            password: { label: "password", type: "password" }
         },
         async authorize(credentials) {
            const { data } = await api.post("/loging", {
               email: credentials?.email,
               password: credentials?.password
            })

            console.log(data)

            if (data && data.access_token) {
               return data.collaborator
            }

            return null
         },
      })
   ],
   pages: {
      signIn: "/login",
   }
}

export default NextAuth(nextAuthOptions)