"use client";

import React from "react";
import PageTop from "../shared/PageTop";
import { useQuery } from "@tanstack/react-query";
import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";
import Sidebar from "../blogs/Sidebar";

import { getSEcretariat } from "@/apiRequestHandlers/secretariat";
import Image from "next/image";
import NoData from "../shared/NoData";

const Secretariat = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getSEcretariat,
    queryKey: ["secretariat"],
  });

  return (
    <div>
      <PageTop
        title={"Secretariat"}
        description={"Unveiling Our Secretariat Team"}
      />

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

          <div>
            {data?.length > 0 ? (
              data.map((s) => {
                return (
                  <section key={s.id}>
                    <h1 className="text-3xl opacity-70 font-bold mb-5 text-center">
                      {s.year}
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                      {s?.secretariat_images?.map((img) => {
                        return (
                          <div
                            key={img.id}
                            className="bg-gray-50 rounded flex justify-center"
                          >
                            <Image
                              className="w-full h-96 object-contain rounded"
                              width={300}
                              height={300}
                              src={img?.image_url || ""}
                              alt="secretariat"
                            />
                            <h1 className="text-lg font-bold text-[#0f766e]">
                              Mr. Name
                            </h1>
                            <p className="text-base"> Designation </p>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })
            ) : (
              <div>
                <NoData />
              </div>
            )}
          </div>
        </div>

        <div className="col-span-12 mt-8  lg:mt-0 lg:col-span-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Secretariat;
