"use client";

import { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import CustomSkeleton from "@/components/shared/CustomSkeleton";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

export default function PdfViewer({ pdfUrl }) {
  // const [file, setFile] = useState({
  //   url: pdfUrl || "https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",
  // });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (pdfUrl) {
      // When pdfUrl changes, set the new PDF file
      setFile({ url: pdfUrl });
    }
  }, [pdfUrl]);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onFileChange(event) {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="Example w-full overflow-hidden">
      <div className="Example__container ">
        <div className="bg-gray-50 w-full">
          <div
            style={{ height: "max-content" }}
            className="Example__container__document drop-shadow-lg rounded relative "
          >
            <div>
              {pdfUrl && (
                <Document
                  file={file}
                  onLoadSuccess={onDocumentLoadSuccess}
                  options={options}
                  error={
                    <h1 className="text-xl text-center text-red-500">
                      <span className="text-black">
                        Failed to load PDF file.
                      </span>
                      <br />
                      Please disable IDM or other Download Manager and refresh
                      the page
                    </h1>
                  }
                  loading={
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-[#0D9488]"></span>
                    </span>
                  }
                >
                  <Page className="pdf-page" pageNumber={pageNumber} />
                </Document>
              )}
            </div>
          </div>
        </div>

        <div className="text-center  w-full mt-0 sm:mt-5">
          <div className="mt-1 flex justify-around items-center">
            <button
              className="bg-teal-700 text-xs sm:text-base text-white px-5 py-1 rounded "
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <p className="font-bold text-xs sm:text-base">
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button
              className="bg-teal-700 text-xs sm:text-base text-white px-5 py-1 rounded"
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
