import styled from "styled-components";

export const Description = styled.div`
  margin-bottom: 60px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.add2};

  * {
    font-size: clamp(15px, 1.4vw, 18px);
  }

  & > * {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    margin-left: 30px;
  }

  ul {
    list-style: disc outside;
  }
`;
