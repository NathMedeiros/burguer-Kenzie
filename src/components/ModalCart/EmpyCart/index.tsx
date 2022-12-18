import React from "react";
import { ContainerCart, DivBoxEmptyCart } from "./style";

export function CartEmpty() {
  return (
    <ContainerCart>
      <DivBoxEmptyCart>
        <h3>Sua sacola está vazia</h3>
        <p>Adicione Itens</p>
      </DivBoxEmptyCart>
    </ContainerCart>
  );
}
