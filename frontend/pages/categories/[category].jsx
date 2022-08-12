import Layout from "../../components/Layout";
import { fetchAPI } from "../../lib/api";
import { Container, MainHeading, OffersList } from "../../components";
import ReactMarkdown from "react-markdown";
import { Description } from "./styles";

export default function Category({ currentCategory, offers }) {
  const { name, background, description, seo } = currentCategory;

  return (
    <Layout seo={seo} fallbackTitle={name} shareImage={background}>
      <MainHeading bg={background} page>
        {name}
      </MainHeading>
      <Container width={1200} style={{ margin: "20px auto 0" }}>
        {description && (
          <Description>
            <ReactMarkdown skipHtml={true}>{description}</ReactMarkdown>
          </Description>
        )}
        <OffersList offers={offers?.data} />
      </Container>
    </Layout>
  );
}

export async function getStaticPaths(context) {
  const categories = [];
  for (let i = 0; i < context.locales.length; i++) {
    const locale = context.locales[i];
    const localCategory = await fetchAPI("/categories", {
      fields: ["slug"],
      locale,
    });

    categories.push(...localCategory.data);
  }

  return {
    paths: context.locales
      .map((locale) => {
        return categories?.map((category) => {
          return { params: { category: category.attributes.slug }, locale };
        });
      })
      .flat(),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const categoryRes = await fetchAPI("/categories", {
    filters: {
      slug: context.params.category,
    },
    populate: {
      background: {
        populate: "*",
      },
      seo: {
        populate: "*",
      },
    },
    locale: context.locale,
  });

  const offers = await fetchAPI("/offers", {
    filters: {
      category: {
        id: {
          $eq: categoryRes.data[0]?.id,
        },
      },
    },
    pagination: {
      limit: 100,
    },
    populate: "*",
    locale: context.locale,
  });

  return {
    props: {
      currentCategory: categoryRes.data[0]?.attributes,
      offers,
    },
  };
}
