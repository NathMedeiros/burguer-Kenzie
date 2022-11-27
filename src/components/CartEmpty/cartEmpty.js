import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-height: 340px;
  background: #f5f5f5;
  border-radius: 8px;

  @media (max-width: 1053px) {
    margin-left: 80px;
  }
  @media (max-width: 654px) {
    margin-left: 45px;
  }

  @media (min-width: 1053px) {
    width: 27%;
    margin-top: 65px;
    @media (max-width: 1300px) {
      width: 40%;
    }
  }
`;

export const DivBoxEmptyCart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1053px) {
    width: 373px;
    text-align: -webkit-center;
    background: transparent;
  }
`;
