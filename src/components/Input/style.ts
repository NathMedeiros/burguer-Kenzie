import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: none;

  label {
    position: absolute;
    font-size: 1rem;
    transform: translateY(13px);
    background-color: white;
    color: gray;
    padding: 5px;
    margin-left: 20px;
  }
  input {
    width: 100%;
    height: 60px;
    border: 2px solid var(--grey-300);
    border-radius: 8px;
    margin-top: 30px;
    padding-left: 15px;
  }
`;
