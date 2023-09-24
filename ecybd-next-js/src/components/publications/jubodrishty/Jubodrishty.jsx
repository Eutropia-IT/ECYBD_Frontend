import PageTop from "@/components/shared/PageTop";
import React from "react";
import PdfCardContainer from "../shared/PdfCardContainer";

const Jubodrishty = () => {
  const allData = [];
  return (
    <div>
      <PageTop
        title="Jubodrishty"
        description={
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt!"
        }
      />

      <PdfCardContainer allPdf={allData} containerFor={"Jubodrishty"} />
    </div>
  );
};

export default Jubodrishty;
