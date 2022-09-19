import React from "react";
import { useAuth } from "../auth";

function LogoutPage() {

   const auth = useAuth();

   const logout = (e) => {
      e.preventDefault();
      auth.logout();
   }

   return (
         <>
            <div>
               <h1>Logout</h1>
            </div>

            <form onSubmit={logout}>
               <label>Estas segur@ que deseas salir?</label>
               <button type="submit">Salir</button>
            </form>
         </>
      );;
}

export { LogoutPage };