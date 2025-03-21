function Botao(Props){
    return(
        <button onClick={props.aoClicar}>{props.texto}</button>
    );
}

export default Botao;