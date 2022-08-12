import styled from "styled-components";
import { css } from "styled-components";

export const Section = styled.section`
  padding: 10px 0;
  margin: 10px 0;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }
`;

export const Article = styled.article`
  flex-grow: 1;
  width: 100%;
  max-width: ${({ width }) =>
    width
      ? css`
          ${width}px
        `
      : "1440px"};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.section};
`;
