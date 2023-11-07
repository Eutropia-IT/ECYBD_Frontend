"use client";

import React, { useState } from "react";
import PageTop from "../shared/PageTop";
import BlogCard from "./BlogCard";
import { AiOutlineSearch } from "react-icons/ai";
import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";

import { getBlogs } from "@/apiRequestHandlers/blogs";
import CustomPagination from "../shared/paginator/CustomPagination";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "./Sidebar";
import { useSearchStore } from "@/hooks/useSearchStore";
import NoData from "../shared/NoData";

const monthList = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  // 11: "March",
  12: "December",
};

const Blogs = () => {
  const itemsPerPage = 10;
  const [pageNumber, setPageNumber] = useState(0);

  const { search, month, year, setMonth, setYear } = useSearchStore(
    (state) => state
  );

  const {
    data: blogs,
    isLoading: isBlogsLoading,
    isError: isBlogsError,
    error: blogError,
  } = useQuery({
    queryKey: ["blogs", search, pageNumber, month, year],
    queryFn: () => getBlogs(pageNumber, itemsPerPage, search, month, year),
  });

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

          {/* chip start */}
          {month && year && (
            <div>
              <div class="rounded-full border text-[#0f766d] flex items-center justify-between  px-2 py-1 text-sm w-40 ">
                <span className="ps-2 font-bold">
                  {monthList[month]} {year}
                </span>
                <button
                  class="text-white hover:bg-[#22454221] rounded-full p-1 float-right "
                  onClick={() => {
                    setMonth("");
                    setYear("");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#0f766e"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
          {/* chip end */}

          {blogs?.results?.length > 0 &&
            blogs?.results?.map((item) => {
              return <BlogCard key={item.id} blog={item} />;
            })}

          <CustomPagination
            handlePageNumber={handlePageNumber}
            dataLength={blogs?.count}
            itemsPerPage={itemsPerPage}
          />

          {(blogs?.results?.length == 0 || !blogs) && !isBlogsLoading && (
            <NoData />
          )}
        </div>

        <div className="col-span-12 lg:col-span-3">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Blogs;
