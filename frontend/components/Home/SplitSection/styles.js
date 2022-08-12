import styled from "styled-components";
import { Article, Section } from "../../Container/styles";

export const SectionImage = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  max-height: 400px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;

  span {
    width: 100% !important;
    height: 100% !important;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 50%;
    max-height: 50%;
    flex-shrink: 0;
    border-radius: 0;
  }
`;

export const Wrapper = styled.div`
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-shrink: 0;
    flex-basis: 50%;
    height: 50%;
    padding-bottom: 25px;
  }
`;

export const Lead = styled.p`
  text-align: center;
`;

export const SplitSectionWrapper = styled(Article)`
  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const SplitSectionColumn = styled(Section)`
  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 90vh;
    max-height: 750px;
    flex-shrink: 0;
    flex-basis: 48%;
    display: flex;
    justify-content: space-between;

    &:nth-of-type(odd) {
      flex-direction: column;
    }

    &:nth-of-type(even) {
      flex-direction: column-reverse;
    }

    h2 {
      margin-top: 50px;
    }
  }
`;
