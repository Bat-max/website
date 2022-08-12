import styled from "styled-components";
import { keyframes } from "styled-components";

const showLine = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

export const StyledHeader = styled.header`
  position: relative;
  min-height: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.add2};
  padding: ${({ theme }) => theme.spacing.section};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const Heading = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.xs} {
    width: 100%;

    &::before,
    &::after {
      content: "";
      max-width: 200px;
      flex-grow: 1;
      height: 1px;
      background-color: white;
      transform-origin: right;
      animation: ${showLine} 1s 0.2s both cubic-bezier(0.43, 0.04, 0.1, 1.07);
    }

    &::after {
      transform-origin: left;
    }

    span {
      margin: 0 20px;
    }
  }
`;
