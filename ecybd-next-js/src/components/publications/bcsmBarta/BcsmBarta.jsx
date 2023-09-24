import PageTop from "@/components/shared/PageTop";
import React from "react";
import PdfCardContainer from "../shared/PdfCardContainer";

const BcsmBarta = () => {
  const allData = [];
  return (
    <div>
      <PageTop
        title="Bcsm Barta"
        description={
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt!"
        }
      />

      <PdfCardContainer allPdf={allData} containerFor={"Bcsm Barta"} />
    </div>
  );
};

export default BcsmBarta;
