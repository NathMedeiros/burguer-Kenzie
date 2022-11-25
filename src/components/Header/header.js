import styled from "styled-components";

export const HeaderStyle = styled.header`
  margin: 0 auto;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 139px;
  background-color: #f5f5f5;
  justify-content: center;
  @media (min-width: 1053px) {
    flex-direction: row;
    padding-left: 65px;
    width: 100%;
  }
`;

export const FormSearch = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  @media (min-width: 1053px) {
    display: flex;
    justify-content: end;
    margin-right: 117px;
  }

  input {
    width: 90%;
    padding-left: 20px;
    height: 45px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    outline: none;

    @media (min-width: 1053px) {
      max-width: 30%;
    }
  }

  input::placeholder {
    padding-left: 10px;
    font-size: "inter";
  }
`;
