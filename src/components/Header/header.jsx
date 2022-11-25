import React from "react";
import logo from "../../../src/img/logo.svg";
import { Button } from "../Button/index";
import { HeaderStyle } from "./header.js";
import { FormSearch } from "./header.js";

import "./header.js";

const Header = ({ search, setSearch }) => {
  return (
    <HeaderStyle>
      <img src={logo} alt="" />
      <FormSearch>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digitar Pesquisa"
        />
        <Button>Pesquisar</Button>
      </FormSearch>
    </HeaderStyle>
  );
};

export default Header;
