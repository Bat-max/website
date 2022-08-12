import React from "react";
import { StyledLink, ImageWrapper, StyledCard, ItemDetails } from "./styles";
import Link from "next/link";
import Image from "next/image";
import StrapiImage from "../StrapiImage";

const OfferCard = ({ offer }) => {
  return (
    <StyledCard>
      <Link href={`/offer/${offer.attributes.slug}`} passHref>
        <StyledLink>
          <ImageWrapper hasImage={!!offer?.attributes?.images?.data}>
            {offer?.attributes?.images?.data &&
            offer?.attributes?.images?.data[0] ? (
              <StrapiImage
                src={offer?.attributes?.images?.data[0]}
                height={400}
                width={400}
                objectFit="cover"
                objectPosition="center"
              />
            ) : (
              <Image
                src="/no-camera.svg"
                width={100}
                height={100}
                alt="Crossed camera"
                objectFit="contain"
                objectPosition="center"
              />
            )}
          </ImageWrapper>
          <ItemDetails>
            <span>{offer.attributes.name}</span>
          </ItemDetails>
        </StyledLink>
      </Link>
    </StyledCard>
  );
};

export default OfferCard;
