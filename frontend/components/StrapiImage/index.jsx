import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";

const StrapiImage = ({
  alt,
  src,
  layout,
  width,
  height,
  objectFit,
  objectPosition,
  bg,
  priority,
}) => {
  return (
    <Image
      alt={alt || src?.data?.attributes?.alternativeText}
      src={src && getStrapiMedia(src)}
      layout={layout}
      width={bg ? 1920 : width}
      height={bg ? 1080 : height}
      objectFit={bg ? "cover" : objectFit}
      objectPosition={bg ? "center" : objectPosition}
      priority={priority}
      style={{
        zIndex: bg && 0,
      }}
    />
  );
};

export default StrapiImage;
