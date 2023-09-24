"use client";
import React, { useState } from "react";
import PdfCard from "./PdfCard";
import PdfViewer from "./PdfViewer";

const PdfCardContainer = ({ containerFor, allPdf }) => {
  const [pdfUrl, setPdfUrl] = useState("");

  const handlePdfUrl = (url) => {
    setPdfUrl(url);
  };

  return (
    <div className="container px-8 2xl:px-0 mx-auto pb-12">
      <PdfViewer pdfUrl={pdfUrl} />
      <div className="mt-12">
        <h1 className="mb-8 text-xl md:text-3xl text-gray-700 font-bold text-center">
          All {containerFor}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          {/* should be loop through allPdf */}
          <div onClick={handlePdfUrl}>
            <PdfCard cardFor={containerFor} />
          </div>
          <div onClick={handlePdfUrl}>
            <PdfCard cardFor={containerFor} />
          </div>
          <div onClick={handlePdfUrl}>
            <PdfCard cardFor={containerFor} />
          </div>
          <div onClick={handlePdfUrl}>
            <PdfCard cardFor={containerFor} />
          </div>
          <div onClick={handlePdfUrl}>
            <PdfCard cardFor={containerFor} />
          </div>
          <div onClick={handlePdfUrl}>
            <PdfCard cardFor={containerFor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfCardContainer;
