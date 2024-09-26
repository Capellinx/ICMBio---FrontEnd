'use client';
import { createContext, useContext, ReactNode, useState } from "react";
import { IUserContext } from './interfaces/index';

const UserContext = createContext({} as IUserContext);

export const useUser = () => {
   const context = useContext(UserContext);

   if (!context) throw new Error('useUser must be used within a UserProvider');

   return useContext(UserContext);
}

export default function UserProvider({ children }: { children: ReactNode }) {
   const [user, setUser] = useState<IUserContext | string>("");
   console.log(user);
   return (
      <UserContext.Provider value={{ setUser }}>
         {children}
      </UserContext.Provider>
   );
}

