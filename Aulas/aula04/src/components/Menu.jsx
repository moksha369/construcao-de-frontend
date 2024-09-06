import Link from "./link";

function Menu() {
    const opcoes = ["Home", "Perfil", "Sair"];
    return (
        <nav>
            <ul>
                {opcoes.map((opcao, index) => (
                <li key={index}>
                    <Link text={opcao} />
                </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;