"use client";

import { ToastContainer, Zoom } from "react-toastify";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import 'react-toastify/dist/ReactToastify.css';
import SessionProvider from "../session-provider/session-provider";
import UserProvider from "../user-provider/user-provider";

const client = new QueryClient();
export default function ClientProvider({ children }: { children: React.ReactNode }) {
   return (
      <SessionProvider>
         <UserProvider>
            <QueryClientProvider client={client}>
               <ToastContainer 
                  transition={Zoom}
                  position="top-center"
                  autoClose={1500}
                  hideProgressBar
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable={false}
                  pauseOnHover={false}
                  theme="light"
               />
            
               {children}
            </QueryClientProvider>
         </UserProvider>
      </SessionProvider>
   );
}
