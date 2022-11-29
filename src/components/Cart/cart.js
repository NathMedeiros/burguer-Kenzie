import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-height: 375px;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
`;

export const HeaderCart = styled.div`
  display: flex;
  width: 100%;
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;
  color: #ffff;

  text-align: center;
  justify-content: center;
`;

export const UlCart = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 90%;
  max-height: 400px;
  background: #f5f5f5;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #27ae60;
    border-radius: 10px;
  }
`;

export const ListCart = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 30%;

  @media (min-width: 1053px) {
    width: 350px;
  }
  @media (max-width: 1048px) {
    width: 470px;
  }
  @media (max-width: 674px) {
    width: 351px;
  }
  @media (max-width: 568px) {
    width: 359px;
  }
  @media (max-width: 472px) {
    width: 285px;
  }

  div {
    width: 100px;

    height: 80px;
  }
  h3 {
    font-size: medium;
  }

  img {
    width: 40px;
    padding: 5px;
    background-color: lightgray;
    border-radius: 8px;
    @media (min-width: 528px) {
      width: 80px;
    }
  }
  span {
    font-size: small;
  }
  p {
    color: #f5f5f5;
  }
`;
