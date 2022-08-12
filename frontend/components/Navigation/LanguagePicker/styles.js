import styled from "styled-components";

export const StyledLanguagePicker = styled.div`
  position: relative;
  margin-right: 30px;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    justify-content: flex-end;
    flex-basis: 4%;
    order: 3;
    margin-right: 0;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-basis: 8%;
  }
`;

export const LanguagesList = styled.ul`
  position: absolute;
  top: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  pointer-events: ${({ isOpened, current }) =>
    isOpened || current ? "all" : "none"};
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
  transition: opacity 0.4s, visibility 0.4s;
`;

export const FlagWrapper = styled.a`
  display: block;
  width: 36px;
  height: 36px;
  margin-bottom: ${({ current }) => (current ? "0" : "10px")};
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CurrentFlagWrapper = styled(FlagWrapper).attrs({
  as: "button",
})`
  background-color: transparent;
  border: none;
`;
