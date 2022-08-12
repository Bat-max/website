import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url } = media?.data?.attributes || media?.attributes;
  const optimizedLargeImgUrl = media?.data?.attributes.formats?.large?.url;

  const finalUrl = optimizedLargeImgUrl ?? url;
  const imageUrl = finalUrl.startsWith("/") ? getStrapiURL(finalUrl) : finalUrl;
  return imageUrl;
}
