import Container from "../Container";
import StrapiImage from "../StrapiImage";
import { Wrapper, Box, Heading } from "./styles";
import ReactMarkdown from "react-markdown";

const InfoBox = ({ data }) => {
  return (
    <Container width={1200} id="info-box">
      <Wrapper>
        {data.map((item) => {
          return (
            <Box key={item.id}>
              <StrapiImage
                src={item.icon}
                objectFit="contain"
                objectPosition="center"
                height={60}
                width={60}
              />
              <Heading>
                <ReactMarkdown skipHtml={true}>{item.lead}</ReactMarkdown>
              </Heading>
            </Box>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default InfoBox;
