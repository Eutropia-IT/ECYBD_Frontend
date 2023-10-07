import React from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const ImageSlider = ({ sliderImages }) => {
  // TODO: we have to do this task when api is ready. For now we are using dummy data.(images array)
  // the sliderImages props will be the original images array like below example. Either you can use the original images array directly which your are getting from props or you can create a new array with the required properties from sliderImages props and use it in the ImageGallery component.

  const images = sliderImages?.map((image) => {
    return {
      original: image?.image_url,
      thumbnail: image?.image_url,
      originalClass: "imageGalleryImageHeight",
      thumbnailClass: "thumbnailClass",
    };
  });

  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //     originalClass: "imageGalleryImageHeight",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //     originalClass: "imageGalleryImageHeight",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //     originalClass: "imageGalleryImageHeight",
  //   },
  // ];

  return (
    <div>
      <ImageGallery
        slideOnThumbnailOver={true}
        showBullets={true}
        items={images}
      />
    </div>
  );
};

export default ImageSlider;
