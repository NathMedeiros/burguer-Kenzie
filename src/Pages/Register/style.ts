import styled from "styled-components";

export const DivContainer = styled.div`
  padding: 30px;

  h3 {
    margin-bottom: 20px;
  }
  @media (min-width: 600px) {
    padding: 50px;
  }
`;

export const GroupImg = styled.img`
  display: none;

  @media (min-width: 900px) {
    display: flex;
  }
`;

export const DivBoxFlex = styled.div`
  @media (min-width: 900px) {
    margin: 0 auto;
    display: flex;
    gap: 89px;
    justify-content: center;

    margin-top: 50px;
  }
`;

export const DivBox = styled.div`
  display: none;
  @media (min-width: 900px) {
    margin-top: 60px;
    width: 30%;
    display: block;
  }
`;

export const DivBoxBag = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  height: 95px;
  border: 1px solid var(--grey-100);
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

  p {
    font-size: 12px;
  }
  @media (min-width: 900px) {
    gap: 20px;
    width: 80%;
  }
`;

export const DivImgBag = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(39, 174, 96, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  img {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 900px) {
    width: 90px;
  }
`;
