function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error("O parâmetro nome precisa ser uma string.");
    }   else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao ("Artur");
saudacao(5);

console.log("teste");