import {
  CardsSection,
  Container,
  MainHeading,
  Gallery,
  Layout,
} from "../components";
import {
  HomeHeader,
  SplitSection,
  PhotoSection,
  CircleList,
  RegularList,
} from "../components/Home";
import InfoBox from "../components/InfoBox";
import { fetchAPI } from "../lib/api";

export default function Home({ homeData, galleryData }) {
  const {
    slider,
    autoplayDelay,
    splitSection,
    imgSection,
    delivery,
    garageSubstrate,
    prepareGarage,
    infobox,
    seo,
  } = homeData;

  return (
    <Layout
      id="home-page"
      seo={seo}
      shareImage={slider && slider[0]?.img}
      fallbackTitle={"Home page"}
    >
      <HomeHeader slider={slider} autoplayDelay={autoplayDelay} />
      <SplitSection sections={splitSection} />
      <PhotoSection data={imgSection} />
      <CircleList data={delivery} id="delivery" />
      <Container width={1200} id="garage-substrate">
        <MainHeading subheading={garageSubstrate.lead}>
          {garageSubstrate.heading}
        </MainHeading>
        <RegularList data={garageSubstrate.list} bigSpaces />
      </Container>
      <CardsSection data={prepareGarage} />
      <Gallery data={galleryData} />
      <InfoBox data={infobox} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const homeData = await fetchAPI("/home", {
    populate: {
      slider: {
        populate: "*",
      },
      splitSection: {
        populate: "*",
      },
      imgSection: {
        populate: {
          img: { populate: "*" },
          list: {
            populate: "*",
          },
        },
      },
      delivery: {
        populate: "*",
      },
      garageSubstrate: {
        populate: "*",
      },
      prepareGarage: {
        populate: {
          list: {
            populate: "*",
          },
        },
      },
      infobox: {
        populate: "*",
      },
      seo: {
        populate: "*",
      },
    },
    locale: context.locale,
  });

  const galleryData = await fetchAPI("/gallery", {
    populate: "*",
    locale: context.locale,
  });

  const images = galleryData.data.attributes.images.data.slice(0, 16);

  const limitImages = {
    ...galleryData.data.attributes,
    images: {
      data: images,
    },
  };

  return {
    props: {
      context,
      homeData: homeData.data.attributes,
      galleryData: limitImages,
    },
  };
}
