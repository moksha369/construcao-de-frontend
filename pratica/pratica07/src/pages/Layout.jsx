import { Outlet } from "react-router-dom";
import Conteudo from "../components/Conteudo";
import Cabecalho from "../components/Cabecalho";
import Menu from "../components/Menu";

function Layout() {
    return (
        <>
            <Cabecalho />
            <Conteudo>
                <Menu />
                <Outlet />

            </Conteudo>
        </>
    );
}

export default Layout;