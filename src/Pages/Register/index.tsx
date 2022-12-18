import React from "react";
import {
  DivBox,
  DivBoxBag,
  DivBoxFlex,
  DivContainer,
  DivImgBag,
  GroupImg,
} from "./style";
import logo from "../../img/Mask Group.png";
import groupImg from "../../img/Group 135.png";
import bagShopping from "../../img/shopping-bag.png";
import FormRegister from "../../components/Form/FormRegister";

const Register = () => {
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

        <FormRegister />
      </DivBoxFlex>
    </DivContainer>
  );
};

export default Register;
