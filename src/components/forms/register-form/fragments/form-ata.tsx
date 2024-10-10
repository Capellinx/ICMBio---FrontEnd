import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cpfMask } from "@/functions/cpf-mask";
import { PersonType } from "@/services/auth";
import { Control } from "react-hook-form";


export interface FormValues {
   name: string;
   email: string;
   person_type: PersonType
   phone: string;
   cpf: string,
   matricula: string;
}

interface FormCondutorProps {
   control: Control<FormValues>;
}

export function FormAta({ control }: FormCondutorProps) {
   return (
      <div className="flex flex-col gap-4 mt-4">
         <FormField
            control={control}
            name="matricula"
            render={({ field: { onChange, value, ...props } }) => (
               <FormItem>
                  <FormLabel>Número da matricula</FormLabel>
                  <FormControl>
                     <Input
                        value={value}
                        onChange={onChange}
                        placeholder="ex: 36841415"
                        {...props}
                     />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />

         <FormField
            control={control}
            name="cpf"
            render={({ field: { onChange, value, ...props } }) => (
               <FormItem>
                  <FormLabel>CPF do Agente Temporário</FormLabel>
                  <FormControl>
                     <Input
                        value={value || ""}
                        onChange={(e) => {
                           const { value } = e.target
                           e.target.value = cpfMask(value)
                           onChange(e)
                        }}
                        placeholder="000.000.000-00"
                        {...props}

                     />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
      </div>
   )
}