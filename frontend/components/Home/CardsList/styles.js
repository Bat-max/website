import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 -10px -30px;
`;

export const Card = styled.li`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 10px;
`;

export const Header = styled.h4`
  background-color: ${({ theme }) => theme.colors.add1};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  font-weight: 300;
  letter-spacing: 2px;
  padding: 10px 20px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  span {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const Description = styled.p`
  display: grid;
  place-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.57);
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0;
  transition: opacity 0.4s;

  &:hover {
    opacity: 1;
  }
`;
