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
import banner from "../../assets/banner.png";
import banner1 from "../../assets/banner1.jpg";
import Image from "next/image";
import Link from "next/link";

const generateSliders = () => {
  let array = [];
  for (let i = 0; i < 5; i++) {
    array.push(
      <SwiperSlide key={i}>
        <Slider />
      </SwiperSlide>
    );
  }
  return array;
};

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        // }}
        className="mySwiper"
      >
        {generateSliders()}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

const Slider = () => {
  return (
    <div className={styles.sliderRoot}>
      <Image src={banner1} alt="banner image" />

      <div
        style={{ backgroundColor: "#efeeee42" }}
        className="hidden sm:block absolute bottom-0 left-0 w-10/12 md:w-10/12 lg:w-7/12  px-8 text-left rounded-sm  py-5 md:py-8 lg:py-12"
      >
        <p className="font-bold text-white">Lorem, ipsum dolor</p>
        <h1 className="text-2xl md:text-4xl font-bold mt-1 md:mt-3 text-white">
          {" "}
          Lorem, ipsum dolor{" "}
        </h1>

        <button className=" px-8 md:px-12 py-2 md:py-3 mt-4 md:mt-6 rounded-full bg-teal-600 text-white font-bold">
          {" "}
          About Us
        </button>
      </div>

      {/* for small screen */}
      <div
        // style={{ backgroundColor: "#a8a7a79c" }}
        className="block sm:hidden w-full px-8 text-left bg-teal-900  py-5 "
      >
        <p className="font-bold text-base text-white">Lorem, ipsum dolor</p>
        <h1 className="text-xl font-bold mb-3 text-white">
          {" "}
          Lorem, ipsum dolor{" "}
        </h1>

        <Link
          href={"/about"}
          className=" px-8  py-2 rounded-full bg-teal-800 text-white font-bold text-base"
        >
          {" "}
          About Us
        </Link>
      </div>
    </div>
  );
};
