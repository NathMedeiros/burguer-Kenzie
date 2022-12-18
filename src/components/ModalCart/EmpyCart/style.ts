import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
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
