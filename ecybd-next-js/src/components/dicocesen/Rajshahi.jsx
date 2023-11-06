"use client";

import React from "react";
import PageTop from "../shared/PageTop";
import { useQuery } from "@tanstack/react-query";
import { getDhaka, getRajshahi } from "@/apiRequestHandlers/dicocesen";
import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";
import Sidebar from "../blogs/Sidebar";

const Rajshahi = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getRajshahi,
    queryKey: ["rajshahi"],
  });

  return (
    <div>
      <PageTop title={data?.title} description={"Dicocesen Commission"} />

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
            className="text-justify w-full overflow-x-auto sm:overflow-hidden"
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

export default Rajshahi;
