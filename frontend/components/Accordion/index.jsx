import { useState } from "react";
import { Wrapper, Body, Toggler, Chevron } from "./styles";

export default function Accordion({ title, children, opened }) {
  const [isShowing, setIsShowing] = useState(opened);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <Wrapper isShowing={isShowing}>
      <Toggler onClick={toggle} type="button">
        {title}
        <Chevron opened={isShowing} />
      </Toggler>
      <Body isShowing={isShowing}>{children}</Body>
    </Wrapper>
  );
}
