let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log("Auau");
    }
}

let labrador = Object.create(cachorro);

labrador.latir();
labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(cachorro.raca);

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao.raca);

// Pastor alemão é um outro objeto instanciado a partir da classe "cachorro"