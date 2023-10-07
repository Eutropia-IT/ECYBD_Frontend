"use client";

import React from "react";
import PageTop from "../shared/PageTop";
import gallery1 from "../../assets/gallery-1.jpg";
import gallery2 from "../../assets/gallery-2.jpg";
import gallery3 from "../../assets/gallery-3.jpg";
import gallery4 from "../../assets/gallery-4.jpg";
import gallery5 from "../../assets/gallery-5.jpg";
import shortid from "shortid";
import ImageCard from "./ImageCard";
import { useQuery } from "@tanstack/react-query";
import { getGallery } from "@/apiRequestHandlers/gallery";
import RequestStatusUI from "../shared/RequestStatus/RequestStatusUI";
import NoData from "../publications/shared/NoData";

// const galleryData = [
//   {
//     id: shortid.generate(),
//     title: "Gallery 1",
//     category: "category 1",
//     frontImage: gallery1,
//     insideImages: [gallery2, gallery3, gallery4, gallery5],
//   },
//   {
//     id: shortid.generate,
//     title: "Gallery 2",
//     category: "category 2",
//     frontImage: gallery2,
//     insideImages: [gallery1, gallery3, gallery4, gallery5],
//   },
//   {
//     id: shortid.generate(),
//     title: "Gallery 3",
//     category: "category 3",
//     frontImage: gallery3,
//     insideImages: [gallery1, gallery2, gallery4, gallery5],
//   },
//   {
//     id: shortid.generate(),
//     title: "Gallery 4",
//     category: "category 4",
//     frontImage: gallery4,
//     insideImages: [gallery1, gallery2, gallery3, gallery5],
//   },
//   {
//     id: shortid.generate(),
//     title: "Gallery 5",
//     category: "category 5",
//     frontImage: gallery5,
//     insideImages: [gallery1, gallery2, gallery3, gallery4],
//   },
// ];

const Gallery = () => {
  const {
    data: galleryData,
    isLoading: isGalleryLoading,
    isError: isGalleryError,
    error: galleryError,
  } = useQuery({ queryKey: ["gallery"], queryFn: getGallery });

  return (
    <div>
      <PageTop
        title={"Gallery"}
        description={"Curated images of our church programs and events."}
      />

      <RequestStatusUI
        isLoading={isGalleryLoading}
        isError={isGalleryError}
        error={galleryError}
        count={10}
      />

      {!isGalleryError && !isGalleryLoading && galleryData?.length > 0 && (
        <div className=" container mx-auto px-8 2xl:px-0 mt-10 pb-12">
          <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
            {galleryData?.map((item) => {
              return <ImageCard key={item.id} data={item} />;
            })}
          </div>
        </div>
      )}

      {isGalleryError && <NoData />}
    </div>
  );
};

export default Gallery;
