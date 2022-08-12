import styled from "styled-components";

export const StyledCard = styled.li`
  min-width: 200px;
`;

export const StyledLink = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.add1};
  font-size: 16px;
  font-weight: 300;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 240px;
  border: ${({ hasImage, theme }) =>
    hasImage ? "none" : `1px solid ${theme.colors.add1}`};
  cursor: pointer;
  overflow: hidden;

  span {
    height: ${({ hasImage }) => (hasImage ? "100% !important" : "auto")};

    width: ${({ hasImage }) => (hasImage ? "100% !important" : "auto")};
  }
`;

export const ItemDetails = styled.p`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.add1};
  border-top: none;
`;
