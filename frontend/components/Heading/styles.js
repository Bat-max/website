import styled from "styled-components";
import { css } from "styled-components";

const COLOR = {
  primary: css`
    color: ${({ theme }) => theme.colors.primary};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.secondary};
  `,
  add1: css`
    color: ${({ theme }) => theme.colors.add1};
  `,
};

export const Wrapper = styled.div`
  margin-bottom: ${({ bg, footer }) => (bg ? 0 : footer ? 0 : "20px")};
  text-align: center;
  grid-area: heading;

  ${({ bg }) =>
    bg &&
    css`
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 250px;
      padding: ${({ theme }) => theme.spacing.section};

      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.2);
      }
    `}
`;

export const Heading = styled.h2`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  ${({ color, bg }) => color && COLOR[bg ? "secondary" : color]}
  font-size: 24px;

  ${({ footer }) =>
    footer &&
    css`
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 32px;
      font-weight: 100;
    `}

  &::before,
  &::after {
    content: "";
    max-width: 150px;
    height: 1px;
    flex-grow: 1;
    background-color: currentColor;
    opacity: ${({ footer }) => (footer ? 0.5 : 1)};
  }
`;

export const PageHeading = styled(Heading).attrs({
  as: "h1",
})`
  font-size: 40px;
  font-weight: 200;
  text-transform: uppercase;
`;

export const Inner = styled.span`
  margin: 0 20px;
`;

export const SubHeading = styled.p`
  font-weight: 700;
`;
