import { MainHeading, Container } from "../";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { getStrapiURL } from "../../lib/api";
import GallerySlider from "./GallerySlider";
import GalleryList from "./GalleryList";

const Gallery = ({ data, page }) => {
  const { heading, cover, images } = data;
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: "",
  });

  function openLightboxOnSlide(src) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: src,
    });
  }

  const getLightboxImgUrl = (image) => {
    const srrOptimizedImg = image.attributes?.formats?.large?.url;
    const url = srrOptimizedImg ?? image.attributes.url;

    return getStrapiURL(url);
  };

  const lightboxImagesArr = images.data.map((image) => {
    const url = getLightboxImgUrl(image);
    return url;
  });

  return (
    <div>
      <MainHeading bg={cover} page={page}>
        {heading}
      </MainHeading>
      <Container width={1200}>
        {page ? (
          <GalleryList
            openLightboxOnSlide={openLightboxOnSlide}
            images={images}
            getLightboxImgUrl={getLightboxImgUrl}
          />
        ) : (
          <GallerySlider
            openLightboxOnSlide={openLightboxOnSlide}
            images={images}
            getLightboxImgUrl={getLightboxImgUrl}
          />
        )}
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={lightboxImagesArr}
          source={lightboxController.slide}
        />
      </Container>
    </div>
  );
};

export default Gallery;
