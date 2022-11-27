import React from "react";
import { ListCart, ContainerCart } from "./cart";
import { BtRemove } from "../Button";

const Cart = ({ name, category, price, img, removeProd, prodIndex }) => {
  return (
    <ContainerCart>
      <ListCart>
        <img src={img} alt="" />
        <div>
          <h3>{name}</h3>
          <span>{category}</span>
          <p>{price}</p>
        </div>
        <BtRemove onClick={() => removeProd(prodIndex)}>Remove</BtRemove>
      </ListCart>
    </ContainerCart>
  );
};

export default Cart;
