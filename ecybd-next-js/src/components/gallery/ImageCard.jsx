"use client";

import Image from "next/image";
import React from "react";
import styles from "./gallery.module.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ImageSlider from "./ImageSlider";

const ImageCard = ({ data }) => {
  const MySwal = withReactContent(Swal);

  const handleModal = () => {
    MySwal.fire({
      // html: <ImageSlider sliderImages={data.insideImages} />,
      html: <ImageSlider sliderImages={data?.inside_images} />,
      showConfirmButton: false,
      showCloseButton: false,
      width: "90%",
      background: "#021810e6",
    });
  };

  return (
    <div>
      <div className={`${styles.imageParent}`}>
        <Image
          className="h-60 object-cover w-full cursor-pointer"
          src={data?.front_img}
          // src={data.frontImage}
          alt={data?.image_title}
          height={4000}
          width={4000}
        />

        <div onClick={handleModal} className={`${styles.imageChild}`}>
          <div>
            <h1
              className={`text-xl font-semibold text-gray-700 ${styles.imageTitle}`}
            >
              {data?.image_title}
            </h1>
            <h2 className={`text-base text-teal-950   ${styles.imageCategory}`}>
              {data?.short_description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
