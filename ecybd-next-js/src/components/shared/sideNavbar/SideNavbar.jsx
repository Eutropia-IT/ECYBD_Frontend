import React from "react";
import shortid from "shortid";
import styles from "../header/header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";
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
        text: "Barishal",
        path: "/diocesen-commissions/barishal",
      },
      {
        id: shortid.generate(),
        text: "Chittagong",
        path: "/diocesen-commissions/chittagong",
      },
      {
        id: shortid.generate(),
        text: "Dhaka",
        path: "/diocesen-commissions/dhaka",
      },
      {
        id: shortid.generate(),
        text: "Dinajpur",
        path: "/diocesen-commissions/dinajpur",
      },
      {
        id: shortid.generate(),
        text: "Khulna",
        path: "/diocesen-commissions/khulna",
      },
      {
        id: shortid.generate(),
        text: "Mymensingh",
        path: "/diocesen-commissions/mymensingh",
      },
      {
        id: shortid.generate(),
        text: "Rajshahi",
        path: "/diocesen-commissions/rajshahi",
      },
      {
        id: shortid.generate(),
        text: "Sylhet",
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
    path: "/blog",
  },
  {
    id: shortid.generate(),
    text: "RESOURCES",
    path: "/resources",
    subRoutes: [
      {
        id: shortid.generate(),
        text: "Gallery",
        path: "/resources/gallery",
      },
      {
        id: shortid.generate(),
        text: "Publications",
        path: "/resources/publications",
        subRoutes: [
          {
            id: shortid.generate(),
            text: "Newsletters",
            path: "/resources/publications/newsletters",
          },
          {
            id: shortid.generate(),
            text: "Jubodrishty",
            path: "/resources/publications/jubodrishty",
          },
          {
            id: shortid.generate(),
            text: "Nobokollol",
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

  return (
    <div
      className={
        isOpen
          ? `fixed w-full py-3 sm:w-96 block xl:hidden bottom-0 top-0 z-10 bg-white`
          : "hidden"
      }
    >
      <div className="flex justify-between px-5">
        <div>
          <Link href="/">
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
      {linkData.map((link) => {
        return (
          <div key={link.id} className={styles.rootLinks1}>
            <Link
              className={`
                 px-2 2xl:px-3 py-2  rounded
                font-semibold text-base
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
              {link.text}
              {link?.subRoutes && (
                <span className="pl-1">
                  <FaAngleDown />
                </span>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SideNavbar;
