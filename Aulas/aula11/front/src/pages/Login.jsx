import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Formulario from "./Formulario";

function Login() {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const { login } = useContext(AuthContext);

  const onEntrar = (data) => {
    login(data);
    if (!erro) {
      setMsg("");
      navigate("/home");
  } else {
    setMsg(erro);
  }
}

  return (
    <>
      <h1>Login</h1>
      {msg}
      <Formulario onEnviar={onEntrar} texto="Entrar" />
        <Link to="/registrar">Registrar</Link>
    </>
  );
}

export default Login;
