import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;
  grid-gap: clamp(20px, 4vw, 50px);

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Item = styled.li`
  min-width: 200px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const StyledLink = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.add1};
  font-size: 26px;
  font-weight: 300;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 250px;
  margin-bottom: 20px;
  cursor: pointer;

  span {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const OfferContent = styled.section`
  @media ${({ theme }) => theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(20px, 4vw, 60px);
  }
`;

export const OfferImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  min-height: 250px;
  max-height: 450px;
  overflow: hidden;
  border-radius: 10px;
  border: ${({ fallbackImage, theme }) =>
    fallbackImage ? `1px solid ${theme.colors.add1}` : "none"};
`;

export const Title = styled.h1`
  padding-bottom: 10px;
  margin-top: 14px;
  border-bottom: 1px solid grey;
  font-weight: 300;
  font-size: clamp(24px, 4vw, 40px);

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-top: 0;
  }
`;

export const Category = styled.p`
  margin: 20px 0;
`;

export const GalleryWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const ThumbNail = styled.div`
  border-radius: 10px;
  overflow: hidden;
  opacity: ${({ activeIndex }) => (activeIndex ? 1 : 0.5)};
  transition: opacity 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  img {
    border-radius: 8px;
  }
`;

export const RelatedOffers = styled.div`
  margin: 45px 0;
  border-top: ${({ theme }) => `1px solid ${theme.colors.add1}`};
`;

export const RelatedHeading = styled.h2`
  margin: 15px 0;
  font-weight: 400;
`;
