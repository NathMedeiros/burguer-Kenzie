import { useContext } from "react";
import Modal from "react-modal";
import { ProdContext } from "../../Contexts/ProdContext";
import "../../components/ModalCart/style.css";
import { HeaderCart } from "./style";

import ListCart from "./ListCart";
import SumCart from "../SumCart";
import { CartEmpty } from "./EmpyCart";

// import imgCount from "../../img/Group 133.png";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

// interface iProducts {
//   elt: {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   img: string;
//   }
// }

function ModalCart() {
  const { modalIsOpen, closeModal, cart } = useContext(ProdContext);

  return (
    <div className="container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <HeaderCart>
          <h3>Carrinho de compras</h3>
          <button onClick={closeModal}>X</button>
        </HeaderCart>
        <ul>
          {cart?.map(
            (elt) => cart.length !== 0 && <ListCart key={elt.id} elt={elt} />
          )}
          {cart.length === 0 && <CartEmpty />}
        </ul>
        {cart.length !== 0 && <SumCart />}
      </Modal>
    </div>
  );
}

export default ModalCart;
