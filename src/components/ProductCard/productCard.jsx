import React from "react";
import { ButtonAdd } from "../Button/index.js";
import { List, HeaderCard, DivDescription } from "./productCard.js";
import "../ProductCard/productCard";

const ProductCard = ({ name, category, price, img, handleAddItemToCard }) => {
  return (
    <List>
      <HeaderCard>
        <img src={img} alt="" />
      </HeaderCard>
      <DivDescription>
        <h3>{name}</h3>
        <span>{category}</span>
        <p>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <ButtonAdd onClick={() => handleAddItemToCard(name, category, img)}>
          Adicionar
        </ButtonAdd>
      </DivDescription>
    </List>
  );
};

export default ProductCard;
