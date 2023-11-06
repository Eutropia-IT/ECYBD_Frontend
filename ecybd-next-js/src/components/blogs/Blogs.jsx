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

const Blogs = () => {
  const itemsPerPage = 10;
  const [pageNumber, setPageNumber] = useState(0);

  const { search, month, year } = useSearchStore((state) => state);

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

          {blogs?.results?.length > 0 &&
            blogs?.results?.map((item) => {
              return <BlogCard key={item.id} blog={item} />;
            })}

          <CustomPagination
            handlePageNumber={handlePageNumber}
            dataLength={blogs?.count}
            itemsPerPage={itemsPerPage}
          />

          {blogs?.results?.length == 0 && <NoData />}
        </div>

        <div className="col-span-12 lg:col-span-3">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Blogs;
