import React from "react";
import logo from "../../img/Mask Group.png";
import groupImg from "../../img/Group 135.png";
import {
  DivBoxBag,
  DivBoxFlex,
  DivContainer,
  DivImgBag,
  DivBox,
  GroupImg,
} from "./style";
import bagShopping from "../../img/shopping-bag.png";
import FormLogin from "../../components/Form/FormLogin";

const Login = () => {
  return (
    <DivContainer>
      <DivBoxFlex>
        <DivBox>
          <img src={logo} alt="" />
          <DivBoxBag>
            <DivImgBag>
              <img src={bagShopping} alt="" />
            </DivImgBag>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os melhores
              ingredientes.
            </p>
          </DivBoxBag>
          <GroupImg src={groupImg} alt="" />
        </DivBox>

        <FormLogin />
      </DivBoxFlex>
    </DivContainer>
  );
};

export default Login;
