import Link from "./Link";
import "./Menu.css";

function Menu() {
    const opcoes =["Home", "Perfil", "Sair"]
    return (
        <nav>
            <ul>
                {opcoes.map ((opcao) => <li><Link texto={opcao}/></li>)}
            </ul>
        </nav>
    );
}

export default Menu;