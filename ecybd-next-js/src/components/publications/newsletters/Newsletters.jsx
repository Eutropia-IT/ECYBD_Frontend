import PageTop from "@/components/shared/PageTop";
import React from "react";
import PdfViewer from "../shared/PdfViewer";

const Newsletters = () => {
  return (
    <div>
      <PageTop
        title="Newsletters"
        description={
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt!"
        }
      />

      <div className="container px-8 2xl:px-0 mx-auto pb-12">
        <PdfViewer />

        <div>
          <h1 className="text-red-600 text-xl text-center font-bold mt-8">
            {" "}
            All pdf files link will be here (List view)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
