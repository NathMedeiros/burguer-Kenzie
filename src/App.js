import { useState, useEffect } from "react";
import Header from "./components/Header/header.jsx";
import ProductCard from "../src/components/ProductCard/productCard.jsx";
import { Container, UlList } from "../src/components/ProductCard/productCard";
import { api } from "./lib/axios.js";
import Cart from "./components/Cart/cart.jsx";
import IndexUlCart from "./components/UlCart/index.jsx";
import { UlCart } from "./components/UlCart/index";
import { ContainerCart } from "./components/CartEmpty/cartEmpty.js";
import { CartEmpty } from "./components/CartEmpty/cartEmpty.jsx";
import Sum from "./components/Sum/sum.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [itensCart, setItenscart] = useState([]);

  console.log(itensCart);

  function handleAddItemToCard(name, category, img) {
    const prodObject = { name, category, img };
    setItenscart([...itensCart, prodObject]);
  }

  console.log(search);
  const filteredProducts = !search
    ? products
    : products.filter((prod) =>
        prod.name.toLowerCase().includes(search.toLowerCase())
      );

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
      <Header setSearch={setSearch} />
      <Container>
        <UlList>
          {filteredProducts.map((product) => (
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
          <IndexUlCart />
          {itensCart.length === 0 && <CartEmpty />}
          <UlCart>
            {itensCart.map((cartProd) => (
              <Cart
                key={cartProd.id}
                name={cartProd.name}
                category={cartProd.category}
                price={cartProd.price}
                img={cartProd.img}
              />
            ))}
          </UlCart>
          {itensCart.length !== 0 && <Sum />}
        </ContainerCart>
      </Container>
    </div>
  );
}

export default App;
