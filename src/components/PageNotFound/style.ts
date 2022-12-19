import styled from "styled-components";

export const DivNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;

  img {
    width: 800px;
    height: 600px;

    @media (max-width: 582px) {
      width: 400px;
      height: 300px;
    }
  }

  button {
    width: 310px;
    border-radius: 30px;
    height: 40px;
    margin-top: -200px;
    margin-right: -300px;
    background-color: #95969a;
    color: #ffff;

    @media (max-width: 582px) {
      width: 150px;
      height: 20px;
      margin-top: -100px;
      margin-right: -150px;

      :hover {
        background-color: transparent;
        color: var(--color-primary);
        border: 2px solid var(--color-primary);
      }
    }

    :hover {
      background-color: transparent;
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
    }
  }
`;
