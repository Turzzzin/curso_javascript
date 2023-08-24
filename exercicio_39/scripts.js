class Carro {
    constructor(marca, cor, gasolinaRestante, consumoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumoMedio = consumoMedio;
    }

    dirigir(km) {

        let litrosConsumidos = km / this.consumoMedio;

        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(litros) {
        this.gasolinaRestante += litros;
    }
}

let carro = new Carro("VW", "cinza", 100, 14);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(40);

console.log(carro);