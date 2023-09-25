"use client";

import React from "react";
import TeamCard from "./TeamCard";
import { FaAngleRight } from "react-icons/fa6";
import picture from "../../assets/banner1.jpg";
import Image from "next/image";
import PageTop from "../shared/PageTop";

import { useRequestProcessor } from "@/hooks/useRequestProcessor";
import { getTodo } from "@/apiRequestHandlers/about";
import CustomSkeleton from "../shared/CustomSkeleton";
import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";

const About = () => {
  const { query } = useRequestProcessor();

  // const { data, isLoading, isError } = query(["about"], getTodo);

  return (
    <>
      {/* header section */}
      <PageTop
        title={"About us"}
        description={
          "Write something about your church here. Keep it simple though."
        }
      />

      {/* <RequestStatusUI
        isError={isError}
        isLoading={isLoading}
        Skeleton={AboutSkeleton}
      />
      <div className="container mx-auto">
        {data?.length > 0 &&
          data.map((item) => {
            return <h2> {item.title} </h2>;
          })}
      </div> */}

      {/* content section */}
      <div className="container px-8 2xl:px-0 mx-auto grid gap-10 grid-cols-12">
        <div className=" text-gray-700 mt-10 text-justify col-span-12 xl:col-span-9">
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos
            earum fuga minus vel provident soluta eligendi excepturi rem
            dignissimos.
          </p>

          <p className="mt-3 text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            hic saepe accusamus fugiat natus nulla! Quae natus nostrum esse,
            perferendis a magni vitae officiis incidunt aperiam doloribus
            voluptate asperiores nemo!
          </p>

          <p className="mt-3 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            beatae temporibus iure molestiae iusto odit doloremque. Deleniti
            culpa laboriosam cum vel ipsa. Quis ratione consequatur officia
            voluptatum pariatur incidunt velit neque sint, nesciunt quia soluta
            facilis fugiat, alias modi accusantium cumque quidem earum maxime,
            quod veritatis numquam qui dolore aliquam!
          </p>

          {/* section */}
          <div>
            <h1 className="text-2xl font-semibold mt-5 ">Sub heading</h1>

            <p className="mt-3 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              beatae temporibus iure molestiae iusto odit doloremque. Deleniti
              culpa laboriosam cum vel ipsa. Quis ratione consequatur officia
              voluptatum pariatur incidunt velit neque sint, nesciunt quia
              soluta facilis fugiat, alias modi accusantium cumque quidem earum
              maxime, quod veritatis numquam qui dolore aliquam!
            </p>
          </div>

          {/* section */}
          <div>
            <h1 className="text-2xl font-semibold mt-5 ">Another heading</h1>

            <p className="mt-3 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              beatae temporibus iure molestiae iusto odit doloremque. Deleniti
              culpa laboriosam cum vel ipsa. Quis ratione consequatur officia
              voluptatum pariatur incidunt velit neque sint, nesciunt quia
              soluta facilis fugiat, alias modi accusantium cumque quidem earum
              maxime, quod veritatis numquam qui dolore aliquam!
            </p>
          </div>
        </div>

        <div className="hidden xl:flex lg:mt-10 col-span-3">
          <div className="w-full bg-teal-50 rounded-lg px-6">
            <h1 className="text-center mt-8 text-xl font-bold text-gray-700">
              RECENT SERMONS
            </h1>

            {/* <div className="mt-5">
              <iframe
                width="auto"
                height="auto"
                src="https://www.youtube.com/embed/-ph4mykFp9I?si=2W8i5Gaoj4rcaA2I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div> */}

            <div className="mt-5">
              <Image src={picture} alt="top image" className="w-full" />
            </div>

            <div className="mt-5">
              <div className="flex gap-2 mt-3">
                <div className="grid place-items-center text-gray-600">
                  <FaAngleRight />
                </div>
                <div>
                  <a href="#" className="text-gray-700 text-sm">
                    Heavens and the Earth
                  </a>
                  <p className="text-gray-700 text-sm">24:15 mins</p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <div className="grid place-items-center text-gray-600">
                  <FaAngleRight />
                </div>
                <div>
                  <a href="#" className="text-gray-700 text-sm">
                    Heavens and the Earth
                  </a>
                  <p className="text-gray-700 text-sm">24:15 mins</p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <div className="grid place-items-center text-gray-600">
                  <FaAngleRight />
                </div>
                <div>
                  <a href="#" className="text-gray-700 text-sm">
                    Heavens and the Earth
                  </a>
                  <p className="text-gray-700 text-sm">24:15 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our team section */}
      <div className="mt-12">
        <h1 className="text-center text-gray-700 text-2xl font-bold">
          Our Team
        </h1>

        <div className="container px-8 2xl:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-12">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </>
  );
};

export default About;

const AboutSkeleton = () => {
  return (
    <>
      <CustomSkeleton height={20} borderRadius={5} />
      <CustomSkeleton height={30} />
      <CustomSkeleton height={20} borderRadius={5} />
      <CustomSkeleton height={15} />
      <CustomSkeleton height={15} borderRadius={5} />
    </>
  );
};
