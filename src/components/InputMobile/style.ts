import styled from "styled-components";

export const InputDiv = styled.div`
  width: 100%;
  height: 137px;
  background-color: whitesmoke;
  position: absolute;
  left: 1%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    display: none;
  }

  input {
    height: 50px;
    width: 80%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid var(--grey-100);
    :focus {
      border: 1px solid black;
    }
  }
  img {
    margin-left: -45px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    background-color: var(--color-primary);
    padding: 12px;
  }
`;
