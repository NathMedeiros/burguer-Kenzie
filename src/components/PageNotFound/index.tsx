import React from "react";
import { useNavigate } from "react-router-dom";
import imgNotFound from "../../img/imgNotFound.png";
import { BtGoToRegister } from "../Button/style";

import { DivNotFound } from "./style";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <DivNotFound>
      <img src={imgNotFound} alt="Pagina não encontrada" />
      <BtGoToRegister onClick={() => navigate("/")}>
        Voltar para o Login
      </BtGoToRegister>
    </DivNotFound>
  );
};

export default NotFound;
