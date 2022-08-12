import styled, { css } from "styled-components";

const COLOR = {
  primary: css`
    color: ${({ theme }) => theme.colors.secondary};
    background: transparent;
    border: 1px solid currentColor;
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.add1};
    border: 1px solid currentColor;
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

export const StyledButton = styled.button.attrs((props) => ({
  as: props.href ? "a" : "button",
}))`
  position: relative;
  margin: 5px 0;
  padding: 8px 25px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  font-weight: 300;
  font-size: clamp(16px, 3vw, 20px);
  letter-spacing: 2px;
  outline: none;
  text-decoration: none;
  transition: all 0.2s;
  ${({ color }) => color && COLOR[color]}
  ${({ disabled }) => disabled && DISABLED}
`;

export const Loader = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
`;
