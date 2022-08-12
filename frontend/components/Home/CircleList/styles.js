import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 25px -15px -40px;
`;

export const Item = styled.li`
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const OuterCircle = styled.span`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.add2};
  margin: 0 10px;
`;

export const InnerCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(100% - 22px);
  height: calc(100% - 22px);
  background-color: ${({ theme }) => theme.colors.add2};
  padding: 20px;
  border-radius: 50%;
  font-weight: 300;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  transform: translate(-50%, -50%);
  overflow: auto;
`;
