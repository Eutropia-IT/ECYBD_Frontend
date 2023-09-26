import React, { use } from "react";
import PageTop from "../shared/PageTop";
import blogImg from "../../assets/blog-thumb-1.jpg";
import Image from "next/image";
import { useRequestProcessor } from "@/hooks/useRequestProcessor";
import { getBlog } from "@/apiRequestHandlers/blogs";
import CustomSkeleton from "../shared/CustomSkeleton";

const Blog = ({ blogId }) => {
  const { query } = useRequestProcessor();
  const {
    data: blog,
    isLoading,
    isError,
    error,
  } = query(["blog", blogId], () => getBlog(blogId));

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
        <div className="col-span-12  text-base text-gray-800 lg:col-span-9 text-justify">
          <div className="w-full h-72 sm:h-96 mb-5">
            {isLoading || isError ? (
              <CustomSkeleton height={350} borderRadius={7} />
            ) : (
              <Image
                src={blog?.feature_img}
                width={400}
                height={300}
                className="w-full object-cover h-full"
                alt="blog image"
              />
            )}
          </div>
          {isLoading ? (
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
            <p dangerouslySetInnerHTML={{ __html: blog?.content }}></p>
          )}

          {isError && (
            <h1 className="text-center text-xl text-red-600">
              {" "}
              {error.message}{" "}
            </h1>
          )}
        </div>

        <div className="mt-6 lg:mt-0 col-span-12 lg:col-span-3">
          {/* about */}
          <div className="text-gray-700 rounded bg-teal-50  px-8 lg:px-4 2xl:px-8  py-8">
            <h1 className="text-gray-800 font-bold text-xl">About</h1>
            <p className="mt-3 text-justify text-sm">
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed consectetur.
            </p>
          </div>

          {/* blog archives */}
          <div className="text-gray-700 mt-5">
            <h1 className="text-xl font-bold text-gray-800 mb-3">
              Blog Archives
            </h1>
            <div>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <div
                    key={item}
                    className="mb-3 cursor-pointer hover:font-semibold duration-100"
                  >
                    <div className="flex justify-between mb-2">
                      <p className="text-sm">March 2014</p>{" "}
                      <span className="px-2 py-1 rounded-full bg-teal-100 font-bold text-xs">
                        23
                      </span>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <p dangerouslySetInnerHTML={{ __html: content }}></p> */}
    </>
  );
};

export default Blog;
