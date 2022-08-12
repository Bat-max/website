import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-template-columns: ${({ related }) => !related && "repeat(2, 1fr)"};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: ${({ related }) => related && "repeat(3, 1fr)"};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-gap: 65px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
