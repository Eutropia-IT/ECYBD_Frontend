"use client";

import React from "react";
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

const demoData = [1, 2, 3, 4, 5, 6];

const Home = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* banner part */}
      <div>
        <Image className="w-full" src={banner} alt="banner" />
      </div>

      {/* slider */}

      <div className="relative  w-full mx-auto  bg-gray-100">
        <Slider
          className=" w-10/12 sm:w-2/3 lg:w-1/2 mx-auto py-5 mb-10"
          {...settings}
        >
          <div className="p-5 sm:p-10 bg-white w-1/2 rounded-lg">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              animi consectetur debitis perspiciatis quam eveniet fuga expedita
              repudiandae saepe suscipit.
            </p>
            <h1 className="mt-8 font-semibold text-lg text-center ">
              John 3:16 (KJV)
            </h1>
          </div>
          <div className="p-5 sm:p-10 bg-white w-1/2 rounded-lg">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              animi consectetur debitis perspiciatis quam eveniet fuga expedita
              repudiandae saepe suscipit.
            </p>
            <h1 className="mt-8 font-semibold text-lg text-center ">
              John 3:16 (KJV)
            </h1>
          </div>

          <div className="p-5 sm:p-10 bg-white w-1/2 rounded-lg">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              animi consectetur debitis perspiciatis quam eveniet fuga expedita
              repudiandae saepe suscipit.
            </p>
            <h1 className="mt-8 font-semibold text-lg text-center ">
              John 3:16 (KJV)
            </h1>
          </div>
        </Slider>
      </div>

      {/* first content part */}

      <div className="w-11/12 mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <h1 className="text-3xl  font-semibold mb-3">
              About ECY Bangladesh
            </h1>
            <p className="text-justify text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              nisi ipsam, saepe, accusamus eligendi nam consequatur praesentium
              iure at blanditiis quidem corrupti tempora expedita illum
              obcaecati dolor ullam sequi ab rerum inventore quis! Rerum
              excepturi, deleniti, laudantium ex at beatae saepe incidunt
              praesentium neque distinctio animi aliquam natus totam. Totam
              possimus hic error asperiores, nesciunt obcaecati. Corporis
              reprehenderit tempora quod libero saepe at quas iste. Dolorem
              possimus eaque fugiat nemo est sit corporis velit, illo, vel
              accusantium, cumque fuga et molestiae? Cum, eos temporibus! Libero
              expedita mollitia, voluptatum nostrum voluptates exercitationem
              similique illum neque nisi enim ab molestias reiciendis quod?
            </p>
          </div>

          <div>
            <h1 className="text-3xl  font-semibold mb-3">Mission & Vison</h1>
            <p className="text-justify text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              nisi ipsam, saepe, accusamus eligendi nam consequatur praesentium
              iure at blanditiis quidem corrupti tempora expedita illum
              obcaecati dolor ullam sequi ab rerum inventore quis! Rerum
              excepturi, deleniti, laudantium ex at beatae saepe incidunt
              praesentium neque distinctio animi aliquam natus totam. Totam
              possimus hic error asperiores, nesciunt obcaecati. Corporis
              reprehenderit tempora quod libero saepe at quas iste. Dolorem
              possimus eaque fugiat nemo est sit corporis velit, illo, vel
              accusantium, cumque fuga et molestiae? Cum, eos temporibus! Libero
              expedita mollitia, voluptatum nostrum voluptates exercitationem
              similique illum neque nisi enim ab molestias reiciendis quod?
            </p>
          </div>
        </div>
        <div>
          <Image className="w-full" src={mensImage} alt="mens" />
        </div>
      </div>

      {/* our  objectives part */}
      <div className="w-11/12 mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 ">
        <div>
          <Image className="w-full" src={collage} alt="collage" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-3xl  font-semibold mb-3">Our Objectives </h1>

            <div className=" flex flex-col items-start">
              <ul className="list-disc ">
                <li className="objectivesOption">List item </li>
                <li className="objectivesOption">List item </li>
                <li className="objectivesOption">List item </li>
                <li className="objectivesOption">List item </li>
                <li className="objectivesOption">List item </li>
              </ul>

              <button className="px-8 py-2 text-teal-800 rounded-full border border-teal-700 mt-8">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ececutive & commmision members part */}

      <div className="w-full bg-gray-100 py-8 mt-12">
        <h1 className="text-3xl  text-center font-semibold py-8">
          Executive & Commision Members
        </h1>

        <div className="px-5 sm:px-0 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-8">
          {demoData.map((data) => {
            return (
              <div key={data}>
                <Image className="w-full" src={menImage} alt="men" />
                <h3 className="font-semibold px-5 mt-2 text-lg text-center">
                  {" "}
                  John Doe
                </h3>
                <p className="text-center mt-1 text-sm opacity-80 text-teal-700">
                  Pastor
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="px-8 py-2 text-teal-800 rounded-full border border-teal-700 mt-8">
            View Full Committie
          </button>
        </div>
      </div>

      {/* we are recognised by */}

      <div className="w-full bg-gray-100 py-8 ">
        <h1 className="text-3xl  text-center font-semibold py-8">
          We Are Recognised By
        </h1>

        <div className="px-5 sm:px-0 container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-8">
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
      </div>
    </div>
  );
};

export default Home;
