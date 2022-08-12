import { Article, Section } from "./styles";

const Container = ({ children, type, width, id, style }) => {
  if (type === "inner") {
    return (
      <Section style={style} id={id}>
        {children}
      </Section>
    );
  } else {
    return (
      <Article style={style} width={width} id={id}>
        {children}
      </Article>
    );
  }
};

export default Container;
