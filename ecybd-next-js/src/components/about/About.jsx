"use client";

import React from "react";
import TeamCard from "./TeamCard";

import PageTop from "../shared/PageTop";
import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";
import { MissionSlider } from "../home/HeroSlider";
import { useQuery } from "@tanstack/react-query";
import { getVissionSlider } from "@/apiRequestHandlers/home";
import committe1 from "../../assets/committe1.jpeg";
import committe2 from "../../assets/committe2.png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const {
    data: vissionSliderImages,
    isLoading: isVissionLoading,
    isError: isVissionError,
    error: vissionError,
  } = useQuery({ queryKey: ["vissionSliders"], queryFn: getVissionSlider });

  return (
    <>
      {/* header section */}
      <PageTop
        title={"About us"}
        description={"Discover Our Church's Rich Heritage and Mission"}
      />

      {/* content section */}
      <div className="container px-8 2xl:px-0 mx-auto grid gap-10 grid-cols-12">
        <div className=" text-gray-700 mt-10 text-justify col-span-12 xl:col-span-7">
          <p className="text-base">
            The youth apostolate of the Catholic Bishops’ Conference of
            Bangladesh (CBCB) was officially launched in 1977, under the name
            “Catholic Jubo Sebadol” and later on officially, Episcopal
            Commission for Youth (ECY). Its function was to direct and
            coordinate the various youth activities and to assist the formation
            of the youth and the students. The pastoral plans for the Church in
            Bangladesh have also given a special emphasis on the youth. These
            look at the youth as a special resource, since they constitute a
            major percentage of the population of the country. The Catholic Jubo
            Sebadol (later the National Youth Commission or, জাতীয় যুব কমিশন)
            has been offering different programmes for this important section of
            the Church. Its programmes integrated the needs and priorities of
            youth activities as mentioned in the pastoral plan and aimed at the
            following impact: The youth:
          </p>

          <p className="mt-2 text-base">
            a) become aware of the misery, oppression and injustices among the
            people and are urged to take steps to heal these evils;
          </p>
          <p className="mt-1 text-base">
            b) develop their personality and form a deeper spirit of communion
            among themselves and others and also learn to pray, share and open
            themselves for dialogue and collaboration;
          </p>
          <p className="mt-1 text-base">
            c) become aware of their religiosity and spiritual values and learn
            to share the experience of faith as the followers of Christ;
          </p>
          <p className="mt-1 text-base">
            d) become aware of their aim in life, vocation-mission, and
            responsibility towards the family, the Church, society and the
            country
          </p>
          <p className="mt-3 text-base">
            During the past 25 years, the youth programmes of Bangladesh have
            grown appreciably and these have made commendable impact on the
            Church in Bangladesh and have contributed a great deal for the
            growth of the individual Catholics. The impact of these programmes
            is clearly visible in the life and attitude of the younger
            generation of Catholics.
          </p>

          {/* <p className="text-base">
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
          </div> */}
        </div>

        <div className="hidden xl:flex lg:mt-10 col-span-5">
          <div className="w-full">
            {
              <RequestStatusUI
                isLoading={isVissionLoading}
                isError={isVissionError}
                error={vissionError}
                count={10}
              />
            }
            {vissionSliderImages?.length > 0 && (
              <MissionSlider vissionSliderImages={vissionSliderImages} />
            )}
          </div>

          {/* <div className="w-full bg-teal-50 rounded-lg px-6">
            <h1 className="text-center mt-8 text-xl font-bold text-gray-700">
              RECENT SERMONS
            </h1>

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
          </div> */}
        </div>
      </div>

      {/* our team section */}
      <div className="mt-12">
        {/* <h1 className="text-center text-gray-700 text-2xl font-bold">
          Our Team
        </h1> */}

        <div className="container px-8 2xl:px-0 mx-auto grid grid-cols-1  lg:grid-cols-2 gap-x-20 gap-8 my-8">
          <div className=" flex justify-center flex-col items-center rounded-2xl">
            <Image
              className="w-full h-auto md:h-[80vh] lg:h-[70vh] overflow-hidden  object-cover rounded-2xl"
              src={committe1}
              alt="men"
            />
            <h3 className="font-semibold px-5 mt-2 text-lg text-center">
              Most Rev. Archbishop Lawrence Subrata Howlader
            </h3>
            <p className="text-center mt-1 text-sm opacity-80 text-teal-700">
              C.S.C. Chairman, Episcopal Commission for Youth & Archbishop of
              Chattogram
            </p>
          </div>
          <div className=" flex justify-center flex-col items-center rounded-2xl">
            <Image
              className="w-full h-auto md:h-[80vh] lg:h-[70vh] overflow-hidden  object-cover rounded-2xl"
              src={committe2}
              alt="men"
            />
            <h3 className="font-semibold px-5 mt-2 text-lg text-center">
              Fr. Bikash James Rebeiro
            </h3>
            <p className="text-center mt-1 text-sm opacity-80 text-teal-700">
              C.S.C. Executive Secretary & National Youth Coordinator, Episcopal
              Commission for Youth
            </p>
          </div>
        </div>

        <div className="text-center my-8">
          <Link
            href="/about/secretariat"
            className="px-8 py-2 text-teal-800 rounded-full border border-teal-700 mt-8 hover:bg-[#0F766E] hover:text-white duration-200"
          >
            Secretariat
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
