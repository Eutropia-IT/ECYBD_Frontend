"use client";

import React, { useState } from "react";
import PageTop from "../shared/PageTop";
import BlogCard from "./BlogCard";
import { AiOutlineSearch } from "react-icons/ai";
import ReactPaginate from "react-paginate";

const Blogs = () => {
  const itemsPerPage = 5;
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 7, 18, 19, 20, 21,
    22, 23, 24,
  ];

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <PageTop
        title={"Our Blog"}
        description={
          "Articles and latest bulletins related to our catholic church"
        }
      />

      <div className="block lg:grid grid-cols-12 container px-8 2xl:px-0 mx-auto gap-12 mt-8">
        <div className="col-span-12 grid gap-8 lg:col-span-9">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />

          <div className="mb-10">
            <ReactPaginate
              className="flex items-center justify-center"
              pageClassName="  rounded  border font-bold text-xs cursor-pointer hover:bg-teal-600 hover:text-white duration-100"
              pageLinkClassName="w-7 h-7 sm:w-10 sm:h-9 grid place-items-center"
              activeClassName="bg-teal-600 text-white"
              breakClassName="w-7 h-7 sm:w-10 sm:h-9 grid place-items-center rounded  border font-bold text-xs cursor-pointer hover:bg-teal-600 hover:text-white duration-100"
              previousClassName="rounded  border font-bold text-xs cursor-pointer hover:bg-teal-700 hover:text-white duration-100"
              previousLinkClassName="w-7 h-7 sm:w-10 sm:h-9 grid place-items-center "
              nextClassName=" rounded  border font-bold text-xs cursor-pointer hover:bg-teal-700 hover:text-white duration-100"
              nextLinkClassName="w-7 h-7 sm:w-10 sm:h-9 grid place-items-center "
              disabledClassName="opacity-50 cursor-not-allowed"
              disabledLinkClassName="cursor-not-allowed"
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< "
              renderOnZeroPageCount={null}
            />
          </div>
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
