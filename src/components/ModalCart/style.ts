import styled from "styled-components";

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 50px;
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;
  color: #ffff;
  text-align: center;

  button {
    border: none;
    background-color: transparent;
    color: #ffff;
  }
`;

export const ListBox = styled.li`
  display: flex;
  list-style: none;
  width: 100%;
  h3 {
    margin-top: 20px;
  }
`;

export const ImgFood = styled.img`
  width: 100px;
`;

export const DivBoxFood = styled.div`
  background-color: var(--grey-100);
  margin-right: 20px;
  margin: 20px;
  border-radius: 8px;
`;

export const DivBoxCount = styled.div`
  display: flex;
  background-color: var(--grey-100);
  width: 100px;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 44px;
  margin-right: auto;

  p {
    width: 49px;
    display: flex;
    height: 26px;
    justify-content: center;
    background-color: #fff;
    font-size: 12px;
    align-items: center;
  }
  button {
    background-color: transparent;
    color: var(--color-secondary);
    border: none;
    font-size: 20px;
    width: 50%;
    cursor: pointer;
  }
`;

export const DivBoxImg = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

export const DivNameProd = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
`;
