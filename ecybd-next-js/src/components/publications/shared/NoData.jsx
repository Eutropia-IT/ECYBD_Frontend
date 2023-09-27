import React from "react";
import noData from "../../../assets/noData.jpg";

import Image from "next/image";
const NoData = () => {
  return (
    <div>
      <Image
        src={noData}
        className=" w-full md:w-1/2 lg:w-5/12 2xl:w-4/12 mx-auto"
      />
    </div>
  );
};

export default NoData;
