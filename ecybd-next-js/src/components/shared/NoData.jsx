import React from "react";
import noData from "../../assets/no-data.png";
import Image from "next/image";
const NoData = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <Image className="w-full sm:w-1/2" alt="Error " src={noData} />
      </div>
      <div className="text-2xl text-center font-bold mt-3 mb-8 opacity-60">
        No Data Found!
      </div>
    </div>
  );
};

export default NoData;
