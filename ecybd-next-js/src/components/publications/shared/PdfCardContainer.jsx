"use client";
import React, { useEffect, useState } from "react";
import PdfCard from "./PdfCard";
import PdfViewer from "./PdfViewer";

const PdfCardContainer = ({ containerFor, allPdf, initialPdfUrl }) => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handlePdfUrl = (url) => {
    setPdfUrl(url);
  };

  useEffect(() => {
    setPdfUrl(`${initialPdfUrl}/` || "");
  }, [initialPdfUrl]);

  return (
    <div className="container px-8 2xl:px-0 mx-auto pb-4">
      <div>
        <PdfViewer pdfUrl={`${pdfUrl}`} />
      </div>
      <div className="mt-12">
        <h1 className="mb-8 text-xl md:text-3xl text-gray-700 font-bold text-center">
          All {containerFor}
        </h1>

        {/* {error && (
          <h1 className="text-center text-xl text-red-600">{error?.message}</h1>
        )} */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          {/* should be loop through allPdf */}

          {allPdf?.results?.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => handlePdfUrl(`${item.pdf_file}/`)}
              >
                <PdfCard
                  content={item}
                  handlePdfUrl={handlePdfUrl}
                  cardFor={containerFor}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PdfCardContainer;
