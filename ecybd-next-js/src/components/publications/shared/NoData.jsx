import React from "react";
import noData from "../../../assets/no-data.png";

import Image from "next/image";
const NoData = () => {
  return (
    <div>
      <Image
        src={noData}
        alt="No Data Found"
        className=" w-full md:w-1/2 lg:w-5/12 2xl:w-4/12 mx-auto"
      />
      <div className="text-2xl text-center font-bold mt-3 mb-8 opacity-60">
        No Data Found!
      </div>
    </div>
  );
};

export default NoData;
