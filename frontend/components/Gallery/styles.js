import styled from "styled-components";
import { css } from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 500px;
  height: 200px;
  height: ${({ page }) => (page ? "220px" : "200px")};

  margin-bottom: 20px;
  cursor: pointer;

  span {
    width: 100% !important;
    height: 100% !important;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SwiperWrapper = styled.div`
  margin: 60px 0 0;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled.li`
  min-width: 200px;
  margin: 10px;
`;

export const Step = styled.button`
  position: relative;
  z-index: 2;
  width: 13px;
  height: 13px;
  background-color: ${({ accomplished, theme }) =>
    accomplished ? theme.colors.add1 : theme.colors.add3};
  border: none;
  outline: none;
  border-radius: 50%;
  transition: background-color 0.4s 0.1s;
  color: transparent;
  font-size: 0;
  cursor: pointer;
`;

export const ProgressBarWrapper = styled.div`
  width: ${({ width }) => width + "px"};
  max-width: 100%;
  margin: 40px auto 10px;
  padding: 0 20px;
`;

export const ProgressBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2px;
  width: 100%;
  margin-top: 50px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 1px;
    right: 1px;
    top: 50%;
    height: 2px;
  }

  &::after {
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.add3};
    transform: translateY(-50%);
  }

  &::before {
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.add1};
    transform-origin: left;
    transform: ${({ percent }) => css`translateY(-50%) scaleX(${percent}%)`};
    transition: transform 0.4s ease-in-out;
  }
`;
