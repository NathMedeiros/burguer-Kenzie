import { useState, useEffect } from "react";
import Header from "./components/Header/header.jsx";
import ProductCard from "../src/components/ProductCard/productCard.jsx";
import { Container, UlList } from "../src/components/ProductCard/productCard";
import { api } from "./lib/axios.js";
import Cart from "./components/Cart/cart.jsx";
import { UlCart } from "./components/Cart/cart";
import { ContainerCart } from "./components/CartEmpty/cartEmpty.js";
import { CartEmpty } from "./components/CartEmpty/cartEmpty.jsx";
import Sum from "./components/Sum/sum.jsx";
import { HeaderCart } from "./components/Cart/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [itensCart, setItenscart] = useState([]);
  const [abobrinha, setAbobrinha] = useState([]);

  function handleAddItemToCard(name, category, img, price) {
    const prodObject = { name, category, img, price };

    if (!itensCart.some((elt) => elt.name === prodObject.name)) {
      setItenscart([...itensCart, prodObject]);
      toast.success("Produto adicionado com sucesso");
    } else {
      toast.error("Produto já disponivel no carrinho");
    }
  }

  function removeProd(prodId) {
    const filteredCart = itensCart.filter(
      (prodCart) => itensCart.indexOf(prodCart) !== prodId
    );
    setItenscart(filteredCart);
  }

  function clearCart() {
    setItenscart([]);
  }

  function filterSearch(search) {
    console.log(search);
    setAbobrinha(
      products.filter(
        (elt) =>
          elt.name.toLowerCase().includes(search.toLowerCase()) ||
          elt.category.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, []);

  return (
    <div className="App">
      <Header
        filterSearch={filterSearch}
        setSearch={setSearch}
        search={search}
      />
      <Container>
        <UlList>
          {abobrinha.length === 0
            ? products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  img={product.img}
                  handleAddItemToCard={handleAddItemToCard}
                />
              ))
            : abobrinha.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  img={product.img}
                  handleAddItemToCard={handleAddItemToCard}
                />
              ))}
        </UlList>
        <ContainerCart>
          <HeaderCart>
            <h3>Carrinho de Compras</h3>
          </HeaderCart>
          {itensCart.length === 0 && <CartEmpty />}
          <UlCart>
            {itensCart.map((cartProd, index) => (
              <Cart
                key={index}
                prodIndex={index}
                name={cartProd.name}
                category={cartProd.category}
                price={cartProd.price}
                img={cartProd.img}
                removeProd={removeProd}
              />
            ))}
          </UlCart>
          {itensCart.length !== 0 && (
            <Sum itensCart={itensCart} clearCart={clearCart} />
          )}
        </ContainerCart>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Container>
    </div>
  );
}

export default App;
