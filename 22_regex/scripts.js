const reg1 = new RegExp('bola');

console.log(reg1.test('tem bola?'));
console.log(reg1.test('não tem!'));

console.log(/bola/.test("Será que aqui tem a palavra bola?"));