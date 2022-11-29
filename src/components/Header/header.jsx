import React from "react";
import logo from "../../../src/img/logo.svg";
import { Button } from "../Button/index";
import { HeaderStyle } from "./header.js";
import { FormSearch } from "./header.js";

import "./header.js";

const Header = ({ search, setSearch, filterSearch }) => {
  function handleSubmit(e) {
    console.log(e);

    e.preventDefault();
    if (search.length) {
      filterSearch(search);
    }
  }

  return (
    <HeaderStyle>
      <img src={logo} alt="" />
      <FormSearch onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          placeholder="Digitar Pesquisa"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit">Pesquisar</Button>
      </FormSearch>
    </HeaderStyle>
  );
};

export default Header;
