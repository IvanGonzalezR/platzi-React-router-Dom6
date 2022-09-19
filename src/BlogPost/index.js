import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../auth";
import { blogdata } from "../BlogData";

function BlogPost() {

   const navigate = useNavigate();
   const { slug } = useParams();
   const auth = useAuth();

   const blogpost = blogdata.find( post => post.slug === slug );

   const canDelete = (auth.user && auth.user.isAdmin)
      || (auth.user && auth.user.username === blogpost.author);

   const returnToBlog = () => {
      // window.history.back();
      // navigate(-1);
      navigate("/blog");
      // navigate(`/blog/${blogpost.slug}`);
   }

   return (
      <>
         <div>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al blog</button>
            <p>Author: {blogpost.author}</p>
            <p>{blogpost.content}</p>

            {(canDelete) && (
               <button>Eliminar post</button>
            )}
         </div>
      </>
   );
}

export { BlogPost };