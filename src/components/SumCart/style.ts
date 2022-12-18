import styled from "styled-components";

export const DivSum = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 20px;
  align-items: center;
`;

export const DivBox = styled.div`
  border-top: 1px solid lightgray;
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 135px;
`;
export const BtRemoveAll = styled.button`
  width: 90%;
  height: 45px;
  background: var(--grey-100);
  border: 2px solid var(--grey-100);
  border-radius: 8px;
  cursor: pointer;
  color: #828282;
`;
