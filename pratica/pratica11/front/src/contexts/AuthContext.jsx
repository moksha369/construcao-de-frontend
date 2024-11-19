import { createContext, useState } from "react";
import { autenticar, registrar, atualizar } from "../services/AuthService";

const AuthContext = createContext();

function AuthProvider(props) {
  const [usuario, setUsuario] = useState({
    id: null,
    email: null,
    logado: false,
    token: null,
  });

  function login(usuario) {
    const login = async (usuario) => {
      const resposta = await autenticar(usuario);
      if (resposta.sucesso) {
        setUsuario({
          id: resposta.dados.user.id,
          email: resposta.dados.user.email,
          logado: true,
          token: resposta.dados.accessToken,
        });
        return "";
      } else {
        return resposta.mensagem;
      }
    };
  }

  function logout(usuario) {
    const logout = async () => {
      setUsuario({ id: null, email: null, logado: false, token: null });
    };

    function signup(usuario) {
      const signup = async(usuario);
      if (resposta.sucesso) {
        setUsuario({
          id: reposta.dados.user.id,
          email: resposta.dados.user.email,
          logado: true,
          token: resposta.dados.accessToken,
        });
        return null;
      } else {
        return resposta.mensagem;
      }
    }
  }

  function update(usuario) {
    const update = async (usuario) => {
      const resposta = await atualizar(usuario);
      if (resposta.sucesso) {
        return null;
      } else {
        return resposta.mensagem;
      }
    };
  }

  const contexto = { usuario, login, logout, signup, update };

  return <AuthContext.Provider value={contexto}></AuthContext.Provider>;
}
