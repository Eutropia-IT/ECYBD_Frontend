"use client";
import PageTop from "@/components/shared/PageTop";
import React, { useState } from "react";
import PdfCardContainer from "../shared/PdfCardContainer";
import { useRequestProcessor } from "@/hooks/useRequestProcessor";
import { getPublications } from "@/apiRequestHandlers/publications";
import CustomPagination from "@/components/shared/paginator/CustomPagination";
import RequestStatusUI from "@/components/shared/RequestStatus/RequestStatusUI";
import CustomSkeleton from "@/components/shared/CustomSkeleton";
import NoData from "../shared/NoData";

const Jubodrishty = () => {
  const itemsPerPage = 6;
  const publicationType = "Jubodrishty";

  const [pageNumber, setPageNumber] = useState(0);
  const { query } = useRequestProcessor();
  const {
    data: allPdf,
    isLoading,
    isError,
    error,
  } = query(["publication", "jubodrishty", pageNumber], () =>
    getPublications(pageNumber, itemsPerPage, publicationType)
  );

  const handlePageNumber = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  return (
    <div>
      <PageTop
        title="Jubodrishty"
        description={
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt!"
        }
      />

      <div className="container px-8 2xl:px-0 mx-auto pb-4">
        <RequestStatusUI
          isError={isError}
          isLoading={isLoading}
          error={error}
          count={15}
        />

        <div className={`mt-12 ${isLoading ? "block" : "hidden"}`}>
          {isLoading && (
            <h1 className="mb-8 text-xl md:text-3xl text-gray-700 font-bold text-center">
              All Jubodrishty
            </h1>
          )}

          {error && (
            <h1 className="text-center text-xl text-red-600">
              {error?.message} Something went Wrong
            </h1>
          )}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
              <div>
                <CustomSkeleton height={150} borderRadius={5} />
                <CustomSkeleton height={20} borderRadius={5} />
                <CustomSkeleton height={30} />
                <CustomSkeleton height={20} borderRadius={5} />
                <CustomSkeleton height={15} />
              </div>
              <div>
                <CustomSkeleton height={150} borderRadius={5} />
                <CustomSkeleton height={20} borderRadius={5} />
                <CustomSkeleton height={30} />
                <CustomSkeleton height={20} borderRadius={5} />
                <CustomSkeleton height={15} />
              </div>
              <div>
                <CustomSkeleton height={150} borderRadius={5} />
                <CustomSkeleton height={20} borderRadius={5} />
                <CustomSkeleton height={30} />
                <CustomSkeleton height={20} borderRadius={5} />
                <CustomSkeleton height={15} />
              </div>
            </div>
          )}
        </div>
      </div>

      {!isError && !isLoading && allPdf?.count > 0 && (
        <PdfCardContainer
          allPdf={allPdf}
          initialPdfUrl={allPdf?.results[0]?.pdf_file}
          containerFor={"Newsletters"}
        />
      )}

      {allPdf?.count === 0 && <NoData />}

      <div className="pb-12">
        <CustomPagination
          handlePageNumber={handlePageNumber}
          dataLength={allPdf?.count}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default Jubodrishty;
