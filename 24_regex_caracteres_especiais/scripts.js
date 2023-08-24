const pontoRegex = /./; // QUALQUER CARACTERE

console.log("PONTO REGEX")
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asd"));

console.log("dREGEX")
const dRegex = /\d/; // [0-9]

console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

console.log("DREGEX")
const DRegex = /\D/; // CARACTERES QUE NÃO SÃO DÍGITOS

console.log(DRegex.test("asd"));
console.log(DRegex.test(" "));
console.log(DRegex.test("123"));
console.log(DRegex.test("123asd"));

console.log("S REGEX")
const sRegex = /\s/; // CARACTERE DE ESPAÇO EM BRANCO

console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));

console.log("w REGEX")
const wRegex = /\w/; // CARACTERE ALFANUMÉRICO

console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));

console.log("W REGEX")
const WRegex = /\W/; // CARACTERE NÃO ALFANUMÉRICO

console.log(WRegex.test("asd"));
console.log(WRegex.test(" "));
console.log(WRegex.test("123"));
console.log(WRegex.test("123asd"));