import { ImageWrapper, SwiperWrapper } from "./styles";
import StrapiImage from "../StrapiImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SliderProgressBar from "./SliderProgressBar";
import { useState } from "react";

const GallerySlider = ({ openLightboxOnSlide, images, getLightboxImgUrl }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState([]);
  const sliderRows = 2;

  function chunk(items, size) {
    const chunks = [];
    items = [...items];

    while (items.length) {
      chunks.push(items.splice(0, size));
    }

    return chunks;
  }

  const chunkedImages =
    images.data.length > 6 ? chunk(images.data, sliderRows) : null;

  const handleProgress = (e) => {
    setCurrentSlide(e.activeIndex);
    setTotalSlides(e.snapGrid);
  };

  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 600,
    modules: [Pagination],
    breakpoints: {
      500: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      800: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
        speed: 900,
      },
    },
    onSlideChange: handleProgress,
    onResize: handleProgress,
    onInit: handleProgress,
  };

  return (
    <SwiperWrapper>
      <Swiper {...swiperSettings}>
        {chunkedImages
          ? chunkedImages.map((chunk) => {
              return (
                <SwiperSlide key={chunk[0].id}>
                  {chunk.map((item) => (
                    <ImageWrapper
                      key={item.id}
                      onClick={() => {
                        openLightboxOnSlide(getLightboxImgUrl(item));
                      }}
                    >
                      <StrapiImage
                        src={{ data: item }}
                        objectFit="cover"
                        objectPosition="center"
                        height={200}
                        width={400}
                      />
                    </ImageWrapper>
                  ))}
                </SwiperSlide>
              );
            })
          : images.data.map((img) => {
              return (
                <SwiperSlide key={img.id}>
                  <ImageWrapper>
                    <StrapiImage src={{ data: img }} bg width={500} />
                  </ImageWrapper>
                </SwiperSlide>
              );
            })}
        <SliderProgressBar
          totalSlides={totalSlides}
          currentSlide={currentSlide}
        />
      </Swiper>
    </SwiperWrapper>
  );
};

export default GallerySlider;
