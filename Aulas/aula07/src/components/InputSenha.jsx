function InputSenha(props) {
    const regras = { 
        required: { value: true, message: "Senha é obrigatória"},
        minLength: { 
            value: 6, 
            message: "A senha deve ter no mínimo 6 caracteres"
        },
    };
    return (
      <>
        <label htmlFor="password">Senha</label>
        <input type="password" {...props.register("senha", regras)} />
        {props.error && <p>{props.error.message}</p>}
      </>  
    );
}

export default InputSenha;