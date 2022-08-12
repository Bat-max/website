import styled from "styled-components";

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ bigSpaces }) =>
    bigSpaces ? "clamp(14px, 2vw, 20px)" : "10px"};

  &:last-of-type {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    flex-shrink: 0;
    width: 1.3em;
    height: 1.3em;
    background-image: url("/list-icon.svg");
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 10px;
  }
`;
