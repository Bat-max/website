import {
  StyledHeader,
  Wrapper,
  Card,
  Content,
  Heading,
  Lead,
  ButtonsWrapper,
  HeaderBackground,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, EffectFade, Autoplay } from "swiper";
import useMenuItems from "../../../hooks/navigation";
import { Container, Button } from "../../";
import StrapiImage from "../../StrapiImage";

const HomeHeader = ({ slider, autoplayDelay }) => {
  const menuItemsData = useMenuItems();

  const getProperButton = (button, color) => {
    const buttonData = menuItemsData.find((e) => e.id === button);

    return (
      buttonData && (
        <Button href={buttonData?.url} color={color}>
          {buttonData?.title}
        </Button>
      )
    );
  };

  return (
    <StyledHeader>
      <Swiper
        slidesPerView={1}
        speed={1000}
        loop
        pagination={{ clickable: true }}
        modules={[Pagination, A11y, EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
      >
        {slider.map(({ id, img, heading, lead, buttonLeft, buttonRight }) => (
          <SwiperSlide key={id}>
            {({ isActive }) => (
              <Wrapper>
                <HeaderBackground>
                  <StrapiImage
                    src={img}
                    height={1080}
                    width={1920}
                    objectFit="cover"
                  />
                </HeaderBackground>
                <Container>
                  <Card isActive={isActive}>
                    <Content isActive={isActive}>
                      <Heading>{heading}</Heading>
                      {lead && <Lead isActive={isActive}>{lead}</Lead>}
                      {(buttonLeft || buttonRight) && (
                        <ButtonsWrapper isActive={isActive}>
                          {buttonLeft && getProperButton(buttonLeft)}
                          {buttonRight &&
                            getProperButton(buttonRight, "secondary")}
                        </ButtonsWrapper>
                      )}
                    </Content>
                  </Card>
                </Container>
              </Wrapper>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledHeader>
  );
};

export default HomeHeader;
