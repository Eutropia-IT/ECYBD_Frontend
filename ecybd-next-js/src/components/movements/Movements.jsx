"use client";

import React from "react";
import PageTop from "../shared/PageTop";
import { useQuery } from "@tanstack/react-query";

import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";
import Sidebar from "../blogs/Sidebar";
import { getBcsm } from "@/apiRequestHandlers/movements";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Movements = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getBcsm,
    queryKey: ["bcsm"],
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
            className="text-justify w-full overflow-x-auto sm:overflow-hidden"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          ></div>

          {/* bcs contacts */}
          <div>
            <h1 className="text-lg font-bold lg:justify-start flex justify-center">
              BCSM Contact Details
            </h1>
            <div className="mt-3 flex flex-col gap-1 items-center lg:items-start mb-3 lg:mb-0">
              <a href="telto:8801980234779">
                {" "}
                <span className="font-bold">Phone: </span> +8801980234779
              </a>
              <a href="telto:8801303324179">
                {" "}
                <span className="font-bold">Phone: </span>+8801303324179
              </a>

              <a href="mailto:bcsmbd@gmail.com">
                {" "}
                <span className="font-bold">Email: </span> bcsmbd@gmail.com{" "}
              </a>
              <a target="_blank" href="https://www.bcsmbd.org/">
                {" "}
                <span className="font-bold">Website: </span>{" "}
                https://www.bcsmbd.org{" "}
              </a>
              <p>
                <span className="font-bold">Address: </span> 2, Outer Circular
                Road, Shantibagh, Dhaka 1217. & 2, Outer Circular Road,
                Shantibagh, Dhaka 1217
              </p>
            </div>

            <div className="lg:justify-start flex gap-3 justify-center ">
              <a
                target="_blank"
                href="https://www.facebook.com/bcsmbdhttps://www.facebook.com/bcsmbd"
                className="text-xl text-[#3b5998] p-1"
              >
                <BsFacebook />
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/@episcopalcommissionforyout2219/videos "
                className="text-2xl text-[#CD201F] p-1"
              >
                <AiFillYoutube />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-8  lg:mt-0 lg:col-span-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Movements;
