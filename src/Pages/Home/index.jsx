import { useContext } from "react";
import Header from "../../components/Header";
import ModalCart from "../../components/ModalCart";
import ProductCard from "../../components/ProdCard";
import { ProdContext } from "../../Contexts/ProdContext";
import { Container, UlList } from "./style";

const Home = () => {
  const { showProducts } = useContext(ProdContext);

  return (
    <>
      <Header />
      <Container>
        <UlList>
          {showProducts?.map((elt) => (
            <ProductCard key={elt.id} elt={elt} />
          ))}
        </UlList>
        <ModalCart />
      </Container>
    </>
  );
};

export default Home;
