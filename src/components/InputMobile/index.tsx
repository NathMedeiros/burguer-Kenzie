import { useContext } from "react";
import { ImgSearch } from "../Header/style";
import imgSearch2 from "../../img/ (1).png";
import { ProdContext } from "../../Contexts/ProdContext";
import { InputDiv } from "./style";

const InputMobile = () => {
  const { hiddenSearch, searchProds, setSearchProds } = useContext(ProdContext);

  return (
    <InputDiv>
      <input
        type="text"
        placeholder="pesquisar"
        value={searchProds}
        onChange={(e) => setSearchProds(e.target.value)}
      />
      <div>
        <ImgSearch onClick={() => hiddenSearch()} src={imgSearch2} alt="" />
      </div>
    </InputDiv>
  );
};

export default InputMobile;
