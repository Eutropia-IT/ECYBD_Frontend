import React, { useState } from "react";
import shortid from "shortid";
import styles from "../header/header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../assets/logo.png";

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
  },
  {
    id: shortid.generate(),
    text: "DICOCESEN COMMISSIONS",
    path: "/diocesen-commissions",
    subRoutes: [
      {
        id: shortid.generate(),
        text: "BARISHAL",
        path: "/diocesen-commissions/barishal",
      },
      {
        id: shortid.generate(),
        text: "CHITTAGONG",
        path: "/diocesen-commissions/chittagong",
      },
      {
        id: shortid.generate(),
        text: "DHAKA",
        path: "/diocesen-commissions/dhaka",
      },
      {
        id: shortid.generate(),
        text: "DINJAPUR",
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
            text: "BCSM BARTA",
            path: "/resources/publications/bcsm-barta",
          },
        ],
      },
    ],
  },
  {
    id: shortid.generate(),
    text: "CONTACT",
    path: "/contact",
  },
];

const SideNavbar = ({ isOpen, handleSidebar }) => {
  const pathname = usePathname();

  const [subRouteId, setSubRouteId] = useState(null);
  const [subSubRouteId, setSubSubRouteId] = useState(null);

  const handleSubRoute = (id) => {
    if (subRouteId === id) return setSubRouteId(null);
    else setSubRouteId(id);
  };

  const handleSubSubRoute = (id) => {
    if (subSubRouteId === id) return setSubSubRouteId(null);
    else setSubSubRouteId(id);
  };

  return (
    <div
      className={
        isOpen
          ? `fixed w-full py-3 sm:w-96 block xl:hidden bottom-0 top-0 z-10 bg-white  ${styles.showSidebar}`
          : `${styles.hideSidebar}`
      }
    >
      <div className="flex justify-between px-5">
        <div>
          <Link onClick={handleSidebar} href="/">
            <Image className="w-12" src={logo} alt="logo" />
          </Link>
        </div>
        <div className=" grid place-items-center">
          <button
            onClick={handleSidebar}
            className="h-12 w-12 text-3xl grid place-items-center rounded-full "
          >
            <IoCloseOutline />
          </button>
        </div>
      </div>

      <div className="mt-5">
        {linkData.map((link) => {
          return (
            <div key={link.id} className={`${styles.rootLinks1} mb-2`}>
              <div className="flex justify-start items-center px-5">
                <Link
                  onClick={handleSidebar}
                  className={`
                 px-2 2xl:px-3 py-2  rounded
                font-semibold text-base w-full
                transition duration-200 ease-in-
                flex items-center justify-start
                
                hover:bg-teal-600 hover:text-white

                ${
                  pathname === link.path
                    ? "bg-teal-600 text-white"
                    : "text-black"
                } 
                `}
                  href={link.path}
                >
                  {link.text}
                </Link>

                {link?.subRoutes && (
                  <button
                    onClick={() => handleSubRoute(link.id)}
                    className=" w-10 flex justify-center hover:bg-gray-100 h-10 items-center rounded-full"
                  >
                    {link.id == subRouteId ? <FaAngleUp /> : <FaAngleDown />}
                  </button>
                )}
              </div>

              {link?.subRoutes && (
                <div
                  className={
                    link.id == subRouteId
                      ? `flex flex-col items-center bg-gray-100 py-2 px-5`
                      : `hidden`
                  }
                >
                  {link.subRoutes.map((subLink) => {
                    return (
                      <div key={subLink.id} className="w-full">
                        <div className="flex justify-center items-center">
                          <Link
                            onClick={handleSidebar}
                            className={`py-1 w-full text-center   flex items-center justify-start px-5 hover:bg-teal-600 hover:text-white rounded
                            
                            
                             ${
                               pathname === subLink.path
                                 ? "bg-teal-600 text-white"
                                 : "text-black"
                             } 

                            `}
                            key={subLink.id}
                            href={subLink.path}
                          >
                            {subLink.text}
                          </Link>

                          {subLink?.subRoutes && (
                            <button
                              onClick={() => handleSubSubRoute(subLink.id)}
                              className=" w-10 flex justify-center hover:bg-gray-200 h-10 items-center rounded-full"
                            >
                              {subLink.id == subSubRouteId ? (
                                <FaAngleUp />
                              ) : (
                                <FaAngleDown />
                              )}
                            </button>
                          )}
                        </div>

                        {subLink?.subRoutes && (
                          <div
                            className={
                              subSubRouteId == subLink.id
                                ? `block items-center bg-gray-200 w-12/12 py-2 px-5`
                                : `hidden`
                            }
                          >
                            {subLink.subRoutes.map((subSubLink) => {
                              return (
                                <Link
                                  key={subSubLink.id}
                                  onClick={handleSidebar}
                                  className={`py-1 w-full text-center   flex items-center justify-start px-5 hover:bg-teal-600 hover:text-white rounded
                                  
                                   
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
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavbar;
