import styled, { css } from "styled-components";
import { Article } from "../Container/styles";

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.add2};
  padding: 15px 0;
  margin-top: 30px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 0 0 20px;
  }
`;

export const Inner = styled(Article)`
  @media ${({ theme }) => theme.breakpoints.sm} {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    gap: 20px 0;
    grid-template-areas:
      "heading heading"
      "info form";
  }
`;

export const SectionWrapper = styled.section`
  padding: 10px 0;
  grid-area: ${({ content }) => content};
  ${({ content }) =>
    content === "form"
      ? css`
          @media ${({ theme }) => theme.breakpoints.sm} {
            padding-left: clamp(30px, 5vw, 100px);
            border-left: 1px solid rgba(255, 255, 255, 0.5);
          }
        `
      : css`
          @media ${({ theme }) => theme.breakpoints.sm} {
            padding-right: clamp(30px, 5vw, 100px);
          }
        `}
`;

export const InfoHeading = styled.h2`
  margin-bottom: 10px;
  font-weight: 300;
  font-size: clamp(28px, 2.6vw, 32px);
`;

export const InfoList = styled.ul``;

export const InfoItem = styled.li`
  margin-bottom: ${({ isBreak }) =>
    isBreak ? "clamp(10px, 2vw, 22px)" : "clamp(2px,0.5vw, 8px)"};
  font-weight: 200;
  font-size: clamp(16px, 2vw, 20px);
`;

export const InfoTitle = styled.span`
  display: inline-block;
  margin-right: 6px;
`;

export const InfoContent = styled.span`
  display: ${({ isSecond }) => (isSecond ? "block" : "inline-block")};
`;

export const InfoLink = styled.a.attrs((props) => ({
  as: props.href ? "a" : "p",
}))`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;

  ${({ href }) =>
    href &&
    css`
      transition: opacity 0.5s;

      &::before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.secondary};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s;
      }

      &:hover {
        opacity: 0.8;

        &::before {
          transform: scaleX(1);
        }
      }
    `}
`;

export const FormHeading = styled.h3`
  margin-bottom: 10px;
  font-size: clamp(24px, 2.4vw, 28px);
  font-weight: 200;
`;

export const FormLead = styled.p`
  margin-bottom: 16px;
  font-size: clamp(14px, 1.4vw, 16px);
  font-weight: 200;
`;

export const FormWrapper = styled.form`
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.8;
    `}
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 0.4em 0.9em;
  border: ${({ error }) => (error ? "2px solid red" : "2px solid #fff")};
  outline: none;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const FormTextarea = styled(FormInput).attrs({
  as: "textarea",
})`
  height: 40vh;
  max-height: 120px;
`;

export const FormControls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;

export const SubmitMessage = styled.small`
  display: block;
  margin: ${({ img }) => (img ? "0 0 0 10px" : "10px 0 0")};
  color: ${({ error, theme }) =>
    error ? theme.colors.error : theme.colors.success};
`;

export const UploadedImg = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid rgb(255, 255, 255, 0.2);
  border-radius: 50%;
`;

export const RemoveImgBtn = styled.button`
  position: absolute;
  top: 0;
  right: -20px;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  font-size: 0;
`;

export const UploadWrapper = styled.div`
  position: relative;
`;
