import Layout from "../../components/Layout";
import { fetchAPI } from "../../lib/api";
import CustomHead from "../../lib/head";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  Container,
  OffersList,
  StrapiImage,
} from "../../components";
import {
  OfferImage,
  OfferContent,
  Title,
  Category,
  GalleryWrapper,
  ThumbNail,
  RelatedOffers,
  RelatedHeading,
} from "./styles";
import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useState } from "react";

export default function Offer({ currentOffer, global, relatedOffers }) {
  const { name, images, category, description, addInfo, seo } = currentOffer;
  const { name: categoryName, slug: categorySlug } = category.data.attributes;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setactiveIndex] = useState(0);

  const addInfoByCat = category.data.attributes.addInfoByCat;

  const globalData = global?.data?.attributes;

  return (
    <Layout
      seo={seo}
      shareImage={images?.data?.length && images?.data[0]}
      fallbackTitle={name}
    >
      <Container width={1200} style={{ marginTop: "30px" }}>
        <OfferContent>
          {images?.data?.length > 0 ? (
            <GalleryWrapper>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : "",
                }}
                modules={[Navigation, Thumbs]}
                className="offer-images"
                onSlideChange={({ activeIndex }) => {
                  setactiveIndex(activeIndex);
                }}
              >
                {images?.data.map((img) => (
                  <SwiperSlide key={img.id}>
                    <OfferImage>
                      <StrapiImage
                        src={img}
                        height={600}
                        width={800}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </OfferImage>
                  </SwiperSlide>
                ))}
              </Swiper>
              {images?.data?.length > 1 && (
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="offer-thumbnails"
                >
                  {images?.data.map((img, i) => (
                    <SwiperSlide key={img.id}>
                      <ThumbNail activeIndex={activeIndex === i}>
                        <StrapiImage
                          src={img}
                          height={200}
                          width={200}
                          objectFit="cover"
                        />
                      </ThumbNail>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </GalleryWrapper>
          ) : (
            <OfferImage fallbackImage>
              <Image
                src="/no-camera.svg"
                width={150}
                height={150}
                alt=""
                objectFit="contain"
                objectPosition="center"
              />
            </OfferImage>
          )}
          <div>
            <Title>{name}</Title>
            <Category>
              {globalData?.categoryText || "Kategoria"}:{" "}
              <Link href={`/categories/${categorySlug}`}>{categoryName}</Link>
            </Category>
            <Accordion title="Opis" opened>
              <ReactMarkdown skipHtml={true}>{description}</ReactMarkdown>
            </Accordion>
            <Accordion title="Dodatkowe informacje" opened>
              <ReactMarkdown skipHtml={true}>
                {addInfo ?? addInfoByCat}
              </ReactMarkdown>
            </Accordion>
          </div>
        </OfferContent>
        {relatedOffers.data.length > 0 && (
          <RelatedOffers>
            <RelatedHeading>
              {globalData?.relatedText || "Pokrewne produkty"}
            </RelatedHeading>
            <OffersList offers={relatedOffers.data} related />
          </RelatedOffers>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticPaths(context) {
  const offers = [];
  for (let i = 0; i < context.locales.length; i++) {
    const locale = context.locales[i];
    const localCategory = await fetchAPI("/offers", {
      fields: ["slug"],
      locale,
    });

    offers.push(...localCategory.data);
  }

  return {
    paths: context.locales
      .map((locale) => {
        return offers?.map((offer) => {
          return { params: { offer: offer.attributes.slug }, locale };
        });
      })
      .flat(),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const offerRes = await fetchAPI("/offers", {
    filters: {
      slug: {
        $eq: context.params.offer,
      },
    },
    populate: "*",
    locale: context.locale,
  });

  const relatedOffers = await fetchAPI("/offers", {
    filters: {
      slug: {
        $ne: context.params.offer,
      },
      category: {
        id: {
          $eq: offerRes.data[0]?.attributes.category.data.id,
        },
      },
    },
    pagination: {
      limit: 3,
    },
    populate: "*",
    locale: context.locale,
  });

  return {
    props: {
      currentOffer: offerRes.data[0]?.attributes,
      relatedOffers,
    },
  };
}
