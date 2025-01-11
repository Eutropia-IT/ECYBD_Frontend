"use client";

import BlogBySlug from "@/components/blog/BlogBySlug";

import React from "react";

const page = ({ params }) => {
  return (
    <>
      <BlogBySlug slug={params.slug} />
    </>
  );
};

export default page;
