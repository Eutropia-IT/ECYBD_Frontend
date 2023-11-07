import { useSearchStore } from "@/hooks/useSearchStore";
import { useRouter } from "next/navigation";

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";
import { useQuery } from "@tanstack/react-query";
import { getBlogFilters, getBlogs } from "@/apiRequestHandlers/blogs";

const monthList = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const Sidebar = () => {
  const {
    search,
    month: stateMonth,
    year: stateYear,
    setSearch,
    setMonth,
    setYear,
  } = useSearchStore((state) => state);

  const router = useRouter();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/blogs`);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryFn: getBlogFilters,
    queryKey: ["filters"],
  });

  return (
    <div className="">
      {/* search bar */}
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input
            className="h-12 outline-none rounded rounded-r-none border-r-0 border border-gray-400 px-4 w-full"
            placeholder="Search.."
            type="search"
            value={search}
            onChange={handleSearch}
          />

          <button
            type="submit"
            className="h-12 w-12 border border-gray-400 grid place-items-center rounded-r"
          >
            <AiOutlineSearch />
          </button>
        </div>
      </form>

      {isLoading && (
        <div>
          <RequestStatusUI
            isError={isError}
            error={error}
            isLoading={isLoading}
            count={5}
          />

          <RequestStatusUI
            isError={isError}
            error={error}
            isLoading={isLoading}
            count={5}
          />
        </div>
      )}

      {/* blog archives */}
      <div className="text-gray-700 mt-5">
        {!isError && !isLoading && data?.length > 0 && (
          <h1 className="text-xl font-bold text-gray-800 mb-3">
            Blog Archives
          </h1>
        )}
        <div>
          {data &&
            Object?.keys(data)?.map((year) => {
              return Object?.keys(data[year])?.map((month) => {
                return (
                  <div
                    key={month}
                    className="mb-3 cursor-pointer hover:font-semibold duration-100"
                    onClick={() => {
                      setMonth(monthList[month]);

                      setYear(year);
                      router.push(`/blogs`);
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <p
                        className={`text-sm ${
                          stateMonth == monthList[month] && stateYear == year
                            ? "font-bold text-[#0F766E]"
                            : ""
                        }`}
                      >
                        {month} {year}{" "}
                      </p>{" "}
                      <span className="px-2 py-1 rounded-full bg-teal-100 font-bold text-xs">
                        {data[year][month]}
                      </span>
                    </div>
                    <hr />
                  </div>
                );
              });
            })}
          {/* {Object?.keys(data)?.map((year) => {
            Object?.keys(data[year])?.map((month) => {
              return (
                <div
                  key={month}
                  className="mb-3 cursor-pointer hover:font-semibold duration-100"
                  onClick={() => {
                    setMonth(month);
                    setYear(year);
                    router.push(`/blogs`);
                  }}
                >
                  <div className="flex justify-between mb-2">
                    <p className="text-sm">{month}</p>{" "}
                    <span className="px-2 py-1 rounded-full bg-teal-100 font-bold text-xs">
                      {data[year][month]}
                    </span>
                  </div>
                  <hr />
                </div>
              );
            });
          })} */}

          {/* {[1, 2, 3, 4, 5].map((item) => {
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
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
