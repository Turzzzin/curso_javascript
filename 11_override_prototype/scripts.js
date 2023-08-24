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
Cachorro.prototype.patas = 4;
Cachorro.prototype.raca = 'SRD';

let labrador = new Cachorro('Labrador', 4, 'Amarelo');
console.log(labrador.patas);
labrador.latir();
console.log(Cachorro.prototype.raca);
console.log(labrador);