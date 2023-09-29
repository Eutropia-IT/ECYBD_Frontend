"use client";
import React from "react";
import errorImage from "../assets/error.jpg";
import Image from "next/image";

const error = () => {
  return (
    <div>
      <div>
        <Image className="w-full" alt="Error " src={errorImage} />
      </div>
      <div className="text-base text-center text-red-500">
        Error! Something went wrong
      </div>
    </div>
  );
};

export default error;
