import PageTop from "@/components/shared/PageTop";
import React from "react";
import PdfCardContainer from "../shared/PdfCardContainer";

const Nobokollol = () => {
  const allData = [];
  return (
    <div>
      <PageTop
        title="Nobokollol"
        description={
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt!"
        }
      />

      <PdfCardContainer allPdf={allData} containerFor={"Nobokollol"} />
    </div>
  );
};

export default Nobokollol;
