class Cachorro 
{
    constructor(raca, cor)
    {
        this.raca = raca;
        this.cor = cor;
    }

    latir()
    {
        console.log("au au");
    }
}
Cachorro.prototype.raca = 'SRD';

let patas = Symbol();
Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 4, 'Amarelo');
console.log(labrador.patas);
labrador.latir();
console.log(Cachorro.prototype.raca);

// acessando symbol
console.log(Cachorro.prototype[patas]);
console.log(labrador[patas]);