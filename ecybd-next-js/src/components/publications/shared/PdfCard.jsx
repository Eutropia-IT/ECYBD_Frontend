"use client";
import React from "react";
import pdfImage from "../../../assets/pdfImage.jpg";
import Image from "next/image";
import styles from "./pdf.module.scss";

const PdfCard = ({ cardFor }) => {
  const handlePdf = () => {
    window.scrollTo({
      top: 200,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={handlePdf} className="cursor-pointer">
      <div className={styles.pdfParent}>
        <Image src={pdfImage} alt="Pdf Image" className="w-full rounded-lg" />
        <div className={styles.pdfChild}>
          <div>
            <h1
              className={`${styles.pdfTitle} text-gray-700 text-center text-xl font-semibold`}
            >
              {cardFor}
            </h1>

            <p className="px-5 text-justify"> Document Title</p>
          </div>
        </div>
      </div>
      <div>
        <p className=" mt-3 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          assumenda cupiditate iste deleniti laboriosam blanditiis quas magnam
        </p>
      </div>
    </div>
  );
};

export default PdfCard;
