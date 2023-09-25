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

import { useRequestProcessor } from "@/hooks/useRequestProcessor";
import { getSlider } from "@/apiRequestHandlers/home";
import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";

const generateSliders = (slider) => {
  let array = [];
  for (let i = 0; i < 5; i++) {
    array.push(<SwiperSlide key={i}>{slider}</SwiperSlide>);
  }
  return array;
};

const HeroSlider = () => {
  const { query } = useRequestProcessor();
  const {
    data: homeBannerSliders,
    isLoading,
    isError,
  } = query(["homeBannerSlider"], getSlider);

  console.log(homeBannerSliders);

  return (
    <div>
      {/* <RequestStatusUI isLoading={true} /> */}
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
        {generateSliders(<Slider />)}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

export const MissionSlider = () => {
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
        {generateSliders(<MissionSlide />)}
      </Swiper>
    </div>
  );
};

const Slider = () => {
  return (
    <div className={styles.sliderRoot}>
      {/* <div className="h-full">
        <CustomSkeleton height={100} />
        <CustomSkeleton height={50} />
        <CustomSkeleton height={100} />
        <CustomSkeleton height={50} />
        <CustomSkeleton height={100} />
        <CustomSkeleton height={50} />
        <CustomSkeleton height={100} />
        <CustomSkeleton height={50} />
        <CustomSkeleton height={100} />
        <CustomSkeleton height={50} />
      </div> */}
      <Image
        className="w-full"
        width={400}
        height={300}
        src={banner1}
        // src={"https://ecybd.eutropia-it.com/media/slider_images/5616.webp"}
        alt="banner image"
      />

      <div
        style={{ backgroundColor: "#efeeee42" }}
        className="hidden sm:block absolute bottom-0 left-0 w-10/12 md:w-10/12 lg:w-7/12  px-8 text-left rounded-sm  py-5 md:py-8 lg:py-12"
      >
        <p className="font-bold text-white">Lorem, ipsum dolor</p>
        <h1 className="text-2xl md:text-4xl font-bold mt-1 md:mt-3 text-white mb-10">
          {" "}
          Lorem, ipsum dolor{" "}
        </h1>

        <Link
          href={"/about"}
          className=" px-8 md:px-12 py-2 md:py-3  md:mt-6 rounded-full bg-teal-700 shadow-xl text-white font-bold"
        >
          About Us
        </Link>
      </div>

      {/* for small screen */}
      <div className="block sm:hidden w-full px-8 text-left bg-teal-900  py-6 pb-10 ">
        <p className="font-bold text-base text-white">Lorem, ipsum dolor</p>
        <h1 className="text-xl font-bold mb-3 text-white">
          {" "}
          Lorem, ipsum dolor{" "}
        </h1>

        <Link
          href={"/about"}
          className=" px-8  py-2 rounded-full bg-teal-800 text-white font-bold text-base shadow-md"
        >
          About Us
        </Link>
      </div>
    </div>
  );
};

const MissionSlide = () => {
  return (
    <div className="h-72 sm:h-96 rounded">
      <Image className="rounded" src={banner1} alt="banner image" />
    </div>
  );
};
