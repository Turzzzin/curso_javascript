const pessoa = {
    maos: 2,
}
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos);

// O objeto "pessoaNova" tem acesso as propriedades do objeto "pessoa", mas ele não POSSUI para ele
console.log(pessoaNova.hasOwnProperty('maos'));
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);

// O objeto pessoa é o "pai" do pessoaNova, então pessoa é prototype do pessoaNova

