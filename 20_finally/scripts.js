// let b = 2;

try {
    let a = 2 + b
} catch(e) {
    console.log(e); // -> dá pra explicitar o erro, 
} finally {
    console.log("Executou mesmo caindo no erro!")
}

