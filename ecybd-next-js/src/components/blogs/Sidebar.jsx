import { useSearchStore } from "@/hooks/useSearchStore";
import { useRouter } from "next/navigation";

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Sidebar = () => {
  const { search, month, year, setSearch, setMonth, setYear } = useSearchStore(
    (state) => state
  );

  const router = useRouter();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/blogs`);
  };

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

      {/* about */}
      {/* <div className="text-gray-700 rounded bg-teal-50  px-8 lg:px-4 2xl:px-8 mt-8 py-8">
            <h1 className="text-gray-800 font-bold text-xl">About</h1>
            <p className="mt-3 text-justify text-sm">
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed consectetur.
            </p>
          </div> */}

      {/* blog archives */}
      <div className="text-gray-700 mt-5">
        <h1 className="text-xl font-bold text-gray-800 mb-3">Blog Archives</h1>
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
  );
};

export default Sidebar;
