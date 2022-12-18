import { Button } from "../Button/style";
import { useContext } from "react";
import logo from "../../img/Mask Group.png";
import imgSearch from "../../img/ (1).png";
import imgSearch2 from "../../img/lupa.png";
import imgCart from "../../img/cart.png";
import imgLogout from "../../img/logout.png";

import {
  HeaderStyle,
  HeaderDiv,
  FormDiv,
  FormSearch,
  ImgSearch,
  ImgLogo,
} from "./style";
import { ProdContext } from "../../Contexts/ProdContext";
import { useNavigate } from "react-router-dom";
import InputMobile from "../InputMobile";

const Header = () => {
  const {
    openModal,
    setSearchProds,
    searchProds,
    counter,
    hiddenSearch,
    hidden,
  } = useContext(ProdContext);

  const navigate = useNavigate();

  function clear() {
    navigate("/");
    localStorage.clear();
  }

  return (
    <HeaderStyle>
      <HeaderDiv>
        <ImgLogo src={logo} alt="" />
        <FormDiv>
          <FormSearch>
            <input
              type="text"
              placeholder="Digitar Pesquisa"
              value={searchProds}
              onChange={(e) => setSearchProds(e.target.value)}
            />
            <Button type="submit">
              <img src={imgSearch} alt="" />
            </Button>
          </FormSearch>
          <ImgSearch onClick={() => hiddenSearch()} src={imgSearch2} alt="" />
          {hidden === true && <InputMobile />}
          <img onClick={openModal} src={imgCart} alt="" />
          <p>{counter}</p>
          <img onClick={clear} src={imgLogout} alt="" />
        </FormDiv>
      </HeaderDiv>
    </HeaderStyle>
  );
};

export default Header;
