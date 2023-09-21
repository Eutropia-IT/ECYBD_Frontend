"use client";

import Blog from "@/components/blog/Blog";

import React from "react";

const page = ({ params }) => {
  return (
    <>
      <Blog blogId={params.blogId} />
    </>
  );
};

export default page;
