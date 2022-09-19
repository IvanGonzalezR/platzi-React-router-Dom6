import React from "react";
import { useAuth } from "../auth";

function ProfilePage() {
   const auth = useAuth();

   return (
      <>
         <div>
            <h1>Welcome, {auth.user?.username}</h1>
         </div>
      </>
   );
}

export { ProfilePage };