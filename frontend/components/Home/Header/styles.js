import styled from "styled-components";
import { css } from "styled-components";
import { keyframes } from "styled-components";

const showSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledHeader = styled.header`
  .swiper-pagination-bullet {
    --bullet-size: clamp(15px, 3vw, 23px);
    --swiper-pagination-bullet-horizontal-gap: calc(var(--bullet-size) / 3);
    width: var(--bullet-size);
    height: var(--bullet-size);
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
    transition: background-color 0.4s;

    &-active {
      background-color: ${({ theme }) => theme.colors.add1};
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: 85vh;
  max-height: 800px;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  padding: ${({ theme }) => theme.spacing.mainHeader};
  padding-left: 0;
  padding-right: 0;
`;

export const Card = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 140px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.57);
  backdrop-filter: blur(2px);
  color: ${({ theme }) => theme.colors.secondary};
  padding: clamp(30px, 4vw, 50px) clamp(20px, 4vw, 50px);
  border-radius: 20px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.7s 0.4s ease-in-out;
`;

export const Content = styled.div`
  animation: ${({ isActive }) =>
    isActive &&
    css`
      ${showSlide} 1s ease-in-out 1 both;
    `};
`;

export const Heading = styled.h2`
  font-size: clamp(24px, 2vw, 36px);
  font-weight: 200;
  letter-spacing: 2px;
`;

export const Lead = styled.p`
  margin: 10px 0 0 6px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  font-weight: 200;
  transition: opacity 0.4s 0.8s ease-in-out;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;

  button {
    min-width: calc(50% - 10px);
    margin-top: 15px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transform: ${({ isActive }) =>
      isActive ? "translateY(0)" : "translateY(5px)"};
    transition: opacity 0.4s 1.1s ease-in-out, transform 0.4s 1.1s;

    &:first-of-type {
      margin-right: 10px;
    }
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  span {
    width: 100% !important;
    height: 100% !important;
  }
`;
