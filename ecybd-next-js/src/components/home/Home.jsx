"use client";

import React, { useRef } from "react";
import banner from "../../assets/banner.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../app/globals.css";
import mensImage from "../../assets/mens.png";
import menImage from "../../assets/men.png";
import collage from "../../assets/collage.png";
import sponsor1 from "../../assets/sponsors/sponsor1.png";
import sponsor2 from "../../assets/sponsors/sponsor2.png";
import sponsor3 from "../../assets/sponsors/sponsor3.png";
import sponsor4 from "../../assets/sponsors/sponsor4.png";
import HeroSlider, { MissionSlider } from "./HeroSlider";
import shortid from "shortid";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import committe1 from "../../assets/committe1.jpeg";
import committe2 from "../../assets/committe2.png";

import {
  getHomeBannerSlider,
  getRandomVerses,
  getVerses,
  getVissionSlider,
} from "@/apiRequestHandlers/home";
import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";
import { useQuery } from "@tanstack/react-query";

const demoData = [1, 2, 3, 4, 5, 6];

const aimObjective = [
  {
    id: shortid.generate(),
    text: "Facilitating the Catholic youth in their understanding of Christian vocation, faith-life and personal commitment to Christian values",
  },
  {
    id: shortid.generate(),
    text: "Accompanying and journeying to share the experience of faith-life with the youth to assist in their growth and maturity as followers of Christ",
  },

  {
    id: shortid.generate(),
    text: " Helping them to become aware of society and the Church by understanding the social, political, cultural, economic and religious situations",
  },
  {
    id: shortid.generate(),
    text: "Helping them to understand their responsibility towards self, family, Church, society and world",
  },
  {
    id: shortid.generate(),
    text: " Helping them to develop their personality and give “Sheba” (service) for communion and community building",
  },
  {
    id: shortid.generate(),
    text: "Helping them to become aware of the social realities, the signs of the time, especially of injustices, oppressions, the misery of their brothers and sisters, and healing and solidarity in their struggle for liberation",
  },
  {
    id: shortid.generate(),
    text: "Enabling them to build friendly relationship with national and international youth organizations and movements and give witness to them of their own faith, culture and experience of God",
  },
  {
    id: shortid.generate(),
    text: "Educating them to contribute to the life and ministry of the Church in order to become a greater sign of the Kingdom",
  },
];

