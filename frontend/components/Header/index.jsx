import React from "react";
import { StyledHeader, Heading } from "./styles";

const Header = ({ children, background }) => {
  return (
    <StyledHeader background={background}>
      <Heading>
        <span>{children}</span>
      </Heading>
    </StyledHeader>
  );
};

export default Header;
