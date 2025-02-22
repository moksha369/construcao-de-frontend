
//Teste de uma função asyncrona 


 async function exibiMensagem(texto) {
    await new Promise((r) => setTimeout(r, x));
    console.log("Esperou" + x + "ms");
}

async function main() {
    console.log("começou!");
    await espera (3000);
    console.log("terminou!");
}

main();