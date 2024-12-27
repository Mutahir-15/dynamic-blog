'use client'
import CommentSection from "@/components/Commentsection";
import React from "react";
function Blog( {params} : {params: {Blog:string}} ) {
  console.log(params);
  return (
    <div>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Next.JS</h1>
        <h2 className="text-4xl font-bold mb-4">{params.Blog}</h2>
        <p className="text-lg">
          Next.js is a React framework that enables functionality such as
          server-side rendering and generating static websites for React based
          applications.
        </p>
      </div>
      <CommentSection />
    </div>
  );
}

export default Blog;
