import React from "react";
import { DivBox, DivSum } from "./sum";
import { BtRemoveAll } from "../Button";

const Sum = ({ itensCart, clearCart }) => {
  const totalPrice = itensCart.reduce((acc, current) => acc + current.price, 0);
  return (
    <DivBox>
      <DivSum>
        <h3>Total</h3>
        <span>R${totalPrice.toFixed(2)}</span>
      </DivSum>
      <BtRemoveAll onClick={() => clearCart()}>Remover Todos</BtRemoveAll>
    </DivBox>
  );
};

export default Sum;
