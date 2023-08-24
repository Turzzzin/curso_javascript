class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero (4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }
    latir(){
        console.log("au au");
    }
}

let pug = new Cachorro(4, "Pug");

console.log(pug.patas)

pug.latir();

console.log(pug instanceof Mamifero);

// instanceof -> verificar quem é o pai do objeto