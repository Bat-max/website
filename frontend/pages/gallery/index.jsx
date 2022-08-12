import { Gallery as Images } from "../../components";
import Layout from "../../components/Layout";
import { fetchAPI } from "../../lib/api";

export default function Gallery({ galleryData }) {
  const { seo, cover, heading } = galleryData || {};

  return (
    <Layout seo={seo} shareImage={cover} fallbackTitle={heading}>
      <Images data={galleryData} page />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const galleryData = await fetchAPI("/gallery", {
    populate: "*",
    locale: context.locale,
  });

  return {
    props: {
      context,
      galleryData: galleryData.data.attributes,
    },
  };
}
