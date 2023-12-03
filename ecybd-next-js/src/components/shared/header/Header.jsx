"use client";

import styles from "./header.module.scss";
import Image from "next/image";
import React, { useState } from "react";

import logo from "../../../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineBars } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import shortid from "shortid";
import SideNavbar from "../sideNavbar/SideNavbar";

const linkData = [
  {
    id: shortid.generate(),
    text: "HOME",
    path: "/",
  },
  {
    id: shortid.generate(),
    text: "ABOUT",
    path: "/about",
    subRoutes: [
      {
        id: shortid.generate(),
        text: "ABOUT US",
        path: "/about",
      },
      {
        id: shortid.generate(),
        text: "SECRETARIAT",
        path: "/about/secretariat",
      },
    ],
  },
  {
    id: shortid.generate(),
    text: "DIOCESAN COMMISSIONS",
    path: "/diocesen-commissions",
    subRoutes: [
      {
        id: shortid.generate(),
        text: "BARISHAL",
        path: "/diocesen-commissions/barishal",
      },

      {
        id: shortid.generate(),
        // text: "Chattogram",
        text: "CHATTOGRAM",
        path: "/diocesen-commissions/chittagong",
      },
      {
        id: shortid.generate(),
        text: "DHAKA",
        path: "/diocesen-commissions/dhaka",
      },

      {
        id: shortid.generate(),
        text: "DINAJPUR",
        path: "/diocesen-commissions/dinajpur",
      },
      {
        id: shortid.generate(),
        text: "KHULNA",
        path: "/diocesen-commissions/khulna",
      },

      {
        id: shortid.generate(),
        text: "MYMENSINGH",
        path: "/diocesen-commissions/mymensingh",
      },
      {
        id: shortid.generate(),
        text: "RAJSHAHI",
        path: "/diocesen-commissions/rajshahi",
      },

      {
        id: shortid.generate(),
        text: "SYLHET",
        path: "/diocesen-commissions/sylhet",
      },
    ],
  },

  {
    id: shortid.generate(),
    text: "MOVEMENTS",
    path: "/movements",

    subRoutes: [
      {
        id: shortid.generate(),
        // text: "Bangladesh Catholic Students Movement (BCSM)",
        text: "BCSM",
        path: "/movements",
      },
      {
        id: shortid.generate(),
        text: "Jesus Youth",
        path: "/movements/jesus-youth",
      },
      {
        id: shortid.generate(),
        // text: "Young Christian Students (YCS) & Young Students Movement (YSM)",
        text: "YCS & YSM",
        path: "/movements/ycs-ysm",
      },
    ],
  },
  {
    id: shortid.generate(),
    text: "BLOGS",
    path: "/blogs",
  },
  {
    id: shortid.generate(),
    text: "RESOURCES",
    path: "/resources",
    subRoutes: [
      {
        id: shortid.generate(),
        text: "GALLERY",
        path: "/resources/gallery",
      },
      {
        id: shortid.generate(),
        text: "PUBLICATIONS",
        path: "/resources/publications",
        subRoutes: [
          {
            id: shortid.generate(),
            text: "NEWSLETTERS",
            path: "/resources/publications/newsletters",
          },
          {
            id: shortid.generate(),
            text: "JUBODRISHTY",
            path: "/resources/publications/jubodrishty",
          },
          {
            id: shortid.generate(),
            text: "NOBOKOLLOL",
            path: "/resources/publications/nobokollol",
          },
          {
            id: shortid.generate(),
            text: "SPECIAL EDITION",
            path: "/resources/publications/special-edition",
          },
        ],
      },
    ],
  },
  // {
  //   id: shortid.generate(),
  //   text: "CONTACT",
  //   path: "/contact",
  // },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-50 bg-white w-full shadow-md shadow-gray-400">
      <SideNavbar handleSidebar={handleSidebar} isOpen={isOpen} />
      <div>
        <div className="px-5 py-1 2xl:px-0 container mx-auto grid grid-cols-12 items-center">
          <div className="col-span-3 lg:col-span-2 xl:col-span-2 ">
            <Link href="/">
              <Image className="w-24 lg:w-17 xl:w-24" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="lg:col-span-8 xl:col-span-8 gap-0 2xl:gap-3 hidden lg:flex justify-between 2xl:justify-start z-10">
            {linkData.map((link) => {
              return (
                <div key={link.id} className={styles.rootLinks1}>
                  {link?.subRoutes?.length > 0 ? (
                    <div
                      className={`
                 px-2 2xl:px-3 py-2  rounded
                font-semibold text-sm 2xl:text-base
                transition duration-200 ease-in-
                flex items-center justify-center
                cursor-pointer select-none
                hover:bg-teal-600 hover:text-white `}
                    >
                      {link.text}{" "}
                      {link?.subRoutes && (
                        <span className="pl-1">
                          <FaAngleDown />
                        </span>
                      )}
                    </div>
                  ) : (
                    <Link
                      className={`
                 px-2 2xl:px-3 py-2  rounded
                font-semibold text-sm 2xl:text-base
                transition duration-200 ease-in-
                flex items-center justify-center
                
                hover:bg-teal-600 hover:text-white

                ${
                  pathname === link.path
                    ? "bg-teal-600 text-white"
                    : "text-black"
                } 
                `}
                      href={link.path}
                    >
                      {link.text}{" "}
                      {link?.subRoutes && (
                        <span className="pl-1">
                          <FaAngleDown />
                        </span>
                      )}
                    </Link>
                  )}

                  <div>
                    {link?.subRoutes && (
                      <div
                        className={`${styles.rootLinks2}  absolute right-0 left-0  bg-white  shadow-lg rounded-lg mt-0 `}
                      >
                        {link.subRoutes.map((subLink) => {
                          return (
                            <div
                              key={subLink.id}
                              className={`relative ${
                                subLink.subRoutes?.length > 0 &&
                                styles.rootSubLinks2
                              }`}
                            >
                              {subLink?.subRoutes?.length > 0 ? (
                                <div
                                  className={`
                              px-2 2xl:px-3 py-2  rounded
                              font-normal text-base
                              transition duration-200 ease-in-
                              flex items-center justify-center cursor-pointer select-none   hover:bg-teal-600 hover:text-white
                              ${
                                pathname === subLink.path
                                  ? "bg-teal-600 text-white"
                                  : "text-black"
                              } 
                              `}
                                  // href={subLink.path}
                                >
                                  {subLink.text}

                                  {subLink?.subRoutes && (
                                    <span className="pl-1">
                                      <FaAngleDown />
                                    </span>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  className={`
                              px-2 2xl:px-3 py-2  rounded
                              font-normal text-base
                              transition duration-200 ease-in-
                              flex items-center justify-center
                              
                              hover:bg-teal-600 hover:text-white
                              ${
                                pathname === subLink.path
                                  ? "bg-teal-600 text-white"
                                  : "text-black"
                              } 
                              `}
                                  href={subLink.path}
                                >
                                  {subLink.text}

                                  {subLink?.subRoutes && (
                                    <span className="pl-1">
                                      <FaAngleDown />
                                    </span>
                                  )}
                                </Link>
                              )}

                              {/* <Link
                                className={`
                              px-2 2xl:px-3 py-2  rounded
                              font-normal text-base
                              transition duration-200 ease-in-
                              flex items-center justify-center
                              
                              hover:bg-teal-600 hover:text-white
                              ${
                                pathname === subLink.path
                                  ? "bg-teal-600 text-white"
                                  : "text-black"
                              } 
                              `}
                                href={subLink.path}
                              >
                                {subLink.text}

                                {subLink?.subRoutes && (
                                  <span className="pl-1">
                                    <FaAngleDown />
                                  </span>
                                )}
                              </Link> */}

                              <div className={styles.rootLinks3}>
                                {subLink?.subRoutes && (
                                  <div className="absolute top-0 left-full   bg-white rounded-lg shadow-lg w-full mt-0">
                                    {subLink.subRoutes.map((subSubLink) => {
                                      return (
                                        <Link
                                          key={subSubLink.id}
                                          className={`
                              px-2 2xl:px-3 py-2  rounded
                              font-normal text-base
                              transition duration-200 ease-in-
                              flex items-center justify-center
                              
                              hover:bg-teal-600 hover:text-white
                          
                              
                              ${
                                pathname === subSubLink.path
                                  ? "bg-teal-600 text-white"
                                  : "text-black"
                              } 
                              `}
                                          href={subSubLink.path}
                                        >
                                          {subSubLink.text}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-span-9 lg:col-span-2 xl:col-span-2 flex justify-end  items-center ">
            <Link
              className="font-semibold  bg-teal-700 border-teal-700 border-2 hover:border-teal-700 hover:bg-transparent hover:text-teal-700 hover:font-bold hover:shadow-md hover:shadow-teal-400 px-7 py-2 text-white text-base duration-150
            "
              href={"/contact"}
            >
              CONTACT
            </Link>

            <button
              onClick={handleSidebar}
              className="ml-2 text-4xl  p-3 block lg:hidden"
            >
              <AiOutlineBars />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
