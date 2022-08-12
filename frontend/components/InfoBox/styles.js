import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 -10px;
`;

export const Box = styled.div`
  flex-basis: 45%;
  min-width: 250px;
  max-width: 540px;
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.add1};
  padding: 20px 25px;
  margin: 10px;

  &:last-of-type {
    background: ${({ theme }) => theme.colors.add4};
  }
`;

export const Heading = styled.h3`
  margin-left: 20px;
  font-size: 20px;
  font-size: clamp(18px, 1.8vw, 29px);
  font-weight: 300;
`;
