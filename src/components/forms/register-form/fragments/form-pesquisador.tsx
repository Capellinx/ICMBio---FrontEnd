import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cpfMask } from "@/functions/cpf-mask"
import { PersonType } from "@/services/auth";
import { Control } from "react-hook-form";


export interface FormValuesPesquisador {
   name: string;
   email: string;
   person_type: PersonType
   phone: string;
   cpf: string,
   matricula: string;
}

interface FormCondutorProps {
   control: Control<FormValuesPesquisador>;
}

export function FormPesquisador({ control }: FormCondutorProps) {
   return (
      <div className="mt-4">
         <FormField
            control={control}
            name="cpf"
            render={({ field: { onChange, value, ...props } }) => (
               <FormItem>
                  <FormLabel>CPF do pesquisador</FormLabel>
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