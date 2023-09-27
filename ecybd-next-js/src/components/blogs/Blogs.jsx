"use client";

import React, { useState } from "react";
import PageTop from "../shared/PageTop";
import BlogCard from "./BlogCard";
import { AiOutlineSearch } from "react-icons/ai";
import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";
import { useRequestProcessor } from "@/hooks/useRequestProcessor";
import { getBlogs } from "@/apiRequestHandlers/blogs";
import CustomPagination from "../shared/paginator/CustomPagination";

const Blogs = () => {
  const itemsPerPage = 10;
  const [pageNumber, setPageNumber] = useState(0);

  const { query } = useRequestProcessor();

  const {
    data: blogs,
    isLoading: isBlogsLoading,
    isError: isBlogsError,
    error: blogError,
  } = query(["blogs", pageNumber], () => getBlogs(pageNumber, itemsPerPage));

  const handlePageNumber = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  return (
    <>
      <PageTop
        title={"Our Blog"}
        description={
          "Articles and latest bulletins related to our catholic church"
        }
      />

      <div className="block  lg:grid grid-cols-12 container px-8 2xl:px-0 mx-auto gap-12 mt-8">
        <div className="col-span-12 grid gap-5 lg:col-span-9">
          <div className={`${isBlogsLoading ? "grid gap-5" : "hidden"}`}>
            <RequestStatusUI
              isError={isBlogsError}
              error={blogError}
              isLoading={isBlogsLoading}
              count={5}
            />
            <RequestStatusUI
              isError={isBlogsError}
              error={blogError}
              isLoading={isBlogsLoading}
              count={5}
            />
            <RequestStatusUI
              isError={isBlogsError}
              error={blogError}
              isLoading={isBlogsLoading}
              count={5}
            />
          </div>

          {blogs?.results?.length > 0 &&
            blogs?.results?.map((item) => {
              return <BlogCard key={item.id} blog={item} />;
            })}

          <CustomPagination
            handlePageNumber={handlePageNumber}
            dataLength={blogs?.count}
            itemsPerPage={itemsPerPage}
          />
        </div>

        <div className="col-span-12 lg:col-span-3">
          {/* search bar */}
          <div className="flex">
            <input
              className="h-12 outline-none rounded rounded-r-none border-r-0 border border-gray-400 px-4 w-full"
              placeholder="Search.."
              type="search"
            />

            <button className="h-12 w-12 border border-gray-400 grid place-items-center rounded-r">
              <AiOutlineSearch />
            </button>
          </div>

          {/* about */}
          <div className="text-gray-700 rounded bg-teal-50  px-8 lg:px-4 2xl:px-8 mt-8 py-8">
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
    </>
  );
};

export default Blogs;
