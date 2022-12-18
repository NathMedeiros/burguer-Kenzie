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
    width: 100%;
  }
  p {
    width: 20px;
    height: 20px;
    background: #27ae60;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f5f5f5;
    font-size: 12px;
    margin-left: -28px;
    margin-top: -20px;
  }
`;
export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  justify-content: space-between;
`;

export const FormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  width: 17%;

  @media (min-width: 1053px) {
    width: 40%;
  }

  @media (min-width: 900px) {
    width: 60%;
  }
  img {
    cursor: pointer;
  }
`;

export const FormSearch = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  @media (max-width: 900px) {
    display: none;
    width: 100%;
  }

  @media (min-width: 1053px) {
    display: flex;
    width: 100%;
  }

  input {
    width: 80%;
    padding-left: 20px;
    height: 55px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    outline: none;

    @media (min-width: 1053px) {
      margin-left: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (min-width: 900px) {
      margin-left: 80px;
    }
  }
`;

export const ImgSearch = styled.img`
  @media (min-width: 900px) {
    display: none;
  }
`;

export const ImgLogo = styled.img`
  @media (max-width: 400px) {
    width: 150px;
  }
`;
