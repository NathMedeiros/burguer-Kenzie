import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../Lib";

interface iContexxtProps {
  openModal: () => void;
  modalIsOpen: boolean;
  closeModal: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: iProducts[];
  cart: iCart[];
  addCart: (element: iCart) => void;
  RemoveAll: () => void;
  DeleteProduct: (id: iCart) => void;
  searchProds: string;
  setSearchProds: React.Dispatch<React.SetStateAction<string>>;
  showProducts: iProducts[];
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  increase: () => void;
  decrease: () => void;
  hidden: boolean;
  hiddenSearch: () => void;
}
export const ProdContext = createContext({} as iContexxtProps);

export interface iChildrenProps {
  children: React.ReactNode;
}

interface iCart {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const ProdProvider = ({ children }: iChildrenProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([] as iCart[]);
  const [products, setProducts] = useState([] as iProducts[]);
  const [searchProds, setSearchProds] = useState("");
  const [counter, setCounter] = useState(0);
  const [hidden, setHidden] = useState(false);

  function hiddenSearch() {
    if (hidden === true) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  useEffect(() => {
    async function loadUser() {
      const tokenValidate = localStorage.getItem("@TOKEN");

      if (!tokenValidate) {
      }
      api.defaults.headers.common["Authorization"] = `Bearer ${tokenValidate}`;

      try {
        const { data } = await api.get("products");

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadUser();
  }, []);

  function addCart(element: iCart) {
    const getProducts = products.find((elem) => elem.id === element.id);
    const noRepeat = cart.some((elem) => elem.id === getProducts?.id);

    if (!noRepeat) {
      setCart((previuosCart: iProducts[] | any) => {
        return [...previuosCart, getProducts];
      });

      toast.success("Produto adicionado com sucesso!");
    } else {
      toast.error("Produto já adicionado");
    }
  }

  function RemoveAll() {
    setCart([]);
    toast.info("Produtos removidos!");
    setTimeout(() => {
      toast.warn("Sacola vazia! Adicione itens!");
    }, 2000);
  }

  function DeleteProduct(id: iCart) {
    const deleteProdcts = cart.filter((elem) => elem !== id);
    setCart(deleteProdcts);
    toast.info("Produto removido com sucesso!");
  }

  const showProducts = !searchProds
    ? products
    : products.filter(
        (element) =>
          element.name
            .toLowerCase()
            .includes(searchProds.toLocaleLowerCase()) ||
          element.category
            .toLowerCase()
            .includes(searchProds.toLocaleLowerCase())
      );

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ProdContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal,
        setIsOpen,
        cart,
        products,
        addCart,
        RemoveAll,
        DeleteProduct,
        setSearchProds,
        searchProds,
        showProducts,
        increase,
        decrease,
        counter,
        setCounter,
        hiddenSearch,
        hidden,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
};
