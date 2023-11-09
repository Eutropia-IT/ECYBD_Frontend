"use client";

import React from "react";
import PageTop from "../shared/PageTop";
import { useQuery } from "@tanstack/react-query";

import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";
import Sidebar from "../blogs/Sidebar";
import { getYcs } from "@/apiRequestHandlers/movements";

const Ycs = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getYcs,
    queryKey: ["ycs"],
  });

  return (
    <div>
      <PageTop title={data?.title} description={"Movements"} />

      <div className="block sm:pb-8   lg:grid grid-cols-12 container px-8 2xl:px-0 mx-auto gap-12 mt-8">
        <div className="col-span-12 grid gap-5 overflow-hidden w-full text-justify lg:col-span-9">
          <div className={`${isLoading ? "grid gap-5" : "hidden"}`}>
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
            <RequestStatusUI
              isError={isError}
              error={error}
              isLoading={isLoading}
              count={5}
            />
          </div>

          <div
            className="single-blog-content text-justify w-full overflow-x-auto sm:overflow-hidden"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          ></div>
        </div>

        <div className="col-span-12 mt-8  lg:mt-0 lg:col-span-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Ycs;
