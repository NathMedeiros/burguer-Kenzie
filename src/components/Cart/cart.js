import styled from "styled-components";

export const ContainerCart = styled.div`
  margin-left: 50px;
  margin-bottom: 50px;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 342px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-left: 80px;
`;
export const ListCart = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;

  h3 {
    font-size: medium;
  }

  img {
    width: 80px;
  }
  span {
    font-size: small;
  }
`;
