class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("au au");
    }

    get getCor() {
        return this.cor;
    }
    set setCor(cor) {
        this.cor = cor;
    }

}

let pastor = new Cachorro('Pastor Alemão', 'Sem Cor');

console.log(pastor);

pastor.setCor = prompt("Digite a cor");
console.log(pastor.getCor);
