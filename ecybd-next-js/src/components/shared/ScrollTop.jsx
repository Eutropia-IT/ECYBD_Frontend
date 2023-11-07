"use client";

import React from "react";
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  return (
    <div>
      <ScrollToTop
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: "white",
          borderRadius: "50%",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
        }}
        smooth
      />
    </div>
  );
};

export default ScrollTop;
