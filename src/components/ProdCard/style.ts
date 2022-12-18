import styled from "styled-components";

export const List = styled.li`
  width: 275px;
  list-style: none;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  margin-top: 50px;
  margin-bottom: 20px;
  height: 318px;

  :hover {
    border: 2px solid var(--color-primary);
  }
`;

export const Container = styled.div`
  padding-bottom: 50px;
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
  margin-top: 10px;

  h3 {
    margin-bottom: 10px;
  }

  span {
    margin-bottom: 10px;
    color: #828282;
  }
  p {
    color: #27ae60;
    margin-bottom: 10px;
  }
`;
