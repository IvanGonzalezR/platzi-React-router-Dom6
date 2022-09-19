import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "../BlogData";

function BlogPage() {
  return (
      <>
         <div>
            <h1>Blog</h1>
         </div>

         <Outlet />
         
         <ul>
            {blogdata.map(
               post => (
                  <BlogLink 
                     key={post.slug}
                     post={post}/>
               )
            )}
         </ul>
      </>
  );
}

function BlogLink({ post }) {
  return (
      <>
         <li>
            <Link to={`/blog/${post.slug}`}>
               {post.title}
            </Link>
         </li>
      </>
  );
}

export { BlogPage };