import { useContext, useState } from "react";

function ListTarefa() {
    return (
        <ul>
            {tarefas.map((item, index) => <li key={index}>{item}<button onClick={() => remover(item)}>Remover</button></li>)}
        </ul>
    );
}

export default ListTarefa;