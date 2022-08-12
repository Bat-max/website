import { StrapiImage } from "../";
import { Heading, PageHeading, Inner, SubHeading, Wrapper } from "./styles";

const MainHeading = ({
  children,
  color = "primary",
  subheading,
  bg,
  page,
  footer,
}) => {
  return (
    <Wrapper bg={bg} footer={footer}>
      {bg && <StrapiImage src={bg} layout="fill" objectFit="cover" priority />}
      {page ? (
        <PageHeading page={page} bg={bg} color={color}>
          <Inner>{children}</Inner>
        </PageHeading>
      ) : (
        <Heading color={color} bg={bg} footer={footer}>
          <Inner>{children}</Inner>
        </Heading>
      )}

      {subheading && <SubHeading>{subheading}</SubHeading>}
    </Wrapper>
  );
};

export default MainHeading;
