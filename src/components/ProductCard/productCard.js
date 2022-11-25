import styled from "styled-components";

export const UlList = styled.ul`
  margin-left: 10px;
  width: 95%;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  @media (min-width: 1053px) {
    flex-wrap: wrap;
    margin-left: 20px;
  }
`;

export const List = styled.li`
  min-width: 275px;
  height: 335px;
  list-style: none;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  width: 105%;
  @media (min-width: 1053px) {
    display: flex;
  }
`;

export const HeaderCard = styled.div`
  width: 100%;
  height: 150px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  p {
    color: #27ae60;
  }
`;
