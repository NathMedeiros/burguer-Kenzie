import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Lib";

interface iContexxtProps {
  user: iUser | null;
  loading: boolean;
  UserRegister: (data: iRegisterData) => void;
  userLogin: (data: iDataLogin) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iDataLogin {
  email: string;
  password: string;
}

interface iChildren {
  children: React.ReactNode;
}

interface iUser {
  email: string;
  id: string;
  name: string;
}

interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface iRespRegister {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
export const AuthContext = createContext({} as iContexxtProps);

export const AuthProvider = ({ children }: iChildren) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);

  const navigate = useNavigate();

  const userLogin = async (data: iDataLogin) => {
    try {
      setLoading(true);
      const response = await api.post<iRespRegister>("login", data);

      const { accessToken, user: userResponse } = response.data;
      setUser(userResponse);

      localStorage.setItem("@TOKEN", accessToken);

      toast.success("Login realizado com sucesso!");

      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  async function UserRegister(data: iRegisterData) {
    try {
      setLoading(true);
      await api.post<iRespRegister>("/users", data);
      toast.success("Usuario Cadastrado");

      navigate("/");
    } catch (error) {
      toast.error("tente novamente");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setLoading,
        userLogin,
        UserRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
