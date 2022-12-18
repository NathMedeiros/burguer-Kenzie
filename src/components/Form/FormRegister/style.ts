import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterForm = styled.form`
  border: 2px solid var(--grey-0);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px;
  width: 100%;

  small {
    color: red;
  }

  p {
    text-align: center;
    margin-top: 20px;
    color: var(--grey-200);
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
  }
  @media (min-width: 900px) {
    width: 35%;
  }
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackLogin = styled(Link)`
  color: var(--grey-300);
  font-size: 12px;
  @media (min-width: 900px) {
    font-size: 14px;
  }
`;