const Home = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const aboutRef = useRef(null);
  const missionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["0 1", "0.3 1"],
  });
  const { scrollYProgress: missionYProgress } = useScroll({
    target: missionRef,
    offset: ["0 1", "0.4 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const missionScaleProgress = useTransform(missionYProgress, [0, 1], [0.5, 1]);

  const {
    data: verses,
    isLoading: isVersesLoading,
    isError: isVersesError,
    error: versesError,
  } = useQuery({ queryKey: ["verses"], queryFn: getVerses });

  const {
    data: randomVerses,
    isLoading: isRandomVersesLoading,
    isError: isRandomVersesError,
    error: randomVersesError,
  } = useQuery({ queryKey: ["randomVerses"], queryFn: getRandomVerses });

  const {
    data: vissionSliderImages,
    isLoading: isVissionLoading,
    isError: isVissionError,
    error: vissionError,
  } = useQuery({ queryKey: ["vissionSliders"], queryFn: getVissionSlider });

  const {
    data: bannerSliders,
    isLoading: isBannerLoading,
    isError: isBannerError,
    error: bannerError,
  } = useQuery({
    queryKey: ["homeBannerSliders"],
    queryFn: getHomeBannerSlider,
  });

  return (
    <div>
      {/* banner part */}
      <div>
        <HeroSlider
          data={bannerSliders}
          isLoading={isBannerLoading}
          isError={isBannerError}
          error={bannerError}
        />
      </div>

      {/* slider for verses (second slider)*/}

      <div
        style={{ minHeight: "200px" }}
        className="relative  w-full mx-auto   bg-gray-100"
      >
        {
          <RequestStatusUI
            isLoading={isVersesLoading}
            isError={isVersesError}
            error={versesError}
          />
        }

        {verses?.active_verses.length > 0 ? (
          <Slider
            className=" w-10/12 sm:w-2/3 lg:w-1/2 mx-auto py-5 mb-10"
            {...settings}
          >
            {verses.active_verses.map((verse) => {
              return (
                <div
                  key={shortid.generate()}
                  className="p-5 sm:p-10 bg-white w-1/2 rounded-lg"
                >
                  <p className="text-center">{verse.text}</p>
                  <h1 className="mt-8 font-semibold text-lg text-center ">
                    {verse.bookname} {verse.chapter} : {verse.verse}
                  </h1>
                </div>
              );
            })}
          </Slider>
        ) : (
          <Slider
            className=" w-10/12 sm:w-2/3 lg:w-1/2 mx-auto py-5 mb-10"
            {...settings}
          >
            {randomVerses?.map((verse) => {
              return (
                <div
                  key={shortid.generate()}
                  className="p-5 sm:p-10 bg-white w-1/2 rounded-lg"
                >
                  <p className="text-center">{verse.text}</p>
                  <h1 className="mt-8 font-semibold text-lg text-center ">
                    {verse.bookname} {verse.chapter} : {verse.verse}
                  </h1>
                </div>
              );
            })}
          </Slider>
        )}
      </div>

      {/* first content part */}

      <motion.div
        ref={aboutRef}
        style={{ scale: scaleProgress, opacity: scaleProgress }}
        className="container px-8 2xl:px-0 mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        <div className="flex flex-col justify-between gap-10">
          <div>
            <h1 className="text-3xl  font-semibold mb-3">
              About ECY Bangladesh
            </h1>
            <p className="text-justify text-base">
              The youth apostolate of the Catholic Bishops’ Conference of
              Bangladesh (CBCB) was officially launched in 1977, under the name
              “Catholic Jubo Sebadol” and later on officially, Episcopal
              Commission for Youth (ECY). Its function was to direct and
              coordinate the various youth activities and to assist the
              formation of the youth and the students. The pastoral plans for
              the Church in Bangladesh have also given a special emphasis on the
              youth. These look at the youth as a special resource, since they
              constitute a major percentage of the population of the country.
              The Catholic Jubo Sebadol (later the National Youth Commission or,
              জাতীয় যুব কমিশন) has been offering different programmes for this
              important section of the Church. Its programmes integrated the
              needs and priorities of youth activities as mentioned in the
              pastoral plan and aimed at the following impact: The youth: a)
              become aware of the misery, oppression and injustices among the
              people and are urged to take steps to heal these evils; b) develop
              their personality and form a deeper spirit of communion among
              themselves and others and also learn to pray, share and open
              themselves for dialogue and collaboration; c) become aware of
              their religiosity and spiritual values and learn to share the
              experience of faith as the followers of Christ; d) become aware of
              their aim in life, vocation-mission, and responsibility towards
              the family, the Church, society and the country. During the past
              25 years, the youth programmes of Bangladesh have grown
              appreciably and these have made commendable impact on the Church
              in Bangladesh and have contributed a great deal for the growth of
              the individual Catholics. The impact of these programmes is
              clearly visible in the life and attitude of the younger generation
              of Catholics.
            </p>
          </div>
        </div>
        <div className=" flex justify-end">
          <Image className="w-full object-contain" src={mensImage} alt="mens" />
        </div>
      </motion.div>

      {/* mission and vission part */}
      <motion.div
        ref={missionRef}
        style={{ scale: missionScaleProgress, opacity: missionScaleProgress }}
        className="container px-8 2xl:px-0 mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16  place-items-center "
      >
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
        <div>
          <h1 className="text-3xl  font-semibold mb-3">
            Vision, Mission and Objectives of the Youth Commission
          </h1>
          <p className="text-justify text-base">
            The Youth Commission of Bangladesh has defined its own vision,
            mission and objectives. These have been taken basically from the
            vision and mission of the Pastoral Plan of the Bangladesh Church
            (1985 & 1996). Through these, it is expected to serve the youth of
            the country who are faced with the challenges listed in the previous
            section. The following are the vision, mission and objectives of the
            Youth Commission: Vision: Integral human development of the youth
            who will be imbued with faith commitment, love and Sheba (service).
          </p>

          <p className="text-justify text-base mt-3">
            <span className="font-bold">Mission:</span> The following is the
            Mission of the National Youth Commission, according to its
            <span className="font-bold"> Constitution: </span>
            With openness to the uniqueness of persons created in the image of
            God and docility (to) God’s movements in the life of persons, the
            CBCB Commission for youth commits itself to the holistic human
            growth and maturity of the youth imbued with living faith to witness
            the Gospel values of life service and with knowledge and competence
            of mind and heart to bring transformation in themselves and in the
            community.
          </p>
        </div>
      </motion.div>

      {/* aims and objective part */}
      <div className=" mt-12">
        <div>
          <h1 className="text-3xl text-center font-semibold">Our Objectives</h1>

          {/* slider for objectives (third slider)*/}

          <div className="relative  w-full mx-auto  ">
            <Slider
              className=" w-10/12 sm:w-2/3 lg:w-1/2 mx-auto  shadow-md bg-white mb-8 mt-5 rounded-lg"
              {...settings}
            >
              {aimObjective.map((aim) => {
                return (
                  <div key={aim.id} className="   rounded-lg h-36  ">
                    <p className=" text-center h-36 grid  px-5 place-items-center ">
                      {aim.text}
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="text-center">
            <Link
              href={"/resources/gallery"}
              className="px-8 py-2  text-teal-800 rounded-full border border-teal-700 "
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* ececutive & commmision members part */}
      <div className="w-full bg-gray-100 py-8 mt-12">
        <h1 className="text-3xl  text-center font-semibold py-8">
          Executive & Commision Members
        </h1>

        <div className="container px-8 2xl:px-0 mx-auto grid grid-cols-1  lg:grid-cols-2 gap-x-20 gap-8">
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

        <div className="text-center mt-8">
          <Link
            href="/about/secretariat"
            className="px-8 py-2 text-teal-800 rounded-full border border-teal-700 mt-8"
          >
            Secretariat
          </Link>
        </div>
      </div>

      {/* watch this video */}
      <div className="flex flex-col items-center  mt-12">
        <div>
          <h2 className="text-lg font-semibold mb-3 text-center ">
            Watch This Video
          </h2>

          <div className="hidden md:block">
            <iframe
              width="720"
              height="360"
              src="https://www.youtube.com/embed/-ph4mykFp9I?si=2W8i5Gaoj4rcaA2I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="block md:hidden">
            <iframe
              width="360"
              height="220"
              src="https://www.youtube.com/embed/-ph4mykFp9I?si=2W8i5Gaoj4rcaA2I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* we are recognised by */}

      {/* <div className="w-full bg-gray-100 py-8 ">
        <h1 className="text-3xl  text-center font-semibold py-8">
          We Are Recognised By
        </h1>

        <div className="container px-8 2xl:px-0 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-8">
          <div>
            <Image className="w-full" src={sponsor1} alt="sponsor1" />
          </div>
          <div>
            <Image className="w-full" src={sponsor2} alt="sponsor1" />
          </div>
          <div>
            <Image className="w-full" src={sponsor3} alt="sponsor1" />
          </div>
          <div>
            <Image className="w-full" src={sponsor4} alt="sponsor1" />
          </div>
          <div>
            <Image className="w-full" src={sponsor1} alt="sponsor1" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
