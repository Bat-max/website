import Head from "next/head";
import { getStrapiURL } from "./api";

const CustomHead = ({ seo, shareImage, fallbackTitle, companyName }) => {
  const { metaTitle, metaDescription, keywords } = seo || {};

  const shareImageUrl =
    shareImage?.data?.attributes?.formats?.medium?.url ||
    shareImage?.data?.attributes?.url ||
    shareImage?.attributes?.url;

  return (
    <Head>
      <title>{`${companyName} | ${metaTitle || fallbackTitle}`}</title>
      <meta name="description" content={metaDescription} key="description" />
      <meta name="keywords" content={keywords} />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta
        property="og:title"
        content={`${companyName} | ${metaTitle || fallbackTitle}`}
        key="og:title"
      />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta
        property="og:image"
        content={getStrapiURL(shareImageUrl)}
        key="og:image"
      />
    </Head>
  );
};

export default CustomHead;
