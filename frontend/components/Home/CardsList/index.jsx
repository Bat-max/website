import { List, Card, ImgWrapper, Description, Header } from "./styles";
import { Container, StrapiImage, MainHeading } from "../../";

const CardsSection = ({ data, id }) => {
  const { heading, list, lead } = data;

  return (
    <Container width={1260} id={id}>
      <Container type="inner">
        <MainHeading subheading={lead}>{heading}</MainHeading>
        <List>
          {list.map((item) => (
            <Card key={item.id}>
              <Header>{item.heading}</Header>
              <ImgWrapper>
                <StrapiImage
                  src={item.icon}
                  height={400}
                  width={400}
                  objectFit="cover"
                  objectPosition="center"
                />
                {item.lead ? <Description>{item.lead}</Description> : ""}
              </ImgWrapper>
            </Card>
          ))}
        </List>
      </Container>
    </Container>
  );
};

export default CardsSection;
