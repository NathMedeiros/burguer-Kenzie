import { useContext } from "react";
import { ProdContext } from "../../Contexts/ProdContext";
import { BtRemoveAll, DivBox, DivSum } from "./style";

function SumCart() {
  const { cart, RemoveAll, setCounter } = useContext(ProdContext);
  return (
    <DivBox>
      <DivSum>
        <h3>Total</h3>
        <span>{cart?.reduce((acc, act) => acc + act.price, 0).toFixed(2)}</span>
      </DivSum>
      <BtRemoveAll
        onClick={() => {
          RemoveAll();
          setCounter(0);
        }}
      >
        Remover Todos
      </BtRemoveAll>
    </DivBox>
  );
}

export default SumCart;
