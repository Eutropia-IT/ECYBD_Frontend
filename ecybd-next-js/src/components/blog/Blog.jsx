import React from "react";
import PageTop from "../shared/PageTop";

import Image from "next/image";
import { getBlog } from "@/apiRequestHandlers/blogs";
import CustomSkeleton from "../shared/CustomSkeleton";
import { useQuery } from "@tanstack/react-query";

import Sidebar from "../blogs/Sidebar";

import noData from "../../assets/no-data.png";

const Blog = ({ blogId }) => {
  const {
    data: blog,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["blog", blogId], queryFn: () => getBlog(blogId) });

  return (
    <>
      {isLoading || isError ? (
        <CustomSkeleton height={100} />
      ) : (
        <PageTop
          title={blog?.title}
          description={`${blog?.upload_date} by ${blog?.author}`}
        />
      )}
      <div className="block lg:grid grid-cols-12 container px-8 2xl:px-0 mx-auto gap-12 mt-8 pb-12">
        <div className="col-span-12   text-gray-800 lg:col-span-9 text-justify">
          <div className="w-full h-72 sm:h-96 mb-5">
            {isLoading || isError ? (
              <CustomSkeleton height={350} borderRadius={7} />
            ) : (
              <Image
                src={blog?.feature_img || noData}
                width={6000}
                height={3000}
                className="w-full object-contain h-full"
                alt="blog image"
              />
            )}
          </div>
          {/* {isLoading ? (
            <div>
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={20} borderRadius={5} />
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={40} borderRadius={5} />
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={40} borderRadius={5} />
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={20} borderRadius={5} />
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={40} borderRadius={5} />
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={40} borderRadius={5} />
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
          )} */}

          {isLoading && (
            <div>
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={20} borderRadius={5} />
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={40} borderRadius={5} />
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={40} borderRadius={5} />
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={20} borderRadius={5} />
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={40} borderRadius={5} />
              <CustomSkeleton height={30} borderRadius={5} />
              <CustomSkeleton height={40} borderRadius={5} />
            </div>
          )}
          <div
            className="single-blog-content"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          ></div>

          {isError && (
            <h1 className="text-center text-xl text-red-600">
              {" "}
              {error.message}{" "}
            </h1>
          )}
        </div>

        <div className="mt-6 lg:mt-0 col-span-12 lg:col-span-3">
          <Sidebar />
        </div>
      </div>

      {/* <p dangerouslySetInnerHTML={{ __html: content }}></p> */}
    </>
  );
};

export default Blog;
