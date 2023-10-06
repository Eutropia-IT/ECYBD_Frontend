import styles from "./home.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
  EffectFlip,
} from "swiper/modules";

import banner1 from "../../assets/banner1.jpg";
import Image from "next/image";
import Link from "next/link";

import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";
import { sortArrayByKey } from "@/utils/helper";
import shortid from "shortid";

const HeroSlider = ({ data, isLoading, isError, error }) => {
  return (
    <div>
      <RequestStatusUI
        isLoading={isLoading}
        isError={isError}
        error={error}
        count={15}
      />

      {!isLoading && !isError && (
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          className="mySwiper"
        >
          {data.map((slide) => {
            return (
              <SwiperSlide key={shortid.generate()}>
                <Slider slide={slide} />
              </SwiperSlide>
            );
          })}

          {/* {generateSliders(<Slider />)} */}
        </Swiper>
      )}
    </div>
  );
};

export default HeroSlider;

const Slider = ({ slide }) => {
  const getRoute = () => {
    if (slide?.Type == "Blog") return `/blogs/${slide?.Id}`;
    else if (slide?.Type == "Publication") {
      let subRoute = "";
      if (slide?.Pub_type == "Newsletter") subRoute = "newsletters";
      else if (slide?.Pub_type == "BCSM BARTA") subRoute = "bcsm-barta";
      else subRoute = slide?.Pub_type.toLowerCase();

      return `/resources/publications/${subRoute}?publicationId=${slide?.Id}`;
    }
  };

  return (
    <div className={styles.sliderRoot}>
      <Image
        className="w-full"
        width={400}
        height={300}
        src={slide?.Image || banner1}
        alt="banner image"
      />

      <div
        style={{ backgroundColor: "#3d3d3d47" }}
        className="hidden sm:block absolute bottom-0 left-0 w-10/12 md:w-10/12 lg:w-7/12  px-8 text-left rounded  py-5 md:py-8 lg:py-12"
      >
        <p className="font-bold text-white drop-shadow-lg">
          {slide?.Type == "Blog" ? "Latest Blog" : "Latest Publication"}
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mt-1 md:mt-3 text-white mb-10 drop-shadow-lg">
          {slide?.Title}
        </h1>

        <Link
          href={getRoute()}
          className=" px-8 md:px-12 py-2 md:py-3  md:mt-6 rounded-full bg-teal-700 shadow-xl text-white font-bold"
        >
          Read Now
        </Link>
      </div>

      {/* for small screen */}
      <div className="block sm:hidden w-full px-8 text-left bg-teal-900  pb-12 pt-4 ">
        <p className="font-bold text-base text-white">
          {slide?.Type == "Blog" ? "Latest Blog" : "Latest Publication"}
        </p>
        <h1 className="text-lg font-bold mb-2 text-white">{slide?.Title}</h1>

        <Link
          href={getRoute()}
          className=" px-8  py-2 rounded-full bg-teal-800 text-white font-bold text-base shadow-md cursor-pointer "
        >
          Read Now
        </Link>
      </div>
    </div>
  );
};

export const MissionSlider = ({ vissionSliderImages }) => {
  const sortedVissionSliderImages = sortArrayByKey(
    vissionSliderImages,
    "order"
  );
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        className="mySwiper "
      >
        {sortedVissionSliderImages.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <MissionSlide imageSrc={slide.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const MissionSlide = ({ imageSrc }) => {
  return (
    <div className="h-72 sm:h-96 rounded">
      <Image
        height={200}
        width={200}
        className="rounded w-full"
        src={imageSrc || banner1}
        alt="banner image"
      />
    </div>
  );
};
