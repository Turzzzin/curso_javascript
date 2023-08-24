class Endereco{
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    
    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }

}

let endereco = new Endereco ("Rua Jacinto Pinto", "Liberdade", "São Paulo", "SP")

console.log(endereco);

novaRua = prompt("Digite uma nova rua: ");
novoBairro = prompt("Digite um novo bairro: ");
novaCidade = prompt("Digite uma nova cidade: ");
novoEstado = prompt("Digite um novo estado: ");

console.log(endereco);