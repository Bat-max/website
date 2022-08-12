import { Container, MainHeading, StrapiImage } from "../../components";
import Image from "next/image";
import Layout from "../../components/Layout";
import { fetchAPI } from "../../lib/api";
import {
  Category,
  Heading,
  Item,
  List,
  ImageWrapper,
  Lead,
  Info,
  InfoImageWrapper,
} from "./styles";

export default function Colors({ colorsData }) {
  const { heading, background, categories, info, seo } = colorsData;

  return (
    <Layout seo={seo} shareImage={background} fallbackTitle={heading}>
      <MainHeading bg={background} page>
        {heading}
      </MainHeading>
      {categories.map((category) => (
        <Category key={category.id}>
          <Heading>{category.heading}</Heading>
          <Container>
            <List>
              {category.colors.map((color) => (
                <Item key={color.id}>
                  <ImageWrapper>
                    <StrapiImage
                      src={color.img}
                      objectFit="contain"
                      objectPosition="center"
                      height={180}
                      width={180}
                    />
                  </ImageWrapper>
                  <p>{color.title}</p>
                  <Lead>{color.lead}</Lead>
                </Item>
              ))}
            </List>
          </Container>
        </Category>
      ))}
      <Container
        style={{ display: "flex", justifyContent: "center", paddingTop: "0px" }}
      >
        <Info>
          <InfoImageWrapper>
            <Image
              src="/info.svg"
              alt=""
              width={50}
              height={50}
              className="info-img"
            />
          </InfoImageWrapper>
          <p>{info}</p>
        </Info>
      </Container>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const colorsData = await fetchAPI("/color", {
    populate: {
      categories: {
        populate: {
          colors: {
            populate: "*",
          },
        },
      },
      background: {
        populate: "*",
      },
      seo: {
        populate: "*",
      },
    },
    locale: context.locale,
  });

  return {
    props: {
      context,
      colorsData: colorsData.data.attributes,
    },
  };
}
