import React from "react";
import { Fieldset } from "./style";

import { UseFormRegisterReturn } from "react-hook-form";

interface iIputProps {
  id: string;
  label: string;
  type: "text" | "name" | "email" | "password";
  placeholder: string;
  register: UseFormRegisterReturn;
  //   disabled: boolean;
}

const Input = ({
  id,
  label,
  type,
  placeholder,
  register,
}: // ,
//   disabled,
iIputProps) => {
  return (
    <Fieldset>
      <label htmlFor={id}>{label}</label>

      <input
        type={type}
        // disabled={disabled}
        placeholder={placeholder}
        id={id}
        {...register}
      />
    </Fieldset>
  );
};

export default Input;
