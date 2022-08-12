import React from "react";
import StrapiImage from "../StrapiImage";
import { ImageWrapper, Item, List } from "./styles";

const GalleryList = ({ openLightboxOnSlide, images, getLightboxImgUrl }) => {
  return (
    <List>
      {images.data.map((img) => {
        return (
          <Item key={img.id}>
            <ImageWrapper
              page
              onClick={() => {
                openLightboxOnSlide(getLightboxImgUrl(img));
              }}
            >
              <StrapiImage
                src={{ data: img }}
                height={240}
                width={350}
                objectFit="cover"
              />
            </ImageWrapper>
          </Item>
        );
      })}
    </List>
  );
};

export default GalleryList;
