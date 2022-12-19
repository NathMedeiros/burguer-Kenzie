import { useContext } from "react";
import {
  DivBoxCount,
  DivBoxFood,
  DivBoxImg,
  DivNameProd,
  ImgFood,
  ListBox,
} from "../style";
import imgTrash from "../../../img/trash.png";
import { ProdContext } from "../../../Contexts/ProdContext";

interface iElementCartProps {
  elt: {
    id: number;
    img: string;
    name: string;
    price: number;
  };
}
const ListCart = ({ elt }: iElementCartProps) => {
  const { DeleteProduct, increase, decrease, setCounter } =
    useContext(ProdContext);
  return (
    <>
      <ListBox>
        <DivBoxFood>
          <ImgFood src={elt.img} alt={elt.name} />
        </DivBoxFood>

        <DivBoxImg>
          <DivNameProd>
            <h3>{elt.name}</h3>
            <img
              onClick={() => {
                DeleteProduct(elt);

                setCounter(0);
              }}
              src={imgTrash}
              alt=""
            />
          </DivNameProd>
          <DivBoxCount>
            <button onClick={() => increase()}>+</button>
            <p>{1}</p>
            <button onClick={() => decrease()}>-</button>
          </DivBoxCount>
        </DivBoxImg>
      </ListBox>
    </>
  );
};

export default ListCart;
