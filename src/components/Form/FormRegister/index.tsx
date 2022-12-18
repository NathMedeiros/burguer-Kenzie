import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../../Contexts/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BtGoToRegister } from "../../Button/style";
import Input from "../../Input";
import { RegisterForm, DivHeader, BackLogin } from "./style";

interface iRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormRegister = () => {
  const { UserRegister } = useContext(AuthContext);

  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Este campo é obrigatorio!")
      .min(3, "O nome precisa ter no minimo 3 caracteres.")
      .max(100, "O nome pode ter no maximo 100 caracteres."),
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
    confirmPassword: yup
      .string()
      .required("Este campo é obrigatorio!")
      .oneOf([yup.ref("password"), null], "A senha não confere"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterForm>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterForm> = async (data) => {
    const response = { ...data };
    UserRegister(response);
    reset();
  };

  return (
    <RegisterForm onSubmit={handleSubmit(submit)} noValidate>
      <DivHeader>
        <h3>Cadastro</h3>
        <BackLogin to={"/"}>Retomar para o login</BackLogin>
      </DivHeader>

      <Input
        id="name"
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("name")}
      />
      {errors.name?.message && <small>{errors.name.message}</small>}
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
      />
      {errors.email?.message && <small>{errors.email.message}</small>}
      <Input
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
      />
      {errors.password?.message && <small>{errors.password.message}</small>}
      <Input
        id="confirmPassword"
        label="Confirmar senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("confirmPassword")}
      />
      {errors.confirmPassword?.message && (
        <small>{errors.confirmPassword.message}</small>
      )}
      <BtGoToRegister>Cadastrar</BtGoToRegister>
    </RegisterForm>
  );
};

export default FormRegister;
