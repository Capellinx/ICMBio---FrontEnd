import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
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
   )
}