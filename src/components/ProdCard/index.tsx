import React, { useContext } from "react";
import { ProdContext } from "../../Contexts/ProdContext";
import { ButtonAdd } from "../Button/style";
import { DivDescription, HeaderCard, List } from "./style";

interface iElementProps {
  elt: {
    id: number;
    img: string;
    name: string;
    category: string;
    price: number;
  };
}

const ProductCard = ({ elt }: iElementProps) => {
  const { addCart, increase } = useContext(ProdContext);
  return (
    <>
      <List>
        <HeaderCard>
          <img src={elt.img} alt={elt.name} />
        </HeaderCard>
        <DivDescription>
          <h3>{elt.name}</h3>
          <span>{elt.category}</span>
          <p>
            {elt.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <ButtonAdd
            onClick={() => {
              addCart(elt);
              increase();
            }}
          >
            Adicionar
          </ButtonAdd>
        </DivDescription>
      </List>
    </>
  );
};

export default ProductCard;
