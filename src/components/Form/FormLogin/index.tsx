import React from "react";
import { BtEntry, BtGoToRegister } from "../../Button/style";
import Input from "../../Input";
import { LoginForm } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { SubmitHandler } from "react-hook-form/dist/types";

interface iDataLogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Este campo é obrigatorio!")
      .email("É necessario inserir um email valido."),
    password: yup
      .string()
      .required("Este campo é obrigatorio!")
      .matches(/(?=.*?[A-z])/, "É necessário uma letra maiúscula")
      .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula")
      .matches(/(?=.*?[0-9])/, "Insira pelo menos um dígito")
      .matches(/(?=.*?[#?!@$%^&*-])/, "Insira um caractere especial")
      .matches(/.{8,}/, "É necessario no mínimo 8 caracteres"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iDataLogin>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iDataLogin> = async (data) => {
    await userLogin(data);
    if (localStorage.getItem("@TOKEN")) {
      setTimeout(() => {
        navigate("/home");
      }, 4000);
      reset();
    } else {
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }
    reset();
  };

  function goToRegister() {
    navigate("/register");
  }

  return (
    <LoginForm onSubmit={handleSubmit(submit)} noValidate>
      <h3>Login</h3>
      <Input
        id="email"
        label="Email"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("email")}
      />
      {errors.email?.message && <small>{errors.email.message} </small>}
      <Input
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
      />
      {errors.password?.message && <small>{errors.password.message}</small>}
      <BtEntry>Logar</BtEntry>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <BtGoToRegister onClick={() => goToRegister()}>Cadastrar</BtGoToRegister>
    </LoginForm>
  );
};

export default FormLogin;
