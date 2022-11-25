import React from "react";
import { ListCart, ContainerCart } from "./cart";
import { BtRemove } from "../Button";

const Cart = ({ name, category, img }) => {
  return (
    <ContainerCart>
      <ListCart>
        <img src={img} alt="" />
        <div>
          <h3>{name}</h3>
          <span>{category}</span>
        </div>
        <BtRemove>Remove</BtRemove>
      </ListCart>
    </ContainerCart>
  );
};

export default Cart;
