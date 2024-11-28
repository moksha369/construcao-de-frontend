import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Registrar() {
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const { signup } = useContext(AuthContext);


    const onConfirmar = async (data) => {
        const resultado = await signup(data);
        if (resultado) {
            setErro(resultado);
        } else {
            setErro("");
            navigate("/home");
        }
    }

    return (
        <>
            <h1>Registrar</h1>
            {erro && <p>{erro}</p>}
            <Formulario onEnviar={onConfirmar} texto="Confirmar"} />
            <Link to="/login">Voltar</Link>

        </>
    );
}

export default Registrar;