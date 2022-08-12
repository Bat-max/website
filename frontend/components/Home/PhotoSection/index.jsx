import {
  ImgWrapper,
  Wrapper,
  Inner,
  List,
  Item,
  Content,
  Heading,
  Lead,
  ContentWrapper,
  Icon,
} from "./styles";
import { MainHeading, StrapiImage } from "../../";

const PhotoSection = ({ data }) => {
  const { heading, img, list } = data;

  return (
    <Wrapper>
      <Inner>
        <ContentWrapper>
          <MainHeading color="secondary">{heading}</MainHeading>
          <List>
            {list.map(({ id, icon, heading, lead }) => {
              return (
                <Item key={id}>
                  <Icon>
                    <StrapiImage
                      src={icon}
                      height={60}
                      width={60}
                      objectFit="contain"
                    />
                  </Icon>
                  <Content>
                    <Heading>{heading}</Heading>
                    <Lead>{lead}</Lead>
                  </Content>
                </Item>
              );
            })}
          </List>
        </ContentWrapper>
        <ImgWrapper>
          <StrapiImage src={img} width={500} height={500} objectFit="cover" />
        </ImgWrapper>
      </Inner>
    </Wrapper>
  );
};

export default PhotoSection;
