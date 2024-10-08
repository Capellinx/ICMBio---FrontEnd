'use client';
import { useUser } from "@/providers/user-provider/user-provider";
import { LoginCreate, loginSchema } from "@/schemas/login";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IHandleLoginProps {
   email: string;
   password: string;
}

export function useLoginForm() {
   const { setUser } = useUser()
   const router = useRouter()

   const form = useForm<LoginCreate>({
      resolver: zodResolver(loginSchema),
   });

   const { mutate: login, isPending } = useMutation({
      mutationKey: ['login'],
      mutationFn: ({ email, password }: IHandleLoginProps) => handleLogin({ email, password }),
      onMutate: async () => {
         toast.info("Fazendo login...", {
            toastId: "login",
            updateId: "login",
            isLoading: true
         });
      },
      onSuccess: (data) => {
         toast.success("Login efetuado com sucesso!", {
            toastId: "login",
            updateId: "login",
         });
         setUser(data)
         router.replace("/dashboard")
      },
      onError: (error: AxiosError) => {
         if (error.response?.data) {
            form.setError("password", { message: "E-mail ou senha inválidos" });
         }

         toast.error("Falha ao fazer login!", {
            toastId: "login",
            updateId: "login",
         });
      }
   });

   async function handleLogin({ email, password }: IHandleLoginProps) {
      const { data } = await api.post('/login', {
         email,
         password
      });

      return data
   }

   return { login, isPending, form };
}
