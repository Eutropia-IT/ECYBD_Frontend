import React from "react";
import logo from "../../../assets/logo.png";
import recognizedLogo from "../../../assets/recognizedLogo.png";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" ">
      <div className="w-11/12 mx-auto border-b border-gray-800 pb-8 ">
        <div className="px-8 sm:px-0 container mx-auto grid  grid-cols-1 lg:grid-cols-3 py-0 pt-8">
          <div className="">
            <Link className="flex w-28" href="/">
              <Image className="w-28 mx-auto lg:ml-0" src={logo} alt="logo" />
            </Link>
            <div className="mt-3 flex flex-col gap-1 items-center lg:items-start mb-3 lg:mb-0">
              <a href="telto:0174345800">Phone: 01743452800</a>

              <a href="mailto:ex_y2009@yahoo.com">
                {" "}
                Email: ec_y2009@yahoo.com{" "}
              </a>
            </div>

            <div className="flex gap-3">
              <a
                target="_blank"
                href="https://www.facebook.com/EpiscopalCommissionforYouthBangladesh "
                className="text-xl text-[#3b5998] p-1"
              >
                <BsFacebook />
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/@episcopalcommissionforyout2219/videos "
                className="text-2xl text-[#CD201F] p-1"
              >
                {" "}
                <AiFillYoutube />{" "}
              </a>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold mb-3 mt-4 lg:mt-0">
              Useful Links
            </h2>

            <div className="flex flex-col gap-1">
              <Link href="/about">About Us </Link>
              <Link href="/resources/gallery">Gallery </Link>
              <Link href="/movements">Movements </Link>
              <Link href="/contact">Contact Us </Link>
              <Link href="/resources/publications/newsletters">
                Publications{" "}
              </Link>
              <Link href="/donate">Support Us </Link>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0">
            <div>
              <h2 className="text-lg font-semibold mb-3 text-center ">
                We Are Recognised By
              </h2>

              <div className="flex justify-center">
                <Image
                  className="w-8/12"
                  src={recognizedLogo}
                  alt="recognized"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 sm:my-4">
        <p className="text-center text-sm sm:text-base font-semibold  text-blue-950">
          {" "}
          © Copyright 2023, All Rights Reserved by ECYBD.ORG{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
