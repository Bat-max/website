import Layout from "../../components/Layout";
import { fetchAPI } from "../../lib/api";
import { useContext } from "react";
import { GlobalContext } from "../_app";
import Link from "next/link";
import { Container, MainHeading, StrapiImage } from "../../components";
import { StyledLink, ImageWrapper, Item, List } from "./styles";

export default function Offer({ pageData }) {
  const { global } = useContext(GlobalContext);
  const categories = global.categories.data;

  const { heading, background, seo } = pageData;

  return (
    <Layout seo={seo} shareImage={background} fallbackTitle={heading}>
      <MainHeading bg={background} page>
        {heading}
      </MainHeading>
      <Container width={1000}>
        <List>
          {categories.map((category) => {
            return category.attributes.offers.data.length ? (
              <Item key={category.id}>
                <Link href={`/categories/${category.attributes.slug}`} passHref>
                  <StyledLink>
                    <ImageWrapper>
                      <StrapiImage
                        src={category.attributes.thumbnail}
                        height={300}
                        width={400}
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </ImageWrapper>
                    <span>{category.attributes.name}</span>
                  </StyledLink>
                </Link>
              </Item>
            ) : null;
          })}
        </List>
      </Container>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const pageData = await fetchAPI("/offer-page", {
    populate: "*",
    locale: context.locale,
  });

  return {
    props: {
      context,
      pageData: pageData.data.attributes,
    },
  };
}
