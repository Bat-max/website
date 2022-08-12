import styled from "styled-components";

export const Category = styled.div``;

export const Heading = styled.h2`
  background-color: ${({ theme }) => theme.colors.add1};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  font-weight: 200;
  padding: 16px;
  font-size: clamp(26px, 3vw, 32px);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: clamp(16px, 2vw, 20px);
  margin: 30px clamp(25px, 3vw, 50px);
`;

export const ImageWrapper = styled.div`
  width: clamp(130px, 14vw, 180px);

  img {
    width: 100%;
  }
`;

export const Lead = styled.p`
  margin-top: 3px;
  font-weight: 200;
`;

export const Info = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 20px;
  border: 1px solid #c60606;
`;

export const InfoImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 55px;
  margin-right: 10px;

  img {
    width: 100%;
  }
`;
