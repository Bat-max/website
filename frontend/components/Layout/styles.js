import styled from "styled-components";

export const Wrapper = styled.main`
  min-height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.navbarHeight};
`;

export const Content = styled.div`
  flex-grow: 1;
`;
