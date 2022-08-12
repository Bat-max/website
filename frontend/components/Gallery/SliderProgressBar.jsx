import { ProgressBar, Step, ProgressBarWrapper } from "./styles";
import { useSwiper } from "swiper/react";

const SliderProgressBar = ({ totalSlides, currentSlide }) => {
  const swiper = useSwiper();

  const handleStepClick = (index) => {
    swiper.slideTo(index);
  };

  return (
    <ProgressBarWrapper width={totalSlides.length * 40}>
      {totalSlides.length > 1 && (
        <ProgressBar percent={(currentSlide / (totalSlides.length - 1)) * 100}>
          {totalSlides.map((slide, index) => {
            return (
              <Step
                key={slide}
                accomplished={index <= swiper.activeIndex}
                onClick={() => handleStepClick(index)}
              >
                Page {index}
              </Step>
            );
          })}
        </ProgressBar>
      )}
    </ProgressBarWrapper>
  );
};

export default SliderProgressBar;
