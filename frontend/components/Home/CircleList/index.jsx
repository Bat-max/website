import { List, Item, InnerCircle, OuterCircle } from "./styles";
import { Container, MainHeading } from "../../";

const CircleList = ({ data, id }) => {
  const { heading, list, lead } = data;
  return (
    <Container id={id}>
      <Container type="inner">
        <MainHeading subheading={lead}>{heading}</MainHeading>
        <List>
          {list.map((item) => (
            <Item key={item.id}>
              <OuterCircle>
                <InnerCircle>{item.item}</InnerCircle>
              </OuterCircle>
            </Item>
          ))}
        </List>
      </Container>
    </Container>
  );
};

export default CircleList;
