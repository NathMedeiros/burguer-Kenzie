import React from "react";
import { DivBox, DivSum } from "./sum";
import { BtRemoveAll } from "../Button";

const Sum = () => {
  return (
    <DivBox>
      <DivSum>
        <h3>Total</h3>
        <span>R$</span>
      </DivSum>
      <BtRemoveAll>Remover Todos</BtRemoveAll>
    </DivBox>
  );
};

export default Sum;
