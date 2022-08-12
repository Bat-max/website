import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: ${({ isShowing }) => (isShowing ? "0px" : "16px")};
`;

export const Toggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 14px 18px;
  width: 100%;
  text-align: left;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.add1};
  outline: none;
  color: ${({ theme }) => theme.colors.add2};
  font-size: 20px;
`;

export const Chevron = styled.span`
  display: flex;
  align-items: center;

  &::before {
    border-style: solid;
    border-width: 2px 2px 0 0;
    content: "";
    display: inline-block;
    height: 0.45em;
    left: 0.15em;
    position: relative;
    top: 0.15em;
    transform: ${({ opened }) =>
      opened ? "rotate(-45deg)" : "rotate(135deg)"};
    vertical-align: top;
    width: 0.45em;
    transition: transform 0.3s;
  }
`;

export const Body = styled.div`
  padding: 14px 18px;
  display: ${({ isShowing }) => (isShowing ? "block" : "none")};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.add2};

  * {
    font-size: clamp(15px, 1.4vw, 18px);
  }

  & > * {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    margin-left: 30px;
  }

  ul {
    list-style: disc outside;
  }
`;
