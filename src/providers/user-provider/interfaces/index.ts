import { Dispatch } from "react";

export interface IUserContext {
   setUser: Dispatch<React.SetStateAction<IUserContext | string>>
}


export interface IUser {
   token: string,
   collaborator: {
      id: string,
      name: string,
      email: string,
      collaborator_roles: {
         roles: string,
      }
   }
}
