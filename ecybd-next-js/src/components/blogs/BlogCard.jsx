import React from "react";
import blogImg from "../../assets/blog-thumb-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import noData from "../../assets/no-data.png";

const BlogCard = ({ blog }) => {
  return (
    <div className=" sm:grid grid-cols-12 gap-8 bg-gray-50 p-4 rounded-lg shadow">
      <div className="col-span-12 md:col-span-3">
        <Image
          src={blog?.feature_img || noData}
          width={200}
          height={200}
          className="object-cover w-36 h-36 rounded-lg object-center mx-auto"
          alt="blog image"
        />
      </div>
      <div className="col-span-12 md:col-span-9 text-gray-600 content-center">
        <h1 className="text-gray-700 font-bold text-xl mt-4 sm:mt-0">
          {blog?.title}
        </h1>

        <p className="text-sm py-2">
          {blog?.upload_date}
          <span className="text-teal-900 font-bold ms-2">{blog?.author} </span>
        </p>
        {/* <p
          dangerouslySetInnerHTML={{
            __html:
              blog.content?.length > 200
                ? `${blog?.content?.slice(0, 200)}...`
                : blog?.content,
          }}
          className="text-sm text-justify"
        ></p> */}

        <Link
          className="w-full justify-center md:w-auto
        bg-teal-600 hover:bg-teal-700 duration-100 text-white font-bold py-2 text-sm px-3 rounded inline-flex items-center mt-2"
          href={`/blogs/${blog?.slug}`}
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
