import styled from "styled-components";

export const UlList = styled.ul`
  margin-left: 10px;
  width: 90%;
  display: flex;
  gap: 20px;
  overflow-x: auto;

  align-items: center;
  margin: 0 auto;
  @media (min-width: 1053px) {
    flex-wrap: wrap;
  }
`;

export const Container = styled.div`
  /* padding-bottom: 50px; */

  @media (min-width: 1053px) {
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
  }
`;
