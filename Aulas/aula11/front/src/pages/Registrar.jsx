import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

function Registrar() {
  const navigate = useNavigate();

  const { registrar } = useContext(AuthContext);

  const onSalvar = () => {
  registrar({ emai: "jose@iesb.br", senha: "abcd1234" });
  navigate("/home");
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={onSalvar}>Salvar</button>
      <Link to="/registrar">Registrar</Link>
    </>
  );
}

export default Registrar;
