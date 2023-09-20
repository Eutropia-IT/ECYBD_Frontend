import React from "react";

const PageTop = ({ title, description }) => {
  return (
    <div className=" bg-teal-50 py-6">
      <div className="container px-8 2xl:px-0 mx-auto">
        <h1 className="text-2xl sm:text-3xl text-gray-700 md:text-4xl font-bold">
          {title}
        </h1>
        <p className="mt-2 text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default PageTop;
