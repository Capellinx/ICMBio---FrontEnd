'use client';
import { createContext, useContext, ReactNode } from "react";

const SessionContext = createContext(null);

export function useSession() {
   return useContext(SessionContext);
}

export default function SessionProvider({ children }: { children: ReactNode }) {

   return (
      <SessionContext.Provider value={null}>
         {children}
      </SessionContext.Provider>
   );
}
