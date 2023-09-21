import React from "react";
import blogImg from "../../assets/blog-thumb-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const BlogCard = () => {
  return (
    <div className=" sm:grid grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-3">
        <Image src={blogImg} className="w-full" alt="blog image" />
      </div>
      <div className="col-span-12 md:col-span-9 text-gray-600">
        <h1 className="text-gray-700 font-bold text-xl mt-4 sm:mt-0">
          Perseverance of the Saints
        </h1>

        <p className="text-sm py-2">
          on 17th June 2014 by
          <span className="text-teal-900 font-bold ms-1">Vincent John</span>
        </p>
        <p className="text-sm text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra
          ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet...
        </p>

        <Link
          className="
        bg-teal-600 hover:bg-teal-700 duration-100 text-white font-bold py-2 text-sm px-3 rounded inline-flex items-center mt-2"
          href="/blogs/1"
        >
          READ ARTICLE
          <span className="ms-2">
            <BsArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
