import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";
import './Menu.css';

function Menu() {

   const auth = useAuth();

   // if(!auth.user)

   return (
         <>
            <nav>
               <ul>
                  {
                     routes.map(
                        route => {
                           if(route.private && !auth.user) return null;
                           if(route.text === 'Login' && auth.user) return null;
                           return(
                              <li key={route.to}>
                                 <NavLink 
                                    style={({ isActive }) => ({
                                       color: isActive ? "red" : "blue"
                                    })}
                                    to={route.to}
                                    end>
                                    {route.text}
                                 </NavLink>
                              </li>
                           )
                        }
                     )
                  }
               </ul>
            </nav>
         </>
   );
}

const routes = [];
routes.push({
   to: "/",
   text: "Home",
   private: false
});
routes.push({
   to: "/blog",
   text: "Blog",
   private: false
});
routes.push({
   to: "/profile",
   text: "Profile",
   private: true
});
routes.push({
   to: "/login",
   text: "Login",
   private: false,
   publicOnly: true
});
routes.push({
   to: "/logout",
   text: "Logout",   
   private: true
});

export { Menu };