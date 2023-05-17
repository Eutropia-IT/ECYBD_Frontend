import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
