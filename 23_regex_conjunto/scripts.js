const reg1  = /[12345]/;

console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));
console.log(reg1.test("Temos o número 3"));
console.log(reg1.test("Temos o número 43"));
console.log(reg1.test("Temos o número 51"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 41389417894389"));
console.log(reg2.test("temos numero"));