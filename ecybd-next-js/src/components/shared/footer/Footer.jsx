import React from "react";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" ">
      <div className="w-11/12 mx-auto border-b border-gray-800 pb-8 ">
        <div className="px-8 sm:px-0 container mx-auto grid  grid-cols-1 lg:grid-cols-3 py-4 pt-8">
          <div>
            <Link href="/">
              <Image className="w-28 mx-auto lg:ml-0" src={logo} alt="logo" />
            </Link>
            <div className="mt-5 flex flex-col gap-3 items-center lg:items-start mb-5 lg:mb-0">
              <a href="telto:0174345800">Phone: 01743452800</a>

              <a href="mailto:ex_y2009@yahoo.com">
                {" "}
                Email: ec_y2009@yahoo.com{" "}
              </a>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold mb-3 mt-4 lg:mt-0">
              Useful Links
            </h2>

            <div className="flex flex-col gap-2">
              <a href="#">About Us </a>
              <a href="#">Contact Us </a>
              <a href="#">Publications </a>
              <a href="#">Support Us </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0">
            <div>
              <h2 className="text-lg font-semibold mb-3 text-center lg:text-left">
                Watch This Video
              </h2>

              <div>
                <iframe
                  width="380"
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
        </div>
      </div>
      <div className="my-8">
        <p className="text-center text-base font-semibold  text-blue-950">
          {" "}
          © Copyright 2023, All Rights Reserved by ECYBD.ORG{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
