function InputEmail(){
    return (
        <>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="senha">Senha...</label>
            <input type="password" id="senha" name="senha" required />
        </>
    );
}

export default InputEmail;