import styled from "styled-components";

export const BtEntry = styled.button`
  background: var(--color-primary);
  border-radius: 8px;
  width: 100%;
  height: 55px;
  color: var(--grey-0);
  border: none;
  margin-top: 30px;
`;

export const BtGoToRegister = styled.button`
  background: var(--grey-0);
  border-radius: 8px;
  width: 100%;
  height: 55px;
  color: var(--grey-300);
  border: none;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  margin-top: 5px;
  background-color: #27ae60;
  margin-left: -56px;
  border: 2px solid #27ae60;
  border-radius: 8px;
  width: 45px;
  height: 40px;
  color: #ffff;

  cursor: pointer;
`;

export const ButtonAdd = styled.button`
  background-color: #bdbdbd;
  border: 2px solid #bdbdbd;
  border-radius: 8px;
  width: 106px;
  height: 40px;
  color: #ffff;
  cursor: pointer;

  :hover {
    background-color: #27ae60;
    border: 2px solid #27ae60;
  }
`;
