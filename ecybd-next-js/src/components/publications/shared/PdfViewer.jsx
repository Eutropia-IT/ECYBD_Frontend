"use client";

import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

export default function PdfViewer() {
  const [file, setFile] = useState("/Economics.pdf");
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
      {/* <header>
        <h1>react-pdf sample page</h1>
      </header> */}
      <div className="Example__container ">
        {/* <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>{" "}
          <input onChange={onFileChange} type="file" />
        </div> */}
        <div className="bg-gray-50 w-full">
          <div
            style={{ height: "max-content" }}
            className="Example__container__document drop-shadow-lg rounded relative "
          >
            <div>
              {" "}
              <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
              >
                <Page className="pdf-page" pageNumber={pageNumber} />
                {/* {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))} */}
              </Document>
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
