import styled from "styled-components";

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
  flex-grow: 1;
  display: flex;
  margin: 10px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
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
