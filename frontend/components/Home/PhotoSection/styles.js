import styled from "styled-components";
import { Article, Section } from "../../Container/styles";
import { SectionImage } from "../SplitSection/styles";

export const Wrapper = styled(Article)`
  background-color: ${({ theme }) => theme.colors.add1};
  color: ${({ theme }) => theme.colors.secondary};

  @media ${({ theme }) => theme.breakpoints.sm} {
    background-color: transparent;
    padding-bottom: 0;
  }
`;

export const Inner = styled(Section)`
  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
  }
`;

export const ContentWrapper = styled(Section)`
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.add1};
    padding: 40px clamp(40px, 5vw, 100px) !important;
  }
`;

export const ImgWrapper = styled(SectionImage)`
  display: none;

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 10px 0;
    display: block;
    height: auto;
    flex-basis: 35%;
    transform: translate(-40px, -40px);
  }
`;

export const List = styled.ul`
  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-basis: 45%;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Icon = styled.div`
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-shrink: 0;
    flex-basis: 40px;
  }
`;

export const Content = styled.div`
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    text-align: left;
    margin-left: 20px;
  }
`;

export const Heading = styled.h3`
  margin: 20px 0 10px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-top: 0;
  }
`;

export const Lead = styled.p``;
