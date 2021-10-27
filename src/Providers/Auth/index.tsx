import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

interface UserData {
  email: string;
  password: string;
}

interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  // Dessa forma adicionamos ao state o token caso ele exista no localStorage
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );
  // Função para logar na aplicação, recebe os dados pegos do form de login
  const signIn = (userData: UserData) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        // setamos no localStorage o token, caso tenhamos a resposta esperada
        localStorage.setItem("token", response.data.token);
        // setamos no state o token, caso tenhamos a resposta esperada
        setAuthToken(response.data.token);

        //redericionar pra pagina logada
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  //função para deslogar
  const Logout = () => {
    //limpar localStorage
    localStorage.clear();
    //limpando o state
    setAuthToken("");
    //voltando para login
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
